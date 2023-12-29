"use client";
import Image from "next/image";
import React from "react";
import {
  BuyCart,
  DecentrIcon,
  ExculsiveIcon,
  LinereGion,
  LinkdeIn,
  NextIcon,
} from "@/assets/icons/Icons";
import VinesiaBanner from "@/components/vinesia/VinesiaBanner";
import AboutSlider from "@/components/AboutSection/aboutslider/page";
import Footer from "@/components/footer/page";
import NewslettersTwo from "@/components/newslttersTwo/page";
import WineVideoBanner from "@/components/ProductOverView/WineVideoBanner";
import Wanttoknow from "@/components/aboutpage/Wanttoknow";
import vinesiaccordion from "@/assets/images/vinesiadropdown.png";
import { AccordionVinesia } from "@/constants/accrodion";
import { AccordionWine, AccordionWineAbout } from "@/components/accordion/page";
import expertise from "@/assets/images/expertise.png";
import VinesiaProcess from "@/components/vinesia/VinesiaProcess";
import VinesiaWines from "@/components/vinesia/VinesiaWines";
import VinesiaSelling from "@/components/vinesia/VinesiaSelling";
import VinesiaAnimation from "@/components/vinesia/VinesiaAnimation";
import Testing from "@/components/vinesia/Teting";
import { experts } from "@/constants/experts";
import Link from "next/link";
import QASummary from "@/components/qasummary/page";

const title = "How Vinesia works";
const descripition =
  "Discover the seamless journey of wine investment with Vinesia in our 'How It Works' video.";

export default function Vinesia() {
  return (
    <div className="absolute top-0 -z-10 left-0 right-0">
      <div>
        <div className="relative">
          <VinesiaBanner />
        </div>
      </div>
      <div className="py-40">
        <div className="container mx-auto px-4">
          <div className="max-w-[877px] mx-auto flex-col justify-center items-center gap-12 flex">
            <div className="h-[236px] flex-col justify-start items-center gap-6 flex">
              <h2 className="self-stretch text-center text-zinc-800 text-7xl font-normal leading-[84px]">
                Pursue a profitable portfolio you are passionate about
              </h2>
              <p className="max-w-[699px] text-center text-neutral-600 text-base font-normal leading-snug">
                We have simplified wine investing and brought it into the modern
                era. Our deep knowledge and unique marketplace offer you peace
                of mind as you invest in something you love. 
              </p>
            </div>
            <LinereGion />
            <h3 className="text-center text-zinc-800 text-4xl font-light leading-[44px]">
              How can I invest in wine?
            </h3>
          </div>
        </div>
        <div className="">
          <VinesiaAnimation />
          {/* <Testing /> */}
        </div>
      </div>

      <WineVideoBanner title={title} descripition={descripition} />
      <div className="py-12 bg-red-900">
        <div className=" container mx-auto px-4">
          <Wanttoknow />
        </div>
      </div>

      <div className="py-40">
        <div className=" container mx-auto px-4">
          <div className="pb-20">
            <h2 className="self-stretch text-center text-zinc-800 text-7xl font-normal leading-[84px]">
              How Vinesia makes wine investing transparent, safe, and easy to
              trade
            </h2>
            <div className="max-w-[768px] mx-auto pt-4">
              <span className="text-neutral-600 text-base font-normal leading-snug">
                Our method of wine investment is layered to create a
              </span>
              <span className="text-orange-700 text-base font-normal leading-snug">
                Peace of Mind&nbsp;
              </span>
              <span className="text-neutral-600 text-base font-normal leading-snug">
                &nbsp;pledge. Every feature of how we do things speaks to our
                dedication to creating a system of truth you can rely on for
                your wine portfolio.
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className=" pe-[139px]">
              <Image src={vinesiaccordion} alt="" className="w-full" />
            </div>
            <div>
              <div className="max-w-[500px] h-[0px] border border-orange-700 border-opacity-20"></div>
              <AccordionWine
                data={AccordionVinesia}
                titleClass="text-zinc-800"
                containerClass="py-6"
                borderClass="border-b-2 border-orange-700 max-w-[500px] border-opacity-20"
                descClass={"text-zinc-800"}
              />
              <div className="pt-12 p-2">
                  <Link href="/security">
                <button className="flex gap-3 items-center text-center text-orange-700 text-xs font-normal uppercase leading-[18px] tracking-tight">
                  READ MORE ABOUT SECURITY
                  <NextIcon />
                </button>
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About our wine expertise + experts start */}
      <div className="py-40 bg-[#F7EFDF]">
        <div className="max-w-[1166px] mx-auto px-4">
          <div className="grid grid-cols-2 gap-[139px]">
            <div>
              <h3 className="max-w-[501px] text-zinc-800 text-4xl font-light leading-[44px] pb-8">
                About our wine expertise + experts
              </h3>
              <p className="max-w-[501px] text-zinc-800 text-lg font-semibold leading-relaxed pb-4">
                Deep knowledge, experience and a healthy dose of challenge from
                our expert advisors to keep us on our toes.
              </p>
              <p className="max-w-[501px] text-neutral-600 text-base font-normal leading-snug ">
                Our success stems from the ability to source exceptional wines
                for our investors, to act as respectful stewards towards the
                magical products we store and to make sure our investors feel
                absolutely safe when it comes to their investment guarded
                preciously by Vinesia. Our advisors’ reputation in the business
                is stellar and they are here to ensure we act in an ethical,
                sustainable way with the interests of our investors at the
                center of our business model.
              </p>
            </div>
            <div className="">
              <div className="bg-orange-50 rounded-tl rounded-tr border border-orange-700 border-opacity-20">
                {experts.map((items, i) => {
                  const {id, name, img, linkedin} = items
                  return (
                    <div
                      key={i}
                      className="justify-between items-center flex p-6"
                    >
                      <div className="justify-between items-center gap-4 flex">
                        <div className="w-16 h-16 justify-center items-center flex">
                          <Image src={img} alt="" className="rounded-full" />
                        </div>
                        <div className="flex-col justify-start items-start gap-1 inline-flex">
                          <p className="text-zinc-800 text-lg font-semibold leading-relaxed">
                            {name}
                          </p>
                          <p className="text-stone-500 text-xs font-normal uppercase leading-[18px] tracking-tight">
                            Expert
                          </p>
                        </div>
                      </div>
                      <Link href={linkedin}>
                        <LinkdeIn fill={"#0A66C2"} />
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About our wine expertise + experts end */}

      {/* VinesiaProcess start*/}
      <div className="py-40">
        <div className="container mx-auto px-4">
          <VinesiaProcess />
        </div>
      </div>
      {/* VinesiaProcess end*/}
      {/* How to invest in wines? start*/}
      <div className="bg-[#2F222B] py-40">
        <div className="container mx-auto px-4">
          <h3 className="text-white text-4xl font-light leading-[44px] pb-16">
            How to invest in wines?
          </h3>
          <VinesiaWines />
          <div className="max-w-[1248px] h-[0px] border border-white border-opacity-20 mb-16"></div>

          <p className="max-w-[830px] mx-auto h-[59px] text-center text-white text-lg font-semibold leading-relaxed">
            Once your investment is completed, we move your chosen investment to
            your profile and transfer all rights, blockchain certificates, and,
            if relevant, the art to you
          </p>
        </div>
      </div>
      {/* How to invest in wines? end */}
      <div className="py-40">
        <div className="container mx-auto px-4">
          <VinesiaSelling />
        </div>
      </div>

      <div className="py-12 bg-slate-700 flex-col justify-center items-center gap-10 flex">
        <div className="flex-col justify-center items-center gap-4 flex">
          <div className="justify-center items-center gap-6 inline-flex">
            <h4 className="text-right text-white text-[21px] font-light leading-[29px] tracking-wide">
              Can’t find the answer? Contact us and we will help!
            </h4>
          </div>
          <div className="justify-center items-center gap-2 inline-flex">
            <div className="justify-start items-center gap-3 flex">
              <button className="border-b-2 border-white border-opacity-20 text-white text-base font-normal leading-snug">
                contact@vinesia.com
              </button>
            </div>
          </div>
          <p className="text-center text-gray-400 text-base font-normal leading-snug">
            We generally answer within 24 hours on business days
          </p>
        </div>
      </div>

      <div className="bg-[#F7EFDF]">
        <QASummary title="You might have questions, we definitely have answers." />
      </div>
      {/* The faster way to get to know us */}
      <div className="bg-[#2F222B]">
        <div className="flex justify-end md:py-40 md:px-0 px-4 py-20">
          <div className="max-w-[1314px]">
            <div className="">
              <div>
                <h3 className="text-white text-4xl font-light   leading-[44px] pb-8">
                  The faster way to get to know us
                </h3>
              </div>
            </div>

            {/* here is new slider  section */}
            <div className="hidden md:block">
              <div>
                <AboutSlider />
              </div>
            </div>
            <div className="md:hidden block  ">
              <div className="grid grid-cols-1 ">
                <AboutSlider />
              </div>
            </div>
          </div>
        </div>
      </div>
      <NewslettersTwo />
      {/* footer */}
      <Footer />
    </div>
  );
}
