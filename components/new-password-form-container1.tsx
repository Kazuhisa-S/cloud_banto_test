import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import PasswordFormContainer from "./password-form-container";
import HeaderFixedIcon1 from "./header-fixed-icon1";

const NewPasswordFormContainer1: NextPage = () => {
  const router = useRouter();

  const onLogoClick = useCallback(() => {
    router.push("/sign-up");
  }, [router]);

  const onBtnLogInContainerClick = useCallback(() => {
    router.push("/change-password-complete");
  }, [router]);

  return (
    <div className="absolute h-[60.31%] w-[31.83%] top-[8.03%] right-[34.09%] bottom-[31.65%] left-[34.09%] text-left text-sm text-gray-200 font-roboto">
      <PasswordFormContainer newPasswordConfirmPasswor="新しいパスワード" />
      <PasswordFormContainer
        newPasswordConfirmPasswor="新しいパスワード（確認）"
        propTop="71.77%"
        propBottom="13.92%"
      />
      <div
        className="absolute h-[9.15%] w-[28.16%] top-[90.85%] right-[71.84%] bottom-[0%] left-[0%] cursor-pointer text-center text-white"
        onClick={onBtnLogInContainerClick}
      >
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-orangered" />
        <div className="absolute top-[13px] left-[39px] leading-[20px]">
          変更
        </div>
      </div>
      <PasswordFormContainer
        newPasswordConfirmPasswor="現在のパスワード"
        propTop="33.6%"
        propBottom="52.09%"
      />
      <HeaderFixedIcon1
        imageDimensions="/logo2.svg"
        propTop="0px"
        propLeft="0px"
        propWidth="81px"
        propHeight="76px"
        propCursor="pointer"
        propPosition="absolute"
        onLogoClick={onLogoClick}
      />
      <div className="absolute top-[118px] left-[0px] text-3xl leading-[20px]">
        新しいパスワードの入力
      </div>
    </div>
  );
};

export default NewPasswordFormContainer1;
