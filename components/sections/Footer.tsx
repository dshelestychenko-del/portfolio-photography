import { siteData } from '@/data/site'

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
            <ul className="space-y-4 text-[#171717]">
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 bg-[#F25623] rounded-lg flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V3a1 1 0 011-1zM3 7h14v10H3V7z"/>
                  </svg>
                </div>
                <span>+38063XXXXXXX</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 bg-[#F25623] rounded-lg flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15h-4v-6h4v6zm2-8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9 0 2 .9 2 2z"/>
                  </svg>
                </div>
                <span>@nastasya_br</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 bg-[#F25623] rounded-lg flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 5.99 1.53 5.99 3.689 0 2.078-1.679 3.764-3.78 3.764-2.051 0-3.728-1.652-3.728-3.689h-3.972c.019.337.039.678.039 1.018 0 .665-.03 1.312-.039 1.942h3.972c.019 2.083 1.53 3.78 3.78 2.251 0 3.764-1.689 3.764-3.78v-3.972c0-2.083-1.529-3.78-3.78-3.78z"/>
                  </svg>
                </div>
                <span>@nastasya_br</span>
              </li>
            </ul>
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
