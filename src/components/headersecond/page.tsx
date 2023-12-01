import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/icons/logo1.svg";
import UserDropDown from "../../common/UserDropDown";
import { menuBar } from "../../constants/navigate";

export default function Headersecond() {
  return (
    <div className="  absolute right-0 left-0">
      <nav className="px-6 py-3">
        <div className="grid grid-cols-12 justify-between items-center">
          {/* topbar start */}
          <div className="md:flex  hidden items-center space-x-4 lg:space-x-8 md:col-span-5">
            <Link href="/">
              <span className=" hidden md:block text-primary-dark text-base font-normal  tracking-tight">
                Vinesia Story
              </span>
            </Link>

            <Link href="/">
              <span className=" hidden md:block  text-primary-dark text-base font-normal tracking-tight">
                Vinesia Marketplace
              </span>
            </Link>
          </div>

          <div className=" text-2xl lg:text-4xl font-bold col-span-2 md:text-center">
            <Link href="/">
              <Image
                src={logo}
                className="md:mx-auto"
                alt="Picture of the author"
              />
            </Link>
          </div>

          <div className="flex items-center gap-5 md:col-span-5 col-span-10 ms-auto">
            <div className="w-10 h-10 rounded-full border border-white border-opacity-20 justify-center items-center gap-2.5 inline-flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
            <div>
              <UserDropDown />
            </div>

            <div className="w-10 h-10 rounded-full border border-white border-opacity-20 justify-center items-center gap-2.5 inline-flex">
              <svg
                className=" w-4 h-5"
                viewBox="0 0 17 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Group">
                  <path
                    id="Path"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.40805 11.1796L2.87305 3.93359H15.499C16.15 3.93359 16.627 4.54459 16.469 5.17659L15.121 10.5686C14.916 11.3876 14.22 11.9896 13.38 12.0736L6.56405 12.7556C5.54805 12.8566 4.61905 12.1776 4.40805 11.1796Z"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Path_2"
                    d="M2.874 3.93359L2.224 0.933594H0.5"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Path_3"
                    d="M14.1093 16.2004C13.9073 16.2004 13.7433 16.3644 13.7453 16.5664C13.7453 16.7684 13.9093 16.9324 14.1113 16.9324C14.3133 16.9324 14.4773 16.7684 14.4773 16.5664C14.4763 16.3644 14.3123 16.2004 14.1093 16.2004"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Path_4"
                    d="M5.69773 16.2009C5.49573 16.2009 5.33173 16.3649 5.33373 16.5669C5.33173 16.7699 5.49673 16.9339 5.69873 16.9339C5.90073 16.9339 6.06473 16.7699 6.06473 16.5679C6.06473 16.3649 5.90073 16.2009 5.69773 16.2009"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </nav>
      <hr className="opacity-30" />
      {/* Navbar */}
      <nav className="py-4 text-primary text-base font-normal  tracking-tight">
        <div className="container mx-auto flex justify-center items-center px-4">
          <ul className="hidden lg:flex gap-14">
            {menuBar?.map((item: any) => {
              const { id, name, href } = item;
              return (
                <Link href={href} key={id}>
                  <li>{name}</li>
                </Link>
              );
            })}
          </ul>

          {/* Mobile Navbar (Hidden on Desktop)  */}
          <div className="lg:hidden">
            <div className="block lg:hidden">{/* <SidePannel /> */}</div>
          </div>
        </div>
      </nav>
      <hr className="opacity-30" />
    </div>
  );
}
