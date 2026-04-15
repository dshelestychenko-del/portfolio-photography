import { aboutData } from '@/data/about'

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About
                <br />
                <span className="text-orange-500">My Vision</span>
              </h2>
              <div className="w-20 h-1 bg-orange-500 mb-8"></div>
            </div>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              {aboutData.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <div className="flex items-center space-x-8 pt-4">
              <div>
                <p className="text-3xl font-bold text-gray-900">{aboutData.experience.projects}</p>
                <p className="text-gray-600">Projects</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">{aboutData.experience.years}</p>
                <p className="text-gray-600">Years</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">{aboutData.experience.brands}</p>
                <p className="text-gray-600">Brands</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-orange-50 to-gray-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-orange-500 rounded-full mx-auto mb-6 opacity-20"></div>
                  <p className="text-gray-500 text-lg">Professional Portrait</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-100 rounded-full opacity-60"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gray-200 rounded-full opacity-80"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
