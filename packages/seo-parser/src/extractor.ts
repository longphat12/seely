import type { ExtractedSeoData } from '@seely/seo-types'
import { isInternalLink } from './url-utils'
import { countWords, getBodyText } from './text-utils'

/**
 * Extract all SEO-relevant data from the current page DOM.
 * Designed to run inside a content script (browser context).
 * Returns a pure data object with no side effects.
 */
export function extractSeoData(doc: Document = document, loc: Location = location): ExtractedSeoData {
  const url = loc.href

  // Title
  const title = doc.title || null

  // Meta description
  const metaDescEl = doc.querySelector<HTMLMetaElement>('meta[name="description"]')
  const metaDescription = metaDescEl?.content?.trim() || null

  // Canonical
  const canonicalEl = doc.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  const canonicalUrl = canonicalEl?.href || null

  // Meta robots
  const robotsEl = doc.querySelector<HTMLMetaElement>('meta[name="robots"]')
  const metaRobotsContent = robotsEl?.content?.trim() || null

  // Viewport
  const hasViewport = !!doc.querySelector('meta[name="viewport"]')

  // Headings
  const h1Count = doc.querySelectorAll('h1').length
  const h2Count = doc.querySelectorAll('h2').length
  const h3Count = doc.querySelectorAll('h3').length

  // Images
  const images = Array.from(doc.images)
  const imagesTotal = images.length
  const imagesWithoutAlt = images.filter((img) => !img.alt || !img.alt.trim()).length

  // Links
  const allLinks = Array.from(doc.querySelectorAll<HTMLAnchorElement>('a[href]'))
  let internalLinks = 0
  let externalLinks = 0
  for (const link of allLinks) {
    if (isInternalLink(link.href, url)) {
      internalLinks++
    } else {
      externalLinks++
    }
  }

  // Word count
  const bodyText = getBodyText(doc)
  const wordCount = countWords(bodyText)

  // DOM node count
  const domNodeCount = doc.querySelectorAll('*').length

  // Schema / JSON-LD
  const jsonLdScripts = doc.querySelectorAll('script[type="application/ld+json"]')
  const hasSchema = jsonLdScripts.length > 0
  const schemaTypes: string[] = []
  jsonLdScripts.forEach((script) => {
    try {
      const data = JSON.parse(script.textContent || '')
      if (data['@type']) schemaTypes.push(data['@type'])
      if (Array.isArray(data['@graph'])) {
        data['@graph'].forEach((item: Record<string, unknown>) => {
          if (item['@type'] && typeof item['@type'] === 'string') {
            schemaTypes.push(item['@type'])
          }
        })
      }
    } catch {
      // ignore parse errors
    }
  })

  // Open Graph
  const openGraphPresent = !!doc.querySelector('meta[property^="og:"]')
  const ogImageEl = doc.querySelector('meta[property="og:image"], meta[name="og:image"], meta[property="og:image:url"], meta[property="og:image:secure_url"]')
  let ogImage = ogImageEl?.getAttribute('content')?.trim() || null

  // Fallback to twitter image if OG is missing
  if (!ogImage) {
    const twImageEl = doc.querySelector('meta[name="twitter:image"], meta[name="twitter:image:src"]')
    ogImage = twImageEl?.getAttribute('content')?.trim() || null
  }

  if (ogImage) {
    try {
      ogImage = new URL(ogImage, url).href
    } catch {
      // ignore parse errors
    }
  }

  // Twitter Card
  const twitterCardPresent = !!doc.querySelector('meta[name^="twitter:"]')

  // Performance (best-effort, may be null)
  let lcpEstimateMs: number | null = null
  let jsRequestCount: number | null = null
  let cssRequestCount: number | null = null
  try {
    const entries = performance.getEntriesByType('resource') as PerformanceResourceTiming[]
    jsRequestCount = entries.filter((e) => e.initiatorType === 'script').length
    cssRequestCount = entries.filter((e) => e.initiatorType === 'link' || e.initiatorType === 'css').length

    const paintEntries = performance.getEntriesByType('paint')
    const lcpEntry = paintEntries.find((e) => e.name === 'largest-contentful-paint')
    if (lcpEntry) {
      lcpEstimateMs = Math.round(lcpEntry.startTime)
    }
  } catch {
    // performance API may not be available
  }

  return {
    url,
    title,
    metaDescription,
    canonicalUrl,
    metaRobotsContent,
    h1Count,
    h2Count,
    h3Count,
    imagesTotal,
    imagesWithoutAlt,
    internalLinks,
    externalLinks,
    wordCount,
    hasViewport,
    hasSchema,
    schemaTypes,
    openGraphPresent,
    ogImage,
    twitterCardPresent,
    domNodeCount,
    jsRequestCount,
    cssRequestCount,
    lcpEstimateMs,
  }
}
