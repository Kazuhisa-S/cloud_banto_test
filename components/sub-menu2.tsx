import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type SubMenu2Type = {
  /** Style props */
  subMenuPosition?: CSSProperties["position"];
  subMenuBottom?: CSSProperties["bottom"];
  subMenuLeft?: CSSProperties["left"];
};

const SubMenu2: NextPage<SubMenu2Type> = ({
  subMenuPosition,
  subMenuBottom,
  subMenuLeft,
}) => {
  const subMenu2Style: CSSProperties = useMemo(() => {
    return {
      position: subMenuPosition,
      bottom: subMenuBottom,
      left: subMenuLeft,
    };
  }, [subMenuPosition, subMenuBottom, subMenuLeft]);

  return <div className="relative w-[230px] h-[124px]" style={subMenu2Style} />;
};

export default SubMenu2;
