import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type BtnMenuType = {
  prop?: string;

  /** Style props */
  btnMenuPosition?: CSSProperties["position"];
  btnMenuTop?: CSSProperties["top"];
  btnMenuLeft?: CSSProperties["left"];
  btnMenuCursor?: CSSProperties["cursor"];
  btnMenuOpacity?: CSSProperties["opacity"];
  rectangleDivBorder?: CSSProperties["border"];
  rectangleDivBoxShadow?: CSSProperties["boxShadow"];
  divPosition?: CSSProperties["position"];
  divHeight?: CSSProperties["height"];
  divWidth?: CSSProperties["width"];
  divTop?: CSSProperties["top"];
  divLeft?: CSSProperties["left"];
  divFontSize?: CSSProperties["fontSize"];
  divFontFamily?: CSSProperties["fontFamily"];
  divColor?: CSSProperties["color"];
  divTextAlign?: CSSProperties["textAlign"];
  divDisplay?: CSSProperties["display"];
  divLineBreak?: CSSProperties["lineBreak"];

  /** Action props */
  onBtnMenuContainer1Click?: () => void;
};

const BtnMenu: NextPage<BtnMenuType> = ({
  prop,
  btnMenuPosition,
  btnMenuTop,
  btnMenuLeft,
  btnMenuCursor,
  btnMenuOpacity,
  rectangleDivBorder,
  rectangleDivBoxShadow,
  divPosition,
  divHeight,
  divWidth,
  divTop,
  divLeft,
  divFontSize,
  divFontFamily,
  divColor,
  divTextAlign,
  divDisplay,
  divLineBreak,
  onBtnMenuContainer1Click,
}) => {
  const btnMenuStyle: CSSProperties = useMemo(() => {
    return {
      position: btnMenuPosition,
      top: btnMenuTop,
      left: btnMenuLeft,
      cursor: btnMenuCursor,
      opacity: btnMenuOpacity,
    };
  }, [btnMenuPosition, btnMenuTop, btnMenuLeft, btnMenuCursor, btnMenuOpacity]);

  const rectangleDiv2Style: CSSProperties = useMemo(() => {
    return {
      border: rectangleDivBorder,
      boxShadow: rectangleDivBoxShadow,
    };
  }, [rectangleDivBorder, rectangleDivBoxShadow]);

  const div7Style: CSSProperties = useMemo(() => {
    return {
      position: divPosition,
      height: divHeight,
      width: divWidth,
      top: divTop,
      left: divLeft,
      fontSize: divFontSize,
      fontFamily: divFontFamily,
      color: divColor,
      textAlign: divTextAlign,
      display: divDisplay,
      lineBreak: divLineBreak,
    };
  }, [
    divPosition,
    divHeight,
    divWidth,
    divTop,
    divLeft,
    divFontSize,
    divFontFamily,
    divColor,
    divTextAlign,
    divDisplay,
    divLineBreak,
  ]);

  return (
    <div
      className="relative w-[250px] h-40 text-left text-sm text-black font-roboto"
      style={btnMenuStyle}
      onClick={onBtnMenuContainer1Click}
    >
      <div
        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-11xl bg-white box-border border-[1px] border-solid border-gainsboro"
        style={rectangleDiv2Style}
      />
      <div className="absolute h-[10.63%] w-[66.8%] top-[78.13%] left-[12.8%] flex items-end">
        {prop}
      </div>
      <div
        className="absolute h-[26.96%] w-[7.94%] top-[11.27%] left-[12.62%] text-27xl font-inria-sans text-gray-100 inline-block"
        style={div7Style}
      >
        1
      </div>
    </div>
  );
};

export default BtnMenu;
