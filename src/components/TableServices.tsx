import React from 'react';

type ServicePrice = { service: string; price: number };

const servicePrices: ServicePrice[] = [
  { service: 'Эвакуатор для легкового автомобиля', price: 90 },
  { service: 'Эвакуатор для внедорожника, минивэна, джипа до 3 тонн', price: 100 },
  { service: 'Эвакуатор для грузового транспорта', price: 100 },
  { service: 'Крытый эвакуатор', price: 100 },
  { service: 'Эвакуатор после ДТП', price: 100 },
  { service: 'Трезвый водитель', price: 100 },
  { service: 'Эвакуатор манипулятор', price: 100 },
  { service: 'Эвакуатор с частичной погрузкой', price: 100 },
  { service: 'Подвоз топлива', price: 40 },
  { service: 'Доставка тс до СТО', price: 100 },
  { service: 'Подзарядка аккумулятора', price: 30 },
  { service: 'Замена колеса', price: 40 },
  { service: 'Перевозка новых машин', price: 100 },

];

const TableServices = () => {
  return (
    <table className="w-full table-auto shadow-md">
      <thead className="bg-primary text-white">
        <tr>
          <th className="text-xl p-1">Услуга</th>
          <th className="text-xl">Стоимость</th>
        </tr>
      </thead>
      <tbody>
        {servicePrices.map((item, index) => (
          <tr key={item.service} className={`${index % 2 || 'bg-gray-100'} shadow-sm`}>
            <th className="text-lg font-normal p-2">
              <p className="text-start ml-12 max-sm:ml-4">{item.service}</p>
            </th>
            <th className="text-lg font-semibold">
              <p className="text-start">{`От ${item.price} BYN`}</p>
            </th>
          </tr>
        ))}

      </tbody>
    </table>
  );
};

export default TableServices;
