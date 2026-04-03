import { useEffect, useState } from 'react'
import type { ScanCacheData, ExtensionMessage } from '@/lib/message-types'
import { isLoggedIn, removeToken, setToken } from '@/lib/auth'
import {
  getRecentSavedPages,
  login as apiLogin,
  register as apiRegister,
  type SavedPageItem,
} from '@/lib/api-client'
import './style.css'

type View = 'loading' | 'login' | 'register' | 'scan' | 'results' | 'saving'
type Panel = 'score' | 'saved'

const SunIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-sun">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
)

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-moon">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
)

function App() {
  const [view, setView] = useState<View>('loading')
  const [activePanel, setActivePanel] = useState<Panel>('score')
  const [scanData, setScanData] = useState<ScanCacheData | null>(null)
  const [savedPages, setSavedPages] = useState<SavedPageItem[]>([])
  const [savedPagesLoading, setSavedPagesLoading] = useState(false)
  const [savedPagesLoaded, setSavedPagesLoaded] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  useEffect(() => {
    void checkState()
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  useEffect(() => {
    if (activePanel === 'saved' && view !== 'login' && view !== 'register') {
      void loadSavedPages()
    }
  }, [activePanel, view])

  async function checkState() {
    const loggedIn = await isLoggedIn()
    if (!loggedIn) {
      setView('login')
      return
    }

    const resp = await browser.runtime.sendMessage({ type: 'GET_SCAN_DATA' }) as ExtensionMessage
    if (resp.type === 'SCAN_DATA' && resp.payload) {
      setScanData(resp.payload)
      setView('results')
      return
    }

    setView('scan')
  }

  async function loadSavedPages(force = false) {
    if (savedPagesLoading) return
    if (savedPagesLoaded && !force) return

    setSavedPagesLoading(true)
    try {
      const pages = await getRecentSavedPages()
      setSavedPages(pages)
      setSavedPagesLoaded(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Không tải được trang đã lưu')
    } finally {
      setSavedPagesLoading(false)
    }
  }

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    try {
      const result = await apiLogin(email, password)
      await setToken(result.token)
      setActivePanel('score')
      await checkState()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Đăng nhập thất bại')
    }
  }

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    try {
      const result = await apiRegister(email, password, name)
      await setToken(result.token)
      setActivePanel('score')
      await checkState()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Đăng ký thất bại')
    }
  }

  async function handleLogout() {
    await removeToken()
    setScanData(null)
    setSavedPages([])
    setSavedPagesLoaded(false)
    setActivePanel('score')
    setError(null)
    setView('login')
  }

  async function handleScan() {
    setError(null)
    setView('loading')
    const resp = await browser.runtime.sendMessage({ type: 'REQUEST_SCAN' }) as ExtensionMessage
    if (resp.type === 'SCAN_DATA' && resp.payload) {
      setScanData(resp.payload)
      setActivePanel('score')
      setView('results')
    } else if (resp.type === 'SCAN_ERROR') {
      setError(resp.error)
      setView('scan')
    }
  }

  async function handleSave() {
    setError(null)
    setView('saving')
    const resp = await browser.runtime.sendMessage({ type: 'SAVE_AUDIT' }) as ExtensionMessage
    if (resp.type === 'SAVE_AUDIT_SUCCESS') {
      setActivePanel('saved')
      await loadSavedPages(true)
      setView(scanData ? 'results' : 'scan')
    } else if (resp.type === 'SAVE_AUDIT_ERROR') {
      setError(resp.error)
      setView('results')
    }
  }

  function openDashboard(path: string) {
    window.open(`${import.meta.env.WXT_EXTENSION_API_BASE_URL}${path}`)
  }

  function getScoreColor(score: number) {
    if (score >= 80) return '#22c55e'
    if (score >= 50) return '#f59e0b'
    return '#ef4444'
  }

  function getSeverityLabel(severity: string) {
    const labels: Record<string, string> = {
      CRITICAL: 'NGHIÊM TRỌNG',
      HIGH: 'CAO',
      MEDIUM: 'TRUNG BÌNH',
      LOW: 'THẤP',
    }
    return labels[severity] || severity
  }

  function getSeverityClass(severity: string) {
    const map: Record<string, string> = {
      CRITICAL: 'severity-critical',
      HIGH: 'severity-high',
      MEDIUM: 'severity-medium',
      LOW: 'severity-low',
    }
    return map[severity] || ''
  }

  const ThemeToggle = () => (
    <button className="theme-toggle-btn" onClick={() => setTheme((t) => t === 'dark' ? 'light' : 'dark')} aria-label="Toggle Theme">
      <div className="theme-icon">
        <MoonIcon />
        <SunIcon />
      </div>
    </button>
  )

  const HeaderActions = () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <ThemeToggle />
      <button className="btn-link" onClick={handleLogout}>Đăng xuất</button>
    </div>
  )

  const PanelTabs = () => (
    <div className="panel-tabs">
      <button className={`panel-tab ${activePanel === 'score' ? 'active' : ''}`} onClick={() => setActivePanel('score')}>
        Điểm SEO
      </button>
      <button className={`panel-tab ${activePanel === 'saved' ? 'active' : ''}`} onClick={() => setActivePanel('saved')}>
        Trang đã lưu
      </button>
    </div>
  )

  function renderSavedPagesPanel() {
    return (
      <div className="saved-pages-panel">
        <div className="section-heading">
          <div>
            <h2>Trang đã lưu</h2>
            <p>Mở lại nhanh các trang bạn vừa lưu trong dự án.</p>
          </div>
          <button className="btn btn-ghost" onClick={() => void loadSavedPages(true)}>
            Làm mới
          </button>
        </div>

        {savedPagesLoading && (
          <div className="center">
            <div className="spinner" />
            <p>Đang tải các trang đã lưu...</p>
          </div>
        )}

        {!savedPagesLoading && savedPages.length === 0 && (
          <div className="empty-card">
            <p>Chưa có trang nào được lưu.</p>
            <button className="btn btn-primary" onClick={handleScan}>Quét trang hiện tại</button>
          </div>
        )}

        {!savedPagesLoading && savedPages.length > 0 && (
          <div className="saved-pages-list">
            {savedPages.map((page) => (
              <div key={page.pageId} className="saved-page-card">
                <div className="saved-page-head">
                  <div>
                    <div className="saved-page-path">{page.path || '/'}</div>
                    <div className="saved-page-domain">{page.projectDomain}</div>
                  </div>
                  <div
                    className="saved-score-badge"
                    style={{ color: page.latestAuditScore === null ? 'var(--text-muted)' : getScoreColor(page.latestAuditScore) }}
                  >
                    {page.latestAuditScore ?? '—'}
                  </div>
                </div>
                <div className="saved-page-url">{page.normalizedUrl}</div>
                <div className="saved-page-project">{page.projectName}</div>
                <div className="saved-page-actions">
                  <button className="btn btn-secondary" onClick={() => openDashboard(`/pages/${page.pageId}`)}>
                    Xem trang
                  </button>
                  <button className="btn btn-secondary" onClick={() => openDashboard(`/projects/${page.projectId}`)}>
                    Mở dự án
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }

  function renderScorePanel() {
    if (view === 'loading' || view === 'saving') {
      return (
        <div className="center">
          <div className="spinner" />
          <p>{view === 'loading' ? 'Đang quét trang...' : 'Đang lưu báo cáo...'}</p>
        </div>
      )
    }

    if (view === 'scan' || !scanData) {
      return (
        <div className="center">
          <p>Đánh giá chất lượng SEO trang này</p>
          <button className="btn btn-primary" onClick={handleScan}>Quét trang</button>
        </div>
      )
    }

    const { score, issues } = scanData
    const topIssues = issues.slice(0, 5)

    return (
      <>
        <div className="score-section">
          <div className="score-ring" style={{ '--score-color': getScoreColor(score.overall) } as React.CSSProperties}>
            <span className="score-value">{score.overall}</span>
            <span className="score-label">Tổng quan</span>
          </div>
          <div className="score-breakdown">
            <div className="score-item">
              <span className="score-cat">Trang</span>
              <span style={{ color: getScoreColor(score.onPage) }}>{score.onPage}</span>
            </div>
            <div className="score-item">
              <span className="score-cat">Kỹ thuật</span>
              <span style={{ color: getScoreColor(score.technical) }}>{score.technical}</span>
            </div>
            <div className="score-item">
              <span className="score-cat">Nội dung</span>
              <span style={{ color: getScoreColor(score.content) }}>{score.content}</span>
            </div>
            <div className="score-item">
              <span className="score-cat">Tốc độ</span>
              <span style={{ color: getScoreColor(score.performance) }}>{score.performance}</span>
            </div>
          </div>
        </div>

        {topIssues.length > 0 && (
          <div className="issues-section">
            <h3>Lỗi cần sửa ({issues.length} lỗi)</h3>
            <ul className="issues-list">
              {topIssues.map((issue, index) => (
                <li key={index} className="issue-item">
                  <span className={`severity-badge ${getSeverityClass(issue.severity)}`}>
                    {getSeverityLabel(issue.severity)}
                  </span>
                  <span className="issue-title">{issue.title}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {issues.length === 0 && (
          <div className="center success">🎉 Không tìm thấy lỗi nào!</div>
        )}

        <div className="actions">
          <button className="btn btn-primary" onClick={handleSave}>💾 Lưu báo cáo</button>
          <button className="btn btn-secondary" onClick={() => openDashboard(`/debug-sharing?url=${encodeURIComponent(scanData.url)}`)}>
            🔗 Kiểm tra chia sẻ
          </button>
          <button className="btn btn-secondary" onClick={handleScan}>🔄 Quét lại</button>
        </div>
      </>
    )
  }

  if (view === 'login') {
    return (
      <div className="popup">
        <div style={{ position: 'absolute', top: 16, right: 16 }}><ThemeToggle /></div>
        <header className="header center-header">
          <h1>🔍 Seely</h1>
          <span className="subtitle">Đánh giá SEO</span>
        </header>
        <form className="login-form" onSubmit={handleLogin}>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Mật khẩu" value={password} onChange={(e) => setPassword(e.target.value)} required />
          {error && <div className="error">{error}</div>}
          <button type="submit" className="btn btn-primary">Đăng nhập</button>
        </form>
        <div className="auth-switch">
          Chưa có tài khoản?
          <a href="#" className="auth-switch-btn" onClick={(e) => { e.preventDefault(); setView('register'); setError(null) }}>
            Đăng ký ngay
          </a>
        </div>
      </div>
    )
  }

  if (view === 'register') {
    return (
      <div className="popup">
        <div style={{ position: 'absolute', top: 16, right: 16 }}><ThemeToggle /></div>
        <header className="header center-header">
          <h1>🔍 Seely</h1>
          <span className="subtitle">Đăng ký tài khoản</span>
        </header>
        <form className="login-form" onSubmit={handleRegister}>
          <input type="text" placeholder="Họ và tên" value={name} onChange={(e) => setName(e.target.value)} required />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Mật khẩu" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={8} />
          {error && <div className="error">{error}</div>}
          <button type="submit" className="btn btn-primary">Đăng ký</button>
        </form>
        <div className="auth-switch">
          Đã có tài khoản?
          <a href="#" className="auth-switch-btn" onClick={(e) => { e.preventDefault(); setView('login'); setError(null) }}>
            Đăng nhập
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="popup">
      <header className="header">
        <h1>🔍 Seely</h1>
        <HeaderActions />
      </header>

      <PanelTabs />

      {error && <div className="error">{error}</div>}

      {activePanel === 'score' ? renderScorePanel() : renderSavedPagesPanel()}
    </div>
  )
}

export default App
