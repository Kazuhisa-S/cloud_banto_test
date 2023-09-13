import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import SubMenu1 from "./sub-menu1";
import HeaderFixedIcon1 from "./header-fixed-icon1";
import NavigationsFixed from "./navigations-fixed";

const FormContainer7: NextPage = () => {
  const router = useRouter();

  const onRectangleClick = useCallback(() => {
    // Please sync "folder" to the project
  }, []);

  const onGroupContainerClick = useCallback(() => {
    router.push("/mypage-settings");
  }, [router]);

  const onHeaderFixedClick = useCallback(() => {
    router.push("/home");
  }, [router]);

  const onNavigationContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onNavigationContainer1Click = useCallback(() => {
    router.push("/flow2-office-setup");
  }, [router]);

  return (
    <div className="absolute top-[0px] left-[0px] w-[230px] h-[1131px]">
      <div className="absolute top-[297px] left-[46px] rounded-[50%] bg-gainsboro w-5 h-5" />
      <SubMenu1
        dimensionCode="/mask-group1@2x.png"
        subMenuPosition="absolute"
        subMenuTop="710px"
        subMenuLeft="0px"
        subMenuBottom="unset"
        rectangleDivCursor="pointer"
        groupDivCursor="pointer"
        divColor="#000"
        onRectangle5Click={onRectangleClick}
        onGroupContainer2Click={onGroupContainerClick}
      />
      <div className="absolute top-[0px] left-[0px] box-border w-[230px] h-[1131px] border-r-[1px] border-solid border-whitesmoke-200" />
      <HeaderFixedIcon1
        imageDimensions="/header--fixed3.svg"
        propTop="49px"
        propLeft="44px"
        propWidth="133px"
        propHeight="124px"
        propCursor="pointer"
        propPosition="absolute"
        onLogoClick={onHeaderFixedClick}
      />
      <NavigationsFixed
        propCursor="pointer"
        propColor="#ff5e18"
        propCursor1="pointer"
        propColor1="#0c1528"
        onNavigationContainerClick={onNavigationContainerClick}
        onNavigationContainer1Click={onNavigationContainer1Click}
      />
    </div>
  );
};

export default FormContainer7;
