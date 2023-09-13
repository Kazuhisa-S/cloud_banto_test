import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type BtnBackType = {
  /** Style props */
  btnBackWidth?: CSSProperties["width"];
  btnBackHeight?: CSSProperties["height"];
  btnBackPosition?: CSSProperties["position"];
  btnBackTop?: CSSProperties["top"];
  btnBackRight?: CSSProperties["right"];
  btnBackBottom?: CSSProperties["bottom"];
  btnBackLeft?: CSSProperties["left"];
  btnBackCursor?: CSSProperties["cursor"];
  divFontFamily?: CSSProperties["fontFamily"];
  divFontWeight?: CSSProperties["fontWeight"];
  divFontStyle?: CSSProperties["fontStyle"];

  /** Action props */
  onBtnBackContainerClick?: () => void;
};

const BtnBack: NextPage<BtnBackType> = ({
  btnBackWidth,
  btnBackHeight,
  btnBackPosition,
  btnBackTop,
  btnBackRight,
  btnBackBottom,
  btnBackLeft,
  btnBackCursor,
  divFontFamily,
  divFontWeight,
  divFontStyle,
  onBtnBackContainerClick,
}) => {
  const btnBack1Style: CSSProperties = useMemo(() => {
    return {
      width: btnBackWidth,
      height: btnBackHeight,
      position: btnBackPosition,
      top: btnBackTop,
      right: btnBackRight,
      bottom: btnBackBottom,
      left: btnBackLeft,
      cursor: btnBackCursor,
    };
  }, [
    btnBackWidth,
    btnBackHeight,
    btnBackPosition,
    btnBackTop,
    btnBackRight,
    btnBackBottom,
    btnBackLeft,
    btnBackCursor,
  ]);

  const div8Style: CSSProperties = useMemo(() => {
    return {
      fontFamily: divFontFamily,
      fontWeight: divFontWeight,
      fontStyle: divFontStyle,
    };
  }, [divFontFamily, divFontWeight, divFontStyle]);

  return (
    <div
      className="relative w-[40.14px] h-[18px] text-left text-xs text-gray-200 font-roboto"
      style={btnBack1Style}
      onClick={onBtnBackContainerClick}
    >
      <div className="absolute h-[73.01%] w-[19.64%] top-[11.11%] right-[80.36%] bottom-[15.88%] left-[0%]">
        <div className="absolute h-[70.71%] w-[23.57%] top-[90%] right-[-23.57%] bottom-[-60.71%] left-[100%] bg-gainsboro [transform:_rotate(135deg)] [transform-origin:0_0]" />
        <div className="absolute h-[70.71%] w-[23.57%] top-[60%] right-[59.76%] bottom-[-30.71%] left-[16.67%] bg-gainsboro [transform:_rotate(-135deg)] [transform-origin:0_0]" />
      </div>
      <div className="absolute top-[-5.56%] left-[40.21%]" style={div8Style}>
        戻る
      </div>
    </div>
  );
};

export default BtnBack;
