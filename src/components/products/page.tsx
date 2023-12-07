import React from "react";
import winebotel from "../../assets/images/winebotel1.png";
import Art from "../../assets/images/arat.png";
import Image from "next/image";

const Product = () => {
  return (
    <React.Fragment>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mt-16">
        {[1, 2, 3, 4, 5, 6, 7, 8]?.map((item: any, i: any) => {
          return (
            <div key={i} className="card_shape_slider relative  mx-auto w-full">
              <div className="max-w-[288px] h-[674px] mx-auto ">
                <div className="flex justify-center max-w-[182px] mx-auto ">
                  <Image src={winebotel} alt="Picture of the author" />
                </div>
                <div className="flex flex-col items-center gap-8 pt-10">
                  <div className="justify-start items-start gap-2 inline-flex">
                    <div className="p-2 h-9 bg-zinc-800 rounded-[30px] border flex justify-end items-center gap-1.5">
                      <Image src={Art} alt="Picture of the author" />
                      <p className="text-center text-white text-xs font-normal uppercase leading-3 tracking-tight">
                        ARTWORK
                      </p>
                    </div>
                    <div className="p-2 h-9 bg-green-500 rounded-[30px] border flex justify-start items-center gap-1.5">
                      <div className=" w-2 h-2 bg-white rounded-full" />
                      <p className="text-center text-white text-xs font-normal uppercase leading-3 tracking-tight">
                        Available
                      </p>
                    </div>
                  </div>
                  <div className="flex-col items-center gap-6 flex">
                    <h3 className="max-w-[243px] text-center text-zinc-800 text-[21px] font-light  leading-[29px] tracking-wide">
                      Brunello di Montalcino {`"Piaggione"`} | Winery name |
                      2019
                    </h3>
                    <p className="text-neutral-600 text-base font-normal leading-snug ">
                      OWC 6 x 0,75 cl + Artwork
                    </p>
                  </div>
                </div>
                <div className=" flex justify-around items-center pt-8">
                  <div className="flex-col justify-center items-center gap-2 inline-flex">
                    <div className="text-center text-stone-500 text-xs font-normal uppercase leading-3 tracking-tight ">
                      EST. PRICE
                    </div>
                    <div className="text-zinc-800 text-[21px] font-light  leading-[29px] tracking-wide ">
                      €3,600
                    </div>
                  </div>
                  <div className="flex-col justify-center items-center gap-2 inline-flex">
                    <div className="text-center text-stone-500 text-xs font-normal uppercase leading-3 tracking-tight">
                      EST. PRICE
                    </div>
                    <div className="text-zinc-800 text-[21px] font-light  leading-[29px] tracking-wide">
                      €3,600
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-col justify-start items-center gap-4 flex absolute left-0 right-0 bottom-10">
                <button className="px-8 py-5 bg-orange-700 rounded-full justify-center items-center gap-3 inline-flex text-center text-white text-xs font-normal uppercase leading-3 tracking-tight">
                  SEE OVERVIEW
                </button>
                <div className="text-center flex gap-1">
                  <span className="text-neutral-600 text-base font-normal leading-snug ">
                    50 Bottles
                  </span>
                  <span className="text-stone-300 text-base font-normal leading-snug">
                    /
                  </span>
                  <span className="text-red-700 text-base font-normal leading-snug">
                    14 Remaining
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Product;
