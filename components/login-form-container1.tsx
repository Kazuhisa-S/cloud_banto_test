import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import HeaderFixedIcon1 from "./header-fixed-icon1";

const LoginFormContainer1: NextPage = () => {
  const router = useRouter();

  const onLogoClick = useCallback(() => {
    router.push("/sign-up");
  }, [router]);

  const onText2Click = useCallback(() => {
    router.push("/change-password");
  }, [router]);

  const onText3Click = useCallback(() => {
    router.push("/sign-up");
  }, [router]);

  const onBtnLogInContainerClick = useCallback(() => {
    router.push("/home");
  }, [router]);

  return (
    <div className="absolute h-[61.51%] w-[31.83%] top-[8.03%] right-[34.09%] bottom-[30.46%] left-[34.09%] text-left text-sm text-gray-200 font-roboto">
      <div className="absolute h-[14.04%] w-full top-[51.66%] right-[0%] bottom-[34.31%] left-[0%]">
        <div className="absolute h-[63.89%] w-full top-[36.11%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-white box-border border-[1px] border-solid border-gainsboro" />
        <a
          className="absolute top-[0px] left-[0px] leading-[20px] text-[inherit] [text-decoration:none]"
          href="mailto:info@banto.com"
          target="_blank"
        >
          パスワード
        </a>
        <div className="absolute top-[39px] left-[14px] leading-[20px] text-gainsboro">
          半角英数字8文字以上
        </div>
      </div>
      <div
        className="absolute top-[449px] left-[0px] text-xs leading-[28px] cursor-pointer"
        onClick={onText2Click}
      >
        パスワードを忘れた方
      </div>
      <div
        className="absolute top-[485px] left-[0px] text-xs leading-[28px] cursor-pointer"
        onClick={onText3Click}
      >
        まだアカウントをお持ちでない方
      </div>
      <div
        className="absolute h-[8.97%] w-[28.16%] top-[70.37%] right-[71.84%] bottom-[20.66%] left-[0%] cursor-pointer text-center text-white"
        onClick={onBtnLogInContainerClick}
      >
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-orangered" />
        <div className="absolute top-[13px] left-[25px] leading-[20px]">
          ログイン
        </div>
      </div>
      <div className="absolute h-[14.04%] w-full top-[32.94%] right-[0%] bottom-[53.02%] left-[0%]">
        <div className="absolute h-[63.89%] w-full top-[36.11%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-white box-border border-[1px] border-solid border-gainsboro" />
        <div className="absolute top-[0px] left-[0px] leading-[20px]">
          メールアドレス
        </div>
        <a
          className="absolute top-[39px] left-[14px] leading-[20px] text-gainsboro [text-decoration:none]"
          href="mailto:info@banto.com"
          target="_blank"
        >
          info@banto.com
        </a>
      </div>
      <HeaderFixedIcon1
        imageDimensions="/logo.svg"
        propTop="0px"
        propLeft="0px"
        propWidth="81px"
        propHeight="76px"
        propCursor="pointer"
        propPosition="absolute"
        onLogoClick={onLogoClick}
      />
      <div className="absolute top-[118px] left-[0px] text-3xl leading-[20px]">
        ログイン
      </div>
    </div>
  );
};

export default LoginFormContainer1;
