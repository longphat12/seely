import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Seely — SEO Audit Platform',
  description: 'Monitor and improve your website SEO with real-time audits, scoring, and actionable recommendations.',
  openGraph: {
    title: 'Seely — SEO Audit Platform',
    description: 'Monitor and improve your website SEO with real-time audits, scoring, and actionable recommendations.',
    url: 'https://seely-web.vercel.app',
    siteName: 'Seely',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Seely SEO Audit Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Seely — SEO Audit Platform',
    description: 'Monitor and improve your website SEO with real-time audits, scoring, and actionable recommendations.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
