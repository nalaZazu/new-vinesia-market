import { Arrows } from "@/assets/icons/Icons";
import React from "react";
import grapes from "@/assets/icons/purchaseGraphes.svg";
import bottleIllustrations from "@/assets/icons/purchaseIllustrations.svg";
import glassIllustrations from "@/assets/icons/glassIllustrations.svg";
import Image from "next/image";
import { listItemPurchase } from "@/constants/accrodion";

const Purchase = () => {
  return (
    <React.Fragment>
      <div className="max-w-[560px] cotainer mx-auto py-8">
        <div className="relative pb-12 px-4">
          <div className="md:pt-20 pt-[60px] ">
            <div className="pb-2 md:px-6 pt-[60px]  bg-orange-50 rounded-tl-[20px] rounded-tr-[20px] border border-orange-700 border-opacity-20 ">
              <div className="flex justify-center">
                <Image src={glassIllustrations} alt="image-icon" />
              </div>
              <div className="flex-col justify-center items-center  flex ">
                <h3 className="  text-green-500 md:text-4xl font-light pt-8  md:leading-[44px]  text-center  text-[21px]  leading-[29px] ">
                  Your purchase is complete
                </h3>
                <p className="  md:max-w-full max-w-[239px]  text-green-700 md:py-4  pt-2 text-base font-normal md:leading-snug text-center leading-snug">
                  Your new wines have now been added to your portfolio
                </p>
              </div>

              <div className="p-4">
                <span className="text-[#906447] ">SUMMARY</span>
                <div className="pt-4 ">
                  {listItemPurchase?.map((item: any, index: any) => {
                    const { title, amount } = item;
                    return (
                      <div className="flex justify-between " key={index}>
                        <p className="text-right text-zinc-800 text-base font-normal  leading-snug">
                          {title}
                        </p>
                        <p className="text-right text-zinc-800 text-base font-normal  leading-snug  ">
                          €{amount}
                        </p>
                      </div>
                    );
                  })}
                </div>
                <div className="border-b  pt-6 border-orange-700 border-opacity-20" />
                <div className="flex justify-between pt-6">
                  <p className="text-right text-zinc-800 text-lg font-semibold leading-relaxed">
                    Total price
                  </p>
                  <p className="text-zinc-800 text-lg font-semibold leading-relaxed">
                    € 5,863.20
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* here is total view  */}
          <button className="w-full px-2.5 py-5 bg-[#F7EFDF] rounded-bl-[20px] rounded-br-[20px] border-l border-r border-b border-orange-700 border-opacity-20  text-center  text-orange-700 text-xs font-normal  uppercase leading-[18px] tracking-tight  justify-center items-center gap-2.5 flex">
            {/* VIEW ON POLYGON{" "}
            <span>
              <Arrows storke="#BF4D20" />
            </span> */}
          </button>
          {/* end of relative div */}
          <div className="absolute top-[410px] right-[-50px] -z-10 md:block hidden">
            <Image src={grapes} alt="image-icon" />
          </div>
          <div className="absolute top-[250px] left-[-45px] -z-10 md:block hidden">
            <Image src={bottleIllustrations} alt="image-icon" />
          </div>
          {/* here is end of svg */}
        </div>
        {/* here is end of relative div */}
        <button className="px-8 py-[22px] bg-orange-700 rounded-full justify-center items-center gap-3 mx-auto flex  text-center text-white text-xs font-normal font-['Albert Sans'] uppercase leading-[18px] tracking-tight">
          VIEW INVESTMENT <Arrows storke="#FFFFFF" />
        </button>
      </div>
    </React.Fragment>
  );
};

export default Purchase;
