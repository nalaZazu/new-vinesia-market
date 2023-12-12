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
      <div className="flex">
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
            className="fixed top-0 left-0 z-40 w-48 h-screen transition-transform  sm:translate-x-0 bg-themegray  bg-secondary"
            aria-label="Sidebar"
          >
            <ul className="space-y-4 font-medium">
              <li className="flex gap-20 space-x-2 mt-5 ml-3">
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
                const { id, name, href } = item;
                return (
                  <Link href={href} key={id}>
                    <li
                      className={`${
                        name == "Start"
                          ? "text-primary-dark font-semibold border-b-orange-50  border-0 border-b-2 w-16"
                          : ""
                      } py-4 mx-2 text-primary`}
                    >
                      {name}
                    </li>
                  </Link>
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
