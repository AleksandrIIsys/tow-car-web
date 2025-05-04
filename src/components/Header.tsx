import Image from 'next/image';
import React from 'react';
import NavLink from './NavLink';

const Header = () => {
  return (
    <header className="flex flex-row justify-items-center items-center justify-around h-max py-4 shadow-sm">
      <Image
        className=""
        src="/icon.png"
        alt="Next.js logo"
        width={80}
        height={60}
        priority
      />
      {/* <nav className="flex flex-row"> */}
      {/*  <ul className="flex items-center gap-4 text-xl font-semibold"> */}
      {/*    /!*<li><NavLink href="#">Цены</NavLink></li>*!/ */}
      {/*  </ul> */}
      {/* </nav> */}
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
    </header>
  );
};

export default Header;
