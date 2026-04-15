import { siteData } from '@/data/site'

export interface StructuredData {
  type: 'Person' | 'ProfessionalService' | 'LocalBusiness'
  name: string
  description: string
  url: string
  image?: string
  email?: string
  phone?: string
  address?: string
  sameAs?: string[]
  serviceType?: string[]
  areaServed?: string
}

export function generateStructuredData(data: StructuredData) {
  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': data.type,
    name: data.name,
    description: data.description,
    url: data.url,
    image: data.image,
    email: data.email,
    telephone: data.phone,
    address: data.address ? {
      '@type': 'PostalAddress',
      addressLocality: data.address
    } : undefined,
    sameAs: data.sameAs,
    contactPoint: data.email ? {
      '@type': 'ContactPoint',
      email: data.email,
      telephone: data.phone,
      contactType: 'customer service',
      availableLanguage: ['English']
    } : undefined
  }

  if (data.type === 'ProfessionalService') {
    return {
      ...baseSchema,
      serviceType: data.serviceType,
      areaServed: data.areaServed
    }
  }

  if (data.type === 'LocalBusiness') {
    return {
      ...baseSchema,
      address: data.address ? {
        '@type': 'PostalAddress',
        addressLocality: data.address
      } : undefined,
      openingHours: 'Mo-Fr 09:00-18:00'
    }
  }

  return baseSchema
}

export function getSiteStructuredData() {
  return generateStructuredData({
    type: 'ProfessionalService',
    name: siteData.siteName,
    description: siteData.defaultDescription,
    url: siteData.siteUrl,
    image: siteData.defaultOgImage,
    email: siteData.contact.email,
    phone: siteData.contact.phone,
    address: siteData.contact.location,
    sameAs: siteData.socialLinks.map(link => link.url),
    serviceType: ['Commercial Photography', 'Product Photography', 'Brand Photography'],
    areaServed: 'United States'
  })
}
