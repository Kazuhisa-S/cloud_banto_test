import type { NextPage } from "next";
import FormContainer from "./form-container";

const FormContainer6: NextPage = () => {
  return (
    <div className="absolute top-[122px] left-[291px] flex flex-col items-start justify-start gap-[24px] text-left text-sm text-gray-200 font-roboto">
      <div className="relative w-[422px] h-[72px]">
        <div className="absolute top-[26px] left-[0px] rounded-md bg-white box-border w-[422px] h-[46px] border-[1px] border-solid border-gainsboro" />
        <div className="absolute top-[0px] left-[0px] leading-[20px]">
          会社名
        </div>
      </div>
      <div className="relative w-[422px] h-[72px]">
        <div className="absolute top-[26px] left-[0px] rounded-md bg-white box-border w-[422px] h-[46px] border-[1px] border-solid border-gainsboro" />
        <div className="absolute top-[0px] left-[0px] leading-[20px]">
          会社名（英文）
        </div>
      </div>
      <div className="relative w-[133px] h-[72px]">
        <div className="absolute top-[26px] left-[0px] rounded-md bg-white box-border w-[133px] h-[46px] border-[1px] border-solid border-gainsboro" />
        <div className="absolute top-[0px] left-[0px] leading-[20px]">
          設立年月日
        </div>
        <img
          className="absolute top-[39px] left-[104px] w-5 h-5 object-cover"
          alt=""
          src="/calendar-1@2x.png"
        />
        <div className="absolute top-[39px] left-[15px] leading-[20px]">
          2023-07-31
        </div>
      </div>
      <div className="relative w-[422px] h-[72px]">
        <div className="absolute top-[26px] left-[0px] rounded-md bg-white box-border w-[422px] h-[46px] border-[1px] border-solid border-gainsboro" />
        <div className="absolute top-[0px] left-[0px] leading-[20px]">
          代表者名
        </div>
      </div>
      <div className="relative w-[245px] h-[72px]">
        <div className="absolute top-[26px] left-[0px] rounded-md bg-white box-border w-[220px] h-[46px] border-[1px] border-solid border-gainsboro" />
        <div className="absolute top-[0px] left-[0px] leading-[20px]">
          資本金
        </div>
        <div className="absolute top-[48px] left-[231px] leading-[20px]">
          円
        </div>
      </div>
      <div className="relative w-[422px] h-[72px]">
        <div className="absolute top-[26px] left-[0px] rounded-md bg-white box-border w-[422px] h-[46px] border-[1px] border-solid border-gainsboro" />
        <div className="absolute top-[0px] left-[0px] leading-[20px]">
          会社所在地
        </div>
      </div>
      <div className="relative w-[100px] h-32">
        <div className="absolute top-[28px] left-[0px] rounded-[50%] bg-white box-border w-[100px] h-[100px] border-[1px] border-solid border-gainsboro" />
        <div className="absolute top-[70px] left-[42px] w-4 h-4">
          <div className="absolute top-[0px] left-[6px] bg-gainsboro w-1 h-4" />
          <div className="absolute top-[10px] left-[0px] bg-gainsboro w-1 h-4 [transform:_rotate(-90deg)] [transform-origin:0_0]" />
        </div>
        <div className="absolute top-[0px] left-[0px] leading-[20px]">
          会社ロゴ
        </div>
      </div>
      <div className="relative w-[422px] h-[72px]">
        <div className="absolute top-[26px] left-[0px] rounded-md bg-white box-border w-[422px] h-[46px] border-[1px] border-solid border-gainsboro" />
        <div className="absolute top-[0px] left-[0px] leading-[20px]">
          会社ウェブサイトURL
        </div>
      </div>
      <FormContainer consultantTitle="顧問税理士" />
      <FormContainer consultantTitle="顧問社労士" />
      <FormContainer consultantTitle="顧問弁護士" />
      <div className="relative w-[107px] h-[46px] text-center text-white">
        <div className="absolute top-[0px] left-[0px] rounded-md bg-orangered w-[107px] h-[46px]" />
        <div className="absolute top-[13px] left-[39px] leading-[20px]">
          保存
        </div>
      </div>
    </div>
  );
};

export default FormContainer6;
