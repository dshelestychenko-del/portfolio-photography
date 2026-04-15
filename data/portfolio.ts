export interface PortfolioItem {
  id: string
  category: string
  title: string
  description: string
  featured: boolean
  imageUrl?: string
  tags?: string[]
  client?: string
  year?: string
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    category: "Product Photography",
    title: "Колекція розкошних годинників",
    description: "Елегантні годинники, зняті з точним освітленням",
    featured: true,
    imageUrl: "/images/portfolio/luxury-watches.jpg",
    tags: ["годинники", "розкіш", "продукт"],
    client: "Swiss Watch Co.",
    year: "2024"
  },
  {
    id: "2", 
    category: "Food Photography",
    title: "Пекарня-майстерня",
    description: "Свіжий хліб та випічка, що демонструють майстерність",
    featured: false,
    imageUrl: "/images/portfolio/bakery.jpg",
    tags: ["їжа", "пекарня", "майстерність"],
    client: "Artisan Breads",
    year: "2024"
  },
  {
    id: "3",
    category: "Brand Photography",
    title: "Кампанія модного бренду",
    description: "Повна візуальна ідентичність для нової модної марки",
    featured: false,
    imageUrl: "/images/portfolio/fashion.jpg",
    tags: ["мода", "бренд", "кампанія"],
    client: "Nouveau Fashion",
    year: "2023"
  },
  {
    id: "4",
    category: "E-commerce",
    title: "Косметичні засоби",
    description: "Чисті, мінімалістичні знімки для онлайн-ритейлу",
    featured: false,
    imageUrl: "/images/portfolio/skincare.jpg",
    tags: ["косметика", "e-commerce", "краса"],
    client: "Glow Beauty",
    year: "2024"
  },
  {
    id: "5",
    category: "Lifestyle",
    title: "Історія кав'яного бренду",
    description: "Аутентичні моменти та інтеграція продукту",
    featured: true,
    imageUrl: "/images/portfolio/coffee.jpg",
    tags: ["кава", "лайфстайл", "бренд"],
    client: "Morning Roast",
    year: "2023"
  },
  {
    id: "6",
    category: "Product Photography",
    title: "Колекція прикрас",
    description: "Детальні знімки, що підкреслюють високу майстерність",
    featured: false,
    imageUrl: "/images/portfolio/jewelry.jpg",
    tags: ["прикраси", "продукт", "розкіш"],
    client: "Elegant Gems",
    year: "2024"
  },
  {
    id: "7",
    category: "Food Photography",
    title: "Меню ресторану",
    description: "Кулінарне мистецтво для закладу високої кухні",
    featured: false,
    imageUrl: "/images/portfolio/restaurant.jpg",
    tags: ["їжа", "ресторан", "вища кухня"],
    client: "Le Gourmet",
    year: "2023"
  },
  {
    id: "8",
    category: "Brand Photography",
    title: "Технологічний стартап",
    description: "Сучасна візуальна ідентичність технологічної компанії",
    featured: true,
    imageUrl: "/images/portfolio/tech.jpg",
    tags: ["технології", "стартап", "корпоративний"],
    client: "InnovateTech",
    year: "2024"
  },
  {
    id: "9",
    category: "E-commerce",
    title: "Декор для дому",
    description: "Стильні аксесуари для дому для онлайн-магазину",
    featured: false,
    imageUrl: "/images/portfolio/decor.jpg",
    tags: ["декор", "дім", "e-commerce"],
    client: "HomeStyle",
    year: "2023"
  }
]

export const getPortfolioItems = (category?: string, featured?: boolean): PortfolioItem[] => {
  let filtered = portfolioItems
  
  if (category) {
    filtered = filtered.filter(item => item.category === category)
  }
  
  if (featured !== undefined) {
    filtered = filtered.filter(item => item.featured === featured)
  }
  
  return filtered
}

export function getPortfolioCategories(): string[] {
  const categories = Array.from(new Set(portfolioItems.map(item => item.category)))
  return categories.map(cat => {
    switch(cat) {
      case 'Product Photography':
        return 'Предметна фотографія'
      case 'Food Photography':
        return 'Фуд фотографія'
      case 'Brand Photography':
        return 'Бренд фотографія'
      case 'E-commerce':
        return 'E-commerce'
      case 'Lifestyle':
        return 'Лайфстайл'
      default:
        return cat
    }
  })
}
