import { NextRequest, NextResponse } from 'next/server'
import { jwtVerify } from 'jose'

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || 'dev-secret-change-me')

// Routes that require authentication
const PROTECTED_PREFIXES = ['/projects', '/audits', '/pages', '/debug-sharing']

// Routes that should NOT be protected
const PUBLIC_PREFIXES = ['/login', '/register', '/api/']

function isProtected(pathname: string) {
  return PROTECTED_PREFIXES.some((p) => pathname.startsWith(p))
}

function isPublic(pathname: string) {
  return PUBLIC_PREFIXES.some((p) => pathname.startsWith(p))
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // Allow public routes
  if (isPublic(pathname)) return NextResponse.next()

  // Only guard protected routes
  if (!isProtected(pathname)) return NextResponse.next()

  // Check for auth cookie
  const token = req.cookies.get('seely_token')?.value
  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  try {
    await jwtVerify(token, JWT_SECRET)
    return NextResponse.next()
  } catch {
    // Invalid token — clear cookie and redirect
    const response = NextResponse.redirect(new URL('/login', req.url))
    response.cookies.delete('seely_token')
    return response
  }
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|og-image.png).*)',
  ],
}
