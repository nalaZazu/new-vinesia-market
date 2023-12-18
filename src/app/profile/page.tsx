"use client";
import { useState } from "react";
import { Tab } from "@headlessui/react";
import {
  BidsOffer,
  FavouriteWine,
  InvestmentPortfolio,
  Invoice,
  Logout,
  MyAccount,
  SearchIcon,
  VinesiaCircle,
  Wallet,
} from "@/assets/icons/Icons";
import InvestmentTab from "@/components/profile/InvestmentTab";
// import TabButton from "@/common/TabButton";
// import DropDownButton from "@/common/DropDownButton";
// import ProductCards from "@/components/productCard/page";
import InvestmentCard from "@/components/profile/InvestmentCard";

export default function Profile() {
  const [active, setActive] = useState(0);
  //   const countryName = ["ALL", "CURRENTLY SELLING", "NOT CURRENtly SELLING"];

  let [categories] = useState([
    {
      id: 1,
      title: "Investment portfolio",
      subheading: "Subtext",
      icon: <InvestmentPortfolio />,
    },
    {
      id: 2,
      title: "Favourite wine",
      subheading: "Subtext",
      icon: <FavouriteWine />,
    },
    {
      id: 3,
      title: "Bids & offers",
      subheading: "Subtext",
      icon: <BidsOffer />,
    },
    {
      id: 3,
      title: "wallet",
      subheading: "Subtext",
      icon: <Wallet />,
    },
    {
      id: 4,
      title: "Invoices",
      subheading: "Subtext",
      icon: <Invoice />,
    },
    {
      id: 5,
      title: "Vinesia Circle",
      subheading: "Subtext",
      icon: <VinesiaCircle />,
    },
    {
      id: 6,
      title: "My account",
      subheading: "Subtext",
      icon: <MyAccount />,
    },
    {
      id: 7,
      title: "Logout",
      subheading: "Subtext",
      icon: <Logout />,
    },
  ]);

  return (
    <div className="container mx-auto">
      <div className=" pt-12 pb-7">
        <h3 className="text-zinc-800 text-4xl font-light leading-[44px]">
          My profile
        </h3>
      </div>
      <div className="flex gap-8">
        <Tab.Group>
          <div className="basis-1/4">
            <Tab.List className="flex flex-col rounded-lg border-t-2 border-s-2 border-r-2 border-orange-700 border-opacity-20">
              {categories.map(
                (
                  {
                    id,
                    title,
                    icon,
                    subheading,
                  }: { id?: any; title: any; icon: any; subheading: any },
                  i
                ) => (
                  <Tab
                    onClick={() => setActive(i)}
                    key={i}
                    className={`w-full py-2.5 text-sm border-b-2 border-orange-700 border-opacity-20 font-medium leading-5 ring-offset-0 focus:outline-none focus:ring-0  ${
                      i == 0 ? "rounded-t-lg" : ""
                    } ${active == i ? "bg-secondary" : "bg-transparent"} `}
                  >
                    <div className="flex gap-4 p-6">
                      <div
                        className={`text-lg font-semibold leading-relaxed  ${
                          active == i ? "text-white" : "text-secondary"
                        } `}
                      >
                        {icon}
                      </div>
                      <div className="text-left">
                        <div
                          className={`text-lg font-semibold leading-relaxed  ${
                            active == i ? "text-white" : "text-zinc-800"
                          } `}
                        >
                          {title}
                        </div>
                        <div
                          className={`text-xs font-normal leading-[18px] ${
                            active == i ? "text-white" : "text-zinc-800"
                          } `}
                        >
                          {subheading}
                        </div>
                      </div>
                    </div>
                  </Tab>
                )
              )}
            </Tab.List>
          </div>
          <div className="basis-9/12">
            <Tab.Panels className="mt-2">
              {Object.values(categories).map((post, idx) => (
                <Tab.Panel
                  key={idx}
                  className={`
                     rounded-md bg-[#F7EFDF] ring-offset-0 focus:outline-none focus:ring-0 py-6 ps-6 pr-8`}
                >
                  <InvestmentTab />
                </Tab.Panel>
              ))}
              <InvestmentCard />
              
            </Tab.Panels>
          </div>
        </Tab.Group>
      </div>
    </div>
  );
}