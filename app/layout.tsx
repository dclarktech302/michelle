import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css";
import { cn } from "@/lib/utils";
import { HeroHeader } from "@/components/header";
import FooterSection from "@/components/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "600", "700"],
})

export const metadata: Metadata = {
  title: "Michele W. Johnson for MD House of Delegates",
  description: "Fighting for District 37B — Talbot, Dorchester, Wicomico, and Somerset Counties.",
  openGraph: {
    title: "Michele W. Johnson for MD House of Delegates",
    description: "Fighting for District 37B.",
    images: ["/images/og-image.jpg"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var t = localStorage.getItem('campaign-theme');
                if (t && t !== 'neutral') document.documentElement.setAttribute('data-theme', t);
              } catch(e) {}
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <HeroHeader />
        <main>{children}</main>
        <FooterSection />
      </body>
    </html>
  )
}