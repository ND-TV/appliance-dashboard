'use client';

import Header from '@/components/navbar';
import {NextUIProvider} from '@nextui-org/react';
import {ReactNode} from 'react';

export default function App({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <NextUIProvider>
      <Header />
      {children}
    </NextUIProvider>
  );
}
