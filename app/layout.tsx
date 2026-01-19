import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import StructuredData from './structured-data'
import GeoMeta from '@/components/GeoMeta'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Vladimir Petrovski - Engineering Team Builder',
  description: 'Experienced Mobile Engineer with a strong network, specializing in building and scaling engineering teams for startups. Expert in Android, Flutter, and cross-platform development.',
  keywords: ['Mobile Engineer', 'Engineering Team Builder', 'Android Developer', 'Flutter Developer', 'Startup Engineering', 'Cross-platform Development', 'Engineering Leadership'],
  authors: [{ name: 'Vladimir Petrovski' }],
  creator: 'Vladimir Petrovski',
  publisher: 'Vladimir Petrovski',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['en_GB', 'en_DE', 'en_FR', 'en_NL'],
    url: 'https://petrovski.co',
    siteName: 'Vladimir Petrovski',
    title: 'Vladimir Petrovski - Engineering Team Builder',
    description: 'Experienced Mobile Engineer with a strong network, specializing in building and scaling engineering teams for startups.',
    images: [
      {
        url: 'https://petrovski.co/images/profile.jpeg',
        width: 300,
        height: 300,
        alt: 'Vladimir Petrovski',
      },
    ],
  },
  alternates: {
    canonical: 'https://petrovski.co',
    languages: {
      'en-US': 'https://petrovski.co',
      'en-GB': 'https://petrovski.co',
      'en-DE': 'https://petrovski.co',
      'en-FR': 'https://petrovski.co',
      'en-NL': 'https://petrovski.co',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vladimir Petrovski - Engineering Team Builder',
    description: 'Experienced Mobile Engineer with a strong network, specializing in building and scaling engineering teams for startups.',
    images: ['https://petrovski.co/images/profile.jpeg'],
  },
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
      <head>
        <StructuredData />
      </head>
      <body>
        <GeoMeta />
        {children}
      </body>
    </html>
  )
}
