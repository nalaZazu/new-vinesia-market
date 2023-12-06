"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const VerticalBreadCrumb = () => {
  const pathname = usePathname();
  return (
    <React.Fragment>
      {/* <nav
        className="flex absolute top-0 bottom-0 -rotate-90 -left-40"
        aria-label="Breadcrumb"
      >
        <ol className="container mx-auto flex flex-wrap gap-3 px-4 items-center">
          <li className="inline-flex items-center">
            <Link
              href="#"
              className="text-stone-600 text-xs font-normal leading-3"
            >
              vinesia marketplace
            </Link>
          </li>
          <li className="hidden md:block lg:block  text-xs font-normal">/</li>
          <li>
            <div className="flex items-center">
              <Link
                href="#"
                className=" text-stone-500 text-xs font-normal leading-3"
              >
                home page
              </Link>
            </div>
          </li>
          <li className="hidden md:block lg:block text-xs font-normal">/</li>
          <li aria-current="page">
            <div className="flex items-center">
              <span className=" text-stone-500 text-xs font-normal leading-3">
                winery
              </span>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <span className=" text-stone-500 text-xs font-normal leading-3">
                jerome galeyrand
              </span>
            </div>
          </li>
        </ol>
      </nav> */}
      <nav
        className="flex absolute top-0 bottom-0 -rotate-90 -left-28"
        aria-label="Breadcrumb"
      >
        <ol className="container mx-auto flex flex-wrap gap-3 px-4 items-center">
          <li className="inline-flex items-center">
            <Link
              href="#"
              className={` text-xs font-normal leading-3 ${
                pathname === "/reso" ? "text-stone-400" : "text-stone-600"
              }`}
            >
              vinesia marketplace
            </Link>
          </li>
          <li
            className={`hidden md:block lg:block  text-xs font-normal  ${
              pathname === "/reso"
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
                  pathname === "/reso" ? "text-stone-400 " : "text-stone-600"
                }`}
              >
                home page
              </Link>
            </div>
          </li>
          <li
            className={`hidden md:block lg:block  text-xs font-normal  ${
              pathname === "/reso"
                ? "text-orange-700 text-opacity-20  leading-3 "
                : ""
            }`}
          >
            /
          </li>
          <li>
            <Link
              href="#"
              className={` text-xs font-normal leading-3 ${
                pathname === "/reso" ? "text-stone-400" : "text-stone-600"
              }`}
            >
              active{" "}
            </Link>
          </li>
          <li
            className={`hidden md:block lg:block  text-xs font-normal  ${
              pathname === "/reso"
                ? "text-orange-700 text-opacity-20 leading-3"
                : ""
            }`}
          >
            /
          </li>
          <li aria-current="page">
            <Link
              href="#"
              className={` text-xs font-normal leading-3 ${
                pathname === "/reso" ? "text-stone-400 " : "text-stone-600"
              }`}
            >
              {pathname.split("/")}
            </Link>
          </li>
        </ol>
      </nav>
    </React.Fragment>
  );
};

export default VerticalBreadCrumb;
