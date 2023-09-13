import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import AuthEmailContainer from "../components/auth-email-container";

const SignUpComplete: NextPage = () => {
  const router = useRouter();

  const onLogoClick = useCallback(() => {
    router.push("/sign-up");
  }, [router]);

  const onText2Click = useCallback(() => {
    router.push("/log-in");
  }, [router]);

  return (
    <div className="relative bg-white w-full h-[834px] overflow-x-auto">
      <div className="absolute top-[calc(50%_-_504px)] left-[calc(50%_-_368px)] bg-white w-[965px] h-[1008px]" />
      <div className="absolute top-[1020px] left-[229px] w-[965px] h-[547px]" />
      <AuthEmailContainer
        logo="/logo10.svg"
        prop="登録完了"
        onLogoClick={onLogoClick}
        onText2Click={onText2Click}
      />
    </div>
  );
};

export default SignUpComplete;
