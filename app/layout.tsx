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
  title: 'Kgolo (Growth) | Your farm, verified. Your future, unlocked.',
  description:
    'Kgolo gives smallholder farmers a verifiable digital identity on their phone   offline first, farmer owned. North West pilot.',
  keywords: [
    'Kgolo',
    'digital farmer ID',
    'offline agriculture app',
    'North West farmers',
    'livestock traceability',
    'LITS South Africa',
    'farmer-owned data',
    'POPIA',
  ],
  openGraph: {
    title: 'Kgolo (Growth) | Your farm, verified. Your future, unlocked.',
    description: 'Offline-first digital farmer ID   prove who you are and what you grow.',
    url: 'https://kgolo.co.za',
    siteName: 'Kgolo',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kgolo   your farm, verified',
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
