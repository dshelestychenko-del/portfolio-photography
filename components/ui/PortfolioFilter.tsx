'use client'

import { useState } from 'react'
import { getPortfolioCategories } from '@/data/portfolio'

interface PortfolioFilterProps {
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export default function PortfolioFilter({ activeCategory, onCategoryChange }: PortfolioFilterProps) {
  const categories = ['Всі', ...getPortfolioCategories()]

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            activeCategory === category
              ? 'bg-[#F25623] text-white shadow-lg transform scale-105'
              : 'bg-[#DEDEDE] text-[#171717] hover:bg-[#F25623] hover:text-white'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
