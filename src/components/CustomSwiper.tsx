'use client';

import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

type IProps = {
  className?: string;
};

const CustomSwiper = ({ className }: IProps) => {
  return (
    <div className={className}>
      <Swiper slidesPerGroup={2} slidesPerView={2} spaceBetween={12}>
        <SwiperSlide className="justify-items-center">
          <Image src="/static/photo_car1.jpg" alt="" width={640} height={420} />
        </SwiperSlide>
        <SwiperSlide className="justify-items-center">
          <Image src="/static/photo_car2.jpg" alt="" width={640} height={420} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CustomSwiper;
