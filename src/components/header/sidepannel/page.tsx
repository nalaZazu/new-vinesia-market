"use client";
import { menuBar, sidebarMenu } from "@/constants/navigate";
import Image from "next/image";
import Link from "next/link";
import xmark from "../../../assets/icons/x-mark.svg";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowLongRight, NextIcon2 } from "@/assets/icons/Icons";
import { useRouter } from "next/navigation";

const SidePannel = ({ isDark }: { isDark?: Boolean }) => {
  const { push } = useRouter();
  const [isSidebarOpen, setSidebarOpen] = useState<any>(false);
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleNavigate = (href: any) => {
    push(href);
    toggleSidebar();
  };
  return (
    <>
      <div className="flex bg-[rgba(47, 34, 43, 0.99)]">
        <button
          onClick={toggleSidebar}
          data-drawer-target="default-sidebar"
          data-drawer-toggle="default-sidebar"
          aria-controls="default-sidebar"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke={`${isDark ? "white" : "#BF4D20"}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
        {isSidebarOpen && (
          <div
            id="default-sidebar"
            className="fixed top-0 left-0 z-40 max-w-96 w-full py-12 px-4 h-full overflow-y-auto  transition-transform transform duration-300 ease-in-out  sm:translate-x-0  bg-[rgba(47,34,43,0.99)]"
            aria-label="Sidebar"
          >
            <ul className="  font-medium">
              <li className="flex justify-between space-x-2 mt-5 ml-3 mb-9">
                <h2 className="text-white text-4xl font-normal  leading-[42px]">
                  Menu
                </h2>
                <Image
                  src={xmark}
                  alt="Picture of the author"
                  width={25}
                  height={25}
                  onClick={toggleSidebar}
                  className=" cursor-pointer"
                />
              </li>
              {menuBar?.map((item: any) => {
                const { id, name, href, items } = item;
                return (
                  <div key={id}>
                    <div
                      className=" cursor-pointer"
                      onClick={() => handleNavigate(href || "/")}
                    >
                      <li
                        className={`${
                          name == "Start"
                            ? " font-semibold border-b-orange-50  border-0 border-b-2 w-16"
                            : ""
                        } py-4 text-[#906447] `}
                      >
                        {name}
                      </li>
                    </div>

                    <div className="flex flex-col gap-5">
                      {items?.map((item: any, i: any) => {
                        return (
                          <div
                            onClick={() => handleNavigate(item?.href || "/")}
                            key={id + "-" + i}
                            className=" h-6 justify-between items-start flex cursor-pointer"
                          >
                            <div className="text-neutral-400 text-base font-normal leading-snug">
                              {item?.name}
                            </div>
                            <div className="w-4">
                              <NextIcon2 fill="#594E55" />
                            </div>
                            {/* <div className="w-6 h-6 justify-center items-center flex">
                              <div className="w-6 h-6 relative"></div>
                            </div> */}
                          </div>
                        );
                      })}
                      <hr className="border border-white border-opacity-20 my-8" />
                    </div>
                  </div>
                );
              })}

              {sidebarMenu?.map((item: any) => {
                const { id, name, href, items } = item;
                return (
                  <div key={id}>
                    <div
                    // onClick={() => handleNavigate(href || "/")}
                    // className=" cursor-pointer"
                    >
                      <li
                        className={`${
                          name == "Start"
                            ? " font-semibold border-b-orange-50  border-0 border-b-2 w-16"
                            : ""
                        } py-4 text-[#906447] `}
                      >
                        {name}
                      </li>
                    </div>

                    <div className="flex flex-col gap-5">
                      {items?.map((item: any, i: any) => {
                        return (
                          <div
                            onClick={() => handleNavigate(item.href || "/")}
                            key={id + "-" + i}
                            className=" h-6 justify-between items-start flex cursor-pointer"
                          >
                            <div className="text-neutral-400 text-base font-normal leading-snug">
                              {item?.name}
                            </div>
                            <div className="w-4">
                              <NextIcon2 fill="#594E55" />
                            </div>
                            {/* <div className="w-6 h-6 justify-center items-center flex">
                              <div className="w-6 h-6 relative"></div>
                            </div> */}
                          </div>
                        );
                      })}
                      {/* <hr className="border border-white border-opacity-20 my-8" /> */}
                    </div>
                  </div>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default SidePannel;
