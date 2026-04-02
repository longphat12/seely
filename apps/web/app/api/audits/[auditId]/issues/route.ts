import { NextRequest, NextResponse } from 'next/server'
import { requireAuth } from '@/lib/middleware-auth'
import { listIssuesByAudit } from '@/lib/server/services/issue.service'

// #14 GET /api/audits/[auditId]/issues
export async function GET(req: NextRequest, { params }: { params: Promise<{ auditId: string }> }) {
  const auth = await requireAuth(req)
  if (auth instanceof NextResponse) return auth
  const { auditId } = await params
  const issues = await listIssuesByAudit(auditId)
  return NextResponse.json(issues)
}
