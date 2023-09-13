import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type SubMenu1Type = {
  dimensionCode?: string;

  /** Style props */
  subMenuPosition?: CSSProperties["position"];
  subMenuTop?: CSSProperties["top"];
  subMenuLeft?: CSSProperties["left"];
  subMenuBottom?: CSSProperties["bottom"];
  rectangleDivCursor?: CSSProperties["cursor"];
  groupDivCursor?: CSSProperties["cursor"];
  divColor?: CSSProperties["color"];

  /** Action props */
  onRectangle5Click?: () => void;
  onGroupContainer2Click?: () => void;
};

const SubMenu1: NextPage<SubMenu1Type> = ({
  dimensionCode,
  subMenuPosition,
  subMenuTop,
  subMenuLeft,
  subMenuBottom,
  rectangleDivCursor,
  groupDivCursor,
  divColor,
  onRectangle5Click,
  onGroupContainer2Click,
}) => {
  const subMenu1Style: CSSProperties = useMemo(() => {
    return {
      position: subMenuPosition,
      top: subMenuTop,
      left: subMenuLeft,
      bottom: subMenuBottom,
    };
  }, [subMenuPosition, subMenuTop, subMenuLeft, subMenuBottom]);

  const rectangleDivStyle: CSSProperties = useMemo(() => {
    return {
      cursor: rectangleDivCursor,
    };
  }, [rectangleDivCursor]);

  const groupDiv2Style: CSSProperties = useMemo(() => {
    return {
      cursor: groupDivCursor,
    };
  }, [groupDivCursor]);

  const div2Style: CSSProperties = useMemo(() => {
    return {
      color: divColor,
    };
  }, [divColor]);

  return (
    <div
      className="relative w-[229px] h-[124px] text-left text-sm text-black font-roboto"
      style={subMenu1Style}
    >
      <div
        className="absolute h-3/6 w-full top-[0%] right-[0%] bottom-[50%] left-[0%] bg-white box-border border-t-[1px] border-solid border-gainsboro"
        style={rectangleDivStyle}
        onClick={onRectangle5Click}
      />
      <div className="absolute h-[21.74%] w-[49.78%] top-[14.52%] left-[28.38%] leading-[20px] flex items-center">
        フォルダ
      </div>
      <div
        className="absolute h-3/6 w-full top-[50%] right-[0%] bottom-[0%] left-[0%]"
        style={groupDiv2Style}
        onClick={onGroupContainer2Click}
      >
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-white box-border border-t-[1px] border-solid border-gainsboro" />
        <div
          className="absolute h-[43.48%] w-[49.78%] top-[29.03%] left-[28.38%] leading-[20px] flex items-center"
          style={div2Style}
        >
          マイページ
        </div>
        <img
          className="absolute h-[54.84%] w-[14.85%] top-[22.58%] right-[77.29%] bottom-[22.58%] left-[7.86%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src={dimensionCode}
        />
      </div>
      <img
        className="absolute top-[19px] left-[22px] w-[26px] h-[26px] overflow-hidden"
        alt=""
        src="/folderregular-1.svg"
      />
    </div>
  );
};

export default SubMenu1;
