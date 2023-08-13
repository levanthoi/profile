'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import Lottie from 'react-lottie';
import * as animationData from '@/lotties/astronot.json';

const Breadcrumb = () => {
  const pathname = usePathname();
  const text = pathname?.slice(1).toUpperCase();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  return (
    <div className="border-b-2 border-purple-200 flex items-center">
      <b className="text-2xl text-secondary-foreground font-preahvihear">{text}</b>
      <Lottie options={defaultOptions} width={50} height={50} style={{ margin: 0 }} />
    </div>
  );
};

export default Breadcrumb;
