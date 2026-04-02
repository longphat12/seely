import { NextRequest, NextResponse } from 'next/server'
import { requireAuth } from '@/lib/middleware-auth'
import { updateIssueStatus } from '@/lib/server/services/issue.service'
import { updateIssueStatusSchema } from '@/lib/validators/issue'

// #15 PATCH /api/issues/[issueId]/status
export async function PATCH(req: NextRequest, { params }: { params: Promise<{ issueId: string }> }) {
  const auth = await requireAuth(req)
  if (auth instanceof NextResponse) return auth
  const { issueId } = await params

  const body = await req.json()
  const parsed = updateIssueStatusSchema.safeParse(body)
  if (!parsed.success) return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 })

  const issue = await updateIssueStatus(issueId, parsed.data.status, auth.userId)
  if (!issue) return NextResponse.json({ error: 'Issue not found' }, { status: 404 })
  return NextResponse.json(issue)
}
