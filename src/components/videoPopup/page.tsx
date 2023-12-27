"use client";
import React from "react";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Xmark } from "../../assets/icons/Icons";
export default function VideoPopup({
  open = false,
  setOpen,
  link = "https://www.youtube.com/embed/iu2C7AeIqac?si=m_dZQecmVZYzo6MU",
}: {
  open?: any;
  setOpen?: any;
  link?: any;
}) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative w-full max-w-3xl xl:max-w-7xl lg:max-w-5xl md:max-w-2xl sm:max-w-xl lg:h-[600px] md:h-[400px] sm:h-[400px] transform overflow-hidden rounded-lg bg-transparent text-start shadow-xl transition-all">
                <div className="">
                  <div
                    className="flex justify-end items-center cursor-pointer p-4"
                    onClick={setOpen}
                  >
                    <div></div>
                    <div className="w-8 h-8  rounded-full  border-2 border-primary">
                      <span className="mx-auto">
                        <Xmark />
                      </span>
                    </div>
                  </div>

                  <div className="sm:flex sm:items-start">
                    <iframe
                      className=" w-full lg:h-[600px] md:h-[400px] sm:h-[400px]"
                      src={link}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    ></iframe>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
