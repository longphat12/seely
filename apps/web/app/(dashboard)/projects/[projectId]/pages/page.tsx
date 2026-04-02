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
        <Link href={`/projects/${projectId}`} style={{ fontSize: 13, color: 'var(--text-muted)' }}>← Back to project</Link>
        <h1 className="page-title">Pages</h1>
      </div>

      {isLoading && <p style={{ color: 'var(--text-muted)' }}>Loading...</p>}

      {pages && pages.length === 0 && (
        <div className="empty-state">
          <p>No pages audited yet. Scan pages with the Seely extension.</p>
        </div>
      )}

      {pages && pages.length > 0 && (
        <div className="card table-wrapper">
          <table>
            <thead>
              <tr><th>Path</th><th>URL</th><th>First Seen</th><th>Last Audit</th><th></th></tr>
            </thead>
            <tbody>
              {pages.map((p) => (
                <tr key={p.id}>
                  <td style={{ fontWeight: 500 }}>{p.path}</td>
                  <td style={{ color: 'var(--text-muted)', fontSize: 12, maxWidth: 300, overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.normalizedUrl}</td>
                  <td style={{ color: 'var(--text-muted)', fontSize: 12 }}>{timeAgo(p.firstSeenAt)}</td>
                  <td style={{ color: 'var(--text-muted)', fontSize: 12 }}>{timeAgo(p.lastSeenAt)}</td>
                  <td><Link href={`/pages/${p.id}`} className="btn btn-sm btn-secondary">View</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  )
}
