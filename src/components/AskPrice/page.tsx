"use client";
import React from "react";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import ModalContainer from "@/common/ModalContainer";
import winebotel from "@/assets/images/big1.png";
import Image from "next/image";
import { PrevIcon } from "@/assets/icons/Icons";
const dataArray = [
  {
    label: "PURCHASE PRICE",
    value: "€1,100",
  },
  {
    label: "EST, Value",
    value: "€5,900",
  },
  {
    label: "Highest BID",
    value: "——",
  },
];

export default function AskPrice({
  open = false,
  setOpen,
}: {
  open: any;
  setOpen: any;
}) {
  return (
    <>
      <ModalContainer
        title=" Set up ask price"
        visible={open}
        setVisible={setOpen}
      >
        <div className="p-12">
          {/* <h4 className="text-zinc-800 text-[21px] font-light font-['Canela'] leading-[29px] tracking-wide">
           
          </h4> */}
          <p className="text-zinc-800 text-lg font-semibold leading-relaxed">
            1# La Mission Haut Brion Cru Classe | 2009
          </p>
          <div className="grid grid-cols-3">
            <div className="max-w-[237.05px]">
              <div className="py-9">
                <Image
                  src={winebotel}
                  alt="Picture of the author"
                  className=""
                />
              </div>
              <div className="flex justify-center">
                <div className="pl-1 pr-2 py-1 bg-zinc-800 rounded-full items-center gap-1.5 flex">
                  <img
                    className="w-[21px] h-[21px] rounded-[55.56px] shadow border border-red-600"
                    src="https://via.placeholder.com/21x21"
                  />
                  <p className="text-center text-white text-xs font-normal uppercase leading-[18px] tracking-tight">
                    ARTWORK
                  </p>
                </div>
              </div>
            </div>

            <div className="col-span-2 py-12">
              <div className="py-6">
                <div className="px-6 justify-between flex">
                  {dataArray.map((item, i) => (
                    <div
                      className="h-[46px] flex-col justify-between items-start inline-flex"
                      key={i}
                    >
                      <p className="text-stone-500 text-xs font-normal uppercase leading-[18px] tracking-tight">
                        {item.label}
                      </p>
                      <p className="text-zinc-800 text-lg font-semibold leading-relaxed">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-6 bg-orange-50 rounded flex-col justify-start items-start gap-4 flex">
                <p className="text-zinc-800 text-lg font-semibold leading-relaxed">
                  Set ask price
                </p>
                <div className="w-[349px] h-[55px] relative">
                  <div className="w-[349px] h-[55px] left-0 top-0 absolute flex-col justify-start items-start gap-2 inline-flex">
                    <div className="self-stretch h-[55px] pl-6 pr-5 py-2 rounded-[100px] border border-red-400 justify-between items-center inline-flex">
                      <input
                        placeholder="€"
                        className="h-[22px] flex bg-transparent border-none outline-none"
                      />
                      <div className="w-1 h-1 bg-zinc-300" />
                    </div>
                  </div>
                  <button className="w-[141px] h-[47px] px-[30.72px] py-[21.12px] left-[203.95px] top-[4px] absolute bg-orange-700 rounded-[46.08px] justify-center items-center gap-[11.52px] inline-flex text-center text-white text-xs font-normal uppercase leading-[18px] tracking-tight">
                    SET
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[0px] border border-orange-700 border-opacity-20 my-6"></div>
          {/* col 2 */}
          <div className="justify-between items-center flex pb-10">
            <div>
              <p className="text-[#906447] text-xs font-normal uppercase leading-[18px] tracking-tight">
                TYPE AND VARIETY
              </p>
              <p className="text-zinc-800 text-lg font-semibold leading-relaxed">
                Red, 14% Alc
              </p>
            </div>

            <div className="flex">
              <div className="flex-col gap-0.5 flex">
                <p className="text-[#906447] text-xs font-normal uppercase leading-[18px] tracking-tight">
                  CASE SIZE
                </p>
                <div>
                  <span className="text-zinc-800 text-lg font-semibold leading-relaxed">
                    99 bottle case,
                  </span>
                  <span className="text-zinc-800 text-base font-normal leading-snug">
                    Double Magnum (1,5l)
                  </span>
                </div>
              </div>
            </div>

            <div className="flex-col gap-0.5 flex">
              <p className="text-[#906447] text-xs font-normal uppercase leading-[18px] tracking-tight">
                ORIGIN
              </p>
              <div className="justify-start items-center gap-2 inline-flex">
                <p className="text-[#906447] text-base font-normal leading-snug">
                  Winery
                </p>
                <div className="w-4 h-[0px] border border-orange-700 border-opacity-20"></div>
                <p className="text-orange-700 text-base font-normal leading-snug">
                  Château Le Pin
                </p>
                <div className="w-4 h-[0px] border border-orange-700 border-opacity-20"></div>
                <p className="text-zinc-800 text-base font-normal leading-snug">
                  France, Region, Appellation
                </p>
              </div>
            </div>
          </div>
          {/* button */}
          <button className="text-center text-orange-700 text-xs font-normal uppercase leading-[18px] tracking-tight w-[134px] h-14 px-8 py-[22px] rounded-[48px] border border-orange-700 border-opacity-20 justify-center items-center gap-3 flex">
            <PrevIcon />
            Back
          </button>
        </div>
      </ModalContainer>
    </>
  );
}
