import type { NextPage } from "next";
import { useCallback } from "react";
import CardContainer from "./card-container";
import { useRouter } from "next/router";
import HeaderFixedIcon1 from "./header-fixed-icon1";

const FormContainer2: NextPage = () => {
  const router = useRouter();

  const onText2Click = useCallback(() => {
    router.push("/log-in");
  }, [router]);

  const onBtnLogInContainerClick = useCallback(() => {
    router.push("/sign-up-complete");
  }, [router]);

  return (
    <div className="absolute h-[89.57%] w-[31.83%] top-[8.15%] right-[35.59%] bottom-[2.28%] left-[32.58%] text-left text-sm text-gray-200 font-roboto">
      <CardContainer
        companyName="会社名（予定）"
        companyNameDisplay="株式会社Launch Lab."
      />
      <div className="absolute top-[457px] left-[0px] w-[168px] h-[72px]">
        <div className="absolute top-[26px] left-[0px] rounded-md bg-white box-border w-[133px] h-[46px] border-[1px] border-solid border-gainsboro" />
        <div className="absolute top-[0px] left-[0px] leading-[20px]">
          設立年月日（設立予定日）
        </div>
        <img
          className="absolute top-[39px] left-[104px] w-5 h-5 object-cover"
          alt=""
          src="/calendar-1@2x.png"
        />
        <div className="absolute top-[39px] left-[15px] leading-[20px]">
          2023-01-01
        </div>
      </div>
      <CardContainer
        companyName="代表者名"
        companyNameDisplay="加藤 健太"
        propTop="48.33%"
        propBottom="42.03%"
      />
      <CardContainer
        companyName="パスワード"
        companyNameDisplay="半角英数字8文字以上"
        propTop="74.03%"
        propBottom="16.33%"
      />
      <div
        className="absolute top-[719px] left-[0px] text-xs leading-[28px] cursor-pointer"
        onClick={onText2Click}
      >
        すでにアカウントをお持ちの方
      </div>
      <div
        className="absolute h-[6.16%] w-[28.16%] top-[86.88%] right-[71.84%] bottom-[6.96%] left-[0%] cursor-pointer text-center text-white"
        onClick={onBtnLogInContainerClick}
      >
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-orangered" />
        <div className="absolute top-[13px] left-[25px] leading-[20px]">
          新規登録
        </div>
      </div>
      <CardContainer
        companyName="メールアドレス"
        companyNameDisplay="info@banto.com"
        propTop="22.62%"
        propBottom="67.74%"
      />
      <HeaderFixedIcon1
        imageDimensions="/logo1.svg"
        propTop="0px"
        propLeft="0px"
        propWidth="81px"
        propHeight="76px"
        propCursor="unset"
        propPosition="absolute"
      />
      <div className="absolute top-[118px] left-[0px] text-3xl leading-[20px]">
        新規登録
      </div>
    </div>
  );
};

export default FormContainer2;
