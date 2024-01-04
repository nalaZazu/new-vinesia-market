"use client";
import React from "react";
import Image from "next/image";
import FeaturedLogos from "@/components/aboutpage/FeaturedLogos";
import ContactBanner from "@/components/contactus/ContactBanner";
import CalendarSection from "@/components/contactus/CalendarSection";
import NewslettersTwo from "@/components/newslttersTwo/page";
import Footer from "@/components/footer/page";
import ContactFrom from "@/components/contactus/ContactFrom";
import logo from "../../assets/icons/logo1.svg";

import Link from "next/link";
import youtube from "../../assets/icons/youtube.svg";
import instagram from "../../assets/icons/instagram.svg";
import { Facebook, LinkdeIn, Twitter } from "@/assets/icons/Icons";

export default function ContactUs() {
  return (
    <div className="absolute top-0 -z-10 left-0 right-0">
      <div>
        <div className="relative">
          <ContactBanner />
        </div>
      </div>
      <FeaturedLogos />
      <div className="pb-20">
        <div className="container mx-auto px-4">
          <CalendarSection />
        </div>
      </div>

      <div className="pb-40">
        <div className="container mx-auto md:px-4 px-0">
          <ContactFrom />
        </div>
      </div>

      <div className="bg-red-900">
        <div className="container mx-auto px-4 py-20 ">
          <div className="grid md:grid-cols-3 max-w-[992px] mx-auto">
            <div className="flex  gap-[43px] items-start md:justify-between justify-center">
              <Image src={logo} alt="" />
              <p className="text-white text-lg font-semibold leading-relaxed">
                Vinesia SARL
                <br />
                rua Gabriele Lippman
                <br />
                Niederanven 6947
                <br />
                Luxembourg
              </p>
            </div>
            <div className="flex items-center">
              <div className="md:block hidden w-[204px] h-[0px] rotate-[104.17deg] border border-white border-opacity-20"></div>
            </div>
            <div>
              <div className="md:justify-start justify-center items-center gap-5 flex">
                <p className="text-right text-stone-400 text-base font-normal leading-snug">
                  E-mail
                </p>
                <div className="w-4 h-[0px] border border-white border-opacity-20"></div>
                <div className="flex">
                  <p className="border-b border-white border-opacity-20 text-center text-white text-base font-normal leading-snug">
                    Château Le Pin
                  </p>
                </div>
              </div>
              <div className="md:justify-start justify-center items-center gap-5 flex pt-4">
                <p className="text-right text-stone-400 text-base font-normal leading-snug">
                  Phone
                </p>
                <div className="w-4 h-[0px] border border-white border-opacity-20 "></div>
                <div className="flex">
                  <p className="border-b border-white border-opacity-20 text-center text-white text-base font-normal leading-snug">
                    (+33) 643 400 000
                  </p>
                </div>
              </div>
              <div className="h-[0px] border border-white border-opacity-20 my-8"></div>
              <p className="text-stone-300 text-base font-normal leading-snug md:text-start text-center">
                {`Let's`} meet on social
              </p>
              <div className="flex items-center gap-[10px] pt-4 md:justify-start justify-center">
                <Link href="#" className="p-2">
                  <Facebook fill="#ACA7AA" />
                </Link>

                <Link href="#" className="p-2">
                  <LinkdeIn fill="#ACA7AA " />
                </Link>

                <Link href="#" className="p-2">
                  <Twitter fill="#ACA7AA" />
                </Link>

                <Link href="#" className="p-2">
                  <Image src={instagram} alt="twitter" className="w-4" />
                </Link>

                <Link href="#" className="p-2">
                  <Image src={youtube} alt="twitter" className="w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NewslettersTwo />
      <Footer />
    </div>
  );
}
