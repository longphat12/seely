import type { ExtractedSeoData, SeoIssue } from '@seely/seo-types'

/**
 * Zalo/Social Sharing rules.
 * Checks for Open Graph tags and validates them against Zalo requirements.
 */
export const socialRules = (data: ExtractedSeoData): SeoIssue[] => {
  const issues: SeoIssue[] = []

  // 1. OG Image presence
  if (!data.ogImage) {
    issues.push({
      code: 'OG_IMAGE_MISSING',
      category: 'SOCIAL',
      severity: 'CRITICAL',
      title: 'Missing Open Graph Image',
      message: 'Zalo and other social platforms will not show a preview image when this URL is shared.',
      recommendation: 'Add a <meta property="og:image" content="..."> tag with a high-quality image (1200x630px).',
    })
  }

  // 2. Open Graph Presence
  if (!data.openGraphPresent) {
    issues.push({
      code: 'OG_TAGS_MISSING',
      category: 'SOCIAL',
      severity: 'HIGH',
      title: 'Missing Open Graph Tags',
      message: 'Basic Open Graph tags are missing, which may result in poor sharing previews on Zalo.',
      recommendation: 'Implement og:title, og:description, and og:type tags.',
    })
  }

  // 3. Title Length for Zalo (max 70)
  if (data.title && data.title.length > 70) {
    issues.push({
      code: 'ZALO_TITLE_TOO_LONG',
      category: 'SOCIAL',
      severity: 'LOW',
      title: 'Title too long for Zalo',
      message: `The title is ${data.title.length} characters long. Zalo may truncate titles longer than 70 characters.`,
      recommendation: 'Keep the title under 70 characters for optimal display on Zalo.',
    })
  }

  // 4. Description Length for Zalo (max 160)
  if (data.metaDescription && data.metaDescription.length > 160) {
    issues.push({
      code: 'ZALO_DESC_TOO_LONG',
      category: 'SOCIAL',
      severity: 'LOW',
      title: 'Description too long for Zalo',
      message: `The description is ${data.metaDescription.length} characters long. Zalo may truncate descriptions longer than 160 characters.`,
      recommendation: 'Keep the description under 160 characters for optimal display on Zalo.',
    })
  }

  return issues
}
