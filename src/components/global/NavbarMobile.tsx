'use client';

import React from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '../ui/navigation-menu';
import { navbars } from '@/constants/navbar';
import Link from 'next/link';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { AlignRight } from 'lucide-react';
import { useWindowDemension } from '@/hooks/useWindowDemension';

const NavbarMobile = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <AlignRight />
      </DialogTrigger>
      <DialogContent>
        <NavigationMenu className="">
          <NavigationMenuList className="flex flex-col gap-2 items-center justify-center">
            {navbars?.map((item) => (
              <NavigationMenuItem key={item.id}>
                <Link href={item?.slug} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {item?.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </DialogContent>
    </Dialog>
  );
};

export default NavbarMobile;
