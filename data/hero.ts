export interface HeroStats {
  value: string
  label: string
}

export interface HeroData {
  title: string
  subtitle: string
  description: string
  ctaPrimary: {
    text: string
    href?: string
  }
  ctaSecondary?: {
    text: string
    href?: string
  }
  imageUrl?: string
  stats?: HeroStats[]
}

export const heroData: HeroData = {
  title: "Premium",
  subtitle: "Photography",
  description: "for Brands",
  ctaPrimary: {
    text: "Discuss Your Project",
    href: "#contact"
  },
  ctaSecondary: {
    text: "View Portfolio",
    href: "#portfolio"
  },
  imageUrl: "/images/hero-bg.jpg",
  stats: [
    {
      value: "500+",
      label: "Projects"
    },
    {
      value: "7+",
      label: "Years"
    },
    {
      value: "50+",
      label: "Brands"
    }
  ]
}
