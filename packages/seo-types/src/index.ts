export type Severity = 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL'
export type IssueStatus = 'OPEN' | 'FIXED' | 'IGNORED'
export type IssueCategory = 'ON_PAGE' | 'TECHNICAL' | 'CONTENT' | 'PERFORMANCE' | 'SOCIAL'

export interface ExtractedSeoData {
  url: string
  title: string | null
  metaDescription: string | null
  canonicalUrl: string | null
  metaRobotsContent: string | null
  h1Count: number
  h2Count: number
  h3Count: number
  imagesTotal: number
  imagesWithoutAlt: number
  internalLinks: number
  externalLinks: number
  wordCount: number
  hasViewport: boolean
  hasSchema: boolean
  schemaTypes: string[]
  openGraphPresent: boolean
  twitterCardPresent: boolean
  ogImage: string | null
  domNodeCount: number
  jsRequestCount: number | null
  cssRequestCount: number | null
  lcpEstimateMs: number | null
}

export interface SeoIssue {
  code: string
  category: IssueCategory
  severity: Severity
  title: string
  message: string
  recommendation: string
  selector?: string
  evidence?: Record<string, unknown>
}

export interface SeoScoreBreakdown {
  overall: number
  onPage: number
  technical: number
  content: number
  performance: number
  social: number
}

export interface AuditPayload {
  projectDomain: string
  url: string
  extracted: ExtractedSeoData
  score: SeoScoreBreakdown
  issues: SeoIssue[]
  extensionVersion: string
  userAgent: string
  scannedAt: string
}

/** A single rule function signature */
export type SeoRuleFn = (data: ExtractedSeoData) => SeoIssue[]
