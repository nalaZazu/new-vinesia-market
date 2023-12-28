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
          {/* desktop  */}
          <div className="md:block hidden ">
            <div className="container mx-auto md:flex md:justify-center py-[30px]   items-center gap-6">
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
          </div>
          {/* mbl responsive */}
          <div className="block md:hidden ">
            <div className="container mx-auto  py-6 flex items-center justify-center gap-6">
              <Link href="/">
                <Image
                  src={logo1}
                  alt="Picture of the author"
                  width={40}
                  height={40}
                />
              </Link>

              <div className="flex items-center flex-col">
                <span> appreciating your wine</span>
                <span>guarding its emotions</span>
              </div>
            </div>
          </div>
          <div className="border-b  border-white border-opacity-20 " />

          {/* <!-- Main container div: holds the entire content of the footer, including four sections (TW elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. --> */}
          <div className="container mx-auto md:pt-12 md:pb-12 px-4">
            <div className=" text-center md:text-start">
              <div className="grid md:gap-28  gap-[19px] grid-cols-2 sm:flex">
                <div className="block md:hidden col-span-2">
                  <div className="py-8  text-center">
                    <p className="mb-4 flex justify-center    text-neutral-300 text-base font-normal  leading-snug tracking-[0.32px]">
                      Share info on your investment, make connections
                    </p>
                    <div className="pt-8 ">
                      <span>Follow us</span>
                      <div className="flex justify-center   items-center gap-[10px] pt-[10px]">
                        <Link href="https://www.facebook.com/" className="p-2">
                          <Facebook fill="#ACA7AA" />
                        </Link>
                        <Link href="https://www.linkedin.com/" className="p-2">
                          <LinkdeIn fill="#ACA7AA " />
                        </Link>
                        <Link href="https://twitter.com/" className="p-2">
                          <Twitter fill="#ACA7AA" />
                        </Link>

                        <Link href="https://www.instagram.com/" className="p-2">
                          <Image
                            src={instagram}
                            alt="twitter"
                            className="w-4"
                          />
                        </Link>
                        <Link href="https://www.youtube.com/" className="p-2">
                          <Image src={youtube} alt="twitter" className="w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="border-b  border-white border-opacity-20  " />
                </div>

                {/* <!-- Useful links section --> */}
                <div className="md:order-1 order-3  sm:col-span-1  md:pt-0  md:p-0  pt-6 pb-6">
                  <h6 className="mb-4 md:pb-6 font-albertsans flex justify-center md:justify-start text-white text-xs font-normal uppercase leading-[18px] tracking-wider">
                    About Vinesia
                  </h6>
                  {FooterNavigate?.map((reg: any) => {
                    const { id, title, href } = reg;
                    return (
                      <p className="mb-2" key={id}>
                        <Link
                          href={href}
                          className="text-zinc-500 text-base font-normal leading-snug  border-b border-orange-700 border-opacity-20"
                        >
                          {title}
                        </Link>
                      </p>
                    );
                  })}
                </div>
                {/* <!-- Useful links section --> */}
                <div className="md:order-2 order-3 sm:col-span-1  md:pt-0 md:pb-0 pt-6 pb-6">
                  <h6 className="mb-4 md:pb-6 flex font-albertsans justify-center md:justify-start text-white text-xs font-normal uppercase leading-[18px] tracking-wider">
                    Investments
                  </h6>
                  {FooterNavigateTwo?.map((item: any) => {
                    const { id, title, href } = item;
                    return (
                      <p className="mb-2" key={id}>
                        <Link
                          href={href}
                          className="text-zinc-500 text-base font-normal leading-snug  border-b border-orange-700 border-opacity-20"
                        >
                          {title}
                        </Link>
                      </p>
                    );
                  })}
                </div>
                {/* <!-- TW elements section --> */}
                <div className=" sm:col-span-2 md:order-3 order-1 col-span-2 md:max-w-[310px] md:pt-0 md:pb-0  pt-8 ">
                  <h6 className="mb-4 font-albertsans flex items-center justify-center uppercase md:justify-start text-white text-xs font-normal leading-[18px] tracking-wider">
                    Want to know More?
                  </h6>
                  <p className=" pe-0 md:pe-14 md:pt-6">
                    Ask about wine investing. <br />
                    We answer withing 24h, during business days
                  </p>
                  <div className="flex gap-3 mt-4 md:justify-start justify-center">
                    <span>
                      <Image src={envelope} alt="envelope@" />
                    </span>
                    <span className="text-center text-white text-base font-normal   leading-snug   border-b border-white border-opacity-20">
                      contact@vinesia.com
                    </span>
                  </div>
                  <div className="border-b  w-[345px] border-white border-opacity-20 block md:hidden pt-8" />
                </div>
                {/* <!-- Products section --> */}
                {/* <div className=" sm:col-span-2 col-span-1 max-w-[303px]">
                  <p className="mb-4 flex justify-center uppercase md:justify-start   text-neutral-300 text-base font-normal  leading-snug">
                    Share info on your investment, make connections
                  </p>
                  <button className="px-8 py-4 bg-orange-700  rounded-[48px] justify-center items-center gap-3 inline-flex text-[#F2DBD2] text-xs">
                    JOIN OUR COMMUNITY
                  </button>
                </div> */}
              </div>
            </div>
            <div className="border-b  border-white border-opacity-20    pt-12" />
            {/* here is langugae and other icon */}
            <div className="md:pt-12 pt-8  md:pb-0 pb-8 md:px-0 px-4 flex flex-wrap md:justify-between justify-center">
              <div className="flex flex-wrap flex-col">
                <span>Other languages</span>
                <span className="pt-4">FR | GER | ENG | CHN </span>
              </div>
              <div className="md:border-r-2    border-white border-opacity-20  " />

              <div className="md:pt-0 pt-4  md:block hidden">
                <span>Follow us</span>
                <div className="flex justify-center   items-center gap-[10px] pt-[10px]">
                  <Link href="https://www.facebook.com/" className="p-2">
                    <Facebook fill="#ACA7AA" />
                  </Link>
                  <Link href="https://www.linkedin.com/" className="p-2">
                    <LinkdeIn fill="#ACA7AA " />

                    {/* <Image src={linkdin} alt="twitter" className="w-4" /> */}
                  </Link>
                  <Link href="https://twitter.com/" className="p-2">
                    <Twitter fill="#ACA7AA" />
                  </Link>

                    <Link href="https://www.instagram.com/" className="p-2">
                      <Image src={instagram} alt="twitter" className="w-4" />
                    </Link>
                    <Link href="https://www.youtube.com/" className="p-2">
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
                      <Image src={strip} alt="strip" />
                    </Link>
                    <Link href="#" className="p-2">
                      <Image src={Gpay} alt="Gpay" />
                    </Link>
                    <Link href="#" className="p-2">
                      <Image src={applePay} alt="applePay" />
                    </Link>

                  <Link href="#" className="p-2">
                    <Image src={visa} alt="visa" />
                  </Link>
                  <Link href="#" className="p-2">
                    <Image src={master} alt="master" />
                  </Link>
                </div>
              </div>
              <div className="md:pt-0 pt-4 ">
                <div className=" md:mx-0 mx-4 md:text-right text-neutral-400 text-xs font-normal  leading-[18px] md:divide-x  flex gap-4 flex-wrap  justify-center">
                  <div>
                    <Link href="/terms_conditions"> Terms & conditions</Link>
                  </div>
                  <div className="ps-4">
                    <Link href="/privacy_policy">Privacy Policy</Link>
                  </div>
                  <div className="ps-4">
                    <Link href="/cookie_policy">Cookie Policy</Link>
                  </div>
                  <div className="ps-4">
                    <Link href="/disclaimer">Disclaimer</Link>
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
