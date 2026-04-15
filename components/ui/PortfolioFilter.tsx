'use client'

import { useState } from 'react'
import { getPortfolioCategories } from '@/data/portfolio'

interface PortfolioFilterProps {
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export default function PortfolioFilter({ activeCategory, onCategoryChange }: PortfolioFilterProps) {
  const categories = ['All', ...getPortfolioCategories()]

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            activeCategory === category
              ? 'bg-orange-500 text-white shadow-lg transform scale-105'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
