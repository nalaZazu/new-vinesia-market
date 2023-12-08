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
import { UserIcon } from "@/assets/icons/Icons";

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
        <nav className="px-6 container mx-auto">
          <div className="grid grid-cols-3 md:grid-cols-12 justify-between items-center">
            {/* topbar start */}
            <div className="md:flex  hidden items-center space-x-4 lg:space-x-8 md:col-span-5">
              <Link href="#">
                <span
                  className={`hidden md:block py-7 ${
                    pathName === "/" ||
                    pathName === "/signup" ||
                    pathName === "/wine&art"
                      ? "text-orange-100 border-b-[#CC714D] "
                      : "text-stone-600 border-b-[#BF4D20]"
                  } text-base  tracking-tight font-semibold  border-0 border-b-2`}
                >
                  Vinesia Story
                </span>
              </Link>
              <Link href="/">
                <span
                  className={` hidden md:block py-7 text-orange-100 text-base font-normal tracking-tight  ${
                    pathName === "/" ||
                    pathName === "/signup" ||
                    pathName === "/wine&art"
                      ? "text-orange-100"
                      : "text-stone-600"
                  } `}
                >
                  Vinesia Marketplace
                </span>
              </Link>
            </div>
            {/* Mobile Navbar (Hidden on Desktop)  */}

            <div className="md:hidden">
              <div className="block md:hidden">
                <SidePannel />
              </div>
            </div>
            <div className=" text-2xl lg:text-4xl font-bold lg:col-span-2 text-center py-5">
              <Link href="/">
                <Image
                  src={logo}
                  className="mx-auto"
                  alt="Picture of the author"
                />
              </Link>
            </div>
            <div className="flex items-center gap-5 md:col-span-5 ms-auto">
              <div className="hidden md:block">
                <div
                  className={`w-10 h-10 rounded-full border  border-opacity-20 justify-center items-center gap-2.5 inline-flex   ${
                    pathName == "/" ||
                    pathName == "/signup" ||
                    pathName === "/wine&art"
                      ? "border-white   "
                      : "border-stone-800"
                  } `}
                >
                  <SearchIcon
                    fill={
                      pathName == "/" || pathName == "/signup"
                        ? "white"
                        : "#3a2824"
                    }
                  />
                </div>
              </div>
              <div
                className={`w-10 h-10 rounded-full border  border-opacity-20 justify-center items-center gap-2.5 inline-flex   ${
                  pathName == "/" ||
                  pathName == "/signup" ||
                  pathName === "/wine&art"
                    ? "border-white"
                    : "border-stone-800"
                } `}
              >
                <UserIcon
                  fill={
                    pathName == "/" ||
                    pathName == "/signup" ||
                    pathName === "/wine&art"
                      ? "white"
                      : "#3a2824"
                  }
                />
              </div>

              <div
                className={`w-10 h-10 rounded-full border border-opacity-20 justify-center items-center gap-2.5 inline-flex  ${
                  pathName == "/" ||
                  pathName == "/signup" ||
                  pathName === "/wine&art"
                    ? "border-white"
                    : "border-stone-800 text-"
                }`}
              >
                <CartIcon
                  fill={
                    pathName == "/" ||
                    pathName == "/signup" ||
                    pathName === "/wine&art"
                      ? "white"
                      : "#3a2824"
                  }
                />
              </div>
            </div>
          </div>
        </nav>
        <hr
          className={` hidden md:block ${
            pathName == "/" || pathName == "/signup" || pathName === "/wine&art"
              ? "opacity-20"
              : "border-stone-400"
          }`}
        />
        {/* Navbar */}
        <nav
          className={`text-orange-100 text-base font-normal tracking-tight ${
            pathName == "/" || pathName == "/signup" || pathName === "/wine&art"
              ? "text-orange-100"
              : "text-stone-600"
          } `}
        >
          <div className="container mx-auto flex justify-center items-center px-4">
            <ul className="hidden md:flex lg:gap-14 md:gap-4">
              {menuBar?.map((item: any) => {
                const { id, name, href } = item;
                return (
                  <Link href={href} key={id}>
                    {pathName == "/" ||
                    pathName == "/signup" ||
                    pathName === "/wine&art" ? (
                      <li
                        className={`${
                          name == "Start"
                            ? "  font-semibold border-b-[#CC714D] border-0 border-b-2  text-base   tracking-tight"
                            : ""
                        } py-4`}
                      >
                        {name}
                      </li>
                    ) : (
                      <li
                        className={`${
                          name == "Start"
                            ? "  font-semibold text-orange-700 border-b-orange-700 border-0 border-b-2  text-base   tracking-tight"
                            : ""
                        } py-4`}
                      >
                        {" "}
                        {name}
                      </li>
                    )}
                  </Link>
                );
              })}
            </ul>
          </div>
        </nav>

        {pathName === "/" ? (
          <div className="md:hidden block py-4 px-6">
            <form>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <SearchIcon fill={pathName == "/" ? "white" : "#3a2824"} />
                </div>

                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 ps-10 text-sm  outline-none  rounded-full border border-white bg-orange-100 bg-transparent "
                  placeholder="Search"
                />
              </div>
            </form>
          </div>
        ) : (
          <div className="md:hidden block py-4 px-6">
            <form>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <SearchIcon fill={pathName == "/" ? "white" : "#3a2824"} />
                </div>

                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 ps-10 text-sm  outline-none bg-orange-100  focus:ring-stone-500 focus:border-stone-500   text-stone-500    rounded-full border border-[#BCA291] "
                  placeholder="Search "
                />
              </div>
            </form>
          </div>
        )}
        <hr
          className={` ${pathName == "/" ? "opacity-20" : "border-stone-400 "}`}
        />
      </div>
    </>
  );
}
