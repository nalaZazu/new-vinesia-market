"use client";

import React from "react";
import Image from "next/legacy/image";
import winebotel from "../../assets/images/Group 10462.png";
import Art from "../../assets/images/arat.png";
import Link from "next/link";
import { ItemCardDto } from "@/types/productCard.dto";
import { useUser } from "@/context/user";

import bottleIcon from "../../assets/icons/bottleIcon.svg";

export default function ProductCards({
  item
}: {
  item: ItemCardDto;
}) {
  const { getPriceText, currency } = useUser();

  if (item === undefined) {
    return <></>;
  }

  function getCaseName(count: number) {
    if (count === 1) return "Case";
    return "Cases";
  }
  function getBottleName(count: number) {
    if (count === 1) return "Bottle";
    return "Bottles";
  }


  function getCount(item: ItemCardDto) {
    return item.total + ' ' + (item.description.startsWith('Case') ? getCaseName(item.total) : getBottleName(item.total))
  }

  return (
    <div>
      <div className="card_bg_shape bg-no-repeat flex justify-end mx-auto w-full relative">
        <div className="max-w-[288px] md:h-[674px] h-[674px] mx-auto">
          <div className="flex flex-col items-center md:gap-8 gap-5 px-5">
            <div className="relative">
              <Image
                src={`${process.env.NEXT_PUBLIC_API_ADDRESS}products/file/${item.media}`}
                alt="Product picture"
                width={200}
                // layout="responsive"
                height={200}
                className=" w-auto h-[200px]"
                objectFit="contain"
              />
              {item.isEdition ? (
                <div className="w-[49.94px] h-[50px] absolute -bottom-5 left-0 right-0 mx-auto">
                  <div className="w-[49.94px] h-[50px] left-0 top-0 absolute bg-red-700 rounded-full border-4 border-orange-100" />
                  <div className="left-[12.49px] top-[20px] absolute text-center text-white text-sm font-normal  uppercase leading-none">
                    {`#${item.number}`}
                  </div>
                </div>
              ) : (
                <>
                  <div className="w-[49.94px] h-[50px] absolute -bottom-5 left-0 right-0 mx-auto">
                    <div className="w-[49.94px] h-[50px] left-0 top-0 absolute bg-red-700 rounded-full border-4 border-orange-100" />
                    <div className="left-[14px] top-[13px] absolute text-center text-white text-sm font-normal  leading-none">
                      <Image
                        src={bottleIcon}
                        alt="image-icon"
                        className="inline"
                      />
                      {item.description.startsWith("Case")
                        ? " x" + item.packageSize
                        : " x1"}
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="justify-start items-start gap-2 inline-flex md:pt-0 pt-4 h-[36px]">
              {item.artwork === false ? (
                <></>
              ) : (
                <div className="p-2 h-9 bg-zinc-800 rounded-[30px] border flex justify-end items-center gap-1.5">
                  <Image src={Art} alt="Artwork picture" />
                  <p className="text-center text-white text-xs font-normal uppercase leading-3 tracking-tight">
                    ARTWORK
                  </p>
                </div>
              )}

              {(item.available > 0 || item.isAvailable) && (
                <div className="p-2 h-9 bg-green-500 rounded-[30px] border flex justify-start items-center gap-1.5">
                  <div className=" w-2 h-2 bg-white rounded-full" />
                  <p className="text-center text-white text-xs font-normal uppercase leading-3 tracking-tight">
                    Available
                  </p>
                </div>
              )}
            </div>
            <div className="flex-col items-center gap-6 flex">
              <h3 className="md:max-w-[371px] max-w-[243px] text-center text-zinc-800 text-xl font-light h-[84px] ">
                {item.name}
              </h3>
              <p className="text-neutral-600 text-base font-normal leading-snug">
                {item.description}
              </p>
            </div>
          </div>

          <div className="2xl:mt-10 lg:mt-3 sm:mt-10 md:mt-10 max-w-[437px] mx-auto flex justify-between items-center pt-7 px-5">
            {item.buyNowPrice ? (
              <div className="flex-auto justify-center items-center gap-2 ">
                <div className="text-center text-stone-500 text-xs font-normal uppercase leading-3 tracking-tight">
                  BUY NOW
                </div>
                <div className="text-zinc-800 text-center md:text-xl text-xl font-light  leading-[44px]">
                  {getPriceText(item.buyNowPrice[currency] ?? 0)}
                </div>
              </div>
            ) : (
              <>
                <div className="flex-col justify-center items-center gap-2 inline-flex">
                  <div className="text-center text-stone-500 text-xs font-normal uppercase leading-3 tracking-tight">
                    EST. PRICE
                  </div>
                  <div className="text-zinc-800 md:text-xl text-xl font-light  leading-[44px]">
                    {item.estPrice && getPriceText(item.estPrice[currency] ?? 0)}
                  </div>
                </div>
                <div className="flex-col justify-center items-center gap-2 inline-flex">
                  <div className="text-center text-stone-500 text-xs font-normal uppercase leading-3 tracking-tight">
                    FLOOR PRICE
                  </div>
                  <div className="text-zinc-800 md:text-xl text-xl font-light  leading-[44px]">
                    {item.floorPrice && getPriceText(item.floorPrice[currency] ?? 0)}
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="flex flex-col items-center gap-4">
            <Link
              href={(item.isEdition ? `/edition/` : `/product/`) + item.id}
              className="mt-6 px-8 py-5 bg-orange-700 rounded-full text-center text-white text-xs font-normal uppercase leading-3 tracking-tight"
            >
              SEE OVERVIEW
            </Link>

            {!item.isEdition && (
              <div className="text-center">
                <span className="text-neutral-600 text-base font-normal leading-snug">
                  {getCount(item)}
                </span>
                <span className="text-stone-300 text-base font-normal leading-snug">
                  /
                </span>
                <span className="text-red-700 text-base font-normal leading-snug">
                  {item.available} Remaining
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
