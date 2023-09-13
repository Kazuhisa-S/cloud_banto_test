import type { NextPage } from "next";

type EmailChangeFormContainerType = {
  newEmailAddress?: string;
  emailInputValue?: string;
};

const EmailChangeFormContainer: NextPage<EmailChangeFormContainerType> = ({
  newEmailAddress,
  emailInputValue,
}) => {
  return (
    <div className="relative w-[380px] h-[72px] text-left text-sm text-gray-200 font-roboto">
      <div className="absolute h-[63.89%] w-full top-[36.11%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-white box-border border-[1px] border-solid border-gainsboro" />
      <div className="absolute top-[0px] left-[0px] leading-[20px]">
        {newEmailAddress}
      </div>
      <div className="absolute top-[39px] left-[14px] leading-[20px] text-gainsboro">
        {emailInputValue}
      </div>
    </div>
  );
};

export default EmailChangeFormContainer;
