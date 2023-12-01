import type { Metadata } from "next";
import { Albert_Sans } from "next/font/google";
import local from "next/font/local";
import "./globals.css";
import Newsletter from "../components/newsletter/page";
import Footer from "../components/footer/page";
// pages/_app.js or pages/_app.tsx
const albert = Albert_Sans({
  variable: "--font-albert",
  subsets: ["latin"],
});

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
      <body className={albert.className}>
        {children}
        <Newsletter />
        <Footer />
      </body>
    </html>
  );
}
