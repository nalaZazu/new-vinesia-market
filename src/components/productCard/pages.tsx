import React from "react";
import Image from "next/image";
import winebotel from "../../assets/images/winebotel.png";
import Art from "../../assets/images/arat.png";

export default function ProductCards() {
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 max-w-[1046px] mx-auto gap-8 px-4">
      {[1, 2]?.map((item: any, i: any) => {
        return (
          <div
            key={i}
            className="card_bg_shape relative flex justify-end mx-auto w-full"
          >
            <div className="max-w-[501px] md:h-[758px] h-[674px] left-0 mx-auto">
              <div className="flex justify-center max-w-[501px] -mt-6 md:-mt-14">
                <Image
                  src={winebotel}
                  alt="Picture of the author"
                  className=" md:max-w-[224px] max-w-[182px]"
                />
              </div>
              <div className="flex flex-col items-center gap-8 pt-10">
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
                  <h3 className="md:max-w-[371px] max-w-[243px] text-center text-zinc-800 md:text-4xl text-xl font-light font-['Canela']">
                    Brunello di Montalcino {`"Piaggione"`} | Winery name | 2019
                  </h3>
                  <p className="text-neutral-600 text-base font-normal leading-snug">
                    3 single bottles Signature collection
                  </p>
                </div>
              </div>
              <div className="max-w-[437px] mx-auto flex justify-between items-center pt-8">
                <div className="flex-col justify-center items-center gap-2 inline-flex">
                  <div className="text-center text-stone-500 text-xs font-normal uppercase leading-3 tracking-tight">
                    EST. PRICE
                  </div>
                  <div className="text-zinc-800 md:text-4xl text-xl font-light font-['Canela'] leading-[44px]">
                    €3,600
                  </div>
                </div>
                <div className="flex-col justify-center items-center gap-2 inline-flex">
                  <div className="text-center text-stone-500 text-xs font-normal uppercase leading-3 tracking-tight">
                    EST. PRICE
                  </div>
                  <div className="text-zinc-800 md:text-4xl text-xl font-light font-['Canela'] leading-[44px]">
                    €3,600
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-col justify-start items-center gap-4 flex absolute left-0 right-0 bottom-10">
              <button className="px-8 py-5 bg-orange-700 rounded-full justify-center items-center gap-3 inline-flex text-center text-white text-xs font-normal uppercase leading-3 tracking-tight">
                SEE OVERVIEW
              </button>
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
        );
      })}
    </div>
  );
}
