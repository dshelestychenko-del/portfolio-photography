export interface SocialLink {
  platform: string
  url: string
  icon?: string
}

export interface ContactInfo {
  label: string
  value: string
  value2?: string
  icon?: string
}

export interface FormField {
  name: string
  label: string
  type: 'text' | 'email' | 'select' | 'textarea'
  placeholder: string
  required?: boolean
  options?: { value: string; label: string }[]
}

export interface ContactsData {
  title: string
  subtitle: string
  description: string
  contactInfo: ContactInfo[]
  social: {
    title: string
    links: SocialLink[]
  }
  form: {
    title: string
    subtitle: string
    description?: string
    fields: FormField[]
    submitText: string
    submitHref?: string
  }
}

export const contactsData: ContactsData = {
  title: "Обговоримо",
  subtitle: "ваш проєкт",
  description: "Залиште заявку, і я зв'яжуся з вами для обговорення деталей зйомки.",
  contactInfo: [
    {
      label: "Телефон",
      value: "+38063XXXXXXX",
      icon: "phone"
    },
    {
      label: "Telegram",
      value: "@nastasya_br",
      icon: "telegram"
    },
    {
      label: "Instagram",
      value: "@nastasya_br",
      icon: "instagram"
    }
  ],
  social: {
    title: "Слідкуйте за мною",
    links: [
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
    ]
  },
  form: {
    title: "Обговоримо ваш",
    subtitle: "проєкт",
    description: "Залиште заявку, і я зв'яжуся з вами для обговорення деталей зйомки.",
    fields: [
      {
        name: "name",
        label: "Ім'я",
        type: "text",
        placeholder: "Ваше ім'я",
        required: true
      },
      {
        name: "email",
        label: "Телефон або Email",
        type: "email",
        placeholder: "Ваш email або телефон",
        required: true
      },
      {
        name: "project",
        label: "Тип проєкту",
        type: "select",
        placeholder: "Оберіть тип проєкту",
        required: true,
        options: [
          { value: "product", label: "Предметна фотографія" },
          { value: "brand", label: "Бренд фотографія" },
          { value: "ecommerce", label: "E-commerce" },
          { value: "food", label: "Фуд фотографія" },
          { value: "other", label: "Інше" }
        ]
      },
      {
        name: "message",
        label: "Повідомлення",
        type: "textarea",
        placeholder: "Розкажіть про ваш проєкт...",
        required: true
      }
    ],
    submitText: "Надіслати заявку",
    submitHref: "#"
  }
}
