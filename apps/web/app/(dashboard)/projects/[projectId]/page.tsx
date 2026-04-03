'use client'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { apiFetch } from '@/hooks/api'
import { scoreColor, severityBadge, timeAgo } from '@/hooks/utils'
import { ScoreHistoryChart } from '@/components/charts/ScoreHistoryChart'

interface Summary {
  project: { id: string; name: string; domain: string }
  latestScore: {
    overall: number
    onPage: number
    technical: number
    content: number
    performance: number
    date: string
    url: string
  } | null
  totalPages: number; totalAudits: number; openIssues: number
}

interface TopIssue {
  id: string; code: string; category: string; severity: string; title: string; message: string
  audit: { url: string; createdAt: string }
}

interface HistoryPoint {
  overallScore: number; onPageScore: number; technicalScore: number;
  contentScore: number; performanceScore: number; createdAt: string
}

export default function ProjectPage() {
  const { projectId } = useParams<{ projectId: string }>()

  const { data: summary } = useQuery<Summary>({
    queryKey: ['project-summary', projectId],
    queryFn: () => apiFetch(`/api/projects/${projectId}/summary`),
  })

  const { data: history } = useQuery<HistoryPoint[]>({
    queryKey: ['project-history', projectId],
    queryFn: () => apiFetch(`/api/projects/${projectId}/history`),
  })

  const { data: topIssues } = useQuery<TopIssue[]>({
    queryKey: ['project-top-issues', projectId],
    queryFn: () => apiFetch(`/api/projects/${projectId}/top-issues`),
  })

  if (!summary) return <p style={{ color: 'var(--text-muted)' }}>Loading...</p>

  const s = summary.latestScore

  return (
    <>
      <div className="page-header">
        <h1 className="page-title">{summary.project.name}</h1>
        <p className="page-subtitle">{summary.project.domain}</p>
      </div>

      {/* KPI Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20, marginBottom: 32 }}>
        {[
          { label: 'Overall Score', value: s?.overall, icon: '🎯', color: s ? scoreColor(s.overall) : '' },
          { label: 'On-Page SEO', value: s?.onPage, icon: '📄', color: s ? scoreColor(s.onPage) : '' },
          { label: 'Technical', value: s?.technical, icon: '⚙️', color: s ? scoreColor(s.technical) : '' },
          { label: 'Content', value: s?.content, icon: '✍️', color: s ? scoreColor(s.content) : '' },
          { label: 'Performance', value: s?.performance, icon: '⚡', color: s ? scoreColor(s.performance) : '' },
        ].map((item) => (
          <div key={item.label} className="card" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase' }}>{item.label}</span>
              <span style={{ fontSize: 18 }}>{item.icon}</span>
            </div>
            <div className={item.color} style={{ fontSize: 32, fontWeight: 800 }}>{item.value ?? '—'}</div>
          </div>
        ))}
        
        <div className="card" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: 12, background: 'var(--surface-2)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Trạng thái vận hành</span>
            <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>TỔNG QUAN</span>
          </div>
          <div style={{ display: 'flex', gap: 16 }}>
            <div>
              <div style={{ fontSize: 18, fontWeight: 700 }}>{summary.totalPages}</div>
              <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>TRANG</div>
            </div>
            <div style={{ width: 1, height: 30, background: 'var(--border)', alignSelf: 'center' }} />
            <div>
              <div style={{ fontSize: 18, fontWeight: 700, color: summary.openIssues > 0 ? 'var(--danger)' : 'var(--success)' }}>{summary.openIssues}</div>
              <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>VẤN ĐỀ</div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 24, alignItems: 'start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {/* Score History Chart */}
          {history && history.length > 0 && (
            <div className="card" style={{ padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                <h3 style={{ fontSize: 16, fontWeight: 700 }}>Lịch sử điểm số</h3>
                <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>30 ngày gần nhất</div>
              </div>
              <div style={{ height: 300 }}>
                <ScoreHistoryChart data={history} />
              </div>
            </div>
          )}

          {/* Top Issues */}
          {topIssues && topIssues.length > 0 && (
            <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
              <div style={{ padding: '20px 24px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontSize: 16, fontWeight: 700 }}>Vấn đề quan trọng cần xử lý</h3>
                <Link href={`/projects/${projectId}/pages`} style={{ fontSize: 13, fontWeight: 600, color: 'var(--primary)' }}>Tất cả bài viết →</Link>
              </div>
              <div className="table-wrapper">
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ background: 'rgba(255,255,255,0.02)' }}>
                      <th style={{ padding: '12px 24px', borderBottom: '1px solid var(--border)' }}>MỨC ĐỘ</th>
                      <th style={{ padding: '12px 24px', borderBottom: '1px solid var(--border)' }}>NỘI DUNG VẤN ĐỀ</th>
                      <th style={{ padding: '12px 24px', borderBottom: '1px solid var(--border)' }}>THỜI GIAN</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topIssues.map((issue) => (
                      <tr key={issue.id} style={{ borderBottom: '1px solid var(--border)', transition: 'background 0.2s' }}>
                        <td style={{ padding: '16px 24px' }}>
                          <span className={severityBadge(issue.severity)} style={{ padding: '4px 10px', borderRadius: 6, fontSize: 11, fontWeight: 700 }}>
                            {issue.severity}
                          </span>
                        </td>
                        <td style={{ padding: '16px 24px' }}>
                          <div style={{ fontWeight: 600, marginBottom: 4, color: 'var(--text)' }}>{issue.title}</div>
                          <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>{issue.audit.url}</div>
                        </td>
                        <td style={{ padding: '16px 24px', color: 'var(--text-muted)', fontSize: 13 }}>
                          {timeAgo(issue.audit.createdAt)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar Actions */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div className="card" style={{ padding: '20px' }}>
            <h4 style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: 16 }}>Thao tác nhanh</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <Link href={`/projects/${projectId}/pages`} className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>
                📄 Xem danh sách trang
              </Link>
              <Link
                href={s?.url ? `/debug-sharing?url=${encodeURIComponent(s.url)}` : '/debug-sharing'}
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                🔗 Kiểm tra chia sẻ
              </Link>
            </div>
          </div>

          <div className="card" style={{ padding: '20px', background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1))', borderColor: 'var(--primary-muted)' }}>
            <div style={{ fontSize: 24, marginBottom: 12 }}>🚀</div>
            <h4 style={{ fontSize: 15, fontWeight: 700, marginBottom: 8 }}>Cải thiện thứ hạng</h4>
            <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: 16 }}>
              Sử dụng tiện ích Seely để quét toàn diện website và nhận các gợi ý khắc phục chi tiết hơn.
            </p>
            <button className="btn btn-sm btn-primary" style={{ background: 'var(--primary)', border: 'none' }}>Cài đặt extension</button>
          </div>
        </div>
      </div>
    </>
  )
}
