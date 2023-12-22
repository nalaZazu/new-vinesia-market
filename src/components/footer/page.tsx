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
    <div className="bg-[#2F222B]">
      <footer className=" text-center text-neutral-600     lg:text-start">
        <div className="container mx-auto flex justify-center py-[30px]     items-center gap-6  ">
          <div>
            <span>appreciating your wine</span>
          </div>
          <div>
            {" "}
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
        <div className="container mx-auto pt-12 pb-12">
          <div className="mx-6 py-10 text-center md:text-start">
            <div className="grid md:gap-28 gap-16 grid-cols-2 md:grid-cols-9">
              {/* <!-- Useful links section --> */}
              <div className="md:col-span-2 ">
                <h6 className="mb-4 flex justify-center  md:justify-start    text-white text-xs font-normal   uppercase leading-[18px] tracking-tight">
                  About Vinesia
                </h6>
                {FooterNavigate?.map((reg: any) => {
                  const { id, title, href } = reg;
                  return (
                    <p className="mb-4" key={id}>
                      <Link
                        href={href}
                        className="text-zinc-500 text-base font-normal  leading-snug border-b border-orange-700 border-opacity-20"
                      >
                        {title}
                      </Link>
                    </p>
                  );
                })}
              </div>
              {/* <!-- Useful links section --> */}
              <div className="md:col-span-2">
                <h6 className="mb-4 flex justify-center  md:justify-start   text-white text-xs font-normal   uppercase leading-[18px] tracking-tight">
                  Investments
                </h6>
                {FooterNavigateTwo?.map((item: any) => {
                  const { id, title, href } = item;
                  return (
                    <p className="mb-4" key={id}>
                      <Link
                        href={href}
                        className="text-zinc-500 text-base font-normal  leading-snug border-b border-orange-700 border-opacity-20"
                      >
                        {title}
                      </Link>
                    </p>
                  );
                })}
              </div>
              {/* <!-- TW elements section --> */}
              <div className=" col-span-3">
                <h6 className="mb-4 flex items-center justify-center  uppercase md:justify-start text-white text-xs font-normal  leading-[18px] tracking-tight">
                  Want to know More?
                </h6>
                <p className=" pe-0 md:pe-14">
                  Ask about wine investing We are answering in 24 hours
                </p>
                <div className="flex gap-3">
                  <span>
                    <Image src={envelope} alt="envelope@" />
                  </span>
                  <span className="text-center text-white text-base font-normal   leading-snug   border-b border-white border-opacity-20">
                    contact@vinesia.com
                  </span>
                </div>
              </div>
              {/* <!-- Products section --> */}
              <div className=" md:col-span-2">
                <h6 className="mb-4 flex justify-center uppercase md:justify-start   text-neutral-300 text-base font-normal  leading-snug">
                  Share info on your investment, make connections
                </h6>
                <button className="px-8 py-[22px] bg-white rounded-[48px] justify-center items-center gap-3 inline-flex text-orange-700 text-xs">
                  JOIN OUR COMMUNITY
                </button>
              </div>
            </div>
          </div>
          <hr className="border-b  border-white border-opacity-20" />
          {/* here is langugae and other icon */}
          <div className="pt-12 flex justify-between">
            <div className="flex flex-wrap flex-col">
              <span>Visit our international sites</span>
              <span className="pt-4">FR | GER | ENG | CHN </span>
            </div>
            <div className="border-r-2   border-white border-opacity-20"></div>
            <div>
              <span>Follow us</span>
              <div className="flex justify-center  items-center gap-[10px] pt-[10px]">
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
        <div className="flex items-center justify-center bg-[#1C141A] text-white p-2 lg:justify-between">
          <div className=" container mx-auto flex justify-between items-center">
            <div className="mr-12 hidden lg:block">
              <span className="text-neutral-400 text-xs font-normal  leading-[18px]">
                Copyright © 2023 Vinesia. All Rights Reserved
              </span>
            </div>
            <div>
              <div className="flex justify-center  items-center gap-[10px] pt-[10px]">
                <Link href="#" className="p-2">
                  <Image
                    src={strip}
                    alt="facebook"
                  
                  />
                </Link>
                <Link href="#" className="p-2">
                  <Image src={Gpay} alt="twitter"   />
                </Link>
                <Link href="#" className="p-2">
                  <Image src={applePay} alt="twitter"   />
                </Link>

                <Link href="#" className="p-2">
                  <Image src={visa} alt="twitter"  />
                </Link>
                <Link href="#" className="p-2">
                  <Image src={master} alt="twitter"  />
                </Link>
              </div>
            </div>
            <div className="text-right text-neutral-400 text-xs font-normal  leading-[18px] divide-x flex gap-4">
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
      </footer>
    </div>
  );
}
