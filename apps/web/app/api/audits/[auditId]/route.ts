import { NextRequest, NextResponse } from 'next/server'
import { requireAuth } from '@/lib/middleware-auth'
import { getAudit } from '@/lib/server/services/audit.service'

// #11 GET /api/audits/[auditId]
export async function GET(req: NextRequest, { params }: { params: Promise<{ auditId: string }> }) {
  const auth = await requireAuth(req)
  if (auth instanceof NextResponse) return auth
  const { auditId } = await params
  const audit = await getAudit(auditId)
  if (!audit) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json(audit)
}
