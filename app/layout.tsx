import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Fraunces } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://mukeshdhoot.com'),
  title: {
    default: 'Mukesh Dhoot & Associates | Cross-Border Business & FEMA Advisory',
    template: '%s | Mukesh Dhoot & Associates',
  },
  description:
    'Boutique advisory firm specialising in Cross-Border Business, FEMA, RBI regulations, International Trade, Treasury and transaction structuring. Enabling businesses to expand globally with confidence.',
  keywords: [
    'Cross Border Advisory',
    'FEMA Consultant',
    'FEMA Advisory India',
    'International Trade Consultant',
    'ODI Consultant',
    'FDI Consultant',
    'Cross Border M&A',
    'RBI Advisory',
    'Treasury Advisory',
    'Trade Advisory',
    'Merchant Trade Consultant',
    'Cross Border Payments',
    'International Business Advisory',
    'Foreign Investment Consultant',
    'Corporate FEMA Consultant',
    'Export Import Consultant',
    'International Treasury Consultant',
  ],
  generator: 'v0.app',
  openGraph: {
    title: 'Mukesh Dhoot & Associates | Cross-Border Business & FEMA Advisory',
    description:
      'Helping businesses navigate international expansion through expert advisory on FEMA, RBI regulations, cross-border investments, trade, treasury and transaction structuring.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#1c2a4a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`light ${inter.variable} ${fraunces.variable} bg-background`}>
      <body className="font-sans antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
