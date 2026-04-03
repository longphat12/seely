'use client'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { apiFetch } from '@/hooks/api'
import { timeAgo } from '@/hooks/utils'

interface PageItem {
  id: string; normalizedUrl: string; path: string; firstSeenAt: string; lastSeenAt: string
}

export default function ProjectPagesPage() {
  const { projectId } = useParams<{ projectId: string }>()

  const { data: pages, isLoading } = useQuery<PageItem[]>({
    queryKey: ['project-pages', projectId],
    queryFn: () => apiFetch(`/api/projects/${projectId}/pages`),
  })

  return (
    <>
      <div className="page-header">
        <Link href={`/projects/${projectId}`} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'var(--text-muted)', marginBottom: 12, fontWeight: 600 }}>
          <span>←</span> Quay lại dự án
        </Link>
        <h1 className="page-title">Danh sách các trang đã quét</h1>
        <p className="page-subtitle">Quản lý và xem lịch sử kiểm tra của từng trang con trong dự án</p>
      </div>

      {isLoading && (
        <div className="debug-loading" style={{ marginTop: 40 }}>
          <div className="debug-loading-pulse" />
          <p>Đang tải danh sách trang...</p>
        </div>
      )}

      {pages && pages.length === 0 && (
        <div className="card empty-state" style={{ padding: '80px 24px' }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>📄</div>
          <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8, color: 'var(--text)' }}>Chưa có trang nào được quét</h3>
          <p style={{ color: 'var(--text-muted)', maxWidth: 400, margin: '0 auto' }}>
            Sử dụng công cụ Quét nhanh hoặc Tiện ích Seely để bắt đầu thu thập dữ liệu về các trang web của bạn.
          </p>
        </div>
      )}

      {pages && pages.length > 0 && (
        <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
          <div className="table-wrapper">
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: 'var(--surface-2)' }}>
                  <th style={{ padding: '14px 24px', borderBottom: '1px solid var(--border)' }}>ĐƯỜNG DẪN (PATH)</th>
                  <th style={{ padding: '14px 24px', borderBottom: '1px solid var(--border)' }}>URL ĐẦY ĐỦ</th>
                  <th style={{ padding: '14px 24px', borderBottom: '1px solid var(--border)' }}>THẤY LẦN ĐẦU</th>
                  <th style={{ padding: '14px 24px', borderBottom: '1px solid var(--border)' }}>LẦN CUỐI QUÉT</th>
                  <th style={{ padding: '14px 24px', borderBottom: '1px solid var(--border)' }}></th>
                </tr>
              </thead>
              <tbody>
                {pages.map((p) => (
                  <tr key={p.id} style={{ borderBottom: '1px solid var(--border)', transition: 'background 0.2s' }}>
                    <td style={{ padding: '16px 24px', fontWeight: 700, color: 'var(--text)' }}>
                      <code style={{ background: 'var(--surface-2)', padding: '4px 8px', borderRadius: 4, color: 'var(--primary-light)', fontSize: 13 }}>
                        {p.path}
                      </code>
                    </td>
                    <td style={{ padding: '16px 24px', color: 'var(--text-muted)', fontSize: 13, maxWidth: 320, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {p.normalizedUrl}
                    </td>
                    <td style={{ padding: '16px 24px', color: 'var(--text-muted)', fontSize: 13 }}>
                      {timeAgo(p.firstSeenAt)}
                    </td>
                    <td style={{ padding: '16px 24px', color: 'var(--text-muted)', fontSize: 13 }}>
                      {timeAgo(p.lastSeenAt)}
                    </td>
                    <td style={{ padding: '16px 24px', textAlign: 'right' }}>
                      <Link href={`/pages/${p.id}`} className="btn btn-sm btn-secondary" style={{ borderRadius: 6 }}>
                        Chi tiết
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  )
}
