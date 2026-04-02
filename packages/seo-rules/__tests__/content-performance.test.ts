import { describe, it, expect } from 'vitest'
import type { ExtractedSeoData } from '@seely/seo-types'
import { ruleImagesAltMissing, ruleWordCountLow } from '../src/rules/content'
import { ruleDomTooLarge } from '../src/rules/performance'

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

describe('Content rules', () => {
  describe('IMAGES_ALT_MISSING', () => {
    it('flags when images without alt > 0', () => {
      const issues = ruleImagesAltMissing(makeData({ imagesWithoutAlt: 4, imagesTotal: 10 }))
      expect(issues).toHaveLength(1)
      expect(issues[0].code).toBe('IMAGES_ALT_MISSING')
      expect(issues[0].severity).toBe('HIGH')
      expect(issues[0].evidence).toEqual({ count: 4, total: 10 })
    })
    it('passes when all images have alt', () => {
      expect(ruleImagesAltMissing(makeData())).toHaveLength(0)
    })
  })

  describe('WORD_COUNT_LOW', () => {
    it('flags when word count < 300', () => {
      const issues = ruleWordCountLow(makeData({ wordCount: 150 }))
      expect(issues).toHaveLength(1)
      expect(issues[0].code).toBe('WORD_COUNT_LOW')
    })
    it('passes at 300 words', () => {
      expect(ruleWordCountLow(makeData({ wordCount: 300 }))).toHaveLength(0)
    })
  })
})

describe('Performance rules', () => {
  describe('DOM_TOO_LARGE', () => {
    it('flags when DOM > 1500 nodes', () => {
      const issues = ruleDomTooLarge(makeData({ domNodeCount: 2000 }))
      expect(issues).toHaveLength(1)
      expect(issues[0].code).toBe('DOM_TOO_LARGE')
      expect(issues[0].severity).toBe('MEDIUM')
    })
    it('passes at 1500 nodes', () => {
      expect(ruleDomTooLarge(makeData({ domNodeCount: 1500 }))).toHaveLength(0)
    })
  })
})
