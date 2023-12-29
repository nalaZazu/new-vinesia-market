import { AccordionWineFaq } from '@/components/accordion/page'
import React from 'react'

function Faq() {
  return (
    <div>
        <div className=" pt-3 pb-8 container mx-auto px-3">
            <div className=" mt-9 hidden md:block">
            <h2 className=" text-primary text-[78px] font-normal">
                Frequently Asked Questions
            </h2>
            </div>
            {/* for mobileView */}
            <div className="mt-9 md:hidden block">
            <h2 className=" text-zinc-800 text-6xl font-normal leading-[68px]">
                Frequently Asked Questions
            </h2>
            </div>
        </div>
        <div>
            <AccordionWineFaq />
        </div>
    </div>
  )
}

export default Faq