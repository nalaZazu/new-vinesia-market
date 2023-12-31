import React from "react";
import ProductCards from "../productCard/page";
import playvideo from "@/assets/icons/Playbtn.svg";
import Image from "next/image";
import { Arrows } from "@/assets/icons/Icons";
import { ItemCardDto } from "@/types/productCard.dto";
import Link from "next/link";
export default function YouMayAlso({ items }: { items?: ItemCardDto[] }) {
  if (items === undefined || items.length === 0) {
    return <></>
  }

  return (
    <div>
      <div className=" pb-12">
        <h1 className=" text-4xl font-light text-[#2F222B]">
          You may also like
        </h1>
      </div>
      <section className="">
        <div className="container mx-auto">
          <div className="container max-w-[1248px] grid mx-auto grid-cols-4">
            {/* <div className="h-[620px] flex text-center items-center bg-no-repeat bg-top bg-[url('https://i.ibb.co/093w7Mf/imageplayer.png')]">
              <div className="mx-auto flex flex-col justify-between space-y-[242px]">

                <div>
                  <h6 className="text-white text-[21px] font-light leading-[29px] tracking-wide">
                    Vinesia Art Collections
                  </h6>
                  <Link href="/wacollections">
                    <div className="flex justify-center pt-7">
                      <button
                        type="button"
                        className="text-base text-white bg-spacegray focus:ring-4 focus:outline-none   font-medium   text-center  px-8 py-[22px] rounded-[48px] border border-white border-opacity-40 justify-center items-center gap-3 inline-flex"
                      >
                        Explore
                        <span>
                          <Arrows storke="#FFFFFF" />
                        </span>
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            </div> */}

            {items?.slice(0, 3)?.map((item: any, index: any) => {
              return (
                <div key={index} className="max-w-[288px] mx-auto">
                  <ProductCards item={item} />
                </div>
              );
            })}
            {/* <Product /> */}
          </div>
        </div>
      </section>
    </div>
  );
}
