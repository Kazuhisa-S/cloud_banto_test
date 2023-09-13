import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import SubMenu1 from "../components/sub-menu1";
import NavigationsFixed from "../components/navigations-fixed";
import HeaderFixedIcon1 from "../components/header-fixed-icon1";

const MypageTopDisplay: NextPage = () => {
  const router = useRouter();

  const onNavigationContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onNavigationContainer1Click = useCallback(() => {
    router.push("/flow2-office-setup");
  }, [router]);

  return (
    <div className="relative bg-white w-full h-[1487px] overflow-x-auto text-left text-sm text-orangered font-roboto">
      <div className="absolute top-[calc(50%_-_503.5px)] left-[calc(50%_-_368px)] bg-white w-[965px] h-[1008px]" />
      <div className="absolute top-[1020px] left-[229px] w-[965px] h-[547px]" />
      <div className="absolute top-[21px] left-[230px] w-[964px] h-[41px]">
        <div className="absolute top-[40.5px] left-[-0.5px] box-border w-[965px] h-px border-t-[1px] border-solid border-gainsboro" />
        <div className="absolute top-[0px] left-[61px] w-[102px] h-[41px]">
          <div className="absolute top-[37px] left-[0px] bg-orangered w-[102px] h-1" />
          <div className="absolute top-[0px] left-[14px] tracking-[0.11em]">
            マイページ
          </div>
        </div>
        <div className="absolute top-[0px] left-[199px] w-[30px] h-[21px] text-center text-lightslategray">
          <div className="absolute top-[0px] left-[0px] tracking-[0.11em]">
            設定
          </div>
        </div>
      </div>
      <div className="absolute top-[122px] left-[289px] flex flex-col items-start justify-center gap-[24px] text-gray-200">
        <div className="relative w-[422px] h-[52px]">
          <div className="absolute top-[0px] left-[0px] leading-[20px]">
            会社名
          </div>
          <div className="absolute top-[20px] left-[0px] leading-[28px] inline-block w-[422px] h-8">
            株式会社OOOOO
          </div>
        </div>
        <div className="relative w-[422px] h-12">
          <div className="absolute top-[20px] left-[0px] leading-[28px] inline-block w-[422px]">
            OOOOOinc.
          </div>
          <div className="absolute top-[20px] left-[0px] leading-[28px] inline-block w-[422px]">
            OOOOOinc.
          </div>
          <div className="absolute top-[0px] left-[0px] leading-[20px]">
            会社名（英文）
          </div>
        </div>
        <div className="relative w-[422px] h-12">
          <div className="absolute top-[20px] left-[0px] leading-[28px] inline-block w-[422px]">
            2023年01月01日
          </div>
          <div className="absolute top-[0px] left-[0px] leading-[20px]">
            設立年月日（設立予定日）
          </div>
        </div>
        <div className="relative w-[422px] h-12">
          <div className="absolute top-[20px] left-[0px] leading-[28px] inline-block w-[422px]">
            山田 太郎
          </div>
          <div className="absolute top-[0px] left-[0px] leading-[20px]">
            代表者名
          </div>
        </div>
        <div className="relative w-[422px] h-12">
          <div className="absolute top-[20px] left-[0px] leading-[28px] inline-block w-[422px]">
            1,000,000 円
          </div>
          <div className="absolute top-[0px] left-[0px] leading-[20px]">
            資本金
          </div>
        </div>
        <div className="relative w-[422px] h-12">
          <div className="absolute top-[20px] left-[0px] leading-[28px] inline-block w-[422px]">
            東京都OO区OO 00-00-00 OOビル1階
          </div>
          <div className="absolute top-[0px] left-[0px] leading-[20px]">
            会社所在地
          </div>
        </div>
        <div className="relative w-[203px] h-[133px]">
          <div className="absolute top-[0px] left-[2px] leading-[20px] flex items-center w-[201px] h-5">
            会社ロゴ
          </div>
          <div className="absolute top-[33px] left-[0px] rounded-[50%] bg-lightslategray box-border w-[100px] h-[100px] border-[1px] border-solid border-gainsboro" />
        </div>
        <div className="relative w-[422px] h-12">
          <div className="absolute top-[20px] left-[0px] leading-[28px] inline-block w-[422px]">
            https://ooooooo.jp
          </div>
          <div className="absolute top-[0px] left-[0px] leading-[20px]">
            会社ウェブサイトURL
          </div>
        </div>
        <div className="relative w-[422px] h-[178px]">
          <div className="absolute top-[50px] left-[0px] leading-[28px] inline-block w-[422px]">
            山田 太郎
          </div>
          <div className="absolute top-[0px] left-[0px] leading-[20px]">
            顧問税理士
          </div>
          <div className="absolute top-[30px] left-[0px] text-xs leading-[20px]">
            名称
          </div>
          <div className="absolute top-[150px] left-[0px] leading-[28px] inline-block w-[422px]">
            000-0000-0000
          </div>
          <div className="absolute top-[130px] left-[0px] text-xs leading-[20px]">
            連絡先電話番号
          </div>
          <div className="absolute top-[100px] left-[0px] leading-[28px] inline-block w-[422px]">
            oooooooooo@gmail.com
          </div>
          <div className="absolute top-[80px] left-[0px] text-xs leading-[20px]">
            連絡先メールアドレス
          </div>
        </div>
        <div className="relative w-[422px] h-[178px]">
          <div className="absolute top-[50px] left-[0px] leading-[28px] inline-block w-[422px]">
            山田 太郎
          </div>
          <div className="absolute top-[0px] left-[0px] leading-[20px]">
            顧問社労士
          </div>
          <div className="absolute top-[30px] left-[0px] text-xs leading-[20px]">
            名称
          </div>
          <div className="absolute top-[150px] left-[0px] leading-[28px] inline-block w-[422px]">
            000-0000-0000
          </div>
          <div className="absolute top-[130px] left-[0px] text-xs leading-[20px]">
            連絡先電話番号
          </div>
          <div className="absolute top-[100px] left-[0px] leading-[28px] inline-block w-[422px]">
            oooooooooo@gmail.com
          </div>
          <div className="absolute top-[80px] left-[0px] text-xs leading-[20px]">
            連絡先メールアドレス
          </div>
        </div>
        <div className="relative w-[422px] h-[178px]">
          <div className="absolute top-[50px] left-[0px] leading-[28px] inline-block w-[422px]">
            山田 太郎
          </div>
          <div className="absolute top-[0px] left-[0px] leading-[20px]">
            顧問弁護士
          </div>
          <div className="absolute top-[30px] left-[0px] text-xs leading-[20px]">
            名称
          </div>
          <div className="absolute top-[150px] left-[0px] leading-[28px] inline-block w-[422px]">
            000-0000-0000
          </div>
          <div className="absolute top-[130px] left-[0px] text-xs leading-[20px]">
            連絡先電話番号
          </div>
          <div className="absolute top-[100px] left-[0px] leading-[28px] inline-block w-[422px]">
            oooooooooo@gmail.com
          </div>
          <div className="absolute top-[80px] left-[0px] text-xs leading-[20px]">
            連絡先メールアドレス
          </div>
        </div>
        <div className="relative rounded-md bg-orangered w-[106px] h-[46px] text-center text-white">
          <div className="absolute top-[13px] left-[25px] leading-[20px]">
            各種変更
          </div>
        </div>
      </div>
      <SubMenu1
        dimensionCode="/mask-group1@2x.png"
        subMenuPosition="absolute"
        subMenuTop="710px"
        subMenuLeft="0px"
        subMenuBottom="unset"
        rectangleDivCursor="unset"
        groupDivCursor="unset"
        divColor="#ff5e18"
      />
      <div className="absolute top-[0px] left-[0px] box-border w-[230px] h-[1487px] border-r-[1px] border-solid border-whitesmoke-200" />
      <NavigationsFixed
        propCursor="pointer"
        propColor="#0c1528"
        propCursor1="pointer"
        propColor1="#0c1528"
        onNavigationContainerClick={onNavigationContainerClick}
        onNavigationContainer1Click={onNavigationContainer1Click}
      />
      <HeaderFixedIcon1
        imageDimensions="/header--fixed11.svg"
        propTop="49px"
        propLeft="44px"
        propWidth="133px"
        propHeight="124px"
        propCursor="unset"
        propPosition="absolute"
      />
    </div>
  );
};

export default MypageTopDisplay;
