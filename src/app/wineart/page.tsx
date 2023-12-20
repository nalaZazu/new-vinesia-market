import Wanttoknow from "@/components/aboutpage/Wanttoknow";
import Relationship from "@/components/wineArtPage/Relationship";
import WineryBanner from "@/components/wineArtPage/WineryBanner";
import React from "react";

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
    </div>
  );
}
