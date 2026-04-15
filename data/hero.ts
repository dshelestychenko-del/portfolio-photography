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
  title: "Анастасія",
  subtitle: "Предметний фотограф",
  description: "Професійна фотографія для вашого бізнесу",
  ctaPrimary: {
    text: "Обговорити проєкт",
    href: "#contact"
  },
  ctaSecondary: {
    text: "Переглянути портфоліо",
    href: "#portfolio"
  },
  imageUrl: "/images/hero-bg.jpg",
  stats: [
    {
      value: "100+",
      label: "Проєктів"
    },
    {
      value: "3+",
      label: "Роки досвіду"
    },
    {
      value: "30+",
      label: "Клієнтів"
    }
  ]
}
