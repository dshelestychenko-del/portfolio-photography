import { processData } from '@/data/process'

export default function WorkProcess() {

  return (
    <section id="process" className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#171717] mb-6">
            {processData.title}
            <span className="text-orange-500"> {processData.subtitle}</span>
          </h2>
          <p className="text-xl text-[#171717] max-w-3xl mx-auto leading-relaxed">
            {processData.description}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-20">
          {processData.steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="bg-[#DEDEDE] rounded-2xl p-8 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-orange-500 transition-colors duration-300">
                    <span className="text-2xl font-bold text-orange-500 group-hover:text-white transition-colors duration-300">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#171717] mb-3">
                    {step.title}
                  </h3>
                </div>
                <p className="text-[#171717] text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {index < processData.steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-orange-300 -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>

        <div id="terms" className="bg-[#DEDEDE] rounded-3xl p-12 shadow-lg">
          <h3 className="text-2xl font-bold text-[#171717] mb-8 text-center">
            {processData.conditions.title}
            <span className="text-orange-500"> {processData.conditions.subtitle}</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-[#171717] mb-4 flex items-center">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                    <div className="w-4 h-4 bg-orange-500 rounded"></div>
                  </div>
                  {processData.conditions.payment.title}
                </h4>
                <ul className="space-y-3 text-[#171717]">
                  {processData.conditions.payment.items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-[#171717] mb-4 flex items-center">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                    <div className="w-4 h-4 bg-orange-500 rounded"></div>
                  </div>
                  {processData.conditions.timeline.title}
                </h4>
                <ul className="space-y-3 text-[#171717]">
                  {processData.conditions.timeline.items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
