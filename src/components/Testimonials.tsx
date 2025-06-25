import React from 'react';

const reviews = [
  ['Андрей', 'Skoda Octavia', '★★★★★', '«Быстрый и профессиональный сервис. Рекомендую!»'],
  ['Мария', 'Nissan Juke', '★★★★★', '«Приехали через 10 минут, помогли даже зарядить аккумулятор.»'],
  ['Иван', 'Renault Logan', '★★★★☆', '«Цена честная, водитель вежливый. Всё ок!»'],
  ['Елена', 'Toyota Corolla', '★★★★★', '«Вытащили из кювета ночью — спасли мой день!»'],
];

const Testimonials = () => (
  <section id="reviews" className="py-24 px-6 bg-white">
    <h2 className="text-4xl font-bold text-center mb-12">Отзывы клиентов</h2>
    <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
      {reviews.map(([name, car, stars, text]) => (
        <div key={name} className="bg-gray-100 p-6 rounded-xl shadow text-center flex flex-col items-center justify-center min-h-[220px]">
          <p className="text-primary text-lg mb-2">{stars}</p>
          <p className="italic text-sm mb-3">{text}</p>
          <p className="font-semibold">
            —
            {name}
            ,
            {car}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
