import type { ExtractedSeoData, SeoIssue } from '@seely/seo-types'

export function ruleImagesAltMissing(data: ExtractedSeoData): SeoIssue[] {
  if (data.imagesWithoutAlt === 0) return []
  return [{
    code: 'IMAGES_ALT_MISSING', category: 'CONTENT', severity: 'HIGH',
    title: 'Hình ảnh bị thiếu Text thay thế (Alt)',
    message: `${data.imagesWithoutAlt} image(s) have no alt attribute.`,
    recommendation: 'Add descriptive alt text to all images for accessibility and SEO.',
    evidence: { count: data.imagesWithoutAlt, total: data.imagesTotal },
  }]
}

export function ruleWordCountLow(data: ExtractedSeoData): SeoIssue[] {
  if (data.wordCount >= 300) return []
  return [{
    code: 'WORD_COUNT_LOW', category: 'CONTENT', severity: 'HIGH',
    title: 'Số lượng từ bài viết quá ít',
    message: `Page has only ${data.wordCount} words. Minimum recommended is 300.`,
    recommendation: 'Add more substantive, relevant content to improve SEO value and user engagement.',
    evidence: { wordCount: data.wordCount },
  }]
}
