import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import { SITE_CONFIG } from '@/lib/constants'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: `${SITE_CONFIG.brandName} - ${SITE_CONFIG.title} | Santé Environnementale`,
  description: SITE_CONFIG.description,
  keywords: ['santé environnementale', 'éco-infirmière', 'ateliers santé', 'prévention santé', 'environnement sain', 'VieVent', 'Lisa Bonal'],
  authors: [{ name: SITE_CONFIG.ownerName }],
  openGraph: {
    title: `${SITE_CONFIG.brandName} - ${SITE_CONFIG.title}`,
    description: SITE_CONFIG.description,
    url: `https://${SITE_CONFIG.domain}`,
    siteName: SITE_CONFIG.brandName,
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
