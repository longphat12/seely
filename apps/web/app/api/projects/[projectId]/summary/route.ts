import { NextRequest, NextResponse } from 'next/server'
import { requireAuth } from '@/lib/middleware-auth'
import { getProject } from '@/lib/server/services/project.service'
import { prisma } from '@/lib/prisma'

// #16 GET /api/projects/[projectId]/summary
export async function GET(req: NextRequest, { params }: { params: Promise<{ projectId: string }> }) {
  const auth = await requireAuth(req)
  if (auth instanceof NextResponse) return auth
  const { projectId } = await params
  const project = await getProject(projectId, auth.userId)
  if (!project) return NextResponse.json({ error: 'Not found' }, { status: 404 })

  const [latestAudit, totalPages, totalAudits, openIssues] = await Promise.all([
    prisma.audit.findFirst({
      where: { projectId },
      orderBy: { createdAt: 'desc' },
      select: {
        overallScore: true, onPageScore: true, technicalScore: true,
        contentScore: true, performanceScore: true, createdAt: true, url: true,
      },
    }),
    prisma.page.count({ where: { projectId } }),
    prisma.audit.count({ where: { projectId } }),
    prisma.issue.count({
      where: { audit: { projectId }, status: 'OPEN' },
    }),
  ])

  return NextResponse.json({
    project,
    latestScore: latestAudit ? {
      overall: latestAudit.overallScore,
      onPage: latestAudit.onPageScore,
      technical: latestAudit.technicalScore,
      content: latestAudit.contentScore,
      performance: latestAudit.performanceScore,
      date: latestAudit.createdAt,
      url: latestAudit.url,
    } : null,
    totalPages,
    totalAudits,
    openIssues,
  })
}
