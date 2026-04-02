import { NextRequest, NextResponse } from 'next/server'
import { requireAuth } from '@/lib/middleware-auth'
import { getProject } from '@/lib/server/services/project.service'
import { prisma } from '@/lib/prisma'

// #18 GET /api/projects/[projectId]/top-issues
export async function GET(req: NextRequest, { params }: { params: Promise<{ projectId: string }> }) {
  const auth = await requireAuth(req)
  if (auth instanceof NextResponse) return auth
  const { projectId } = await params
  const project = await getProject(projectId, auth.userId)
  if (!project) return NextResponse.json({ error: 'Not found' }, { status: 404 })

  const issues = await prisma.issue.findMany({
    where: {
      audit: { projectId },
      status: 'OPEN',
    },
    orderBy: [{ severity: 'asc' }, { createdAt: 'desc' }],
    take: 20,
    select: {
      id: true, code: true, category: true, severity: true,
      title: true, message: true, recommendation: true,
      audit: { select: { url: true, createdAt: true } },
    },
  })

  return NextResponse.json(issues)
}
