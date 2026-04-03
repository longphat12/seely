'use client'
import { useEffect, useRef, useState } from 'react'
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

export default function DebugSharingPage() {
  const searchParams = useSearchParams()
  const [url, setUrl] = useState('')
  const [result, setResult] = useState<DebugResult | null>(null)
  const [loading, setLoading] = useState(false)
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
      <div className="debug-search-bar">
        <div className="debug-search-icon">🔍</div>
        <input
          id="debug-url-input"
          type="text"
          className="debug-search-input"
          placeholder="Nhập URL cần kiểm tra (vd: https://example.com)"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          id="debug-check-btn"
          className="debug-search-btn"
          onClick={handleCheck}
          disabled={loading || !url.trim()}
        >
          {loading ? (
            <span className="debug-spinner" />
          ) : (
            'Kiểm tra'
          )}
        </button>
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
        <div className="debug-results">
          {/* Status Banner */}
          <div className={`debug-status ${result.statusCode >= 200 && result.statusCode < 400 ? 'debug-status-ok' : 'debug-status-err'}`}>
            <div className="debug-status-left">
              <span className="debug-status-code">{result.statusCode}</span>
              <span className="debug-status-url">{result.fetchedUrl}</span>
            </div>
            <button className="debug-recrawl-btn" onClick={handleCheck} title="Thu thập lại">
              🔄 Thu thập lại
            </button>
          </div>

          {/* ── Warnings ── */}
          {result.warnings.length > 0 && (
            <div className="debug-warnings-card">
              <h3 className="debug-section-title">
                <span>⚠️</span> Cảnh báo ({result.warnings.length})
              </h3>
              <div className="debug-warnings-list">
                {result.warnings.map((w, i) => (
                  <div key={i} className="debug-warning-item">
                    <span className="debug-warning-dot" />
                    <span>{w}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── Platform Preview Tabs ── */}
          <div className="debug-preview-card">
            <h3 className="debug-section-title">
              <span>👁️</span> Xem trước khi chia sẻ
            </h3>
            <div className="debug-platform-tabs">
              {platforms.map((p) => (
                <button
                  key={p.key}
                  className={`debug-platform-tab ${activePlatform === p.key ? 'active' : ''}`}
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
          <div className="debug-meta-card">
            <h3 className="debug-section-title">
              <span>📋</span> Thông tin metadata
            </h3>
            <div className="debug-meta-grid">
              {/* Open Graph */}
              <div className="debug-meta-section">
                <h4 className="debug-meta-section-title">Open Graph</h4>
                <div className="debug-meta-table">
                  {[
                    { label: 'og:title', value: result.og.title },
                    { label: 'og:description', value: result.og.description },
                    { label: 'og:image', value: result.og.image },
                    { label: 'og:url', value: result.og.url },
                    { label: 'og:site_name', value: result.og.siteName },
                    { label: 'og:type', value: result.og.type },
                  ].map((row) => (
                    <div key={row.label} className="debug-meta-row">
                      <div className="debug-meta-key">{row.label}</div>
                      <div className={`debug-meta-value ${!row.value ? 'debug-meta-missing' : ''}`}>
                        {row.value || '⚠️ Không có'}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Twitter Card */}
              <div className="debug-meta-section">
                <h4 className="debug-meta-section-title">Twitter Card</h4>
                <div className="debug-meta-table">
                  {[
                    { label: 'twitter:card', value: result.twitter.card },
                    { label: 'twitter:title', value: result.twitter.title },
                    { label: 'twitter:description', value: result.twitter.description },
                    { label: 'twitter:image', value: result.twitter.image },
                  ].map((row) => (
                    <div key={row.label} className="debug-meta-row">
                      <div className="debug-meta-key">{row.label}</div>
                      <div className={`debug-meta-value ${!row.value ? 'debug-meta-missing' : ''}`}>
                        {row.value || '⚠️ Không có'}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Basic Meta */}
              <div className="debug-meta-section">
                <h4 className="debug-meta-section-title">Thông tin cơ bản</h4>
                <div className="debug-meta-table">
                  {[
                    { label: '<title>', value: result.title },
                    { label: 'meta description', value: result.description },
                    { label: 'favicon', value: result.favicon },
                  ].map((row) => (
                    <div key={row.label} className="debug-meta-row">
                      <div className="debug-meta-key">{row.label}</div>
                      <div className={`debug-meta-value ${!row.value ? 'debug-meta-missing' : ''}`}>
                        {row.value || '⚠️ Không có'}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── All Meta Tags ── */}
          {result.allMeta.length > 0 && (
            <details className="debug-all-meta">
              <summary className="debug-all-meta-summary">
                📑 Tất cả thẻ meta ({result.allMeta.length})
              </summary>
              <div className="debug-all-meta-content">
                <div className="table-wrapper">
                  <table>
                    <thead>
                      <tr>
                        <th>Property / Name</th>
                        <th>Content</th>
                      </tr>
                    </thead>
                    <tbody>
                      {result.allMeta.map((m, i) => (
                        <tr key={i}>
                          <td>
                            <code className="debug-meta-code">{m.property || m.name || '—'}</code>
                          </td>
                          <td className="debug-meta-td-content">{m.content || '—'}</td>
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
