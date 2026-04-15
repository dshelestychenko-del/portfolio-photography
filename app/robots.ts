import { MetadataRoute } from 'next'
import { siteData } from '@/data/site'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/']
      }
    ],
    sitemap: `${siteData.siteUrl}/sitemap.xml`,
    host: siteData.siteUrl
  }
}
