export interface ProcessStep {
  id: string
  step: string
  title: string
  description: string
}

export interface ProcessCondition {
  title: string
  items: string[]
}

export interface ProcessData {
  title: string
  subtitle: string
  description: string
  steps: ProcessStep[]
  conditions: {
    title: string
    subtitle: string
    payment: ProcessCondition
    timeline: ProcessCondition
  }
}

export const processData: ProcessData = {
  title: "Етапи",
  subtitle: "роботи",
  description: "Продуманий підхід для створення виняткових результатів для вашого бренду",
  steps: [
    {
      id: "discovery",
      step: "01",
      title: "Обговорення проєкту",
      description: "Визначаємо задачі, формат зйомки, стиль та референси для встановлення креативного напрямку."
    },
    {
      id: "strategy",
      step: "02",
      title: "Підготовка",
      description: "Комплексне планування, включаючи списки кадрів, стилізацію та графік для бездоглядного виконання."
    },
    {
      id: "creation",
      step: "03",
      title: "Зйомка",
      description: "Професійна фото- або відеозйомка з уважністю до освітлення, композиції та сутності бренду."
    },
    {
      id: "refinement",
      step: "04",
      title: "Обробка",
      description: "Експертна ретуш та монтаж для покращення зображень зі збереженням автентичності та консистентності бренду."
    },
    {
      id: "delivery",
      step: "05",
      title: "Передача матеріалів",
      description: "Своєчасна передача оптимізованих зображень високої роздільної здатності для всіх ваших маркетингових каналів."
    }
  ],
  conditions: {
    title: "Умови",
    subtitle: "співпраці",
    payment: {
      title: "Умови оплати",
      items: [
        "Передоплата 50% для бронювання",
        "Решта 50% після завершення проєкту",
        "Оплата через банківський переказ",
        "Надання детального рахунку"
      ]
    },
    timeline: {
      title: "Терміни та доставка",
      items: [
        "Стандартне виконання: 3-5 робочих днів",
        "Термінове виконання (додаткова плата)",
        "2 раунди правок включено",
        "Безпечна доставка файлів через хмарне сховище"
      ]
    }
  }
}
