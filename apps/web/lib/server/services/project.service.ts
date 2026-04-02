import { prisma } from '../../prisma'

export async function listProjects(userId: string) {
  return prisma.project.findMany({
    where: { members: { some: { userId } } },
    orderBy: { updatedAt: 'desc' },
    include: {
      audits: {
        orderBy: { createdAt: 'desc' },
        take: 1,
        include: { metrics: true }
      }
    }
  })
}

export async function createProject(userId: string, name: string, domain: string) {
  return prisma.project.create({
    data: {
      name,
      domain: domain.toLowerCase().replace(/^https?:\/\//, '').replace(/\/+$/, ''),
      members: { create: { userId, role: 'owner' } },
    },
  })
}

export async function getProject(projectId: string, userId: string) {
  return prisma.project.findFirst({
    where: { id: projectId, members: { some: { userId } } },
  })
}

export async function updateProject(projectId: string, userId: string, data: { name?: string }) {
  const project = await getProject(projectId, userId)
  if (!project) return null
  return prisma.project.update({ where: { id: projectId }, data })
}

export async function deleteProject(projectId: string, userId: string) {
  const project = await getProject(projectId, userId)
  if (!project) return null
  return prisma.project.delete({ where: { id: projectId } })
}

export async function findOrCreateByDomain(domain: string, userId?: string) {
  const normalized = domain.toLowerCase().replace(/^https?:\/\//, '').replace(/\/+$/, '')
  let project = await prisma.project.findUnique({ where: { domain: normalized } })
  if (!project) {
    project = await prisma.project.create({
      data: {
        name: normalized,
        domain: normalized,
        ...(userId ? { members: { create: { userId, role: 'owner' } } } : {}),
      },
    })
  } else if (userId) {
    const isMember = await prisma.projectMember.findUnique({
      where: { userId_projectId: { userId, projectId: project.id } }
    });
    if (!isMember) {
      await prisma.projectMember.create({
        data: { userId, projectId: project.id, role: 'editor' }
      });
    }
  }
  return project
}
