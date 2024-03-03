'use client';

import {usePathname} from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';

interface NavigationLink {
  name: string,
  href: string,
}

const links: NavigationLink[] = [
  {
    name: "Главная",
    href: "/",
  },
  {
    name: "Окупаемость",
    href: "/payback",
  },
];

export default function NavigationLinks() {
  const pathname = usePathname();

  return (
      <>
        {links.map((link) => (
            <Link
                key={link.name}
                href={link.href}
                className={clsx(
                    {
                      'text-red-500': pathname === link.href,
                    },
                )}
            >
              <p>{link.name}</p>
            </Link>
        ))}
      </>
  );
}
