import React from "react"
import type { Metadata } from 'next'
import { DM_Sans, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { MotionProvider } from '@/components/motion-provider'
import './globals.css'

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata: Metadata = {
  metadataBase: new URL('https://kgolo.co.za'),
  title: 'Kgolo Agriculture | Digital Ledger for African Biosecurity',
  description: 'Powering South Africa\'s 2026 FMD recovery through AI diagnostics and Blockchain traceability. Turning livestock and crops into verified, bankable assets.',
  keywords: [
    'Kgolo Agriculture',
    'FMD recovery South Africa 2026',
    'livestock traceability blockchain',
    'AI diagnostics agriculture',
    'LITS compliance SA',
    'smart farming South Africa',
    'biosecurity innovation Africa',
    'precision agriculture drones SA',
    'food traceability blockchain South Africa',
    'digital livestock identification'
  ],
  openGraph: {
    title: 'Kgolo Agriculture | Digital Ledger for African Biosecurity',
    description: 'AI and Blockchain solutions for South Africa\'s agricultural future.',
    url: 'https://kgolo.co.za',
    siteName: 'Kgolo Agriculture',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kgolo Agriculture - Innovating Agriculture',
      },
    ],
    locale: 'en_ZA',
    type: 'website',
  },

  icons: {
    icon: '/crop-logo.svg',
    apple: '/crop-logo.svg',
  },
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <MotionProvider>
          {children}
        </MotionProvider>
        <Analytics />
      </body>
    </html>
  )
}
