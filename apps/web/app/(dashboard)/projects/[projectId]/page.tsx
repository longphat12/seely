'use client'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { apiFetch } from '@/hooks/api'
import { scoreColor, severityBadge, timeAgo } from '@/hooks/utils'
import { ScoreHistoryChart } from '@/components/charts/ScoreHistoryChart'

interface Summary {
  project: { id: string; name: string; domain: string }
  latestScore: { overall: number; onPage: number; technical: number; content: number; performance: number; date: string } | null
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
      <div className="kpi-grid" style={{ marginBottom: 24 }}>
        <div className="kpi-card">
          <div className="kpi-label">Overall Score</div>
          <div className={`kpi-value ${s ? scoreColor(s.overall) : ''}`}>{s?.overall ?? '—'}</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">On-Page</div>
          <div className={`kpi-value ${s ? scoreColor(s.onPage) : ''}`}>{s?.onPage ?? '—'}</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">Technical</div>
          <div className={`kpi-value ${s ? scoreColor(s.technical) : ''}`}>{s?.technical ?? '—'}</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">Content</div>
          <div className={`kpi-value ${s ? scoreColor(s.content) : ''}`}>{s?.content ?? '—'}</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">Performance</div>
          <div className={`kpi-value ${s ? scoreColor(s.performance) : ''}`}>{s?.performance ?? '—'}</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">Total Pages</div>
          <div className="kpi-value">{summary.totalPages}</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">Total Audits</div>
          <div className="kpi-value">{summary.totalAudits}</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">Open Issues</div>
          <div className={`kpi-value ${summary.openIssues > 0 ? 'score-bad' : 'score-good'}`}>{summary.openIssues}</div>
        </div>
      </div>

      {/* Score History Chart */}
      {history && history.length > 0 && (
        <div className="chart-container" style={{ marginBottom: 24 }}>
          <div className="chart-title">Score History</div>
          <ScoreHistoryChart data={history} />
        </div>
      )}

      {/* Quick Links */}
      <div style={{ display: 'flex', gap: 12, marginBottom: 24 }}>
        <Link href={`/projects/${projectId}/pages`} className="btn btn-secondary">📄 View Pages</Link>
      </div>

      {/* Top Issues */}
      {topIssues && topIssues.length > 0 && (
        <div className="card">
          <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 16 }}>Top Issues</h3>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr><th>Severity</th><th>Issue</th><th>Page</th><th>Time</th></tr>
              </thead>
              <tbody>
                {topIssues.map((issue) => (
                  <tr key={issue.id}>
                    <td><span className={severityBadge(issue.severity)}>{issue.severity}</span></td>
                    <td>
                      <div style={{ fontWeight: 500 }}>{issue.title}</div>
                      <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{issue.message}</div>
                    </td>
                    <td style={{ fontSize: 12, color: 'var(--text-muted)', maxWidth: 200, overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {issue.audit.url}
                    </td>
                    <td style={{ color: 'var(--text-muted)', fontSize: 12, whiteSpace: 'nowrap' }}>{timeAgo(issue.audit.createdAt)}</td>
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
