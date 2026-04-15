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
  name: "Photography",
  role: "Brand & Product Photographer",
  description: [
    "With over 7 years of experience in commercial photography, I specialize in creating visual narratives that elevate brands and capture the essence of their products.",
    "My approach combines technical precision with artistic vision, delivering images that not only look stunning but also resonate with your target audience and drive business results.",
    "From startups to established luxury brands, I craft photography that tells your unique story and sets you apart in the marketplace."
  ],
  experience: {
    years: "7+",
    projects: "500+",
    brands: "50+"
  },
  imageUrl: "/images/about-portrait.jpg",
  achievements: [
    {
      title: "Projects",
      value: "500+",
      description: "Completed projects"
    },
    {
      title: "Experience",
      value: "7+",
      description: "Years in photography"
    },
    {
      title: "Brands",
      value: "50+",
      description: "Happy clients"
    }
  ],
  values: [
    "Quality over quantity",
    "Creative excellence",
    "Client collaboration",
    "Technical precision"
  ]
}
