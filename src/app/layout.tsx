"use client";

import { Albert_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/page";
import { UserProvider } from "@/context/user";
import Head from "next/head";
import { WagmiProvider } from "@/context/wagmi";
import Script from "next/script";
// pages/_app.js or pages/_app.tsx
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
      <Head>
        <title>Vinesia Market</title>
        <meta name="description" content="Vinesia Market" />
      </Head>
      <Script src="/js/main.js" />

      <body className={`${albert.className} bg-[#F3E8CF] `}>
        <Header />
        {/* <WagmiProvider> */}
        {/* <UserProvider>
          </UserProvider> */}
        {children}
        {/* </WagmiProvider> */}
      </body>
    </html>
  );
}
