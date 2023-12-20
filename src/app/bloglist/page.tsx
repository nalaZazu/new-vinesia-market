import Image from "next/image";
import React from "react";
import banner from "@/assets/images/featured_banner.png";
import featured1 from "@/assets/images/featured1.png";
import featured2 from "@/assets/images/featured2.png";
import lineregion from "@/assets/icons/lineregion.svg";
import TabButton from "@/common/TabButton";
import BlogListSlider from "@/components/bloglistSlider/page";
import NewslettersTwo from "@/components/newslttersTwo/page";

const BlogList = () => {
  const countryName = [
    "All",
    "WINE INVESTMENT",
    "WINE PRODUCTION",
    "WINE REGIONS",
    "WINE REGIONS",
    "CATEGORY",
  ];
  return (
    <React.Fragment>
      <div className="container mx-auto">
        <div className="text-center pt-20 md:px-0 px-4">
          <span className="text-red-700 text-[32px] font-normal   leading-3 tracking-wide collection">
            Vinesia
          </span>
          <div className="text-zinc-800">
            <h2 className=" text-7xl font-normal   leading-[84px]">Stories</h2>
            <h4 className="pt-4 max-w-[649px] mx-auto text-[21px] font-light  leading-[29px] tracking-[0.42px] ">
              Savor the essence through time, revealing the blend of wine
              heritage, WineTech wonders, and the rich tapestry of the vinous
              history of grape chronicles.
            </h4>
          </div>
        </div>
        {/* here is featured section */}
        <div>
          <div className="pt-20 md:px-0 px-4">
            <h3 className="text-zinc-800 text-4xl font-light   leading-[44px] pb-6 ">
              Featured story
            </h3>
            <Image src={banner} alt="banner"  className="object-cover bg-center"/>
            {/* here is text area */}
            <div className="py-8">
              <span className="text-[#906447] text-xs font-normal  uppercase leading-[18px] tracking-tight">
                WINE INVESTMENT
              </span>
              <h3 className="text-zinc-800 text-4xl font-light  leading-[44px] pb-[20px]">
                Wine scoring system – how does it work? A pros/cons analysis
              </h3>
              <span className="text-zinc-500 text-xs font-normal   uppercase leading-[18px] tracking-tight">
                12/11/2023
              </span>
            </div>
          </div>
          {/* here is next section  */}
          <div>
            <div className="grid md:grid-cols-2 grid-cols-1 md:px-0 px-4 gap-8">
              {/* first div */}
              <div className=" ">
                <Image src={featured1} alt="image" />
                <div className="py-8">
                  <span className="text-[#906447] text-xs font-normal  uppercase leading-[18px] tracking-tight">
                    WINE INVESTMENT
                  </span>
                  <h3 className="text-zinc-800 text-4xl font-light   leading-[44px]  pb-[20px]">
                    Burgundy vs Barbaresco: discover the differences in these
                    regions
                  </h3>
                  <span className="text-zinc-500 text-xs font-normal   uppercase leading-[18px] tracking-tight">
                    12/11/2023
                  </span>
                </div>
              </div>
              {/* second div */}
              <div>
                <Image src={featured2} alt="image" />
                <div className="md:pt-8 md:pb-0 pt-8 pb-0">
                  <span className="text-[#906447] text-xs font-normal  uppercase leading-[18px] tracking-tight">
                    WINE INVESTMENT
                  </span>
                  <h3 className="text-zinc-800 text-4xl font-light   leading-[44px]  pb-[20px]">
                    Burgundy vs Barbaresco: discover the differences in these
                    regions
                  </h3>
                  <span className="text-zinc-500 text-xs font-normal   uppercase leading-[18px] tracking-tight">
                    12/11/2023
                  </span>
                </div>
              </div>
            </div>
            {/* here is waving image  */}
            <div className="underline decoration-wavy md:py-16 py-8 text-center flex justify-center">
              <Image src={lineregion} alt="image" />
            </div>
            {/* here is tabs section with slider  */}
            <div className="max-w-full  border-t-2  border-b-2  border-orange-700 border-opacity-20">
              <TabButton data={countryName} />
            </div>
            {/* here is slider section */}
            <BlogListSlider />
            {/* here is newsletters */}
            <NewslettersTwo />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BlogList;
