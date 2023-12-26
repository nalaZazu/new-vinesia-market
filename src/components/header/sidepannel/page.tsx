"use client";
import { menuBar } from "@/constants/navigate";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../assets/icons/logo1.svg";
import xmark from "../../../assets/icons/x-mark.svg";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

const SidePannel = ({ isDark }: { isDark?: Boolean }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<any>(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const pathname = usePathname();

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
            className="fixed top-0 left-0 z-40 max-w-80 w-full p-4 h-screen transition-transform  sm:translate-x-0  bg-[rgba(47,34,43,0.99)]"
            aria-label="Sidebar"
          >
            <ul className="space-y-4 font-medium">
              <li className="flex justify-between space-x-2 mt-5 ml-3">
                <Image
                  src={logo}
                  alt="Picture of the author"
                  width={40}
                  height={40}
                />
                <Image
                  src={xmark}
                  alt="Picture of the author"
                  width={15}
                  height={15}
                  onClick={toggleSidebar}
                />
              </li>
              <hr className="my-4  mx-2 text-secondary  font-bold h-px border border-bg-secondary-700 " />
              {menuBar?.map((item: any) => {
                const { id, name, href, items } = item;
                return (
                  <div key={id}>
                    <Link href={href || "/"}>
                      <li
                        className={`${
                          name == "Start"
                            ? " font-semibold border-b-orange-50  border-0 border-b-2 w-16"
                            : ""
                        } py-4 text-white`}
                      >
                        {name}
                      </li>
                    </Link>
                    <div className="flex flex-col gap-5">
                      {items?.map((item: any, i: any) => {
                        return (
                          <Link
                            href={item?.href}
                            key={id + "-" + i}
                            className="w-72 h-6 justify-between items-start inline-flex"
                          >
                            <div className="text-neutral-400 text-base font-normal leading-snug">
                              {item?.name}
                            </div>
                            <div className="w-6 h-6 justify-center items-center flex">
                              <div className="w-6 h-6 relative"></div>
                            </div>
                          </Link>
                        );
                      })}
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
