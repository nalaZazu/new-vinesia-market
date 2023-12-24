import { NextIcon } from "@/assets/icons/Icons";
import ProductCards from "@/components/productCard/page";
import { ProductList } from "@/constants/products";
import artists from "@/assets/images/artists.png";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Artists() {
  return (
    <div>
      {/* Reso */}
      <div className="grid grid-cols-2">
        <div className="flex-col justify-start items-start gap-10 flex pe-[140px]">
          <div className="flex-col justify-start items-start gap-6 flex">
            <h3 className=" h-[31px] text-zinc-800 text-4xl font-light leading-[44px]">
              Reso
            </h3>
            <p className=" text-neutral-600 text-base font-normal leading-snug">
              New York’s contrasts and diverse experiences shaped Reso’s
              creativity, leading him to explore typography and the power of
              letters to evoke emotions in viewers. <br />
              <br />
              His art, born in secrecy yet attracting extreme attention, later
              evolved into a multidimensional experience where letters
              overlapped, and functionality gave way to artistic expression. 
            </p>
          </div>
          <Link href="/wacollections/reso">
            <div className="flex items-center gap-3 ">
              <button className="border-b-2 border-orange-700 border-opacity-20 text-orange-700 text-xs font-normal uppercase leading-[18px] tracking-tight">
                MEET THE ARTIST
              </button>
              <NextIcon />
            </div>
          </Link>

          <Image src={artists} alt="" />
        </div>

        <div>
          <div className="grid grid-cols-2 gap-8 max-w-[608px]">
            {ProductList.slice(0, 2).map((items, i) => {
              return (
                <div key={i}>
                  <ProductCards item={items} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* monsieurZ */}
      <div className="grid grid-cols-2 pt-40">
        <div>
          <div className="grid grid-cols-2 gap-8 max-w-[608px]">
            {ProductList.slice(0, 2).map((items, i) => {
              return (
                <div key={i}>
                  <ProductCards item={items} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex-col gap-10 flex ps-[140px]">
          <div className="flex-col gap-6 flex">
            <h3 className=" h-[31px] text-zinc-800 text-4xl font-light leading-[44px]">
              Monsieur Z
            </h3>
            <p className=" text-neutral-600 text-base font-normal leading-snug">
              Monsieur Z, also known as Richard Zielenkiewicz, is a French
              illustrator and graphic designer currently residing in France.
              Over his 25-year artistic career, he has collaborated with
              prestigious magazines worldwide, including Wallpaper magazine,
              Vogue Japan, Marie Claire, ELLE Spain, and many more. <br />
              <br />
              To add to his repertoire, he is the creator of the animated TV
              series “Ratz,” currently streaming on Netflix. Vinesia has
              partnered with him to create exclusive art for various
              collections. 
            </p>
          </div>
          <Link href="/wacollections/reso">
            {" "}
            <div className="flex items-center gap-3 ">
              <button className="border-b-2 border-orange-700 border-opacity-20 text-orange-700 text-xs font-normal uppercase leading-[18px] tracking-tight">
                MEET THE ARTIST
              </button>
              <NextIcon />
            </div>
          </Link>

          <Image src={artists} alt="" />
        </div>
      </div>
    </div>
  );
}
