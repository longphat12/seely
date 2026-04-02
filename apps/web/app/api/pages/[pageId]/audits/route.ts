import { NextRequest, NextResponse } from 'next/server'
import { requireAuth } from '@/lib/middleware-auth'
import { listAuditsByPage } from '@/lib/server/services/audit.service'

// #13 GET /api/pages/[pageId]/audits
export async function GET(req: NextRequest, { params }: { params: Promise<{ pageId: string }> }) {
  const auth = await requireAuth(req)
  if (auth instanceof NextResponse) return auth
  const { pageId } = await params
  const audits = await listAuditsByPage(pageId)
  return NextResponse.json(audits)
}
