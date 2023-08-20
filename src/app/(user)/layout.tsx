'use client';
import React from 'react';
// import type { Metadata } from 'next';
import Navbar from '@/components/global/Navbar';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';
import { ModeToggle } from '@/components/global/darkmode';
import { preahvihear } from '../fonts';
import Link from 'next/link';

// export const metadata: Metadata = {
//   title: 'Portfolio for Onembes',
//   description: 'Portfolio for Onembes',
// };

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`${preahvihear.variable}`}>
      <header className="flex justify-between mt-2 sm:px-8 px-2">
        <Link href="/">
          <Image
            src="/signature.png"
            alt="logo"
            width={100}
            height={100}
            className="dark:bg-white px-2 rounded-lg"
          />
        </Link>
        <Navbar />
      </header>
      <ModeToggle />
      <div className="container">
        <Breadcrumb />
        {children}
      </div>
    </div>
  );
};

export default layout;
