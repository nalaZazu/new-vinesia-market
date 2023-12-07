"use client";
import Image from "next/image";
import React from "react";
import alert from "../../assets/icons/alert-circle.svg";
// import arrow from "../../assets/icons/arrow-right2.svg";
import wine from "../../assets/images/critcsimage.png";
import signature from "../../assets/images/signature.png";
import { Arrows } from "@/assets/icons/Icons";

const Critics = () => {
  return (
    <div className="pt-16 pb-5 sm:py-8">
      {/* critics-section */}
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-[60px] md:gap-[30px] gap-4">
        <div className="flex">
          <ul className=" text-secondary text-lg font-semibold  tracking-tight">
            <li className=" mt-4 flex gap-[63px] align-top items-center cursor-pointer">
              <span className=" text-xxl font-semibold  tracking-tight  text-critcscount">
                01
              </span>
              <div className=" col-span-4 pe-3">
                <div className="text-primary">
                  {" "}
                  Chateau La Mission Haut Brion Cru Classe 2009
                </div>
              </div>
            </li>
            <li className=" mt-4 flex gap-[63px] align-top items-center cursor-pointer">
              <span className=" text-xxl font-semibold  tracking-tight text-critcscount">
                02
              </span>
              <div className=" col-span-4 pe-3">
                <div className="text-critcscount">
                  Chateau La Mission Haut Brion Cru Classe 2009
                </div>
              </div>
            </li>
            <li className=" mt-4 flex gap-[63px] align-top items-center cursor-pointer">
              <span className=" text-xxl font-semibold  tracking-tight  text-critcscount">
                03
              </span>
              <div className=" col-span-4 pe-3">
                <div className="text-critcscount">
                  Chateau La Mission Haut Brion Cru Classe 2009
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="col-span-2 ">
          <div>
            <div className="flex">
              <div>
                <Image src={wine} alt="image" className="mr-2" />
              </div>
              <ul className=" md:w-1/2 px-4  text-base font-medium   tracking-tight flex flex-col justify-between text-critparacolor">
                <li>
                  “This wine blushes in the glass like a tender, rosy dawn,
                  inviting the drinker to embrace its delicate hue. The play of
                  soft pinks and hints of coral dances under the light, hinting
                  at the allure within.
                </li>
                <li className="mt-5">
                  Nose: The first inhalation enchants with a floral bouquet
                  reminiscent of a blooming garden in spring. Notes of fresh
                  roses and lavender harmoniously intertwine, giving this wine a
                  sweet and aromatic charm.{" "}
                </li>
                <li className="mt-5">
                  Taste: The initial sip caresses the palate with the gentle
                  embrace of ripe strawberries, teasing the taste buds with
                  their luscious juiciness. A subtle citrus outhfeel that
                  enhances the overall elegance of this wine.
                </li>
                <div className="text-center"></div>
              </ul>
            </div>
          </div>
        </div>

        <div className=" ">
          <div>
            <div>
              <h2 className="  flex items-center text-stone-500 text-xs font-normal  percase leading-3 tracking-tight">
                Vinesia Score
                <Image
                  src={alert}
                  alt="Picture of the author"
                  width={15}
                  height={15}
                  quality={75}
                  style={{ objectFit: "contain" }}
                  className="ml-2"
                />
              </h2>
              <div className="flex flex-col ">
                <span className="  tracking-tight   text-zinc-800 text-7xl font-normal  ">
                  5/5
                </span>
                <span className=" mt-8  text-stone-500 text-xs font-normal  uppercase leading-3 tracking-tight">
                  Critiqued By
                </span>
                <span className="text-zinc-800 text-lg font-semibold  leading-relaxed">
                  Robert Parker
                </span>
              </div>
              <span>
                <Image src={signature} alt="signature" />
              </span>
              <button className="w-[156px] h-10 px-4 py-2.5 rounded-[48px] border border-orange-700 justify-center items-center gap-2 inline-flex text-center text-orange-700 text-xs font-normal  uppercase leading-3 tracking-tight cursor-pointer">
                Invest now
                <span>
                  <Arrows storke="#BF4D20" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Critics;
