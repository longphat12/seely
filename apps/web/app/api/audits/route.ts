import { NextRequest, NextResponse } from 'next/server'
import { getAuthUser } from '@/lib/middleware-auth'
import { auditPayloadSchema } from '@/lib/validators/audit'
import { ingestAudit } from '@/lib/server/services/audit.service'

// #10 POST /api/audits — main ingest endpoint from extension
export async function POST(req: NextRequest) {
  // Check payload size (max 256KB)
  const contentLength = req.headers.get('content-length')
  if (contentLength && parseInt(contentLength) > 256 * 1024) {
    return NextResponse.json({ error: 'Payload too large (max 256KB)' }, { status: 413 })
  }

  const auth = await getAuthUser(req)

  try {
    const body = await req.json()
    const parsed = auditPayloadSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 })
    }

    const result = await ingestAudit(parsed.data, auth?.userId)
    return NextResponse.json(result, { status: 201 })
  } catch (e) {
    const msg = e instanceof Error ? e.message : 'Audit ingest failed'
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
