"use client";
import React from "react";
// import Image from "next/image";
import { Fragment } from "react";
// import Appactivity from "@/components/charts/page";
import { Dialog, Transition } from "@headlessui/react";

export default function ModalContainer({
  children,
  visible = false,
  setVisible,
  modalClass,
  backgroundClass,
  isCloseBtn = true,
  title,
}: {
  children?: any;
  visible: any;
  setVisible: any;
  modalClass?: any;
  isCloseBtn?: any;
  title?: any;
  backgroundClass?: any;
}) {
  return (
    <>
      <Transition.Root show={visible} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          // initialFocus={cancelButtonRef}
          onClose={() => setVisible(false)}
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
            <div
              className={`fixed inset-0 transition-opacity   ${backgroundClass}`}
            />
            {/* bg-zinc-800 bg-opacity-95 */}
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
                <Dialog.Panel
                  className={`relative max-w-[1244px] w-full mx-auto lg:h-auto md:h-[600px] sm:h-full transform overflow-hidden bg-[#F3E8CF] text-left shadow-xl transition-all ${modalClass} `}
                >
                  {isCloseBtn && (
                    <div className=" flex justify-between p-4 ">
                      <h3 className="text-black text-4xl font-light leading-[44px]">
                        {title}
                      </h3>
                      <button onClick={() => setVisible(false)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="#BF4D20"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  )}
                  {children}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
