"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Arrows } from "@/assets/icons/Icons";
import getStartedBtn from "@/assets/images/GetStartedBtn.png";
import Newsletter from "@/components/newsletter/page";
import NewsletterMobile from "@/components/newsletter/MobileView";
import Footer from "@/components/footer/page";
import grapes from "@/assets/icons/aboutIllustrations.svg";
import bottleIllustration from "@/assets/icons/bottle-Illustrations.svg";
import bottleIllustrations from "@/assets/icons/wine-bottle-Illustrations.svg";
import glass from "@/assets/icons/glass.svg";
import AboutOne from "@/components/AboutSection/aboutOne/page";
import AboutTwo from "@/components/AboutSection/aboutTwo/page";
import AboutThree from "@/components/AboutSection/aboutThree/page";
import Link from "next/link";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import Header from "@/components/header/page";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

const About = () => {
  const container = useRef(null);
  const round = useRef(null);
  const round2 = useRef(null);

  const grapeRef = useRef(null);
  const bottle1Ref = useRef(null);
  const bottle2Ref = useRef(null);
  const glassRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

    ScrollSmoother.create({
      smooth: 1,
      effects: true,
    });

    const el = container.current;
    const el2 = round.current;
    const el3 = round2.current;

    const grape = grapeRef.current;
    const bottle1 = bottle1Ref.current;
    const bottle2 = bottle2Ref.current;
    const glass = glassRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        scrub: 1,
        trigger: el,
        pin: true,
        start: "top top",
        end: "+=180%",
        // snap: {
        //   snapTo: "labelsDirectional", // snap to the closest label in the timeline
        //   duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
        //   delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
        //   ease: "power1.inOut", // the ease of the snap animation ("power3" by default)
        // },
      },
    });
    tl.addLabel("start")
      .to(el3, {
        duration: 0.2,
        width: "511px",
        height: "511px",
      })
      .addLabel("center", 0.2)
      .to(el3, { duration: 0.2 })
      .to(el3, {
        duration: 0.2,
        width: "100vw",
        height: "80vh",
        borderRadius: "0px",
        top: "40vh",
      })
      .addLabel("full", 0.6)
      .to(el3, { duration: 0.1 });

    const tl2 = gsap.timeline();
    tl2
      .to(el2, {
        duration: 0.2,
        width: "626px",
        height: "626px",
      })
      .to(el2, { duration: 0.2 })
      .to(el2, {
        duration: 0.2,
        width: "0",
        height: "0",
      });

    tl.add(tl2, 0);

    const gtl = gsap.timeline();
    gtl
      .to(glass, {
        top: "20vh",
        right: "15vw",
        rotate: -35,
        duration: 0.2,
      })
      .to(glass, {
        opacity: 0,
        duration: 0.4,
      });
    tl.add(gtl, 0);

    const grtl = gsap.timeline();
    grtl
      .to(grape, {
        top: "70vh",
        left: "15vw",
        rotate: 30,
        duration: 0.2,
      })
      .to(grape, {
        opacity: 0,
        duration: 0.4,
      });
    tl.add(grtl, 0);

    const b1tl = gsap.timeline();
    b1tl
      .to(bottle1, {
        top: "60vh",
        right: "20vw",
        rotate: 30,
        duration: 0.2,
      })
      .to(bottle1, {
        opacity: 0,
        duration: 0.4,
      });
    tl.add(b1tl, 0);

    const b2tl = gsap.timeline();
    b2tl
      .to(bottle2, {
        top: "20vh",
        left: "20vw",
        rotate: -30,
        duration: 0.2,
      })
      .to(bottle2, {
        opacity: 0,
        duration: 0.4,
      });
    tl.add(b2tl, 0);
  });

  return (
    <React.Fragment>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          {/* Main heading section */}
          <Header />

          <div className="container mx-auto md:py-0 pb-20">
            <div className="container mx-auto md:px-0 px-4 ">
              <div className="md:flex md:justify-end justify-start text-[#BD936B] text-xs font-normal   uppercase leading-3 tracking-tight md:pt-5 pt-4  tracking-[ 0.24px]">
                {/* <p> appreciating your wine,</p>
            <p>guarding its emotions</p> */}
              </div>

              <div className="md:text-center pt-8">
                <div className="relative">
                  <h3 className="font-['Canela'] text-zinc-800 md:text-4xl font-light  md:leading-[44px] tracking-[-0.36px]  md:text-center   text-[21px]  leading-[29px]">
                    The future of wine investing
                  </h3>
                </div>
                {/* here is main text-div  */}
                <div className="relative">
                  <h1 className=" text-zinc-800 md:text-[7.75rem] font-normal tracking-tight leading-[7.75rem]">
                    secure, transparent, <br /> easily tradable
                  </h1>
                </div>
              </div>

              <Image
                src={getStartedBtn}
                className="fixed right-12"
                alt="GetStarted"
                onClick={() => {
                  gsap.to(window, {
                    duration: 0,
                    scrollTo: "#start_investing",
                  });
                }}
              />
            </div>
          </div>

          <div className="w-full relative h-[90vh] mt-[12vh]" ref={container}>
            <div
              className="absolute top-[-420px] md:block hidden 
        left-[25%] translate-x-[-50%]
        "
              ref={grapeRef}
            >
              <Image src={grapes} alt="image-icon" />
            </div>
            <div
              className="absolute -top-[412px] right-[15vw] md:block hidden"
              ref={bottle1Ref}
            >
              <Image src={bottleIllustration} alt="image-icon" />
            </div>
            <div
              className="absolute left-[20vw] -top-[20vh] md:block hidden"
              ref={bottle2Ref}
            >
              <Image src={bottleIllustrations} alt="image-icon" />
            </div>
            <div className="absolute -top-36 right-[18vw]" ref={glassRef}>
              <Image src={glass} alt="glass image" />
            </div>

            <div
              className="absolute bg-[#ECDDC0] w-[878px] h-[878px] z-0
      top-[50%] translate-y-[-50%] 
      left-[50%] translate-x-[-50%] 
      rounded-[1000px] block"
              ref={round}
            ></div>

            <div
              className="block absolute overflow-hidden w-[735px] h-[735px] rounded-[1000px] m-auto
      top-[50%] translate-y-[-50%] 
      left-[50%] translate-x-[-50%] 
        " ref={round2}>
              <video className="absolute left-1/2 z-0 max-w-none object-cover -translate-x-1/2" autoPlay loop muted>
                <source src='assets/video/231215_Vinesia_Hero_3_360.mp4' media="all and (max-width: 700px)" />
                <source src='assets/video/231215_Vinesia_Hero_3.mp4' />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div className="mt-[-80vh] mb-[80vh]" id="start_investing"></div>
          <div className="text-center w-full">
            <Link href="/invest">
              <button className="px-8 py-4 bg-orange-700 rounded-[48px] justify-center items-center gap-3 inline-flex text-center text-white text-xs font-normal  uppercase leading-3 tracking-tight">
                START INVESTING NOW
                <span>
                  <Arrows storke="#FFFFFF" />
                </span>
              </button>
            </Link>
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
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
