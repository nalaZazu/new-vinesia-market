import Image from "next/image";
import React from "react";
import PricingDetail from "../ProductOverView/PricingDetails";
import TabButton from "@/common/TabButton";
import Appactivity from "../charts/page";
import { releaseDetailsList } from "@/constants/products";
import infologo from "@/assets/icons/info.svg";
const ReleaseDetails = ({ data }: { data: any }) => {
  const countryName = ["DEFAULT", "WEEKLY", "Monthly", "YEARLY"];
  return (
    <React.Fragment>
      <section className="container mx-auto md:py-40 py-10">
        <div className="md:flex justify-between items-center">
          <div className="flex justify-between md:pb-6 pb-6  md:py-0 py-6 md:bg-transparent bg-[#F7EFDF] px-4 md:px-0 items-center">
            <h2 className="text-zinc-800 md:text-7xl md:font-normal md:leading-[84px] text-base font-semibold leading-snug">
              Release details
            </h2>
          </div>
          <div className="flex flex-wrap md:gap-4 md:px-0 px-4 pt-8 md:pt-0">
            <p className="flex gap-4 items-center">
              <span className="text-zinc-800 text-base font-normal md:leading-snug">
                On the market are
              </span>
              <span className=" text-zinc-800 text-lg font-semibold md:leading-relaxed">
                {data?.editions?.length}
              </span>
            </p>
            <p className="flex gap-4 items-center">
              <span className="text-zinc-800 text-base font-normal leading-snug">
                editions of this product
              </span>

              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-secondary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                  />
                </svg>
              </span>
            </p>
          </div>
        </div>
        <div className="  px-4 pb-14">
          {/* md:bg-[#FAF5EA] bg-transparent */}

          <div className="grid gap-5 lg:grid-cols-1 md:grid-cols-2 grid-cols-1 py-12">
            <div>
              <PricingDetail item={data} />
            </div>
          </div>
          {/* <div>
            <p className="text-zinc-800 text-lg font-semibold  leading-relaxed pb-4">
              Wine asset performance
            </p>
            <div className="w-full  border-t-2  border-orange-700 border-opacity-20 pb-8">
              <TabButton data={countryName} />
            </div>
            <div className="grid  md:grid-cols-12 grid-cols-1  gap-8">
              <div className="md:col-span-9   bg-[#FAF5EA] " id="productById">
                <Appactivity />
              </div>
              <div className="md:col-span-3 col-span-1">
                {releaseDetailsList?.map((items: any, index: any) => {
                  const { title, vlaue } = items;
                  return (
                    <div
                      key={index}
                      className="gap-5 p-5 w-full border  border-orange-700 border-opacity-20 flex-col justify-between items-start inline-flex"
                    >
                      <div className="flex items-center gap-3 text-[#906447] text-xs font-normal uppercase leading-3 tracking-tight">
                        <p>{title} </p>
                        <Image
                          src={infologo}
                          alt="Picture of the author"
                          className=" w-6 h-6 text-secondary"
                        />
                      </div>
                      <div className="flex gap-2 items-center">
                        <p className="text-zinc-800 text-lg font-semibold leading-relaxed">
                          {vlaue}
                        </p>
                        {index === 0 && (
                          <p className="text-zinc-800 text-xs font-normal   uppercase leading-[18px] tracking-tight">
                            +30€
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </React.Fragment>
  );
};

export default ReleaseDetails;
