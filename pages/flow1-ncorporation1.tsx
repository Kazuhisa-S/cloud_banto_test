import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Task from "../components/task";
import BtnBack from "../components/btn-back";
import FormContainer7 from "../components/form-container7";

const Flow1Ncorporation1: NextPage = () => {
  const router = useRouter();

  const onText19Click = useCallback(() => {
    router.push("/task-done");
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
    <div className="relative bg-white w-full h-[1894px] overflow-x-auto text-left text-sm text-black font-roboto">
      <div className="absolute top-[calc(50%_-_566px)] left-[calc(50%_-_512px)] bg-white w-[1024px] h-[1131px]" />
      <div className="absolute top-[123px] left-[291px] text-13xl tracking-[0.11em] text-gray-200">
        法人設立の準備
      </div>
      <div className="absolute w-[13.65%] top-[60.35%] left-[25.29%] flex items-center">
        印鑑の作成
      </div>
      <div className="absolute w-[13.65%] top-[73.97%] left-[25.29%] flex items-center">
        資本金の払込
      </div>
      <div className="absolute w-[13.65%] top-[50.84%] left-[25.29%] flex items-center">
        必要書類の収集・出資金の払込
      </div>
      <div className="absolute w-[13.65%] top-[64.89%] left-[25.29%] flex items-center">
        押印書類の作成
      </div>
      <div className="absolute w-[13.65%] top-[78.51%] left-[25.29%] flex items-center">
        申請書の作成
      </div>
      <div className="absolute w-[13.65%] top-[83.05%] left-[25.29%] flex items-center">
        設立登記申請
      </div>
      <div className="absolute w-[13.65%] top-[86.48%] left-[25.29%] flex items-center">
        登記完了後、印鑑カード発行、登記事項証明書・印鑑証明書取得
      </div>
      <div className="absolute w-[13.65%] top-[55.23%] left-[25.29%] flex items-center">
        定款作成・公証役場への事前確認依頼
      </div>
      <div className="absolute w-[13.65%] top-[69.43%] left-[25.29%] flex items-center">
        定款認証
      </div>
      <div className="absolute top-[221px] left-[291px] w-[840px] h-[41px] text-center">
        <div className="absolute top-[0px] left-[213px] flex items-end justify-center w-[81.62px]">
          ステータス
        </div>
        <div className="absolute top-[0px] left-[365.05px] flex items-end justify-center w-[32.65px]">
          期日
        </div>
        <div className="absolute top-[0px] left-[475px]">担当者</div>
        <div className="absolute top-[0px] left-[645px] text-left">
          タスク詳細
        </div>
        <div className="absolute top-[0px] left-[32px] text-left">
          タスク概要
        </div>
        <div className="absolute top-[40.5px] left-[-0.5px] box-border w-[841px] h-px border-t-[1px] border-solid border-gainsboro" />
      </div>
      <div className="absolute w-[13.65%] top-[15.73%] left-[25.29%] flex items-center">
        定款の内容決定
      </div>
      <Task
        prop="完了"
        prop1="事業目的の設定"
        taskPosition="absolute"
        taskTop="294px"
        taskLeft="488px"
        rectangleDivBorder="1px solid #0e6dfc"
        divLeft="7.07%"
        divColor="#0e6dfc"
        divTop="14.29%"
        divCursor="pointer"
        onText19Click={onText19Click}
      />
      <div className="absolute top-[946.5px] left-[290.5px] box-border w-[841px] h-px border-t-[1px] border-solid border-gainsboro" />
      <div className="absolute top-[1022.5px] left-[290.5px] box-border w-[841px] h-px border-t-[1px] border-solid border-gainsboro" />
      <div className="absolute top-[1112.5px] left-[290.5px] box-border w-[841px] h-px border-t-[1px] border-solid border-gainsboro" />
      <div className="absolute top-[1193.5px] left-[290.5px] box-border w-[841px] h-px border-t-[1px] border-solid border-gainsboro" />
      <div className="absolute top-[1283.5px] left-[290.5px] box-border w-[841px] h-px border-t-[1px] border-solid border-gainsboro" />
      <div className="absolute top-[1365.5px] left-[290.5px] box-border w-[841px] h-px border-t-[1px] border-solid border-gainsboro" />
      <div className="absolute top-[1455.5px] left-[290.5px] box-border w-[841px] h-px border-t-[1px] border-solid border-gainsboro" />
      <div className="absolute top-[1535.5px] left-[290.5px] box-border w-[841px] h-px border-t-[1px] border-solid border-gainsboro" />
      <div className="absolute top-[1615.5px] left-[290.5px] box-border w-[841px] h-px border-t-[1px] border-solid border-gainsboro" />
      <div className="absolute top-[1715.5px] left-[290.5px] box-border w-[841px] h-px border-t-[1px] border-solid border-gainsboro" />
      <Task
        prop="完了"
        prop1="監査役の決定"
        taskPosition="absolute"
        taskTop="466px"
        taskLeft="488px"
        rectangleDivBorder="1px solid #0e6dfc"
        divLeft="7.07%"
        divColor="#0e6dfc"
        divTop="14.29%"
        divCursor="unset"
      />
      <Task
        prop="完了"
        prop1="本店所在地の選定"
        taskPosition="absolute"
        taskTop="767px"
        taskLeft="488px"
        rectangleDivBorder="1px solid #0e6dfc"
        divLeft="7.07%"
        divColor="#0e6dfc"
        divTop="14.29%"
        divCursor="unset"
      />
      <Task
        prop="対応中"
        prop1="発起人（株主）の決定"
        taskPosition="absolute"
        taskTop="337px"
        taskLeft="488px"
        rectangleDivBorder="1px solid #06b56b"
        divLeft="5.83%"
        divColor="#06b56b"
        divTop="14.29%"
        divCursor="unset"
      />
      <Task
        prop="完了"
        prop1="発行可能株式数の決定"
        taskPosition="absolute"
        taskTop="638px"
        taskLeft="488px"
        rectangleDivBorder="1px solid #0e6dfc"
        divLeft="7.07%"
        divColor="#0e6dfc"
        divTop="14.29%"
        divCursor="unset"
      />
      <Task
        prop="完了"
        prop1="監査役の任期の決定"
        taskPosition="absolute"
        taskTop="509px"
        taskLeft="488px"
        rectangleDivBorder="1px solid #0e6dfc"
        divLeft="7.07%"
        divColor="#0e6dfc"
        divTop="14.29%"
        divCursor="unset"
      />
      <Task
        prop="完了"
        prop1="相続人などに対する売買の請求規定"
        taskPosition="absolute"
        taskTop="810px"
        taskLeft="488px"
        rectangleDivBorder="1px solid #0e6dfc"
        divLeft="7.07%"
        divColor="#0e6dfc"
        divTop="-21.43%"
        divCursor="unset"
      />
      <Task
        prop="未対応"
        prop1="取締役の決定"
        taskPosition="absolute"
        taskTop="380px"
        taskLeft="488px"
        rectangleDivBorder="1px solid #ff1a51"
        divLeft="5.83%"
        divColor="#ff1a51"
        divTop="14.29%"
        divCursor="unset"
      />
      <Task
        prop="完了"
        prop1="発行済株式数"
        taskPosition="absolute"
        taskTop="681px"
        taskLeft="488px"
        rectangleDivBorder="1px solid #0e6dfc"
        divLeft="7.07%"
        divColor="#0e6dfc"
        divTop="14.29%"
        divCursor="unset"
      />
      <Task
        prop="完了"
        prop1="資本金の決定"
        taskPosition="absolute"
        taskTop="552px"
        taskLeft="488px"
        rectangleDivBorder="1px solid #0e6dfc"
        divLeft="7.07%"
        divColor="#0e6dfc"
        divTop="14.29%"
        divCursor="unset"
      />
      <Task
        prop="完了"
        prop1="現物出資財産の有無の確認"
        taskPosition="absolute"
        taskTop="853px"
        taskLeft="488px"
        rectangleDivBorder="1px solid #0e6dfc"
        divLeft="7.07%"
        divColor="#0e6dfc"
        divTop="14.29%"
        divCursor="unset"
      />
      <Task
        prop="完了"
        prop1="取締役任期の決定"
        taskPosition="absolute"
        taskTop="423px"
        taskLeft="488px"
        rectangleDivBorder="1px solid #0e6dfc"
        divLeft="7.07%"
        divColor="#0e6dfc"
        divTop="14.29%"
        divCursor="unset"
      />
      <Task
        prop="完了"
        prop1="株式の譲渡制限"
        taskPosition="absolute"
        taskTop="724px"
        taskLeft="488px"
        rectangleDivBorder="1px solid #0e6dfc"
        divLeft="7.07%"
        divColor="#0e6dfc"
        divTop="14.29%"
        divCursor="unset"
      />
      <Task
        prop="完了"
        prop1="機関設計の決定"
        taskPosition="absolute"
        taskTop="595px"
        taskLeft="488px"
        rectangleDivBorder="1px solid #0e6dfc"
        divLeft="7.07%"
        divColor="#0e6dfc"
        divTop="14.29%"
        divCursor="unset"
      />
      <Task
        prop="完了"
        prop1="公告の方法"
        taskPosition="absolute"
        taskTop="896px"
        taskLeft="488px"
        rectangleDivBorder="1px solid #0e6dfc"
        divLeft="7.07%"
        divColor="#0e6dfc"
        divTop="14.29%"
        divCursor="unset"
      />
      <div className="absolute top-[0px] left-[229px] w-[965px] h-[62px] text-center text-gray-200">
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
        <div className="absolute top-[32.26%] left-[44.46%] tracking-[0.11em]">
          法人設立の準備
        </div>
      </div>
      <FormContainer7 />
    </div>
  );
};

export default Flow1Ncorporation1;
