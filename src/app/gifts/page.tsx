"use client";
import React from "react";

// import { Button, Img, Input, Line, List, PagerIndicator, SelectBox, Slider, Text } from "../../components";
import VinesiaGiftsHero from "@/components/gifts/VinesiaGiftsHero";
import VinesiaGiftsRowprice from "@/components/gifts/VinesiaGiftsRowprice";
import Image from "next/image";
import {
  ArtworkIcon,
  BookIcon,
  Certif_Icon,
  ExculsiveIcon,
  GiftIcon,
  VintageIcon,
} from "@/assets/icons/Icons";
import BirthImage from "@/assets/images/birth_image.png";
import GiftImg from "@/assets/images/gift_img.png";
import Footer from "@/components/footer/page";
import Benifits from "@/components/secruityPage/Benifits";
const whatIsABondedWarehouseAndWhyDoesVinesiaUseItOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const areThePhotosOnTheWebsiteActualImagesOfTheWinesICanInvestInOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const whatIsABondedWarehouseAndWhyDoesVinesiaUseItOptionsList1 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const VinesiaGiftsPage: React.FC = () => {
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <div className=" absolute top-0 left-0 right-0 w-full -z-10">
      <div className=" flex flex-col items-center justify-start mx-auto w-full">
        <VinesiaGiftsHero className="flex flex-col items-center justify-start w-full" />
        <div className="flex flex-col font-albertsans gap-10 md:gap-[175px] items-center justify-start w-full">
          <div className="gap-10 lg:gap-20 grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 items-start justify-center max-w-[1073px] mx-auto px-4 w-full md:pt-40 pt-20">
            <div className="flex flex-1 flex-col gap-12 h-full items-start justify-start w-full">
              <div className="flex flex-col items-start justify-start w-16">
                <span className="flex h-16 bg-[#28475C] p-5 rounded-full items-center justify-center w-16">
                  <VintageIcon />
                </span>
              </div>
              <div className="flex flex-col gap-6 items-start justify-start w-full">
                <p className="font-semibold text-[#2F222B] text-lg tracking-[-0.36px] w-auto">
                  Vintage specific
                </p>
                <div className="flex flex-col gap-2 items-start justify-start w-full">
                  <p className="leading-[18.00px] max-w-[293px] md:max-w-full text-[#906447] text-xs tracking-[0.24px] uppercase">
                    Curate memories with vintage collections
                  </p>
                  <p className="leading-[22.00px] max-w-[293px] md:max-w-full text-base text-[#594E55] tracking-[-0.32px]">
                    Select from our curated collections that represent the
                    vintage of your special occasion, with wines that appreciate
                    in taste and value over time.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-12 h-full items-start justify-start w-full">
              <span className="flex h-16 bg-[#28475C] p-5 rounded-full items-center justify-center w-16">
                <GiftIcon />
              </span>
              <div className="flex flex-col gap-6 items-start justify-start w-full">
                <p className="font-semibold text-[#2F222B] text-lg tracking-[-0.36px] w-auto">
                  Gifts for the next generation
                </p>
                <div className="flex flex-col gap-2 items-start justify-start w-full">
                  <p className="text-[#906447] text-xs tracking-[0.24px] uppercase w-auto">
                    Heritage in a bottle
                  </p>
                  <p className="leading-[22.00px] max-w-[293px] md:max-w-full text-base text-[#594E55] tracking-[-0.32px]">
                    Gift a bottle of fine wine as a symbol of legacy, an elegant
                    gesture that matures as beautifully as your relationship
                    with the next generation.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-12 h-full items-start justify-start w-full">
              <div className="flex flex-col items-start justify-start w-16">
                <span className="flex h-16 bg-[#28475C] p-5 rounded-full items-center justify-center w-16">
                  <ExculsiveIcon />
                </span>
              </div>
              <div className="flex flex-col gap-6 items-start justify-start w-full">
                <p className="font-semibold text-[#2F222B] text-lg tracking-[-0.36px] w-auto">
                  Offer an exclusive experience
                </p>
                <div className="flex flex-col gap-2 items-start justify-start w-full">
                  <p className="text-[#906447] text-xs tracking-[0.24px] uppercase w-auto">
                    Unwrap the moment with Vinesia
                  </p>
                  <p className="leading-[22.00px] max-w-[293px] md:max-w-full text-base text-[#594E55] tracking-[-0.32px]">
                    With Vinesia, gifting becomes a unique experience, showing
                    your loved ones a (wine) world where each bottle tells a
                    story of heritage and the promise of growth
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="bg-[#7D302E] flex flex-col items-center justify-center  py-12 w-full">
              <div className="flex flex-col gap-8 items-center justify-center w-auto sm:w-full max-w-[472px] px-4 md:px-0">
                <div className="flex flex-col gap-2 items-center justify-center w-auto sm:w-full">
                  <div className="flex flex-col  items-center justify-center w-auto">
                    <p className="font-light sm:text-[17px] md:text-[19px] text-[21px] text-right text-white tracking-[0.42px] w-auto">
                      Contact us today for gifting inquiries
                    </p>
                  </div>
                  <p className="font-jost  md:max-w-full text-base text-center text-[#CBACAB] tracking-[0.16px]">
                    Our experts are ready to help you with selecting the perfect
                    wine investment as a fitting and appreciating gift.
                  </p>
                </div>
                <button className="cursor-pointer text-[#BF4D20] text-center text-xs tracking-[0.24px] uppercase font-albertsans bg-white rounded-full py-4 px-16">
                  CONTACT US TODAY
                </button>
              </div>
            </div>
            <div className="container flex flex-col md:gap-10 gap-20 items-start justify-start mt-1.5 px-4 py-40 w-auto md:w-full">
              <div className="flex flex-col gap-4 items-center justify-start max-w-[1248px] mx-auto w-full">
                <p className=" md:text-5xl text-7xl text-center text-[#2F222B] tracking-[-1.44px] w-auto">
                  Wine investments as a gift
                </p>
                <p className="font-albertsans text-base text-[#594E55] tracking-[-0.32px] w-auto">
                  Learn how our offering is perfectly suited for a very unique
                  present
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-0 gap-10 items-center justify-between w-full">
                <div className="flex flex-col md:min-h-[614px] md:h-auto items-center justify-start max-w-[501px]">
                  <Image
                    className=" sm:h-auto h-full object-cover w-[501px] md:w-full"
                    src={GiftImg}
                    alt="rectangle8589"
                  />
                </div>
                <div className="flex md:flex-1 flex-col gap-12 items-start justify-start md:w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <p className="font-semibold text-[#2F222B] text-lg tracking-[-0.36px] w-auto">
                      What makes a bottle of fine wine a unique gift?
                    </p>
                    <p className="leading-[22.00px] max-w-[608px] md:max-w-full text-base text-[#594E55] tracking-[-0.32px]">
                      Unlike any other present, a bottle of fine wine from
                      Vinesia is an investment in pleasure and prosperity. It
                      can be compared to a personal time capsule for the
                      recipient.
                    </p>
                  </div>
                  <div className="flex flex-col gap-6 items-start justify-start w-full">
                    <p className="font-semibold text-[#2F222B] text-lg tracking-[-0.36px] w-full">
                      What will you get after purchasing wine as a gift?
                    </p>
                    <div className="flex flex-col gap-4 items-start w-full">
                      <div className="bg-orange-50 flex flex-1 sm:flex-col flex-row gap-4 items-start justify-start my-0 p-6 sm:px-5 rounded-lg w-full">
                        <div className="flex flex-col items-end justify-start w-6">
                          <span>
                            <BookIcon />
                          </span>
                        </div>
                        <div className="flex sm:flex-1 flex-col gap-2 items-start justify-start w-auto sm:w-full">
                          <p className="font-semibold text-[#2F222B] text-lg tracking-[-0.36px] w-auto">
                            Booklet
                          </p>
                          <p className="leading-[22.00px] max-w-[485px] md:max-w-full text-base text-[#594E55] tracking-[-0.32px]">
                            <>
                              A guide to your wine&#39;s provenance, tasting
                              notes, and investment potential.
                            </>
                          </p>
                        </div>
                      </div>
                      <div className="bg-orange-50 flex flex-1 sm:flex-col flex-row gap-4 items-start justify-start my-0 p-6 sm:px-5 rounded-lg w-full">
                        <div className="flex flex-col items-end justify-start w-6">
                          <span className="h-6 w-6">
                            <Certif_Icon />
                          </span>
                        </div>
                        <div className="flex sm:flex-1 flex-col gap-2 items-start justify-start w-auto sm:w-full">
                          <p className="font-semibold text-[#2F222B] text-lg tracking-[-0.36px] w-auto">
                            Certificate of ownership
                          </p>
                          <p className="text-base text-[#594E55] tracking-[-0.32px] w-[370px]">
                            A beautifully designed certificate of your
                            investment.
                          </p>
                        </div>
                      </div>
                      <div className="bg-orange-50 flex flex-1 sm:flex-col flex-row gap-4 items-start justify-start my-0 p-6 sm:px-5 rounded-lg w-full">
                        <div className="flex flex-col items-end justify-start w-6">
                          <span className="h-6 w-6">
                            <ArtworkIcon />
                          </span>
                        </div>
                        <div className="flex sm:flex-1 flex-col gap-2 items-start justify-start w-auto sm:w-full">
                          <p className="font-semibold text-[#2F222B] text-lg tracking-[-0.36px] w-auto">
                            Artwork
                          </p>
                          <p className="leading-[22.00px] max-w-[485px] md:max-w-full text-base text-[#594E55] tracking-[-0.32px]">
                            The wines can optionally come with a piece of art
                            from some renowned artists like Reso or Monsieur Z,
                            underlining theuniqueness of your gift.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" mt-0.5 relative w-full">
              <div className=" bg-orange-50 flex flex-col h-full inset-[0] items-center justify-center w-full md:py-40 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[94px] items-center justify-center max-w-[1031px] mx-auto md:w-full">
                  <div className="flex flex-col gap-8 items-start justify-start w-[394px] sm:w-full">
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <p className=" font-light text-4xl sm:text-[32px] md:text-[34px] text-[#2F222B] tracking-[-0.36px] w-full">
                        Occasion selection
                      </p>
                      <p className="font-albertsans font-semibold text-[#2F222B] text-lg tracking-[-0.36px] w-full">
                        Choose a wine investment for
                      </p>
                    </div>
                    <div className="flex flex-col gap-8 items-start justify-start w-full">
                      <div className="flex flex-col gap-2 items-start justify-center w-full">
                        <p className="text-[#BF4D20] text-xs tracking-[0.24px] uppercase w-full">
                          Anniversary
                        </p>
                        <p className="text-base text-[#594E55] tracking-[-0.32px] w-full">
                          Celebrate your recipients’ journey
                        </p>
                      </div>
                      <div className="flex flex-col gap-2 items-start justify-start w-full">
                        <p className="text-[#BF4D20] text-xs tracking-[0.24px] uppercase w-full">
                          Weddings
                        </p>
                        <p className="leading-[22.00px] max-w-[394px] md:max-w-full text-base text-[#594E55] tracking-[-0.32px]">
                          Toast to the new life chapter with a gift that grows
                          with the couple
                        </p>
                      </div>
                      <div className="flex flex-col gap-2 items-start justify-start w-full">
                        <p className="text-[#BF4D20] text-xs tracking-[0.24px] uppercase w-full">
                          Christmas
                        </p>
                        <p className="leading-[22.00px] max-w-[394px] md:max-w-full text-base text-[#594E55] tracking-[-0.32px]">
                          Share the spirit of the season with a gift that
                          embodies the holiday season
                        </p>
                      </div>
                      <div className="flex flex-col gap-2 items-start justify-start w-full">
                        <div className="flex  gap-6 items-center justify-start w-full">
                          <p className="text-[#BF4D20] text-xs tracking-[0.24px] uppercase w-auto">
                            Birth of your child
                          </p>
                          <div className="border border-[#BF4D20] h-px w-[64%]" />
                        </div>
                        <p className="leading-[22.00px] max-w-[394px] md:max-w-full text-base text-[#594E55] tracking-[-0.32px]">
                          Mark the beginning of a new life with an investment
                          that matures with them
                        </p>
                      </div>
                    </div>
                  </div>
                  <Image
                    className="h-[543px] md:h-auto rounded-[50%] w-[543px]"
                    src={BirthImage}
                    alt="ellipse3127"
                  />
                </div>
              </div>
            </div>

            <div className="bg-[#7D302E] flex flex-col items-center justify-center  py-12 w-full">
              <div className="flex flex-col gap-8 items-center justify-center w-auto sm:w-full max-w-[472px] px-4 md:px-0">
                <div className="flex flex-col gap-2 items-center justify-center w-auto sm:w-full">
                  <div className="flex flex-col  items-center justify-center w-auto">
                    <p className="font-light sm:text-[17px] md:text-[19px] text-[21px] text-right text-white tracking-[0.42px] w-auto">
                      Contact us today for gifting inquiries
                    </p>
                  </div>
                  <p className="font-jost  md:max-w-full text-base text-center text-[#CBACAB] tracking-[0.16px]">
                    Our experts are ready to help you with selecting the perfect
                    wine investment as a fitting and appreciating gift.
                  </p>
                </div>
                <button className="cursor-pointer text-[#BF4D20] text-center text-xs tracking-[0.24px] uppercase font-albertsans bg-white rounded-full py-4 px-16">
                  CONTACT US TODAY
                </button>
              </div>
            </div>

            <div className="flex flex-col  md:gap-10 gap-16 items-center justify-start max-w-[821px] mt-1.5 py-40 w-full">
              <div className="flex flex-col items-center justify-start md:px-5 w-auto sm:w-full">
                <p className="font-light text-4xl sm:text-[32px] md:text-[34px] text-center text-[#2F222B] tracking-[-0.36px] w-auto">
                  3 easy step to give loved ones a unique gift
                </p>
              </div>
              <Benifits />
            </div>
            <div className=" md:px-5 relative w-full bg-[#F7EFDF] md:pt-40 md:pb-44 py-10">
              <div className="  mx-auto pb-8 w-full">
                <div className=" grid md:grid-cols-2 grid-cols-1 gap-[33px] items-start justify-center mx-auto top-[23%] w-[72%]">
                  <div className="flex flex-col gap-9 items-start justify-start w-auto sm:w-full">
                    <p className="font-light leading-[44.00px] max-w-[498px] md:max-w-full text-4xl sm:text-[32px] md:text-[34px] text-[#2F222B] tracking-[-0.36px]">
                      You might have questions, we definitely have answers.
                    </p>
                    <VinesiaGiftsRowprice className="flex flex-row font-albertsans gap-3 items-center justify-start w-auto" />
                  </div>
                  <div className="flex flex-col font-albertsans items-start justify-start w-auto sm:w-full">
                    <div
                      className="flex flex-col gap-px items-center w-full"
                      //   orientation="vertical"
                    >
                      <div className="flex sm:flex-1 flex-col items-center justify-start w-[501px] sm:w-full">
                        <div className="border-deep_orange-800_33 border-solid border-t flex flex-col items-center justify-between sm:pl-5 pl-6 pr-4 py-4 w-full">
                          <div className="flex flex-col gap-3 items-start justify-center w-full">
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="flex flex-col items-center justify-start w-full">
                                <p className="leading-[22.00px] text-base text-[#594E55] tracking-[-0.32px] w-full">
                                  <>
                                    Please provide comprehensive answers to
                                    those questions. You will save lots of time
                                    and money by eliminating the necessity to
                                    give constant support. You also will keep
                                    your clients&#39; time cause they will
                                    quickly find the answers to all their
                                    questions.
                                  </>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex sm:flex-1 flex-col items-center justify-start w-[501px] sm:w-full">
                        <div className="border-deep_orange-800_33 border-solid border-t flex flex-col items-center justify-between sm:pl-5 pl-6 pr-4 py-4 w-full">
                          <div className="flex flex-col items-start justify-center w-full"></div>
                        </div>
                      </div>
                      <div className="flex sm:flex-1 flex-col items-center justify-start w-[501px] sm:w-full">
                        <div className="border-deep_orange-800_33 border-solid border-y flex flex-col items-center justify-between sm:pl-5 pl-6 pr-4 py-4 w-full">
                          <div className="flex flex-col items-start justify-center w-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VinesiaGiftsPage;
