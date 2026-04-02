import type { SeoIssue, SeoScoreBreakdown, IssueCategory, Severity } from '@seely/seo-types'

/** Category weight configuration */
const CATEGORY_WEIGHTS: Record<IssueCategory, number> = {
  ON_PAGE: 35,
  TECHNICAL: 25,
  CONTENT: 20,
  PERFORMANCE: 20,
}

/** Penalty per severity level */
const SEVERITY_PENALTY: Record<Severity, number> = {
  CRITICAL: 15,
  HIGH: 10,
  MEDIUM: 6,
  LOW: 3,
}

/**
 * Calculate SEO score breakdown from a list of issues.
 *
 * Algorithm:
 *   1. For each category, start from max weight
 *   2. Subtract penalty per issue severity
 *   3. Clamp category raw score to >= 0
 *   4. Normalize each category to 0–100 scale
 *   5. Overall = weighted average of normalized category scores
 */
export function calculateScore(issues: SeoIssue[]): SeoScoreBreakdown {
  const categoryPenalties: Record<IssueCategory, number> = {
    ON_PAGE: 0,
    TECHNICAL: 0,
    CONTENT: 0,
    PERFORMANCE: 0,
  }

  // Sum penalties per category
  for (const issue of issues) {
    const cat = issue.category as IssueCategory
    if (cat in categoryPenalties) {
      categoryPenalties[cat] += SEVERITY_PENALTY[issue.severity] || 0
    }
  }

  // Calculate raw scores (clamped >= 0)
  const rawScores: Record<IssueCategory, number> = {
    ON_PAGE: Math.max(0, CATEGORY_WEIGHTS.ON_PAGE - categoryPenalties.ON_PAGE),
    TECHNICAL: Math.max(0, CATEGORY_WEIGHTS.TECHNICAL - categoryPenalties.TECHNICAL),
    CONTENT: Math.max(0, CATEGORY_WEIGHTS.CONTENT - categoryPenalties.CONTENT),
    PERFORMANCE: Math.max(0, CATEGORY_WEIGHTS.PERFORMANCE - categoryPenalties.PERFORMANCE),
  }

  // Normalize to 0–100 scale
  const normalize = (raw: number, weight: number): number =>
    Math.round(Math.min(100, Math.max(0, (raw / weight) * 100)))

  const onPage = normalize(rawScores.ON_PAGE, CATEGORY_WEIGHTS.ON_PAGE)
  const technical = normalize(rawScores.TECHNICAL, CATEGORY_WEIGHTS.TECHNICAL)
  const content = normalize(rawScores.CONTENT, CATEGORY_WEIGHTS.CONTENT)
  const performance = normalize(rawScores.PERFORMANCE, CATEGORY_WEIGHTS.PERFORMANCE)

  // Weighted average for overall
  const overall = Math.round(
    Math.min(100, Math.max(0,
      (onPage * CATEGORY_WEIGHTS.ON_PAGE +
        technical * CATEGORY_WEIGHTS.TECHNICAL +
        content * CATEGORY_WEIGHTS.CONTENT +
        performance * CATEGORY_WEIGHTS.PERFORMANCE) / 100
    ))
  )

  return { overall, onPage, technical, content, performance }
}
