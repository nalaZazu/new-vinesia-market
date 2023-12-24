"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const VerticalBreadCrumb = () => {
  const pathname = usePathname();
  console.log(pathname, "pathname");
  return (
    <React.Fragment>
      <div className="md:block hidden">
        <nav
          className="flex absolute top-0 bottom-0 -rotate-90 -left-28 "
          aria-label="Breadcrumb"
        >
          <ol className="container mx-auto flex flex-wrap gap-3 px-4 items-center">
            <li className="inline-flex items-center">
              <Link
                href="#"
                className={` text-xs font-normal leading-3 ${
                  pathname === "/reso" || pathname === "/limitedcollections"
                    ? "text-stone-400"
                    : "text-stone-600"
                }`}
              >
                vinesia marketplace
              </Link>
            </li>
            <li
              className={`hidden md:block lg:block  text-xs font-normal  ${
                pathname === "/reso" || pathname === "/limitedcollections"
                  ? "text-orange-700 text-opacity-20  leading-3 "
                  : ""
              }`}
            >
              /
            </li>
            <li>
              <div className="flex items-center">
                <Link
                  href="#"
                  className={` text-xs font-normal leading-3 ${
                    pathname === "/reso" || pathname === "/limitedcollections"
                      ? "text-stone-400 "
                      : "text-stone-600"
                  }`}
                >
                  home page
                </Link>
              </div>
            </li>
            <li
              className={`hidden md:block lg:block  text-xs font-normal  ${
                pathname === "/reso" || pathname === "/limitedcollections"
                  ? "text-orange-700 text-opacity-20  leading-3 "
                  : ""
              }`}
            >
              /
            </li>
            {/* <li>
              <Link
                href="#"
                className={` text-xs font-normal leading-3 ${
                  pathname === "/reso" || pathname === "/limitedcollections"
                    ? "text-stone-400"
                    : "text-stone-600"
                }`}
              >
                active{" "}
              </Link>
            </li>
            <li
              className={`hidden md:block lg:block  text-xs font-normal  ${
                pathname === "/reso" || pathname === "/limitedcollections"
                  ? "text-orange-700 text-opacity-20 leading-3"
                  : ""
              }`}
            >
              /
            </li> */}
            <li aria-current="page">
              <Link
                href="#"
                className={` text-xs font-normal leading-3 ${
                  pathname === "/reso" || pathname === "/limitedcollections" 
                    ? "text-stone-400 "
                    : "text-stone-600"
                }`}
              >
                {pathname.split("/")}
              </Link>
            </li>
          </ol>
        </nav>
      </div>
      <div className="md:hidden block">
        <div className="container mx-auto pt-4 px-4">
          <ul className="flex gap-4 items-center">
            <li className="] text-xs font-normal   leading-[18px]">
              <Link
                href={` ${
                  pathname === "/regions" || pathname === "/wacollections" ? "text-[#CBACAB]" : " text-[#975958]" 
                
                }`}
              >
                home
              </Link>
            </li>

            <li className="text-[#975958]">/</li>
            <li className="text-[#615C51] text-xs font-normal font-['Albert Sans'] leading-[18px]">
              {/* {pathname.split("/ , 2")} */}
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default VerticalBreadCrumb;
