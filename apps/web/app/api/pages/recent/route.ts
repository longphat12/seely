import { NextRequest, NextResponse } from 'next/server'
import { requireAuth } from '@/lib/middleware-auth'
import { prisma } from '@/lib/prisma'

export async function GET(req: NextRequest) {
  const auth = await requireAuth(req)
  if (auth instanceof NextResponse) return auth

  const pages = await prisma.page.findMany({
    where: {
      project: {
        members: {
          some: { userId: auth.userId },
        },
      },
    },
    orderBy: { lastSeenAt: 'desc' },
    take: 12,
    select: {
      id: true,
      normalizedUrl: true,
      path: true,
      lastSeenAt: true,
      project: {
        select: {
          id: true,
          name: true,
          domain: true,
        },
      },
      audits: {
        orderBy: { createdAt: 'desc' },
        take: 1,
        select: {
          overallScore: true,
        },
      },
    },
  })

  return NextResponse.json(
    pages.map((page) => ({
      pageId: page.id,
      projectId: page.project.id,
      projectName: page.project.name,
      projectDomain: page.project.domain,
      normalizedUrl: page.normalizedUrl,
      path: page.path,
      lastSeenAt: page.lastSeenAt,
      latestAuditScore: page.audits[0]?.overallScore ?? null,
    })),
  )
}
