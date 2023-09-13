import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import HeaderFixedIcon1 from "../components/header-fixed-icon1";

const ForgotPassword: NextPage = () => {
  const router = useRouter();

  const onLogoClick = useCallback(() => {
    router.push("/sign-up");
  }, [router]);

  const onBtnLogInContainerClick = useCallback(() => {
    router.push("/change-password-send-mail-comple");
  }, [router]);

  return (
    <div className="relative bg-white w-full h-[834px] overflow-x-auto text-left text-sm text-gray-200 font-roboto">
      <div className="absolute top-[calc(50%_-_504px)] left-[calc(50%_-_368px)] bg-white w-[965px] h-[1008px]" />
      <div className="absolute top-[1020px] left-[229px] w-[965px] h-[547px]" />
      <div className="absolute h-[17.03%] w-[31.83%] top-[38.01%] right-[34.09%] bottom-[44.96%] left-[34.09%]">
        <div className="absolute h-[32.39%] w-full top-[18.31%] right-[0%] bottom-[49.3%] left-[0%] rounded-md bg-white box-border border-[1px] border-solid border-gainsboro" />
        <div className="absolute top-[0px] left-[0px] leading-[20px]">
          メールアドレス
        </div>
        <div className="absolute top-[39px] left-[14px] leading-[20px] text-gainsboro">
          info@banto.com
        </div>
        <div
          className="absolute h-[32.39%] w-[28.16%] top-[67.61%] right-[71.84%] bottom-[0%] left-[0%] cursor-pointer text-center text-white"
          onClick={onBtnLogInContainerClick}
        >
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-orangered" />
          <div className="absolute top-[13px] left-[39px] leading-[20px]">
            送信
          </div>
        </div>
      </div>
      <div className="absolute top-[67px] left-[407px] w-[380px] h-[236px] text-3xl">
        <HeaderFixedIcon1
          imageDimensions="/logo9.svg"
          propTop="0px"
          propLeft="0px"
          propWidth="81px"
          propHeight="76px"
          propCursor="pointer"
          propPosition="absolute"
          onLogoClick={onLogoClick}
        />
        <div className="absolute top-[118px] left-[0px] leading-[20px]">
          パスワードの変更
        </div>
        <div className="absolute top-[180px] left-[0px] text-sm leading-[28px] inline-block w-[380px] h-14">
          パスワードを変更するためのURLを送信しますので、ご登録メールアドレスを入力してください。
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
