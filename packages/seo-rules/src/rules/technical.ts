import type { ExtractedSeoData, SeoIssue } from '@seely/seo-types'

export function ruleCanonicalMissing(data: ExtractedSeoData): SeoIssue[] {
  if (data.canonicalUrl) return []
  return [{
    code: 'CANONICAL_MISSING', category: 'TECHNICAL', severity: 'HIGH',
    title: 'Thiếu thẻ Canonical URL',
    message: 'No canonical link element found.',
    recommendation: 'Add <link rel="canonical" href="..."> pointing to the preferred URL of this page.',
  }]
}

export function ruleMetaRobotsNoindex(data: ExtractedSeoData): SeoIssue[] {
  if (!data.metaRobotsContent || !data.metaRobotsContent.toLowerCase().includes('noindex')) return []
  return [{
    code: 'META_ROBOTS_NOINDEX', category: 'TECHNICAL', severity: 'CRITICAL',
    title: 'Trang đang bị chặn (Noindex)',
    message: 'The meta robots tag contains "noindex", preventing search engines from indexing this page.',
    recommendation: 'Remove "noindex" from the robots meta tag unless you intentionally want to hide this page.',
    evidence: { content: data.metaRobotsContent },
  }]
}

export function ruleViewportMissing(data: ExtractedSeoData): SeoIssue[] {
  if (data.hasViewport) return []
  return [{
    code: 'VIEWPORT_MISSING', category: 'TECHNICAL', severity: 'HIGH',
    title: 'Thiếu thẻ Viewport',
    message: 'No viewport meta tag found. The page may not render correctly on mobile devices.',
    recommendation: 'Add <meta name="viewport" content="width=device-width, initial-scale=1">.',
  }]
}

export function ruleSchemaMissing(data: ExtractedSeoData): SeoIssue[] {
  if (data.hasSchema) return []
  return [{
    code: 'SCHEMA_MISSING', category: 'TECHNICAL', severity: 'MEDIUM',
    title: 'Không tìm thấy Dữ liệu cấu trúc (Schema)',
    message: 'No JSON-LD or schema markup detected on this page.',
    recommendation: 'Add structured data (e.g., Organization, WebPage, Article) using JSON-LD format.',
  }]
}

export function ruleOgMissing(data: ExtractedSeoData): SeoIssue[] {
  if (data.openGraphPresent) return []
  return [{
    code: 'OG_MISSING', category: 'TECHNICAL', severity: 'LOW',
    title: 'Thiếu thẻ Open Graph (Zalo/FB)',
    message: 'No Open Graph meta tags detected.',
    recommendation: 'Add og:title, og:description, og:image meta tags for better social media sharing.',
  }]
}

export function ruleTwitterCardMissing(data: ExtractedSeoData): SeoIssue[] {
  if (data.twitterCardPresent) return []
  return [{
    code: 'TWITTER_CARD_MISSING', category: 'TECHNICAL', severity: 'LOW',
    title: 'Thiếu thẻ Twitter Card',
    message: 'No Twitter Card meta tags detected.',
    recommendation: 'Add twitter:card, twitter:title, twitter:description meta tags.',
  }]
}
