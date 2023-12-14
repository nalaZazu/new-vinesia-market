"use client";
import { EditIcon, TickCirIcon } from "@/assets/icons/Icons";
import React from "react";

export default function Checkout() {
  return (
    <div className="max-w-[1171px] mx-auto px-4 md:mb-40 mb-20">
      <div className="w-full md:justify-start justify-between items-center md:gap-8 inline-flex pt-[74px] pb-4 border-b border-[#A6836C20]">
        <div className="justify-start items-center gap-2 flex">
          <div className="w-8 h-8 justify-center items-center flex">
            <TickCirIcon />
          </div>
          <h1 className="text-[#2F222B] md:text-4xl text-[21px] font-light leading-[44px]">
            Billing information
          </h1>
        </div>
        <div className="grow shrink basis-0 h-[1px] border border-[#ACA7AA] border-dashed md:block hidden"></div>
        <h2 className="text-[#A6836C] text-[21px] font-light leading-[29px] tracking-wide md:block hidden ">
          02 — Finalized
        </h2>
        <div className="w-[65px] justify-start items-center gap-4 inline-flex md:hidden">
          <h2 className="text-[#2F222B] text-[21px] font-light leading-[29px]">
            02
          </h2>
          <h2 className="text-[#A6836C] text-[21px] font-light leading-[29px]">
            03
          </h2>
        </div>
      </div>

      <div className="flex justify-between mt-12 ">
        <div className="max-w-[501px]">
          <p className="pb-8">This data will be used for invoicing.</p>
          <div className=" flex-col justify-start items-start gap-1 inline-flex">
            <div className="justify-start items-center gap-2 inline-flex">
              <div className="text-zinc-800 text-lg font-semibold leading-relaxed">
                Billing Address
              </div>
              <button>
                <EditIcon />
              </button>
            </div>
            {/* Billing Address */}
            <div>
              <p className="w-44 text-zinc-800 text-base font-normal leading-snug">
                John
              </p>
              <p className="w-44 text-zinc-800 text-base font-normal leading-snug">
                Newman
              </p>
              <p className="w-44 text-zinc-800 text-base font-normal leading-snug">
                Jangfemsteg 12
              </p>
              <p className="justify-start items-start gap-1 inline-flex">
                <span className="text-zinc-800 text-base font-normal leading-snug">
                  20350
                </span>
                <span className=" text-zinc-800 text-base font-normal leading-snug">
                  Hamburg
                </span>
              </p>
              <p className=" text-zinc-800 text-base font-normal leading-snug">
                Deutschland
              </p>
            </div>
            {/* Email Address */}
            <div className=" mt-12">
              <div className=" flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch text-neutral-900 text-base font-normal  leading-snug">
                  E-mail address to which the electronic invoice will be sent
                </div>
                <div className="self-stretch justify-start items-center gap-3 inline-flex">
                  <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                    <div className="self-stretch h-14 pl-6 pr-5 py-2 bg-orange-700 bg-opacity-10 rounded-[100px] border border-orange-700 border-opacity-20 justify-between items-center inline-flex">
                      <div className="grow shrink basis-0 h-[22px] justify-start items-center gap-2 flex">
                        <div className="text-zinc-800 text-base font-normal  leading-snug">
                          john.l@email.com
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-6 h-6 justify-center items-center flex">
                    <button>
                      <EditIcon />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Acknowledgements */}

            <div className="  flex-col justify-start items-start gap-8 inline-flex">
              <div className="self-stretch">
                <span className="text-zinc-800 text-xs font-normal leading-[18px]">
                  Your personal data will be used to process your order, support
                  your experience throughout this website, and for other
                  purposes described in our{" "}
                </span>
                <span className="text-orange-700 text-xs font-normal leading-[18px] underline">
                  Privacy policy
                </span>
                <span className="text-zinc-800 text-xs font-normal leading-[18px]">
                  .
                </span>
              </div>
              <div className=" border border-orange-700 border-opacity-20"></div>
              <div className="self-stretch flex-col justify-start items-start gap-6 flex">
                <div className="self-stretch justify-start items-center gap-2 inline-flex">
                  <div className="w-6  relative">
                    <div className="w-6   left-0 top-0 absolute bg-zinc-800 rounded-md border border-zinc-800" />
                    <div className="w-4   px-[4.67px] left-[4px] top-[4px] absolute justify-center items-center inline-flex" />
                    <input
                      // id={`${item}-${itemId}`}
                      name="checkbox"
                      type="checkbox"
                      className="h-3 w-3 form-checkbox    bg-orange-50 rounded-md border border-zinc-800"
                      // onChange={(e) =>
                      //   handleChange(item?.toLowerCase())
                      // }
                    />
                  </div>
                  <div className="grow shrink basis-0">
                    <span className="text-red-500 text-xs font-normal leading-[18px]">
                      *
                    </span>
                    <span className="text-neutral-900 text-xs font-normal leading-[18px]">
                      By clicking here, I state that I have read and understood
                      the{" "}
                    </span>
                    <span className="text-orange-700 text-xs font-normal leading-[18px] underline ">
                      Terms and conditions
                    </span>
                    <span className="text-neutral-900 text-xs font-normal leading-[18px]">
                      .
                    </span>
                  </div>
                </div>
                <div className="h-[0px] border border-orange-700 border-opacity-20"></div>
                <div className="self-stretch justify-start items-center gap-2 inline-flex">
                  <div className="w-6 relative">
                    <div className="w-6 left-0 top-0 absolute bg-orange-50 rounded-md border border-zinc-800" />
                  </div>
                  <div className=" text-neutral-900 text-xs font-normal leading-[18px]">
                    Subscribe to the Vinesia newsletter
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[501px]">Card</div>
      </div>
    </div>
  );
}
