'use client'

import { useEffect } from 'react'
import { PortfolioItem } from '@/data/portfolio'

interface PortfolioModalProps {
  item: PortfolioItem | null
  isOpen: boolean
  onClose: () => void
}

export default function PortfolioModal({ item, isOpen, onClose }: PortfolioModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    const handleBodyScroll = () => {
      if (isOpen) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'unset'
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      handleBodyScroll()
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen || !item) return null

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200 shadow-lg"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5 text-[#171717]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Image */}
          <div className="aspect-video bg-gradient-to-br from-orange-50 to-[#DEDEDE] flex items-center justify-center">
            <div className="text-center">
              <div className="w-32 h-32 bg-orange-500 rounded-full mx-auto mb-6 opacity-20"></div>
              <p className="text-[#171717] text-lg">Зображення портфоліо</p>
              <p className="text-[#171717] text-sm mt-2">{item.imageUrl}</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12 bg-[#DEDEDE] rounded-xl shadow-md">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-4">
                {item.category === 'Product Photography' ? 'Предметна фотографія' : 
                  item.category === 'Food Photography' ? 'Фуд фотографія' : 
                  item.category === 'Brand Photography' ? 'Бренд фотографія' : 
                  item.category === 'E-commerce' ? 'E-commerce' : 
                  item.category === 'Lifestyle' ? 'Лайфстайл' : item.category}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#171717] mb-4">
                {item.title}
              </h2>
              <p className="text-xl text-[#171717] leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Meta information */}
            <div className="grid md:grid-cols-2 gap-8 mb-8 bg-[#DEDEDE] rounded-xl shadow-md p-6">
              <div>
                <h3 className="text-lg font-semibold text-[#171717] mb-4">Деталі проєкту</h3>
                <div className="space-y-3">
                  <div>
                    <span className="text-sm text-[#171717]">Клієнт</span>
                    <p className="text-[#171717] font-medium">{item.client || 'Private Client'}</p>
                  </div>
                  <div>
                    <span className="text-sm text-[#171717]">Рік</span>
                    <p className="text-[#171717] font-medium">{item.year || '2024'}</p>
                  </div>
                </div>
              </div>

              {item.tags && item.tags.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-[#171717] mb-4">Теги</h3>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-[#171717] text-white rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* CTA */}
            <div className="text-center">
              <button
                onClick={onClose}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Обговорити проєкт
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
