import Image from "next/image";
import AboutSlider from "../AboutSection/aboutslider/page";
import VectorOne from "@/assets/icons/VectorOne.svg";
import VectorTwo from "@/assets/icons/VectorTwo.svg";

export default function KnowUsVideos() {
    return (
             <>{/* The faster way to get to know us */}
      <div className="bg-[#2F222B] h-[780px]">
      <div className="relative">
        <div className="absolute md:block hidden">
          <Image src={VectorOne} alt="vector" />
        </div>
      </div>
      <div className="relative md:block hidden ">
        <div className="absolute  right-0">
          <Image src={VectorTwo} alt="vector" />
        </div>
      </div>

      <div className="flex justify-center md:py-20 md:px-0  px-4 py-25">
        <div className="container text-center">
          <h3 className="text-white text-4xl font-light leading-[44px] pb-8">
            The faster way to get to know us
          </h3>

          {/* here is new slider  section */}
          <div className="">
            <div className="grid grid-cols-1">
              <AboutSlider />
            </div>
          </div>
          {/* <div className="md:hidden block  ">
            <div className="grid grid-cols-1 ">
              <AboutSlider />
            </div>
          </div> */}

        </div>
      </div>
    </div></>
    )
}