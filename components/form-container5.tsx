import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import SubMenu1 from "./sub-menu1";
import NavigationsFixed from "./navigations-fixed";
import HeaderFixedIcon1 from "./header-fixed-icon1";

const FormContainer5: NextPage = () => {
  const router = useRouter();

  const onRectangleClick = useCallback(() => {
    // Please sync "folder" to the project
  }, []);

  const onGroupContainerClick = useCallback(() => {
    router.push("/mypage-settings");
  }, [router]);

  const onNavigationContainer1Click = useCallback(() => {
    router.push("/flow2-office-setup");
  }, [router]);

  const onHeaderFixedClick = useCallback(() => {
    router.push("/home");
  }, [router]);

  return (
    <div className="absolute h-full w-[19.26%] top-[0%] right-[80.74%] bottom-[0%] left-[0%]">
      <div className="absolute h-[1.77%] w-[8.7%] top-[26.26%] right-[71.3%] bottom-[71.97%] left-[20%] rounded-[50%] bg-gainsboro" />
      <div className="absolute top-[0px] left-[0px] box-border w-[230px] h-[1131px] border-r-[1px] border-solid border-whitesmoke-200" />
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
      <NavigationsFixed
        propCursor="unset"
        propColor="#ff5e18"
        propCursor1="pointer"
        propColor1="#0c1528"
        onNavigationContainer1Click={onNavigationContainer1Click}
      />
      <HeaderFixedIcon1
        imageDimensions="/header--fixed.svg"
        propTop="49px"
        propLeft="44px"
        propWidth="133px"
        propHeight="124px"
        propCursor="pointer"
        propPosition="absolute"
        onLogoClick={onHeaderFixedClick}
      />
    </div>
  );
};

export default FormContainer5;
