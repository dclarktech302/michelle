import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { HeroHeader } from '@/components/header'
import Footer from '@/components/footer'

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
    "Fighting for District 37B — Talbot, Dorchester, Wicomico, and Somerset Counties.",
  openGraph: {
    title: "Michele W. Johnson for MD House of Delegates",
    description: "Fighting for District 37B.",
    url: '/',
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
      </body>
    </html>
  )
}