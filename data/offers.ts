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
  title: "Special",
  subtitle: "Offers",
  description: "Exclusive packages designed to elevate your brand photography",
  offers: [
    {
      id: "essential",
      title: "Essential",
      description: "Perfect for emerging brands",
      features: [
        { text: "15 product photos" },
        { text: "Professional retouching" },
        { text: "3-day delivery" }
      ],
      price: "$599",
      priceNote: "Starting from",
      highlighted: false,
      buttonText: "Get Started",
      buttonHref: "#contact"
    },
    {
      id: "professional",
      title: "Professional",
      description: "Most popular choice",
      features: [
        { text: "35 product photos" },
        { text: "Premium retouching" },
        { text: "Lifestyle shots" },
        { text: "2-day delivery" }
      ],
      price: "$1299",
      priceNote: "Most popular",
      highlighted: true,
      buttonText: "Choose Professional",
      buttonHref: "#contact"
    },
    {
      id: "premium",
      title: "Premium",
      description: "Complete brand solution",
      features: [
        { text: "60+ product photos" },
        { text: "Ultra-premium retouching" },
        { text: "Creative direction" },
        { text: "Video content included" },
        { text: "Priority delivery" }
      ],
      price: "$2499",
      priceNote: "Best value",
      highlighted: false,
      buttonText: "Go Premium",
      buttonHref: "#contact"
    }
  ]
}
