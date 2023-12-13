"use client";
import React from "react";
import { Disclosure } from "@headlessui/react";
import Image from "next/image";
import AssetInfo from "@/common/WineModel/AssetInfo";
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
                <div>
                  <h2 className="text-black text-lg font-semibold tracking-tight text-left">
                    Items in this collection (4)
                  </h2>
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
                <AssetInfo />
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
};

export default DisclosureModals;
