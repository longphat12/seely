/**
 * Normalize a URL by removing trailing slashes, hash, and lowercasing hostname.
 */
export function normalizeUrl(raw: string): string {
  try {
    const url = new URL(raw)
    url.hash = ''
    // Remove trailing slash except for root path
    if (url.pathname.length > 1 && url.pathname.endsWith('/')) {
      url.pathname = url.pathname.slice(0, -1)
    }
    return url.toString()
  } catch {
    return raw
  }
}

/**
 * Extract the domain (hostname) from a URL string.
 */
export function extractDomain(raw: string): string {
  try {
    return new URL(raw).hostname
  } catch {
    return raw
  }
}

/**
 * Determine if a link is internal (same hostname) or external.
 */
export function isInternalLink(linkHref: string, pageUrl: string): boolean {
  try {
    const link = new URL(linkHref, pageUrl)
    const page = new URL(pageUrl)
    return link.hostname === page.hostname
  } catch {
    return false
  }
}
