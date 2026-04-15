import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import SpecialOffers from '@/components/sections/SpecialOffers'
import Services from '@/components/sections/Services'
import Portfolio from '@/components/sections/Portfolio'
import WorkProcess from '@/components/sections/WorkProcess'
import Contacts from '@/components/sections/Contacts'
import Footer from '@/components/sections/Footer'
import { generateMetadata } from '@/lib/seo'

export const metadata: Metadata = generateMetadata({
  title: 'Home | Photography Studio',
  description: 'Professional photography studio specializing in commercial, product, and brand photography. Creating visual stories that elevate your brand.',
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
      <WorkProcess />
      <Contacts />
      <Footer />
    </main>
  )
}
