import type { NextPage } from "next";
import FormContainer2 from "../components/form-container2";

const SignUp: NextPage = () => {
  return (
    <div className="relative bg-white w-full h-[834px] overflow-x-auto">
      <div className="absolute top-[calc(50%_-_504px)] left-[calc(50%_-_368px)] bg-white w-[965px] h-[1008px]" />
      <div className="absolute top-[1020px] left-[229px] w-[965px] h-[547px]" />
      <FormContainer2 />
    </div>
  );
};

export default SignUp;
