import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import SubMenu from "./sub-menu";
import HeaderFixedIcon from "./header-fixed-icon";

type ContainerCardFormFilterType = {
  maskGroup?: string;
  headerFixed?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
  propCursor?: CSSProperties["cursor"];
  propCursor1?: CSSProperties["cursor"];
  propCursor2?: CSSProperties["cursor"];

  /** Action props */
  onGroupContainer3Click?: () => void;
  onGroupContainer4Click?: () => void;
  onHeaderFixedClick?: () => void;
};

const ContainerCardFormFilter: NextPage<ContainerCardFormFilterType> = ({
  maskGroup,
  headerFixed,
  propTop,
  propCursor,
  propCursor1,
  propCursor2,
  onGroupContainer3Click,
  onGroupContainer4Click,
  onHeaderFixedClick,
}) => {
  const subMenuStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      cursor: propCursor,
    };
  }, [propCursor]);

  const groupDiv1Style: CSSProperties = useMemo(() => {
    return {
      cursor: propCursor1,
    };
  }, [propCursor1]);

  const headerFixedIconStyle: CSSProperties = useMemo(() => {
    return {
      cursor: propCursor2,
    };
  }, [propCursor2]);

  return (
    <div className="absolute top-[0px] left-[0px] box-border w-[230px] h-[1131px] border-[1px] border-solid border-whitesmoke-200">
      <SubMenu
        dimensionCode="/mask-group1@2x.png"
        subMenuPosition="absolute"
        subMenuTop="710px"
        subMenuLeft="0px"
        groupDivCursor="pointer"
        groupDivCursor1="pointer"
        onGroupContainer3Click={onGroupContainer3Click}
        onGroupContainer4Click={onGroupContainer4Click}
      />
      <div className="absolute top-[0px] left-[0px] box-border w-[230px] h-[1131px] border-r-[1px] border-solid border-whitesmoke-200" />
      <HeaderFixedIcon
        headerFixedHeaderFixed="/header--fixed6.svg"
        headerFixedIconPosition="absolute"
        headerFixedIconTop="49px"
        headerFixedIconLeft="44px"
        headerFixedIconCursor="pointer"
        onHeaderFixedClick={onHeaderFixedClick}
      />
    </div>
  );
};

export default ContainerCardFormFilter;
