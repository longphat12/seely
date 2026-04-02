'use client'
import { useQuery } from '@tanstack/react-query'
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
  createdAt: string;
  metrics: AuditMetrics | null;
}
interface Project {
  id: string; name: string; domain: string; createdAt: string; updatedAt: string;
  audits?: Audit[];
}

export default function ProjectsPage() {
  const { data: projects, isLoading } = useQuery<Project[]>({
    queryKey: ['projects'],
    queryFn: () => apiFetch('/api/projects'),
  })

  return (
    <>
      <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 className="page-title">Dự án</h1>
          <p className="page-subtitle">Quản lý trang web và các bản báo cáo SEO của bạn</p>
        </div>
      </div>

      {isLoading && <p style={{ color: 'var(--text-muted)' }}>Đang tải...</p>}

      {projects && projects.length === 0 && (
        <div className="empty-state">
          <p style={{ fontSize: 48, marginBottom: 16 }}>📊</p>
          <p style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>Chưa có dự án nào</p>
          <p>Cài đặt tiện ích Seely và quét một trang web để tự động tạo dự án đầu tiên.</p>
        </div>
      )}

      {projects && projects.length > 0 && (
        <div className="seo-grid">
          {projects.map((p) => {
            const latestAudit = p.audits?.[0];
            const title = latestAudit?.title || p.name;
            const desc = latestAudit?.metrics?.metaDescription || 'Không tìm thấy mô tả';
            const imgUrl = latestAudit?.metrics?.ogImage;
            const timeStr = timeAgo(p.updatedAt);

            return (
              <Link href={`/projects/${p.id}`} key={p.id} className="seo-card">
                <div className="seo-card-header">
                  {p.domain}
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
