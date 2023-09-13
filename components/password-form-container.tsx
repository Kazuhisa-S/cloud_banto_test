import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type PasswordFormContainerType = {
  newPasswordConfirmPasswor?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
  propBottom?: CSSProperties["bottom"];
};

const PasswordFormContainer: NextPage<PasswordFormContainerType> = ({
  newPasswordConfirmPasswor,
  propTop,
  propBottom,
}) => {
  const groupDiv4Style: CSSProperties = useMemo(() => {
    return {
      top: propTop,
      bottom: propBottom,
    };
  }, [propTop, propBottom]);

  return (
    <div
      className="absolute h-[14.31%] w-full top-[52.68%] right-[0%] bottom-[33%] left-[0%] text-left text-sm text-gray-200 font-roboto"
      style={groupDiv4Style}
    >
      <div className="absolute h-[63.89%] w-full top-[36.11%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-white box-border border-[1px] border-solid border-gainsboro" />
      <div className="absolute top-[0px] left-[0px] leading-[20px]">
        {newPasswordConfirmPasswor}
      </div>
      <div className="absolute top-[39px] left-[14px] leading-[20px] text-gainsboro">
        半角英数字8文字以上
      </div>
    </div>
  );
};

export default PasswordFormContainer;
