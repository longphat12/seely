import { describe, it, expect } from 'vitest'
import type { ExtractedSeoData } from '@seely/seo-types'
import {
  ruleTitleMissing, ruleTitleTooShort, ruleTitleTooLong,
  ruleMetaDescMissing, ruleMetaDescTooShort, ruleMetaDescTooLong,
  ruleH1Missing, ruleH1Multiple, ruleH2Missing,
} from '../src/rules/on-page'

/** Helper: create a valid baseline data object */
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

describe('On-page rules', () => {
  // --- TITLE ---
  describe('TITLE_MISSING', () => {
    it('flags when title is null', () => {
      const issues = ruleTitleMissing(makeData({ title: null }))
      expect(issues).toHaveLength(1)
      expect(issues[0].code).toBe('TITLE_MISSING')
      expect(issues[0].severity).toBe('CRITICAL')
    })
    it('flags when title is empty string', () => {
      expect(ruleTitleMissing(makeData({ title: '' }))).toHaveLength(1)
    })
    it('passes when title exists', () => {
      expect(ruleTitleMissing(makeData())).toHaveLength(0)
    })
  })

  describe('TITLE_TOO_SHORT', () => {
    it('flags when title < 30 chars', () => {
      const issues = ruleTitleTooShort(makeData({ title: 'Short' }))
      expect(issues).toHaveLength(1)
      expect(issues[0].code).toBe('TITLE_TOO_SHORT')
    })
    it('passes at 30 chars', () => {
      expect(ruleTitleTooShort(makeData({ title: 'A'.repeat(30) }))).toHaveLength(0)
    })
    it('skips when title is null (handled by TITLE_MISSING)', () => {
      expect(ruleTitleTooShort(makeData({ title: null }))).toHaveLength(0)
    })
  })

  describe('TITLE_TOO_LONG', () => {
    it('flags when title > 60 chars', () => {
      const issues = ruleTitleTooLong(makeData({ title: 'A'.repeat(61) }))
      expect(issues).toHaveLength(1)
      expect(issues[0].code).toBe('TITLE_TOO_LONG')
    })
    it('passes at 60 chars', () => {
      expect(ruleTitleTooLong(makeData({ title: 'A'.repeat(60) }))).toHaveLength(0)
    })
  })

  // --- META DESCRIPTION ---
  describe('META_DESC_MISSING', () => {
    it('flags when null', () => {
      const issues = ruleMetaDescMissing(makeData({ metaDescription: null }))
      expect(issues).toHaveLength(1)
      expect(issues[0].code).toBe('META_DESC_MISSING')
      expect(issues[0].severity).toBe('HIGH')
    })
    it('passes when present', () => {
      expect(ruleMetaDescMissing(makeData())).toHaveLength(0)
    })
  })

  describe('META_DESC_TOO_SHORT', () => {
    it('flags when < 70 chars', () => {
      const issues = ruleMetaDescTooShort(makeData({ metaDescription: 'Short desc' }))
      expect(issues).toHaveLength(1)
      expect(issues[0].code).toBe('META_DESC_TOO_SHORT')
    })
    it('skips when null', () => {
      expect(ruleMetaDescTooShort(makeData({ metaDescription: null }))).toHaveLength(0)
    })
  })

  describe('META_DESC_TOO_LONG', () => {
    it('flags when > 160 chars', () => {
      const issues = ruleMetaDescTooLong(makeData({ metaDescription: 'A'.repeat(161) }))
      expect(issues).toHaveLength(1)
      expect(issues[0].code).toBe('META_DESC_TOO_LONG')
      expect(issues[0].severity).toBe('LOW')
    })
    it('passes at 160 chars', () => {
      expect(ruleMetaDescTooLong(makeData({ metaDescription: 'A'.repeat(160) }))).toHaveLength(0)
    })
  })

  // --- HEADINGS ---
  describe('H1_MISSING', () => {
    it('flags when h1Count is 0', () => {
      const issues = ruleH1Missing(makeData({ h1Count: 0 }))
      expect(issues).toHaveLength(1)
      expect(issues[0].code).toBe('H1_MISSING')
    })
    it('passes when h1Count >= 1', () => {
      expect(ruleH1Missing(makeData())).toHaveLength(0)
    })
  })

  describe('H1_MULTIPLE', () => {
    it('flags when h1Count > 1', () => {
      const issues = ruleH1Multiple(makeData({ h1Count: 3 }))
      expect(issues).toHaveLength(1)
      expect(issues[0].code).toBe('H1_MULTIPLE')
    })
    it('passes when h1Count is 1', () => {
      expect(ruleH1Multiple(makeData())).toHaveLength(0)
    })
  })

  describe('H2_MISSING', () => {
    it('flags when h2Count is 0', () => {
      const issues = ruleH2Missing(makeData({ h2Count: 0 }))
      expect(issues).toHaveLength(1)
      expect(issues[0].code).toBe('H2_MISSING')
    })
    it('passes when h2Count >= 1', () => {
      expect(ruleH2Missing(makeData())).toHaveLength(0)
    })
  })
})
