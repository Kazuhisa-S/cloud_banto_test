import type { NextPage } from "next";
import HeaderFixedIcon1 from "./header-fixed-icon1";

type ConfirmationContainerType = {
  prop?: string;
  logo?: string;
  prop1?: string;

  /** Action props */
  onLogoClick?: () => void;
  onText2Click?: () => void;
};

const ConfirmationContainer: NextPage<ConfirmationContainerType> = ({
  prop,
  logo,
  prop1,
  onLogoClick,
  onText2Click,
}) => {
  return (
    <div className="absolute top-[67px] left-[407px] w-[380px] h-[323px] text-left text-sm text-gray-200 font-roboto">
      <div className="absolute top-[180px] left-[0px] leading-[28px] inline-block w-[380px] h-14">
        <p className="m-0">{prop}</p>
        <p className="m-0">ログイン画面からお進みください。</p>
      </div>
      <HeaderFixedIcon1
        imageDimensions="/logo4.svg"
        propTop="0px"
        propLeft="0px"
        propWidth="81px"
        propHeight="76px"
        propCursor="pointer"
        propPosition="absolute"
        onLogoClick={onLogoClick}
      />
      <div className="absolute top-[118px] left-[0px] text-3xl leading-[20px]">
        {prop1}
      </div>
      <div
        className="absolute top-[295px] left-[0px] text-xs leading-[28px] cursor-pointer"
        onClick={onText2Click}
      >
        ログイン画面に移動
      </div>
    </div>
  );
};

export default ConfirmationContainer;
