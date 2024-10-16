import type { Metadata } from "next";
import localFont from "next/font/local";
import {Rye, Arvo} from 'next/font/google';
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const rye = Rye({
  subsets: ['latin'],
  weight: '400',
  variable: "--rye",
});
const arvo = Arvo({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: "--arvo-font",
});


export const metadata: Metadata = {
  title: "Let Er Buck Car Wash || Wyoming",
  description: "Generated by create next app",
  icons: {
    icon: './favicon.ico',
  },
      
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${rye.variable} ${arvo.variable}`}>
        {children}
      </body>
    </html>
  );
}
