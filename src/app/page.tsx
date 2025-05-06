import Banner from '@/components/Banner';
import CustomSwiper from '@/components/CustomSwiper';
import Header from '@/components/Header';
import NavLink from '@/components/NavLink';
import TableServices from '@/components/TableServices';
import Image from 'next/image';
import React from 'react';

export default async function Page() {
  return (
    <div className="grid grid-rows-1 min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="flex flex-col  gap-4">
        <Banner />
        <div className="flex flex-row self-center mx-4 items-center max-lg:flex-col xl:w-[1280px] lg:w-[824px] md:w-[568px] sm:w-[440px] gap-4">
          <p className="text-lg max-sm:text-sm text-justify">
            Наша компания оказывает услуги эвакуации автомобилей после ДТП или поломки транспортного средства. Бережно и профессионально перевозим легковые и грузовые автомобили, мотоциклы, снегоходы, тяжелую спецтехнику, новые машины и антикварный транспорт. Извлекаем машины из грязи, снега, с наземных и подземных парковок, из любых труднодоступных мест.
          </p>
          <Image className="object-none w-100" src="/static/picture_car.jpg" alt="car" width={390} height={260} />
        </div>
        <div className="w-full xl:w-[1280px] lg:w-[824px] md:w-[568px] sm:w-[440px] self-center max-sm:px-4 gap-4">
          <p className="text-3xl max-sm:text-xl font-bold mb-4">Цены на эвакуатор</p>
          <TableServices />
          <p className="mt-4 text-lg max-sm:text-sm text-justify">Стоимость перевозки автотранспорта в Минске рассчитывается отдельно для каждого случая. На формирование цены на эвакуатор влияют дополнительные факторы, среди них:</p>
          <ul className="list-disc ml-8 mt-2">
            <li className="text-lg max-sm:text-sm">тип автомашины, ее габариты</li>
            <li className="text-lg max-sm:text-sm">характер поломки</li>
            <li className="text-lg max-sm:text-sm">местонахождение авто, отдаленность транспортировки.</li>
          </ul>
        </div>
        <div className="flex flex-col bg-primary w-[100%] text-white py-4">
          <div className="xl:w-[1280px] lg:w-[824px] md:w-[568px] sm:w-[440px] max-sm:w-[300px] self-center">
            <p className="text-3xl max-lg:text-xl max-sm:text-lg  font-bold mb-4">Фото выполненных услуг эвакуатора</p>
            <CustomSwiper />
          </div>
        </div>
        <div className="self-center xl:w-[1280px] lg:w-[824px] md:w-[568px] sm:w-[440px] max-sm:px-4 py-4">
          <p className="text-lg max-sm:text-sm text-justify">Оказываем помощь на дороге: подкачиваем спустившие колеса, при необходимости меняем их, заряжаем аккумуляторы, подвозим топливо, открываем захлопнувшиеся двери авто. Оформляем документы для страховых компаний. В нашем парке представлены все виды эвакуаторов: машины, оснащенные лебедкой, краном-манипулятором, со сдвижной и прямой автоплатформами, возможна частичная погрузка.</p>
        </div>
      </main>
      <footer className="flex flex-row items-center justify-around  bg-gray-600 py-4 text-white">
        <div className="flex flex-col gap-1">
          <Image className="rounded-4xl" src="/icon.png" alt="icon" width={64} height={64} />
          <p className="text-sm">УНП 00000000000</p>
          <p className="text-sm">Минск, Улица Дома</p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row items-center content-between gap-2">
            <Image src="/icons/phone.svg" alt="phone" width={32} height={32} priority />
            <NavLink className="underline text-xl " href="tel: +375 33 333 33 33">+375 33 333 33 33</NavLink>
          </div>
          <div className="flex gap-4">
            <Image src="/icons/viber.svg" alt="viber" width={28} height={28} priority />
            <Image src="/icons/telegram.svg" alt="telegram" width={28} height={28} priority />
            <Image src="/icons/instagram.svg" alt="instagram" width={32} height={32} priority />
            <Image src="/icons/tiktok.svg" alt="tiktok" width={32} height={32} priority />
            <Image src="/icons/youtube.svg" alt="youtube" width={32} height={32} priority />

          </div>
        </div>
      </footer>
    </div>
  );
}
