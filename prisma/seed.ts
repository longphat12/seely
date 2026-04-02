import { PrismaClient, Severity, IssueStatus, AuditSource } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  // 1. Create test user (password: "password123" hashed with argon2)
  // For seed purposes, we use a placeholder hash
  const user = await prisma.user.upsert({
    where: { email: 'admin@seely.dev' },
    update: {},
    create: {
      email: 'admin@seely.dev',
      passwordHash: '$argon2id$v=19$m=65536,t=3,p=4$placeholder_seed_hash',
      name: 'Seely Admin',
    },
  })
  console.log(`  ✓ User: ${user.email}`)

  // 2. Create test project
  const project = await prisma.project.upsert({
    where: { domain: 'example.com' },
    update: {},
    create: {
      name: 'Example Website',
      domain: 'example.com',
      members: {
        create: {
          userId: user.id,
          role: 'owner',
        },
      },
    },
  })
  console.log(`  ✓ Project: ${project.name} (${project.domain})`)

  // 3. Create test page
  const page = await prisma.page.upsert({
    where: {
      projectId_normalizedUrl: {
        projectId: project.id,
        normalizedUrl: 'https://example.com/',
      },
    },
    update: { lastSeenAt: new Date() },
    create: {
      projectId: project.id,
      normalizedUrl: 'https://example.com/',
      path: '/',
    },
  })
  console.log(`  ✓ Page: ${page.normalizedUrl}`)

  // 4. Create test audit with metrics, issues, and snapshot
  const audit = await prisma.audit.create({
    data: {
      projectId: project.id,
      pageId: page.id,
      source: AuditSource.EXTENSION,
      url: 'https://example.com/',
      title: 'Example Domain',
      overallScore: 72,
      onPageScore: 65,
      technicalScore: 80,
      contentScore: 60,
      performanceScore: 85,
      metrics: {
        create: {
          metaDescription: null,
          titleLength: 14,
          metaDescriptionLength: 0,
          h1Count: 1,
          h2Count: 0,
          h3Count: 0,
          imagesTotal: 0,
          imagesWithoutAlt: 0,
          internalLinks: 1,
          externalLinks: 1,
          wordCount: 56,
          hasCanonical: false,
          canonicalUrl: null,
          hasMetaRobots: false,
          metaRobotsContent: null,
          hasViewport: true,
          hasSchema: false,
          schemaTypes: [],
          openGraphPresent: false,
          twitterCardPresent: false,
          lcpEstimateMs: null,
          domNodeCount: 42,
          jsRequestCount: null,
          cssRequestCount: null,
        },
      },
      issues: {
        createMany: {
          data: [
            {
              code: 'META_DESC_MISSING',
              category: 'ON_PAGE',
              severity: Severity.HIGH,
              status: IssueStatus.OPEN,
              title: 'Missing meta description',
              message: 'The page has no meta description tag.',
              recommendation:
                'Add a meta description between 70–160 characters that summarizes the page content.',
            },
            {
              code: 'CANONICAL_MISSING',
              category: 'TECHNICAL',
              severity: Severity.HIGH,
              status: IssueStatus.OPEN,
              title: 'Missing canonical URL',
              message: 'No canonical link element found.',
              recommendation:
                'Add <link rel="canonical" href="..."> pointing to the preferred URL.',
            },
            {
              code: 'SCHEMA_MISSING',
              category: 'TECHNICAL',
              severity: Severity.MEDIUM,
              status: IssueStatus.OPEN,
              title: 'No structured data',
              message: 'No JSON-LD or schema markup detected.',
              recommendation:
                'Add structured data (e.g., Organization, WebPage) using JSON-LD format.',
            },
            {
              code: 'WORD_COUNT_LOW',
              category: 'CONTENT',
              severity: Severity.HIGH,
              status: IssueStatus.OPEN,
              title: 'Low word count',
              message: 'Page has only 56 words. Minimum recommended is 300.',
              recommendation:
                'Add more substantive content to the page to improve SEO value.',
            },
            {
              code: 'H2_MISSING',
              category: 'ON_PAGE',
              severity: Severity.MEDIUM,
              status: IssueStatus.OPEN,
              title: 'No H2 headings found',
              message: 'The page has no H2 headings to structure content.',
              recommendation:
                'Add H2 headings to organize your content into logical sections.',
            },
            {
              code: 'OG_MISSING',
              category: 'TECHNICAL',
              severity: Severity.LOW,
              status: IssueStatus.OPEN,
              title: 'Missing Open Graph tags',
              message: 'No Open Graph meta tags detected.',
              recommendation:
                'Add og:title, og:description, og:image for better social sharing.',
            },
          ],
        },
      },
      snapshot: {
        create: {
          rawPayload: {
            url: 'https://example.com/',
            title: 'Example Domain',
            scannedAt: new Date().toISOString(),
            extensionVersion: '0.1.0',
          },
        },
      },
    },
  })
  console.log(`  ✓ Audit: score ${audit.overallScore} with 6 issues`)

  // 5. Create a second older audit for history chart testing
  const olderDate = new Date()
  olderDate.setDate(olderDate.getDate() - 7)

  const audit2 = await prisma.audit.create({
    data: {
      projectId: project.id,
      pageId: page.id,
      source: AuditSource.EXTENSION,
      url: 'https://example.com/',
      title: 'Example Domain',
      overallScore: 58,
      onPageScore: 50,
      technicalScore: 65,
      contentScore: 45,
      performanceScore: 75,
      createdAt: olderDate,
      metrics: {
        create: {
          titleLength: 14,
          h1Count: 2,
          h2Count: 0,
          imagesTotal: 3,
          imagesWithoutAlt: 3,
          wordCount: 42,
          hasCanonical: false,
          hasViewport: true,
          hasSchema: false,
          openGraphPresent: false,
          twitterCardPresent: false,
          domNodeCount: 38,
        },
      },
      issues: {
        createMany: {
          data: [
            {
              code: 'META_DESC_MISSING',
              category: 'ON_PAGE',
              severity: Severity.HIGH,
              status: IssueStatus.OPEN,
              title: 'Missing meta description',
              message: 'The page has no meta description tag.',
              recommendation: 'Add a meta description between 70–160 characters.',
            },
            {
              code: 'H1_MULTIPLE',
              category: 'ON_PAGE',
              severity: Severity.MEDIUM,
              status: IssueStatus.FIXED,
              title: 'Multiple H1 tags',
              message: 'Found 2 H1 tags. Only 1 is recommended.',
              recommendation: 'Keep only one H1 tag per page.',
            },
            {
              code: 'IMAGES_ALT_MISSING',
              category: 'CONTENT',
              severity: Severity.HIGH,
              status: IssueStatus.FIXED,
              title: 'Images missing alt text',
              message: '3 images have no alt attribute.',
              recommendation: 'Add descriptive alt text to all images.',
            },
            {
              code: 'WORD_COUNT_LOW',
              category: 'CONTENT',
              severity: Severity.HIGH,
              status: IssueStatus.OPEN,
              title: 'Low word count',
              message: 'Page has only 42 words.',
              recommendation: 'Add more substantive content.',
            },
          ],
        },
      },
      snapshot: {
        create: {
          rawPayload: {
            url: 'https://example.com/',
            title: 'Example Domain',
            scannedAt: olderDate.toISOString(),
            extensionVersion: '0.1.0',
          },
        },
      },
    },
  })
  console.log(`  ✓ Audit (older): score ${audit2.overallScore} with 4 issues`)

  console.log('\n✅ Seed complete!')
}

main()
  .catch((e) => {
    console.error('❌ Seed error:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
