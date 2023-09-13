import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type NavigationsPnaviFixedType = {
  prop?: string;

  /** Style props */
  navigationsPnaviFixedPosition?: CSSProperties["position"];
  navigationsPnaviFixedTop?: CSSProperties["top"];
  navigationsPnaviFixedLeft?: CSSProperties["left"];
  btnBackCursor?: CSSProperties["cursor"];
  iLeft?: CSSProperties["left"];

  /** Action props */
  onBtnBackContainerClick?: () => void;
};

const NavigationsPnaviFixed: NextPage<NavigationsPnaviFixedType> = ({
  prop,
  navigationsPnaviFixedPosition,
  navigationsPnaviFixedTop,
  navigationsPnaviFixedLeft,
  btnBackCursor,
  iLeft,
  onBtnBackContainerClick,
}) => {
  const navigationsPnaviFixedStyle: CSSProperties = useMemo(() => {
    return {
      position: navigationsPnaviFixedPosition,
      top: navigationsPnaviFixedTop,
      left: navigationsPnaviFixedLeft,
    };
  }, [
    navigationsPnaviFixedPosition,
    navigationsPnaviFixedTop,
    navigationsPnaviFixedLeft,
  ]);

  const btnBackStyle: CSSProperties = useMemo(() => {
    return {
      cursor: btnBackCursor,
    };
  }, [btnBackCursor]);

  const iStyle: CSSProperties = useMemo(() => {
    return {
      left: iLeft,
    };
  }, [iLeft]);

  return (
    <div
      className="relative [background:linear-gradient(#fff,_#fff),_linear-gradient(#fff,_#fff),_#fff] box-border w-[965px] h-[62px] text-left text-xs text-gray-200 font-noto-sans border-[1px] border-solid border-whitesmoke-200"
      style={navigationsPnaviFixedStyle}
    >
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-white box-border border-b-[1px] border-solid border-whitesmoke-200" />
      <div
        className="absolute h-[29.03%] w-[4.16%] top-[35.48%] right-[92.85%] bottom-[35.48%] left-[2.99%]"
        style={btnBackStyle}
        onClick={onBtnBackContainerClick}
      >
        <div className="absolute h-[73.01%] w-[19.64%] top-[11.11%] right-[80.36%] bottom-[15.88%] left-[0%]">
          <div className="absolute h-[70.71%] w-[23.57%] top-[90%] right-[-23.57%] bottom-[-60.71%] left-[100%] bg-gainsboro [transform:_rotate(135deg)] [transform-origin:0_0]" />
          <div className="absolute h-[70.71%] w-[23.57%] top-[60%] right-[59.76%] bottom-[-30.71%] left-[16.67%] bg-gainsboro [transform:_rotate(-135deg)] [transform-origin:0_0]" />
        </div>
        <i className="absolute top-[-5.56%] left-[40.21%] font-thin">戻る</i>
      </div>
      <i
        className="absolute top-[32.26%] left-[46.94%] text-sm tracking-[0.11em] font-thin text-center"
        style={iStyle}
      >
        {prop}
      </i>
    </div>
  );
};

export default NavigationsPnaviFixed;
