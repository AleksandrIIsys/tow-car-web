import CustomImage from '@/components/CustomImage';
import React from 'react';

const About = () => (
  <section id="about" className="py-24 px-6 animate-up">
    <h2 className="text-4xl font-bold text-center mb-12">Почему мы?</h2>
    <div className="about grid gap-12 items-center justify-items-center max-w-6xl mx-auto md:grid-cols-2">
      <div>
        <div className="about-intro bg-gray-100 p-8 border-l-[6px] border-primary rounded-xl shadow text-lg leading-relaxed">
          <p>
            <strong>АвтоБатя</strong>
            — команда профессионалов с 10‑летним опытом эвакуации автомобилей любой сложности. Мы работаем
            {' '}
            <span className="highlight bg-primary text-dark px-1 rounded font-bold">круглосуточно</span>
            , в любую погоду.
          </p>
          <p className="mt-4">Оказываем помощь на дороге: подкачиваем спустившие колёса, меняем их при необходимости, заряжаем аккумуляторы, подвозим топливо, открываем захлопнувшиеся двери авто. Оформляем документы для страховых компаний.</p>
          <p className="mt-4">
            Наш парк включает
            <span className="highlight bg-primary text-dark px-1 rounded font-bold">все виды эвакуаторов</span>
            : автомобили с лебёдкой, краном‑манипулятором, со сдвижной и прямой платформами; возможна частичная погрузка.
          </p>
        </div>
        <ul className="why-list grid gap-6 grid-cols-[repeat(auto-fit,minmax(240px,1fr))] list-none mt-8 p-0 animate-up">
          <li className="bg-gray-100 py-4 px-6 rounded-lg font-semibold flex gap-2 items-start before:content-['✓'] before:text-primary before:font-bold">
            <span>Манипуляторы до 10 т</span>
          </li>
          <li className="bg-gray-100 py-4 px-6 rounded-lg font-semibold flex gap-2 items-start before:content-['✓'] before:text-primary before:font-bold">
            <span>Выезд ≤ 15 минут</span>
          </li>
          <li className="bg-gray-100 py-4 px-6 rounded-lg font-semibold flex gap-2 items-start before:content-['✓'] before:text-primary before:font-bold">
            <span>Гидроплатформа — безопасная погрузка</span>
          </li>
          <li className="bg-gray-100 py-4 px-6 rounded-lg font-semibold flex gap-2 items-start before:content-['✓'] before:text-primary before:font-bold">
            <span>Без скрытых платежей</span>
          </li>
        </ul>
      </div>
      <CustomImage
        src="/static/photo_car1.jpg"
        width={480}
        height={320}
        alt="Наш эвакуатор на выезде"
        className="rounded-xl shadow animate-up self-center"
      />
    </div>
  </section>
);

export default About;
