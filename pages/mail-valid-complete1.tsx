import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import ConfirmationContainer from "../components/confirmation-container";

const MailValidComplete1: NextPage = () => {
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
      <ConfirmationContainer
        prop="メールアドレスの確認が完了しました！"
        logo="/logo6.svg"
        prop1="メールアドレス認証 完了"
        onLogoClick={onLogoClick}
        onText2Click={onText2Click}
      />
    </div>
  );
};

export default MailValidComplete1;
