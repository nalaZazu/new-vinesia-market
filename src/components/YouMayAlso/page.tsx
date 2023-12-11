import React from "react";
import ProductCards from "../productCard/page";
import playvideo from "@/assets/icons/Playbtn.svg";
import Image from "next/image";
import { Arrows } from "@/assets/icons/Icons";
export default function YouMayAlso() {
  return (
    <div>
      <section className=" py-14 px-4 lg:px-0 md:px-4">
        <div className="container mx-auto">
          <div className="md:basis-3/5 lg:basis-3/5 basis-full z-0 pt-10">
            <div className="container grid mx-auto gap-6 lg:grid-cols-4 md:grid-cols-2 grid-cols-2">
              <div className="flex text-center items-center md:items-center lg:items-end lg:text-center h-[640px] bg-no-repeat bg-contain bg-center bg-[url('https://i.ibb.co/093w7Mf/imageplayer.png')] max-w-[289px] relative bottom-16">
                <div>
                  <div className="absolute top-32 left-20 ">
                    {/* 130 , 68 */}
                    <Image src={playvideo} alt="image" />
                  </div>
                  <div className="absolute bottom-12 left-6">
                    <h6 className="text-white text-[21px] font-light   leading-[29px] tracking-wide">
                      Vinesia Art Collections
                    </h6>
                    <div className="flex justify-center pt-7">
                      <button
                        type="button"
                        className="text-base   text-white bg-spacegray focus:ring-4 focus:outline-none   font-medium   text-center  px-8 py-[22px] rounded-[48px] border border-white border-opacity-40 justify-center items-center gap-3 inline-flex"
                      >
                        Explore
                        <span>
                          <Arrows storke="#FFFFFF" />
                        </span>{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {[1, 2, 3]?.map((item: any, index: any) => {
                return (
                  <div key={index}>
                    <ProductCards />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
