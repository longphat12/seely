import { z } from 'zod'

const severityEnum = z.enum(['LOW', 'MEDIUM', 'HIGH', 'CRITICAL'])
const categoryEnum = z.enum(['ON_PAGE', 'TECHNICAL', 'CONTENT', 'PERFORMANCE'])

const extractedSeoDataSchema = z.object({
  url: z.string().url(),
  title: z.string().nullable(),
  metaDescription: z.string().nullable(),
  canonicalUrl: z.string().nullable(),
  metaRobotsContent: z.string().nullable(),
  h1Count: z.number().int().min(0),
  h2Count: z.number().int().min(0),
  h3Count: z.number().int().min(0),
  imagesTotal: z.number().int().min(0),
  imagesWithoutAlt: z.number().int().min(0),
  internalLinks: z.number().int().min(0),
  externalLinks: z.number().int().min(0),
  wordCount: z.number().int().min(0),
  hasViewport: z.boolean(),
  hasSchema: z.boolean(),
  schemaTypes: z.array(z.string()),
  openGraphPresent: z.boolean(),
  twitterCardPresent: z.boolean(),
  ogImage: z.string().nullable(),
  domNodeCount: z.number().int().min(0),
  jsRequestCount: z.number().int().nullable(),
  cssRequestCount: z.number().int().nullable(),
  lcpEstimateMs: z.number().int().nullable(),
})

const seoIssueSchema = z.object({
  code: z.string(),
  category: categoryEnum,
  severity: severityEnum,
  title: z.string(),
  message: z.string(),
  recommendation: z.string(),
  selector: z.string().optional(),
  evidence: z.record(z.unknown()).optional(),
})

const scoreBreakdownSchema = z.object({
  overall: z.number().int().min(0).max(100),
  onPage: z.number().int().min(0).max(100),
  technical: z.number().int().min(0).max(100),
  content: z.number().int().min(0).max(100),
  performance: z.number().int().min(0).max(100),
})

export const auditPayloadSchema = z.object({
  projectDomain: z.string().min(1).max(255),
  url: z.string().url(),
  extracted: extractedSeoDataSchema,
  score: scoreBreakdownSchema,
  issues: z.array(seoIssueSchema),
  extensionVersion: z.string(),
  userAgent: z.string(),
  scannedAt: z.string().datetime(),
})
