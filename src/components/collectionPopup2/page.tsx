"use client";
import React from "react";
import Image from "next/image";
import { Fragment } from "react";
import Appactivity from "@/components/charts/page";
import { Dialog, Transition } from "@headlessui/react";
import {
  AlertCircle,
  CheckBox,
  LineDot,
  LinkIcon,
  SensorModal,
} from "@/assets/icons/Icons";
import { ArrowLongRight } from "@/assets/icons/Icons";
import { BarcodeLink } from "@/assets/icons/Icons";
// import DisclosureModal from "../disclosure/page";
// import DisclosureModals from "../disclosure/disclosure1/page";
export default function CollectionPopup2({
  open = false,
  setOpen,
}: {
  open: any;
  setOpen: any;
}) {
  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          // initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-end p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative w-[1244px] lg:h-auto md:h-[600px] sm:h-full transform overflow-hidden bg-[#F3E8CF] text-left shadow-xl transition-all">
                  <div className="px-20 py-7">
                    {/* column one */}
                    <div className=" container mx-auto flex justify-between">
                      <div>
                        <h1 className="text-zinc-800 text-4xl font-light leading-[44px]">
                          1# Chateau La Mission Haut Brion Cru Classe | 2009
                        </h1>
                        <p className=" text-zinc-800 text-base font-normal leading-snug">
                          With Art of Lola Designer Fun
                        </p>
                      </div>
                      <button onClick={setOpen}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-10 h-10"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>

                    <div className="md:pt-8 flex ">
                      <div className="space-y-4">
                        <div className="md:flex gap-4 items-center">
                          <p className="text-[#906447] text-base font-normal leading-snug">
                            Wine asset ID
                          </p>
                          <div className="w-[30px] h-[0px] border border-orange-700 border-opacity-20"></div>
                          <p className="text-zinc-800 text-base font-normal leading-snug">
                            1234_1234_1354658
                          </p>
                          <LinkIcon />
                        </div>
                        <div className="md:flex gap-4 items-center">
                          <p className="text-[#906447] text-base font-normal leading-snug">
                            Owner
                          </p>
                          <div className="w-[30px] h-[0px] border border-orange-700 border-opacity-20"></div>
                          <p className="text-zinc-800 text-base font-normal leading-snug">
                            @owner_with_very_long_wa...
                          </p>
                        </div>
                        <div className="md:flex gap-4 items-center">
                          <p className="text-[#906447] text-base font-normal leading-snug">
                            Release date
                          </p>
                          <div className="w-[30px] h-[0px] border border-orange-700 border-opacity-20"></div>
                          <p className="text-zinc-800 text-base font-normal leading-snug">
                            12.09.2023
                          </p>
                        </div>
                        <div className="md:flex gap-4 items-center">
                          <p className="text-[#906447] text-base font-normal leading-snug">
                            Link to contract
                          </p>
                          <div className="w-[30px] h-[0px] border border-orange-700 border-opacity-20"></div>
                          <p className="text-center text-orange-700 text-xs font-normal uppercase leading-3 tracking-tight">
                            LINK TO THE DOCUMENT
                          </p>
                          <ArrowLongRight />
                        </div>
                      </div>
                    </div>
                    <div className="max-w-[1024px] h-[0px] border border-orange-700 border-opacity-20 md:my-12"></div>
                    <div className="pb-12">
                      <h4 className="text-zinc-800 text-lg font-semibold leading-relaxed pb-1">
                        How we secure your wine?
                      </h4>
                      <p className="text-zinc-800 text-base font-normal leading-snug">
                        Your wine asset is connected with additional security
                        data:
                      </p>
                    </div>
                    {/* column two */}
                    <div className="justify-start items-center gap-4 flex pb-8">
                      <div className="justify-center items-center gap-2.5 flex">
                        <div className="text-right text-zinc-800 text-lg font-semibold leading-relaxed">
                          Our Proof of Authenticity
                        </div>
                      </div>
                      <div className="justify-start items-center gap-2 flex">
                        <div className="w-[13px] h-[13px] relative">
                          <div className="w-[13px] h-[13px] left-0 top-0 rounded-full border border-green-500" />
                          <div className="w-[7px] h-[7px] left-[3px] top-[3px] bg-green-500 rounded-full" />
                        </div>
                        <div className="text-green-700 text-xs font-normal uppercase leading-3 tracking-tight">
                          Live
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2">
                      <div className="border-r-2 border-orange-700 border-opacity-20">
                        <div className="flex gap-6">
                          <BarcodeLink />
                          <div>
                            <p className=" text-[#906447] text-xs font-normal uppercase leading-3 tracking-tight pb-2">
                              HOW WE PROVIDE IT
                            </p>
                            <p className="max-w-[399px] text-zinc-800 text-base font-normal leading-snug">
                              We use NFC tags to secure wine and keep track of
                              information about a given bottle.
                            </p>
                          </div>
                        </div>
                        <div className="ps-16 pt-8">
                          <p className=" text-stone-500 text-xs font-normal uppercase leading-3 tracking-tight pb-2">
                            HOW WE PROVIDE IT
                          </p>
                          <p className="max-w-[399px] text-zinc-800 text-base font-normal leading-snug">
                            The bottles brought from the winery are sealed with
                            NFC stickers and placed in the safe environment of
                            our wearhouse. From this point on, the bottle data
                            is recorded live and digitally.
                          </p>
                        </div>
                      </div>
                      <div className="flex ps-10 py-6">
                        <div className="space-y-4">
                          <div className="md:flex gap-4 items-center">
                            <p className="text-[#906447] text-base font-normal leading-snug">
                              NFC ID
                            </p>
                            <div className="w-[30px] h-[0px] border border-orange-700 border-opacity-20"></div>
                            <p className="text-center text-orange-700 text-xs font-normal uppercase leading-3 tracking-tight">
                              123456
                            </p>
                            <AlertCircle storke="#BF4D20" />
                          </div>
                          <div className="md:flex gap-4 items-center">
                            <p className="text-[#906447] text-base font-normal leading-snug">
                              Stciker applied on
                            </p>
                            <div className="w-[30px] h-[0px] border border-orange-700 border-opacity-20"></div>
                            <p className="text-center text-orange-700 text-xs font-normal uppercase leading-3 tracking-tight">
                              23.08.2023 | 12:36 pm
                            </p>
                          </div>
                          <div className="md:flex gap-4 items-center">
                            <p className="text-[#906447] text-base font-normal leading-snug">
                              Seal Status
                            </p>
                            <div className="w-[30px] h-[0px] border border-orange-700 border-opacity-20"></div>
                            <CheckBox />
                            <p className="text-center text-orange-700 text-xs font-normal uppercase leading-3 tracking-tight">
                              Integrity..
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* column three */}
                    <div className="max-w-[1024px] h-[0px] border border-orange-700 border-opacity-20 md:my-12"></div>
                    <div className="justify-start items-center gap-4 flex pb-8">
                      <div className="justify-center items-center gap-2.5 flex">
                        <div className="text-right text-zinc-800 text-lg font-semibold leading-relaxed">
                          Our Proof of Ownership
                        </div>
                      </div>
                      <div className="justify-start items-center gap-2 flex">
                        <div className="w-[13px] h-[13px] relative">
                          <div className="w-[13px] h-[13px] left-0 top-0 rounded-full border border-green-500" />
                          <div className="w-[7px] h-[7px] left-[3px] top-[3px] bg-green-500 rounded-full" />
                        </div>
                        <div className="text-green-700 text-xs font-normal uppercase leading-3 tracking-tight">
                          Live
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2">
                      <div className="border-r-2 border-orange-700 border-opacity-20">
                        <div className="flex gap-6">
                          <SensorModal />
                          <div>
                            <p className=" text-[#906447] text-xs font-normal uppercase leading-3 tracking-tight pb-2">
                              HOW WE PROVIDE IT
                            </p>
                            <p className="max-w-[399px] text-zinc-800 text-base font-normal leading-snug">
                              We use RFID technology to secure our products in
                              storage.
                            </p>
                          </div>
                        </div>
                        <div className="ps-16 pt-8">
                          <p className=" text-stone-500 text-xs font-normal uppercase leading-3 tracking-tight pb-2">
                            HOW WE PROVIDE IT
                          </p>
                          <p className="max-w-[399px] text-zinc-800 text-base font-normal leading-snug">
                            The bottles brought from the winery are sealed with
                            NFC stickers and placed in the safe environment of
                            our wearhouse. From this point on, the bottle data
                            is recorded live and digitally.
                          </p>
                        </div>
                      </div>
                      <div className="flex ps-10 py-6">
                        <div className="space-y-4">
                          <div className="md:flex gap-4 items-center">
                            <p className="text-[#906447] text-base font-normal leading-snug">
                              RFID
                            </p>
                            <div className="w-[30px] h-[0px] border border-orange-700 border-opacity-20"></div>
                            <p className="text-center text-orange-700 text-xs font-normal uppercase leading-3 tracking-tight">
                              3u033=39dje043=94
                            </p>
                            <AlertCircle storke="#BF4D20" />
                          </div>
                          <div className="md:flex gap-4 items-center">
                            <p className="text-[#906447] text-base font-normal leading-snug">
                              Last audit
                            </p>
                            <div className="w-[30px] h-[0px] border border-orange-700 border-opacity-20"></div>
                            <p className="text-zinc-800 text-base font-normal leading-snug">
                              30.06.2023
                            </p>
                            <AlertCircle storke="#BF4D20" />
                          </div>
                          <div className="md:flex gap-4 items-center">
                            <p className="text-[#906447] text-base font-normal leading-snug">
                              Date of last check
                            </p>
                            <div className="w-[30px] h-[0px] border border-orange-700 border-opacity-20"></div>
                            <p className="text-zinc-800 text-base font-normal leading-snug">
                              19.10.2023 | 12:45 pm
                            </p>
                          </div>
                          <div className="md:flex gap-4 items-center">
                            <p className="text-[#906447]  text-base font-normal leading-snug">
                              Last check status
                            </p>
                            <div className="w-[30px] h-[0px] border border-orange-700 border-opacity-20"></div>
                            <div>
                              <div className="flex gap-1">
                                <CheckBox />
                                <p className="text-zinc-800 text-base font-normal leading-snug">
                                  Product in our warehouse
                                </p>
                              </div>
                              <div className="flex gap-1">
                                <CheckBox />
                                <p>Luxemburg</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* column four */}
                    <div className="max-w-[1024px] h-[0px] border border-orange-700 border-opacity-20 md:my-12"></div>
                    <div className="justify-start items-center gap-4 flex pb-8">
                      <div className="justify-center items-center gap-2.5 flex">
                        <div className="text-right text-zinc-800 text-lg font-semibold leading-relaxed">
                          Our Proof of Storage Conditions
                        </div>
                      </div>
                      <div className="justify-start items-center gap-2 flex">
                        <div className="w-[13px] h-[13px] relative">
                          <div className="w-[13px] h-[13px] left-0 top-0 rounded-full border border-green-500" />
                          <div className="w-[7px] h-[7px] left-[3px] top-[3px] bg-green-500 rounded-full" />
                        </div>
                        <div className="text-green-700 text-xs font-normal uppercase leading-3 tracking-tight">
                          Live
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2">
                      <div className="border-r-2 border-orange-700 border-opacity-20">
                        <div className="flex gap-6">
                          <SensorModal />
                          <div>
                            <p className=" text-[#906447] text-xs font-normal uppercase leading-3 tracking-tight pb-2">
                              HOW WE PROVIDE IT
                            </p>
                            <p className="max-w-[399px] text-zinc-800 text-base font-normal leading-snug">
                              We use RFID technology to secure our products in
                              storage.
                            </p>
                          </div>
                        </div>
                        <div className="ps-16 pt-8">
                          <p className=" text-stone-500 text-xs font-normal uppercase leading-3 tracking-tight pb-2">
                            HOW WE PROVIDE IT
                          </p>
                          <p className="max-w-[399px] text-zinc-800 text-base font-normal leading-snug">
                            The bottles brought from the winery are sealed with
                            NFC stickers and placed in the safe environment of
                            our wearhouse. From this point on, the bottle data
                            is recorded live and digitally.
                          </p>
                        </div>
                      </div>
                      <div className="ms-10 px-6 pt-6 pb-5 bg-orange-50 max-w-[433px] h-[195px]">
                        <p className="text-zinc-800 text-lg font-semibold font-['Albert Sans'] leading-relaxed">
                          History of storage conditions
                        </p>
                        <div className="bg-orange-100 rounded">
                          <div className="w-[74.36px] h-[22px] left-[16px] top-[16px] justify-start items-center gap-[3px] inline-flex">
                            <div className="text-zinc-800 text-base font-normal font-['Albert Sans'] leading-snug">
                              °C{" "}
                            </div>
                            <div className="px-1 opacity-50 bg-stone-400 rounded-[50px] justify-start items-start gap-2.5 flex">
                              <div className="w-[15.50px] h-[15.43px] bg-white rounded-full" />
                            </div>
                            <div className="w-4 h-[22px] text-zinc-800 text-base font-normal font-['Albert Sans'] leading-snug">
                              °F
                            </div>
                          </div>
                          <div className="w-[252.40px] h-[22px] left-[160.87px] top-[16px] justify-start items-center gap-4 inline-flex">
                            <div className="justify-start items-center gap-1 flex">
                              <div className="w-[35px] h-2.5 relative">
                                <div className="w-2.5 h-2.5 left-[13px] top-0 bg-slate-700 rounded-full border border-slate-700" />
                              </div>
                              <div className="text-zinc-800 text-base font-normal font-['Albert Sans'] leading-snug">
                                Temprature
                              </div>
                            </div>
                            <div className="justify-start items-center gap-1 flex">
                              <div className="w-[35px] h-2.5 relative">
                                <div className="w-2.5 h-2.5 left-[13px] top-0 bg-red-700 rounded-full" />
                              </div>
                              <div className="text-zinc-800 text-base font-normal font-['Albert Sans'] leading-snug">
                                Humidity
                              </div>
                            </div>
                          </div>
                          <div className="w-[433px] h-[76px] px-4 left-0 top-[70px] flex-col justify-start items-start gap-5 inline-flex">
                            <div className="self-stretch justify-start items-end gap-1.5 inline-flex">
                              <div className="text-zinc-800 text-xs font-normal font-['Albert Sans'] uppercase leading-3 tracking-tight">
                                13°C{" "}
                              </div>
                              <div className="grow shrink basis-0 h-[0px] border border-orange-700 border-opacity-20"></div>
                              <div className="text-zinc-800 text-xs font-normal font-['Albert Sans'] uppercase leading-3 tracking-tight">
                                71%
                              </div>
                            </div>
                            <div className="self-stretch justify-start items-end gap-1.5 inline-flex">
                              <div className="text-zinc-800 text-xs font-normal font-['Albert Sans'] uppercase leading-3 tracking-tight">
                                12°C{" "}
                              </div>
                              <div className="grow shrink basis-0 h-[0px] border border-orange-700 border-opacity-20"></div>
                              <div className="text-zinc-800 text-xs font-normal font-['Albert Sans'] uppercase leading-3 tracking-tight">
                                68%
                              </div>
                            </div>
                            <div className="self-stretch justify-start items-end gap-1.5 inline-flex">
                              <div className="text-zinc-800 text-xs font-normal font-['Albert Sans'] uppercase leading-3 tracking-tight">
                                11°C{" "}
                              </div>
                              <div className="grow shrink basis-0 h-[0px] border border-orange-700 border-opacity-20"></div>
                              <div className="text-zinc-800 text-xs font-normal font-['Albert Sans'] uppercase leading-3 tracking-tight">
                                65%
                              </div>
                            </div>
                          </div>
                          <div className="w-[433px] h-[22px] px-16 left-0 top-[162px] justify-between items-start inline-flex">
                            <div className="grow shrink basis-0 h-[22px] justify-between items-start flex">
                              <div className="text-zinc-800 text-base font-normal font-['Albert Sans'] leading-snug">
                                Oct 23
                              </div>
                              <div className="text-zinc-800 text-base font-normal font-['Albert Sans'] leading-snug">
                                Oct 30
                              </div>
                              <div className="text-zinc-800 text-base font-normal font-['Albert Sans'] leading-snug">
                                Nov 7
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <DisclosureModals /> */}
                    {/* column five */}
                    {/* <DisclosureModal /> */}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
