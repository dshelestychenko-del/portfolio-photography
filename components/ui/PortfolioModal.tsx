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
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Image */}
          <div className="aspect-video bg-gradient-to-br from-orange-50 to-gray-100 flex items-center justify-center">
            <div className="text-center">
              <div className="w-32 h-32 bg-orange-500 rounded-full mx-auto mb-6 opacity-20"></div>
              <p className="text-gray-500 text-lg">Portfolio Image</p>
              <p className="text-gray-400 text-sm mt-2">{item.imageUrl}</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-4">
                {item.category}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {item.title}
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Meta information */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Details</h3>
                <div className="space-y-3">
                  <div>
                    <span className="text-sm text-gray-500">Client</span>
                    <p className="text-gray-900 font-medium">{item.client || 'Private Client'}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Year</span>
                    <p className="text-gray-900 font-medium">{item.year || '2024'}</p>
                  </div>
                </div>
              </div>

              {item.tags && item.tags.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
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
                Discuss Similar Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
