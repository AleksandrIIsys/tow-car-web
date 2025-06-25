import CustomImage from '@/components/CustomImage';
import React from 'react';

const features = [
  { icon: '/icons/paycard.svg', title: 'Удобная оплата', text: 'Оплата картой, наличными и по безналу' },
  { icon: '/icons/tow-car.svg', title: 'Эвакуация любой техники', text: 'Перевозим спецтехнику и авто' },
  { icon: '/icons/by.svg', title: 'Доставка по СНГ и РФ', text: 'Работаем по Беларуси, СНГ и России' },
];

const Features = () => (
  <section id="features" className="py-24 px-6 bg-white text-center">
    <h2 className="text-4xl font-bold mb-4">Автопомощь без выходных</h2>
    <p className="text-gray-600 max-w-2xl mx-auto mb-12">Эвакуация круглосуточно по Минску, РБ и регионам</p>
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {features.map(f => (
        <div key={f.title} className="bg-gray-100 p-8 rounded-xl shadow hover:shadow-md transition text-center">
          <CustomImage src={f.icon} width={60} height={60} alt={f.title} className="mx-auto mb-4" />
          <h3 className="font-bold text-lg mb-2">{f.title}</h3>
          <p className="text-gray-700 text-sm">{f.text}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Features;
