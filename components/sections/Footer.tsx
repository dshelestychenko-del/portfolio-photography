import { Phone, Send } from "lucide-react"
import { FaInstagram } from "react-icons/fa"

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#171717] text-white py-6">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">

        <div className="text-white text-lg font-semibold">
          Анастасія <span className="text-[#F25623]">Браєрська</span>
        </div>

        <div className="flex items-center gap-4">
          <span>Контакти</span>

          <a href="tel:+380XXXXXXXXX">
            <Phone className="text-[#F25623] w-5 h-5 transition hover:scale-110 hover:text-white" />
          </a>

          <a href="https://t.me/nastasya_br" target="_blank">
            <Send className="text-[#F25623] w-5 h-5 transition hover:scale-110 hover:text-white" />
          </a>

          <a href="https://instagram.com/nastasya_br" target="_blank">
            <FaInstagram className="text-[#F25623] w-5 h-5 transition hover:scale-110 hover:text-white" />
          </a>
        </div>

      </div>
    </footer>
  )
}
