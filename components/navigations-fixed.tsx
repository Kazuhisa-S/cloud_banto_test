import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Navigation from "./navigation";

type NavigationsFixedType = {
  /** Style props */
  propCursor?: CSSProperties["cursor"];
  propColor?: CSSProperties["color"];
  propCursor1?: CSSProperties["cursor"];
  propColor1?: CSSProperties["color"];

  /** Action props */
  onNavigationContainerClick?: () => void;
  onNavigationContainer1Click?: () => void;
};

const NavigationsFixed: NextPage<NavigationsFixedType> = ({
  propCursor,
  propColor,
  propCursor1,
  propColor1,
  onNavigationContainerClick,
  onNavigationContainer1Click,
}) => {
  const navigationStyle: CSSProperties = useMemo(() => {
    return {
      cursor: propCursor,
    };
  }, [propCursor]);

  const div6Style: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const navigationStyle1: CSSProperties = useMemo(() => {
    return {
      cursor: propCursor1,
    };
  }, [propCursor1]);

  const div6Style1: CSSProperties = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  return (
    <div className="absolute top-[295px] left-[46px] w-[91px] h-[174px]">
      <div className="absolute h-[36.21%] w-[2.2%] top-[10.34%] right-[87.91%] bottom-[53.45%] left-[9.89%] bg-gainsboro" />
      <Navigation
        prop="法人設立"
        navigationWidth="95.6%"
        navigationHeight="13.79%"
        navigationPosition="absolute"
        navigationTop="0%"
        navigationRight="0%"
        navigationBottom="86.21%"
        navigationLeft="4.4%"
        navigationCursor="pointer"
        divColor="#0c1528"
        ellipseDivPosition="absolute"
        ellipseDivHeight="50%"
        ellipseDivWidth="13.79%"
        ellipseDivTop="25%"
        ellipseDivRight="86.21%"
        ellipseDivBottom="25%"
        ellipseDivLeft="0%"
        ellipseDivBorderRadius="50%"
        ellipseDivBackgroundColor="#7e8594"
        ellipseDivLineBreak="unset"
        onNavigationContainer1Click={onNavigationContainerClick}
      />
      <Navigation
        navigationWidth="95.6%"
        navigationHeight="13.79%"
        navigationPosition="absolute"
        navigationTop="43.1%"
        navigationRight="0%"
        navigationBottom="43.1%"
        navigationLeft="4.4%"
        navigationCursor="pointer"
        divColor="#0c1528"
        onNavigationContainer1Click={onNavigationContainer1Click}
      />
    </div>
  );
};

export default NavigationsFixed;
