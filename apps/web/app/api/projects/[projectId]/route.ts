import { NextRequest, NextResponse } from 'next/server'
import { requireAuth } from '@/lib/middleware-auth'
import { getProject, updateProject, deleteProject } from '@/lib/server/services/project.service'
import { updateProjectSchema } from '@/lib/validators/project'

type Params = { params: Promise<{ projectId: string }> }

// #6 GET /api/projects/[projectId]
export async function GET(req: NextRequest, { params }: Params) {
  const auth = await requireAuth(req)
  if (auth instanceof NextResponse) return auth
  const { projectId } = await params
  const project = await getProject(projectId, auth.userId)
  if (!project) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json(project)
}

// #7 PATCH /api/projects/[projectId]
export async function PATCH(req: NextRequest, { params }: Params) {
  const auth = await requireAuth(req)
  if (auth instanceof NextResponse) return auth
  const { projectId } = await params

  const body = await req.json()
  const parsed = updateProjectSchema.safeParse(body)
  if (!parsed.success) return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 })

  const project = await updateProject(projectId, auth.userId, parsed.data)
  if (!project) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json(project)
}

export async function DELETE(req: NextRequest, { params }: Params) {
  const auth = await requireAuth(req)
  if (auth instanceof NextResponse) return auth
  const { projectId } = await params
  const result = await deleteProject(projectId, auth.userId)
  if (!result) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json({ message: 'Deleted' })
}
