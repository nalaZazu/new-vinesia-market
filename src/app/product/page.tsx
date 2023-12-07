import VerticalBreadCrumb from "@/common/verticalBreadcrumb/page";
import React from "react";
import { AlertIcons, Arrows } from "@/assets/icons/Icons";

const Product = () => {
  return (
    <React.Fragment>
      <div className="container mx-auto pt-3 md:pt-5 lg:pt-10 pb-7 px-4">
        <div className="mx-auto w-[929px] text-center">
          <h1 className="text-zinc-800  md:text-7xl md:leading-[84px] text-4xl font-normal leading-[42px]">
            Chateau La Mission Haut Brion Cru Classe | 2009
          </h1>
        </div>
      </div>

      <div className="flex">
        <div className="basis-1/12">{/* <VerticalBreadCrumb /> */}</div>
        <div className=" basis-5/6">
          <div className="grid grid-cols-3 gap-2">
            <div className="pt-10 flex">
              <div className="pb-6 ">
                <div className="space-y-4 flex gap-4 items-center   text-stone-500 text-base font-normal   leading-snug">
                  <p>First release date</p>
                  <div className="w-[30px] h-[0px] border border-orange-700 border-opacity-20"></div>
                  <p className="text-zinc-800 text-base font-normal leading-snug">
                    Sep 29, 2023
                  </p>
                </div>
                <div className=" space-y-4 flex gap-4 items-center text-stone-500 text-base font-normal leading-snug">
                  <p>Owner</p>
                  <div className="w-[30px] h-[0px] border border-orange-700 border-opacity-20"></div>
                  <p className="text-zinc-800 text-base font-normal leading-snug">
                    Vinesia
                  </p>
                </div>
                <div className="space-y-4 flex gap-4 items-center text-stone-500 text-base font-normal leading-snug">
                  <p>Edition</p>
                  <div className="w-[30px] h-[0px] border border-orange-700 border-opacity-20"></div>
                  <p className="text-zinc-800 text-base font-normal leading-snug">
                    #1 from 24
                  </p>
                </div>
                <div className="space-y-4 flex gap-4 items-center text-stone-500 text-base font-normal leading-snug">
                  <p>Wine asset ID</p>
                  <div className="w-[30px] h-[0px] border border-orange-700 border-opacity-20"></div>
                  <p className="text-zinc-800 text-base font-normal leading-snug">
                    123_1234_1345678
                  </p>
                </div>
                {/* here is next section */}
                <div className="flex gap-2 items-center mt-12 mb-4 ">
                  <span className=" text-center text-orange-700 text-xs font-normal  uppercase leading-3 tracking-tight">
                    Product integrity certificates
                  </span>
                  <span>
                    <Arrows storke="#BF4D20" />
                  </span>
                </div>
                {/* end of section */}
                {/* price section */}
                <div className="w-[428px] h-[324px] p-8 bg-slate-700">
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <p className="  text-gray-300 text-xs font-normal   uppercase leading-3 tracking-tight">
                        ASK PRICE
                      </p>
                      <AlertIcons />
                    </div>
                    <div className="p-2 h-9 bg-green-500 rounded-[30px]   flex justify-start items-center gap-1.5">
                      <div className=" w-2 h-2 bg-white rounded-full" />
                      <p className="text-center text-white text-xs font-normal uppercase leading-3 tracking-tight">
                        Available to buy
                      </p>
                    </div>
                  </div>

                  {/* next secion */}
                  <div>
                    <h6 className="text-white text-4xl font-light  leading-[44px]">
                      €66,666
                    </h6>
                    <div className="flex gap-4 mt-2">
                      <p className="text-gray-300 text-base font-normal  leading-snug">
                        Last sale: €66,666{" "}
                      </p>
                      <div
                        className=" 
                        flex items-center gap-2
                        text-white
                        text-xs
                        font-normal
                        uppercase
                        leading-3
                        tracking-tight"
                      >
                        MORE
                        <span>
                          {" "}
                          <Arrows storke="#FFFFFF" />
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* next  section */}

                  <button
                    type="submit"
                    className="text-center   text-xs font-normal  px-8 py-[22px] bg-white rounded-[48px]  w-full mt-4  uppercase leading-3 tracking-tight justify-center items-center gap-3 inline-flex text-orange-700"
                  >
                    ACCEPT ASK
                  </button>

                  <button
                    type="submit"
                    className="text-center   px-8 py-[22px]  rounded-[48px]  w-full mt-4  uppercase leading-3 tracking-tight justify-center items-center gap-3 inline-flex  text-white text-xs font-normal   border border-white border-opacity-40 "
                  >
                    Place a bid
                  </button>
                </div>
              </div>

              <div>
                <hr className=" border-t-2" />
              </div>
            </div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="basis-1/12"></div>
      </div>
    </React.Fragment>
  );
};

export default Product;