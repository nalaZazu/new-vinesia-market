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
import { usePathname } from "next/navigation";
import { Toaster, DefaultToastOptions, resolveValue, CheckmarkIcon, ErrorIcon } from "react-hot-toast";

const albert = Albert_Sans({
  variable: "--font-albert",
  subsets: ["latin"],
});

const toastTheme: DefaultToastOptions = {
  className: '',
  success: {
    className: 'bg-[#D9EDDF] text-[#286338] rounded-[8px] align-middle',
    icon: <CheckmarkIcon />
  },
  error: {
    className: 'bg-[#FEEDED] text-[#DC2626] rounded-[8px] align-middle',
    icon: <ErrorIcon />
  }
}

// export const metadata: Metadata = {
//   title: "Vinesia Market",
//   description: "Vinesia Market",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname()

  return (
    <html lang="en">
      <Script src="/js/main.js" />

<Script
  type="text/javascript"
  src="https://app.termly.io/embed.min.js"
  data-auto-block="on"
  data-website-uuid="d3426886-01fc-43f5-adff-689f219592de"
/>
      <title>Vinesia Market</title>
      <meta name="description" content="Vinesia Market" />
      <link rel="icon" href="/logo.svg" sizes="any" />

      <body className={`${albert.className} bg-[#F3E8CF]`}>
        <WagmiProvider>
          <UserProvider>
            <MagicProvider>
              <CartProvider>
                <Toaster position="top-right" toastOptions={toastTheme} >
                  {(t) => (
                    <div
                      className={t.className}
                      style={{
                        opacity: t.visible ? 1 : 0,
                        padding: 8,
                        display: "flex",
                        alignItems: "center"
                      }}>
                      {t.icon}<div className="mx-2 flex justify-center">
                        {resolveValue(t.message, t)}
                      </div>
                    </div>
                  )}
                </Toaster>

                {path === '/' ? <></> : <Header />}
                {children}
              </CartProvider>
            </MagicProvider>
          </UserProvider>
        </WagmiProvider>
      </body>
    </html>
  );
}
