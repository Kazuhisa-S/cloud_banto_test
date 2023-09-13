import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type ComponentType = {
  /** Style props */
  divPosition?: CSSProperties["position"];
  divTop?: CSSProperties["top"];
  divLeft?: CSSProperties["left"];
};

const Component: NextPage<ComponentType> = ({
  divPosition,
  divTop,
  divLeft,
}) => {
  const divStyle: CSSProperties = useMemo(() => {
    return {
      position: divPosition,
      top: divTop,
      left: divLeft,
    };
  }, [divPosition, divTop, divLeft]);

  return (
    <div
      className="relative w-[126px] h-[46px] text-center text-sm text-white font-noto-sans"
      style={divStyle}
    >
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-orangered" />
      <i className="absolute w-[79.38%] top-[28.26%] left-[10.31%] leading-[20px] flex font-thin items-center justify-center">
        完了
      </i>
    </div>
  );
};

export default Component;
