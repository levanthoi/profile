import React from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from '../ui/navigation-menu';
import { navbars } from '@/constants/navbar';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
      <NavigationMenu className="relative before:absolute before:bg-purple-700 before:w-1 before:h-[50%] before:-left-2 before:rounded-md">
        {navbars?.map((item) => (
          <NavigationMenuItem key={item.id}>
            <Link href={item?.slug} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {item?.title}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenu>
    </div>
  );
};

export default Navbar;
