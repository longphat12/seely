import { describe, it, expect } from 'vitest'
import type { ExtractedSeoData } from '@seely/seo-types'
import {
  ruleCanonicalMissing, ruleMetaRobotsNoindex, ruleViewportMissing,
  ruleSchemaMissing, ruleOgMissing, ruleTwitterCardMissing,
} from '../src/rules/technical'

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

describe('Technical rules', () => {
  describe('CANONICAL_MISSING', () => {
    it('flags when canonical is null', () => {
      const issues = ruleCanonicalMissing(makeData({ canonicalUrl: null }))
      expect(issues).toHaveLength(1)
      expect(issues[0].code).toBe('CANONICAL_MISSING')
      expect(issues[0].severity).toBe('HIGH')
    })
    it('passes when canonical exists', () => {
      expect(ruleCanonicalMissing(makeData())).toHaveLength(0)
    })
  })

  describe('META_ROBOTS_NOINDEX', () => {
    it('flags when robots contains noindex', () => {
      const issues = ruleMetaRobotsNoindex(makeData({ metaRobotsContent: 'noindex,nofollow' }))
      expect(issues).toHaveLength(1)
      expect(issues[0].severity).toBe('CRITICAL')
    })
    it('flags case-insensitive', () => {
      expect(ruleMetaRobotsNoindex(makeData({ metaRobotsContent: 'NOINDEX' }))).toHaveLength(1)
    })
    it('passes when robots is index,follow', () => {
      expect(ruleMetaRobotsNoindex(makeData())).toHaveLength(0)
    })
    it('passes when robots is null', () => {
      expect(ruleMetaRobotsNoindex(makeData({ metaRobotsContent: null }))).toHaveLength(0)
    })
  })

  describe('VIEWPORT_MISSING', () => {
    it('flags when false', () => {
      const issues = ruleViewportMissing(makeData({ hasViewport: false }))
      expect(issues).toHaveLength(1)
      expect(issues[0].code).toBe('VIEWPORT_MISSING')
    })
    it('passes when true', () => {
      expect(ruleViewportMissing(makeData())).toHaveLength(0)
    })
  })

  describe('SCHEMA_MISSING', () => {
    it('flags when no schema', () => {
      expect(ruleSchemaMissing(makeData({ hasSchema: false }))).toHaveLength(1)
    })
    it('passes when has schema', () => {
      expect(ruleSchemaMissing(makeData())).toHaveLength(0)
    })
  })

  describe('OG_MISSING', () => {
    it('flags when no OG', () => {
      const issues = ruleOgMissing(makeData({ openGraphPresent: false }))
      expect(issues).toHaveLength(1)
      expect(issues[0].severity).toBe('LOW')
    })
    it('passes when OG present', () => {
      expect(ruleOgMissing(makeData())).toHaveLength(0)
    })
  })

  describe('TWITTER_CARD_MISSING', () => {
    it('flags when no twitter card', () => {
      expect(ruleTwitterCardMissing(makeData({ twitterCardPresent: false }))).toHaveLength(1)
    })
    it('passes when present', () => {
      expect(ruleTwitterCardMissing(makeData())).toHaveLength(0)
    })
  })
})
