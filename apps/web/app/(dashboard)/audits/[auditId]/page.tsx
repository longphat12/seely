'use client'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { apiFetch } from '@/hooks/api'
import { scoreColor, severityBadge, timeAgo } from '@/hooks/utils'

interface Metrics {
  titleLength: number | null; metaDescriptionLength: number | null; h1Count: number | null;
  h2Count: number | null; imagesTotal: number | null; imagesWithoutAlt: number | null;
  wordCount: number | null; domNodeCount: number | null; hasCanonical: boolean | null;
  hasViewport: boolean | null; hasSchema: boolean | null;
  openGraphPresent: boolean | null; twitterCardPresent: boolean | null;
  ogImage: string | null; metaDescription: string | null;
}

interface Issue {
  id: string; code: string; category: string; severity: string; status: string;
  title: string; message: string; recommendation: string
}

interface AuditDetail {
  id: string; url: string; title: string | null; overallScore: number;
  onPageScore: number; technicalScore: number; contentScore: number; performanceScore: number;
  socialScore: number;
  source: string; createdAt: string; metrics: Metrics | null; issues: Issue[]
}

export default function AuditPage() {
  const { auditId } = useParams<{ auditId: string }>()
  const qc = useQueryClient()

  const { data: audit } = useQuery<AuditDetail>({
    queryKey: ['audit', auditId],
    queryFn: () => apiFetch(`/api/audits/${auditId}`),
  })

  const statusMutation = useMutation({
    mutationFn: ({ issueId, status }: { issueId: string; status: string }) =>
      apiFetch(`/api/issues/${issueId}/status`, { method: 'PATCH', body: JSON.stringify({ status }) }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['audit', auditId] }),
  })

  if (!audit) return <p style={{ color: 'var(--text-muted)' }}>Loading...</p>

  const grouped: Record<string, Issue[]> = {}
  for (const issue of audit.issues) {
    if (!grouped[issue.category]) grouped[issue.category] = []
    grouped[issue.category].push(issue)
  }

  const m = audit.metrics
  const boolIcon = (v: boolean | null) => v === null ? '—' : v ? '✅' : '❌'

  return (
    <>
      <div className="page-header">
        <h1 className="page-title">Audit Report</h1>
        <p className="page-subtitle">{audit.url} · {timeAgo(audit.createdAt)}</p>
      </div>

      {/* Status & Source Badge */}
      <div style={{ display: 'flex', gap: 12, marginBottom: 24, alignItems: 'center' }}>
        <div style={{ padding: '6px 14px', borderRadius: 20, background: 'var(--surface-2)', border: '1px solid var(--border)', fontSize: 12, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 6 }}>
          {audit.source === 'EXTENSION' ? '🛠 TIỆN ÍCH' : '⚡ QUÉT NHANH'}
        </div>
        <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>
          Báo cáo lúc {new Date(audit.createdAt).toLocaleString('vi-VN')}
        </div>
      </div>

      {/* Score Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 16, marginBottom: 32 }}>
        {[
          { label: 'Overall', score: audit.overallScore, icon: '🎯' },
          { label: 'On-Page', score: audit.onPageScore, icon: '📄' },
          { label: 'Technical', score: audit.technicalScore, icon: '⚙️' },
          { label: 'Content', score: audit.contentScore, icon: '✍️' },
          { label: 'Performance', score: audit.performanceScore, icon: '⚡' },
          { label: 'Social', score: audit.socialScore, icon: '📱' },
        ].map((item) => (
          <div className="card" key={item.label} style={{ padding: '16px', textAlign: 'center' }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-muted)', marginBottom: 8, textTransform: 'uppercase' }}>{item.label}</div>
            <div style={{ fontSize: 24, marginBottom: 4 }}>{item.icon}</div>
            <div className={scoreColor(item.score)} style={{ fontSize: 28, fontWeight: 800 }}>{item.score}</div>
          </div>
        ))}
      </div>

      {/* Primary Content Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: 24, alignItems: 'start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {/* Metrics Summary */}
          {m && (
            <div className="card" style={{ padding: '24px' }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 20, display: 'flex', alignItems: 'center', gap: 8 }}>
                <span>🔍</span> Chỉ số trang chi tiết
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: 16 }}>
                {[
                  { label: 'Tiêu đề', value: `${m.titleLength || 0} ký tự`, sub: m.titleLength && m.titleLength > 30 && m.titleLength < 65 ? 'Tốt' : 'Cần tối ưu' },
                  { label: 'Mô tả meta', value: `${m.metaDescriptionLength || 0} ký tự`, sub: m.metaDescriptionLength && m.metaDescriptionLength > 120 ? 'Tốt' : 'Ngắn' },
                  { label: 'Thẻ H1', value: m.h1Count ?? 0, sub: m.h1Count === 1 ? 'Chuẩn' : 'Sai' },
                  { label: 'Hình ảnh', value: m.imagesTotal ?? 0, sub: `${m.imagesWithoutAlt || 0} thiếu Alt` },
                  { label: 'Số lượng từ', value: m.wordCount ?? 0, sub: 'Nội dung' },
                  { label: 'Canonical', value: boolIcon(m.hasCanonical), sub: 'SEO' },
                  { label: 'Open Graph', value: boolIcon(m.openGraphPresent), sub: 'Chia sẻ' },
                  { label: 'Twitter Card', value: boolIcon(m.twitterCardPresent), sub: 'Mạng xã hội' },
                ].map((item) => (
                  <div key={item.label} style={{ padding: '14px', background: 'var(--surface-2)', borderRadius: 10, border: '1px solid var(--border)' }}>
                    <div style={{ fontSize: 11, color: 'var(--text-muted)', marginBottom: 4, fontWeight: 700, textTransform: 'uppercase' }}>{item.label}</div>
                    <div style={{ fontSize: 16, fontWeight: 800, marginBottom: 2 }}>{item.value}</div>
                    <div style={{ fontSize: 10, color: 'var(--text-muted)' }}>{item.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Issues by Category */}
          {Object.entries(grouped).map(([category, issues]) => (
            <div className="card" key={category} style={{ padding: '0', overflow: 'hidden' }}>
              <div style={{ padding: '16px 24px', background: 'var(--surface-2)', borderBottom: '1px solid var(--border)', fontWeight: 700, fontSize: 14, textTransform: 'uppercase', letterSpacing: 0.5 }}>
                {category.replace('_', ' ')} ({issues.length})
              </div>
              <div className="table-wrapper">
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <tbody>
                    {issues.map((issue) => (
                      <tr key={issue.id} style={{ borderBottom: '1px solid var(--border)' }}>
                        <td style={{ padding: '16px 24px', width: 100 }}>
                          <span className={severityBadge(issue.severity)} style={{ padding: '4px 8px', borderRadius: 4, fontSize: 10, fontWeight: 800 }}>
                            {issue.severity}
                          </span>
                        </td>
                        <td style={{ padding: '16px 24px' }}>
                          <div style={{ fontWeight: 600, marginBottom: 4 }}>{issue.title}</div>
                          <div style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 8 }}>{issue.message}</div>
                          <div style={{ fontSize: 12, color: 'var(--primary-light)', background: 'rgba(99,102,241,0.05)', padding: '8px 12px', borderRadius: 6, borderLeft: '3px solid var(--primary)' }}>
                            💡 {issue.recommendation}
                          </div>
                        </td>
                        <td style={{ padding: '16px 24px', width: 140 }}>
                          <select
                            value={issue.status}
                            onChange={(e) => statusMutation.mutate({ issueId: issue.id, status: e.target.value })}
                            style={{ width: '100%', padding: '6px', borderRadius: 6, background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text)', fontSize: 12 }}
                          >
                            <option value="OPEN">🔴 Open</option>
                            <option value="FIXED">🟢 Fixed</option>
                            <option value="IGNORED">⚪ Ignored</option>
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar: Social Preview */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div className="card" style={{ padding: '24px', position: 'sticky', top: 24 }}>
            <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 20 }}>📲 Xem trước chia sẻ</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {/* FB/Zalo Style */}
              <div style={{ background: 'white', borderRadius: 8, overflow: 'hidden', border: '1px solid #dddfe2', color: '#1c1e21' }}>
                <div style={{ width: '100%', aspectRatio: '1.91/1', background: '#f0f2f5', overflow: 'hidden' }}>
                  {audit.metrics?.ogImage ? (
                    <img src={audit.metrics.ogImage} alt="OG" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#8e8e8e', fontSize: 12 }}>No Image</div>
                  )}
                </div>
                <div style={{ padding: 12, borderTop: '1px solid #dddfe2' }}>
                  <div style={{ fontSize: 11, color: '#65676b', textTransform: 'uppercase', marginBottom: 4 }}>{new URL(audit.url).hostname}</div>
                  <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 4, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{audit.title || 'No Title'}</div>
                  <div style={{ fontSize: 13, color: '#65676b', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{audit.metrics?.metaDescription || 'No description...'}</div>
                </div>
              </div>

              <div style={{ padding: '16px', background: 'rgba(99,102,241,0.05)', borderRadius: 12, border: '1px solid rgba(99,102,241,0.1)' }}>
                <h4 style={{ fontSize: 13, fontWeight: 700, marginBottom: 8, color: 'var(--primary)' }}>Phân tích Open Graph</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12 }}>
                    <span style={{ color: 'var(--text-muted)' }}>Hình ảnh OG:</span>
                    <span>{audit.metrics?.ogImage ? '✅ Có' : '❌ Thiếu'}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12 }}>
                    <span style={{ color: 'var(--text-muted)' }}>Mô tả Social:</span>
                    <span>{audit.metrics?.metaDescription ? '✅ Có' : '❌ Thiếu'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Issues by Category */}
      {Object.entries(grouped).map(([category, issues]) => (
        <div className="card" key={category} style={{ marginBottom: 16 }}>
          <h3 style={{ fontSize: 14, fontWeight: 600, marginBottom: 12, textTransform: 'uppercase', letterSpacing: 0.5, color: 'var(--text-muted)' }}>
            {category.replace('_', ' ')} ({issues.length})
          </h3>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr><th>Severity</th><th>Issue</th><th>Status</th></tr>
              </thead>
              <tbody>
                {issues.map((issue) => (
                  <tr key={issue.id}>
                    <td><span className={severityBadge(issue.severity)}>{issue.severity}</span></td>
                    <td>
                      <div style={{ fontWeight: 500, marginBottom: 2 }}>{issue.title}</div>
                      <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 4 }}>{issue.message}</div>
                      <div style={{ fontSize: 11, color: 'var(--primary-light)' }}>💡 {issue.recommendation}</div>
                    </td>
                    <td>
                      <select
                        value={issue.status}
                        onChange={(e) => statusMutation.mutate({ issueId: issue.id, status: e.target.value })}
                      >
                        <option value="OPEN">Open</option>
                        <option value="FIXED">Fixed</option>
                        <option value="IGNORED">Ignored</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}

      {audit.issues.length === 0 && (
        <div className="card empty-state">🎉 No issues found! Perfect score.</div>
      )}
    </>
  )
}
