import { offersData } from '@/data/offers'

export default function SpecialOffers() {
  return (
    <section id="offers" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {offersData.title}
            <span className="text-orange-500"> {offersData.subtitle}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {offersData.description}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {offersData.offers.map((pkg, index) => (
            <div 
              key={index}
              className={`${pkg.highlighted 
                ? 'bg-orange-500 text-white' 
                : 'bg-gray-50'} rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden`}
            >
              {pkg.highlighted && (
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600 rounded-full opacity-20 -mr-16 -mt-16"></div>
              )}
              <div className={`mb-6 ${pkg.highlighted ? 'relative z-10' : ''}`}>
                <div className={`w-12 h-12 ${pkg.highlighted ? 'bg-white' : 'bg-orange-100'} rounded-full flex items-center justify-center mb-4`}>
                  <div className={`w-6 h-6 ${pkg.highlighted ? 'bg-orange-500' : 'bg-orange-500'} rounded-full`}></div>
                </div>
                <h3 className={`text-2xl font-semibold mb-3 ${pkg.highlighted ? 'text-white' : 'text-gray-900'}`}>
                  {pkg.title}
                </h3>
                <p className={pkg.highlighted ? 'text-orange-100' : 'text-gray-600'}>
                  {pkg.description}
                </p>
              </div>
              <div className={`space-y-3 mb-8 ${pkg.highlighted ? 'relative z-10' : ''}`}>
                {pkg.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className={`flex items-center ${pkg.highlighted ? 'text-orange-100' : 'text-gray-700'}`}>
                    <div className={`w-2 h-2 ${pkg.highlighted ? 'bg-white' : 'bg-orange-500'} rounded-full mr-3`}></div>
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>
              <div className={`mb-6 ${pkg.highlighted ? 'relative z-10' : ''}`}>
                <span className={`text-4xl font-bold ${pkg.highlighted ? 'text-white' : 'text-gray-900'}`}>
                  {pkg.price}
                </span>
              </div>
              <button className={`w-full py-3 rounded-full font-medium transition-all duration-300 ${
                pkg.highlighted 
                  ? 'bg-white text-orange-500 hover:bg-orange-100' 
                  : pkg.title === 'Premium' 
                    ? 'bg-gray-900 text-white hover:bg-orange-500'
                    : 'bg-white text-gray-900 border border-gray-200 hover:bg-orange-500 hover:text-white hover:border-orange-500'
              }`}>
                {pkg.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
