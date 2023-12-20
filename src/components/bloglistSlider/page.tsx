import Image from "next/image";

import React from "react";
import { BlogLists } from "@/constants/accrodion";
import Pagations from "@/common/Pagations/page";

const BlogListSlider = () => {
  return (
    <React.Fragment>
      <div className="grid md:grid-cols-3 gap-8 pt-12 grid-cols-1 md:px-0 px-4 ">
        {BlogLists?.map((item: any, index: any) => {
          const { title, image } = item;
          return (
            <div key={index}>
              <Image src={image} alt="image" />
              <div className="py-8">
                <span className="text-[#906447] text-xs font-normal  uppercase leading-[18px] tracking-tight">
                  WINE INVESTMENT
                </span>
                <h3 className="text-zinc-800 text-[21px] font-light  leading-[29px] tracking-wide pb-4 ">
                  {title}
                </h3>
                <span className="text-zinc-500 text-xs font-normal   uppercase leading-[18px] tracking-tight">
                  12/11/2023
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <Pagations />
    </React.Fragment>
  );
};

export default BlogListSlider;
