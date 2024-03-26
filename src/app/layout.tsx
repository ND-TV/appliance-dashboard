import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

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
      <body className={`${inter.className} flex flex-col w-full h-dvh max-w-full mx-auto items-center gap-y-28`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
