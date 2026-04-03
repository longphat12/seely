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
    { href: '/debug-sharing', label: 'Kiểm tra chia sẻ', icon: '🔗' },
  ]

  return (
    <div className="dashboard-layout">
      {/* Desktop Sidebar */}
      <aside className="sidebar" style={{ background: 'var(--bg)', borderRight: '1px solid var(--border)', padding: '24px 16px' }}>
        <div className="sidebar-brand" style={{ border: 'none', padding: '0 12px 32px', display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ background: 'var(--primary)', color: 'white', width: 32, height: 32, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, fontWeight: 900 }}>S</div>
          <Link href="/projects" style={{ color: 'var(--text)', textDecoration: 'none', fontSize: 20, fontWeight: 800, letterSpacing: '-0.5px' }}>
            Seely
          </Link>
        </div>
        
        <nav className="sidebar-nav" style={{ gap: 4 }}>
          <div style={{ padding: '0 12px 12px', fontSize: 11, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>MENU CHÍNH</div>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`sidebar-link ${pathname.startsWith(item.href) ? 'active' : ''}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                padding: '10px 16px',
                borderRadius: 10,
                fontSize: 14,
                fontWeight: 600,
                transition: 'all 0.2s',
                backgroundColor: pathname.startsWith(item.href) ? 'var(--primary-muted)' : 'transparent',
                color: pathname.startsWith(item.href) ? 'var(--primary-light)' : 'var(--text-muted)'
              }}
            >
              <span style={{ fontSize: 18 }}>{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="sidebar-footer" style={{ border: 'none', padding: '20px 0' }}>
          <button 
            onClick={handleLogout} 
            className="sidebar-link" 
            style={{ 
              width: '100%', 
              border: 'none', 
              background: 'rgba(239, 68, 68, 0.05)', 
              color: 'var(--danger)',
              padding: '10px 16px',
              borderRadius: 10,
              cursor: 'pointer', 
              textAlign: 'left',
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              fontWeight: 600
            }}
          >
            <span style={{ fontSize: 18 }}>🚪</span>
            <span>Đăng xuất</span>
          </button>
        </div>
      </aside>

      {/* Mobile Bottom Nav */}
      <nav className="mobile-nav" style={{ 
        height: 70, 
        padding: '0 24px', 
        background: 'rgba(9, 9, 11, 0.9)', 
        backdropFilter: 'blur(16px)', 
        borderTop: '1px solid var(--border)',
        boxShadow: '0 -4px 20px rgba(0,0,0,0.3)'
      }}>
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`mobile-link ${pathname.startsWith(item.href) ? 'active' : ''}`}
            style={{ 
              flex: 1, 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              gap: 4,
              color: pathname.startsWith(item.href) ? 'var(--primary-light)' : 'var(--text-muted)'
            }}
          >
            <span style={{ fontSize: 22 }}>{item.icon}</span>
            <span style={{ fontSize: 10, fontWeight: 700 }}>{item.label}</span>
          </Link>
        ))}
        <button onClick={handleLogout} className="mobile-link" style={{ flex: 1, border: 'none', background: 'none', cursor: 'pointer', color: 'var(--danger)' }}>
          <span style={{ fontSize: 22 }}>🚪</span>
          <span style={{ fontSize: 10, fontWeight: 700 }}>Thoát</span>
        </button>
      </nav>

      <main className="main-content">
        {children}
      </main>
    </div>
  )
}
