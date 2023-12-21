import React from "react";
import Wanttoknow from "@/components/aboutpage/Wanttoknow";
import Relationship from "@/components/wineArtPage/Relationship";
import WineryBanner from "@/components/wineArtPage/WineryBanner";
import Artists from "@/components/wineArtPage/Artists";

export default function wineryArt() {
  return (
    <div className="absolute top-0 -z-10 left-0 right-0">
      <div>
        <div className="relative">
          <WineryBanner />
        </div>
      </div>
      <div className="py-40">
        <div className="container mx-auto px-4">
          <Relationship />
        </div>
      </div>
      <div className="py-12 bg-red-900">
        <div className=" container mx-auto px-4">
          <Wanttoknow />
        </div>
      </div>
      <div className="pt-32 pb-40">
        <div className="container mx-auto px-4">
          <h2 className="text-zinc-800 text-7xl font-normal leading-[84px] pb-12">
            Artists we have partnered with 
          </h2>
          <Artists />
        </div>
      </div>
      <div className="pb-40">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-zinc-800 text-7xl font-normal leading-[84px] tracking-[-1.44]">
            Selected wineries represented in our Collections 
          </h2>
        </div>
      </div>
    </div>
  );
}
