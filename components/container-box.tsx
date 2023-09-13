import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import BtnMenu from "./btn-menu";

const ContainerBox: NextPage = () => {
  const router = useRouter();

  const onBtnMenuContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onBtnMenuContainer1Click = useCallback(() => {
    router.push("/flow2-office-setup");
  }, [router]);

  return (
    <div className="absolute top-[405px] left-[291px] w-[545px] h-40">
      <BtnMenu
        prop="法人設立"
        btnMenuPosition="absolute"
        btnMenuTop="0px"
        btnMenuLeft="0px"
        btnMenuCursor="pointer"
        btnMenuOpacity="unset"
        rectangleDivBorder="1px solid #d4dae5"
        rectangleDivBoxShadow="unset"
        divPosition="absolute"
        divHeight="26.96%"
        divWidth="7.94%"
        divTop="11.27%"
        divLeft="12.62%"
        divFontSize="46px"
        divFontFamily="'Inria Sans'"
        divColor="#0c1528"
        divTextAlign="left"
        divDisplay="inline-block"
        divLineBreak="unset"
        onBtnMenuContainer1Click={onBtnMenuContainerClick}
      />
      <img
        className="absolute top-[68px] left-[153px] w-[64.42px] h-[70.35px]"
        alt=""
        src="/group-81.svg"
      />
      <BtnMenu
        btnMenuPosition="absolute"
        btnMenuTop="0px"
        btnMenuLeft="295px"
        btnMenuCursor="pointer"
        btnMenuOpacity="unset"
        rectangleDivBorder="1px solid #d4dae5"
        rectangleDivBoxShadow="unset"
        onBtnMenuContainer1Click={onBtnMenuContainer1Click}
      />
      <img
        className="absolute top-[67px] left-[455px] w-[71.23px] h-[71px]"
        alt=""
        src="/group-11.svg"
      />
    </div>
  );
};

export default ContainerBox;
