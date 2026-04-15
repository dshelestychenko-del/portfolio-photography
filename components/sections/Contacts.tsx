import { contactsData } from '@/data/contacts'
import ContactForm from '@/components/forms/ContactForm'

export default function Contacts() {
  return (
    <section id="contact" className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#171717] mb-6">
            {contactsData.title}
            <span className="text-[#171717]"> {contactsData.subtitle}</span>
          </h2>
          <p className="text-xl text-[#171717] max-w-3xl mx-auto leading-relaxed">
            {contactsData.description}
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="bg-[#DEDEDE] p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold text-[#171717] mb-8">
                Contact
                <span className="text-[#171717]"> Details</span>
              </h3>
              <div className="space-y-6">
                {contactsData.contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 transition-colors duration-300">
                      <div className="w-6 h-6 bg-orange-500 rounded-lg group-hover:bg-transparent transition-colors duration-300"></div>
                    </div>
                    <div>
                      <p className="font-semibold text-[#171717] mb-1">{item.label}</p>
                      <p className="text-[#171717]">{item.value}</p>
                      {item.value2 && <p className="text-[#171717]">{item.value2}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-[#DEDEDE] p-8 rounded-xl shadow-md">
              <h4 className="text-lg font-semibold text-[#171717] mb-6">{contactsData.social.title}</h4>
              <div className="flex space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center hover:bg-orange-500 transition-colors duration-300 cursor-pointer group">
                  <div className="w-6 h-6 bg-orange-500 rounded group-hover:bg-transparent transition-colors duration-300"></div>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center hover:bg-orange-500 transition-colors duration-300 cursor-pointer group">
                  <div className="w-6 h-6 bg-orange-500 rounded group-hover:bg-transparent transition-colors duration-300"></div>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center hover:bg-orange-500 transition-colors duration-300 cursor-pointer group">
                  <div className="w-6 h-6 bg-orange-500 rounded group-hover:bg-transparent transition-colors duration-300"></div>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center hover:bg-orange-500 transition-colors duration-300 cursor-pointer group">
                  <div className="w-6 h-6 bg-orange-500 rounded group-hover:bg-transparent transition-colors duration-300"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-[#DEDEDE] p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold text-[#171717] mb-8">
              {contactsData.form.title}
              <span className="text-[#171717]"> {contactsData.form.subtitle}</span>
            </h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
