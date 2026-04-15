'use client'

import { useState } from 'react'
import { portfolioItems, getPortfolioItems } from '@/data/portfolio'
import PortfolioFilter from '@/components/ui/PortfolioFilter'
import PortfolioModal from '@/components/ui/PortfolioModal'
import { PortfolioItem } from '@/data/portfolio'


export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('Всі')
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const filteredItems = activeCategory === 'Всі' 
    ? portfolioItems 
    : getPortfolioItems(activeCategory)

  const openModal = (item: PortfolioItem) => {
    setSelectedItem(item)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedItem(null)
  }

  return (
    <section id="portfolio" className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#F25623] mb-6">
            Портфоліо
          </h2>
          <p className="text-xl text-[#171717] max-w-3xl mx-auto leading-relaxed">
            Ознайомтесь з моїми роботами
          </p>
        </div>
        
        <PortfolioFilter
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div 
              key={index} 
              onClick={() => openModal(item)}
              className={`group cursor-pointer overflow-hidden rounded-3xl bg-transparent transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                item.featured ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
            >
              <div className={`relative overflow-hidden ${
                item.featured ? 'h-96 lg:h-full' : 'h-64'
              }`}>
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-[#DEDEDE] opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className={`${
                      item.featured ? 'w-32 h-32' : 'w-24 h-24'
                    } bg-orange-500 rounded-full mx-auto mb-6 opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                    <p className="text-[#171717] text-lg">Робота</p>
                  </div>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-white">
                    <p className="text-sm uppercase tracking-wider mb-2 text-[#F25623]">
                      {item.category}
                    </p>
                    <h3 className="text-2xl font-bold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[#171717] text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-[#DEDEDE] rounded-xl shadow-md">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-orange-500 font-medium uppercase tracking-wide">
                      {item.category}
                    </p>
                    <h3 className="text-xl font-semibold text-[#171717] mt-1">
                      {item.title}
                    </h3>
                  </div>
                  <div className="w-10 h-10 bg-[#171717] rounded-full flex items-center justify-center group-hover:bg-[#F25623] transition-colors duration-300">
                    <div className="w-5 h-5 bg-[#F25623] rounded-full group-hover:bg-white transition-colors duration-300"></div>
                  </div>
                </div>
                <p className="text-[#DEDEDE] mt-3 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
              </div>
      
      <PortfolioModal
        item={selectedItem}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  )
}
