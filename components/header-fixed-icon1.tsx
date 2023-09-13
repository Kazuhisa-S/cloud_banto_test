import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type HeaderFixedIcon1Type = {
  imageDimensions?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
  propWidth?: CSSProperties["width"];
  propHeight?: CSSProperties["height"];
  propCursor?: CSSProperties["cursor"];
  propPosition?: CSSProperties["position"];

  /** Action props */
  onLogoClick?: () => void;
};

const HeaderFixedIcon1: NextPage<HeaderFixedIcon1Type> = ({
  imageDimensions,
  propTop,
  propLeft,
  propWidth,
  propHeight,
  propCursor,
  propPosition,
  onLogoClick,
}) => {
  const headerFixedIcon1Style: CSSProperties = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
      width: propWidth,
      height: propHeight,
      cursor: propCursor,
      position: propPosition,
    };
  }, [propTop, propLeft, propWidth, propHeight, propCursor, propPosition]);

  return (
    <img
      className="absolute top-[49px] left-[44px] w-[133px] h-[124px]"
      alt=""
      src={imageDimensions}
      style={headerFixedIcon1Style}
      onClick={onLogoClick}
    />
  );
};

export default HeaderFixedIcon1;
