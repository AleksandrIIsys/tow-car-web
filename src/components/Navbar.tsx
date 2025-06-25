'use client';
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-primary">АвтоБатя</Link>

        {/* Бургер-кнопка: отображается на маленьких экранах */}
        <button
          type="button"
          className="md:hidden flex flex-col justify-center items-center w-8 h-8"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Открыть меню"
        >
          <div className={`w-6 h-0.5 bg-black transition-all ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <div className={`w-6 h-0.5 bg-black my-1 transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <div className={`w-6 h-0.5 bg-black transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>

        {/* Навигация: скрыта на маленьких, видна на md+ */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <Link href="#about" className="hover:text-primary">Почему мы</Link>
          <Link href="#services" className="hover:text-primary">Цены</Link>
          <Link href="#reviews" className="hover:text-primary">Отзывы</Link>
          <Link href="#contact" className="hover:text-primary">Контакты</Link>
        </nav>
      </div>

      {/* Мобильное меню: раскрывается при клике */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200">
          <nav className="flex flex-col p-4 gap-4 text-sm font-medium">
            <Link href="#about" onClick={() => setMenuOpen(false)} className="hover:text-primary">Почему мы</Link>
            <Link href="#services" onClick={() => setMenuOpen(false)} className="hover:text-primary">Цены</Link>
            <Link href="#reviews" onClick={() => setMenuOpen(false)} className="hover:text-primary">Отзывы</Link>
            <Link href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-primary">Контакты</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
