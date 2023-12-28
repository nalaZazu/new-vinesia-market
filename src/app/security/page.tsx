import SecruityBanner from "@/components/secruityPage/SecruityBanner";
import React from "react";
import SecruityTags from "@/components/secruityPage/SecruityTags";
import Benifits from "@/components/secruityPage/Benifits";
import AboutSlider from "@/components/AboutSection/aboutslider/page";
import Footer from "@/components/footer/page";
import { VideoSlider } from "@/constants/videoslider";
import investment1 from "@/assets/images/secrutiyinvestment.png";
import investment2 from "@/assets/images/secrutiyinvestment1.png";
import PeaceVinesia from "@/components/secruityPage/PeaceVinesia";
import Image from "next/image";

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
      <div className="py-40 bg-[#F7EFDF]">
        <div className="container mx-auto px-4">
          <PeaceVinesia />
        </div>
      </div>

      <div className="py-40">
        <div className="container mx-auto px-4">
          <p className="md:max-w-[769px] w-full text-zinc-800 text-lg font-semibold leading-relaxed pb-16">
            All the data about the wine is stored in the blockchain and tied to
            each unique NFT so you can see the history of each wine. Since this
            history is also public and unchangeable, it eliminates fraud, which
            has occurred when outliers go through the old, traditional routes of
            wine investing. 
            <br />
          </p>
          <div className="grid md:grid-cols-2 grid-cols-1 pb-16">
            <div className="md:pe-[141px] pe-0">
              <h2 className="text-zinc-800 text-4xl font-light leading-[44px]">
                Insuring your investment
              </h2>
              <div className="py-8">
                <p className=" text-neutral-600 text-base font-normal leading-snug">
                  Vinesia, a wine investment platform that distinguishes itself
                  by its transparency, takes extraordinary measures to ensure
                  the safety and security of the fine wines stored on behalf of
                  its clients in their state-of-the-art warehouse in Luxembourg.
                  Each bottle or case are meticulously cataloged upon arrival
                  and assigned a unique tracking number recorded on the Polygon
                  blockchain, guaranteeing precise identification and
                  traceability. The warehouse is fortified with advanced
                  security systems, including 24/7 surveillance cameras,
                  biometric access controls, and temperature monitoring systems
                  that maintain optimal conditions for wine preservation.
                </p>
              </div>
            </div>
            <div>
              <Image
                className="w-full h-auto"
                src={investment1}
                alt="Transistor"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 ">
            <div className="md:order-1 order-2">
              <Image
                className="w-full h-auto"
                src={investment2}
                alt="Transistor"
              />
            </div>
            <div className="md:ps-[140px] ps-0 flex items-end md:order-2 order-1">
              <div className="py-8">
                <p className=" text-neutral-600 text-base font-normal leading-snug">
                  In addition to physical safeguards, Vinesia provides
                  comprehensive insurance coverage for each bottle at their
                  replacement value. This policy encompasses protection against
                  a wide range of potential risks, such as theft, accidental
                  damage, and natural disasters. The combination of rigorous
                  security protocols and extensive insurance coverage offers
                  clients peace of mind, knowing their prized wine collections
                  are in safe hands and fully insured against unforeseen events.
                </p>
              </div>
            </div>
          </div>
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
