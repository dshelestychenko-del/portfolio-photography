'use client'

export default function Terms() {
  return (
    <section id="terms" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Умови
          </h2>
          <h3 className="text-2xl text-orange-500">
            співпраці
          </h3>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="space-y-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Основні умови</h3>
              <ul className="space-y-4 text-gray-700">
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

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Процес роботи</h3>
              <ol className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">1</span>
                  <div>
                    <strong>Обговорення деталей:</strong> уточнюємо ваші побажання, стиль та вимоги
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">2</span>
                  <div>
                    <strong>Передплата:</strong> ви оплачуєте 50% вартості
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">3</span>
                  <div>
                    <strong>Зйомка:</strong> виконання роботи згідно з обговореними термінами
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">4</span>
                  <div>
                    <strong>Правки:</strong> враховую ваші зауваження та вношу необхідні зміни
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">5</span>
                  <div>
                    <strong>Фінальна оплата та доставка:</strong> після затвердження ви отримуєте готові файли
                  </div>
                </li>
              </ol>
            </div>

            <div className="bg-orange-50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Додаткові послуги</h3>
              <div className="grid md:grid-cols-2 gap-6 text-gray-700">
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
