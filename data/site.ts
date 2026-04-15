export interface NavigationItem {
  label: string
  href: string
  external?: boolean
}

export interface SocialLink {
  platform: string
  url: string
  icon?: string
}

export interface SiteData {
  siteName: string
  siteUrl: string
  defaultTitle: string
  defaultDescription: string
  defaultOgImage: string
  locale: string
  author: string
  creator: string
  keywords: string[]
  navigation: NavigationItem[]
  footer: {
    brand: {
      name: string
      description: string
    }
    services: string[]
    quickLinks: string[]
    contact: string[]
    social: SocialLink[]
    legal: {
      copyright: string
      privacy: string
      terms: string
    }
  }
  socialLinks: SocialLink[]
  contact: {
    email: string
    phone: string
    location: string
  }
}

export const siteData: SiteData = {
  siteName: "Photography Studio",
  siteUrl: "https://photography-studio.com",
  defaultTitle: "Premium Photography for Brands | Professional Commercial Photography",
  defaultDescription: "Creating visual stories that elevate your brand through stunning product and commercial photography. Professional photography services for businesses that value quality and creativity.",
  defaultOgImage: "/og-image.jpg",
  locale: "en_US",
  author: "Photography Studio",
  creator: "Photography Studio",
  keywords: [
    "photography",
    "commercial photography", 
    "product photography",
    "brand photography",
    "e-commerce photography",
    "professional photography",
    "food photography",
    "lifestyle photography"
  ],
  navigation: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" }
  ],
  footer: {
    brand: {
      name: "Photo",
      description: "Professional brand and product photography services for businesses that value quality and creativity."
    },
    services: [
      "Product Photography",
      "Brand Photography", 
      "E-commerce Solutions",
      "Food & Lifestyle"
    ],
    quickLinks: [
      "About",
      "Portfolio",
      "Process",
      "Contact"
    ],
    contact: [
      "hello@photography.com",
      "+1 (555) 123-4567",
      "New York, NY"
    ],
    social: [
      {
        platform: "Instagram",
        url: "https://instagram.com/photography",
        icon: "instagram"
      },
      {
        platform: "LinkedIn", 
        url: "https://linkedin.com/in/photography",
        icon: "linkedin"
      },
      {
        platform: "Behance",
        url: "https://behance.net/photography", 
        icon: "behance"
      },
      {
        platform: "Telegram",
        url: "https://t.me/photography",
        icon: "telegram"
      }
    ],
    legal: {
      copyright: "© 2024 Photography Studio. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service"
    }
  },
  socialLinks: [
    {
      platform: "Instagram",
      url: "https://instagram.com/photography",
      icon: "instagram"
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/photography", 
      icon: "linkedin"
    },
    {
      platform: "Behance",
      url: "https://behance.net/photography",
      icon: "behance"
    },
    {
      platform: "Telegram",
      url: "https://t.me/photography",
      icon: "telegram"
    }
  ],
  contact: {
    email: "hello@photography.com",
    phone: "+1 (555) 123-4567", 
    location: "New York, NY"
  }
}
