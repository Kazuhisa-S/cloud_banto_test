import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type Component1Type = {
  /** Style props */
  divPosition?: CSSProperties["position"];
  divTop?: CSSProperties["top"];
  divLeft?: CSSProperties["left"];
};

const Component1: NextPage<Component1Type> = ({
  divPosition,
  divTop,
  divLeft,
}) => {
  const div1Style: CSSProperties = useMemo(() => {
    return {
      position: divPosition,
      top: divTop,
      left: divLeft,
    };
  }, [divPosition, divTop, divLeft]);

  return (
    <div
      className="relative w-[964px] h-[86px] text-center text-sm text-white font-noto-sans"
      style={div1Style}
    >
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-silver" />
      <div className="absolute h-[51.16%] w-[26.87%] top-[24.42%] right-[16.6%] bottom-[24.42%] left-[56.54%]">
        <div className="absolute h-[86.36%] w-full top-[6.82%] right-[0%] bottom-[6.82%] left-[0%] rounded-21xl bg-white box-border border-[0.5px] border-solid border-orangered" />
        <div className="absolute h-[86.36%] w-[78.38%] top-[6.82%] right-[21.62%] bottom-[6.82%] left-[0%] rounded-tl-21xl rounded-tr-none rounded-br-none rounded-bl-21xl bg-orangered" />
        <img
          className="absolute h-[86.6%] w-[6.37%] top-[6.7%] right-[15.44%] bottom-[6.7%] left-[78.19%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/polygon-1.svg"
        />
        <i className="absolute top-[27.27%] left-[7.34%] font-bold">
          サポーターに相談する
        </i>
        <img
          className="absolute h-[33.47%] w-[7.92%] top-[33.26%] right-[4.05%] bottom-[33.26%] left-[88.03%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/arrow-1.svg"
        />
      </div>
      <div className="absolute h-[58.14%] w-[30.39%] top-[17.44%] right-[50.93%] bottom-[24.42%] left-[18.67%] text-left text-xs text-black">
        <i className="absolute h-[52%] w-[76.11%] top-[0%] left-[1.37%] tracking-[-0.2px] leading-[24px] inline-block font-thin">
          どうしてもここがわからない．．．
        </i>
        <i className="absolute h-[52%] w-[98.29%] top-[46%] left-[1.37%] text-base tracking-[-0.2px] leading-[24px] inline-block font-bold">
          サポーターに確認したい方はこちら
        </i>
        <img
          className="absolute h-[26%] w-full top-[74%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group-75.svg"
        />
      </div>
      <img
        className="absolute h-[46.51%] w-[4.15%] top-[26.74%] right-[82.57%] bottom-[26.74%] left-[13.28%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector.svg"
      />
      <img
        className="absolute h-[23.26%] w-[2.49%] top-[38.37%] right-[23.44%] bottom-[38.37%] left-[74.07%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector1.svg"
      />
    </div>
  );
};

export default Component1;
