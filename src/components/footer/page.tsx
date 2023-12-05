import React from "react";
import Image from "next/image";
import logo1 from "../../assets/icons/logo1.svg";
import { menuBar } from "../../constants/navigate";
import Link from "next/link";
import facebook from "../../assets/icons/facebook.svg";
import twitter from "../../assets/icons/twitter.svg";
import google from "../../assets/icons/googleplus.svg";
import instagram from "../../assets/icons/instagram.svg";
import linkdin from "../../assets/icons/linkdin.svg";
import { CaradRegion } from "../../constants/cardregion";

export default function Footer() {
  return (
    <div>
      <footer className=" mt-14 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
        {/* <!-- Main container div: holds the entire content of the footer, including four sections (TW elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. --> */}
        <div className="container mx-auto">
          <div className="mx-6 py-10 text-center md:text-left">
            <div className="grid gap-8 grid-cols-2 md:grid-cols-5">
              {/* <!-- TW elements section --> */}
              <div className=" col-span-2">
                <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                  <li className="flex gap-20 space-x-2 mt-5 ml-3 cursor-pointer">
                    <Link href="/">
                      <Image
                        src={logo1}
                        alt="Picture of the author"
                        width={40}
                        height={40}
                      />
                    </Link>
                  </li>
                </h6>
                <p className=" pe-0 md:pe-14">
                  appreciating your wine, guarding its emotions something about
                  technology, advantage of wine investments, unique buying and
                  reselling experience
                </p>
              </div>
              {/* <!-- Products section --> */}
              <div className="">
                <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                  Products
                </h6>
                {menuBar?.map((item: any) => {
                  const { id, name, href } = item;
                  return (
                    <p className="mb-4" key={id}>
                      <Link
                        href={href}
                        className="text-neutral-600 dark:text-neutral-200"
                      >
                        {name}
                      </Link>
                    </p>
                  );
                })}
              </div>
              {/* <!-- Useful links section --> */}
              <div className="">
                <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                  Useful links
                </h6>
                {CaradRegion?.map((reg: any) => {
                  const { id, name, href } = reg;
                  return (
                    <p className="mb-4" key={id}>
                      <Link
                        href={href}
                        className="text-neutral-600 dark:text-neutral-200"
                      >
                        {name}
                      </Link>
                    </p>
                  );
                })}
              </div>
              {/* <!-- Useful links section --> */}
              <div className="">
                <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                  Useful links
                </h6>
                {CaradRegion?.map((item: any) => {
                  const { id, name, href } = item;
                  return (
                    <p className="mb-4" key={id}>
                      <Link
                        href={href}
                        className="text-neutral-600 dark:text-neutral-200"
                      >
                        {name}
                      </Link>
                    </p>
                  );
                })}
              </div>
            </div>
          </div>

          {/* <!--Copyright section--> */}
        </div>
        <div className="flex items-center justify-center bg-gray-700 text-white p-2 lg:justify-between">
          <div className=" container mx-auto flex justify-between">
            <div className="mr-12 hidden lg:block">
              <span>© 2023 Copyright: Vinesia Marketplace</span>
            </div>
            {/* <!-- Social network icons container --> */}
            <div className="flex justify-center  items-center">
              <Link href="#" className="mr-6">
                <Image
                  src={facebook}
                  alt="facebook"
                  className="w-4 text-black"
                />
              </Link>
              <Link href="#" className="mr-6">
                <Image src={twitter} alt="twitter" className="w-4" />
              </Link>
              <Link href="#" className="mr-6">
                <Image src={google} alt="twitter" className="w-5" />
              </Link>
              <Link href="#" className="mr-6">
                <Image src={instagram} alt="twitter" className="w-4" />
              </Link>
              <Link href="#" className="mr-6">
                <Image src={linkdin} alt="twitter" className="w-4" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
