import React from "react";
import Image from "next/image";
import AboutBanner from "@/components/aboutpage/AboutBanner";
import FeaturedLogos from "@/components/aboutpage/FeaturedLogos";
import OurMission from "@/components/aboutpage/OurMission";
import OurVision from "@/components/aboutpage/OurVision";
import OurValues from "@/components/aboutpage/OurValues";
import Wanttoknow from "@/components/aboutpage/Wanttoknow";
import OurStory from "@/components/aboutpage/OurStory";
import VideoStoryBanner from "@/components/aboutpage/VideoStoryBanner";
import OutTeam from "@/components/aboutpage/OutTeam";
import OurExpert from "@/components/aboutpage/OurExpert";
import AboutSlider from "@/components/AboutSection/aboutslider/page";
import VectorTwo from "@/assets/icons/VectorTwo.svg";
import VectorOne from "@/assets/icons/VectorOne.svg";
import Footer from "@/components/footer/page";
import KnowUsVideos from "@/components/KnowUsVideos/page";

const team = [
  {name: 'Emmanuel Bueb', position: 'CEO', photo: 'aboutus_emmanuel.png', linkedin: 'https://www.linkedin.com/in/emmanuelbueb/'},
  {name: 'Fabrice Mopin', position: 'Chief Wine Officer', photo: 'aboutus_fabrice.png', linkedin: 'https://www.linkedin.com/in/fabrice-mopin-9b283935/'},
  {name: 'Adam Stępnik', position: 'CTO', photo: 'aboutus_adam.png', linkedin: 'https://www.linkedin.com/in/adam-stepnik/'},
  {name: 'Bastian Mopin', position: 'Head of Product', photo: 'aboutus_basti.png', linkedin: 'https://www.linkedin.com/in/bastian-mopin-b9750821b/'},
  {name: 'Ewa Brennan', position: 'Director of Marketing', photo: 'aboutus_ewa.webp', linkedin: 'https://www.linkedin.com/in/evabrennan/'},
  {name: 'Laurence Zimmer', position: 'Head of Sales', photo: 'aboutus_laurence.png', linkedin: 'https://www.linkedin.com/in/laurence-david-zimmer-366ab01a3/'},
  {name: 'Dariusz Drozdakiewicz', position: 'Project Manager', photo: 'aboutus_dariusz.png', linkedin: 'https://www.linkedin.com/in/dariusz-drozdakiewicz-098413267/'},
  {name: 'Anish Gupta', position: 'Developer', photo: 'aboutus_anish.png', linkedin: 'https://www.linkedin.com/in/gupta-anish/'},
]

const advisors = [
  {name: 'Thomas Heymans', position: 'Sourcing, Winery relations', photo: 'aboutus_thoma.jpeg', linkedin: 'https://www.linkedin.com/in/heymans-thomas-24b6b079/'},
  {name: 'Piotr Kamecki', position: 'Sourcing, Winery relations', photo: 'aboutus_piotr.webp', linkedin: 'https://www.linkedin.com/in/piotr-kamecki-sommelier/'},
  {name: 'Erik Petersen', position: 'Investor Relations, Communications', photo: 'aboutus_erik.webp', linkedin: 'https://www.linkedin.com/in/eriklpetersen/'},
  {name: 'Luke Bragg', position: 'Product design', photo: 'aboutus_luke.jpg', linkedin: 'https://www.linkedin.com/in/lucasbragg/'},
]

export default function AboutUs() {
  return (
    <div className="absolute top-0 -z-10 left-0 right-0">
      <div>
        <div className="relative">
          <AboutBanner />
        </div>
      </div>
      <div className="py-20">
        <div className="container mx-auto px-4">
          <OurMission />
        </div>
      </div>
      <div className="pt-20 pb-40">
        <div className="container mx-auto px-4">
          <OurVision />
        </div>
      </div>
      <div className="pt-40 pb-24 bg-zinc-800">
        <div className="container mx-auto px-4">
          <OurValues />
        </div>
      </div>
      <div className="py-12 bg-red-900">
        <div className=" container mx-auto px-4">
          <Wanttoknow />
        </div>
      </div>
      <div className="container mx-auto px-4 py-40">
        <OurStory />
      </div>
      <VideoStoryBanner />
      {/* our team */}
      <div className="bg-[#F7EFDF]">
        <div className=" container mx-auto px-4 pt-40 pb-24">
          <div className="pb-12">
            <h2 className="text-zinc-800 text-7xl font-normal font-['Canela'] leading-[84px]">
              Our team
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {team.map((item, i) => {
              return (
                <div key={i} className="pb-16">
                  <OutTeam item={item}/>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* our experts */}
      <div className="py-40 px-4">
        <div className=" container mx-auto">
          <div className="flex-col justify-start items-start gap-1 flex">
            <p className="text-stone-500 text-xs font-normal font-['Albert Sans'] uppercase leading-[18px] tracking-tight">
              Our
            </p>
            <h2 className="text-zinc-800 text-7xl font-normal font-['Canela'] leading-[84px]">
              Expert advisors
            </h2>
          </div>

          <div className="grid md:*grid-cols-2 gap-20 pt-6 pb-16">
            <p className="grow shrink basis-0 text-zinc-800 text-base font-normal font-['Albert Sans'] leading-snug">
              Deep knowledge, experience and a healthy dose of challenge from
              our expert advisors to keep us on our toes.Our success stems from
              the ability to source exceptional wines for our investors, to act
              as respectful stewards towards the magical products.
            </p>
          </div>
          <div className="grid md:grid-cols-3">
            {advisors.map((item, i) => {
              return (
                <div key={i}>
                  <OurExpert item={item}/>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <KnowUsVideos/>

      {/* footer */}
      <Footer />
    </div>
  );
}
