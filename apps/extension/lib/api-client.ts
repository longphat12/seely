import { getToken } from './auth'

const API_BASE = 'http://localhost:3000'

async function apiFetch<T>(path: string, options: RequestInit = {}): Promise<T> {
  const token = await getToken()
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...(options.headers || {}),
  }

  const res = await fetch(`${API_BASE}${path}`, { ...options, headers })

  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: res.statusText }))
    let errMsg = err.error || err.message || `Lỗi API ${res.status}`
    
    if (typeof err.error === 'object' && err.error !== null) {
      const fieldErrs = Object.values(err.error.fieldErrors || {}).flat()
      if (fieldErrs.length > 0) {
        errMsg = fieldErrs[0]
      } else if (err.error.formErrors?.length > 0) {
        errMsg = err.error.formErrors[0]
      } else {
        errMsg = JSON.stringify(err.error)
      }
    }
    
    throw new Error(String(errMsg))
  }

  return res.json()
}

export async function login(email: string, password: string) {
  return apiFetch<{ user: { id: string; email: string; name: string | null }; token: string }>(
    '/api/auth/login',
    { method: 'POST', body: JSON.stringify({ email, password }) },
  )
}

export async function register(email: string, password: string, name?: string) {
  return apiFetch<{ user: { id: string; email: string; name: string | null }; token: string }>(
    '/api/auth/register',
    { method: 'POST', body: JSON.stringify({ email, password, name }) },
  )
}

export async function saveAudit(payload: unknown) {
  return apiFetch<{ auditId: string; overallScore: number }>(
    '/api/audits',
    { method: 'POST', body: JSON.stringify(payload) },
  )
}
