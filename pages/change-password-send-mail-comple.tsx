import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import HeaderFixedIcon1 from "../components/header-fixed-icon1";

const ChangePasswordSendMailComple: NextPage = () => {
  const router = useRouter();

  const onLogoClick = useCallback(() => {
    router.push("/sign-up");
  }, [router]);

  return (
    <div className="relative bg-white w-full h-[834px] overflow-x-auto text-left text-sm text-gray-200 font-roboto">
      <div className="absolute top-[calc(50%_-_504px)] left-[calc(50%_-_368px)] bg-white w-[965px] h-[1008px]" />
      <div className="absolute top-[1020px] left-[229px] w-[965px] h-[547px]" />
      <div className="absolute top-[67px] left-[407px] w-[380px] h-[236px]">
        <div className="absolute top-[180px] left-[0px] leading-[28px] inline-block w-[380px] h-14">
          入力いただいたメールアドレス宛にパスワード変更URLを送信しました。24時間以内に変更してください。
        </div>
        <HeaderFixedIcon1
          imageDimensions="/logo8.svg"
          propTop="0px"
          propLeft="0px"
          propWidth="81px"
          propHeight="76px"
          propCursor="pointer"
          propPosition="absolute"
          onLogoClick={onLogoClick}
        />
        <div className="absolute top-[118px] left-[0px] text-3xl leading-[20px]">
          送信完了
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordSendMailComple;
