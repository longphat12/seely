import { NextRequest, NextResponse } from 'next/server'
import { requireAuth } from '@/lib/middleware-auth'
import { listAuditsByProject } from '@/lib/server/services/audit.service'
import { getProject } from '@/lib/server/services/project.service'

// #12 GET /api/projects/[projectId]/audits
export async function GET(req: NextRequest, { params }: { params: Promise<{ projectId: string }> }) {
  const auth = await requireAuth(req)
  if (auth instanceof NextResponse) return auth
  const { projectId } = await params
  const project = await getProject(projectId, auth.userId)
  if (!project) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  const audits = await listAuditsByProject(projectId)
  return NextResponse.json(audits)
}
