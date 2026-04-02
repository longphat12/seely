import type { ExtractedSeoData, SeoIssue } from '@seely/seo-types'

export function ruleDomTooLarge(data: ExtractedSeoData): SeoIssue[] {
  if (data.domNodeCount <= 1500) return []
  return [{
    code: 'DOM_TOO_LARGE', category: 'PERFORMANCE', severity: 'MEDIUM',
    title: 'Kích thước DOM quá lớn (Phức tạp)',
    message: `Page has ${data.domNodeCount} DOM nodes. Recommended maximum is 1,500.`,
    recommendation: 'Reduce DOM complexity by removing unnecessary elements, using virtualization, or lazy-loading sections.',
    evidence: { nodeCount: data.domNodeCount },
  }]
}
