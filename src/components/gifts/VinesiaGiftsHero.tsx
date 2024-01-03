import Image from "next/image";
import React from "react";

// import { Button, Img, Line, Text } from "../../components";
import heroBg from "@/assets/images/gift_hero_bg.png";
type VinesiaGiftsHeroProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "collections"
  | "wineart"
  | "active"
  | "default"
  | "activeOne"
  | "defaultOne"
  | "defaultTwo"
  | "defaultThree"
  | "defaultFour"
  | "defaultFive"
  | "defaultSix"
  | "defaultSeven"
> &
  Partial<{
    collections: string;
    wineart: string;
    active: string;
    default: string;
    activeOne: string;
    defaultOne: string;
    defaultTwo: string;
    defaultThree: string;
    defaultFour: string;
    defaultFive: string;
    defaultSix: string;
    defaultSeven: string;
  }>;

const VinesiaGiftsHero: React.FC<VinesiaGiftsHeroProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex h-[800px] md:h-[834px] justify-end relative w-full">
          <Image
            // width="900"
            className="h-[834px] mt-auto mx-auto object-cover w-full"
            src={heroBg}
            alt="image137"
          />
          <div className="absolute bottom-[15%] flex flex-col items-center justify-start left-[6%] w-auto">
            <div className="flex flex-col items-start justify-start w-auto md:w-full">
              <div className="flex flex-col items-start justify-start w-auto md:w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
                  <h3 className="font-Canela font-light text-3xl sm:text-[32px] md:text-[36px] text-center text-white tracking-[-0.36px] w-auto">
                    {props?.collections}
                  </h3>
                  <h3 className="font-Canela max-w-[1100px] flex flex-col text-white md:text-[144px] text-7xl font-normal md:leading-[144px] leading-[80px] tracking-[-2.88px]">
                    {props?.wineart}
                  </h3>
                </div>
              </div>
            </div>
          </div>
          {/* <header className="absolute flex flex-col gap-5 inset-x-[0] items-center justify-center mx-auto pt-5 top-[0] w-full">
            <div className="flex md:flex-1 flex-col gap-[19px] items-start justify-start w-[97%] md:w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1385px] w-full">
                <div className="flex flex-row gap-10 items-start justify-start w-[291px]">
                  <div className="flex flex-col items-start justify-start w-auto">
                    <div className="flex flex-col items-center justify-center w-auto">
                      <p className="font-albertsans font-semibold text-base text-lime-100 tracking-[0.16px] w-auto">
                        {props?.active}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-auto">
                    <div className="flex flex-col items-center justify-center w-auto">
                      <p className="font-albertsans text-base text-lime-100 tracking-[0.16px] w-auto">
                        {props?.default}
                      </p>
                    </div>
                  </div>
                </div>
                <Image
                  className="h-[41px] w-14"
                  src="images/img_close.svg"
                  alt="close"
                />
                <div className="flex flex-row gap-6 items-start justify-start w-auto">
                  <button
                    className="flex h-[42px] items-center justify-center rounded-[50%] w-[42px]"
                    // shape="circle"
                    color="white_A700_33"
                    // size="xs"
                    // variant="outline"
                  >
                    <Image
                      className="h-6"
                      src="images/img_rewind.svg"
                      alt="rewind"
                    />
                  </button>
                  <Image
                    className="h-[42px] rounded-[50%] w-[42px]"
                    src="images/img_vinesiaicons.svg"
                    alt="vinesiaicons"
                  />
                  <Image
                    className="h-[42px] rounded-[50%] w-[42px]"
                    src="images/img_cart.svg"
                    alt="cart"
                  />
                </div>
              </div>
              <div className="bg-red-300_01 h-0.5 w-[8%]" />
            </div>
            <div className="border-solid border-white-A700_33 border-y flex md:flex-1 flex-col gap-2.5 items-center justify-start w-auto md:w-full">
              <div className="flex flex-col items-center justify-start w-[73%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 gap-[60px] items-start justify-center w-auto md:w-full">
                  <div className="flex flex-col items-start justify-start w-auto">
                    <div className="flex flex-col items-center justify-center w-auto">
                      <p className="font-albertsans font-semibold text-base text-lime-100 tracking-[0.16px] w-auto">
                        {props?.activeOne}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-auto">
                    <div className="flex flex-col items-center justify-center w-auto">
                      <p className="font-albertsans text-base text-lime-100 tracking-[0.16px] w-auto">
                        {props?.defaultOne}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-auto">
                    <div className="flex flex-col items-center justify-center w-auto">
                      <p className="font-albertsans text-base text-lime-100 tracking-[0.16px] w-auto">
                        {props?.defaultTwo}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-auto">
                    <div className="flex flex-col items-center justify-center w-auto">
                      <p className="font-albertsans text-base text-lime-100 tracking-[0.16px] w-auto">
                        {props?.defaultThree}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-auto">
                    <div className="flex flex-col items-center justify-center w-auto">
                      <p className="font-albertsans text-base text-lime-100 tracking-[0.16px] w-auto">
                        {props?.defaultFour}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-auto">
                    <div className="flex flex-col items-center justify-center w-auto">
                      <p className="font-albertsans text-base text-lime-100 tracking-[0.16px] w-auto">
                        {props?.defaultFive}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-auto">
                    <div className="flex flex-col items-center justify-center w-auto">
                      <p className="font-albertsans text-base text-lime-100 tracking-[0.16px] w-auto">
                        {props?.defaultSix}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-auto">
                    <div className="flex flex-col items-center justify-center w-auto">
                      <p className="font-albertsans text-base text-lime-100 tracking-[0.16px] w-auto">
                        {props?.defaultSeven}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-red-300_01 h-0.5 w-[3%]"></div>
            </div>
          </header> */}
        </div>
      </div>
    </>
  );
};

VinesiaGiftsHero.defaultProps = {
  collections: "An investment for today",
  wineart: "A legacy for tomorrow",
  active: "Vinesia Story",
  default: "Vinesia Marketplace",
  activeOne: "Start",
  defaultOne: "How Vinesia works",
  defaultTwo: "Wine and art",
  defaultThree: "Security",
  defaultFour: "Asset performance",
  defaultFive: "Stories",
  defaultSix: "About us",
  defaultSeven: "Gifts",
};

export default VinesiaGiftsHero;
