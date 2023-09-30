'use client';
import React from 'react';
// import type { Metadata } from 'next';
import Navbar from '@/components/global/Navbar';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';
import { ModeToggle } from '@/components/global/darkmode';
import { preahvihear } from '../fonts';
import Link from 'next/link';
import { useWindowDemension } from '@/hooks/useWindowDemension';
import NavbarMobile from '@/components/global/NavbarMobile';

// export const metadata: Metadata = {
//   title: 'Portfolio for Onembes',
//   description: 'Portfolio for Onembes',
// };

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { width } = useWindowDemension();
  return (
    <div className={`${preahvihear.variable}`}>
      <header className="flex items-center justify-between mt-2 sm:px-8 px-2">
        <Link href="/">
          <Image
            src="/signature.png"
            alt="logo"
            width={100}
            height={100}
            className="dark:bg-white px-2 rounded-lg"
          />
        </Link>
        <div className="flex gap-4 items-center">
          <ModeToggle />
          <Navbar />
          <NavbarMobile />
        </div>
      </header>
      <div className="container">
        <Breadcrumb />
        {children}
      </div>
    </div>
  );
};

export default Layout;
