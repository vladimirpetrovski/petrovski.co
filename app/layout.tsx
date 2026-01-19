import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Vladimir Petrovski - Engineering Team Builder',
  description: 'Experienced Mobile Engineer with a strong network, specializing in building and scaling engineering teams for startups. Expert in Android, Flutter, and cross-platform development.',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable} data-theme="dark">
      <body>{children}</body>
    </html>
  )
}
