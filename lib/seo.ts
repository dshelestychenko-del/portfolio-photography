import { Metadata } from 'next'
import { siteData } from '@/data/site'

export interface SeoMetadata {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: string
  keywords?: string[]
  noIndex?: boolean
}

export function generateMetadata(metadata: SeoMetadata = {}): Metadata {
  const {
    title = siteData.defaultTitle,
    description = siteData.defaultDescription,
    image = siteData.defaultOgImage,
    url = siteData.siteUrl,
    type = 'website',
    keywords = siteData.keywords,
    noIndex = false
  } = metadata

  return {
    title,
    description,
    keywords: keywords.join(', '),
    authors: [{ name: siteData.author }],
    creator: siteData.creator,
    metadataBase: new URL(siteData.siteUrl),
    alternates: {
      canonical: url
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteData.siteName,
      locale: siteData.locale,
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@photography_studio'
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex
      }
    }
  }
}
