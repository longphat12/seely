import { runAudit } from '@seely/seo-rules'
import type { AuditPayload } from '@seely/seo-types'
import { saveAudit } from '@/lib/api-client'
import type { ExtensionMessage, ScanCacheData } from '@/lib/message-types'

// Cache scan data per tab
const scanCache = new Map<number, ScanCacheData>()

export default defineBackground(() => {
  console.log('Seely background started', { id: browser.runtime.id })

  browser.runtime.onMessage.addListener(
    (message: ExtensionMessage, sender, sendResponse) => {
      handleMessage(message, sender).then(sendResponse).catch((e) => {
        sendResponse({ type: 'SAVE_AUDIT_ERROR', error: e.message } as ExtensionMessage)
      })
      return true // Keep channel open for async
    },
  )
})

async function handleMessage(
  message: ExtensionMessage,
  _sender: browser.runtime.MessageSender,
): Promise<ExtensionMessage> {
  switch (message.type) {
    case 'REQUEST_SCAN':
      return handleScan()

    case 'SAVE_AUDIT':
      return handleSaveAudit()

    case 'GET_SCAN_DATA':
      return handleGetScanData()

    default:
      return { type: 'SAVE_AUDIT_ERROR', error: 'Loại tin nhắn không hợp lệ' }
  }
}

async function handleScan(): Promise<ExtensionMessage> {
  const [tab] = await browser.tabs.query({ active: true, currentWindow: true })
  if (!tab?.id) return { type: 'SCAN_ERROR', error: 'Không tìm thấy tab đang hoạt động' }

  // Check if it's a restricted Chrome URL where content scripts can't run
  if (tab.url?.startsWith('chrome://') || tab.url?.startsWith('edge://')) {
    return { type: 'SCAN_ERROR', error: 'Không thể phân tích trang cài đặt của trình duyệt' }
  }

  try {
    const response = await browser.tabs.sendMessage(tab.id, { type: 'REQUEST_SCAN' }) as ExtensionMessage

    if (response.type === 'SCAN_RESULT') {
      // Run rule engine
      const { issues, score } = runAudit(response.payload)

      const cacheData: ScanCacheData = {
        extracted: response.payload,
        score,
        issues,
        url: response.payload.url,
        scannedAt: new Date().toISOString(),
      }

      scanCache.set(tab.id, cacheData)

      return {
        type: 'SCAN_DATA',
        payload: cacheData,
      }
    }

    if (response.type === 'SCAN_ERROR') {
      return response
    }

    return { type: 'SCAN_ERROR', error: 'Dữ liệu phản hồi bị lỗi hoặc không hợp lệ' }
  } catch (e) {
    let errMessage = e instanceof Error ? e.message : 'Đánh giá trang thất bại'
    if (errMessage.includes('Could not establish connection') || errMessage.includes('Receiving end does not exist')) {
      errMessage = 'Trang web chưa được tải đầy đủ. Vui lòng bấm (F5) Tải lại trang web này và quét lại.'
    }
    return { type: 'SCAN_ERROR', error: errMessage }
  }
}

async function handleSaveAudit(): Promise<ExtensionMessage> {
  const [tab] = await browser.tabs.query({ active: true, currentWindow: true })
  if (!tab?.id) return { type: 'SAVE_AUDIT_ERROR', error: 'Không tìm thấy tab đang hoạt động' }

  const cached = scanCache.get(tab.id)
  if (!cached) return { type: 'SAVE_AUDIT_ERROR', error: 'Chưa có kết quả phân tích. Vui lòng Quét trang trước.' }

  try {
    const domain = new URL(cached.url).hostname
    const payload: AuditPayload = {
      projectDomain: domain,
      url: cached.url,
      extracted: cached.extracted,
      score: cached.score,
      issues: cached.issues,
      extensionVersion: '0.1.0',
      userAgent: navigator.userAgent,
      scannedAt: cached.scannedAt,
    }

    const result = await saveAudit(payload)
    return { type: 'SAVE_AUDIT_SUCCESS', auditId: result.auditId, overallScore: result.overallScore }
  } catch (e) {
    return { type: 'SAVE_AUDIT_ERROR', error: e instanceof Error ? e.message : 'Lưu dữ liệu thất bại' }
  }
}

async function handleGetScanData(): Promise<ExtensionMessage> {
  const [tab] = await browser.tabs.query({ active: true, currentWindow: true })
  if (!tab?.id) return { type: 'SCAN_DATA', payload: null }
  const cached = scanCache.get(tab.id) ?? null
  return { type: 'SCAN_DATA', payload: cached }
}
