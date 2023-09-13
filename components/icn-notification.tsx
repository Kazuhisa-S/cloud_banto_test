import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type IcnNotificationType = {
  numberValue?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
  propRight?: CSSProperties["right"];
  propBottom?: CSSProperties["bottom"];
  propLeft?: CSSProperties["left"];
  propOpacity?: CSSProperties["opacity"];
};

const IcnNotification: NextPage<IcnNotificationType> = ({
  numberValue,
  propTop,
  propRight,
  propBottom,
  propLeft,
  propOpacity,
}) => {
  const icnNotificationStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
      right: propRight,
      bottom: propBottom,
      left: propLeft,
      opacity: propOpacity,
    };
  }, [propTop, propRight, propBottom, propLeft, propOpacity]);

  return (
    <div
      className="absolute h-[1.77%] w-[1.68%] top-[42.79%] right-[62.56%] bottom-[55.44%] left-[35.76%] text-center text-2xs text-orangered font-roboto"
      style={icnNotificationStyle}
    >
      <img
        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector2.svg"
      />
      <div className="absolute h-[80.77%] w-[38.46%] top-[12.69%] left-[30.77%] flex items-end justify-center">
        {numberValue}
      </div>
    </div>
  );
};

export default IcnNotification;
