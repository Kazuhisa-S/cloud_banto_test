import type { NextPage } from "next";

const ContainerCard: NextPage = () => {
  return (
    <div className="absolute top-[644px] left-[222px] w-[750px] h-[500px] text-left text-xs text-white font-inria-sans">
      <div className="absolute top-[0px] left-[0px] w-[750px] h-[500px]">
        <div className="absolute top-[0px] left-[0px] bg-whitesmoke-100 w-[500px] h-[500px]" />
        <div className="absolute top-[0px] left-[500px] bg-gray-100 w-[250px] h-[250px]" />
        <div className="absolute top-[250px] left-[500px] bg-lightslategray w-[250px] h-[250px]" />
      </div>
      <img
        className="absolute top-[193px] left-[139px] w-[211px] h-[114px] object-cover"
        alt=""
        src="/8logo-1@2x.png"
      />
      <div className="absolute top-[14px] left-[438px] text-lightslategray">
        #F9F9F9
      </div>
      <div className="absolute top-[264px] left-[688px]">#7E8594</div>
      <div className="absolute top-[14px] left-[689px]">#0C1528</div>
    </div>
  );
};

export default ContainerCard;
