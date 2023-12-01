import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css"; 
import Newsletter from "../components/newsletter/page";
import Footer from "../components/footer/page";
// pages/_app.js or pages/_app.tsx
const inter = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vinesia Market",
  description: "Vinesia Market",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
       
        {children}
        <Newsletter />
        <Footer />
      </body>
    </html>
  );
}
