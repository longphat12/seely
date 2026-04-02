import { NextRequest, NextResponse } from 'next/server'
import { requireAuth } from '@/lib/middleware-auth'
import { listProjects, createProject } from '@/lib/server/services/project.service'
import { createProjectSchema } from '@/lib/validators/project'

// #4 GET /api/projects
export async function GET(req: NextRequest) {
  const auth = await requireAuth(req)
  if (auth instanceof NextResponse) return auth
  const projects = await listProjects(auth.userId)
  return NextResponse.json(projects)
}

// #5 POST /api/projects
export async function POST(req: NextRequest) {
  const auth = await requireAuth(req)
  if (auth instanceof NextResponse) return auth

  const body = await req.json()
  const parsed = createProjectSchema.safeParse(body)
  if (!parsed.success) return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 })

  try {
    const project = await createProject(auth.userId, parsed.data.name, parsed.data.domain)
    return NextResponse.json(project, { status: 201 })
  } catch {
    return NextResponse.json({ error: 'Domain already exists' }, { status: 409 })
  }
}
