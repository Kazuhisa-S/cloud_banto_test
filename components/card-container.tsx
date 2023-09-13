import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type CardContainerType = {
  companyName?: string;
  companyNameDisplay?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
  propBottom?: CSSProperties["bottom"];
};

const CardContainer: NextPage<CardContainerType> = ({
  companyName,
  companyNameDisplay,
  propTop,
  propBottom,
}) => {
  const groupDiv3Style: CSSProperties = useMemo(() => {
    return {
      top: propTop,
      bottom: propBottom,
    };
  }, [propTop, propBottom]);

  return (
    <div
      className="absolute h-[9.64%] w-full top-[35.48%] right-[0%] bottom-[54.89%] left-[0%] text-left text-sm text-gray-200 font-roboto"
      style={groupDiv3Style}
    >
      <div className="absolute h-[63.89%] w-full top-[36.11%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-white box-border border-[1px] border-solid border-gainsboro" />
      <div className="absolute top-[0px] left-[0px] leading-[20px]">
        {companyName}
      </div>
      <div className="absolute top-[39px] left-[14px] leading-[20px] text-gainsboro">
        {companyNameDisplay}
      </div>
    </div>
  );
};

export default CardContainer;
