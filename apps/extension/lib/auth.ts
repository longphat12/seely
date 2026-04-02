const TOKEN_KEY = 'seely_auth_token'

export async function getToken(): Promise<string | null> {
  const result = await chrome.storage.local.get(TOKEN_KEY)
  return result[TOKEN_KEY] || null
}

export async function setToken(token: string): Promise<void> {
  await chrome.storage.local.set({ [TOKEN_KEY]: token })
}

export async function removeToken(): Promise<void> {
  await chrome.storage.local.remove(TOKEN_KEY)
}

export async function isLoggedIn(): Promise<boolean> {
  const token = await getToken()
  return !!token
}
