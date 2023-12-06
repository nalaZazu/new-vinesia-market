import React from "react";
import Link from "next/link";
import Newsletter from "@/components/newsletter/page";
import Footer from "@/components/footer/page";

export default function WineryOwner() {
  return (
    <div>
      <div className="w-full md:h-[744px] h-[620px] bg-no-repeat bg-cover bg-center bg-[url('https://i.ibb.co/hLLYBjr/winery-bg.png')] relative">
        {/* BreadCrumb start */}
        <nav
          className="flex absolute top-0 bottom-0 -rotate-90 -left-40"
          aria-label="Breadcrumb"
        >
          <ol className="container mx-auto flex flex-wrap gap-3 px-4 items-center">
            <li className="inline-flex items-center">
              <Link
                href="#"
                className="text-stone-600 text-xs font-normal leading-3"
              >
                vinesia marketplace
              </Link>
            </li>
            <li className="hidden md:block lg:block  text-xs font-normal">/</li>
            <li>
              <div className="flex items-center">
                <Link
                  href="#"
                  className=" text-stone-500 text-xs font-normal leading-3"
                >
                  home page
                </Link>
              </div>
            </li>
            <li className="hidden md:block lg:block text-xs font-normal">/</li>
            <li aria-current="page">
              <div className="flex items-center">
                <span className=" text-stone-500 text-xs font-normal leading-3">
                  winery
                </span>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <span className=" text-stone-500 text-xs font-normal leading-3">
                  jerome galeyrand
                </span>
              </div>
            </li>
          </ol>
        </nav>
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
      <div className="flex flex-wrap pb-28 max-w-[1030px] mx-auto">
        <div className="pb-7">
          <p className="max-w-[515px] text-zinc-800 text-base font-normal leading-snug">
            Not all great wine producers come from traditional families or have
            a long history in winemaking. A notable example is Jérôme Galeyrand,
            whose journey in the world of wine began when he purchased his first
            half-hectare vineyard in 2002.
          </p>
        </div>
        <div>
          <p className="max-w-[515px] text-zinc-800 text-base font-normal leading-snug">
            Up until then, Jérôme Galeyrand worked in the food industry, and his
            first immersion into the Burgundy world happened during two harvests
            at Domaine Alain Burguet in Gevrey-Chambertin.
          </p>
        </div>
      </div>
      <hr className="border border-orange-700 border-opacity-20" />

      <Newsletter />
      <Footer />
    </div>
  );
}
