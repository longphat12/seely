'use client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { apiFetch } from '@/hooks/api'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()

  async function handleLogout() {
    await apiFetch('/api/auth/logout', { method: 'POST' }).catch(() => {})
    router.push('/login')
  }

  const navItems = [
    { href: '/projects', label: 'Dự án', icon: '📁' },
  ]

  return (
    <div className="dashboard-layout">
      {/* Desktop Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-brand">
          <Link href="/projects" style={{ color: 'inherit', textDecoration: 'none' }}>
            🔍 Seely
          </Link>
        </div>
        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`sidebar-link ${pathname.startsWith(item.href) ? 'active' : ''}`}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
        <div className="sidebar-footer">
          <button onClick={handleLogout} className="sidebar-link" style={{ width: '100%', border: 'none', background: 'none', cursor: 'pointer', textAlign: 'left' }}>
            <span>🚪</span>
            <span>Đăng xuất</span>
          </button>
        </div>
      </aside>

      {/* Mobile Bottom Nav */}
      <nav className="mobile-nav">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`mobile-link ${pathname.startsWith(item.href) ? 'active' : ''}`}
          >
            <span className="mobile-icon">{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
        <button onClick={handleLogout} className="mobile-link" style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
          <span className="mobile-icon">🚪</span>
          <span>Thoát</span>
        </button>
      </nav>

      <main className="main-content">
        {children}
      </main>
    </div>
  )
}
