import React from "react";
import Image from "next/image";
import winebotel from "../../assets/images/winecolleciton.png";
import Art from "../../assets/images/arat.png";
import Link from "next/link";
import { ProductCardDto } from "@/types/productCard.dto";

export default function ProductCards({item}: {item: ProductCardDto | undefined}) {
  if (item === undefined) {
    return <></>
  }

  return (
    
    <div>
      <div className="card_bg_shape bg-no-repeat flex justify-end mx-auto w-full relative">
        <div className="max-w-[288px] md:h-[674px] h-[674px] mx-auto">
          <div className="flex flex-col items-center md:gap-8 gap-5 px-5">
            <div className="relative">
              <Image
                src={winebotel}
                alt="Picture of the author"
                className=" w-auto h-[200px]"
              />
              <div className="w-[49.94px] h-[50px] absolute -bottom-5 left-0 right-0 mx-auto">
                <div className="w-[49.94px] h-[50px] left-0 top-0 absolute bg-red-700 rounded-full border-4 border-orange-100" />
                <div className="left-[12.49px] top-[20px] absolute text-center text-white text-sm font-normal  uppercase leading-none">
                  {/* #14 */}
                </div>
              </div>
            </div>

            <div className="justify-start items-start gap-2 inline-flex md:pt-0 pt-4">
              {item.artwork === false ? <></> : 
              <div className="p-2 h-9 bg-zinc-800 rounded-[30px] border flex justify-end items-center gap-1.5">
                <Image src={Art} alt="Picture of the author" />
                <p className="text-center text-white text-xs font-normal uppercase leading-3 tracking-tight">
                  ARTWORK
                </p>
              </div>}

              {item.available === 0 ? <></> : 
              <div className="p-2 h-9 bg-green-500 rounded-[30px] border flex justify-start items-center gap-1.5">
                <div className=" w-2 h-2 bg-white rounded-full" />
                <p className="text-center text-white text-xs font-normal uppercase leading-3 tracking-tight">
                  Available
                </p>
              </div>}
            </div>
            <div className="flex-col items-center gap-6 flex">
              <h3 className="md:max-w-[371px] max-w-[243px] text-center text-zinc-800 text-xl font-light ">
                {item.name}
              </h3>
              <p className="text-neutral-600 text-base font-normal leading-snug">
                {item.description} OWC
              </p>
            </div>
          </div>
          <div className="max-w-[437px] mx-auto flex justify-between items-center pt-7 px-5">
            <div className="flex-col justify-center items-center gap-2 inline-flex">
              <div className="text-center text-stone-500 text-xs font-normal uppercase leading-3 tracking-tight">
                EST. PRICE
              </div>
              <div className="text-zinc-800 md:text-xl text-xl font-light  leading-[44px]">
                €3,600
              </div>
            </div>
            <div className="flex-col justify-center items-center gap-2 inline-flex">
              <div className="text-center text-stone-500 text-xs font-normal uppercase leading-3 tracking-tight">
                EST. PRICE
              </div>
              <div className="text-zinc-800 md:text-xl text-xl font-light  leading-[44px]">
                €3,600
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 absolute lg:bottom-12 md:bottom-6 bottom-12 left-0 right-0">
            <Link 
            href={`/product/${item.id}`}
            className="px-8 py-5 bg-orange-700 rounded-full text-center text-white text-xs font-normal uppercase leading-3 tracking-tight">
              SEE OVERVIEW
            </Link>
            <div className="text-center">
              <span className="text-neutral-600 text-base font-normal leading-snug">
                {item.total} Bottles
                {/* 50 Bottles */}
              </span>
              <span className="text-stone-300 text-base font-normal leading-snug">
                /
              </span>
              <span className="text-red-700 text-base font-normal leading-snug">
                {item.available} Remaining
                {/* 14 Remaining */}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
