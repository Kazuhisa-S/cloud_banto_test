import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import ContainerBox from "../components/container-box";
import SubMenu1 from "../components/sub-menu1";
import NavigationsFixed from "../components/navigations-fixed";
import HeaderFixedIcon1 from "../components/header-fixed-icon1";
import Component11 from "../components/component11";

const Home: NextPage = () => {
  const router = useRouter();

  const onBtnMenuContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onBtnMenuContainer1Click = useCallback(() => {
    router.push("/flow2-office-setup");
  }, [router]);

  const onRectangle3Click = useCallback(() => {
    // Please sync "folder" to the project
  }, []);

  const onGroupContainer1Click = useCallback(() => {
    router.push("/mypage-settings");
  }, [router]);

  const onNavigationContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onNavigationContainer1Click = useCallback(() => {
    router.push("/flow2-office-setup");
  }, [router]);

  const onText8Click = useCallback(() => {
    // Please sync "termsAndConditions" to the project
  }, []);

  const onText9Click = useCallback(() => {
    // Please sync "privacyPolicy" to the project
  }, []);

  const onText11Click = useCallback(() => {
    // Please sync "news_list" to the project
  }, []);

  const onTextClick = useCallback(() => {
    // Please sync "news_list" to the project
  }, []);

  const onGroupContainerClick = useCallback(() => {
    router.push("/task-done");
  }, [router]);

  return (
    <div className="relative bg-white w-full h-[834px] overflow-x-auto text-left text-base text-gray-200 font-roboto">
      <div className="absolute top-[calc(50%_-_504px)] left-[calc(50%_-_368px)] bg-white w-[965px] h-[1008px]" />
      <div className="absolute top-[1020px] left-[229px] w-[965px] h-[547px]" />
      <div
        className="absolute top-[644px] left-[291px] cursor-pointer"
        onClick={onTextClick}
      >
        サービスからのお知らせ
      </div>
      <div className="absolute top-[684px] left-[291px] text-3xs tracking-[0.01em] leading-[20px] inline-block w-[401px] h-[23px]">
        2023/2/2　サービスリリースのご案内
      </div>
      <div className="absolute top-[0px] left-[229px] bg-orangered w-[965px] h-[215px]" />
      <div
        className="absolute top-[270px] left-[291px] w-[840px] h-[90px] cursor-pointer text-sm"
        onClick={onGroupContainerClick}
      >
        <div className="absolute top-[0px] left-[0px] rounded-[10px] bg-lavenderblush w-[840px] h-[90px]" />
        <div className="absolute top-[51px] left-[21px] flex items-end w-[87.29px]">
          2023/4/6
        </div>
        <div className="absolute top-[50px] left-[111px] flex items-end w-[710px] h-[21px]">
          <span className="[line-break:anywhere] w-full">
            <span>{`山田太郎　法人設立 / 法人設立の準備 / `}</span>
            <span>事業目的の決定</span>
          </span>
        </div>
        <div className="absolute top-[17px] left-[21px] text-base text-crimson inline-block w-[377px] h-6">
          期日を過ぎているタスクがあります
        </div>
      </div>
      <ContainerBox />
      <div className="absolute top-[63px] left-[893px] text-lg tracking-[0.11em] leading-[32px] text-gray-100 text-right">
        <p className="m-0">最速で法人立ち上げ</p>
        <p className="m-0">社会を変える事業の開発に</p>
        <p className="m-0">フォーカスできる環境を</p>
      </div>
      <SubMenu1
        dimensionCode="/mask-group1@2x.png"
        subMenuPosition="absolute"
        subMenuTop="unset"
        subMenuLeft="0px"
        subMenuBottom="32px"
        rectangleDivCursor="pointer"
        groupDivCursor="pointer"
        divColor="#000"
        onRectangle5Click={onRectangle3Click}
        onGroupContainer2Click={onGroupContainer1Click}
      />
      <div className="absolute top-[0px] left-[0px] box-border w-[230px] h-[802px] border-r-[1px] border-solid border-whitesmoke-200" />
      <NavigationsFixed
        onNavigationContainerClick={onNavigationContainerClick}
        onNavigationContainer1Click={onNavigationContainer1Click}
      />
      <HeaderFixedIcon1 imageDimensions="/header--fixed1.svg" />
      <Component11
        component1Position="absolute"
        component1Top="802px"
        component1Left="0px"
        iCursor="pointer"
        iCursor1="pointer"
        iCursor2="pointer"
        onText14Click={onText8Click}
        onText15Click={onText9Click}
        onText17Click={onText11Click}
      />
    </div>
  );
};

export default Home;
