import type { Metadata } from "next";
import "./globals.scss";
import Header from "./components/header/header";
import { Inter } from 'next/font/google'
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "DragonPedia",
  description: "A melhor enciclopédia de dragões do mundo!",
};
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

 

  return (
    <html lang="en" className={inter.className}>
      <body>
        <Toaster position="top-right"/>
        <Header/>
        <div className="container">
          {children}
        </div>
      </body>
    </html>
  );
}
