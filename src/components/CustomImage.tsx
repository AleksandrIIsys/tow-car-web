import type { ImageProps } from 'next/image';
import { getBasePath } from '@/utils/Helpers';
import Image from 'next/image';
import React from 'react';

const CustomImage = (props: ImageProps) => {
  return (
    <Image {...props} src={`${getBasePath}${props.src}`} />
  );
};

export default CustomImage;
