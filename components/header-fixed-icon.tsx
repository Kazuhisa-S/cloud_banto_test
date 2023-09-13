import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type HeaderFixedIconType = {
  headerFixedHeaderFixed?: string;

  /** Style props */
  headerFixedIconPosition?: CSSProperties["position"];
  headerFixedIconTop?: CSSProperties["top"];
  headerFixedIconLeft?: CSSProperties["left"];
  headerFixedIconCursor?: CSSProperties["cursor"];

  /** Action props */
  onHeaderFixedClick?: () => void;
};

const HeaderFixedIcon: NextPage<HeaderFixedIconType> = ({
  headerFixedHeaderFixed,
  headerFixedIconPosition,
  headerFixedIconTop,
  headerFixedIconLeft,
  headerFixedIconCursor,
  onHeaderFixedClick,
}) => {
  const headerFixedIconStyle: CSSProperties = useMemo(() => {
    return {
      position: headerFixedIconPosition,
      top: headerFixedIconTop,
      left: headerFixedIconLeft,
      cursor: headerFixedIconCursor,
    };
  }, [
    headerFixedIconPosition,
    headerFixedIconTop,
    headerFixedIconLeft,
    headerFixedIconCursor,
  ]);

  return (
    <img
      className="relative w-[133px] h-[124px]"
      alt=""
      src={headerFixedHeaderFixed}
      style={headerFixedIconStyle}
      onClick={onHeaderFixedClick}
    />
  );
};

export default HeaderFixedIcon;
