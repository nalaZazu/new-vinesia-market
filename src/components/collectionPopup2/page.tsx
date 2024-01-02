"use client";
import React from "react";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import AssetInfo from "@/common/WineModel/AssetInfo";
import Authenticity from "@/common/WineModel/Authenticity";
import Ownership from "@/common/WineModel/Ownership";
import StorageConditions from "@/common/WineModel/StorageConditions";
import DisclosureModals from "../disclosure/disclosure1/page";
import AuthenticityDIsclosure from "../disclosure/AuthenticityDIsclosure/page";
import { EditionOverview } from "@/types/editionOverview.dto";

// import DisclosureModals from "../disclosure/disclosure1/page";
export default function CollectionPopup2({
  open = false,
  setOpen,
  item
}: {
  open: any;
  setOpen: any;
  item: EditionOverview
}) {
  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
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
                <Dialog.Panel className="relative max-w-[1244px] lg:h-auto md:h-[600px] sm:h-full transform overflow-hidden bg-[#F3E8CF] text-left shadow-xl transition-all">
                  <div className="md:px-20 px-4 py-7">
                    {/* column one */}
                    <div className=" container mx-auto md:flex items-center grid grid-cols-1 justify-between">
                      <div className="order-2 md:order-1">
                        <h1 className="text-zinc-800 md:text-4xl font-light md:leading-[44px] text-[21px] leading-[29px]">
                          {item.name}
                        </h1>
                        <p className=" text-zinc-800 text-base font-normal leading-snug">
                          {/* With Art of  */}
                        </p>
                      </div>
                      <div className="order-1 md:order-2 text-end">
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
                    </div>
                    <div className="md:block hidden">
                      <AssetInfo item={item}/>
                    </div>
                    <div className="md:hidden block">
                      <DisclosureModals item={item} />
                    </div>
                    <div className="max-w-[1024px] h-[0px] border border-orange-700 border-opacity-20 md:my-12 my-8"></div>

                    {/* column two */}
                    <div className="pb-12">
                      <h4 className="text-zinc-800 text-lg font-semibold leading-relaxed pb-1">
                        How we secure your wine?
                      </h4>
                      <p className="text-zinc-800 text-base font-normal leading-snug">
                        Your wine asset is connected with additional security
                        data:
                      </p>
                    </div>
                    <div className="md:block hidden">
                      <div className="justify-start items-center gap-4 flex pb-8">
                        <div className="justify-center items-center gap-2.5 flex">
                          <div className="text-right text-zinc-800 text-lg font-semibold leading-relaxed">
                            Our Proof of Authenticity
                          </div>
                        </div>
                        <div className="justify-start items-center gap-2 flex">
                          <div className="w-[13px] h-[13px] relative">
                            <div className="w-[13px] h-[13px] left-0 top-0 rounded-full border border-green-500" />
                            <div className="w-[7px] h-[7px] left-[3px] absolute top-[3px] bg-green-500 rounded-full" />
                          </div>
                          <div className="text-green-700 text-xs font-normal uppercase leading-3 tracking-tight">
                            Live
                          </div>
                        </div>
                      </div>
                      <Authenticity item={item}/>
                    </div>
                    <div className="md:hidden block">
                      <AuthenticityDIsclosure item={item} />
                    </div>
                    {/* column three */}
                    <div className="max-w-[1024px] h-[0px] border border-orange-700 border-opacity-20 md:my-12 my-6 "></div>
                    <div className="md:block hidden">
                      <Ownership item={item}/>
                    </div>
                    <div className="md:hidden block">
                      <AuthenticityDIsclosure item={item}/>
                    </div>
                    {/* column four */}

                    <div className="max-w-[1024px] h-[0px] border border-orange-700 border-opacity-20 md:my-12 my-6"></div>
                    <div className="md:block hidden">
                      <StorageConditions item={item}/>
                    </div>
                    <div className="md:hidden block">
                      <AuthenticityDIsclosure item={item}/>
                    </div>
                    {/* column five */}
                    <div className="md:hidden block">
                      <div className="w-80 h-[66px] px-20 pt-5 pb-6 bg-orange-50 justify-center items-center gap-[71px] inline-flex">
                        <div className="justify-center items-center gap-2 flex">
                          <div className="text-orange-700 text-base font-normal font-['Albert Sans'] leading-snug">
                            Read more
                          </div>
                          <div className="text-zinc-800 text-base font-normal font-['Albert Sans'] leading-snug">
                            about Peace of mind pledge
                          </div>
                        </div>
                      </div>
                    </div>
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
