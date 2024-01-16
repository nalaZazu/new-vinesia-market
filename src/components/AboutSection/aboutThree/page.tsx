import React from "react";
import { AccordionWineAbout } from "@/components/accordion/page";
import { CardAbout } from "@/constants/cardregion";
import { Arrows } from "@/assets/icons/Icons";
import Image from "next/image";
import AboutSlider from "../aboutslider/page";
import VectorOne from "@/assets/icons/VectorOne.svg";
import VectorTwo from "@/assets/icons/VectorTwo.svg";
import Link from "next/link";
import { AccordionAboutTwo } from "@/constants/accrodion";
import KnowUsVideos from "@/components/KnowUsVideos/page";
import QASummary from "@/components/qasummary/page";
const AboutThree = () => {
  return (
    <React.Fragment>
      {/* Start your investment journey today  */}
      <div className="md:py-25 md:px-0 px-4 bg-[#F7EFDF] md:h-[110vh] h-full  flex items-center justify-center">
        <div className="container mx-auto">
          <div className="mx-auto">
            <h2 className="md:tracking-[-1.44px] md:text-center text-zinc-800 md:text-7xl font-normal   md:leading-[84px]    text-4xl leading-[44px] tracking-[-0.36px]">
              Start your investment journey today
            </h2>
            <p className="mx-auto max-w-[634px] md:text-justify text-neutral-600 text-base font-normal  leading-snug md:tracking-[-0.32px] py-6   tracking-[-0.32px]   ">
              {/* -0.32px */}
              We offer wine investment options suitable for every portfolio. We
              source exceptional wines directly from top wineries, and with
              diligent real-time monitoring in our Luxembourg warehouse, the
              value of these assets are poised to appreciate.
            </p>
            <Link href="/invest">
              <button className="px-8 py-4 bg-orange-700 rounded-full justify-center items-center mx-auto gap-3 flex  text-center text-white text-xs font-normal  uppercase leading-3 tracking-tight">
                EXPLORE YOUR OPTIONS <Arrows storke="#FFFFFF" />
              </button>
            </Link>
          </div>
          {/* here is card defined  */}
          <div className="max-w-[928px]  container pt-14 mx-auto flex  md:justify-center md:gap-8 gap-5 overflow-x-auto  md:grid md:grid-cols-3 grid-cols-1">
            {CardAbout?.map((item: any, index: any) => {
              const { id, text, image, href } = item;
              return (
                <Link href={href}
                  key={index}
                >
                  <div
                    className="md:min-w-full  min-w-[80%] p-4 bg-white rounded overflow-hidden"
                  >
                    <div className="bg-white ">
                      {/* <div className=" " key="index"> */}
                        <Image src={image} alt="image" className="rounded" height={350}/>
                        <p className="text-zinc-800 text-xs md:text-base font-semibold tracking-[-0.36px]  leading-relaxed ">
                          {text}
                        </p>
                      {/* </div> */}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>



      <KnowUsVideos />
      <QASummary />

    </React.Fragment>
  );
};

export default AboutThree;
