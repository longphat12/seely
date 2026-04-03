import type { ExtractedSeoData, SeoIssue, SeoScoreBreakdown } from '@seely/seo-types'

export type ExtensionMessage =
  | { type: 'REQUEST_SCAN' }
  | { type: 'SCAN_RESULT'; payload: ExtractedSeoData }
  | { type: 'SCAN_ERROR'; error: string }
  | { type: 'SAVE_AUDIT' }
  | {
    type: 'SAVE_AUDIT_SUCCESS'
    auditId: string
    overallScore: number
    projectId: string
    pageId: string
    normalizedUrl: string
  }
  | { type: 'SAVE_AUDIT_ERROR'; error: string }
  | { type: 'GET_SCAN_DATA' }
  | { type: 'SCAN_DATA'; payload: ScanCacheData | null }

export interface ScanCacheData {
  extracted: ExtractedSeoData
  score: SeoScoreBreakdown
  issues: SeoIssue[]
  url: string
  scannedAt: string
}
