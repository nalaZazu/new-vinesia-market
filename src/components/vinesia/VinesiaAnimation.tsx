"use client";
import InfoTooltip from "@/common/InfoTooltip";
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

export default function VinesiaAnimation() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = document.querySelector("#section");
    const handleScroll = () => {
      if (section) {
        const rect = section.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;
        setIsVisible(rect.top <= windowHeight && rect.bottom >= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check visibility when the component first mounts

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="pt-24">
      <div>
        <div className="flex justify-between relative z-50 px-24 ">
          {isVisible && (
            <>
              <div className="flex justify-center flex-col items-center gap-6 -mb-[140px]">
                <div className="max-w-[300px] fade-in-box p-6 bg-orange-50 rounded flex-col justify-start items-start gap-2 inline-flex">
                  <p className="self-stretch text-zinc-800 text-lg font-semibold leading-relaxed">
                    Browse wine selection
                  </p>
                  <p className="self-stretch text-neutral-600 text-base font-normal leading-snug">
                    Explore our marketplace and discover wine products. Feel
                    free to reach out for investment guidance.
                  </p>
                </div>
                <div className="w-16 h-16 fade-in bg-slate-700 rounded-full flex justify-center items-center vinesia-icon-animation">
                  <p className=" text-center text-white text-lg font-semibold leading-relaxed">
                    01
                  </p>
                </div>
              </div>

              <div className="flex justify-center flex-col items-center gap-6 -mb-[160px]">
                <div className="max-w-[300px] fade-in-box p-6 bg-orange-50 rounded flex-col justify-start items-start gap-2 inline-flex">
                  <p className="self-stretch text-zinc-800 text-lg font-semibold leading-relaxed">
                    Invest in assets
                  </p>
                  <p className="self-stretch text-neutral-600 text-base font-normal leading-snug">
                    When purchasing directly from us, proceed to checkout and
                    pay by credit card, bank transfer or from your wallet with €
                    or US Dollars. If bidding on assets held by other investors,
                    top up your wallet first.
                  </p>
                </div>
                <div className="w-16 h-16 fade-in bg-slate-700 rounded-full flex justify-center items-center vinesia-icon-animation">
                  <p className=" text-center text-white text-lg font-semibold leading-relaxed">
                    03
                  </p>
                </div>
              </div>

              <div className="flex justify-center flex-col items-center gap-6 -mb-[70px]">
                <div className="max-w-[300px] fade-in-box p-6 bg-orange-50 rounded flex-col justify-start items-start gap-2 inline-flex">
                  <p className="self-stretch text-zinc-800 text-lg font-semibold leading-relaxed">
                    Sell your assets
                  </p>
                  <p className="self-stretch text-neutral-600 text-base font-normal leading-snug">
                    Conveniently set an ask price for your assets with 1 click.
                    Other investors can accept or bid a different amount. You
                    maintain control over your assets and decide when and how
                    much to sell for.
                  </p>
                </div>
                <div className="w-16 h-16 fade-in bg-slate-700 rounded-full flex justify-center items-center vinesia-icon-animation">
                  <p className=" text-center text-white text-lg font-semibold leading-relaxed">
                    05
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
        <div id="section" className="h-1"></div>
        {isVisible && (
          <>
            <div className="scrollelement">
              <svg
                className="line1"
                viewBox="0 0 1440 174"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="ease"
                  d="M-214 172.999C-164.333 105.332 -2.3 -14.101 248.5 49.499C562 128.999 729 236.999 1045.5 93.499C1362 -50.001 1462 5.49894 1655 49.499"
                  stroke="#A9B5BE"
                />
              </svg>
            </div>
            <div className="-mt-[10%]">
              <svg
                className="line2"
                viewBox="0 0 1440 174"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M-71 22.0448C-22.5 47.1645 120.5 145.823 318.598 161.818C525.603 178.533 680.147 17.6219 854.467 3.03576C1112.83 -18.5829 1231.76 138.336 1512 173"
                  stroke="#A9B5BE"
                />
              </svg>
            </div>
          </>
        )}
        <div className="flex justify-around relative z-50 px-40">
          {isVisible && (
            <>
              <div className="flex justify-center flex-col flex-wrap items-center gap-6 -mt-[60px]">
                <div className="w-16 h-16 fade-in bg-slate-700 rounded-full flex justify-center items-center vinesia-icon-animation">
                  <p className=" text-center text-white text-lg font-semibold leading-relaxed">
                    02
                  </p>
                </div>
                <div className="max-w-[300px] fade-in-box p-6 bg-orange-50 rounded flex-col justify-start items-start gap-2 inline-flex">
                  <p className="self-stretch text-zinc-800 text-lg font-semibold leading-relaxed">
                    Create your profile
                  </p>
                  <p className="self-stretch text-neutral-600 text-base font-normal leading-snug">
                    Create a profile on Vinesia to create your personal wallet
                    for seamless investing. You can use various social logins
                    for quick access (Google, Facebook,...).
                  </p>
                </div>
              </div>

              <div className="flex justify-center flex-col items-center gap-6 -mt-[190px]">
                <div className="w-16 h-16 fade-in bg-slate-700 rounded-full flex justify-center items-center vinesia-icon-animation">
                  <p className=" text-center text-white text-lg font-semibold leading-relaxed">
                    04
                  </p>
                </div>
                <div className="max-w-[300px] fade-in-box p-6 bg-orange-50 rounded flex-col justify-start items-start gap-2 inline-flex">
                  <p className="self-stretch text-zinc-800 text-lg font-semibold leading-relaxed">
                    Track your portfolio
                  </p>
                  <p className="self-stretch text-neutral-600 text-base font-normal leading-snug">
                    Keep an eye on your assets in real time through your
                    personal portfolio. Access pricing info and verify asset
                    status: authenticity, ownership, and storage conditions.
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

// useGSAP(() => {
//   gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

//   ScrollSmoother.create({
//     smooth: 1,
//     effects: true,
//   });

//   const path = document.querySelector(".infinity") as any;
//   const circle = document.querySelector(".circle") as any;

//   if (path && circle) {
//     const val = { distance: 0 };

//     gsap.to(val, {
//       distance: path.getTotalLength(),
//       repeat: -1,
//       duration: 5,
//       onUpdate: () => {
//         const point = path.getPointAtLength(val.distance);

//         circle.setAttribute("cx", point.x);
//         circle.setAttribute("cy", point.y);
//       },
//     });
//   }
// });
