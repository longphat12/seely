'use client'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { apiFetch } from '@/hooks/api'
import { scoreColor, timeAgo } from '@/hooks/utils'

interface PageDetail {
  id: string; projectId: string; normalizedUrl: string; path: string
}
interface AuditItem {
  id: string; url: string; overallScore: number; onPageScore: number; technicalScore: number;
  contentScore: number; performanceScore: number; source: string; createdAt: string
}

export default function PageDetailPage() {
  const { pageId } = useParams<{ pageId: string }>()

  const { data: page } = useQuery<PageDetail>({
    queryKey: ['page', pageId],
    queryFn: () => apiFetch(`/api/pages/${pageId}`),
  })

  const { data: audits } = useQuery<AuditItem[]>({
    queryKey: ['page-audits', pageId],
    queryFn: () => apiFetch(`/api/pages/${pageId}/audits`),
  })

  if (!page) return <p style={{ color: 'var(--text-muted)' }}>Loading...</p>

  return (
    <>
      <div className="page-header">
        <Link href={`/projects/${page.projectId}/pages`} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'var(--text-muted)', marginBottom: 12, fontWeight: 600 }}>
          <span>←</span> Quay lại danh sách trang
        </Link>
        <h1 className="page-title" style={{ wordBreak: 'break-all' }}>{page.path}</h1>
        <p className="page-subtitle">{page.normalizedUrl}</p>
      </div>

      <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
        <div style={{ padding: '20px 24px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ fontSize: 16, fontWeight: 700 }}>Lịch sử kiểm tra (Audits)</h3>
          <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{audits?.length || 0} bản ghi</div>
        </div>
        
        {audits && audits.length === 0 && (
          <div className="empty-state" style={{ padding: '60px 24px' }}>
            <p>Chưa có bản quét nào cho trang này.</p>
          </div>
        )}

        {audits && audits.length > 0 && (
          <div className="table-wrapper">
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: 'var(--surface-2)' }}>
                  <th style={{ padding: '12px 24px', textAlign: 'left', fontSize: 12 }}>ĐIỂM TỔNG</th>
                  <th style={{ padding: '12px 24px', textAlign: 'left', fontSize: 12 }}>ON-PAGE</th>
                  <th style={{ padding: '12px 24px', textAlign: 'left', fontSize: 12 }}>TECHNIC</th>
                  <th style={{ padding: '12px 24px', textAlign: 'left', fontSize: 12 }}>CONTENT</th>
                  <th style={{ padding: '12px 24px', textAlign: 'left', fontSize: 12 }}>PERF.</th>
                  <th style={{ padding: '12px 24px', textAlign: 'left', fontSize: 12 }}>NGUỒN</th>
                  <th style={{ padding: '12px 24px', textAlign: 'left', fontSize: 12 }}>THỜI GIAN</th>
                  <th style={{ padding: '12px 24px', textAlign: 'left', fontSize: 12 }}></th>
                </tr>
              </thead>
              <tbody>
                {audits.map((a) => (
                  <tr key={a.id} style={{ borderBottom: '1px solid var(--border)', transition: 'background 0.2s' }}>
                    <td style={{ padding: '16px 24px' }}>
                      <div className={scoreColor(a.overallScore)} style={{ fontSize: 18, fontWeight: 800 }}>{a.overallScore}</div>
                    </td>
                    <td style={{ padding: '16px 24px' }}>
                      <span className={scoreColor(a.onPageScore)} style={{ fontWeight: 600 }}>{a.onPageScore}</span>
                    </td>
                    <td style={{ padding: '16px 24px' }}>
                      <span className={scoreColor(a.technicalScore)} style={{ fontWeight: 600 }}>{a.technicalScore}</span>
                    </td>
                    <td style={{ padding: '16px 24px' }}>
                      <span className={scoreColor(a.contentScore)} style={{ fontWeight: 600 }}>{a.contentScore}</span>
                    </td>
                    <td style={{ padding: '16px 24px' }}>
                      <span className={scoreColor(a.performanceScore)} style={{ fontWeight: 600 }}>{a.performanceScore}</span>
                    </td>
                    <td style={{ padding: '16px 24px' }}>
                      <span style={{ 
                        fontSize: 10, 
                        fontWeight: 700, 
                        padding: '4px 8px', 
                        borderRadius: 4, 
                        background: a.source === 'EXTENSION' ? 'rgba(99,102,241,0.1)' : 'rgba(34, 197, 94, 0.1)',
                        color: a.source === 'EXTENSION' ? 'var(--primary-light)' : 'var(--success)',
                        border: `1px solid ${a.source === 'EXTENSION' ? 'rgba(99,102,241,0.2)' : 'rgba(34, 197, 94, 0.2)'}`
                      }}>
                        {a.source === 'EXTENSION' ? 'TIỆN ÍCH' : 'QUÉT NHANH'}
                      </span>
                    </td>
                    <td style={{ padding: '16px 24px', color: 'var(--text-muted)', fontSize: 13 }}>
                      {timeAgo(a.createdAt)}
                    </td>
                    <td style={{ padding: '16px 24px', textAlign: 'right' }}>
                      <Link href={`/audits/${a.id}`} className="btn btn-sm btn-secondary" style={{ borderRadius: 6 }}>
                        Xem báo cáo
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  )
}
