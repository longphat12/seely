import { NextRequest, NextResponse } from 'next/server'
import { requireAuth } from '@/lib/middleware-auth'
import { getProject } from '@/lib/server/services/project.service'
import { prisma } from '@/lib/prisma'

// #17 GET /api/projects/[projectId]/history
export async function GET(req: NextRequest, { params }: { params: Promise<{ projectId: string }> }) {
  const auth = await requireAuth(req)
  if (auth instanceof NextResponse) return auth
  const { projectId } = await params
  const project = await getProject(projectId, auth.userId)
  if (!project) return NextResponse.json({ error: 'Not found' }, { status: 404 })

  const audits = await prisma.audit.findMany({
    where: { projectId },
    orderBy: { createdAt: 'asc' },
    take: 100,
    select: {
      overallScore: true, onPageScore: true, technicalScore: true,
      contentScore: true, performanceScore: true, createdAt: true,
    },
  })

  return NextResponse.json(audits)
}
