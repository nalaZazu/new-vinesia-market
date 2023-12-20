import Image from "next/image";
import React from "react";

// import { Img, Line, Text } from "../../components";

type VinesiaGiftsRowpriceProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "questionandanswertext"
> &
  Partial<{ questionandanswertext: string }>;

const VinesiaGiftsRowprice: React.FC<VinesiaGiftsRowpriceProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-px items-center justify-start w-auto">
          <p className="font-albertsans text-center text-deep_orange-800 text-xs tracking-[0.24px] uppercase w-auto">
            {props?.questionandanswertext}
          </p>
          <div className="bg-deep_orange-800_33 h-px w-full" />
        </div>
        <div className="flex flex-col h-6 md:h-auto items-center justify-center w-6">
          {/* <Image className="h-6 w-6" src="images/img_cut.svg" alt="cut" /> */}
        </div>
      </div>
    </>
  );
};

VinesiaGiftsRowprice.defaultProps = {
  questionandanswertext: "SEE ALL QUESTIONS & ANSWERS",
};

export default VinesiaGiftsRowprice;
