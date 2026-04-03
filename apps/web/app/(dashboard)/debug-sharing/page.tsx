'use client'
import { Suspense, useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { apiFetch } from '@/hooks/api'

interface OgData {
  title: string | null
  description: string | null
  image: string | null
  url: string | null
  siteName: string | null
  type: string | null
}

interface TwitterData {
  card: string | null
  title: string | null
  description: string | null
  image: string | null
}

interface MetaTag {
  property?: string
  name?: string
  content?: string
}

interface DebugResult {
  url: string
  fetchedUrl: string
  statusCode: number
  title: string | null
  description: string | null
  favicon: string | null
  og: OgData
  twitter: TwitterData
  allMeta: MetaTag[]
  warnings: string[]
}

type Platform = 'facebook' | 'zalo' | 'twitter'

function DebugSharingPageContent() {
  const searchParams = useSearchParams()
  const [url, setUrl] = useState('')
  const [result, setResult] = useState<DebugResult | null>(null)
  const [loading, setLoading] = useState(false)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [activePlatform, setActivePlatform] = useState<Platform>('facebook')
  const hasAutoChecked = useRef(false)

  async function handleCheck() {
    if (!url.trim()) return
    setError('')
    setLoading(true)
    setResult(null)
    try {
      const data = await apiFetch<DebugResult>('/api/debug-sharing', {
        method: 'POST',
        body: JSON.stringify({ url: url.trim() }),
      })
      setResult(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Có lỗi xảy ra')
    } finally {
      setLoading(false)
    }
  }

  async function handleSave() {
    if (!result?.fetchedUrl) return
    setSaving(true)
    try {
      await apiFetch('/api/audits/manual', {
        method: 'POST',
        body: JSON.stringify({ url: result.fetchedUrl })
      })
      alert('Đã lưu thành công vào Dự án!')
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Lỗi khi lưu')
    } finally {
      setSaving(false)
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter') handleCheck()
  }

  useEffect(() => {
    const initialUrl = searchParams.get('url')?.trim()
    if (!initialUrl) return

    setUrl((currentUrl) => currentUrl || initialUrl)

    if (hasAutoChecked.current) return
    hasAutoChecked.current = true

    void (async () => {
      setError('')
      setLoading(true)
      setResult(null)
      try {
        const data = await apiFetch<DebugResult>('/api/debug-sharing', {
          method: 'POST',
          body: JSON.stringify({ url: initialUrl }),
        })
        setResult(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Có lỗi xảy ra')
      } finally {
        setLoading(false)
      }
    })()
  }, [searchParams])

  function getPreviewTitle(r: DebugResult, platform: Platform): string {
    if (platform === 'twitter') return r.twitter.title || r.og.title || r.title || 'Không có tiêu đề'
    return r.og.title || r.title || 'Không có tiêu đề'
  }

  function getPreviewDesc(r: DebugResult, platform: Platform): string {
    if (platform === 'twitter') return r.twitter.description || r.og.description || r.description || ''
    return r.og.description || r.description || ''
  }

  function getPreviewImage(r: DebugResult, platform: Platform): string | null {
    if (platform === 'twitter') return r.twitter.image || r.og.image
    return r.og.image
  }

  function getDomain(url: string): string {
    try {
      return new URL(url).hostname
    } catch {
      return url
    }
  }

  const platforms: { key: Platform; label: string; icon: string }[] = [
    { key: 'facebook', label: 'Facebook', icon: '📘' },
    { key: 'zalo', label: 'Zalo', icon: '💬' },
    { key: 'twitter', label: 'Twitter / X', icon: '🐦' },
  ]

  return (
    <>
      <div className="page-header">
        <h1 className="page-title">🔗 Công cụ gỡ lỗi chia sẻ</h1>
        <p className="page-subtitle">
          Kiểm tra cách trang web hiển thị khi được chia sẻ lên mạng xã hội
        </p>
      </div>

      {/* ── Search Bar ── */}
      <div className="card" style={{ padding: '24px', borderRadius: 12, marginBottom: 32 }}>
        <label style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 8, display: 'block', fontWeight: 600 }}>
          NHẬP URL ĐỂ KIỂM TRA HIỂN THỊ CHIA SẺ
        </label>
        <div style={{ display: 'flex', gap: 12 }}>
          <div style={{ position: 'relative', flex: 1 }}>
            <span style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', opacity: 0.5, fontSize: 16 }}>🔍</span>
            <input
              id="debug-url-input"
              type="text"
              style={{ 
                width: '100%', 
                padding: '12px 16px 12px 44px', 
                borderRadius: 8, 
                border: '1px solid var(--border)', 
                outline: 'none', 
                background: 'var(--surface)', 
                color: 'var(--text)',
                fontSize: 14,
                transition: 'border-color 0.2s'
              }}
              placeholder="https://example.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>
          <button
            id="debug-check-btn"
            className="btn btn-primary"
            style={{ height: 44, padding: '0 24px', fontWeight: 600 }}
            onClick={handleCheck}
            disabled={loading || !url.trim()}
          >
            {loading ? <span className="debug-spinner" /> : '🚀 Kiểm tra'}
          </button>
        </div>
      </div>

      {/* ── Error ── */}
      {error && (
        <div className="debug-error">
          <span>⚠️</span> {error}
        </div>
      )}

      {/* ── Loading Skeleton ── */}
      {loading && (
        <div className="debug-loading">
          <div className="debug-loading-pulse" />
          <p>Đang phân tích trang web...</p>
        </div>
      )}

      {/* ── Results ── */}
      {result && !loading && (
        <div className="debug-results animate-in">
          {/* Status Banner */}
          <div className={`card ${result.statusCode >= 200 && result.statusCode < 400 ? 'status-ok' : 'status-err'}`} style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            padding: '16px 24px',
            marginBottom: 24,
            borderLeft: `4px solid ${result.statusCode >= 200 && result.statusCode < 400 ? '#10b981' : '#ef4444'}`,
            background: 'var(--surface)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{ 
                background: result.statusCode >= 200 && result.statusCode < 400 ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                color: result.statusCode >= 200 && result.statusCode < 400 ? '#10b981' : '#ef4444',
                padding: '4px 12px',
                borderRadius: 6,
                fontWeight: 700,
                fontSize: 16
              }}>
                {result.statusCode}
              </div>
              <div style={{ overflow: 'hidden' }}>
                <div style={{ fontSize: 13, color: 'var(--text-muted)', fontWeight: 600 }}>URL ĐÃ KIỂM TRA</div>
                <div style={{ fontSize: 15, color: 'var(--text)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '500px' }}>
                  {result.fetchedUrl}
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 12 }}>
              <button className="btn btn-secondary" onClick={handleCheck} title="Thu thập lại">
                🔄 Thu thập lại
              </button>
              <button className="btn btn-primary" onClick={handleSave} disabled={saving}>
                {saving ? '⏳ Đang lưu...' : '💾 Lưu lại dự án'}
              </button>
            </div>
          </div>

          {/* ── Warnings ── */}
          {result.warnings.length > 0 && (
            <div className="card" style={{ padding: '24px', marginBottom: 24, borderLeft: '4px solid #f59e0b' }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ color: '#f59e0b' }}>⚠️</span> Cảnh báo ({result.warnings.length})
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 12 }}>
                {result.warnings.map((w, i) => (
                  <div key={i} style={{ display: 'flex', gap: 10, fontSize: 14, color: 'var(--text-muted)', background: 'var(--surface-2)', padding: '10px 14px', borderRadius: 8 }}>
                    <span style={{ color: '#f59e0b', marginTop: 2 }}>•</span>
                    <span>{w}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── Platform Preview Tabs ── */}
          <div className="card" style={{ padding: '24px', marginBottom: 24 }}>
            <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 20, display: 'flex', alignItems: 'center', gap: 8 }}>
              <span>👁️</span> Xem trước khi chia sẻ
            </h3>
            <div style={{ display: 'flex', gap: 8, marginBottom: 24, padding: 4, background: 'var(--surface-2)', borderRadius: 10, width: 'fit-content' }}>
              {platforms.map((p) => (
                <button
                  key={p.key}
                  style={{
                    padding: '8px 20px',
                    borderRadius: 8,
                    border: 'none',
                    background: activePlatform === p.key ? 'var(--surface)' : 'transparent',
                    color: activePlatform === p.key ? 'var(--primary)' : 'var(--text-muted)',
                    cursor: 'pointer',
                    fontSize: 14,
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    transition: 'all 0.2s',
                    boxShadow: activePlatform === p.key ? '0 2px 8px rgba(0,0,0,0.1)' : 'none'
                  }}
                  onClick={() => setActivePlatform(p.key)}
                >
                  <span>{p.icon}</span>
                  <span>{p.label}</span>
                </button>
              ))}
            </div>

            {/* Preview Card */}
            <div className={`debug-platform-preview debug-preview-${activePlatform}`}>
              {activePlatform === 'facebook' && (
                <div className="debug-fb-card">
                  <div className="debug-fb-image-wrap">
                    {getPreviewImage(result, 'facebook') ? (
                      <img src={getPreviewImage(result, 'facebook')!} alt="Preview" className="debug-fb-image" />
                    ) : (
                      <div className="debug-fb-no-image">
                        <span>🖼️</span>
                        <span>Không có ảnh xem trước</span>
                      </div>
                    )}
                  </div>
                  <div className="debug-fb-body">
                    <div className="debug-fb-domain">{getDomain(result.fetchedUrl).toUpperCase()}</div>
                    <div className="debug-fb-title">{getPreviewTitle(result, 'facebook')}</div>
                    <div className="debug-fb-desc">{getPreviewDesc(result, 'facebook')}</div>
                  </div>
                </div>
              )}

              {activePlatform === 'zalo' && (
                <div className="debug-zalo-card">
                  <div className="debug-zalo-bubble">
                    <div className="debug-zalo-link-card">
                      {getPreviewImage(result, 'zalo') ? (
                        <img src={getPreviewImage(result, 'zalo')!} alt="Preview" className="debug-zalo-image" />
                      ) : (
                        <div className="debug-zalo-no-image">
                          <span>🖼️</span>
                        </div>
                      )}
                      <div className="debug-zalo-info">
                        <div className="debug-zalo-title">{getPreviewTitle(result, 'zalo')}</div>
                        <div className="debug-zalo-desc">{getPreviewDesc(result, 'zalo')}</div>
                        <div className="debug-zalo-domain">{getDomain(result.fetchedUrl)}</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activePlatform === 'twitter' && (
                <div className="debug-tw-card">
                  <div className="debug-tw-image-wrap">
                    {getPreviewImage(result, 'twitter') ? (
                      <img src={getPreviewImage(result, 'twitter')!} alt="Preview" className="debug-tw-image" />
                    ) : (
                      <div className="debug-tw-no-image">
                        <span>🖼️</span>
                        <span>Không có ảnh xem trước</span>
                      </div>
                    )}
                  </div>
                  <div className="debug-tw-body">
                    <div className="debug-tw-title">{getPreviewTitle(result, 'twitter')}</div>
                    <div className="debug-tw-desc">{getPreviewDesc(result, 'twitter')}</div>
                    <div className="debug-tw-domain">{getDomain(result.fetchedUrl)}</div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* ── Metadata Table ── */}
          <div className="card" style={{ padding: '24px', marginBottom: 24 }}>
            <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 20, display: 'flex', alignItems: 'center', gap: 8 }}>
              <span>📋</span> Thông tin metadata chi tiết
            </h3>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 32 }}>
              {/* Open Graph */}
              <div>
                <h4 style={{ fontSize: 13, color: 'var(--primary)', fontWeight: 700, textTransform: 'uppercase', marginBottom: 16, borderBottom: '1px solid var(--border)', paddingBottom: 8 }}>
                  Open Graph (Facebook/Zalo)
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {[
                    { label: 'og:title', value: result.og.title },
                    { label: 'og:description', value: result.og.description },
                    { label: 'og:image', value: result.og.image },
                    { label: 'og:url', value: result.og.url },
                    { label: 'og:site_name', value: result.og.siteName },
                    { label: 'og:type', value: result.og.type },
                  ].map((row) => (
                    <div key={row.label}>
                      <div style={{ fontSize: 11, color: 'var(--text-muted)', fontWeight: 600, marginBottom: 4 }}>{row.label}</div>
                      <div style={{ 
                        fontSize: 13, 
                        padding: '8px 12px', 
                        background: row.value ? 'var(--surface-2)' : 'rgba(239, 68, 68, 0.05)', 
                        borderRadius: 6,
                        border: `1px solid ${row.value ? 'var(--border)' : 'rgba(239, 68, 68, 0.1)'}`,
                        color: row.value ? 'var(--text)' : '#ef4444',
                        wordBreak: 'break-all',
                        fontFamily: 'monospace'
                      }}>
                        {row.value || '⚠️ Không tìm thấy'}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Twitter & Basic */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
                <section>
                  <h4 style={{ fontSize: 13, color: '#1d9bf0', fontWeight: 700, textTransform: 'uppercase', marginBottom: 16, borderBottom: '1px solid var(--border)', paddingBottom: 8 }}>
                    Twitter / X Card
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {[
                      { label: 'twitter:card', value: result.twitter.card },
                      { label: 'twitter:title', value: result.twitter.title },
                      { label: 'twitter:image', value: result.twitter.image },
                    ].map((row) => (
                      <div key={row.label}>
                        <div style={{ fontSize: 11, color: 'var(--text-muted)', fontWeight: 600, marginBottom: 4 }}>{row.label}</div>
                        <div style={{ 
                          fontSize: 13, 
                          padding: '8px 12px', 
                          background: row.value ? 'var(--surface-2)' : 'rgba(239, 68, 68, 0.05)', 
                          borderRadius: 6,
                          border: `1px solid ${row.value ? 'var(--border)' : 'rgba(239, 68, 68, 0.1)'}`,
                          color: row.value ? 'var(--text)' : '#ef4444',
                          wordBreak: 'break-all',
                          fontFamily: 'monospace'
                        }}>
                          {row.value || '⚠️ Không tìm thấy'}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h4 style={{ fontSize: 13, color: 'var(--success)', fontWeight: 700, textTransform: 'uppercase', marginBottom: 16, borderBottom: '1px solid var(--border)', paddingBottom: 8 }}>
                    HTML Basic Tags
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {[
                      { label: '<title>', value: result.title },
                      { label: 'meta explanation', value: result.description },
                      { label: 'favicon', value: result.favicon },
                    ].map((row) => (
                      <div key={row.label}>
                        <div style={{ fontSize: 11, color: 'var(--text-muted)', fontWeight: 600, marginBottom: 4 }}>{row.label}</div>
                        <div style={{ 
                          fontSize: 13, 
                          padding: '8px 12px', 
                          background: row.value ? 'var(--surface-2)' : 'rgba(239, 68, 68, 0.05)', 
                          borderRadius: 6,
                          border: `1px solid ${row.value ? 'var(--border)' : 'rgba(239, 68, 68, 0.1)'}`,
                          color: row.value ? 'var(--text)' : '#ef4444',
                          wordBreak: 'break-all'
                        }}>
                          {row.value || '⚠️ Không tìm thấy'}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </div>

          {/* ── All Meta Tags ── */}
          {result.allMeta.length > 0 && (
            <details className="card" style={{ padding: '0', overflow: 'hidden', cursor: 'pointer', border: '1px solid var(--border)' }}>
              <summary style={{ padding: '16px 24px', fontWeight: 700, fontSize: 14, color: 'var(--text)', background: 'var(--surface-2)', display: 'flex', alignItems: 'center', gap: 10 }}>
                📑 Xem tất cả thẻ meta ẩn ({result.allMeta.length})
              </summary>
              <div style={{ padding: '20px', background: 'var(--surface)' }}>
                <div className="table-wrapper" style={{ borderRadius: 8, border: '1px solid var(--border)' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ background: 'var(--surface-2)' }}>
                        <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: 12, color: 'var(--text-muted)' }}>THUỘC TÍNH</th>
                        <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: 12, color: 'var(--text-muted)' }}>NỘI DUNG</th>
                      </tr>
                    </thead>
                    <tbody>
                      {result.allMeta.map((m, i) => (
                        <tr key={i} style={{ borderBottom: '1px solid var(--border)' }}>
                          <td style={{ padding: '10px 16px', fontSize: 12, color: 'var(--primary-light)', fontFamily: 'monospace' }}>
                            {m.property || m.name || '—'}
                          </td>
                          <td style={{ padding: '10px 16px', fontSize: 12, color: 'var(--text-muted)', wordBreak: 'break-all' }}>
                            {m.content || '—'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </details>
          )}
        </div>
      )}

      {/* ── Help Info ── */}
      {!result && !loading && !error && (
        <div className="debug-help">
          <div className="debug-help-icon">🌐</div>
          <h3>Kiểm tra liên kết chia sẻ</h3>
          <p>
            Công cụ này giúp bạn xem cách trang web sẽ hiển thị khi được chia sẻ trên
            Facebook, Zalo và Twitter/X.
          </p>
          <div className="debug-help-features">
            <div className="debug-help-feature">
              <span className="debug-help-feature-icon">👁️</span>
              <div>
                <strong>Xem trước</strong>
                <p>Mô phỏng giao diện chia sẻ trên nhiều nền tảng</p>
              </div>
            </div>
            <div className="debug-help-feature">
              <span className="debug-help-feature-icon">⚠️</span>
              <div>
                <strong>Cảnh báo lỗi</strong>
                <p>Phát hiện các thẻ meta bị thiếu hoặc có vấn đề</p>
              </div>
            </div>
            <div className="debug-help-feature">
              <span className="debug-help-feature-icon">📋</span>
              <div>
                <strong>Chi tiết metadata</strong>
                <p>Xem toàn bộ thẻ Open Graph, Twitter Card và meta tags</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default function DebugSharingPage() {
  return (
    <Suspense fallback={<div className="debug-loading"><div className="debug-loading-pulse" /><p>Đang tải công cụ gỡ lỗi...</p></div>}>
      <DebugSharingPageContent />
    </Suspense>
  )
}
