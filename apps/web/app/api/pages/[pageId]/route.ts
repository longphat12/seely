import { NextRequest, NextResponse } from 'next/server'
import { requireAuth } from '@/lib/middleware-auth'
import { getPage } from '@/lib/server/services/page.service'

// #9 GET /api/pages/[pageId]
export async function GET(req: NextRequest, { params }: { params: Promise<{ pageId: string }> }) {
  const auth = await requireAuth(req)
  if (auth instanceof NextResponse) return auth
  const { pageId } = await params
  const page = await getPage(pageId)
  if (!page) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json(page)
}
