import { prisma } from '../../prisma'

export async function findOrCreatePage(projectId: string, rawUrl: string) {
  let normalized: string
  let path: string
  try {
    const url = new URL(rawUrl)
    url.hash = ''
    if (url.pathname.length > 1 && url.pathname.endsWith('/')) {
      url.pathname = url.pathname.slice(0, -1)
    }
    normalized = url.toString()
    path = url.pathname
  } catch {
    normalized = rawUrl
    path = '/'
  }

  const existing = await prisma.page.findUnique({
    where: { projectId_normalizedUrl: { projectId, normalizedUrl: normalized } },
  })

  if (existing) {
    return prisma.page.update({
      where: { id: existing.id },
      data: { lastSeenAt: new Date() },
    })
  }

  return prisma.page.create({
    data: { projectId, normalizedUrl: normalized, path },
  })
}

export async function listPages(projectId: string) {
  return prisma.page.findMany({
    where: { projectId },
    orderBy: { lastSeenAt: 'desc' },
  })
}

export async function getPage(pageId: string) {
  return prisma.page.findUnique({ where: { id: pageId } })
}
