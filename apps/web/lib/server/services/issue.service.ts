import { prisma } from '../../prisma'
import type { IssueStatus } from '@prisma/client'

export async function listIssuesByAudit(auditId: string) {
  return prisma.issue.findMany({
    where: { auditId },
    orderBy: [{ severity: 'asc' }, { createdAt: 'desc' }],
  })
}

export async function updateIssueStatus(
  issueId: string,
  newStatus: IssueStatus,
  changedById?: string,
) {
  const issue = await prisma.issue.findUnique({ where: { id: issueId } })
  if (!issue) return null

  const [updated] = await prisma.$transaction([
    prisma.issue.update({
      where: { id: issueId },
      data: { status: newStatus },
    }),
    prisma.issueStatusHistory.create({
      data: {
        issueId,
        fromStatus: issue.status,
        toStatus: newStatus,
        changedById,
      },
    }),
  ])

  return updated
}
