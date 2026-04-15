import { siteData } from '@/data/site'
import { Phone, Send } from "lucide-react"
import { FaInstagram } from "react-icons/fa"

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#171717] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 mb-8">
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-white">Анастасія</span>
                <span className="text-[#F25623]"> Браєрська</span>
              </h3>
              <p className="text-[#171717] leading-relaxed">
                {siteData.footer.brand.description}
              </p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <div className="flex gap-6 items-center justify-center">
              <a href="tel:+38063XXXXXXX">
                <Phone className="text-[#F25623] w-6 h-6 transition hover:scale-110 hover:text-[#171717]" />
              </a>

              <a href="https://t.me/nastasya_br" target="_blank">
                <Send className="text-[#F25623] w-6 h-6 transition hover:scale-110 hover:text-[#171717]" />
              </a>

              <a href="https://instagram.com/nastasya_br" target="_blank">
                <FaInstagram className="text-[#F25623] w-6 h-6 transition-all duration-300 hover:scale-110 hover:text-[#171717]" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-[#171717] pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <p className="text-[#171717] text-sm">
              {siteData.footer.legal.copyright}
            </p>
            <div className="flex space-x-6 text-[#171717] text-sm">
              <span className="hover:text-orange-500 transition-colors duration-300 cursor-pointer">
                {siteData.footer.legal.privacy}
              </span>
              <span className="hover:text-orange-500 transition-colors duration-300 cursor-pointer">
                {siteData.footer.legal.terms}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
