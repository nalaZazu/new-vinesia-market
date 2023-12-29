"use client";
import React from "react";
import { Disclosure } from "@headlessui/react";
import { ArrowDown, ArrowLongRight, LinkIcon } from "@/assets/icons/Icons";
import Authenticity from "@/common/WineModel/Authenticity";
// import { ArrowBtn } from "@/assets/icons/Icons";
// import itemsCollection from "@/assets/icon/itemscollection.png";
const AuthenticityDIsclosure = () => {
  return (
    <>
      <div>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="w-full flex justify-between items-center gap-5 mt-10">
                <div>
                  <div className="justify-center items-center gap-2.5 flex">
                    <div className="text-right text-zinc-800 text-lg font-semibold leading-relaxed">
                      Our Proof of Authenticity
                    </div>
                  </div>
                  <div className="justify-start items-center gap-2 flex pt-2">
                    <div className="w-[13px] h-[13px] relative">
                      <div className="w-[13px] h-[13px] left-0 top-0 rounded-full border border-green-500" />
                      <div className="w-[7px] h-[7px] left-[3px] absolute top-[3px] bg-green-500 rounded-full" />
                    </div>
                    <div className="text-green-700 text-xs font-normal uppercase leading-3 tracking-tight">
                      Live
                    </div>
                  </div>
                </div>

                <span
                  className={`${
                    open ? "" : "rotate-180 transform"
                  } h-5 w-5 text-primary`}
                >
                  <ArrowDown />
                </span>
              </Disclosure.Button>

              <Disclosure.Panel className="md:px-4 pb-2 md:pt-4 pt-8 text-sm text-gray-500">
                <Authenticity />
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
};

export default AuthenticityDIsclosure;
