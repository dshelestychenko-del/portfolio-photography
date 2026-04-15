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
    title: "Product Photography",
    description: "Studio-quality shots that showcase your products in the best light",
    features: [
      "Professional lighting",
      "Multiple angles",
      "Detail focus",
      "Brand consistency"
    ],
    icon: "camera",
    popular: true
  },
  {
    id: "2",
    title: "Brand Photography",
    description: "Complete visual identity creation for your brand story",
    features: [
      "Creative direction",
      "Campaign concepts",
      "Style guides",
      "Visual storytelling"
    ],
    icon: "brand",
    popular: false
  },
  {
    id: "3",
    title: "E-commerce Solutions",
    description: "Optimized imagery for online retail and marketplaces",
    features: [
      "White background",
      "360° views",
      "Size reference",
      "Platform ready"
    ],
    icon: "commerce",
    popular: false
  },
  {
    id: "4",
    title: "Food & Lifestyle",
    description: "Appetizing visuals that capture taste and atmosphere",
    features: [
      "Food styling",
      "Natural lighting",
      "Texture focus",
      "Environmental shots"
    ],
    icon: "food",
    popular: false
  },
  {
    id: "5",
    title: "Fashion Photography",
    description: "High-end fashion shoots for brands and magazines",
    features: [
      "Runway coverage",
      "Editorial spreads",
      "Campaign photography",
      "Behind-the-scenes content"
    ],
    icon: "fashion",
    popular: true
  },
  {
    id: "6",
    title: "Architecture & Interior",
    description: "Capturing spaces and architectural details",
    features: [
      "Interior design",
      "Architectural details",
      "Real estate photography",
      "Virtual tours"
    ],
    icon: "architecture",
    popular: false
  },
  {
    id: "7",
    title: "Event Photography",
    description: "Professional coverage of corporate and private events",
    features: [
      "Corporate events",
      "Product launches",
      "Conferences",
      "Social gatherings"
    ],
    icon: "event",
    popular: false
  },
  {
    id: "8",
    title: "Video Production",
    description: "Professional video content for marketing and social media",
    features: [
      "Product videos",
      "Brand documentaries",
      "Social media content",
      "Post-production"
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
