"use client";
import Dropdown from "@/common/DropDown/page";
// import VerticalBreadCrumb from "@/common/verticalBreadcrumb/page";
import React, { useEffect, useState } from "react";
import MobileFilter from "../../invest/moibleview/page";
import Product from "@/components/products/page";
import Newsletter from "@/components/newsletter/page";
import Footer from "@/components/footer/page";
import NewsletterMobile from "@/components/newsletter/MobileView";
import ScrollAnimation from "@/common/ScrollAnimation/page";
import useSWR from "swr";
import FilterSection from "@/components/FilterSection/page";

function Reso({ params }: { params: any }) {
  const { slug } = params;

  const [selectedFilters, setSelectedFilters] = useState<any>([]);
  const [priceRange, setPriceRange] = useState([]);
  const fetcher = async (url: string, payload?: string) => {
    const options = {
      method: "POST",
      ...(selectedFilters && {
        body: JSON.stringify({
          filters: selectedFilters,
          price:
            priceRange?.length > 0
              ? { min: priceRange[0], max: priceRange[1] }
              : {},
        }),
      }),
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    return fetch(url, options).then((res) => res.json());
  };

  const { data, error, isLoading, mutate } = useSWR(
    `${process.env.NEXT_PUBLIC_API_ADDRESS}products/search`,
    fetcher
  );
  useEffect(() => {
    mutate();
  }, [selectedFilters, priceRange, mutate]);

  useEffect(() => {
    if (slug) {
      setSelectedFilters([decodeURIComponent(slug)]);
    }
  }, [slug]);

  return (
    <React.Fragment>
      <div className=" absolute -z-10 top-0 left-0 right-0 ">
        <div className="w-full md:h-[744px] sm:h-[1000px] h-[740px] bg-no-repeat bg-cover md:bg-center bg-bottom md:bg-[url('https://i.ibb.co/QfzgMwN/image-137-1.png')] bg-[url('https://i.ibb.co/BG3QMfR/reso-bg.png')] relative">
          <div className="container mx-auto px-6 md:px-4 relative ">
            {/* BreadCrumb start */}

            {/* <VerticalBreadCrumb /> */}

            {/* BreadCrumb end */}
            <div className="flex md:items-end items-start container mx-auto md:h-[644px] md:ps-40 ps-0 pt-48">
              <div>
                <div className="pb-3">
                  <p className="  text-white text-xs font-normal  uppercase leading-3 tracking-tight">
                    Meet the Artist
                  </p>
                </div>
                <div>
                  <h1 className="text-white md:text-[144px] font-normal text-6xl ">
                    Reso
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* text */}
        <div className="flex flex-wrap py-20 max-w-[1030px] mx-auto gap-8">
          <div className="pb-7 md:pb-0">
            <p className="max-w-[499px] text-zinc-800 text-base font-normal leading-snug">
              France is renowned worldwide for its exquisite wines, each region
              offering a unique and distinct flavor profile. Bordeaux, in the
              southwest, is celebrated for its robust reds, notably blends of
              Merlot, Cabernet Sauvignon, and Cabernet Franc. Burgundy, in the
              east, is famed for its Pinot Noir and Chardonnay, reflecting the
              {`region's`} terroir with elegance and finesse.
            </p>
          </div>
          <div>
            <p className="max-w-[499px] text-zinc-800 text-base font-normal leading-snug">
              Champagne, a region in the northeast, is synonymous with sparkling
              wine, using the traditional méthode champenoise to produce the
              iconic bubbly. The Loire Valley is diverse, boasting a range of
              white, red, rosé, and sparkling wines, with Sauvignon Blanc and
              Cabernet Franc being prominent.
            </p>
          </div>
        </div>

        {/* Destop View */}
        <div className="max-w-[1248px] mx-auto ">
          <hr className="border border-orange-700 border-opacity-20" />
          <div className="my-20 ">
            <FilterSection
              selectedFilters={selectedFilters}
              setSelectedFilters={setSelectedFilters}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
            />
          </div>
          {/* Mobile view */}
          <Product items={data?.data} />
        </div>
        {/* desktop Newsletter*/}
        <div className="hidden sm:block">
          <Newsletter />
        </div>
        {/* mobile Newsletter */}
        <div className="block sm:hidden">
          <NewsletterMobile />
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default Reso;
