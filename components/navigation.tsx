import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type NavigationType = {
  prop?: string;

  /** Style props */
  navigationWidth?: CSSProperties["width"];
  navigationHeight?: CSSProperties["height"];
  navigationPosition?: CSSProperties["position"];
  navigationTop?: CSSProperties["top"];
  navigationRight?: CSSProperties["right"];
  navigationBottom?: CSSProperties["bottom"];
  navigationLeft?: CSSProperties["left"];
  navigationCursor?: CSSProperties["cursor"];
  divColor?: CSSProperties["color"];
  ellipseDivPosition?: CSSProperties["position"];
  ellipseDivHeight?: CSSProperties["height"];
  ellipseDivWidth?: CSSProperties["width"];
  ellipseDivTop?: CSSProperties["top"];
  ellipseDivRight?: CSSProperties["right"];
  ellipseDivBottom?: CSSProperties["bottom"];
  ellipseDivLeft?: CSSProperties["left"];
  ellipseDivBorderRadius?: CSSProperties["borderRadius"];
  ellipseDivBackgroundColor?: CSSProperties["backgroundColor"];
  ellipseDivLineBreak?: CSSProperties["lineBreak"];

  /** Action props */
  onNavigationContainer1Click?: () => void;
};

const Navigation: NextPage<NavigationType> = ({
  prop,
  navigationWidth,
  navigationHeight,
  navigationPosition,
  navigationTop,
  navigationRight,
  navigationBottom,
  navigationLeft,
  navigationCursor,
  divColor,
  ellipseDivPosition,
  ellipseDivHeight,
  ellipseDivWidth,
  ellipseDivTop,
  ellipseDivRight,
  ellipseDivBottom,
  ellipseDivLeft,
  ellipseDivBorderRadius,
  ellipseDivBackgroundColor,
  ellipseDivLineBreak,
  onNavigationContainer1Click,
}) => {
  const navigationStyle: CSSProperties = useMemo(() => {
    return {
      width: navigationWidth,
      height: navigationHeight,
      position: navigationPosition,
      top: navigationTop,
      right: navigationRight,
      bottom: navigationBottom,
      left: navigationLeft,
      cursor: navigationCursor,
    };
  }, [
    navigationWidth,
    navigationHeight,
    navigationPosition,
    navigationTop,
    navigationRight,
    navigationBottom,
    navigationLeft,
    navigationCursor,
  ]);

  const div6Style: CSSProperties = useMemo(() => {
    return {
      color: divColor,
    };
  }, [divColor]);

  const ellipseDivStyle: CSSProperties = useMemo(() => {
    return {
      position: ellipseDivPosition,
      height: ellipseDivHeight,
      width: ellipseDivWidth,
      top: ellipseDivTop,
      right: ellipseDivRight,
      bottom: ellipseDivBottom,
      left: ellipseDivLeft,
      borderRadius: ellipseDivBorderRadius,
      backgroundColor: ellipseDivBackgroundColor,
      lineBreak: ellipseDivLineBreak,
    };
  }, [
    ellipseDivPosition,
    ellipseDivHeight,
    ellipseDivWidth,
    ellipseDivTop,
    ellipseDivRight,
    ellipseDivBottom,
    ellipseDivLeft,
    ellipseDivBorderRadius,
    ellipseDivBackgroundColor,
    ellipseDivLineBreak,
  ]);

  return (
    <div
      className="relative w-[87px] h-6 text-left text-sm text-black font-roboto"
      style={navigationStyle}
      onClick={onNavigationContainer1Click}
    >
      <div
        className="absolute h-[87.5%] w-[137.93%] top-[8.33%] left-[26.44%] leading-[18px] flex items-center"
        style={div6Style}
      >
        {prop}
      </div>
      <div
        className="absolute h-3/6 w-[13.79%] top-[25%] right-[86.21%] bottom-[25%] left-[0%] rounded-[50%] bg-lightslategray"
        style={ellipseDivStyle}
      />
    </div>
  );
};

export default Navigation;
