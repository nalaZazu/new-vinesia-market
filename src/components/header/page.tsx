"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/icons/logo1.svg";
import UserDropDown from "../../common/UserDropDown";
import { menuBar } from "../../constants/navigate";
import { usePathname } from "next/navigation";
import { CartIcon, SearchIcon } from "@/assets/icons/Icons";
import local from "next/font/local";
import SidePannel from "./sidepannel/page";

const canela = local({
  src: "../../../public/fonts/canelatext-black.woff2",
  variable: "--font-canela",
});
export default function Header() {
  const pathName = usePathname();

  return (
    <>
      <style jsx global>{`
        :root {
          --canela-font: ${canela.style.fontFamily};
        }
      `}</style>
      <div className=" bg-transparent z-10">
        <nav className="px-6">
          <div className="grid grid-cols-12 justify-between items-center">
            {/* topbar start */}
            <div className="md:flex  hidden items-center space-x-4 lg:space-x-8 md:col-span-5">
              <Link href="#">
                <span
                  className={`hidden md:block py-7 ${
                    pathName === "/" ? "text-orange-100" : "text-stone-600"
                  } text-base  tracking-tight font-semibold  border-b-orange-700 border-0 border-b-2`}
                >
                  Vinesia Story
                </span>
              </Link>
              <Link href="/">
                <span
                  className={` hidden md:block py-7 text-orange-100 text-base font-normal tracking-tight  ${
                    pathName === "/" ? "text-orange-100" : "text-stone-600"
                  } `}
                >
                  Vinesia Marketplace
                </span>
              </Link>
            </div>

            <div className=" text-2xl lg:text-4xl font-bold col-span-2 md:text-center py-5">
              <div className="lg:hidden">
                <div className="block lg:hidden">
                  {" "}
                  <SidePannel />
                </div>
              </div>
              <Link href="/">
                <Image
                  src={logo}
                  className="md:mx-auto"
                  alt="Picture of the author"
                />
              </Link>
            </div>

            <div className="flex items-center gap-5 md:col-span-5 col-span-10 ms-auto">
              {/* Mobile Navbar (Hidden on Desktop)  */}
              <div className="hidden md:block">
                <div
                  className={`w-10 h-10 rounded-full border  border-opacity-20 justify-center items-center gap-2.5 inline-flex   ${
                    pathName == "/" ? "border-white" : "border-stone-800"
                  } `}
                >
                  <SearchIcon fill={pathName == "/" ? "white" : "#3a2824"} />
                </div>
              </div>
              <div>
                <UserDropDown />
              </div>

              <div
                className={`w-10 h-10 rounded-full border border-opacity-20 justify-center items-center gap-2.5 inline-flex  ${
                  pathName == "/" ? "border-white" : "border-stone-800 text-"
                }`}
              >
                <CartIcon fill={pathName == "/" ? "white" : "#3a2824"} />
              </div>
            </div>
            
          </div>
        </nav>
        <hr
          className={`${
            pathName == "/" ? "opacity-20" : "border-stone-400 hidden md:block"
          }`}
        />
        {/* Navbar */}
        <nav
          className={`text-orange-100 text-base font-normal tracking-tight ${
            pathName == "/" ? "text-orange-100" : "text-stone-600"
          } `}
        >
          <div className="container mx-auto flex justify-center items-center px-4">
            <ul className="hidden md:flex lg:gap-14 md:gap-4">
              {menuBar?.map((item: any) => {
                const { id, name, href } = item;
                return (
                  <Link href={href} key={id}>
                    <li
                      className={`${
                        name == "Start"
                          ? "text-orange-700 font-semibold border-b-orange-700 border-0 border-b-2"
                          : ""
                      } py-4`}
                    >
                      {name}
                    </li>
                  </Link>
                );
              })}
            </ul>

            {/* Mobile Navbar (Hidden on Desktop)  */}
            {/* <div className="lg:hidden">
              <div className="block lg:hidden">
                {" "}
                <SidePannel />
              </div>
            </div> */}
          </div>
        </nav>
        <hr
          className={`${
            pathName == "/" ? "opacity-20" : "border-stone-400 hidden md:block"
          }`}
        />
      </div>
    </>
  );
}
