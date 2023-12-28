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

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

    ScrollSmoother.create({
      smooth: 1,
      effects: true,
    });
    // CustomEase.getSVGData("wiggle", {
    //   width: 1000,
    //   height: 200,
    //   path: "#ease",
    // });
    // CustomWiggle.create("wiggle", { wiggles: 10 });
    // TweenMax.to("#ball", 4, { x: 300, ease: "wiggle" });
    const path = document.querySelector(".infinity") as any;
    const circle = document.querySelector(".circle") as any;

    if (path && circle) {
      const val = { distance: 0 };

      gsap.to(val, {
        distance: path.getTotalLength(),
        repeat: -1,
        duration: 5,
        onUpdate: () => {
          const point = path.getPointAtLength(val.distance);
          // Update the circle coordinates
          circle.setAttribute("cx", point.x);
          circle.setAttribute("cy", point.y);
        },
      });
    }
  });

  return (
    <div className="pt-24 pb-40">
      <div className="container mx-auto">
        <div className="flex justify-between -mb-16 relative z-50">
          {isVisible && (
            <>
              <span className="circle">
                <InfoTooltip
                  icon={
                    <div className="w-16 h-16 fade-in bg-slate-700 rounded-full flex justify-center items-center vinesia-icon-animation">
                      <p className=" text-center text-white text-lg font-semibold leading-relaxed">
                        01
                      </p>
                    </div>
                  }
                />
              </span>
            </>
          )}
        </div>
        <div id="section" className="h-1"></div>
      </div>
      <div className="relative z-0">
        <div>
          <svg
            className="line1 absolute infinity"
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
        <div id="ball"></div>
        <div>
          <svg
            className="line2 absolute"
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
      </div>
    </div>
  );
}
