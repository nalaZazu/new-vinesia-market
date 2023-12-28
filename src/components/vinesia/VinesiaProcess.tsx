import React from 'react'
import Image from "next/image";
import feescondition from "@/assets/images/fees-and-conditions.png";
import warehouse from "@/assets/images/our-warehouse.png";
export default function VinesiaProcess() {
  return (
    <div>
      {" "}
      <h2 className="md:max-w-[715px] w-full text-zinc-800 text-7xl font-normal leading-[84px] tracking-[-1.44px] pb-12">
        Details about parts of the process and page
      </h2>
      <div className="grid md:grid-cols-2 grid-cols-1 pb-16">
        <div className="md:pe-[141px] pe-0">
          <h2 className="text-zinc-800 text-lg font-semibold leading-relaxed">
            Our fees and conditions
          </h2>
          <div className="py-8">
            <p className=" text-neutral-600 text-base font-normal font-['Albert Sans'] leading-snug">
              At Vinesia, we pride ourselves on providing exceptional wine
              storage services, with optimal conditions and full insurance.
              While maintaining these standards involves costs, our aim is to
              maximize your wine investment returns.
            </p>
            <p>
              We charge a yearly service fee of 2.3% of your Net Asset Value
              (NAV), billed semi-annually at 1.15% per installment. This fee
              structure aids in managing expenses predictably for our clients.
            </p>
            <p>
              Fees are collected in advance for a set period, ensuring
              uninterrupted service. In line with our flexible and fair
              approach, if you decide to sell your wine assets, we will refund
              the remaining balance of the prepaid period. This ensures you pay
              only for the service you use, maintaining our commitment to
              transparency and fairness.
            </p>
          </div>
        </div>
        <div>
          <Image
            className="w-full h-auto"
            src={feescondition}
            alt="Transistor"
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 ">
        <div className="md:order-1 order-2">
          <Image className="w-full h-auto" src={warehouse} alt="Transistor" />
        </div>
        <div className="md:ps-[140px] ps-0 flex items-end md:order-2 order-1">
          <div className="py-8">
            <p className=" text-neutral-600 text-base font-normal leading-snug">
              In addition to physical safeguards, Vinesia provides comprehensive
              insurance coverage for each bottle at their replacement value.
              This policy encompasses protection against a wide range of
              potential risks, such as theft, accidental damage, and natural
              disasters. The combination of rigorous security protocols and
              extensive insurance coverage offers clients peace of mind, knowing
              their prized wine collections are in safe hands and fully insured
              against unforeseen events.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
