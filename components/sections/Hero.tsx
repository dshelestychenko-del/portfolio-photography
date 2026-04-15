'use client'

import { heroData } from '@/data/hero'
import ScrollReveal from '@/components/ui/ScrollReveal'

function HeroButton() {
  return (
    <button 
      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
      className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
    >
      {heroData.ctaPrimary.text}
    </button>
  )
}

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-white">
      <ScrollReveal>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
                {heroData.title}
                <br />
                <span className="text-orange-500">{heroData.subtitle}</span>
                <br />
                {heroData.description}
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-lg">
                Creating visual stories that elevate your brand through stunning product and commercial photography
              </p>
            </div>
            
            <HeroButton />
          </div>
          <div className="relative">
            <div className="bg-gray-50 rounded-3xl h-96 lg:h-[500px] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-gray-100 opacity-50"></div>
              <div className="relative z-10 text-center">
                <div className="w-24 h-24 bg-orange-500 rounded-full mx-auto mb-6 animate-pulse"></div>
                <p className="text-gray-600 text-lg">Visual Storytelling</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-100 rounded-full opacity-60"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gray-100 rounded-full opacity-80"></div>
          </div>
        </div>
      </div>
      </ScrollReveal>
    </section>
  )
}
