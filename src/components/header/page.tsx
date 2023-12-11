"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/icons/logo1.svg";
import { usePathname } from "next/navigation";
import { CartIcon, SearchIcon } from "@/assets/icons/Icons";
import local from "next/font/local";
import SidePannel from "./sidepannel/page";
import { UserIcon } from "@/assets/icons/Icons";
import { MenuItem, menuBar as menuItems } from "@/constants/navigate";

const canela = local({
  src: "../../../public/fonts/canelatext-black.woff2",
  variable: "--font-canela",
});


const themes = {
  Light: {
    textClass: "text-stone-600",
    underlineClass: "border-b-[#BF4D20]",
    selectedClass: "border-b-2 font-semibold border-b-[#BF4D20]",
    hr: "border-stone-400"
  },
  Dark: {
    textClass: "text-orange-100",
    underlineClass: "border-b-[#CC714D]",
    selectedClass: "border-b-2 font-semibold border-b-[#CC714D]",
    hr: "opacity-20"
  }
}

const getTopMenuItem = (pathName: string) => {
  for (let item of menuItems) {
    for (let subItem of item.items ?? []) {
      if (subItem.href === pathName) {
        return item
      }
    }
  }

  return menuItems[0]
}

const getMenuItem = (pathName: string) => {
  for (let item of menuItems) {
    for (let subItem of item.items ?? []) {
      if (subItem.href === pathName) {
        return subItem
      }
    }
  }

  return menuItems[0].items[0]
}

const isDark = (pathName: string) => pathName === "/" ||
  pathName === "/signup" ||
  pathName === "/wine&art"

const getTheme = (pathName: string) => isDark(pathName) ? themes.Dark : themes.Light

export default function Header() {
  const pathName = usePathname();

  const [topSelected, setTopSelected] = useState(getTopMenuItem(pathName))
  const [selected, setSelected] = useState(getMenuItem(pathName))

  const [theme, setTheme] = useState(getTheme(pathName))

  useEffect(() => {
    setTheme(getTheme(pathName))
    setTopSelected(getTopMenuItem(pathName))
    setSelected(getMenuItem(pathName))

  }, [pathName]);

  function select(item: MenuItem) {
    setTopSelected(item)
    // setMenuItems(item.items)
  }

  const Hr = () => <hr className={`hidden md:block ${theme.hr}`} />

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
              {menuItems.map((x) => <div key={x.id} onClick={() => select(x)}>
                <span
                  className={`hidden md:block py-7 text-base tracking-tight border-0 ${theme.textClass} ${x.id === topSelected.id ? theme.selectedClass : ''}`}
                >
                  {x.name}
                </span>
              </div>
              )}
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
                  className={`w-10 h-10 rounded-full border  border-opacity-20 justify-center items-center gap-2.5 inline-flex   ${pathName == "/" ||
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

              {/* user Icon */}
              <div
                className={`w-10 h-10 rounded-full border  border-opacity-20 justify-center items-center gap-2.5 inline-flex   ${pathName == "/" ||
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
              {/* Cart Icon */}
              <div
                className={`w-10 h-10 rounded-full border border-opacity-20 justify-center items-center gap-2.5 inline-flex  ${pathName == "/" ||
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
        <Hr />

        {/* Navbar */}
        <nav
          className={`text-orange-100 text-base font-normal tracking-tight ${theme.textClass} `}
        >
          <div className="container mx-auto flex justify-center items-center px-4">
            <ul className="hidden md:flex lg:gap-14 md:gap-4">
              {topSelected.items?.map((item: any) => {
                const { id, name, href } = item;
                return (
                  <Link href={href} key={id}>
                    <li className={`py-4 ${selected === item ? theme.selectedClass : ''}`}>{name}</li>
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
        <Hr />
      </div>
    </>
  );
}
