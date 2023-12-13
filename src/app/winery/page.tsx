"use client";
import React from "react";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import WineryTag from "../../assets/images/Winery-tag.svg";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import ProductCards from "@/components/productCard/page";
import Footer from "@/components/footer/page";
import Newsletter from "@/components/newsletter/page";
export default function Winary() {
  return (
    <div>
      <div className="w-full md:h-[600px] h-[620px] bg-no-repeat bg-cover bg-center bg-[url('https://i.ibb.co/hLLYBjr/winery-bg.png')]">
        <div className="flex justify-center items-center h-[600px]">
          <h1 className="text-center text-zinc-800 md:text-[144px] text-6xl font-normal">
            Wineries
          </h1>
        </div>
      </div>
      <div className="container mx-auto pt-16 md:px-0 px-4 pb-14">
        {/* text */}
        <div className="flex flex-wrap pb-28">
          <div className="pb-7">
            <p className="max-w-[499px] text-zinc-800 text-base font-normal leading-snug">
              Bordeaux, a renowned wine region, is acclaimed for its bold red
              blends, predominantly featuring Merlot, Cabernet Sauvignon, and
              Cabernet Franc. The wines exhibit rich flavors and a superb
              balance, making Bordeaux a global wine capital. Burgundy, in
              eastern France, is famous for its exquisite Pinot Noir and
              Chardonnay wines.
            </p>
          </div>
          <div>
            <p className="max-w-[499px] text-zinc-800 text-base font-normal leading-snug">
              The terroir of Burgundy imparts a unique character, resulting in
              elegant, nuanced, and often complex flavors, highly sought after
              by wine connoisseurs. Champagne, located in northeastern France,
              is synonymous with sparkling wine. Using the traditional méthode
              champenoise, this region crafts the {`world's`} most celebrated
              bubbly.
            </p>
          </div>
        </div>
        <hr className="border border-orange-700 border-opacity-20" />
        {/* France start */}
        <div className="pt-40 flex-col justify-start items-center gap-[72px] inline-flex pb-10">
          <h1 className="text-zinc-800 md:text-[144px] text-6xl font-normal leading-none">
            France
          </h1>
        </div>

        {/* accordion start */}
        {[1,2,3]?.map((item: any, i: any) => {
          return (
            <Disclosure key={i}>
              {({ open }) => (
                <>
                  <div className="pt-14">
                    <Disclosure.Button className="flex w-full justify-between ">
                      <div className="flex flex-wrap justify-between items-center w-full">
                        <div>
                          <p className="text-stone-500 text-xs font-normal uppercase leading-3 tracking-tight text-start">
                            WINERY NAME
                          </p>
                          <h3 className="max-w-[480px] text-zinc-800 text-4xl font-light leading-[44px] text-left tracking-[-0.36px]">
                            Château Mouton Rothschild – 1er Grand Cru Classé
                            Pauillac
                          </h3>
                        </div>
                        <div>
                          <p className="h-[108.75px] origin-top-left rotate-[24deg] border border-orange-700"></p>
                        </div>
                        <div>
                          <p className="text-stone-500 text-xs font-normal uppercase leading-3 tracking-tight text-start">
                            WINERY OWNER
                          </p>
                          <h3 className="max-w-[450px] text-zinc-800 text-4xl font-light leading-[44px] text-start">
                            Yann Charlopin
                          </h3>
                        </div>
                        <div className="max-w-[235.47px] h-14 justify-start items-center gap-[60px] inline-flex">
                          <button className="text-center text-orange-700 text-xs font-normal uppercase leading-3 tracking-tight max-w-[151.47px] px-8 py-[22px] rounded-[48px] border border-orange-700 border-opacity-20 justify-center items-center gap-3 flex">
                            EXPLORE
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              className="w-3 h-3 text-orange-700"
                            >
                              <path
                                strokeLinecap="round"
                                stroke-linejoin="round"
                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                              />
                            </svg>
                          </button>
                        </div>
                        <div>
                          <ArrowUpRightIcon
                            className={`${
                              open ? "rotate-180 transform" : ""
                            } h-5 w-5 text-orange-700`}
                          />
                        </div>
                      </div>
                    </Disclosure.Button>
                    <Disclosure.Panel>
                      <div className="relative flex justify-center items-end w-full md:h-[400px] h-[184px] bg-no-repeat bg-cover bg-center bg-[url('https://i.ibb.co/hLLYBjr/winery-bg.png')]">
                        <Image
                          src={WineryTag}
                          alt="Picture of the author"
                          quality={75}
                          className="absolute -bottom-16"
                        />
                      </div>
                      <div className="mt-40">
                        <ProductCards />
                      </div>
                    </Disclosure.Panel>
                  </div>
                </>
              )}
            </Disclosure>
          );
        })}
        {/* France end */}
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}
