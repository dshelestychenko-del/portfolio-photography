export interface OfferFeature {
  text: string
  included?: boolean
}

export interface Offer {
  id: string
  title: string
  description: string
  features: OfferFeature[]
  price: string
  priceNote?: string
  highlighted: boolean
  buttonText: string
  buttonHref?: string
}

export interface OffersData {
  title: string
  subtitle: string
  description: string
  offers: Offer[]
}

export const offersData: OffersData = {
  title: "Спеціальні",
  subtitle: "пропозиції",
  description: "Ексклюзивні пакети, розроблені для покращення фотографії вашого бренду",
  offers: [
    {
      id: "essential",
      title: "Пакет \"Знайомство\"",
      description: "Це унікальна пропозиція для перших клієнтів, щоб ви могли оцінити якість моєї роботи та стиль.",
      features: [
        { text: "Відео до 10 сек з фокусом на продукт" },
        { text: "Фото у мінімалістичному або легкому композиційному стилі" },
        { text: "Термін виконання: до 5 днів" },
        { text: "1 відео + 3 професійних фото" }
      ],
      price: "2500 грн",
      highlighted: false,
      buttonText: "Обрати пакет",
      buttonHref: "#contact"
    },
    {
      id: "professional",
      title: "Пакет \"Хочу більше\"",
      description: "Це унікальна пропозиція для клієнтів, котрі після знайомства хочуть більше варіативності та глибшого розкриття продукту.",
      features: [
        { text: "Відео до 20 сек, динамічне, з розкриттям продукту" },
        { text: "Фото: мінімалістичні, каталожні, композиційні" },
        { text: "Термін виконання: до 7 днів" },
        { text: "1 відео + 6 професійних фото" }
      ],
      price: "4000 грн",
      priceNote: "Популярний",
      highlighted: true,
      buttonText: "Обрати пакет",
      buttonHref: "#contact"
    },
    {
      id: "premium",
      title: "Пакет \"Максимум\"",
      description: "Це унікальна пропозиція для брендів, які хочуть отримати повноцінний, продуманий контент, розрахований більш ніж на місяць.",
      features: [
        { text: "Відео до 30 сек з розкриттям продукту та складною композицією" },
        { text: "Фото: діють усі позиції" },
        { text: "Термін виконання: до 10 днів" },
        { text: "1 відео + 12 професійних фото" },
        { text: "Візуал у подарунок" }
      ],
      price: "7700 грн",
      highlighted: false,
      buttonText: "Обрати пакет",
      buttonHref: "#contact"
    }
  ]
}
