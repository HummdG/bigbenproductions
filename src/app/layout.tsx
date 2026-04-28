import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp'

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://bigbenproductions.vercel.app'),
  title: 'Big Ben Production | Premier Events Production',
  description:
    'Professional 360 photo booth experiences, event videography, and full production setups. Big Ben Production creates unforgettable moments for weddings, birthdays, and celebrations.',
  keywords: [
    '360 photo booth',
    'event production',
    'wedding videography',
    'event coverage',
    'birthday events',
    'corporate events',
    'photo booth hire',
    'event photography',
  ],
  openGraph: {
    title: 'Big Ben Production | Premier Events Production',
    description:
      'Professional 360 photo booth experiences, event videography, and full production setups.',
    siteName: 'Big Ben Production',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Big Ben Production | Premier Events Production',
    description:
      'Professional 360 photo booth experiences, event videography, and full production setups.',
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable}`}
      style={{ fontFamily: 'var(--font-body)' }}
    >
      <body className="bg-black text-white antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  )
}
