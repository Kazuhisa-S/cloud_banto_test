import type { NextPage } from "next";
import HeaderFixedIcon1 from "./header-fixed-icon1";

type AuthEmailContainerType = {
  logo?: string;
  prop?: string;

  /** Action props */
  onLogoClick?: () => void;
  onText2Click?: () => void;
};

const AuthEmailContainer: NextPage<AuthEmailContainerType> = ({
  logo,
  prop,
  onLogoClick,
  onText2Click,
}) => {
  return (
    <div className="absolute top-[67px] left-[407px] w-[380px] h-[323px] text-left text-sm text-gray-200 font-roboto">
      <div className="absolute top-[180px] left-[0px] leading-[28px] inline-block w-[380px] h-14">
        <p className="m-0">
          ご登録いただいたメールアドレスに確認メールを送信しましたので、メールのご確認をお願いします。
        </p>
      </div>
      <HeaderFixedIcon1
        imageDimensions="/logo5.svg"
        propTop="0px"
        propLeft="0px"
        propWidth="81px"
        propHeight="76px"
        propCursor="pointer"
        propPosition="absolute"
        onLogoClick={onLogoClick}
      />
      <div className="absolute top-[118px] left-[0px] text-3xl leading-[20px]">
        {prop}
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

export default AuthEmailContainer;
