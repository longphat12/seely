import type { ExtractedSeoData, SeoIssue, SeoScoreBreakdown, SeoRuleFn } from '@seely/seo-types'
import { calculateScore } from './scorer'

// Import all 18 rules
import {
  ruleTitleMissing, ruleTitleTooShort, ruleTitleTooLong,
  ruleMetaDescMissing, ruleMetaDescTooShort, ruleMetaDescTooLong,
  ruleH1Missing, ruleH1Multiple, ruleH2Missing,
} from './rules/on-page'

import {
  ruleCanonicalMissing, ruleMetaRobotsNoindex, ruleViewportMissing,
  ruleSchemaMissing, ruleOgMissing, ruleTwitterCardMissing,
} from './rules/technical'

import { ruleImagesAltMissing, ruleWordCountLow } from './rules/content'
import { ruleDomTooLarge } from './rules/performance'

/** All 18 MVP rules in execution order */
export const ALL_RULES: SeoRuleFn[] = [
  // ON_PAGE (9 rules)
  ruleTitleMissing,
  ruleTitleTooShort,
  ruleTitleTooLong,
  ruleMetaDescMissing,
  ruleMetaDescTooShort,
  ruleMetaDescTooLong,
  ruleH1Missing,
  ruleH1Multiple,
  ruleH2Missing,
  // TECHNICAL (6 rules)
  ruleCanonicalMissing,
  ruleMetaRobotsNoindex,
  ruleViewportMissing,
  ruleSchemaMissing,
  ruleOgMissing,
  ruleTwitterCardMissing,
  // CONTENT (2 rules)
  ruleImagesAltMissing,
  ruleWordCountLow,
  // PERFORMANCE (1 rule)
  ruleDomTooLarge,
]

export interface AuditResult {
  issues: SeoIssue[]
  score: SeoScoreBreakdown
}

/**
 * Run all SEO rules against extracted data and calculate scores.
 * This is the main entry point for the rule engine.
 *
 * @param data - Extracted SEO data from a page
 * @param rules - Optional custom rule set (defaults to ALL_RULES)
 * @returns Issues found and score breakdown
 */
export function runAudit(data: ExtractedSeoData, rules: SeoRuleFn[] = ALL_RULES): AuditResult {
  const issues: SeoIssue[] = []

  for (const rule of rules) {
    const result = rule(data)
    issues.push(...result)
  }

  const score = calculateScore(issues)

  return { issues, score }
}
