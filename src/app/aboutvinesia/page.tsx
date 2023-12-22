import React, { useState } from "react";
import Image from "next/image";
import videoImage from "@/assets/images/video (1080p) 2.png";
import { Arrows } from "@/assets/icons/Icons";
import background from "@/assets/images/backgroundEllipse .png";
import backgroundtwo from "@/assets/images/Ellipse circle2x.png";
import Newsletter from "@/components/newsletter/page";
import NewsletterMobile from "@/components/newsletter/MobileView";
import Footer from "@/components/footer/page";
import grapes from "@/assets/icons/aboutIllustrations.svg";
import bottleIllustration from "@/assets/icons/bottle-Illustrations.svg";
import bottleIllustrations from "@/assets/icons/wine-bottle-Illustrations.svg";
import glass from "@/assets/icons/glass.svg";
import arrowdowns from "@/assets/icons/downarrow.svg";
import textOne from "@/assets/icons/getStarted.svg";
import textTwo from "@/assets/icons/getstarted2.svg";
import star from "@/assets/icons/star.svg";
import AboutOne from "@/components/AboutSection/aboutOne/page";
import AboutTwo from "@/components/AboutSection/aboutTwo/page";
import AboutThree from "@/components/AboutSection/aboutThree/page";
const About = () => {
  return (
    <React.Fragment>
      {/* Main heading section */}

      <div className="relative container mx-auto md:py-0 pb-20">
        <div className="container mx-auto md:px-0 px-4 ">
          <div className="md:flex md:justify-end justify-start text-[#BD936B] text-xs font-normal   uppercase leading-3 tracking-tight md:pt-5 pt-4  tracking-[ 0.24px]">
            <p> appreciating your wine,</p>
            <p>guarding its emotions</p>
          </div>

          <div className="md:text-center  pt-16">
            <div className="relative">
              <h3 className=" text-zinc-800 md:text-4xl font-light  md:leading-[44px] tracking-[-0.36px]  md:text-center   text-[21px]  leading-[29px]">
                The future of wine investing
              </h3>
              <div className="absolute -top-3 left-0 md:block hidden ">
                <Image src={grapes} alt="image-icon" />
              </div>
            </div>
            {/* here is main text-div  */}
            <div className="relative">
              <h1 className=" text-zinc-800 md:text-[144px] font-normal md:tracking-[-2.88px] md:leading-[155px] tracking-[-1.2px]     text-6xl    leading-[68px]">
                secure, transparent, easily tradable
              </h1>
              <div className="absolute top-0 -right-9 md:block hidden">
                <Image src={bottleIllustration} alt="image-icon" />
              </div>
              <div className="absolute  left-40 md:block hidden">
                <Image src={bottleIllustrations} alt="image-icon" />
              </div>
            </div>
          </div>
          <div className="text-center pt-[69px] ">
            <button className="px-8 py-4 bg-orange-700 rounded-full  justify-center items-center gap-3 inline-flex  text-center text-white text-xs font-normal -mb-4 uppercase leading-3 tracking-tight">
              START NOW <Arrows storke="#FFFFFF" />
            </button>
          </div>
          {/* <div className="relative md:block hidden">
            <div className="bg-[#ECDDC0] w-[700px] h-[300px] mx-auto  rounded-tl-full rounded-tr-full relative -z-10" />

            <div className="absolute left-0 right-0 top-10">
              <Image
                src={videoWine}
                alt="video"
                className=" rounded-tl-full rounded-tr-full  w-[600px] h-[259px] mx-auto"
              />
            </div>
          </div> */}
        </div>
        <div className="relative md:block hidden">
          <div className="absolute right-0">
            <Image src={background} alt="glass image" />
            <div className="absolute -top-2 -left-2 ">
              <Image src={textOne} alt="glass image" />
            </div>
            <div className="absolute  bottom-[20px] left-10">
              <Image src={star} alt="glass image" />
            </div>
            <div className="absolute  -bottom-3 -right-3">
              <Image src={textTwo} alt="glass image" />
            </div>
            <div className="absolute  left-24 bottom-28">
              <Image src={star} alt="glass image" />
            </div>
          </div>

          <div className="relative">
            <div className="absolute  right-[30px] w-[71px] h-[71px] top-[34px]">
              <Image src={backgroundtwo} alt="glass image" />
            </div>
            <div className="absolute  right-14   top-[55px]">
              <Image src={arrowdowns} alt="glass image" />
            </div>
          </div>

          <div className="absolute right-32">
            <Image src={glass} alt="glass image" />
          </div>
        </div>
      </div>

      {/* here is video section */}
      <div className="w-full md:pt-80">
        <Image src={videoImage} className="w-full" alt="video" />
      </div>
      {/* here is next section */}
      <AboutOne />

      {/* here is next section */}
      <AboutTwo />

      {/* here is next section */}
      <AboutThree />

      {/* desktop Newsletter*/}
      <div className="hidden sm:block">
        <Newsletter />
      </div>
      {/* mobile Newsletter */}
      <div className="block sm:hidden">
        <NewsletterMobile />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default About;
