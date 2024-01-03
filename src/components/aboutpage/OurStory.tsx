import React from "react";
import Image from "next/image";
import Lock from "@/assets/icons/Lock.svg";
const datavalue = [
  {
    id: 1,
    subtext: "OCTOBER 2022",
    title: "Inception",
    text: "The Visionaries' first meeting to birth Vinesia",
  },
  {
    id: 2,
    subtext: "MARCH 2023",
    title: "From Dream to Reality",
    text: "Vinesia takes shape in Luxembourg with a team of six",
  },
  {
    id: 3,
    subtext: "AUGUST 2023",
    title: "Growing Together",
    text: "Welcoming investors, expanding our team, and launching our soft-launch page",
  },
  {
    id: 4,
    subtext: "NOVEMBER 2023",
    title: "Marketplace Unveiled",
    text: "Over 130 positions for wine enthusiasts",
  },
  {
    id: 5,
    subtext: "TODAY",
    title: "Shaping Tomorrow",
    text: "Empowering investors, enhancing products, and pioneering wine investment",
  },
];

export default function OurStory() {
  return (
    <div>
      {" "}
      <div className="pb-12">
        <h2 className="self-stretch text-zinc-800 text-7xl font-normal leading-[84px] pb-6">
          Our story
        </h2>
        <p className="self-stretch text-zinc-800 text-lg font-semibold leading-relaxed">
          A rich journey already, yet so much more to write.
        </p>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className="md:pe-[139px] md:pb-0 pb-8">
          <p className=" text-neutral-600 text-base font-normal leading-snug pb-8">
            Like all good stories, ours begins with love. A love for the craft
            of winemakers, a love for the stories, a love for this unique
            product that unites so many people regardless of their origin or
            geography.
            <br />
            We are not new to the wine industry. Vinesia is a harmonious blend
            of experienced entrepreneurs and fresh talent from the wine, tech,
            and business worlds. Our belief is that many parts of the wine value
            chain are ripe for new approaches enabled by technology, hence the
            term #WineTech.
          </p>
          <p className="text-neutral-600 text-base font-normal leading-snug">
            The two founders, Fabrice and Emmanuel have known each other for 20
            years. They met in France at a wine tasting and became great friends
            and eventually they became colleagues. 
            <br />
            <br />
          </p>
          <p className="text-zinc-800 text-lg font-semibold leading-relaxed">
            In 2022, they decided to join forces as they recognized the wine
            market is ripe for a technology-led disruption, without losing sight
            of the long heritage of traditional winemaking.
            <br />
          </p>
          <p className="text-neutral-600 text-base font-normal leading-snug">
            <br />
            Mutual respect, strong business ethics, their lifelong love of
            wines, and finally innovation in commercial models are the
            cornerstones of this association. 
          </p>
        </div>
        <div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
            {datavalue.map((items: any, i: any) => {
              const { subtext, title, text } = items;
              return (
                <div key={i} className="flex flex-col md:flex-row gap-4 pb-12">
                  <Image src={Lock} alt="" />
                  <div>
                    <p className="text-[#906447] text-xs font-normal uppercase leading-[18px] tracking-tight pb-2">
                      {subtext}
                    </p>
                    <p className=" text-zinc-800 text-lg font-semibold leading-relaxed">
                      {title}
                    </p>
                    <p className=" text-zinc-800 text-base font-normal leading-snug">
                      {text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
