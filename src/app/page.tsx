"use client"

import React, { useRef, useState } from "react";
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
import Link from "next/link";

import { useGSAP } from "@gsap/react";
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const container = useRef(null);
  const round = useRef(null);
  const round2 = useRef(null);
  useGSAP(() => {
    const el = container.current
    const el2 = round.current
    const el3 = round2.current

    gsap.to(
      el,
      {
        scrollTrigger: {
          trigger: el,
          pin: true,
          start: 'top top',
          end: "+=130%"
        },
      }
    )

    gsap.fromTo(
      el2,
      {
        borderRadius: '500px',
        padding: '59px'
      },
      {
        scrollTrigger: {
          trigger: el,
          scrub: true,
          start: 'top top',
          end: "+=100%"
        },
        padding: '0px',
        borderRadius: '0px',
        width: window.screen.width,
        maxWidth: window.screen.width,
        margin: 0,
        ease: 'none'
      }
    )

    gsap.fromTo(
      el3,
      {
        borderRadius: '500px'
      },
      {
        scrollTrigger: {
          trigger: el,
          scrub: true,
          start: 'top top',
          end: "+=100%"
        },
        borderRadius: '0px',
        ease: 'none'
      }
    )
  }, { scope: container }); // <-- scope is for selector text (optional)

  return (
    <React.Fragment>
      {/* Main heading section */}

      <div className="relative container mx-auto md:py-0 pb-20">
        <div className="container mx-auto md:px-0 px-4 ">
          <div className="md:flex md:justify-end justify-start text-[#BD936B] text-xs font-normal   uppercase leading-3 tracking-tight md:pt-5 pt-4  tracking-[ 0.24px]">
            <p> appreciating your wine,</p>
            <p>guarding its emotions</p>
          </div>

          <div className="md:text-center pt-8">
            <div className="relative">
              <span className="font-['Canela'] text-zinc-800 md:text-4xl font-light  md:leading-[44px] tracking-[-0.36px]  md:text-center   text-[21px]  leading-[29px]">
                The future of wine investing
              </span>
              <div className="absolute -top-10 left-20 md:block hidden ">
                <Image src={grapes} alt="image-icon" />
              </div>
            </div>
            {/* here is main text-div  */}
            <div className="relative">
              <h1 className=" text-zinc-800 2xl:text-[144px] md:text-[120px] font-normal tracking-tighter leading-[120px]">
                secure, transparent, <br /> easily tradable
              </h1>
              <div className="absolute -top-12 right-3 md:block hidden">
                <Image src={bottleIllustration} alt="image-icon" />
              </div>
              <div className="absolute left-52 top-72 md:block hidden">
                <Image src={bottleIllustrations} alt="image-icon" />
              </div>
            </div>
          </div>
          <div className="text-center pt-[39px] ">
            <Link href={'/invest'} className="px-8 py-[22px] bg-secondary rounded-full  justify-center items-center gap-3 inline-flex  text-center text-white text-xs font-normal -mb-4 uppercase leading-3 tracking-tight">
              START NOW <Arrows storke="#FFFFFF" />
            </Link>
          </div>

          {/* Round right button to scroll down to rest of the page */}
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

          {/* <div id="round" className="relative md:block hidden pt-5">
            <div className="bg-[#ECDDC0] w-[628px] h-[628px] mx-auto rounded-full relative -z-10"  ref={container} />

            <div className="absolute left-0 right-0 top-0 pt-[79px]">
              <video width={600} height={600} className="rounded-full w-[510px] h-[510px] mx-auto object-cover" autoPlay loop>
                <source src='assets/video/winevideo.mp4' />
                Your browser does not support the video tag.
              </video>
            </div>
          </div> */}


        </div>
      </div>
      <div className="w-full" ref={container}>
        <div id="round" className="
           block md:w-[628px] md:h-[628px] w-[300px] h-[300px] rounded-full bg-[#ECDDC0] md:p-[59px] mx-auto 
          " ref={round}>

          <div className="block relative overflow-hidden w-full h-full rounded-full" ref={round2}>
            <video className="absolute left-1/2 z-0 max-w-none object-cover -translate-x-1/2" autoPlay loop muted>
              <source src='assets/video/winevideo.mp4' />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
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
