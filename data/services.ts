export interface Service {
  id: string
  title: string
  description: string
  features: string[]
  icon?: string
  popular?: boolean
  price?: string
}

export const services: Service[] = [
  {
    id: "1",
    title: "Предметна фотографія",
    description: "Студійні зйомки, що показують ваші продукти у найкращому світлі",
    features: [
      "Професійне освітлення",
      "Кілька кутів",
      "Фокус на деталях",
      "Бренд-консистентність"
    ],
    icon: "camera",
    popular: true
  },
  {
    id: "2",
    title: "Бренд фотографія",
    description: "Створення повної візуальної ідентичності для історії вашого бренду",
    features: [
      "Креативна режисура",
      "Концепції кампаній",
      "Стиль-гайди",
      "Візуальний сторітелінг"
    ],
    icon: "brand",
    popular: false
  },
  {
    id: "3",
    title: "E-commerce рішення",
    description: "Оптимізовані зображення для онлайн-ритейлу та маркетплейсів",
    features: [
      "Білий фон",
      "360° огляд",
      "Масштабна сітка",
      "Готовність для платформ"
    ],
    icon: "commerce",
    popular: false
  },
  {
    id: "4",
    title: "Фуд та лайфстайл",
    description: "Апетитні візуали, що передають смак та атмосферу",
    features: [
      "Фуд стайлінг",
      "Природне освітлення",
      "Фокус на текстурах",
      "Енвайронментал зйомки"
    ],
    icon: "food",
    popular: false
  },
  {
    id: "5",
    title: "Відео виробництво",
    description: "Професійний відеоконтент для маркетингу та соціальних мереж",
    features: [
      "Продуктові відео",
      "Брендові документальні фільми",
      "Контент для соцмереж",
      "Пост-продакшн"
    ],
    icon: "video",
    popular: true
  }
]

export const getServices = (popular?: boolean): Service[] => {
  if (popular !== undefined) {
    return services.filter(service => service.popular === popular)
  }
  return services
}

export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id)
}
