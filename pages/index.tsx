import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import BtnMenu from "../components/btn-menu";
import IcnNotification from "../components/icn-notification";
import BtnBack from "../components/btn-back";
import FormContainer5 from "../components/form-container5";

const Flow1Ncorporation: NextPage = () => {
  const router = useRouter();

  const onBtnMenuContainer7Click = useCallback(() => {
    router.push("/flow1-ncorporation1");
  }, [router]);

  const onBtnBackContainerClick = useCallback(() => {
    router.push("/home");
  }, [router]);

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
    <div className="relative bg-white w-full h-[1131px] overflow-x-auto text-left text-23xl text-gray-200 font-roboto">
      <div className="absolute top-[calc(50%_-_565.5px)] left-[calc(50%_-_512px)] bg-white w-[1024px] h-[1131px]" />
      <BtnMenu
        prop="税理士の選定"
        btnMenuPosition="absolute"
        btnMenuTop="565px"
        btnMenuLeft="291px"
        btnMenuCursor="unset"
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
      />
      <BtnMenu
        prop="事前確定届出給与の設定"
        btnMenuPosition="absolute"
        btnMenuTop="771px"
        btnMenuLeft="291px"
        btnMenuCursor="unset"
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
      />
      <BtnMenu
        prop="設立後の対応一式"
        btnMenuPosition="absolute"
        btnMenuTop="363px"
        btnMenuLeft="586px"
        btnMenuCursor="unset"
        btnMenuOpacity="unset"
        rectangleDivBorder="1px solid #ff5e18"
        rectangleDivBoxShadow="0px 6px 32px rgba(255, 94, 24, 0.1)"
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
      />
      <BtnMenu
        prop="社労士の選定"
        btnMenuPosition="absolute"
        btnMenuTop="565px"
        btnMenuLeft="586px"
        btnMenuCursor="unset"
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
      />
      <BtnMenu
        prop="法人クレジットカードの選定"
        btnMenuPosition="absolute"
        btnMenuTop="771px"
        btnMenuLeft="586px"
        btnMenuCursor="unset"
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
      />
      <BtnMenu
        prop="銀行口座開設支援"
        btnMenuPosition="absolute"
        btnMenuTop="363px"
        btnMenuLeft="881px"
        btnMenuCursor="unset"
        btnMenuOpacity="0.25"
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
      />
      <BtnMenu
        prop="役員報酬の決定"
        btnMenuPosition="absolute"
        btnMenuTop="565px"
        btnMenuLeft="881px"
        btnMenuCursor="unset"
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
      />
      <div className="absolute top-[122px] left-[291px] tracking-[0.11em]">
        法人設立
      </div>
      <div className="absolute top-[206px] left-[291px] text-3xs tracking-[0.01em] leading-[20px] flex items-end w-[401px] h-20">
        <span className="[line-break:anywhere] w-full">
          <p className="m-0">
            事業立ち上げでもっとも重要なのは、開発・テスト・販売のサイクルを回すことです。
          </p>
          <p className="m-0">
            これに全集中するために、ROCKET START
            はすべてのスタートアップの初期バックオフィス業務を支援します。
          </p>
        </span>
      </div>
      <img
        className="absolute top-[684px] left-[420px] w-[26px] h-[26px]"
        alt=""
        src="/icn--checked.svg"
      />
      <img
        className="absolute top-[684px] left-[715px] w-[26px] h-[26px]"
        alt=""
        src="/icn--checked.svg"
      />
      <img
        className="absolute h-[16.77%] w-[14.55%] top-[11.49%] right-[10.24%] bottom-[71.73%] left-[75.21%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/group-8.svg"
      />
      <IcnNotification numberValue="7" />
      <IcnNotification
        numberValue="1"
        propTop="78.96%"
        propRight="57.79%"
        propBottom="19.27%"
        propLeft="40.54%"
        propOpacity="unset"
      />
      <IcnNotification
        numberValue="3"
        propTop="42.79%"
        propRight="36.68%"
        propBottom="55.44%"
        propLeft="61.64%"
        propOpacity="unset"
      />
      <IcnNotification
        numberValue="1"
        propTop="42.79%"
        propRight="11.89%"
        propBottom="55.44%"
        propLeft="86.43%"
        propOpacity="0.25"
      />
      <IcnNotification
        numberValue="1"
        propTop="60.74%"
        propRight="12.73%"
        propBottom="37.49%"
        propLeft="85.59%"
        propOpacity="unset"
      />
      <BtnMenu
        prop="法人設立の準備"
        btnMenuPosition="absolute"
        btnMenuTop="363px"
        btnMenuLeft="291px"
        btnMenuCursor="pointer"
        btnMenuOpacity="unset"
        rectangleDivBorder="1px solid #d4dae5"
        rectangleDivBoxShadow="unset"
        divPosition="absolute"
        divHeight="unset"
        divWidth="7.94%"
        divTop="11.27%"
        divLeft="12.62%"
        divFontSize="46px"
        divFontFamily="'Inria Sans'"
        divColor="#0c1528"
        divTextAlign="left"
        divDisplay="inline-block"
        divLineBreak="unset"
        onBtnMenuContainer1Click={onBtnMenuContainer7Click}
      />
      <div className="absolute top-[0px] left-[229px] w-[965px] h-[62px] text-center text-sm">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-white box-border border-b-[1px] border-solid border-whitesmoke-200" />
        <BtnBack
          btnBackWidth="4.16%"
          btnBackHeight="29.03%"
          btnBackPosition="absolute"
          btnBackTop="35.48%"
          btnBackRight="92.85%"
          btnBackBottom="35.48%"
          btnBackLeft="2.99%"
          btnBackCursor="pointer"
          divFontFamily="Roboto"
          divFontWeight="unset"
          divFontStyle="unset"
          onBtnBackContainerClick={onBtnBackContainerClick}
        />
        <div className="absolute top-[32.26%] left-[46.94%] tracking-[0.11em]">
          法人設立
        </div>
      </div>
      <FormContainer5 />
    </div>
  );
};

export default Flow1Ncorporation;
