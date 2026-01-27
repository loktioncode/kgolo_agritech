import React from "react"
import type { Metadata } from 'next'
import { DM_Sans, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata: Metadata = {
  title: 'Kgolo Agritech | Aerial & GIS Technology for Agriculture',
  description: 'South African agritech company specializing in aerial drone technology and GIS mapping for precision livestock tracking and crop monitoring.',
  keywords: ['Kgolo Agritech', 'agritech', 'drone technology', 'GIS mapping', 'livestock monitoring', 'crop monitoring', 'precision agriculture', 'South Africa'],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
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
