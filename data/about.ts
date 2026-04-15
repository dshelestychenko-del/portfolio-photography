export interface AboutAchievement {
  title: string
  value: string
  description?: string
}

export interface AboutData {
  name: string
  role: string
  description: string[]
  experience: {
    years: string
    projects: string
    brands: string
  }
  imageUrl?: string
  achievements: AboutAchievement[]
  values?: string[]
}

export const aboutData: AboutData = {
  name: "Анастасія",
  role: "Предметний фотограф",
  description: [
    "Я — Анастасія, предметний фотограф, який допомагає брендам розкривати свої продукти через стильний та продуманий візуал.",
    "Я поєдную мінімалізм, композицію та креативні рішення, щоб кожен кадр виглядав сучасно, дорого та привабливо для вашої аудиторії.",
    "Працюю з брендами, які цінують естетику, увагу до деталей і хочуть виділятися серед конкурентів. Моя задача — не просто зробити фото чи відео, а передати характер продукту та створити контент, який продає."
  ],
  experience: {
    years: "7+",
    projects: "500+",
    brands: "50+"
  },
  imageUrl: "/images/about-portrait.jpg",
  achievements: [
    {
      title: "Проєкти",
      value: "100+",
      description: "Виконані проєкти"
    },
    {
      title: "Досвід",
      value: "3+ роки",
      description: "У фотографії"
    },
    {
      title: "Клієнти",
      value: "30+",
      description: "Задоволені клієнти"
    }
  ],
  values: [
    "Якість понад усе",
    "Креативна досконалість",
    "Співпраця з клієнтом",
    "Технічна точність"
  ]
}
