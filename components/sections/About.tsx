import { aboutData } from '@/data/about'
import CountUp from '@/components/ui/CountUp'

export default function About() {
  return (
    <section id="about" className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#171717] mb-6">
                <span>Про</span>
                <span className="text-[#F25623]"> мене</span>
              </h2>
              <div className="w-20 h-1 bg-orange-500 mb-8"></div>
            </div>
            <div className="space-y-6 text-lg text-[#171717] leading-relaxed bg-[#DEDEDE] p-8 rounded-xl shadow-md">
              {aboutData.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <div className="flex items-center space-x-8 pt-4">
              <div>
                <CountUp end={100} className="text-3xl font-bold text-[#F25623]" />+ проєктів
              </div>
              <div>
                <CountUp end={2} className="text-3xl font-bold text-[#F25623]" />+ роки досвіду
              </div>
              <div>
                <CountUp end={25} className="text-3xl font-bold text-[#F25623]" />+ клієнтів
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-[#DEDEDE] rounded-3xl shadow-xl overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-orange-50 to-gray-100 flex items-center justify-center bg-[#DEDEDE]">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#F25623] rounded-2xl flex items-center justify-center mb-4"></div>
                  <p className="text-[#171717] text-lg">Professional Portrait</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-100 rounded-full opacity-60"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#171717] rounded-full opacity-80"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
