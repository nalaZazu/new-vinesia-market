import React from "react";
import Image from "next/image";
import relation from "@/assets/images/relationship.png";
export default function Relationship() {
  return (
    <div>
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className="max-w-[813px] w-full">
          <h2 className=" text-zinc-800 md:text-7xl text-6xl font-normal md:leading-[84px] leading-[68px] tracking-[-1.44px]">
            Wine and art have long held a harmonious relationship.
          </h2>
          <div className="py-8">
            <p className="max-w-[518px] text-zinc-800 text-base font-normal leading-snug">
              You will often find master artists such as DaVinci, Michelangelo,
              Van Gogh, and more who made wine center points of some of their
              most famous artwork. In fact, Da Vinci is quoted as saying:
            </p>
          </div>
        </div>
        <div className="md:pt-28 pt-10">
          <div className="max-w-[501px] min-h-[501px] bg-red-800 md:rounded-full relative flex justify-center items-center px-4">
            <h1 className="absolute top-0 left-0 right-0 text-center text-red-400 text-[144px] font-normal">
              “
            </h1>
            <p className="max-w-[410px] mx-auto text-center text-rose-200 text-4xl font-normal collection leading-[63px]">
              The discovery of a good wine is increasingly better for mankind
              than the discovery of a new star.
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className="md:order-1 order-2">
          <div className="max-w-[501px] min-h-[501px] md:rounded-full">
            <Image src={relation} alt="" />
          </div>
        </div>
        <div className="flex items-center md:order-2 order-1">
          <div className="py-8 max-w-[518px] text-zinc-800 text-base font-normal leading-snug">
            <p className="pb-6">
              At Vinesia, we love the connection between wine as the muse for
              many artists and the impact it has had on the betterment of art
              and creativity throughout human history. So much so that we couple
              many of our investments with unique, limited-released high-quality
              art.
            </p>

            <p>
              We work directly with world-renowned artists to craft artwork that
              only we can own and offer to our customers. And we couple it with
              wine we source directly from some of the most respectable wineries
              in the world. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
