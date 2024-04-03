import App from './App';
import {ReactNode} from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';

const inter = Inter({ subsets: ['cyrillic'] });

export const metadata: Metadata = {
  title: 'Appliance',
  description: 'Appliance accounting app for managers.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.className} flex flex-col w-full min-h-dvh max-w-full mx-auto gap-y-12`}>
        <App>{children}</App>
      </body>
    </html>
  );
}
