import { prisma } from '../../prisma'
import { runAudit } from '@seely/seo-rules'
import type { AuditPayload } from '@seely/seo-types'
import type { Prisma } from '@prisma-client'
import { findOrCreateByDomain } from './project.service'
import { findOrCreatePage } from './page.service'

export async function ingestAudit(payload: AuditPayload, userId?: string) {
  // 1. Find or create project by domain
  const project = await findOrCreateByDomain(payload.projectDomain, userId)

  // 2. Find or create page
  const page = await findOrCreatePage(project.id, payload.url)

  // 3. Server re-score (source of truth)
  const { issues: serverIssues, score: serverScore } = runAudit(payload.extracted)

  // 4. Create audit with nested metrics, issues, snapshot
  const audit = await prisma.audit.create({
    data: {
      projectId: project.id,
      pageId: page.id,
      source: 'EXTENSION',
      url: payload.url,
      title: payload.extracted.title,
      overallScore: serverScore.overall,
      onPageScore: serverScore.onPage,
      technicalScore: serverScore.technical,
      contentScore: serverScore.content,
      performanceScore: serverScore.performance,
      socialScore: serverScore.social,
      metrics: {
        create: {
          metaDescription: payload.extracted.metaDescription,
          titleLength: payload.extracted.title?.length ?? null,
          metaDescriptionLength: payload.extracted.metaDescription?.length ?? null,
          h1Count: payload.extracted.h1Count,
          h2Count: payload.extracted.h2Count,
          h3Count: payload.extracted.h3Count,
          imagesTotal: payload.extracted.imagesTotal,
          imagesWithoutAlt: payload.extracted.imagesWithoutAlt,
          internalLinks: payload.extracted.internalLinks,
          externalLinks: payload.extracted.externalLinks,
          wordCount: payload.extracted.wordCount,
          hasCanonical: !!payload.extracted.canonicalUrl,
          canonicalUrl: payload.extracted.canonicalUrl,
          hasMetaRobots: !!payload.extracted.metaRobotsContent,
          metaRobotsContent: payload.extracted.metaRobotsContent,
          hasViewport: payload.extracted.hasViewport,
          hasSchema: payload.extracted.hasSchema,
          schemaTypes: payload.extracted.schemaTypes as Prisma.InputJsonValue,
          openGraphPresent: payload.extracted.openGraphPresent,
          ogImage: payload.extracted.ogImage,
          twitterCardPresent: payload.extracted.twitterCardPresent,
          lcpEstimateMs: payload.extracted.lcpEstimateMs,
          domNodeCount: payload.extracted.domNodeCount,
          jsRequestCount: payload.extracted.jsRequestCount,
          cssRequestCount: payload.extracted.cssRequestCount,
        },
      },
      issues: {
        createMany: {
          data: serverIssues.map((i) => ({
            code: i.code,
            category: i.category,
            severity: i.severity as 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL',
            title: i.title,
            message: i.message,
            recommendation: i.recommendation,
            selector: i.selector ?? null,
            evidence: (i.evidence as Prisma.InputJsonValue) ?? undefined,
          })),
        },
      },
      snapshot: {
        create: {
          rawPayload: payload as unknown as Prisma.InputJsonValue,
        },
      },
    },
  })

  return { auditId: audit.id, overallScore: audit.overallScore }
}

export async function getAudit(auditId: string) {
  return prisma.audit.findUnique({
    where: { id: auditId },
    include: { metrics: true, issues: true, snapshot: true },
  })
}

export async function listAuditsByProject(projectId: string) {
  return prisma.audit.findMany({
    where: { projectId },
    orderBy: { createdAt: 'desc' },
    take: 50,
    select: {
      id: true, url: true, title: true, overallScore: true,
      onPageScore: true, technicalScore: true, contentScore: true,
      performanceScore: true, source: true, createdAt: true,
    },
  })
}

export async function listAuditsByPage(pageId: string) {
  return prisma.audit.findMany({
    where: { pageId },
    orderBy: { createdAt: 'desc' },
    take: 50,
    select: {
      id: true, url: true, title: true, overallScore: true,
      onPageScore: true, technicalScore: true, contentScore: true,
      performanceScore: true, source: true, createdAt: true,
    },
  })
}
