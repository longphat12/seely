import { prisma } from '../../prisma'
import { hashPassword, verifyPassword, signToken } from '../../auth'

export async function registerUser(email: string, password: string, name?: string) {
  const existing = await prisma.user.findUnique({ where: { email } })
  if (existing) throw new Error('Email already registered')

  const passwordHash = await hashPassword(password)
  const user = await prisma.user.create({
    data: { email, passwordHash, name },
  })

  const token = await signToken({ userId: user.id, email: user.email })
  return { user: { id: user.id, email: user.email, name: user.name }, token }
}

export async function loginUser(email: string, password: string) {
  const user = await prisma.user.findUnique({ where: { email } })
  if (!user) throw new Error('Invalid credentials')

  const valid = await verifyPassword(user.passwordHash, password)
  if (!valid) throw new Error('Invalid credentials')

  const token = await signToken({ userId: user.id, email: user.email })
  return { user: { id: user.id, email: user.email, name: user.name }, token }
}
