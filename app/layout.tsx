import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Manrope } from 'next/font/google'
import './globals.css'

const serif = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
})

const sans = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'LUMIÈRE — Fine Dining Restaurant',
  description:
    'An intimate Michelin-starred dining experience in the heart of the city. Seasonal tasting menus, a curated wine cellar, and timeless hospitality.',
  generator: 'v0.app',
  openGraph: {
    title: 'LUMIÈRE — Fine Dining Restaurant',
    description:
      'An intimate Michelin-starred dining experience. Seasonal tasting menus, a curated wine cellar, and timeless hospitality.',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1815',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`bg-background ${serif.variable} ${sans.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
