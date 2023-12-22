"use client";
import { Disclosure } from "@headlessui/react";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import React from "react";

export default function Accordion({ data }: { data: any }) {
  const { title, description } = data;
  return (
    <div>
      <Disclosure>
        {({ open }) => (
          <>
            <div className="p-6">
              <Disclosure.Button className={`flex w-full justify-between`}>
                <div className="flex w-full flex-wrap justify-between items-center">
                  <div className=" text-start">
                    <button className="text-zinc-800 text-lg font-semibold leading-relaxed">
                      {title}
                    </button>
                  </div>
                  <div>
                    <ArrowUpRightIcon
                      className={` text-[#bf4d20] ${
                        open ? "" : "rotate-180 transform"
                      } h-6 w-6`}
                    />
                  </div>
                </div>
              </Disclosure.Button>
              <Disclosure.Panel>
                {description}
                {/* <div className="pt-8">
                  <p>
                    You are purchasing a digital wine asset. You will need to be
                    in full compliance of your jurisdiction to receive the
                    asset.
                  </p>

                  <ul className="list-disc ps-6 py-4">
                    <li>IP of this product remains with the Brand.</li>
                    <li>
                      This wine asset does not represent actual ownership in the
                      physical asset.
                    </li>
                    <li>
                      This wine asset represents right to apply for redemption
                      of the physical asset.
                    </li>
                  </ul>
                  <p>
                    Did you check if we ship to your country? Click Here to view
                    the list of countries.
                  </p>
                  <p>
                    For any questions or complications please reach out to
                    contact@vinesia.com
                  </p>
                </div> */}
              </Disclosure.Panel>
            </div>
          </>
        )}
      </Disclosure>
    </div>
  );
}
