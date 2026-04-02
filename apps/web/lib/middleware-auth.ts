import { NextRequest, NextResponse } from 'next/server'
import { verifyToken, type JwtPayload } from './auth'

/**
 * Extract and verify auth from request.
 * Checks: 1) Bearer token header, 2) session cookie.
 * Returns userId payload or null.
 */
export async function getAuthUser(req: NextRequest): Promise<JwtPayload | null> {
  // 1. Check Authorization: Bearer <token>
  const authHeader = req.headers.get('authorization')
  if (authHeader?.startsWith('Bearer ')) {
    const token = authHeader.slice(7)
    return verifyToken(token)
  }

  // 2. Check session cookie
  const cookieToken = req.cookies.get('seely_token')?.value
  if (cookieToken) {
    return verifyToken(cookieToken)
  }

  return null
}

/**
 * Auth guard wrapper. Returns 401 if not authenticated.
 */
export async function requireAuth(req: NextRequest): Promise<JwtPayload | NextResponse> {
  const user = await getAuthUser(req)
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  return user
}
