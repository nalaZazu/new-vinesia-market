"use client";

import { Albert_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/page";
import { UserProvider } from "@/context/user";
import Head from "next/head";
import { WagmiProvider } from "@/context/wagmi";
import Script from "next/script";
import { CartProvider } from "@/context/cart";
import MagicProvider from "@/context/MagicProvider";

const albert = Albert_Sans({
  variable: "--font-albert",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Vinesia Market",
//   description: "Vinesia Market",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script src="/js/main.js" />

        <title>Vinesia Market</title>
        <meta name="description" content="Vinesia Market" />

      <body className={`${albert.className} bg-[#F3E8CF] `}>
        <WagmiProvider>
          <MagicProvider>
            <CartProvider>
              <UserProvider>
                {/* <Header /> */}
                {children}
              </UserProvider>
            </CartProvider>
          </MagicProvider>
        </WagmiProvider>
      </body>
    </html>
  );
}
