"use client";
import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/icons/logo1.svg";
import { usePathname, useRouter } from "next/navigation";
import { CartIcon, SearchIcon } from "@/assets/icons/Icons";
import SidePannel from "./sidepannel/page";
import { UserIcon } from "@/assets/icons/Icons";
import { MenuItem, menuBar as menuItems } from "@/constants/navigate";
import { useWindowSize } from "@/hooks/useWindowSize";
import { useCart } from "@/context/cart";
import { useUser } from "@/context/user";
import { User } from "@/types/user.dto";

// const canela = local({
//   src: "../../../public/fonts/canelatext-black.woff2",
//   variable: "--font-canela",
// });

const themes = {
  Light: {
    textClass: "text-[#61423D]",
    underlineClass: "border-b-[#BF4D20]",
    selectedClass: "border-b-2 font-semibold border-b-[#BF4D20]",
    iconFill: "#3a2824",
    iconBorder: "border-stone-800",
    hr: "border-stone-800 border-opacity-20",
    border: "border-stone-800",
    activeTextClass: "text-[#BF4D20]",
  },
  Dark: {
    textClass: "text-[#F3E8CF]",
    underlineClass: "border-b-[#CC714D]",
    selectedClass: "border-b-2 font-semibold border-b-[#CC714D]",
    iconFill: "white",
    iconBorder: "border-white",
    hr: "opacity-20",
    border: "border-white",
    activeTextClass: "text-[#F3E8CF]",
  },
};

const getTopMenuItem = (pathName: string) => {
  for (let item of menuItems) {
    for (let subItem of item.items ?? []) {
      if (subItem.href === pathName) {
        return item;
      }
    }
  }

  return menuItems[1];
};

const getMenuItem = (pathName: string) => {
  for (let item of menuItems) {
    for (let subItem of item.items ?? []) {
      if (subItem.href === pathName) {
        return subItem;
      }
    }
  }

  return null;
  // return menuItems[1].items[0];
};

const isDark = (pathName: string, size: any) => {
  const width = size?.width;

  const dark =
    pathName === "/marketplace" ||
    ((width === undefined || width > 767) && pathName.startsWith("/signup")) ||
    pathName === "/wineart" ||
    pathName === "/wacollections" ||
    pathName === "/wineart" ||
    pathName === "/aboutus" ||
    pathName === "/performance" ||
    pathName === "/vinesia" ||
    pathName === "/wacollections/reso" ||
    pathName === "/limitedcollections" ||
    pathName === "/gifts";
  return dark;
};

const getTheme = (pathName: string, size: any) =>
  isDark(pathName, size) ? themes.Dark : themes.Light;

function initials(profile: User | null) {
  if (profile === null) {
    return "";
  } else {
    let res = "";
    if (profile?.firstName?.length > 0) {
      res += profile.firstName[0].toUpperCase();
    }
    if (profile?.lastName?.length > 0) {
      res += profile.lastName[0].toUpperCase();
    }

    if (res === "") res = "AN";

    return res;
  }
}

export default function Header() {
  const { cartItems } = useCart();
  const { profile } = useUser();
  const size = useWindowSize();
  const pathName = usePathname();
  const { push } = useRouter();
  // console.log("User Provider  Profile", profile);
  const [topSelected, setTopSelected] = useState(getTopMenuItem(pathName));
  const [selected, setSelected] = useState(getMenuItem(pathName));
  const [theme, setTheme] = useState(getTheme(pathName, size));

  useEffect(() => {
    setTheme(getTheme(pathName, size));
    setTopSelected(getTopMenuItem(pathName));
    setSelected(getMenuItem(pathName));
  }, [pathName, size]);

  function select(item: MenuItem) {
    setTopSelected(item);
    // setMenuItems(item.items)
  }

  const navUser = useCallback(() => {
    if (profile === null || profile === undefined) {
      push("/signup", { scroll: false });
    } else {
      push("/profile");
    }
  }, [profile, push]);

  const Hr = () => <hr className={`hidden md:block ${theme.hr}`} />;

  return (
    <>
      <div className=" bg-transparent z-10">
        <nav className="px-4 container mx-auto">
          <div className="grid grid-cols-3 md:grid-cols-12 justify-between items-center">
            {/* topbar start */}
            <div className="md:flex  hidden items-center space-x-4 lg:space-x-8 md:col-span-5">
              {menuItems.map((x, i) => (
                <Link key={i} href={x?.href || "/"}>
                  <div
                    className="cursor-pointer"
                    key={x.id}
                    onClick={() => select(x)}
                  >
                    <span
                      className={`hidden md:block py-7 text-base tracking-tight border-0 ${
                        theme.textClass
                      } ${x.id === topSelected.id ? theme.selectedClass : ""}`}
                    >
                      {x.name}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
            {/* Mobile Navbar (Hidden on Desktop)  */}

            <div className="md:hidden">
              <div className="block md:hidden">
                <SidePannel isDark={isDark(pathName, size)} />
              </div>
            </div>
            <div className=" text-2xl lg:text-4xl font-bold lg:col-span-2 text-center py-5">
              <Link href={topSelected?.href || "/"}>
                {" "}
                <Image
                  src={logo}
                  className="mx-auto"
                  alt="Picture of the author"
                />
              </Link>
            </div>

            {/* Menu Icons, Search, User, Cart  */}
            <div className="flex items-center gap-5 md:col-span-5 ms-auto">
              <div className="hidden md:block md:order-1">
                <div
                  className={`w-10 h-10 rounded-full border border-opacity-20 justify-center items-center gap-2.5 inline-flex ${theme.iconBorder}`}
                >
                  <SearchIcon fill={theme.iconFill} />
                </div>
              </div>
              {/* user Icon */}
              <div
                className={`cursor-pointer h-10 p-[11px] min-w-[40px] rounded-full border order-2 border-opacity-20 justify-center items-center gap-2.5 inline-flex ${theme.iconBorder}`}
                onClick={navUser}
              >
                <div className="hidden md:flex">
                  <UserIcon fill={theme.iconFill} />
                  {profile && (
                    <span className={`ml-2 ${theme.textClass}`}>
                      {" "}
                      Hi {profile?.firstName}
                    </span>
                  )}
                </div>
                <div className="md:hidden">
                  {initials(profile) === "" ? (
                    <UserIcon fill={theme.iconFill} />
                  ) : (
                    initials(profile)
                  )}
                </div>
              </div>

              <Link
                href="/cart"
                className={`w-10 h-10 relative rounded-full border md:order-3 order-1 border-opacity-20 justify-center items-center gap-2.5 inline-flex ${theme.iconBorder}`}
              >
                <CartIcon fill={theme.iconFill} />
                <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
                  {cartItems.length}
                </div>
              </Link>
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
                  <Link href={href || "/"} key={id}>
                    <li
                      className={`py-4 ${
                        selected === item
                          ? theme.selectedClass + " " + theme.activeTextClass
                          : theme.textClass
                      }`}
                    >
                      {name}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
        </nav>

        {pathName === "/" ? (
          <></>
        ) : (
          <></>
          // <div className="md:hidden block py-4 px-6">
          //   <form>
          //     <div className="relative">
          //       <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          //         <SearchIcon
          //           fill={isDark(pathName, size) ? "white" : "#3a2824"}
          //         />
          //       </div>

          //       <input
          //         type="search"
          //         id="default-search"
          //         className={`block w-full p-4 ps-10 text-sm  outline-none   focus:ring-stone-500 focus:border-stone-500   text-stone-500    rounded-full border  bg-transparent border-opacity-20 ${theme?.border} `}
          //         placeholder="Search "
          //       />
          //     </div>
          //   </form>
          // </div>
        )}
        <Hr />
        <hr className={`block md:hidden border-opacity-20 ${theme.border}`} />
      </div>
    </>
  );
}
