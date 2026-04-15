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
    color: string
  }
  ctaSecondary?: {
    text: string
    href?: string
    color: string
  }
  imageUrl?: string
  stats?: HeroStats[]
}

export const heroData: HeroData = {
  title: "Предметний фотограф",
  subtitle: "Професійна фотографія для вашого бізнесу",
  description: "",
  ctaPrimary: {
    text: "Обговорити проєкт",
    href: "#contact",
    color: "#171717"
  },
  ctaSecondary: {
    text: "Переглянути портфоліо",
    href: "#portfolio",
    color: "#171717"
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
