"use client";
import React from "react";
import { Disclosure } from "@headlessui/react";
import { ArrowDown, ArrowLongRight, LinkIcon } from "@/assets/icons/Icons";
import AssetInfo from "@/common/WineModel/AssetInfo";
import { EditionOverview } from "@/types/editionOverview.dto";
// import { ArrowBtn } from "@/assets/icons/Icons";
// import itemsCollection from "@/assets/icon/itemscollection.png";
const DisclosureModals = ({item}:{item: EditionOverview}) => {
  return (
    <>
      <div>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="w-full flex justify-between items-center gap-5 mt-10">
                <div>
                  <h2 className="text-zinc-800 text-base font-semibold leading-snug">
                    Asset details
                  </h2>
                </div>
                <span
                  className={`${
                    open ? "" : "rotate-180 transform"
                  } h-5 w-5 text-primary`}
                >
                  <ArrowDown />
                </span>
              </Disclosure.Button>

              <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                <AssetInfo item={item}/>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
};

export default DisclosureModals;
