"use client";
import React from "react";
import Image from "next/image";
import { Menu, Transition } from "@headlessui/react";
import Account from "../assets/icons/account.svg";
import { usePathname } from "next/navigation";
import { UserIcon } from "@/assets/icons/Icons";
// import { Fragment, useEffect, useRef, useState } from "react";
// import { ChevronDownIcon } from "@heroicons/react/20/solid";

// import { useDispatch, useSelector } from "react-redux";
// import { logoutAction } from "@/redux/account";

// import arrowTray from "../assets/icons/log-in.svg";
// import { handleAllModals } from "@/redux/modalVisibility";

export default function UserDropDown() {
  const pathName = usePathname();

  console.log("pathName ", pathName);

  //   const dispatch = useDispatch();
  //   const isAuthenticted = useSelector<any>(
  //     (state) => state?.account?.isAuthenticated
  //   );
  //   console.log("is Authent", isAuthenticted);
  //   const handleModal = () => {
  //     dispatch(handleAllModals({ loginModal: { isVisible: true } }));
  //   };
  return (
    <div className=" flex justify-center">
      {/* {isAuthenticted ? ( */}
      <Menu as="div" className="relative inline-block text-left items-center">
        {/* <div>
          <Menu.Button className="inline-flex w-full justify-center items-center rounded-md bg-black/20 px-4 py-2   hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75  text-neutral-900 text-base font-medium  leading-7">
            User Name
            <ChevronDownIcon
              className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div> */}
        {/* <Transition>
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-violet-500 text-black" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-[#820a00]`}
                  >
                    Profile
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    //   onClick={() => dispatch(logoutAction())}
                    className={`${
                      active ? "bg-violet-500 text-black" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Logout
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition> */}
      </Menu>
      {/* ) : ( */}
      <div className="flex gap-2">
        <button
          className={`w-10 h-10 rounded-full border border-opacity-20 justify-center items-center gap-2.5 inline-flex  ${
            pathName == "/" ? "border-white" : "border-stone-800 text-"
          }`}
        >
          <UserIcon fill={pathName == "/" ? "white" : "#3a2824"} />
        </button>
      </div>
      {/* )} */}
    </div>
  );
}
