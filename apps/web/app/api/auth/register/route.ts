import { NextRequest, NextResponse } from 'next/server'
import { registerSchema } from '@/lib/validators/auth'
import { registerUser } from '@/lib/server/services/auth.service'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const parsed = registerSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 })
    }

    const { email, password, name } = parsed.data
    const result = await registerUser(email, password, name)

    const response = NextResponse.json(result, { status: 201 })
    // Set session cookie for web dashboard
    response.cookies.set('seely_token', result.token, {
      httpOnly: true, secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax', maxAge: 60 * 60 * 24 * 7, path: '/',
    })
    return response
  } catch (e) {
    const msg = e instanceof Error ? e.message : 'Registration failed'
    return NextResponse.json({ error: msg }, { status: 409 })
  }
}
