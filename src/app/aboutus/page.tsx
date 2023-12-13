import React from "react";
import Image from "next/image";
import bubble from "@/assets/icons/bubbble.svg";
import amer from "@/assets/icons/amer.svg";
import enhance from "@/assets/icons/enhance.svg";
import webpack from "@/assets/icons/webpath.svg";
import mediator from "@/assets/icons/mediator.svg";
import investment from "@/assets/images/investment.png";
import videoImage from "@/assets/images/video (1080p) 2.png";
import { Arrows, LineDot } from "@/assets/icons/Icons";
import { AboutSection } from "@/constants/aboutSection";
import wineBottle from "@/assets/images/bolltewine.png";
import videoWine from "@/assets/images/video (1080p) 2.png";
import wineBottles from "@/assets/images/wineImageBottle.png";
import background from "@/assets/images/backgroundEllipse .png";
import backgroundtwo from "@/assets/images/Ellipse circle2x.png";
import lineregion from "@/assets/icons/lineregion.svg";
import { AccordionWine, AccordionWineAbout } from "@/components/accordion/page";
import { CardAbout } from "@/constants/cardregion";
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
import AboutSlider from "@/components/aboutslider/page";
import Link from "next/link";
import ModalBox from "@/common/Modals/page";
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
              <span className=" text-zinc-800 md:text-4xl font-light  md:leading-[44px] tracking-[-0.36px]  md:text-center   text-[21px]  leading-[29px]">
                The future of wine investing
              </span>
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
            <button className="px-8 py-[22px] bg-orange-700 rounded-full  justify-center items-center gap-3 inline-flex  text-center text-white text-xs font-normal -mb-4 uppercase leading-3 tracking-tight">
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
            <div className="absolute -top-2 ">
              <Image src={textOne} alt="glass image" />
            </div>
            {/* <div className="absolute ">
            <Image src={textTwo} alt="glass image" />
          </div> */}
          </div>

          <div className="relative">
            <div className="absolute  right-[30px] w-[71px] h-[71px] top-[34px]">
              <Image src={backgroundtwo} alt="glass image" />
            </div>
            <div className="absolute  right-[54px]   top-[55px]">
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
      <div className="md:py-40 md:px-0 container mx-auto  py-12 px-4">
        <div className="grid md:grid-cols-3 grid-cols-1">
          <div className="col-span-1">
            <p className="md:max-w-[214px] text-zinc-800 text-base font-normal  leading-snug">
              Sourced exclusively from winemakers
            </p>
          </div>
          <div className="col-span-2">
            <h4 className=" text-zinc-800 md:text-4xl md:leading-[44px]  md:py-0 py-6  text-[21px] font-light  leading-[29px]">
              We are the first marketplace that protects your investment in a
              secure and transparent way to offer you complete Peace of Mind.
            </h4>
            <p className="md:pt-8 pt-0 text-zinc-800 text-base font-normal leading-snug">
              As stewards of your wine, sourced exclusively from winemakers,
              Vinesia is the best place to appreciate it while guarding its
              future emotions.
            </p>

            {/* here is 4th div defined  */}
            <div className="grid md:grid-cols-2  grid-cols-1 md:gap-8 gap-6 pt-[60px] ">
              {AboutSection?.map((item: any, index: any) => {
                const { title, text, icon } = item;
                return (
                  <div
                    className="p-8 bg-orange-50 flex-col justify-start items-start  inline-flex"
                    key={index}
                  >
                    <span>
                      <Image src={icon} alt="lock" width={20} height={20} />
                    </span>
                    <h6 className="text-zinc-800 text-lg font-semibold pt-6 pb-3 leading-relaxed">
                      {title}
                    </h6>
                    <p className="text-neutral-600 text-base font-normal  leading-snug">
                      {text}
                    </p>
                  </div>
                );
              })}{" "}
            </div>
          </div>
        </div>
      </div>

      {/* here is logo img */}
      <div className="md:block hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 container">
          <div className="flex flex-wrap justify-between  gap-10 items-center">
            <h6 className="text-center text-stone-600 text-xs font-normal uppercase leading-3 tracking-tight">
              Featured in
            </h6>
            <Image
              className="col-span-2  max-w-[74.24px] max-h-[19.20px] object-contain lg:col-span-1"
              src={bubble}
              alt="Transistor"
            />
            <Image
              className="col-span-2  max-w-[74.24px] max-h-[19.20px] object-contain lg:col-span-1"
              src={amer}
              alt="Transistor"
            />
            <Image
              className="col-span-2  max-w-[74.24px] max-h-[19.20px] object-contain lg:col-span-1"
              src={enhance}
              alt="Transistor"
            />
            <Image
              className="col-span-2  max-w-[74.24px] max-h-[19.20px] object-contain lg:col-span-1"
              src={webpack}
              alt="Transistor"
            />
            <Image
              className="col-span-2  max-w-[74.24px] max-h-[19.20px] object-contain lg:col-span-1"
              src={mediator}
              alt="Transistor"
            />
          </div>
        </div>
      </div>

      {/* Here is mobile responsive view */}
      <div className="block md:hidden">
        <div className="mx-auto max-w-7xl  py-20  px-4  container">
          <h6 className="text-center text-stone-600 text-xs font-normal uppercase leading-3 tracking-tight pb-8">
            Featured in
          </h6>
          <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5 ">
            {/* sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5 */}
            <Image
              className="col-span-2  max-w-[74.24px] max-h-[19.20px] w-full lg:col-span-1"
              src={bubble}
              alt="Transistor"
            />
            <Image
              className="col-span-2  max-w-[74.24px] max-h-[19.20px] w-full lg:col-span-1"
              src={amer}
              alt="Transistor"
            />
            <Image
              className="col-span-2  max-w-[74.24px] max-h-[19.20px] w-full lg:col-span-1"
              src={enhance}
              alt="Transistor"
            />
            <Image
              className="col-span-2  max-w-[74.24px] max-h-[19.20px] w-full lg:col-span-1"
              src={webpack}
              alt="Transistor"
            />
            <Image
              className="col-span-2  max-w-[74.24px] max-h-[19.20px] w-full lg:col-span-1"
              src={mediator}
              alt="Transistor"
            />
          </div>
        </div>
      </div>

      {/* here is a investment section */}

      <div className="py-20  px-4 md:py-40 md:px-24">
        <div className="text-center">
          <h2 className="max-w-[769px] text-zinc-800 md:text-7xl font-normal md:leading-[84px] mx-auto   text-center text-4xl   leading-[42px]">
            Wine investments without the worries
          </h2>
          <p className=" py-6 text-neutral-600 text-base font-normal leading-snug">
            Learn how our process brings our investor “Peace of Mind” pledge to
            life.
          </p>
          <button className="px-8 py-[22px] bg-orange-700 rounded-[48px] justify-center items-center gap-3 inline-flex text-center text-white text-xs font-normal  uppercase leading-3 tracking-tight">
            START InVESTING NOW
            <span>
              <Arrows storke="#FFFFFF" />
            </span>
          </button>
        </div>
        {/* here is image defined */}
        <div className="flex justify-center md:pt-[92px] pt-12">
          <Image src={investment} alt="image" />
        </div>
      </div>

      {/* here is invest in wine section */}

      <div className="flex flex-wrap  bg-[#7D302E]  md:h-[800px] ">
        <div className=" md:basis-5/12 md:block hidden h-full w-full">
          <Image src={wineBottle} className="w-full h-full" alt="winebottle" />
        </div>
        {/* for Mobile responsive  */}
        <div className="w-full block md:hidden">
          <Image src={wineBottles} className="w-full h-full" alt="winebottle" />
        </div>

        <div className="  md:basis-7/12 h-[800px] md:pt-[110px] py-20">
          <div className="md:ps-[139px] w-full h-full px-4">
            <div className=" flex flex-col justify-between max-w-[501px] w-full h-full">
              <div>
                <div className=" ">
                  <h3 className="text-white md:text-4xl font-light  md:leading-[44px]    text-[21px]  leading-[29px]">
                    Why to invest in wine?
                  </h3>

                  <div className="underline decoration-wavy md:pt-10 pt-8">
                    <Image src={lineregion} alt="image" />
                  </div>
                </div>
                <AccordionWine />
              </div>
              {/* here is button  */}
              <div className=" pb-[70px]">
                <button className="w-full  px-8 py-[22px] rounded-full border border-white border-opacity-20 justify-center items-center gap-3 inline-flex text-center text-white text-xs font-normal  uppercase leading-3 tracking-tight">
                  START INVESTING NOW{" "}
                  <span>
                    <Arrows storke="#FFFFFF" />
                  </span>
                </button>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>

      {/*The potential of wine investment in numbers (next section) */}
      <div className="md:py-40 md:px-0   py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 grid-cols-1">
            <div className="max-w-[512px]">
              <h2 className=" text-zinc-800 md:text-7xl font-normal  md:leading-[84px] md:tracking-[-1.44px]      text-4xl  leading-[42px] tracking-[-0.36px]">
                The potential of wine investment in numbers
              </h2>
              <p className="max-w-[329px] text-zinc-800 text-lg font-semibold  md:pt-[72px] pt-6 pb-6 leading-relaxed   tracking-[-0.36px]">
                See what your portfolio could have returned with wine
              </p>
              <Link href="/about">
                <button className="px-8 py-[22px] text-white  bg-orange-700 rounded-[48px] justify-center items-center gap-3 inline-flex">
                  CALCULATE{" "}
                  <span>
                    <Arrows storke="#FFFFFF" />
                  </span>
                </button>
              </Link>
            </div>
            <div className="md:max-w-[608px] ">
              <div className="tracking-[-0.32px] md:pb-8 py-10 ">
                <p className="pb-8">
                  Fine wine is a uniquely resilient asset class that will
                  diversify an investment portfolio and hedge risk. Over time,
                  it offers on average a solid 9% Compound Annual Growth Rate
                  (CAGR) with low volatility.{" "}
                </p>
                <p>
                  This tool allows you to do your own backtesting and see what
                  introducing fine wines into your own portfolio could have
                  yielded for you over time.
                </p>
              </div>

              <div className="bg-white p-4">
                <h5 className="text-zinc-800 text-lg font-semibold  leading-relaxed pb-3 tacking-[-0.36px]">
                  Performance of investment portfolio with fine wine in
                  comparison to baseline
                </h5>
                <div className="bg-orange-100 h-64">
                  <div className="p-2">
                    <ul className="flex justify-end gap-4">
                      <li className="flex items-center">
                        <LineDot storke="#28475C" />
                        Baseline
                      </li>
                      <li className="flex items-center">
                        {" "}
                        <LineDot storke="#CB220D" /> Portofolio performace
                      </li>
                    </ul>
                  </div>
                </div>
                {/* HERE IS NUMBER DEFINED  */}
                <ul className="flex justify-between text-zinc-800 text-base font-normal   leading-snug">
                  <li>2005</li>
                  <li>2010</li>
                  <li>2015</li>
                  <li>2020</li>
                  <li>2023</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Start your investment journey today  */}
      <div className="md:py-40 md:px-0 px-4 py-20">
        <div className="container mx-auto">
          <div className="max-w-[820px] mx-auto">
            <h2 className="md:tracking-[-1.44px] md:text-center text-zinc-800 md:text-7xl font-normal   md:leading-[84px]    text-4xl leading-[44px] tracking-[-0.36px]">
              Start your investment journey today
            </h2>
            <p className="mx-auto max-w-[634px] md:text-center text-neutral-600 text-base font-normal  leading-snug md:tracking-[-0.32px] py-6   tracking-[-0.32px]   ">
              {/* -0.32px */}
              We offer wine investment options suitable for every portfolio. We
              source exceptional wines directly from top wineries, and with
              diligent real-time monitoring in our Luxembourg warehouse, the
              value of these assets are poised to appreciate.
            </p>
            <button className="px-8 py-[22px] bg-orange-700 rounded-full justify-center items-center mx-auto gap-3 flex  text-center text-white text-xs font-normal  uppercase leading-3 tracking-tight">
              EXPLORE YOUT OPTIONS <Arrows storke="#FFFFFF" />
            </button>
          </div>
          {/* here is card defined  */}
          <div className=" max-w-[820px] conatiner mx-auto flex gap-8 md:overflow-x-hidden overflow-x-auto">
            {/*  */}
            {CardAbout?.map((item: any, index: any) => {
              const { id, text, image } = item;
              return (
                <div className="pt-[52px] md:min-w-[29%] min-w-[80%] md:overflow-hidden  overflow-hidden">
                  {/*  */}
                  <div className=" md:p-4 p-[13px] bg-white">
                    <div className=" " key="index">
                      <Image src={image} alt="image" className=" h-[347px]" />
                      <p className="text-zinc-800 text-lg font-semibold tracking-[-0.36px]  leading-relaxed">
                        {text}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>


      
{/* <ModalBox/> */}
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
