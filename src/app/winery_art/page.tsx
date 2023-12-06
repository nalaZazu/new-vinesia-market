"use client";
import React from "react";
import Image from "next/image";
import Newsletter from "@/components/newsletter/page";
import Footer from "@/components/footer/page";

export default function WineryArt() {
  return (
    <div>
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
                  <h1 className="text-white text-4xl font-light font-['Canela'] leading-[44px]">
                    Reso
                  </h1>
                </div>
                <div className="pt-3">
                  <h3 className="text-white text-xs font-normal font-['Albert Sans'] uppercase leading-3 tracking-tight">
                    ARTIST
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Newsletter />
      <Footer />
    </div>
  );
}
