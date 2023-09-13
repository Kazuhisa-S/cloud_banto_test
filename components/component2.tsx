import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type Component2Type = {
  /** Style props */
  divPosition?: CSSProperties["position"];
  divTop?: CSSProperties["top"];
  divLeft?: CSSProperties["left"];
};

const Component2: NextPage<Component2Type> = ({
  divPosition,
  divTop,
  divLeft,
}) => {
  const div3Style: CSSProperties = useMemo(() => {
    return {
      position: divPosition,
      top: divTop,
      left: divLeft,
    };
  }, [divPosition, divTop, divLeft]);

  return (
    <div
      className="relative w-[220px] h-[46px] text-center text-sm text-white font-noto-sans-jp"
      style={div3Style}
    >
      <div className="absolute h-full w-[96.36%] top-[0%] right-[1.82%] bottom-[0%] left-[1.82%] rounded-md bg-orangered" />
      <img
        className="absolute h-[13.04%] w-[5.51%] top-[45.65%] right-[9.97%] bottom-[41.3%] left-[84.52%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/polygon-5.svg"
      />
      <b className="absolute top-[30.43%] left-[8.18%] leading-[20px]">
        アップロード
      </b>
    </div>
  );
};

export default Component2;
