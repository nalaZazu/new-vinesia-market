"use client"

import { Arrows } from "@/assets/icons/Icons";
import React, { useEffect, useState } from "react";
import grapes from "@/assets/icons/purchaseGraphes.svg";
import bottleIllustrations from "@/assets/icons/purchaseIllustrations.svg";
import glassIllustrations from "@/assets/icons/glassIllustrations.svg";
import Image from "next/image";
import { listItemPurchase } from "@/constants/accrodion";
import Link from "next/link";
import { useCart } from "@/context/cart";
import Loading from "@/components/loading/loading";
import { useUser } from "@/context/user";
import { CartOrderDto, CartStatus, OrderPositionDto } from "@/types/dto/cartOrder.dto";
import Cart from "@/app/cart/page";

const Purchase = ({
  params,
}: {
  params: { id: number };
}) => {
  const { isLoading, profile, getPriceText } = useUser()
  const { getOrder } = useCart()

  const [isOrderLoading, setIsLoading] = useState(true)
  const [order, setOrder] = useState<CartOrderDto | null>(null)

  useEffect(() => {
    if (isLoading) return
    if (profile === null) return

    async function run() {
      const order = await getOrder(params.id)
      setOrder(order)
      setIsLoading(false)
    }
    run()

  }, [profile, getOrder, isLoading, params.id])

  //Refresh order every 5 seconds, until it is complete or canceled
  useEffect(() => {
    if (order === null) return

    if (order.status === CartStatus.Success) return
    if (order.status === CartStatus.Cancelled) return
    if (order.status === CartStatus.Abandoned) return

    const int = setInterval(async () => {
      const order = await getOrder(params.id)
      setOrder(order)
    }, 5000)

    return () => {
      clearInterval(int)
    }
  }, [order, getOrder, params.id])

  if (isLoading || isOrderLoading) {
    return <Loading />
  }

  if (order === null) {
    return <>Order not found</>
  }

  return (
    <>
      <div className="max-w-[560px] cotainer mx-auto py-8">
        <div className="relative pb-12 px-4">
          <div className="md:pt-20 pt-[60px] ">
            <div className="pb-2 md:px-6 pt-[60px]  bg-[#FAF5EA] rounded-[20px]   border border-orange-700 border-opacity-20 ">
              <div className="flex justify-center">
                <Image src={glassIllustrations} alt="image-icon" />
              </div>
              <div className="flex-col justify-center items-center  flex pb-6">
                <h3 className="  text-[#42A55E] md:text-4xl font-light pt-8  md:leading-[44px]  text-center  text-[21px]  leading-[29px] ">
                  {order.status === CartStatus.Success ? <>Your purchase is complete</> : <>Your purchase is processing</>}
                </h3>
                <p className="  md:max-w-full max-w-[239px]  text-[#35844B] md:py-4  pt-2 text-base font-normal md:leading-snug text-center leading-snug">
                  {order.status === CartStatus.Success && <>Your new wines have now been added to your portfolio</>}
                </p>
              </div>

              <div className="p-4">
                <span className="text-[#906447] ">SUMMARY</span>
                <div className="pt-4 ">
                  {order.positions.map((item: OrderPositionDto, index: any) => {
                    return (
                      <div className="flex justify-between mb-2" key={index}>
                        <p className="text-left text-[#2F222B] text-base font-normal  leading-snug mr-10">
                          {item.name}
                        </p>
                        <p className="text-right text-[#2F222B] text-base font-normal  leading-snug  ">
                          {getPriceText(item.price)}
                        </p>
                      </div>
                    );
                  })}

                  <div className="flex justify-between mb-2">
                    <p className="text-left text-[#2F222B] text-base font-normal  leading-snug mr-10">
                      Service Fees
                    </p>
                    <p className="text-right text-[#2F222B] text-base font-normal  leading-snug  ">
                      {getPriceText(0)}
                    </p>
                  </div>
                  <div className="flex justify-between mb-2">
                    <p className="text-left text-[#2F222B] text-base font-normal  leading-snug mr-10">
                      Credit Card Fee
                    </p>
                    <p className="text-right text-[#2F222B] text-base font-normal  leading-snug  ">
                      {getPriceText(0)}
                    </p>
                  </div>
                </div>
                <div className="border-b  pt-6 border-orange-700 border-opacity-20" />
                <div className="flex justify-between pt-6">
                  <p className="text-right text-[#2F222B] text-lg font-semibold leading-relaxed">
                    Total price
                  </p>
                  <p className="text-[#2F222B] text-lg font-semibold leading-relaxed">
                    {getPriceText(order.positions.reduce((a, b) => a + b.price, 0))}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* here is total view  */}
          {/* <button className="w-full px-2.5 py-5 bg-[#F7EFDF] rounded-bl-[20px] rounded-br-[20px] border-l border-r border-b border-orange-700 border-opacity-20  text-center  text-orange-700 text-xs font-normal  uppercase leading-[18px] tracking-tight  justify-center items-center gap-2.5 flex">
            VIEW ON POLYGON{" "}
            <span>
              <Arrows storke="#BF4D20" />
            </span>
          </button> */}
          {/* end of relative div */}
          <div className="absolute top-[410px] right-[-50px] -z-10 md:block hidden">
            <Image src={grapes} alt="image-icon" />
          </div>
          <div className="absolute top-[250px] left-[-45px] -z-10 md:block hidden">
            <Image src={bottleIllustrations} alt="image-icon" />
          </div>
          {/* here is end of svg */}
        </div>
        {/* here is end of relative div */}
        {order.status === CartStatus.Success &&
        <Link href="/profile" className="px-8 py-4 w-[210px] bg-[#BF4D20] rounded-full justify-center items-center gap-3 mx-auto flex  text-center text-white text-xs font-normal font-['Albert Sans'] uppercase leading-[18px] tracking-tight">
          VIEW INVESTMENT <Arrows storke="#FFFFFF" />
        </Link>}
      </div>
    </>
  );
};

export default Purchase;
