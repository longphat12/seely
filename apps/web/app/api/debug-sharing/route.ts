import { NextRequest, NextResponse } from 'next/server'
import { requireAuth } from '@/lib/middleware-auth'

interface MetaTag {
  property?: string
  name?: string
  content?: string
}

interface DebugResult {
  url: string
  fetchedUrl: string
  statusCode: number
  title: string | null
  description: string | null
  favicon: string | null
  og: {
    title: string | null
    description: string | null
    image: string | null
    url: string | null
    siteName: string | null
    type: string | null
  }
  twitter: {
    card: string | null
    title: string | null
    description: string | null
    image: string | null
  }
  allMeta: MetaTag[]
  warnings: string[]
}

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

function extractFavicon(html: string, baseUrl: string): string | null {
  const match = html.match(/<link[^>]*rel=["'](?:shortcut )?icon["'][^>]*href=["']([^"']*)["'][^>]*\/?>/i)
    || html.match(/<link[^>]*href=["']([^"']*)["'][^>]*rel=["'](?:shortcut )?icon["'][^>]*\/?>/i)
  if (!match) return null
  const href = match[1]
  try {
    return new URL(href, baseUrl).href
  } catch {
    return href
  }
}

function extractAllMeta(html: string): MetaTag[] {
  const metas: MetaTag[] = []
  const pattern = /<meta[^>]*>/gi
  let match
  while ((match = pattern.exec(html)) !== null) {
    const tag = match[0]
    const property = tag.match(/property=["']([^"']*)["']/i)?.[1]
    const name = tag.match(/name=["']([^"']*)["']/i)?.[1]
    const content = tag.match(/content=["']([^"']*)["']/i)?.[1]
    if ((property || name) && content !== undefined) {
      metas.push({ property: property || undefined, name: name || undefined, content: content || undefined })
    }
  }
  return metas
}

function resolveUrl(url: string, baseUrl: string): string | null {
  if (!url) return null
  try {
    return new URL(url, baseUrl).href
  } catch {
    return url
  }
}

function generateWarnings(result: DebugResult): string[] {
  const warnings: string[] = []

  if (!result.og.title) {
    warnings.push('Thiếu thẻ og:title — Tiêu đề sẽ không hiển thị khi chia sẻ trên mạng xã hội')
  } else if (result.og.title.length > 90) {
    warnings.push(`og:title quá dài (${result.og.title.length} ký tự) — Nên dưới 90 ký tự`)
  }

  if (!result.og.description) {
    warnings.push('Thiếu thẻ og:description — Mô tả sẽ không hiển thị khi chia sẻ')
  } else if (result.og.description.length > 200) {
    warnings.push(`og:description quá dài (${result.og.description.length} ký tự) — Nên dưới 200 ký tự`)
  }

  if (!result.og.image) {
    warnings.push('Thiếu thẻ og:image — Không có ảnh xem trước khi chia sẻ')
  }

  if (!result.og.url) {
    warnings.push('Thiếu thẻ og:url — Nên khai báo URL chuẩn')
  }

  if (!result.title) {
    warnings.push('Thiếu thẻ <title> — Trang web không có tiêu đề')
  }

  if (!result.description) {
    warnings.push('Thiếu thẻ meta description — Ảnh hưởng đến SEO')
  }

  if (!result.twitter.card) {
    warnings.push('Thiếu twitter:card — Preview trên Twitter/X sẽ không hiển thị đầy đủ')
  }

  if (!result.twitter.image && !result.og.image) {
    warnings.push('Không có ảnh preview cho Twitter/X')
  }

  if (!result.favicon) {
    warnings.push('Không tìm thấy favicon')
  }

  return warnings
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

    // Normalize URL
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      url = 'https://' + url
    }

    // Validate URL
    try {
      new URL(url)
    } catch {
      return NextResponse.json({ error: 'URL không hợp lệ' }, { status: 400 })
    }

    // Fetch the page
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

    const result: DebugResult = {
      url,
      fetchedUrl: baseUrl,
      statusCode: response.status,
      title: extractTitle(html),
      description: extractMetaContent(html, { name: 'description' }),
      favicon: extractFavicon(html, baseUrl),
      og: {
        title: extractMetaContent(html, { property: 'og:title' }),
        description: extractMetaContent(html, { property: 'og:description' }),
        image: resolveUrl(extractMetaContent(html, { property: 'og:image' }) || '', baseUrl),
        url: extractMetaContent(html, { property: 'og:url' }),
        siteName: extractMetaContent(html, { property: 'og:site_name' }),
        type: extractMetaContent(html, { property: 'og:type' }),
      },
      twitter: {
        card: extractMetaContent(html, { name: 'twitter:card' }),
        title: extractMetaContent(html, { name: 'twitter:title' }),
        description: extractMetaContent(html, { name: 'twitter:description' }),
        image: resolveUrl(extractMetaContent(html, { name: 'twitter:image' }) || '', baseUrl),
      },
      allMeta: extractAllMeta(html),
      warnings: [],
    }

    // Fix empty resolved URLs
    if (result.og.image === baseUrl) result.og.image = null
    if (result.twitter.image === baseUrl) result.twitter.image = null

    result.warnings = generateWarnings(result)

    return NextResponse.json(result)
  } catch {
    return NextResponse.json({ error: 'Có lỗi xảy ra khi kiểm tra URL' }, { status: 500 })
  }
}
