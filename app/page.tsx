import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import SpecialOffers from '@/components/sections/SpecialOffers'
import Services from '@/components/sections/Services'
import Portfolio from '@/components/sections/Portfolio'
import Pricing from '@/components/sections/Pricing'
import WorkProcess from '@/components/sections/WorkProcess'
import Footer from '@/components/sections/Footer'
import { generateMetadata } from '@/lib/seo'

export const metadata: Metadata = generateMetadata({
  title: 'Headline | Nastya - Product Photographer',
  description: 'Professional product photography for your business. Creating visual stories that highlight product quality.',
})

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <SpecialOffers />
      <Services />
      <Portfolio />
      <Pricing />
      <WorkProcess />
      <Footer />
    </main>
  )
}
