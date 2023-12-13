"use client";
import React from "react";
// import Image from "next/image";
import { Fragment } from "react";
// import Appactivity from "@/components/charts/page";
import { Dialog, Transition } from "@headlessui/react";
import AssetInfo from "@/common/WineModel/AssetInfo";
import Authenticity from "@/common/WineModel/Authenticity";
import Ownership from "@/common/WineModel/Ownership";
import StorageConditions from "@/common/WineModel/StorageConditions";
import DisclosureModals from "../disclosure/disclosure1/page";

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
                <Dialog.Panel className="relative max-w-[1244px] lg:h-auto md:h-[600px] sm:h-full transform overflow-hidden bg-[#F3E8CF] text-left shadow-xl transition-all">
                  <div className="md:px-20 px-4 py-7">
                    {/* column one */}
                    <div className=" container mx-auto md:flex items-center grid grid-cols-1 justify-between">
                      <div className="order-2 md:order-1">
                        <h1 className="text-zinc-800 md:text-4xl font-light md:leading-[44px] text-[21px] leading-[29px]">
                          1# Chateau La Mission Haut Brion Cru Classe | 2009
                        </h1>
                        <p className=" text-zinc-800 text-base font-normal leading-snug">
                          With Art of Lola Designer Fun
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
                      <AssetInfo />
                    </div>
                    <div className="md:hidden block">
                      <DisclosureModals />
                    </div>
                    <div className="max-w-[1024px] h-[0px] border border-orange-700 border-opacity-20 md:my-12"></div>

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
                    <Authenticity />
                    {/* column three */}
                    <div className="max-w-[1024px] h-[0px] border border-orange-700 border-opacity-20 md:my-12"></div>
                    <Ownership />
                    {/* column four */}
                    <div className="max-w-[1024px] h-[0px] border border-orange-700 border-opacity-20 md:my-12"></div>
                    <StorageConditions />

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
