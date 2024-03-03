import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavigationLinks from '@/ui/NavigationLinks';

const inter = Inter({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "Appliance",
  description: "Appliance accounting app for managers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <nav className="flex gap-4 p-8">
          <NavigationLinks />
        </nav>
        {children}
      </body>
    </html>
  );
}
