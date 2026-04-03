import { NextRequest, NextResponse } from 'next/server'
import { requireAuth } from '@/lib/middleware-auth'
import { ingestAudit } from '@/lib/server/services/audit.service'
import type { ExtractedSeoData, AuditPayload } from '@seely/seo-types'

function extractMetaContent(html: string, selector: { property?: string; name?: string }): string | null {
  let pattern: RegExp
  if (selector.property) {
    pattern = new RegExp(
      `<meta[^>]*property=["']${escapeRegex(selector.property)}["'][^>]*content=["']([^"']*)["'][^>]*/?>|` +
      `<meta[^>]*content=["']([^"']*)["'][^>]*property=["']${escapeRegex(selector.property)}["'][^>]*/?>`,
      'i'
    )
  } else if (selector.name) {
    pattern = new RegExp(
      `<meta[^>]*name=["']${escapeRegex(selector.name)}["'][^>]*content=["']([^"']*)["'][^>]*/?>|` +
      `<meta[^>]*content=["']([^"']*)["'][^>]*name=["']${escapeRegex(selector.name)}["'][^>]*/?>`,
      'i'
    )
  } else {
    return null
  }
  const match = html.match(pattern)
  if (!match) return null
  return match[1] || match[2] || null
}

function escapeRegex(str: string) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function extractTitle(html: string): string | null {
  const match = html.match(/<title[^>]*>([^<]*)<\/title>/i)
  return match ? match[1].trim() : null
}

function countTags(html: string, tag: string): number {
  const pattern = new RegExp(`<${tag}\\b`, 'gi')
  const matches = html.match(pattern)
  return matches ? matches.length : 0
}

function countImagesWithoutAlt(html: string): number {
  const pattern = /<img\b([^>]*)>/gi
  let count = 0
  let match
  while ((match = pattern.exec(html)) !== null) {
    if (!/alt=["'][^"']*["']/i.test(match[1])) {
      count++
    }
  }
  return count
}

export async function POST(req: NextRequest) {
  const auth = await requireAuth(req)
  if (auth instanceof NextResponse) return auth

  try {
    const body = await req.json()
    let { url } = body as { url: string }

    if (!url) {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 })
    }

    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      url = 'https://' + url
    }

    let parsedUrl: URL
    try {
      parsedUrl = new URL(url)
    } catch {
      return NextResponse.json({ error: 'URL không hợp lệ' }, { status: 400 })
    }

    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 15000)

    let response: Response
    try {
      response = await fetch(url, {
        signal: controller.signal,
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; SeelyBot/1.0; +https://seely-web.vercel.app)',
          'Accept': 'text/html,application/xhtml+xml',
          'Accept-Language': 'vi,en;q=0.9',
        },
        redirect: 'follow',
      })
    } catch (err) {
      clearTimeout(timeout)
      const message = err instanceof Error && err.name === 'AbortError'
        ? 'Trang web không phản hồi (timeout 15s)'
        : 'Không thể kết nối đến trang web'
      return NextResponse.json({ error: message }, { status: 502 })
    }
    clearTimeout(timeout)

    const html = await response.text()
    const baseUrl = response.url || url

    const title = extractTitle(html)
    const metaDescription = extractMetaContent(html, { name: 'description' })
    const canonicalUrl = extractMetaContent(html, { name: 'canonical' }) // Usually a <link> but simplified here
    const metaRobotsContent = extractMetaContent(html, { name: 'robots' })
    const ogTitle = extractMetaContent(html, { property: 'og:title' })
    
    // Attempt canonical from link tag if not found in meta
    let actualCanonical = canonicalUrl;
    if (!actualCanonical) {
      const canonicalMatch = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["'][^>]*\/?>/i)
      if (canonicalMatch) actualCanonical = canonicalMatch[1]
    }

    let ogImage = extractMetaContent(html, { property: 'og:image' })
    if (ogImage && ogImage !== baseUrl) {
      try {
        ogImage = new URL(ogImage, baseUrl).href
      } catch {}
    } else {
      ogImage = null
    }

    const twitterCard = extractMetaContent(html, { name: 'twitter:card' })

    const extracted: ExtractedSeoData = {
      url: baseUrl,
      title: title || null,
      metaDescription: metaDescription || null,
      canonicalUrl: actualCanonical || null,
      metaRobotsContent: metaRobotsContent || null,
      h1Count: countTags(html, 'h1'),
      h2Count: countTags(html, 'h2'),
      h3Count: countTags(html, 'h3'),
      imagesTotal: countTags(html, 'img'),
      imagesWithoutAlt: countImagesWithoutAlt(html),
      internalLinks: 0, // Hard to compute without parsing all a hrefs and checking domain
      externalLinks: 0,
      wordCount: html.replace(/<[^>]*>?/gm, ' ').split(/\s+/).length, // Rough estimate
      hasViewport: /<meta[^>]*name=["']viewport["'][^>]*>/i.test(html),
      hasSchema: /<script[^>]*type=["']application\/ld\+json["'][^>]*>/i.test(html),
      schemaTypes: [],
      openGraphPresent: !!(ogTitle || ogImage),
      twitterCardPresent: !!twitterCard,
      ogImage: ogImage || null,
      domNodeCount: countTags(html, '') - countTags(html, 'img') - countTags(html, 'br') - countTags(html, 'hr'), // Rough estimate
      jsRequestCount: countTags(html, 'script'),
      cssRequestCount: countTags(html, 'link'),
      lcpEstimateMs: 0,
    }

    const payload: AuditPayload = {
      projectDomain: parsedUrl.hostname,
      url: baseUrl,
      extracted,
      score: { overall: 0, onPage: 0, technical: 0, content: 0, performance: 0, social: 0 },
      issues: [],
      extensionVersion: 'manual',
      userAgent: 'SeelyBot/1.0',
      scannedAt: new Date().toISOString()
    }

    const result = await ingestAudit(payload, auth.userId, 'MANUAL')

    return NextResponse.json(result, { status: 201 })
  } catch (e) {
    const msg = e instanceof Error ? e.message : 'Audit server process failed'
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
