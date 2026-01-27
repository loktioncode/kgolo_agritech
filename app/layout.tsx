import React from "react"
import type { Metadata } from 'next'
import { DM_Sans, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata: Metadata = {
  title: 'Kgolo Agritech | The Digital Ledger for African Biosecurity',
  description: 'Powering South Africa\'s 2026 FMD recovery through AI diagnostics and Blockchain traceability. We turn livestock and crops into verified, bankable assets.',
  keywords: ['Kgolo Agritech', 'FMD recovery', 'livestock traceability', 'blockchain', 'AI diagnostics', 'LITS compliance', 'South Africa', 'biosecurity'],
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
        {children}
        <Analytics />
      </body>
    </html>
  )
}
