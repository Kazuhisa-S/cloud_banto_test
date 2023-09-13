import type { NextPage } from "next";

type FormContainerType = {
  consultantTitle?: string;
};



const FormContainer: NextPage<FormContainerType> = ({ consultantTitle }) => {
  return (
    <div className="relative w-[422px] h-[273px] text-left text-xs text-gray-200 font-roboto">
      <div className="absolute top-[53px] left-[0px] rounded-md bg-white box-border w-[422px] h-[46px] border-[1px] border-solid border-gainsboro" />
      <div className="absolute top-[140px] left-[0px] rounded-md bg-white box-border w-[422px] h-[46px] border-[1px] border-solid border-gainsboro" />
      <div className="absolute top-[227px] left-[0px] rounded-md bg-white box-border w-[422px] h-[46px] border-[1px] border-solid border-gainsboro" />
      <div className="absolute top-[0px] left-[0px] text-sm leading-[20px]">
        {consultantTitle}
      </div>
      <div className="absolute top-[28px] left-[0px] leading-[20px]">名称</div>
      <div className="absolute top-[115px] left-[0px] leading-[20px]">
        連絡先メールアドレス
      </div>
      <div className="absolute top-[202px] left-[0px] leading-[20px]">
        連絡先電話番号
      </div>
    </div>
  );
};

export default FormContainer;
