import Image from "next/image";
import React from "react";
import FranceMap from "@/assets/images/FranceMap.svg";
import Franceimage from "@/assets/images/franceimage.png";
export default function AboutWinerySection() {
  return (
    <div className="py-40">
      <section className="pb-32">
        <div className="container mx-auto  max-w-[1248px]">
          <div className="items-center grid grid-col-1  md:grid-cols-5 lg:grid-cols-5 mx-auto">
            <div className=" col-span-3">
              <span className=" text-stone-500 text-xs font-normal uppercase leading-3 tracking-tight">
                About
              </span>
              <h2 className="max-w-[535px] text-7xl text-zinc-800  font-normal  leading-[84px] pb-12">
                Winery Château Le Pin
              </h2>
              <p>
                <span className=" font-semibold">France,</span> Region,
                Appellation
              </p>
              <p className="max-w-[608px] text-zinc-800 text-base font-normal leading-snug pt-2 pb-8">
                Château Le Pin is a mini chateau in the Pomerol appellation on
                the right bank of the Bordeaux region. It is considered a cult
                estate and is highly sought-after by wine collectors. Its tiny
                production, averaging just 600-700 cases a year, commands even
                higher prices than Château Petrus, making it one of the most
                expensive wines in Bordeaux!
              </p>
              <p className="max-w-[608px] text-zinc-800 text-base font-normal leading-snug">
                Madame Laubie and her family had owned this small vineyard since
                1924, but sold it in 1979 to the Belgian Mr. Jacques Thienpont.
                At that time, the vineyard covered just one hectare. Today, the
                vineyard covers 2.7 hectares. The name derives from the two pine
                trees that grow on the estate, near the winery.
              </p>
            </div>
            <div className="col-span-2">
              <Image
                src={FranceMap}
                alt="Picture of the author"
                className="max-w-[479.87px] h-[476px] mx-auto"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="pt-10">
        <div className="container mx-auto max-w-[1248px]">
          <div className="gap-10 items-center grid grid-col-1  md:grid-cols-5 lg:grid-cols-5 mx-auto py-8">
            <div className=" col-span-3">
              <Image
                src={Franceimage}
                alt="Picture of the author"
                className="max-w-[608px] h-[314px]"
              />
            </div>
            <div className="col-span-2">
              <p className="text-zinc-800 text-base font-normal leading-snug pb-12">
                The vineyard is planted almost exclusively with Merlot, with
                just a touch of Cabernet Franc, and the average age of thevines
                is almost 40 years. In 2003, no Le Pin was produced due to the
                heatwave. The wines are extremely lush, concentrated and
                sometimes “”exotic””, and are drinkable very early on. All
                grapes are hand-picked and aged in new oak for 14 to 18 months.
              </p>
              <p className="text-zinc-800 text-base font-normal leading-snug">
                A new high-tech winery was inaugurated in 2011. They even
                produce a second wine called “”Trilogie”” in even smaller
                quantities. The price of this second wine easily exceeds that of
                most other Pomerols produced, averaging €400 a bottle. Although
                Le Pin doesn’t have a long history, they have produced some
                exceptional wines, especially over the last two decades.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
