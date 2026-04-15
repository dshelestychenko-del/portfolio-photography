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
    title: "Luxury Watch Collection",
    description: "Elegant timepieces captured with precision lighting",
    featured: true,
    imageUrl: "/images/portfolio/luxury-watches.jpg",
    tags: ["watches", "luxury", "product"],
    client: "Swiss Watch Co.",
    year: "2024"
  },
  {
    id: "2", 
    category: "Food Photography",
    title: "Artisan Bakery",
    description: "Fresh breads and pastries showcasing craftsmanship",
    featured: false,
    imageUrl: "/images/portfolio/bakery.jpg",
    tags: ["food", "bakery", "artisan"],
    client: "Artisan Breads",
    year: "2024"
  },
  {
    id: "3",
    category: "Brand Photography",
    title: "Fashion Brand Campaign",
    description: "Complete visual identity for emerging fashion label",
    featured: false,
    imageUrl: "/images/portfolio/fashion.jpg",
    tags: ["fashion", "brand", "campaign"],
    client: "Nouveau Fashion",
    year: "2023"
  },
  {
    id: "4",
    category: "E-commerce",
    title: "Skincare Products",
    description: "Clean, minimalist shots for online retail",
    featured: false,
    imageUrl: "/images/portfolio/skincare.jpg",
    tags: ["skincare", "ecommerce", "beauty"],
    client: "Glow Beauty",
    year: "2024"
  },
  {
    id: "5",
    category: "Lifestyle",
    title: "Coffee Brand Story",
    description: "Authentic moments and product integration",
    featured: true,
    imageUrl: "/images/portfolio/coffee.jpg",
    tags: ["coffee", "lifestyle", "brand"],
    client: "Morning Roast",
    year: "2023"
  },
  {
    id: "6",
    category: "Product Photography",
    title: "Jewelry Collection",
    description: "Detailed shots highlighting fine craftsmanship",
    featured: false,
    imageUrl: "/images/portfolio/jewelry.jpg",
    tags: ["jewelry", "product", "luxury"],
    client: "Elegant Gems",
    year: "2024"
  },
  {
    id: "7",
    category: "Food Photography",
    title: "Restaurant Menu",
    description: "Culinary artistry for fine dining establishment",
    featured: false,
    imageUrl: "/images/portfolio/restaurant.jpg",
    tags: ["food", "restaurant", "fine-dining"],
    client: "Le Gourmet",
    year: "2023"
  },
  {
    id: "8",
    category: "Brand Photography",
    title: "Tech Startup",
    description: "Modern tech company visual identity",
    featured: true,
    imageUrl: "/images/portfolio/tech.jpg",
    tags: ["tech", "startup", "corporate"],
    client: "InnovateTech",
    year: "2024"
  },
  {
    id: "9",
    category: "E-commerce",
    title: "Home Decor",
    description: "Stylish home accessories for online store",
    featured: false,
    imageUrl: "/images/portfolio/decor.jpg",
    tags: ["decor", "home", "ecommerce"],
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

export const getPortfolioCategories = (): string[] => {
  const categories = portfolioItems.map(item => item.category)
  return Array.from(new Set(categories))
}
