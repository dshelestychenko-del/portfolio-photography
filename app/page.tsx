import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import SpecialOffers from '@/components/sections/SpecialOffers'
import Services from '@/components/sections/Services'
import Portfolio from '@/components/sections/Portfolio'
import Pricing from '@/components/sections/Pricing'
import Terms from '@/components/sections/Terms'
import WorkProcess from '@/components/sections/WorkProcess'
import Contacts from '@/components/sections/Contacts'
import Footer from '@/components/sections/Footer'
import { generateMetadata } from '@/lib/seo'

export const metadata: Metadata = generateMetadata({
  title: 'Головна | Анастасія - Предметний фотограф',
  description: 'Професійна предметна фотографія для вашого бізнесу. Створюю візуальні історії, що підкреслюють якість продукту.',
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
      <Terms />
      <WorkProcess />
      <Contacts />
      <Footer />
    </main>
  )
}
