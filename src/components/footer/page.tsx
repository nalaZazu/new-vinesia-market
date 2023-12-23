import React from "react";
import Image from "next/image";
import logo1 from "../../assets/icons/logo1.svg";
import Link from "next/link";
import facebook from "../../assets/icons/facebook.svg";
import twitter from "../../assets/icons/TwitterX.svg";
import youtube from "../../assets/icons/youtube.svg";
import instagram from "../../assets/icons/instagram.svg";
import linkdin from "../../assets/icons/linkdeIn.svg";
import { FooterNavigate, FooterNavigateTwo } from "@/constants/footernavigate";
import envelope from "../../assets/icons/envelope.svg";
import strip from "../../assets/icons/Stripe.svg";
import Gpay from "../../assets/icons/GooglePay.svg";
import applePay from "../../assets/icons/ApplePay.svg";
import visa from "../../assets/icons/visa-logo.svg";
import master from "../../assets/icons/Mastercard.svg";
import { Facebook, LinkdeIn, Twitter } from "@/assets/icons/Icons";
export default function Footer() {
  return (
    <React.Fragment>
       <div className="bg-[#2F222B] ">
      <footer className=" text-center text-neutral-600     lg:text-start">
        <div className="container mx-auto md:flex md:justify-center py-[30px]     items-center gap-6  ">
          <div>
            <span>appreciating your wine</span>
          </div>
          <div className="">
            <Link href="/">
              <Image
                src={logo1}
                alt="Picture of the author"
                width={40}
                height={40}
              />
            </Link>
          </div>
          <div>
            <span>guarding its emotions</span>
          </div>
        </div>
        <div className="border-b  border-white border-opacity-20 " />

        {/* <!-- Main container div: holds the entire content of the footer, including four sections (TW elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. --> */}
        <div className="container mx-auto pt-12 pb-12 px-4">
          <div className=" py-10 text-center md:text-start">
            <div className="grid md:gap-28 gap-16 grid-cols-1 sm:flex">
              {/* <!-- Useful links section --> */}
              <div className="  sm:col-span-1">
                <h6 className="mb-4 font-albertsans flex justify-center md:justify-start text-white text-xs font-normal uppercase leading-[18px] tracking-wider">
                  About Vinesia
                </h6>
                {FooterNavigate?.map((reg: any) => {
                  const { id, title, href } = reg;
                  return (
                    <p className="mb-4" key={id}>
                      <Link
                        href={href}
                        className="text-zinc-500 text-base font-normal leading-snug"
                      >
                        {title}
                      </Link>
                    </p>
                  );
                })}
              </div>
              {/* <!-- Useful links section --> */}
              <div className=" sm:col-span-1">
                <h6 className="mb-4 flex font-albertsans justify-center md:justify-start text-white text-xs font-normal uppercase leading-[18px] tracking-wider">
                  Investments
                </h6>
                {FooterNavigateTwo?.map((item: any) => {
                  const { id, title, href } = item;
                  return (
                    <p className="mb-4" key={id}>
                      <Link
                        href={href}
                        className="text-zinc-500 text-base font-normal leading-snug0"
                      >
                        {title}
                      </Link>
                    </p>
                  );
                })}
              </div>
              {/* <!-- TW elements section --> */}
              <div className=" sm:col-span-2 col-span-1 max-w-[310px]">
                <h6 className="mb-4 font-albertsans flex items-center justify-center uppercase md:justify-start text-white text-xs font-normal leading-[18px] tracking-wider">
                  Want to know More?
                </h6>
                <p className=" pe-0 md:pe-14">
                  Ask about wine investing. <br/>We answer withing 24h, during business days
                </p>
                <div className="flex gap-3 mt-2 md:justify-start justify-center">
                  <span>
                    <Image src={envelope} alt="envelope@" />
                  </span>
                  <span className="text-center text-white text-base font-normal   leading-snug   border-b border-white border-opacity-20">
                    contact@vinesia.com
                  </span>
                </div>
              </div>
              {/* <!-- Products section --> */}
              {/* <div className=" sm:col-span-2 col-span-1 max-w-[303px]">
                <p className="mb-4 flex justify-center uppercase md:justify-start   text-neutral-300 text-base font-normal  leading-snug">
                  Share info on your investment, make connections
                </p>
                <button className="px-8 py-[22px] bg-white rounded-[48px] justify-center items-center gap-3 inline-flex text-orange-700 text-xs">
                  JOIN OUR COMMUNITY
                </button>
              </div> */}
            </div>
          </div>
          <hr className="border-b  border-white border-opacity-20" />
          {/* here is langugae and other icon */}
          <div className="pt-12 md:px-0 px-4 flex flex-wrap md:justify-between justify-center">
            <div className="flex flex-wrap flex-col">
              <span>Other languages</span>
              <span className="pt-4">FR | GER | ENG | CHN </span>
            </div>
            <div className="md:border-r-2    border-white border-opacity-20  " />
            <div className="md:pt-0 pt-4">
              <span>Follow us</span>
              <div className="flex justify-center   items-center gap-[10px] pt-[10px]">
                <Link href="#" className="p-2">
                  <Facebook fill="#ACA7AA" />
                </Link>
                <Link href="#" className="p-2">
                  <LinkdeIn fill="#ACA7AA " />

                  {/* <Image src={linkdin} alt="twitter" className="w-4" /> */}
                </Link>
                <Link href="#" className="p-2">
                  <Twitter fill="#ACA7AA" />
                </Link>

                <Link href="#" className="p-2">
                  <Image src={instagram} alt="twitter" className="w-4" />
                </Link>
                <Link href="#" className="p-2">
                  <Image src={youtube} alt="twitter" className="w-4" />
                </Link>
              </div>
            </div>
          </div>
          {/* <!--Copyright section--> */}
        </div>
        <div className="flex  items-center sm:justify-center bg-[#1C141A] text-white p-2 lg:justify-between">
          <div className=" container mx-auto flex-wrap  flex md:justify-between justify-center items-center">
            <div className="md:mr-12 ">
              <span className="text-neutral-400 text-xs font-normal  leading-[18px]">
                Copyright © 2023 Vinesia. All Rights Reserved
              </span>
            </div>
            <div className=" ">
              <div className="flex justify-center items-center gap-[10px] pt-[10px]">
                <Link href="#" className="p-2">
                  <Image src={strip} alt="facebook" />
                </Link>
                <Link href="#" className="p-2">
                  <Image src={Gpay} alt="twitter" />
                </Link>
                <Link href="#" className="p-2">
                  <Image src={applePay} alt="twitter" />
                </Link>

                <Link href="#" className="p-2">
                  <Image src={visa} alt="twitter" />
                </Link>
                <Link href="#" className="p-2">
                  <Image src={master} alt="twitter" />
                </Link>
              </div>
            </div>
            <div className="md:pt-0 pt-4 ">
              <div className=" md:mx-0 mx-4 md:text-right text-neutral-400 text-xs font-normal  leading-[18px] md:divide-x  flex gap-4 flex-wrap  justify-center">
                <div>
                  <Link href="/"> Terms & conditions</Link>
                </div>
                <div className="ps-4">
                  <Link href="/">Privacy Policy</Link>
                </div>
                <div className="ps-4">
                  <Link href="/">Cookie Policy</Link>
                </div>
                <div className="ps-4">
                  <Link href="/">Disclaimer</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>


    </React.Fragment>
   
  );
}
