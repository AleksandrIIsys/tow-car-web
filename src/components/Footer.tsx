import React from 'react';

const Footer = () => (
  <footer className="bg-black text-gray-400 text-center text-sm py-6">
    © {new Date().getFullYear()} АвтоБатя — ваш надёжный эвакуатор.<br />
    УНП 00000000000 • Минск, Улица Дома
  </footer>
);

export default Footer;