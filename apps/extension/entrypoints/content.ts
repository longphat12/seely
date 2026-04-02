import type { ExtractedSeoData } from '@seely/seo-types'
import { extractSeoData } from '@seely/seo-parser'
import type { ExtensionMessage } from '@/lib/message-types'

export default defineContentScript({
  matches: ['<all_urls>'],
  runAt: 'document_idle',

  main() {
    // Listen for scan requests from background
    browser.runtime.onMessage.addListener(
      (message: ExtensionMessage, _sender, sendResponse) => {
        if (message.type === 'REQUEST_SCAN') {
          try {
            const data = extractSeoData()
            sendResponse({ type: 'SCAN_RESULT', payload: data } satisfies ExtensionMessage)
          } catch (e) {
            const error = e instanceof Error ? e.message : 'Scan failed'
            sendResponse({ type: 'SCAN_ERROR', error } satisfies ExtensionMessage)
          }
          return true // Keep the message channel open for async response
        }
      },
    )
  },
})
