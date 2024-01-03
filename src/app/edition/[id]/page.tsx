"use client";

import VerticalBreadCrumb from "@/common/verticalBreadcrumb/page";
import React, { useEffect, useState } from "react";
import { AlertIcons, Arrows, BgRectangle, CartIcon } from "@/assets/icons/Icons";
import TabSection from "@/components/tabsection/page";
import MindPledge from "@/components/mindpledge/page";
import HeritageCarousel from "@/components/heritageCarousel/page";
import AssetDetails from "@/components/wineassets/page";
import YouMayAlso from "@/components/YouMayAlso/page";
import WineVideoBanner from "@/components/ProductOverView/WineVideoBanner";
import Newsletter from "@/components/newsletter/page";
import NewsletterMobile from "@/components/newsletter/MobileView";
import Footer from "@/components/footer/page";
import WineArtDisclosure from "@/components/ProductOverView/WineArtDisclosure";
import Social from "@/common/Social";
import ProductCarousel from "@/components/ProductOverView/ProductCarousel";
import InvestDisclosure from "@/components/InvestDisclosure/page";
import useSWR from "swr";
import Loading from "@/components/loading/loading";
import { EditionOverview } from "@/types/editionOverview.dto";
import { useUser } from "@/context/user";
import { getCurrencyValueText } from "@/utils/common";
import { useCart } from "@/context/cart";
import { ItemCardDto } from "@/types/productCard.dto";

const fetcher = (arg: string) => fetch(arg).then((res) => res.json());
const EditionOverview = ({
  params,
}: {
  params: { id: string };
}) => {
  const { getPriceText, currency } = useUser()
  const { addEditionCartItem } = useCart()

  const { data, error, isLoading } = useSWR<EditionOverview, any, any>(
    `${process.env.NEXT_PUBLIC_API_ADDRESS}edition/overview/${params.id}`,
    fetcher
  );

  const [otherEditions, setOtherEditions] = useState<ItemCardDto[]>([])

  useEffect(() => {
    if (data === undefined) return
    if (data.editions.length === 0) return

    const items = data.editions.filter((x) => x.id !== data.id)

    setOtherEditions(items)

  }, [data])

  if (isLoading) {
    return <Loading />
  }

  if (data === undefined) {
    return (
      <div>
        <div className="md:mx-0 mx-4">
          <div className="container mx-auto pt-10 pb-7">
            <div className="flex">An error has occured ... could not fetch data from the server</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <React.Fragment>
      <div className="relative mx-auto ">
        <div className="container mx-auto pt-3 md:pt-5 lg:pt-10 px-4 md:absolute top-0 z-10 right-0 left-0">
          <div className="mx-auto max-w-[1429px] text-center pb-6">
            <h1 className="text-zinc-800 md:text-7xl md:text-center text-left md:leading-[84px] text-4xl font-normal leading-[42px] tracking-[-1.44px] whitespace-pre-line ">
              {data.name} <span className="text-2xl">#{data.number}</span>
            </h1>
            <p className="pt-2  text-zinc-800 text-base font-normal  leading-snug md:text-center text-left ">
            </p>
          </div>
        </div>

        <div className="flex container mx-auto">
          <div className="basis-24 hidden md:block">
            {/* <VerticalBreadCrumb /> */}
          </div>
          <div className=" md:basis-5/6">
            <div className="grid md:grid-cols-3 grid-cols-1 md:h-[898px]">
              {/* h-[968] */}
              {/* here is first section */}
              <div className="  flex items-end  order-2 md:order-1">
                <div className=" w-full md:space-y-4">
                  <div className="hidden md:block space-y-4">
                    <div className=" flex gap-3 items-center   text-stone-500 text-base font-normal   leading-snug">
                      <p>First release date</p>
                      <div className="w-[30px] h-[0px] border border-orange-700 border-opacity-20"></div>
                      <p className="text-zinc-800 text-base font-normal leading-snug">
                        {data?.releaseDetails?.releaseDate?.toISOString()} Sep 29, 2023
                      </p>
                    </div>
                    <div className="  flex gap-3 items-center text-stone-500 text-base font-normal leading-snug">
                      <p>Owner</p>
                      <div className="w-[30px] h-[0px] border border-orange-700 border-opacity-20"></div>
                      <p className="text-zinc-800 text-base font-normal leading-snug">
                        {data?.owner === '0x1' ? 'Vinesia' : data.owner}
                      </p>
                    </div>
                    <div className=" flex gap-3 items-center text-stone-500 text-base font-normal leading-snug">
                      <p>Edition</p>
                      <div className="w-[30px] h-[0px] border border-orange-700 border-opacity-20"></div>
                      <p className="text-zinc-800 text-base font-normal leading-snug">
                        #{data?.number} from {data?.editions?.length}
                      </p>
                    </div>
                    <div className=" flex gap-3 items-center text-stone-500 text-base font-normal leading-snug">
                      <p>Wine asset ID</p>
                      <div className="w-[30px] h-[0px] border border-orange-700 border-opacity-20"></div>
                      <p className="text-zinc-800 text-base font-normal leading-snug">
                        {data.nftId ?? ''}
                      </p>
                    </div>
                    {/* here is next section */}
                    <div className="flex gap-2 items-center pb-8">
                      <span className=" text-center text-orange-700 text-xs font-normal  uppercase leading-3 tracking-tight">
                        Product integrity certificates
                      </span>
                      <span>
                        <Arrows storke="#BF4D20" />
                      </span>
                    </div>
                  </div>
                  {/* end of section */}
                  {/* price section */}
                  <div className="p-8 bg-slate-700 h-[320px]">
                    <div className="flex justify-between">
                      <div className="flex items-center gap-2">
                        <p className="  text-gray-300 text-xs font-normal   uppercase leading-3 tracking-tight">
                          ASK PRICE
                        </p>
                        <AlertIcons />
                      </div>

                      {data?.isAvailable &&
                        <div className="p-2 h-9 bg-green-500 rounded-[30px]   flex justify-start items-center gap-1.5">
                          <div className=" w-2 h-2 bg-white rounded-full" />
                          <p className="text-center text-white text-xs font-normal uppercase leading-3 tracking-tight">
                            Available to buy
                          </p>
                        </div>}
                    </div>

                    {/* next section */}
                    <div>
                      <h6 className="text-white text-4xl font-light  leading-[44px]">
                        {getPriceText(data.buyNowPrice === undefined ? 0 : data.buyNowPrice[currency])}
                      </h6>
                      <div className="h-[25px]">
                        {data?.lastSale &&
                          <div className="gap-4 pt-2">
                            <p className="text-gray-300 text-base font-normal  leading-snug">
                              Last sale: {getCurrencyValueText(data.lastSale)}
                              <span
                                className=" 
                        items-center gap-2
                        text-white
                        text-xs
                        font-normal
                        uppercase
                        leading-3
                        tracking-tight
                        inline-flex
                        "
                              >
                                MORE
                                <Arrows storke="#FFFFFF" />
                              </span>

                            </p>
                          </div>
                        }
                      </div>
                    </div>

                    {/* next  section */}

                    <div className="h-[56pt]">
                      {/* <button
                        type="submit"
                        className="text-center   text-xs font-normal  px-8 py-[22px] bg-white rounded-[48px]  w-full mt-4  uppercase leading-3 tracking-tight justify-center items-center gap-3 inline-flex text-orange-700"
                      >
                        ACCEPT ASK
                      </button> */}
                    </div>

                    {data?.isAvailable &&
                      <button
                        type="submit"
                        className="text-center   px-8 py-[22px]  rounded-[48px]  w-full mt-4  uppercase leading-3 tracking-tight justify-center items-center gap-3 inline-flex  text-white text-xs font-normal   border border-white border-opacity-40 "
                        onClick={() => {
                          addEditionCartItem(data)
                        }}
                      >
                        Invest Now <CartIcon fill="#FFFF" />
                      </button>}
                  </div>
                </div>
              </div>

              {/* here is middle section with slider */}
              <div className=" order-1 md:order-2">
                <div className=" bg-[#F7EFDF] h-full relative flex items-end pb-6">
                  <div className="w-full  mx-auto py-14">
                    <ProductCarousel images={[data.media]} />
                  </div>
                  <div className="md:absolute top-full z-20 w-full md:block hidden">
                    <BgRectangle />
                  </div>
                  {/* <Image src={rectangle} alt="reactangle" /> */}
                </div>
              </div>
              <div className="md:hidden block order-1 py-8 bg-[#F7EFDF]">
                <Social />
              </div>
              {/* here is last section  */}
              <div className="md:flex items-end  ps-8 md:order-3 hidden">
                <div className="max-w-[395px]">
                  <TabSection data={data} />
                </div>
              </div>

              {/* Mobile View */}
              <div className="block md:hidden order-3">
                <WineArtDisclosure wine={data.wine} art={data.art} />
              </div>
            </div>
          </div>
          {/* padding section  */}
          <div className="md:basis-24 hidden"></div>
        </div>


      </div>

      {/* here is mind pledge section */}
      <div className="w-full -z-10">
        <MindPledge item={data} />
      </div>
      {/* <div className="md:hidden block">
        <InvestDisclosure />
      </div> */}

      {/* wines about section */}
      <div className="md:block hidden">
        <div className=" flex  pt-40 ">
          <div className="basis-1/12 hidden md:block"></div>

          {/* container mx-auto pl-24  pt-40  */}
          <div className="container max-w-6xl">
            <div className="md:basis-11/12 basis-full">
              {/* <div className="basis-1/4"></div> */}

              <p className="text-stone-500 text-xs font-normal uppercase leading-3 tracking-tight">
                ABOUT
              </p>

              <div className="flex justify-between items-end">
                <h1 className="text-zinc-800 text-7xl font-normal   leading-[84px]">
                  Wine asset details
                </h1>
              </div>
            </div>
          </div>
        </div>
        {/* here is component call */}

        <div className="flex relative ">
          <div className="basis-1/12 hidden md:block"></div>
          <div className="md:basis-11/12 basis-full">
            <div className="bg-orange-100 pt-10">
              <AssetDetails />
            </div>
          </div>
        </div>
      </div>

      {/* here is carsoul section */}
      {otherEditions.length > 0 &&
        <div className="md:py-40 py-20">
          <div className="pb-14">
            <h1 className="text-zinc-800 text-4xl font-light  text-center  leading-[44px]">
              Other editions{" "}
            </h1>
          </div>
          <HeritageCarousel items={otherEditions} />

        </div>}


      {/* here is video banner */}
      <div className="md:block hidden">
        <WineVideoBanner />
      </div>

      {/* here is might section */}

      <div className="py-40 hidden md:block">
        <div>
          <h3 className="text-center text-zinc-800 text-4xl font-light  leading-[44px] pb-12">
            You may also like
          </h3>
          <div>
            <YouMayAlso />
          </div>
        </div>
      </div>

      {/* here is mobile view of like might section */}
      {/* <div className="py-20 md:hidden block">
        <div>
          <h3 className="text-center text-zinc-800 text-[21px] font-light   leading-[29px] pb-12">
            You may also like
          </h3>
            <YouMayAlso />
        </div>
      </div> */}

      {/* desktop Newsletter*/}
      <div className="hidden sm:block">
        <Newsletter />
      </div>
      {/* mobile Newsletter */}
      <div className="block sm:hidden pt-4">
        <NewsletterMobile />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default EditionOverview;
