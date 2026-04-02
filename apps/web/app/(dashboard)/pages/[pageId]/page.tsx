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
        <Link href={`/projects/${page.projectId}/pages`} style={{ fontSize: 13, color: 'var(--text-muted)' }}>← Back to pages</Link>
        <h1 className="page-title">{page.path}</h1>
        <p className="page-subtitle">{page.normalizedUrl}</p>
      </div>

      <div className="card">
        <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 16 }}>Audit History</h3>
        {audits && audits.length === 0 && <p className="empty-state">No audits yet</p>}
        {audits && audits.length > 0 && (
          <div className="table-wrapper">
            <table>
              <thead>
                <tr><th>Score</th><th>On-Page</th><th>Technical</th><th>Content</th><th>Perf</th><th>Source</th><th>Date</th><th></th></tr>
              </thead>
              <tbody>
                {audits.map((a) => (
                  <tr key={a.id}>
                    <td><strong className={scoreColor(a.overallScore)}>{a.overallScore}</strong></td>
                    <td className={scoreColor(a.onPageScore)}>{a.onPageScore}</td>
                    <td className={scoreColor(a.technicalScore)}>{a.technicalScore}</td>
                    <td className={scoreColor(a.contentScore)}>{a.contentScore}</td>
                    <td className={scoreColor(a.performanceScore)}>{a.performanceScore}</td>
                    <td><span className="badge badge-low">{a.source}</span></td>
                    <td style={{ color: 'var(--text-muted)', fontSize: 12 }}>{timeAgo(a.createdAt)}</td>
                    <td><Link href={`/audits/${a.id}`} className="btn btn-sm btn-secondary">Details</Link></td>
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
