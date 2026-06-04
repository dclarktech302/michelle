import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { HeroHeader } from '@/components/header'
import Footer from '@/components/footer'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '600', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
  title: "Michele W. Johnson for MD House of Delegates",
  description:
    "Fighting for District 37B — Talbot, Caroline, Dorchester, and Wicomico Counties.",
  openGraph: {
    title: "Michele W. Johnson for MD House of Delegates",
    description: "Fighting for District 37B — Talbot, Caroline, Dorchester, and Wicomico Counties.",
    url: '/',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Michele W. Johnson for MD House of Delegates",
    description: "Fighting for District 37B.",
    images: ['/images/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="shore">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <HeroHeader />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  // No maximumScale or userScalable — allows pinch-to-zoom
}