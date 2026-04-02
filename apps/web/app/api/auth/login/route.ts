import { NextRequest, NextResponse } from 'next/server'
import { loginSchema } from '@/lib/validators/auth'
import { loginUser } from '@/lib/server/services/auth.service'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const parsed = loginSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 })
    }

    const { email, password } = parsed.data
    const result = await loginUser(email, password)

    const response = NextResponse.json(result)
    response.cookies.set('seely_token', result.token, {
      httpOnly: true, secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax', maxAge: 60 * 60 * 24 * 7, path: '/',
    })
    return response
  } catch {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
  }
}
