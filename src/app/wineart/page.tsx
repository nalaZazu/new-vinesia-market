"use client";
import React from "react";
import Image from "next/image";
import Newsletter from "@/components/newsletter/page";
import Footer from "@/components/footer/page";
import Dropdown from "@/common/DropDown/page";
import MobileFilter from "../invest/moibleview/page";
import Product from "@/components/products/page";
import NewsletterMobile from "@/components/newsletter/MobileView";
import xmark from "../../assets/icons/x-mark-anim.svg";

export default function WineryArt() {
  return (
    <div className="absolute top-0 left-0 right-0 -z-10">
      <div className="w-full md:h-[742px] h-[620px] bg-no-repeat bg-cover bg-center bg-[url('https://i.ibb.co/R6b3mN9/herobanner.png')]">
        <div className="flex items-center container mx-auto h-[742px] ps-0 md:ps-40">
          <div>
            <div>
              <h1 className="text-white md:text-[144px] font-normal text-6xl">
                Wine & art
              </h1>
            </div>
            <div className="pt-8">
              <h3 className="text-white md:text-4xl font-light md:leading-[44px] text-cente text-[21px] leading-[29px]">
                Collections
              </h3>
            </div>
          </div>
        </div>
      </div>
      {/* text */}
      <div className="flex flex-wrap py-20 max-w-[1030px] mx-auto gap-8">
        <div className="pb-7 md:pb-0">
          <p className="max-w-[499px] text-zinc-800 text-base font-normal leading-snug">
            Not all great wine producers come from traditional families or have
            a long history in winemaking. A notable example is Jérôme Galeyrand,
            whose journey in the world of wine began when he purchased his first
            half-hectare vineyard in 2002.
          </p>
        </div>
        <div>
          <p className="max-w-[499px] text-zinc-800 text-base font-normal leading-snug">
            Up until then, Jérôme Galeyrand worked in the food industry, and his
            first immersion into the Burgundy world happened during two harvests
            at Domaine Alain Burguet in Gevrey-Chambertin.
          </p>
        </div>
      </div>
      <div>
        <div className="relative md:block hidden container mx-auto">
          <div className="absolute flex justify-between w-full">
            <h1 className="text-[600px] opacity-20 text-stone-400 font-normal leading-[250px] md:ms-[-450px] -z-10">
              reso
            </h1>
            <h1 className="text-[600px] opacity-20 text-end text-stone-400 font-normal leading-[250px] -z-10 absolute -right-[740px] ">
              reso
            </h1>
          </div>

          <div className="w-[494px] h-[494px] rounded-full mx-auto z-10 bg-no-repeat bg-cover bg-center bg-[url('https://i.ibb.co/qmPYRPj/reso.png')]">
            <div className="flex justify-center items-center container mx-auto h-[742px]">
              <div>
                <div>
                  <h1 className="text-white text-4xl font-light  leading-[44px]">
                    Reso
                  </h1>
                </div>
                <div className="pt-3">
                  <h3 className="text-white text-xs font-normal  uppercase leading-3 tracking-tight">
                    ARTIST
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Destop View */}
      <div className="max-w-[1038px] mx-auto ">
        <hr className="border border-orange-700 border-opacity-20" />
        <div className="hidden md:block my-20 ">
          <Dropdown />
        </div>
        {/* Mobile view */}
        <div className="md:hidden block px-6">
          <MobileFilter />
        </div>
        {/* product list */}
        <Product items={[]} />
      
        {/* animation  component  */}
        <div className="p-16 flex justify-center mx-auto ">
          <Image src={xmark} alt="xmark" />
        </div>
      </div>
      {/* desktop Newsletter*/}
      <div className="hidden sm:block">
        <Newsletter />
      </div>
      {/* mobile Newsletter */}
      <div className="block sm:hidden">
        <NewsletterMobile />
      </div>

      <Newsletter />
      <Footer />
    </div>
  );
}
