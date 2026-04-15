'use client'

import { pricingData } from '@/data/pricing'

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#171717] mb-6">
            {pricingData.photography.title}
          </h2>
          <p className="text-xl text-[#171717] max-w-3xl mx-auto leading-relaxed">
            Професійна фотографія для вашого бізнесу
          </p>
        </div>

        {/* Photography Categories */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingData.photography.categories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-transparent rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-[#171717] mb-6">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="border-b border-[#171717] pb-4 last:border-0">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium text-[#171717]">{item.title}</h4>
                        <span className="text-orange-500 font-semibold">{item.price}</span>
                      </div>
                      {item.description && (
                        <p className="text-sm text-[#171717]">{item.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Packages */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-[#171717] mb-12">
            {pricingData.packages.title}
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingData.packages.items.map((pkg, index) => (
              <div 
                key={index} 
                className={`bg-[#DEDEDE] rounded-2xl p-8 shadow-lg relative ${
                  pkg.popular ? 'ring-2 ring-orange-500' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Популярний
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h4 className="text-2xl font-bold text-[#171717] mb-2">{pkg.title}</h4>
                  <p className="text-[#171717] mb-4">{pkg.description}</p>
                  <div className="text-3xl font-bold text-orange-500">{pkg.price}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-[#171717]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Video */}
        <div>
          <h3 className="text-3xl font-bold text-center text-[#171717] mb-12">
            {pricingData.video.title}
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingData.video.items.map((video, index) => (
              <div key={index} className="bg-[#DEDEDE] rounded-2xl p-6 shadow-lg">
                <h4 className="text-xl font-semibold text-[#171717] mb-3">{video.title}</h4>
                <p className="text-[#171717] mb-4">{video.description}</p>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-[#171717]">{video.duration}</span>
                  <span className="text-2xl font-bold text-orange-500">{video.price}</span>
                </div>
                {video.note && (
                  <p className="text-sm text-[#171717] italic">{video.note}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
