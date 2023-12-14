import { Arrows, MarksAnim } from '@/assets/icons/Icons'
import React from 'react'

const CalcuationProgress = () => {
  return (
    <React.Fragment>
          <div className="container mx-auto">
        <div className="md:px-[475px] md:py-[72px] text-center   px-4  pt-[60px] pb-[72px] ">
          <div className=" text-center">
            <span className="text-[#A6836C]  text-xs font-normal  uppercase leading-3 tracking-tight ">
              Steps
            </span>
            <h3 className="text-zinc-800 text-4xl font-light  leading-[44px] tracking[-0.36px]">
              3/3
            </h3>
          </div>
          {/* here is  */}
          <div className="md:pb-[163px] pb-[150px]">
           <div className='pt-[146px] flex justify-center '>
             <MarksAnim fill="#2F222B"/>     
          </div> 
          <h4 className=" md:pt-6  text-center text-zinc-800 text-[21px] font-light  leading-[29px] tracking-wide">Calculation in progress</h4>
          </div>
          


          <button className="px-8 py-[22px] rounded-full border text-center border-orange-700 text-orange-700 border-opacity-20 justify-center items-center gap-3 inline-flex">
            NEXT <Arrows storke="#BF4D20" />
          </button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default CalcuationProgress