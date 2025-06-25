import React from 'react';
import CustomImage from "@/components/CustomImage";

const HeroDesktop = () => (
  <header className="relative h-[80vh] bg-center bg-cover bg-no-repeat flex items-center justify-center text-center text-white">
    <div className="absolute inset-0 bg-black bg-opacity-50" />
    <div className="relative z-10 max-w-4xl mx-auto px-6">
      <h1 className="text-primary text-6xl font-extrabold max-sm:text-3xl tracking-wider mb-2">АвтоБатя</h1>
      <h2 className="text-4xl max-sm:text-2xl font-bold uppercase mb-4">Эвакуатор 24/7</h2>
      <p className="text-lg mb-6 max-w-xl mx-auto">Быстрая и надёжная помощь на дороге</p>
      <a href="tel:+11234567890" className="inline-block bg-primary text-dark font-bold py-3 px-6 rounded-full transition hover:scale-105">
        Позвонить сейчас
      </a>
    </div>
  </header>
);

export default HeroDesktop;