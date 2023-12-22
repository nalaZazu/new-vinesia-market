import SecruityBanner from "@/components/secruityPage/SecruityBanner";
import React from "react";
import SecruityTags from "@/components/secruityPage/SecruityTags";
import Benifits from "@/components/secruityPage/Benifits";
import AboutSlider from "@/components/AboutSection/aboutslider/page";
import Footer from "@/components/footer/page";
import { VideoSlider } from "@/constants/videoslider";

export default function Security() {
  return (
    <div>
      <div className="pt-[124px] pb-40">
        <div className="container mx-auto px-[23px]">
          <SecruityBanner />
        </div>
      </div>
      <div>
        <div className="container mx-auto px-4">
          <h3 className="text-center text-zinc-800 text-4xl font-light leading-[44px] pb-6">
            What are the tags, and how are they used?
          </h3>
          <p className="max-w-[596px] mx-auto text-center text-zinc-800 text-base font-normal leading-snug">
            When our hand-selected wines arrive at our warehouse, we assign the
            cases and/or bottles two specific tags that service different
            purposes.
          </p>

          <SecruityTags />
        </div>
      </div>
      <div className="p-6 bg-red-900 justify-center items-center gap-2 flex">
        <p className="w-[998px] text-center text-white text-base font-normal leading-snug">
          With a combination of NFC and Bluetooth Low Energy (BLE) tags that
          send data in real-time to the blockchain, you do not have to just take
          our word on where your wine is and whether it is authentic: you can
          verify it for yourself, at any time.
        </p>
      </div>

      <div className="py-40">
        <div className="container mx-auto max-w-[821px]">
          <div className="pb-24">
            <h3 className="w-[793px] mx-auto text-center text-zinc-800 text-4xl font-light leading-[44px]">
              Why we use Blockchain tech to offer customers Peace of Mind in
              their transactions
            </h3>
          </div>
          <Benifits />
        </div>
      </div>
      {/* The faster way to get to know us */}
      <div className="bg-[#2F222B]">
        <div className="flex justify-end md:py-40 md:px-0  px-4 py-20">
          <div className=" max-w-[1314px]">
            <div>
              <div>
                <h3 className="text-white text-4xl font-light   leading-[44px] pb-8">
                  Learn more about wine & art investment
                </h3>
              </div>
            </div>

            {/* here is new slider  section */}
            <div className="hidden md:block">
              <div>
                <AboutSlider data={VideoSlider} />
              </div>
            </div>
            <div className="md:hidden block  ">
              <div className="grid grid-cols-1 ">
                <AboutSlider />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
