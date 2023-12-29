"use client";
import React, { useEffect, useState } from "react";
import Newsletter from "@/components/newsletter/page";
import Footer from "@/components/footer/page";
import VerticalBreadCrumb from "@/common/verticalBreadcrumb/page";
import Product from "@/components/products/page";
import NewsletterMobile from "@/components/newsletter/MobileView";
import useSWR from "swr";
import FilterSection from "@/components/FilterSection/page";

export default function WineryOwner({ params }: { params: any }) {
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
    <div>
      <div className="w-full md:h-[744px] h-[620px] bg-no-repeat bg-cover bg-center bg-[url('https://i.ibb.co/hLLYBjr/winery-bg.png')] relative">
        {/* BreadCrumb start */}
        <VerticalBreadCrumb />
        {/* BreadCrumb end */}
        <div className="flex justify-center items-center absolute left-0 right-0 -bottom-28 ">
          <div className=" bg-red-900 rounded-full w-[260px] h-[260px] flex items-center">
            <div className=" mx-auto">
              <div className="pb-4">
                <p className="w-24 h-2.5 mx-auto text-stone-300 text-xs font-normal uppercase leading-3 tracking-tight">
                  Winery owner
                </p>
              </div>
              <div>
                <h4 className="w-[200px] mx-auto text-center text-white text-[21px] font-light leading-[29px] tracking-wide">
                  Claude and François de Nicolay
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-44 pb-20">
        <h2 className="max-w-[1038px] mx-auto text-center text-zinc-800 md:text-7xl text-4xl font-normal md:leading-[84px] leading-[42px]">
          Château Mouton Rothschild – 1er Grand Cru Classé Pauillac
        </h2>
      </div>
      {/* text */}
      <div className="flex flex-wrap py-20 max-w-[1030px] mx-auto gap-8">
        <div className="pb-7 md:pb-0">
          <p className="max-w-[499px] text-zinc-800 text-base font-normal leading-snug">
            Not all great wine producers come from traditional families or have
            a long history in winemaking. A notable example is Jérôme Galeyrand,
            whose journey in the world of wine began when he purchased his first
            half-hectare vineyard in 2002.
          </p>
        </div>
        <div>
          <p className="max-w-[499px] text-zinc-800 text-base font-normal leading-snug">
            Up until then, Jérôme Galeyrand worked in the food industry, and his
            first immersion into the Burgundy world happened during two harvests
            at Domaine Alain Burguet in Gevrey-Chambertin.
          </p>
        </div>
      </div>

      {/* Destop View */}
      <div className="max-w-[1038px] mx-auto ">
        <hr className="border border-orange-700 border-opacity-20" />
        <div className=" my-20 ">
          <FilterSection
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
          />
        </div>

        {/* next product list  */}

        <Product items={data?.data} />
        {/* animation  component  */}
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
  );
}
