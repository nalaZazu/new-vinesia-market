"use client";
import { Disclosure } from "@headlessui/react";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import React from "react";

export default function Accordion() {
  return (
    <div>
      <Disclosure>
        {({ open }) => (
          <>
            <div className="p-6">
              <Disclosure.Button
                className={`flex w-full justify-between`}
              >
                <div className="flex w-full flex-wrap justify-between items-center">
                  <div className=" text-start">
                    <button className="text-zinc-800 text-lg font-semibold leading-relaxed">
                      Legal information
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
                <div className="pt-8">
                  <p>
                    You are purchasing a digital wine asset. You will need to be
                    in full compliance of your jurisdiction to receive the
                    asset.
                  </p>

                  <ul>
                    <li>IP of this product remains with the Brand.</li>
                  </ul>
                </div>
              </Disclosure.Panel>
            </div>
          </>
        )}
      </Disclosure>
    </div>
  );
}
