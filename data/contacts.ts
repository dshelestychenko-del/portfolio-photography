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
  title: "Get In",
  subtitle: "Touch",
  description: "Ready to create stunning visuals for your brand? Let's discuss your project",
  contactInfo: [
    {
      label: "Email",
      value: "hello@photography.com",
      icon: "email"
    },
    {
      label: "Phone",
      value: "+1 (555) 123-4567",
      icon: "phone"
    },
    {
      label: "Studio Location",
      value: "123 Creative Street, Art District, NY 10001",
      icon: "location"
    },
    {
      label: "Business Hours",
      value: "Monday - Friday: 9:00 AM - 6:00 PM",
      value2: "Saturday: 10:00 AM - 4:00 PM",
      icon: "clock"
    }
  ],
  social: {
    title: "Follow Me",
    links: [
      {
        platform: "Instagram",
        url: "https://instagram.com/photography",
        icon: "instagram"
      },
      {
        platform: "LinkedIn",
        url: "https://linkedin.com/in/photography",
        icon: "linkedin"
      },
      {
        platform: "Telegram",
        url: "https://t.me/photography",
        icon: "telegram"
      },
      {
        platform: "Behance",
        url: "https://behance.net/photography",
        icon: "behance"
      }
    ]
  },
  form: {
    title: "Send a",
    subtitle: "Message",
    description: "Tell me about your project and I'll get back to you within 24 hours",
    fields: [
      {
        name: "name",
        label: "Name",
        type: "text",
        placeholder: "Your name",
        required: true
      },
      {
        name: "email",
        label: "Email",
        type: "email",
        placeholder: "your@email.com",
        required: true
      },
      {
        name: "project",
        label: "Project Type",
        type: "select",
        placeholder: "Select a project type",
        required: true,
        options: [
          { value: "product", label: "Product Photography" },
          { value: "brand", label: "Brand Photography" },
          { value: "ecommerce", label: "E-commerce" },
          { value: "food", label: "Food & Beverage" },
          { value: "other", label: "Other" }
        ]
      },
      {
        name: "message",
        label: "Message",
        type: "textarea",
        placeholder: "Tell me about your project...",
        required: true
      }
    ],
    submitText: "Send Message",
    submitHref: "#"
  }
}
