import Button from '@/components/Button';
import Image from 'next/image';
import React from 'react';

type InformationContainerProps = { icon: string; title: string; subtitle: string };

const InformationContainer = ({ icon, subtitle, title }: InformationContainerProps) => (
  <div className="grid grid-flow-col gap-x-4 items-center w-58 max-sm:gap-x-1 max-sm:w-40">
    <Image className="row-span-2" src={icon} alt={icon} width={40} height={40} />
    <p className="col-span-2 text-sm max-sm:text-xs">{title}</p>
    <p className="col-span-2 text-sm/4.5 max-sm:text-xs/4.5 text-gray-500">{subtitle}</p>
  </div>
);

const information: InformationContainerProps[] = [
  { icon: '/icons/24-hours.svg', title: 'Автопомощь 24/7', subtitle: 'Эвукацая круглосуточно по Минску, РБ и регионам' },
  { icon: '/icons/wallet.svg', title: 'Удобная опалата', subtitle: 'Оплата картой, наличными и по безналу' },
  { icon: '/icons/tow-car.svg', title: 'Эвакуация любой техники', subtitle: 'Бережно перевезем спецтехнику' },
  { icon: '/icons/by.svg', title: 'Доставка по СНГ и РФ', subtitle: 'Перевезем авто по Беларуси, СНГ и РФ' },
];

const Banner = () => {
  return (
    <div className="flex flex-col relative justify-center h-[380px] w-full pb-12 mb-36 max-[380px]:mb-60 bg-black">
      <div className="flex flex-col text-white ml-64 max-lg:ml-20 w-120 max-sm:ml-0 max-sm:items-center max-sm:text-center max-sm:w-full gap-4">
        <p className="text-4xl max-sm:text-2xl font-bold">Эвакуатор Минск</p>
        <p className="text-2xl/7 max-sm:text-lg/7 line">Круглосуточное решение дорожных проблем любой сложности в Минске и Минской области</p>
        <Button className="mt-6">Вызвать эвакуатор</Button>
      </div>
      <div className="flex flex-row justify-between absolute gap-4 top-[110%] left-[50%] translate-[-50%] max-lg:flex-wrap max-[380px]:top-[125%] max-[380px]:w-50  sm:max-lg:w-124 min-[380px]:max-sm:w-88 max-sm:gap-1  max-sm:justify-center  bg-white p-2 shadow-md rounded-xl">
        {information.map(item => <InformationContainer {...item} key={item.icon} />)}
      </div>
    </div>
  );
};

export default Banner;
