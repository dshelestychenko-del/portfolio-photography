import { siteData } from '@/data/site'
import { Phone, Send } from "lucide-react"
import { FaInstagram } from "react-icons/fa"

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#171717] text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold">
              <span className="text-white">Анастасія</span>
              <span className="text-[#F25623]"> Браєрська</span>
            </h3>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-white font-medium">Контакти</span>

            <a href="tel:+38063XXXXXXX">
              <Phone className="text-[#F25623] w-5 h-5 transition hover:scale-110 hover:text-[#171717]" />
            </a>

            <a href="https://t.me/nastasya_br" target="_blank">
              <Send className="text-[#F25623] w-5 h-5 transition hover:scale-110 hover:text-[#171717]" />
            </a>

            <a href="https://instagram.com/nastasya_br" target="_blank">
              <FaInstagram className="text-[#F25623] w-5 h-5 transition-all duration-300 hover:scale-110 hover:text-[#171717]" />
            </a>
          </div>
        </div>
    </footer>
  )
}
