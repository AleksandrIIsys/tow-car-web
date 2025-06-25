import React from 'react';

const categories = [
  {
    title: 'Эвакуация',
    rows: [
      ['Легковой автомобиль', 'от 90 BYN'],
      ['Внедорожник, минивэн, джип до 3 тонн', 'от 100 BYN'],
      ['Грузовой транспорт', 'от 100 BYN'],
      ['Крытый эвакуатор', 'от 100 BYN'],
    ],
  },
  {
    title: 'Спецуслуги',
    rows: [
      ['Манипулятор', 'от 100 BYN'],
      ['Частичная погрузка', 'от 100 BYN'],
      ['После ДТП', 'от 100 BYN'],
    ],
  },
  {
    title: 'Вспомогательные услуги',
    rows: [
      ['Трезвый водитель', 'от 100 BYN'],
      ['Подвоз топлива', 'от 40 BYN'],
      ['Подзарядка аккумулятора', 'от 30 BYN'],
      ['Замена колеса', 'от 40 BYN'],
    ],
  },
];

const PricingTable = () => (
  <section id="services" className="py-24 px-6 animate-up">
    <h2 className="text-4xl font-bold text-center mb-12">Цены на эвакуатор</h2>

    {/* ✅ Таблица: показывается только на экранах > 640px */}
    <div className="hidden sm:block overflow-x-auto max-w-6xl mx-auto">
      <table className="w-full border-separate border-spacing-y-3 text-left">
        <thead className="bg-primary text-dark">
          <tr>
            <th className="py-5 px-6 rounded-tl-xl">Категория</th>
            <th className="py-5 px-6">Услуга</th>
            <th className="py-5 px-6 rounded-tr-xl">Стоимость</th>
          </tr>
        </thead>
        <tbody>
          {categories.map(cat =>
            cat.rows.map((row, idx) => (
              <tr
                key={row[0]}
                className={`${
                  idx % 2 === 1 ? 'bg-grey' : 'bg-white'
                } hover:bg-[#ffd60a33]`}
              >
                {idx === 0 && (
                  <td
                    rowSpan={cat.rows.length}
                    className="py-5 px-6 font-bold align-top border border-[#e0e0e0] rounded-l-xl"
                  >
                    {cat.title}
                  </td>
                )}
                <td className="py-5 px-6 border border-[#e0e0e0]">
                  {row[0]}
                </td>
                <td className="py-5 px-6 font-bold border border-[#e0e0e0] rounded-r-xl">
                  {row[1]}
                </td>
              </tr>
            )),
          )}
        </tbody>
      </table>
    </div>

    {/* ✅ Карточки: показываются только при ширине ≤ 640px */}
    <div className="block sm:hidden max-w-2xl mx-auto">
      {categories.map(cat => (
        <div key={cat.title} className="mt-6">
          <div className="bg-primary text-dark font-bold py-3 px-4 rounded-md mb-4">
            {cat.title}
          </div>
          <div className="flex flex-col gap-4">
            {cat.rows.map(([label, price]) => (
              <div
                key={label}
                className="bg-grey rounded-xl p-5 flex justify-between items-center font-semibold shadow-sm"
              >
                {label}
                <span className="ml-auto font-bold">{price}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>

    <p className="text-center text-sm text-gray-600 max-w-xl mx-auto mt-10">
      <strong>Стоимость перевозки автотранспорта в Минске рассчитывается индивидуально</strong>
      {' '}
      и зависит от типа автомобиля, характера поломки и удалённости транспортировки.
    </p>
  </section>
);

export default PricingTable;
