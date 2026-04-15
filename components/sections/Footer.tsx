import { siteData } from '@/data/site'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                {siteData.footer.brand.name}
                <span className="text-orange-500">graphy</span>
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {siteData.footer.brand.description}
              </p>
            </div>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-orange-500 transition-colors duration-300 cursor-pointer group">
                <div className="w-5 h-5 bg-gray-600 rounded group-hover:bg-white transition-colors duration-300"></div>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-orange-500 transition-colors duration-300 cursor-pointer group">
                <div className="w-5 h-5 bg-gray-600 rounded group-hover:bg-white transition-colors duration-300"></div>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-orange-500 transition-colors duration-300 cursor-pointer group">
                <div className="w-5 h-5 bg-gray-600 rounded group-hover:bg-white transition-colors duration-300"></div>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-orange-500 transition-colors duration-300 cursor-pointer group">
                <div className="w-5 h-5 bg-gray-600 rounded group-hover:bg-white transition-colors duration-300"></div>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3 text-gray-400">
              {siteData.footer.services.map((service, index) => (
                <li key={index} className="hover:text-orange-500 transition-colors duration-300 cursor-pointer">
                  {service}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              {siteData.footer.quickLinks.map((link, index) => (
                <li key={index} className="hover:text-orange-500 transition-colors duration-300 cursor-pointer">
                  {link}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              {siteData.footer.contact.map((contact, index) => (
                <li key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  {contact}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400">
              {siteData.footer.legal.copyright}
            </p>
            <div className="flex space-x-6 text-gray-400">
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
