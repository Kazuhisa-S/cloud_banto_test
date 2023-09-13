import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import HeaderFixedIcon1 from "./header-fixed-icon1";
import EmailChangeFormContainer from "./email-change-form-container";

const FormContainer1: NextPage = () => {
  const router = useRouter();

  const onLogoClick = useCallback(() => {
    router.push("/sign-up");
  }, [router]);

  const onBtnLogInContainerClick = useCallback(() => {
    router.push("/change-mail-address-complete");
  }, [router]);

  return (
    <div className="absolute top-[68px] left-[calc(50%_-_208px)] flex flex-col items-start justify-start gap-[24px] text-left text-sm text-gray-200 font-roboto">
      <HeaderFixedIcon1
        imageDimensions="/logo3.svg"
        propTop="unset"
        propLeft="unset"
        propWidth="81px"
        propHeight="76px"
        propCursor="pointer"
        propPosition="relative"
        onLogoClick={onLogoClick}
      />
      <div className="relative text-3xl leading-[20px]">
        メールアドレスの変更
      </div>
      <EmailChangeFormContainer
        newEmailAddress="新しいメールアドレス"
        emailInputValue="info@banto.com"
      />
      <EmailChangeFormContainer
        newEmailAddress="パスワード"
        emailInputValue="半角英数字8文字以上"
      />
      <div
        className="relative w-[107px] h-[46px] cursor-pointer text-center text-white"
        onClick={onBtnLogInContainerClick}
      >
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-orangered" />
        <div className="absolute top-[13px] left-[39px] leading-[20px]">
          変更
        </div>
      </div>
    </div>
  );
};

export default FormContainer1;
