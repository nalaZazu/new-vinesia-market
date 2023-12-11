import React from "react";
import Image from "next/image";
import winebotel from "../../assets/images/winebotel.png";
import Art from "../../assets/images/arat.png";
import Link from "next/link";

export default function ProductCards() {
  return (
    <div>
      <div className="card_bg_shape bg-no-repeat relative flex justify-end mx-auto w-full">
        <div className="max-w-[501px] md:h-[674px] h-[674px] left-0 mx-auto">
          <div className="flex justify-center max-w-[501px]">
            <Image
              src={winebotel}
              alt="Picture of the author"
              className=" w-auto h-[200px]"
            />
          </div>
          <div className="flex flex-col items-center md:gap-8 gap-5 pt-9 px-5">
            <div className="justify-start items-start gap-2 inline-flex">
              <div className="p-2 h-9 bg-zinc-800 rounded-[30px] border flex justify-end items-center gap-1.5">
                <Image src={Art} alt="Picture of the author" />
                <p className="text-center text-white text-xs font-normal uppercase leading-3 tracking-tight">
                  ARTWORK
                </p>
              </div>
              <div className="p-2 h-9 bg-green-500 rounded-[30px] border flex justify-start items-center gap-1.5">
                <div className=" w-2 h-2 bg-white rounded-full" />
                <p className="text-center text-white text-xs font-normal uppercase leading-3 tracking-tight">
                  Available
                </p>
              </div>
            </div>
            <div className="flex-col items-center gap-6 flex">
              <h3 className="md:max-w-[371px] max-w-[243px] text-center text-zinc-800 text-xl font-light ">
                Brunello di Montalcino {`"Piaggione"`} | Winery name | 2019
              </h3>
              <p className="text-neutral-600 text-base font-normal leading-snug">
                OWC 6 x 0,75 cl + Artwork
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
          <div className="flex-col justify-start items-center gap-4 flex pt-6">
            <Link 
            href="/product/1"
            className="px-8 py-5 bg-orange-700 rounded-full justify-center items-center gap-3 inline-flex text-center text-white text-xs font-normal uppercase leading-3 tracking-tight">
              SEE OVERVIEW
            </Link>
            <div className="text-center">
              <span className="text-neutral-600 text-base font-normal leading-snug">
                50 Bottles
              </span>
              <span className="text-stone-300 text-base font-normal leading-snug">
                /
              </span>
              <span className="text-red-700 text-base font-normal leading-snug">
                14 Remaining
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
