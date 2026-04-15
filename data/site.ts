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
  siteName: "Анастасія",
  siteUrl: "https://photography-studio.com",
  defaultTitle: "Анастасія | Предметний фотограф",
  defaultDescription: "Професійна предметна фотографія для вашого бізнесу. Створюю візуальні історії, що підкреслюють якість продукту.",
  defaultOgImage: "/og-image.jpg",
  locale: "uk_UA",
  author: "Анастасія",
  creator: "Анастасія",
  keywords: [
    "предметна фотографія",
    "комерційна фотографія", 
    "фотограф продуктів",
    "бренд фотографія",
    "e-commerce фотографія",
    "професійна фотографія",
    "фуд фотографія",
    "лайфстайл фотографія"
  ],
  navigation: [
    { label: "Про мене", href: "#about" },
    { label: "Послуги", href: "#services" },
    { label: "Портфоліо", href: "#portfolio" },
    { label: "Прайс", href: "#pricing" },
    { label: "Умови співпраці", href: "#terms" },
    { label: "Контакти", href: "#contact" }
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
        url: "https://instagram.com/nastasya_br",
        icon: "instagram"
      },
      {
        platform: "Telegram",
        url: "https://t.me/nastasya_br",
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
      url: "https://instagram.com/nastasya_br",
      icon: "instagram"
    },
    {
      platform: "Telegram",
      url: "https://t.me/nastasya_br",
      icon: "telegram"
    }
  ],
  contact: {
    email: "nastasya@example.com",
    phone: "+38063XXXXXXX", 
    location: "Київ, Україна"
  }
}
