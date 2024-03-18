import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./core/components/navbar";

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
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
