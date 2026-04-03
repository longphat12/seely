'use client'
import { useState } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import Link from 'next/link'
import { apiFetch } from '@/hooks/api'
import { timeAgo } from '@/hooks/utils'

interface AuditMetrics {
  ogImage: string | null;
  metaDescription: string | null;
}
interface Audit {
  title: string | null;
  url: string;
  source: string;
  createdAt: string;
  metrics: AuditMetrics | null;
}
interface Project {
  id: string; name: string; domain: string; createdAt: string; updatedAt: string;
  audits?: Audit[];
}

export default function ProjectsPage() {
  const queryClient = useQueryClient()
  const [scanUrl, setScanUrl] = useState('')
  const [filterType, setFilterType] = useState('ALL') // ALL | EXTENSION | MANUAL

  const { data: projects, isLoading } = useQuery<Project[]>({
    queryKey: ['projects'],
    queryFn: () => apiFetch('/api/projects'),
  })

  const scanMutation = useMutation({
    mutationFn: (url: string) => apiFetch('/api/audits/manual', { method: 'POST', body: JSON.stringify({ url }) }),
    onSuccess: () => {
      setScanUrl('')
      queryClient.invalidateQueries({ queryKey: ['projects'] })
    },
    onError: (err) => alert(err instanceof Error ? err.message : 'Lỗi khi quét')
  })

  function handleScan(e: React.FormEvent) {
    e.preventDefault()
    if (!scanUrl.trim()) return
    scanMutation.mutate(scanUrl.trim())
  }

  const filteredProjects = projects?.filter((p) => {
    if (filterType === 'ALL') return true
    const s = p.audits?.[0]?.source
    if (filterType === 'EXTENSION' && s === 'EXTENSION') return true
    if (filterType === 'MANUAL' && (s === 'MANUAL' || s === 'API')) return true
    // If project has no audits, should it be shown? Just show if ALL.
    return false
  })

  return (
    <>
      <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 className="page-title">Dự án</h1>
          <p className="page-subtitle">Quản lý trang web và các bản báo cáo SEO của bạn</p>
        </div>
      </div>
      {/* Quick Action Toolbar */}
      <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 32, padding: 24, borderRadius: 12 }}>
        <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', alignItems: 'flex-end' }}>
          
          <form onSubmit={handleScan} style={{ display: 'flex', gap: 12, flex: 1, minWidth: 320 }}>
            <div style={{ flex: 1 }}>
              <label style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 8, display: 'block', fontWeight: 600 }}>
                QUÉT NHANH ĐƯỜNG DẪN BẤT KỲ
              </label>
              <div style={{ position: 'relative' }}>
                <span style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', opacity: 0.5, fontSize: 16 }}>🔗</span>
                <input 
                  type="url" 
                  placeholder="https://example.com" 
                  value={scanUrl}
                  onChange={(e) => setScanUrl(e.target.value)}
                  style={{ width: '100%', padding: '12px 16px 12px 44px', borderRadius: 8, border: '1px solid var(--border)', outline: 'none', background: 'var(--surface)', color: 'var(--text)', transition: 'border-color 0.2s', fontSize: 14 }}
                  onFocus={(e) => Object.assign(e.target.style, { borderColor: 'var(--primary)' })}
                  onBlur={(e) => Object.assign(e.target.style, { borderColor: 'var(--border)' })}
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary" style={{ height: 44, alignSelf: 'flex-end', padding: '0 24px', fontWeight: 600 }} disabled={scanMutation.isPending}>
              {scanMutation.isPending ? '⏳ Đang quét...' : '🚀 Quét'}
            </button>
          </form>

          <div style={{ minWidth: 240 }}>
            <label style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 8, display: 'block', fontWeight: 600 }}>
              BỘ LỌC HIỂN THỊ
            </label>
            <div style={{ position: 'relative' }}>
              <select 
                value={filterType} 
                onChange={(e) => setFilterType(e.target.value)}
                style={{ width: '100%', padding: '12px 36px 12px 16px', borderRadius: 8, border: '1px solid var(--border)', background: 'var(--surface)', color: 'var(--text)', outline: 'none', appearance: 'none', cursor: 'pointer', fontSize: 14, fontWeight: 500 }}
              >
                <option value="ALL">📦 Tất cả bài kiểm tra</option>
                <option value="EXTENSION">🏆 Điểm SEO (Tiện ích)</option>
                <option value="MANUAL">⚡️ Chia sẻ (Quét nhanh)</option>
              </select>
              <span style={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', opacity: 0.5, fontSize: 12 }}>▼</span>
            </div>
          </div>
        </div>
      </div>

      {isLoading && <div className="debug-loading" style={{ marginTop: 40 }}><div className="debug-loading-pulse" /><p>Đang tải danh sách dự án...</p></div>}

      {filteredProjects && filteredProjects.length === 0 && (
        <div className="empty-state">
          <p style={{ fontSize: 48, marginBottom: 16 }}>📊</p>
          <p style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>Chưa có dự án nào</p>
          <p style={{ color: 'var(--text-muted)' }}>Cài đặt tiện ích Seely hoặc nhập URL phía trên để thực hiện kiểm tra.</p>
        </div>
      )}

      {filteredProjects && filteredProjects.length > 0 && (
        <div className="seo-grid">
          {filteredProjects.map((p) => {
            const latestAudit = p.audits?.[0];
            const title = latestAudit?.title || p.name;
            const desc = latestAudit?.metrics?.metaDescription || 'Không có mô tả';
            const imgUrl = latestAudit?.metrics?.ogImage;
            const timeStr = timeAgo(p.updatedAt);
            const source = latestAudit?.source;
            const sourceLabel = source === 'EXTENSION' ? 'Tiện ích' : source ? 'Quét nhanh' : '';
            const isManual = source !== 'EXTENSION';

            return (
              <Link href={`/projects/${p.id}`} key={p.id} className="seo-card">
                <div className="seo-card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontWeight: 600, color: 'var(--text)' }}>{p.domain}</span>
                  {sourceLabel && (
                    <span style={{ 
                      fontSize: 11, fontWeight: 600, padding: '4px 10px', borderRadius: 20, 
                      background: isManual ? 'var(--primary-muted, rgba(59, 130, 246, 0.1))' : 'rgba(16, 185, 129, 0.1)', 
                      color: isManual ? 'var(--primary, #3b82f6)' : '#10b981',
                      border: `1px solid ${isManual ? 'var(--primary-muted, rgba(59, 130, 246, 0.2))' : 'rgba(16, 185, 129, 0.2)'}`
                    }}>
                      {isManual ? '⚡️ ' : '🛠 '}
                      {sourceLabel}
                    </span>
                  )}
                </div>
                
                <div className="seo-card-image-wrap">
                  {imgUrl ? (
                    <img src={imgUrl} alt={title} className="seo-card-image" loading="lazy" />
                  ) : (
                    <div className="seo-placeholder">Không có ảnh xem trước</div>
                  )}
                </div>

                <div className="seo-card-body">
                  <div className="seo-card-title">{title}</div>
                  <div className="seo-card-desc">{desc}</div>
                  
                  <div className="seo-card-footer">
                    <div className="seo-card-domain">{p.domain}</div>
                    <div className="seo-card-time">{timeStr}</div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      )}
    </>
  )
}

