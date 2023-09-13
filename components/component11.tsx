import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type Component11Type = {
  /** Style props */
  component1Position?: CSSProperties["position"];
  component1Top?: CSSProperties["top"];
  component1Left?: CSSProperties["left"];
  iCursor?: CSSProperties["cursor"];
  iCursor1?: CSSProperties["cursor"];
  iCursor2?: CSSProperties["cursor"];

  /** Action props */
  onText14Click?: () => void;
  onText15Click?: () => void;
  onText17Click?: () => void;
};

const Component11: NextPage<Component11Type> = ({
  component1Position,
  component1Top,
  component1Left,
  iCursor,
  iCursor1,
  iCursor2,
  onText14Click,
  onText15Click,
  onText17Click,
}) => {
  const component1Style: CSSProperties = useMemo(() => {
    return {
      position: component1Position,
      top: component1Top,
      left: component1Left,
    };
  }, [component1Position, component1Top, component1Left]);

  const i1Style: CSSProperties = useMemo(() => {
    return {
      cursor: iCursor,
    };
  }, [iCursor]);

  const i2Style: CSSProperties = useMemo(() => {
    return {
      cursor: iCursor1,
    };
  }, [iCursor1]);

  const i3Style: CSSProperties = useMemo(() => {
    return {
      cursor: iCursor2,
    };
  }, [iCursor2]);

  return (
    <div
      className="relative w-[1217px] h-8 text-left text-3xs text-white font-noto-sans"
      style={component1Style}
    >
      <div className="absolute h-full w-[98.11%] top-[0%] right-[1.89%] bottom-[0%] left-[0%] bg-gray-100" />
      <i
        className="absolute h-full w-[4.19%] top-[0%] left-[68.78%] [text-decoration:underline] tracking-[0.01em] leading-[20px] flex font-thin items-center"
        style={i1Style}
        onClick={onText14Click}
      >
        利用規約
      </i>
      <i
        className="absolute h-full w-[6.98%] top-[0%] left-[73.71%] [text-decoration:underline] tracking-[0.01em] leading-[20px] flex font-thin items-center"
        style={i2Style}
        onClick={onText15Click}
      >
        個人情報保護方針
      </i>
      <i className="absolute h-full w-[5.42%] top-[0%] left-[81.68%] [text-decoration:underline] tracking-[0.01em] leading-[20px] flex font-thin items-center">
        よくある質問
      </i>
      <i
        className="absolute h-full w-[4.03%] top-[0%] left-[88.17%] [text-decoration:underline] tracking-[0.01em] leading-[20px] flex font-thin items-center"
        style={i3Style}
        onClick={onText17Click}
      >
        お知らせ
      </i>
      <i className="absolute h-full w-[5.09%] top-[0%] left-[93.02%] [text-decoration:underline] tracking-[0.01em] leading-[20px] flex font-thin items-center">
        お問合せ
      </i>
    </div>
  );
};

export default Component11;
