import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { generateMetadata } from '@/lib/seo'
import { getSiteStructuredData } from '@/lib/schema'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = generateMetadata()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = getSiteStructuredData()

  return (
    <html lang={structuredData['@context'] ? 'en' : 'en'}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
