"use client";
import React from "react";
import { Disclosure } from "@headlessui/react";
import Image from "next/image";
// import { ArrowBtn } from "@/assets/icons/Icons";
// import itemsCollection from "@/assets/icon/itemscollection.png";
const DisclosureModals = () => {
  return (
    <>
      <div>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="w-full flex justify-between items-center gap-5 mt-10">
                <div className="basis-1/4">
                  <h2 className="text-black text-lg font-semibold tracking-tight text-left">
                    Items in this collection (4)
                  </h2>
                </div>
                <div className="basis-4/5 ">
                  <hr className=" border-black" />
                </div>

                <span
                  className={`${
                    open ? "" : "rotate-180 transform"
                  } h-5 w-5 text-primary`}
                >
                  {/* <ArrowBtn /> */}
                </span>
              </Disclosure.Button>

              <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                {[1, 2, 3, 4].map((d, i) => {
                  return (
                    <div
                      key={i}
                      className="flex mx-auto justify-center space-y-5 items-end"
                    >
                      <div className=" basis-14">
                        {/* <Image
                          src={itemsCollection}
                          alt="Picture of the author"
                          className="w-8 h-10"
                        /> */}
                      </div>
                      <div className="">
                        <p className="text-justify text-black text-base font-semibold tracking-tight">
                          Chateau La Mission Haut Brion Cru Classe | 2009
                        </p>
                        <p className="flex gap-1 text-zinc-700 text-sm font-medium tracking-tight">
                          <span>Winery:</span>
                          <a
                            href=""
                            className="text-justify text-black text-sm font-medium underline tracking-wide"
                          >
                            Château Le Pin
                          </a>
                        </p>
                      </div>
                    </div>
                  );
                })}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
};

export default DisclosureModals;
