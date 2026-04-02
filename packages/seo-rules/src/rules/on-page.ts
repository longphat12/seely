import type { ExtractedSeoData, SeoIssue } from '@seely/seo-types'

export function ruleTitleMissing(data: ExtractedSeoData): SeoIssue[] {
  if (data.title && data.title.trim().length > 0) return []
  return [{
    code: 'TITLE_MISSING', category: 'ON_PAGE', severity: 'CRITICAL',
    title: 'Thiếu thẻ Tiêu đề (Title)',
    message: 'The page has no title tag or the title is empty.',
    recommendation: 'Add a unique, descriptive title tag between 30–60 characters.',
  }]
}

export function ruleTitleTooShort(data: ExtractedSeoData): SeoIssue[] {
  if (!data.title || data.title.trim().length === 0 || data.title.trim().length >= 30) return []
  return [{
    code: 'TITLE_TOO_SHORT', category: 'ON_PAGE', severity: 'MEDIUM',
    title: 'Thẻ Tiêu đề quá ngắn',
    message: `Title is ${data.title.trim().length} characters. Minimum recommended is 30.`,
    recommendation: 'Extend the title to at least 30 characters for better SEO visibility.',
    evidence: { length: data.title.trim().length },
  }]
}

export function ruleTitleTooLong(data: ExtractedSeoData): SeoIssue[] {
  if (!data.title || data.title.trim().length <= 60) return []
  return [{
    code: 'TITLE_TOO_LONG', category: 'ON_PAGE', severity: 'MEDIUM',
    title: 'Thẻ Tiêu đề quá dài',
    message: `Title is ${data.title.trim().length} characters. Maximum recommended is 60.`,
    recommendation: 'Shorten the title to 60 characters or fewer to avoid truncation in search results.',
    evidence: { length: data.title.trim().length },
  }]
}

export function ruleMetaDescMissing(data: ExtractedSeoData): SeoIssue[] {
  if (data.metaDescription && data.metaDescription.trim().length > 0) return []
  return [{
    code: 'META_DESC_MISSING', category: 'ON_PAGE', severity: 'HIGH',
    title: 'Thiếu Mô tả (Meta Description)',
    message: 'The page has no meta description tag.',
    recommendation: 'Add a meta description between 70–160 characters that summarizes the page content.',
  }]
}

export function ruleMetaDescTooShort(data: ExtractedSeoData): SeoIssue[] {
  if (!data.metaDescription || data.metaDescription.trim().length === 0 || data.metaDescription.trim().length >= 70) return []
  return [{
    code: 'META_DESC_TOO_SHORT', category: 'ON_PAGE', severity: 'MEDIUM',
    title: 'Mô tả Meta quá ngắn',
    message: `Meta description is ${data.metaDescription.trim().length} characters. Minimum recommended is 70.`,
    recommendation: 'Expand the meta description to at least 70 characters.',
    evidence: { length: data.metaDescription.trim().length },
  }]
}

export function ruleMetaDescTooLong(data: ExtractedSeoData): SeoIssue[] {
  if (!data.metaDescription || data.metaDescription.trim().length <= 160) return []
  return [{
    code: 'META_DESC_TOO_LONG', category: 'ON_PAGE', severity: 'LOW',
    title: 'Mô tả Meta quá dài',
    message: `Meta description is ${data.metaDescription.trim().length} characters. Maximum recommended is 160.`,
    recommendation: 'Shorten the meta description to 160 characters or fewer.',
    evidence: { length: data.metaDescription.trim().length },
  }]
}

export function ruleH1Missing(data: ExtractedSeoData): SeoIssue[] {
  if (data.h1Count > 0) return []
  return [{
    code: 'H1_MISSING', category: 'ON_PAGE', severity: 'HIGH',
    title: 'Không tìm thấy thẻ H1',
    message: 'The page has no H1 heading.',
    recommendation: 'Add exactly one H1 heading that describes the main topic of the page.',
  }]
}

export function ruleH1Multiple(data: ExtractedSeoData): SeoIssue[] {
  if (data.h1Count <= 1) return []
  return [{
    code: 'H1_MULTIPLE', category: 'ON_PAGE', severity: 'MEDIUM',
    title: 'Trang có quá nhiều thẻ H1',
    message: `Found ${data.h1Count} H1 tags. Only 1 is recommended per page.`,
    recommendation: 'Keep only one H1 tag and use H2–H6 for sub-sections.',
    evidence: { count: data.h1Count },
  }]
}

export function ruleH2Missing(data: ExtractedSeoData): SeoIssue[] {
  if (data.h2Count > 0) return []
  return [{
    code: 'H2_MISSING', category: 'ON_PAGE', severity: 'MEDIUM',
    title: 'Không tìm thấy thẻ H2',
    message: 'The page has no H2 headings to structure content.',
    recommendation: 'Add H2 headings to organize your content into logical sections.',
  }]
}
