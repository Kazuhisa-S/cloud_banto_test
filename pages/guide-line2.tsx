import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

const GuideLine2: NextPage = () => {
  const router = useRouter();

  const onGroupContainer1Click = useCallback(() => {
    router.push("/sign-up");
  }, [router]);

  const onNode1Click = useCallback(() => {
    router.push("/sign-up");
  }, [router]);

  return (
    <div className="relative bg-white w-full h-[2000px] overflow-hidden text-left text-3xs text-gray-100 font-inria-sans">
      <div className="absolute top-[416px] left-[222px] text-[31px]">
        Rocket Start
      </div>
      <div className="absolute top-[461px] left-[222px] text-2xs leading-[22px] inline-block w-[274px] h-[143px]">
        <p className="m-0">
          "Rocket Start" is a flow-type support tool for the early phases of a
          start-up business to help you focus on your business in the fastest
          and shortest way possible.
        </p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0">
          Leave the tedious back-office operations to us in order to achieve
          product market fit.
        </p>
      </div>
      <div className="absolute top-[692px] left-[calc(50%_-_371px)] tracking-[0.01em] leading-[20px] font-roboto inline-block w-[274px] h-[86px]">
        <p className="m-0">
          事業立ち上げでもっとも重要なのは、開発・テスト・販売のサイクルを回すことです。
        </p>
        <p className="m-0">
          これに全集中するために、ROCKET START
          はすべてのスタートアップの初期バックオフィス業務を支援します。
        </p>
      </div>
      <div className="absolute top-[634px] left-[calc(50%_-_371px)] text-lg leading-[42px] font-roboto">
        “Rocket Start” について
      </div>
      <img
        className="absolute top-[231px] left-[222px] w-[207px] h-[126px] overflow-hidden"
        alt=""
        src="/--11.svg"
      />
      <div
        className="absolute top-[837px] left-[222px] w-[750px] h-[500px] cursor-pointer text-xs"
        onClick={onGroupContainer1Click}
      >
        <div className="absolute top-[0px] left-[0px] w-[750px] h-[500px]">
          <div className="absolute top-[0px] left-[0px] bg-orangered w-[500px] h-[500px]" />
          <div className="absolute top-[0px] left-[500px] bg-gray-100 w-[250px] h-[250px]" />
          <div className="absolute top-[250px] left-[500px] bg-lightslategray w-[250px] h-[250px]" />
        </div>
        <div className="absolute top-[14px] left-[439px]">#FF5E18</div>
      </div>
      <img
        className="absolute top-[231px] left-[514px] w-[202px] h-[125px] overflow-hidden cursor-pointer"
        alt=""
        src="/--12.svg"
        onClick={onNode1Click}
      />
      <img
        className="absolute top-[1024px] left-[371px] w-[202px] h-[125px] overflow-hidden"
        alt=""
        src="/--13.svg"
      />
      <img
        className="absolute top-[1619px] left-[0px] w-[1309px] h-[395.65px]"
        alt=""
        src="/group-2.svg"
      />
      <div className="absolute top-[60px] left-[67px] w-[209px] h-[18.39px] text-center">
        <img
          className="absolute top-[0px] left-[0px] w-[102px] h-[18.39px]"
          alt=""
          src="/group-51.svg"
        />
        <div className="absolute top-[3px] left-[134px]">Cloud Back Office</div>
      </div>
    </div>
  );
};

export default GuideLine2;
