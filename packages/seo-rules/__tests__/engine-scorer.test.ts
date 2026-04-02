import { describe, it, expect } from 'vitest'
import type { ExtractedSeoData } from '@seely/seo-types'
import { runAudit, ALL_RULES } from '../src/engine'
import { calculateScore } from '../src/scorer'

function makeData(overrides: Partial<ExtractedSeoData> = {}): ExtractedSeoData {
  return {
    url: 'https://example.com/',
    title: 'A good page title that is long enough',
    metaDescription: 'A meta description that is long enough to pass the minimum requirement of seventy characters easily here.',
    canonicalUrl: 'https://example.com/',
    metaRobotsContent: 'index,follow',
    h1Count: 1, h2Count: 2, h3Count: 1,
    imagesTotal: 5, imagesWithoutAlt: 0,
    internalLinks: 10, externalLinks: 2,
    wordCount: 500, hasViewport: true,
    hasSchema: true, schemaTypes: ['WebPage'],
    openGraphPresent: true, twitterCardPresent: true,
    domNodeCount: 800,
    jsRequestCount: 5, cssRequestCount: 2, lcpEstimateMs: 1200,
    ...overrides,
  }
}

describe('Engine', () => {
  it('has exactly 18 rules', () => {
    expect(ALL_RULES).toHaveLength(18)
  })

  it('returns 0 issues for a perfect page', () => {
    const result = runAudit(makeData())
    expect(result.issues).toHaveLength(0)
    expect(result.score.overall).toBe(100)
    expect(result.score.onPage).toBe(100)
    expect(result.score.technical).toBe(100)
    expect(result.score.content).toBe(100)
    expect(result.score.performance).toBe(100)
  })

  it('detects multiple issues on a bad page', () => {
    const result = runAudit(makeData({
      title: null,
      metaDescription: null,
      h1Count: 0,
      h2Count: 0,
      canonicalUrl: null,
      hasViewport: false,
      hasSchema: false,
      openGraphPresent: false,
      twitterCardPresent: false,
      imagesWithoutAlt: 5,
      wordCount: 50,
      domNodeCount: 2000,
    }))
    expect(result.issues.length).toBeGreaterThan(10)
    expect(result.score.overall).toBeLessThan(30)
  })

  it('returns deterministic results', () => {
    const data = makeData({ title: null, h1Count: 0 })
    const r1 = runAudit(data)
    const r2 = runAudit(data)
    expect(r1).toEqual(r2)
  })
})

describe('Scorer', () => {
  it('returns 100 when no issues', () => {
    const score = calculateScore([])
    expect(score.overall).toBe(100)
    expect(score.onPage).toBe(100)
  })

  it('never goes below 0', () => {
    // Create massive penalty
    const issues = Array(20).fill({
      code: 'TEST', category: 'ON_PAGE', severity: 'CRITICAL',
      title: 't', message: 'm', recommendation: 'r',
    })
    const score = calculateScore(issues)
    expect(score.onPage).toBe(0)
    expect(score.overall).toBeGreaterThanOrEqual(0)
  })

  it('weighted average is correct for single category hit', () => {
    // 1 CRITICAL on-page issue: penalty = 15, raw = 35-15=20, normalized = (20/35)*100 ≈ 57
    const score = calculateScore([{
      code: 'TITLE_MISSING', category: 'ON_PAGE', severity: 'CRITICAL',
      title: 't', message: 'm', recommendation: 'r',
    }])
    expect(score.onPage).toBe(57)
    expect(score.technical).toBe(100)
    expect(score.content).toBe(100)
    expect(score.performance).toBe(100)
    // overall = (57*35 + 100*25 + 100*20 + 100*20) / 100 = (1995+2500+2000+2000)/100 = 84.95 ≈ 85
    expect(score.overall).toBe(85)
  })
})
