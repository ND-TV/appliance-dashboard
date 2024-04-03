'use client';

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import React from 'react';

interface NavigationLink {
  name: string,
  href: string,
}

const links: NavigationLink[] = [
  {
    name: 'Календарь',
    href: '/',
  },
  {
    name: 'Окупаемость',
    href: '/payback',
  },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">ND-TV</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {links.map((link, linkIndex) => (
          <NavbarItem
            key={`nav-link-${linkIndex}`}
            isActive={pathname === link.href}
          >
            <Link color="foreground" href={link.href}>
              {link.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
    </Navbar>
  );
}