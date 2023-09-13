import type { NextPage } from "next";
import Component from "../components/component";
import Component1 from "../components/component1";
import NavigationsPnaviFixed from "../components/navigations-pnavi-fixed";
import ContainerCardFormFilter from "../components/container-card-form-filter";

const TaskInputuploaddone: NextPage = () => {
  return (
    <div className="relative bg-white w-full h-[834px] overflow-x-auto text-left text-sm text-gray-200 font-noto-sans">
      <div className="absolute top-[calc(50%_-_566px)] left-[calc(50%_-_512px)] bg-white w-[1024px] h-[1131px]" />
      <div className="absolute top-[225px] left-[400px] rounded-t-11xl rounded-br-11xl rounded-bl-none bg-aliceblue w-[448px] h-[90px]" />
      <i className="absolute top-[123px] left-[291px] tracking-[0.11em] leading-[161.5%] font-thin text-base">
        <p className="m-0">法人設立の準備</p>
        <p className="m-0 text-13xl">事業目的の決定</p>
      </i>
      <i className="absolute top-[246px] left-[430px] text-smi tracking-[-0.2px] leading-[24px] inline-block font-thin text-black w-[388px] h-[62px]">
        取引先・金融機関によっては事業目的が多すぎると心証悪化・実際に許認可を取得するよう要請される場合もあるので要注意。
      </i>
      <img
        className="absolute top-[225px] left-[299px] w-16 h-[91px] overflow-hidden"
        alt=""
        src="/layer-41.svg"
      />
      <div className="absolute top-[1027px] left-[584px] rounded-181xl bg-white box-border w-[190px] h-11 text-center text-orangered border-[1px] border-solid border-orangered">
        <i className="absolute top-[14px] left-[39px] font-thin">
          専門家に相談する
        </i>
      </div>
      <Component divPosition="absolute" divTop="634px" divLeft="629px" />
      <div className="absolute top-[347px] left-[299px] w-[842px] h-[189px] text-gainsboro">
        <div className="absolute h-[84.13%] w-full top-[15.87%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-white box-border border-[1px] border-solid border-gainsboro" />
        <i className="absolute top-[24.34%] left-[2.14%] leading-[20px] font-thin">
          ここに入力してください
        </i>
        <i className="absolute top-[0%] left-[0%] leading-[20px] font-thin text-gray-200">
          OOを記載してください
        </i>
      </div>
      <Component1 divPosition="absolute" divTop="747px" divLeft="229px" />
      <div className="absolute top-[567px] left-[299px] w-[212px] h-[142px] text-center text-white font-noto-sans-jp">
        <div className="absolute h-[32.39%] w-full top-[0%] right-[0%] bottom-[67.61%] left-[0%] rounded-md bg-orangered" />
        <img
          className="absolute h-[4.23%] w-[5.72%] top-[14.79%] right-[8.46%] bottom-[80.99%] left-[85.82%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/polygon-5.svg"
        />
        <b className="absolute top-[9.86%] left-[6.6%] leading-[20px]">
          アップロード
        </b>
        <div className="absolute h-[67.61%] w-full top-[32.39%] right-[0%] bottom-[0%] left-[0%] text-left text-gray-200">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-white box-border border-[1px] border-solid border-gainsboro" />
          <b className="absolute top-[15.63%] left-[6.6%] leading-[20px]">
            リンクを保存
          </b>
          <b className="absolute top-[65.63%] left-[6.6%] leading-[20px]">
            ファイルをアップロード
          </b>
          <div className="absolute h-[1.04%] w-[100.47%] top-[49.48%] right-[-0.24%] bottom-[49.48%] left-[-0.24%] box-border border-t-[1px] border-solid border-gainsboro" />
        </div>
        <img
          className="absolute h-[11.97%] w-[9.91%] top-[44.37%] right-[6.6%] bottom-[43.66%] left-[83.49%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector3.svg"
        />
        <img
          className="absolute h-[9.15%] w-[9.91%] top-[78.87%] right-[6.6%] bottom-[11.97%] left-[83.49%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector4.svg"
        />
      </div>
      <NavigationsPnaviFixed
        prop="事業目的の決定"
        navigationsPnaviFixedPosition="absolute"
        navigationsPnaviFixedTop="0px"
        navigationsPnaviFixedLeft="229px"
        btnBackCursor="unset"
        iLeft="44.46%"
      />
      <ContainerCardFormFilter
        maskGroup="/mask-group2@2x.png"
        headerFixed="/header--fixed7.svg"
        propTop="710px"
        propCursor="unset"
        propCursor1="unset"
        propCursor2="unset"
      />
    </div>
  );
};

export default TaskInputuploaddone;
