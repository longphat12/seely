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

      {/* Score Cards */}
      <div className="kpi-grid" style={{ marginBottom: 24 }}>
        {[
          { label: 'Overall', score: audit.overallScore },
          { label: 'On-Page', score: audit.onPageScore },
          { label: 'Technical', score: audit.technicalScore },
          { label: 'Content', score: audit.contentScore },
          { label: 'Performance', score: audit.performanceScore },
          { label: 'Social', score: audit.socialScore },
        ].map((item) => (
          <div className="kpi-card" key={item.label}>
            <div className="kpi-label">{item.label}</div>
            <div className={`kpi-value ${scoreColor(item.score)}`}>{item.score}</div>
          </div>
        ))}
      </div>

      {/* Metrics Summary */}
      {m && (
        <div className="card" style={{ marginBottom: 24 }}>
          <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 16 }}>Page Metrics</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 12 }}>
            {[
              { label: 'Title Length', value: m.titleLength ?? '—' },
              { label: 'Meta Desc Length', value: m.metaDescriptionLength ?? '—' },
              { label: 'H1 Count', value: m.h1Count ?? '—' },
              { label: 'H2 Count', value: m.h2Count ?? '—' },
              { label: 'Images', value: m.imagesTotal ?? '—' },
              { label: 'Imgs No Alt', value: m.imagesWithoutAlt ?? '—' },
              { label: 'Word Count', value: m.wordCount ?? '—' },
              { label: 'DOM Nodes', value: m.domNodeCount ?? '—' },
              { label: 'Canonical', value: boolIcon(m.hasCanonical) },
              { label: 'Viewport', value: boolIcon(m.hasViewport) },
              { label: 'Schema', value: boolIcon(m.hasSchema) },
              { label: 'Open Graph', value: boolIcon(m.openGraphPresent) },
              { label: 'Twitter Card', value: boolIcon(m.twitterCardPresent) },
            ].map((item) => (
              <div key={item.label} style={{ padding: '10px 14px', background: 'var(--surface-2)', borderRadius: 8 }}>
                <div style={{ fontSize: 11, color: 'var(--text-muted)', marginBottom: 4 }}>{item.label}</div>
                <div style={{ fontSize: 16, fontWeight: 600 }}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Zalo Preview */}
      <div className="card" style={{ marginBottom: 24, background: 'linear-gradient(135deg, #0068ff 0%, #0056d2 100%)', color: 'white', border: 'none' }}>
        <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 16, display: 'flex', alignItems: 'center' }}>
          <span style={{ marginRight: 8 }}>📱</span> Zalo Sharing Preview
        </h3>
        <div style={{ background: 'white', borderRadius: 12, overflow: 'hidden', maxWidth: 500, boxShadow: '0 10px 25px rgba(0,0,0,0.2)' }}>
          <div style={{ width: '100%', height: 260, background: '#f0f2f5', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
            {audit.metrics?.ogImage ? (
              <img src={audit.metrics.ogImage} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            ) : (
              <div style={{ color: '#8e8e8e', textAlign: 'center', padding: 20 }}>
                <div style={{ fontSize: 40, marginBottom: 8 }}>🖼️</div>
                <div>No Preview Image Found</div>
              </div>
            )}
          </div>
          <div style={{ padding: '12px 16px', color: '#1c1e21' }}>
            <div style={{ fontSize: 12, color: '#65676b', marginBottom: 2, textTransform: 'uppercase', fontWeight: 600 }}>{new URL(audit.url).hostname}</div>
            <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 4, lineClamp: 2, display: '-webkit-box', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
              {audit.title || 'No Title Provided'}
            </div>
            <div style={{ fontSize: 14, color: '#65676b', lineClamp: 2, display: '-webkit-box', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
              {audit.metrics?.metaDescription || 'No description provided for this page. Zalo will show the page URL or a snippet of text from the content.'}
            </div>
          </div>
        </div>
        <p style={{ marginTop: 16, fontSize: 13, opacity: 0.9 }}>
          💡 <strong>Tip:</strong> Zalo favors images with a 1.91:1 ratio (e.g., 1200x630px). 
          Ensure your image is hosted on an absolute URL and is publicly accessible.
        </p>
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
