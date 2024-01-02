import React from 'react'
import Image from "next/image";
import feescondition from "@/assets/images/fees-and-conditions.png";
import warehouse from "@/assets/images/our-warehouse.jpg";
export default function VinesiaProcess() {
  return (
    <div>
      {" "}
      <h2 className="md:max-w-[715px] w-full text-zinc-800 md:text-7xl text-4xl font-normal md:leading-[84px] md:tracking-[-1.44px] pb-12">
        Details about parts of the process and page
      </h2>
      <div className="grid md:grid-cols-2 grid-cols-1 pb-16">
        <div className="md:pe-[141px] pe-0">
          <p className="text-zinc-800 text-lg font-semibold leading-relaxed">
            Our fees and conditions
          </p>
          <div className="py-8">
            <p className=" text-neutral-600 text-base font-normal font-['Albert Sans'] leading-snug">
              At Vinesia, we pride ourselves on providing exceptional wine
              storage services, with optimal conditions and full insurance.
              While maintaining these standards involves costs, our aim is to
              maximize your wine investment returns.
            </p><br/>
            <p className=" text-neutral-600 text-base font-normal font-['Albert Sans'] leading-snug">
              We charge a yearly service fee of 2.3% of your Net Asset Value
              (NAV), billed semi-annually at 1.15% per installment. This fee
              structure aids in managing expenses predictably for our clients.
            </p><br />
            <p className=" text-neutral-600 text-base font-normal font-['Albert Sans'] leading-snug">
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
          <p className="pb-6 text-zinc-800 text-lg font-semibold font-['Albert Sans'] leading-relaxed">
              Our warehouse
            </p>
            <p className=" text-neutral-600 text-base font-normal leading-snug">
            At Vinesia, your wines are securely stored in our central warehouse located in Luxembourg.
            This facility adheres to the highest security standards and has an advanced temperature and humidity control system.
            We are making reasonable efforts to keep a humidity level between 60% and 80% and a temperature between 12 and 15 degrees Celsius at all times.
            En Primeur wines will be stored in the Vinesia warehouse upon delivery.
            For security reasons, we maintain confidentiality regarding the precise location of our warehouse.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
