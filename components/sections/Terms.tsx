'use client'

export default function Terms() {
  return (
    <section id="terms" className="py-24 bg-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#171717] mb-6">
            Умови
          </h2>
          <h3 className="text-2xl text-orange-500">
            співпраці
          </h3>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="space-y-8">
            <div className="bg-[#DEDEDE] rounded-2xl p-8 shadow-md">
              <h3 className="text-2xl font-semibold text-[#171717] mb-6">Основні умови</h3>
              <ul className="space-y-4 text-[#171717]">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3">•</span>
                  <span>Попередня оплата 50% від вартості послуги</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3">•</span>
                  <span>Термін виконання: від 3 до 10 робочих днів</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3">•</span>
                  <span>Кількість правок: 2 раунди правок після отримання результатів</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3">•</span>
                  <span>Формат доставки: файли високої роздільної здатності через Google Drive</span>
                </li>
              </ul>
            </div>

            <div className="bg-orange-50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-[#171717] mb-6">Додаткові послуги</h3>
              <div className="grid md:grid-cols-2 gap-6 text-[#171717]">
                <div>
                  <h4 className="font-semibold mb-3">Терміновість</h4>
                  <p>Додаткова плата за виконання замовлення у стислі терміни (менше 3 днів)</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Ексклюзивність</h4>
                  <p>Можливість придбати ексклюзивні права на фотографії за додаткову плату</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Консультації</h4>
                  <p>Допомога у виборі реквізиту, стилізації та підготовці до зйомки</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Супровід</h4>
                  <p>Можливість організації професійного стиліста та візажиста</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Обговорити умови співпраці
          </button>
        </div>
      </div>
    </section>
  )
}
