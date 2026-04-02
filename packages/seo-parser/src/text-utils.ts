/**
 * Count words in a text string.
 * Splits on whitespace and filters empty strings.
 */
export function countWords(text: string): number {
  if (!text || !text.trim()) return 0
  return text.trim().split(/\s+/).filter(Boolean).length
}

/**
 * Extract visible body text from document, excluding script/style/noscript content.
 * This is designed to run in a browser context (content script).
 */
export function getBodyText(doc: Document): string {
  const clone = doc.body.cloneNode(true) as HTMLElement
  // Remove script, style, noscript elements
  const remove = clone.querySelectorAll('script, style, noscript')
  remove.forEach((el) => el.remove())
  return clone.innerText || clone.textContent || ''
}
