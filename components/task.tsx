import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type TaskType = {
  prop?: string;
  prop1?: string;

  /** Style props */
  taskPosition?: CSSProperties["position"];
  taskTop?: CSSProperties["top"];
  taskLeft?: CSSProperties["left"];
  rectangleDivBorder?: CSSProperties["border"];
  divLeft?: CSSProperties["left"];
  divColor?: CSSProperties["color"];
  divTop?: CSSProperties["top"];
  divCursor?: CSSProperties["cursor"];

  /** Action props */
  onText19Click?: () => void;
};

const Task: NextPage<TaskType> = ({
  prop,
  prop1,
  taskPosition,
  taskTop,
  taskLeft,
  rectangleDivBorder,
  divLeft,
  divColor,
  divTop,
  divCursor,
  onText19Click,
}) => {
  const taskStyle: CSSProperties = useMemo(() => {
    return {
      position: taskPosition,
      top: taskTop,
      left: taskLeft,
    };
  }, [taskPosition, taskTop, taskLeft]);

  const rectangleDiv1Style: CSSProperties = useMemo(() => {
    return {
      border: rectangleDivBorder,
    };
  }, [rectangleDivBorder]);

  const div4Style: CSSProperties = useMemo(() => {
    return {
      left: divLeft,
      color: divColor,
    };
  }, [divLeft, divColor]);

  const div5Style: CSSProperties = useMemo(() => {
    return {
      top: divTop,
      cursor: divCursor,
    };
  }, [divTop, divCursor]);

  return (
    <div
      className="relative w-[561px] h-7 text-left text-sm text-black font-roboto"
      style={taskStyle}
    >
      <div
        className="absolute h-full w-[19.17%] top-[0%] right-[80.83%] bottom-[0%] left-[0%] rounded bg-white box-border border-[1px] border-solid border-royalblue"
        style={rectangleDiv1Style}
      />
      <div className="absolute w-[15.56%] top-[14.29%] left-[26.25%] flex items-end">
        2023/4/6
      </div>
      <div className="absolute w-[15.56%] top-[14.29%] left-[46.99%] flex items-end">
        山田 太郎
      </div>
      <div
        className="absolute top-[14.29%] left-[7.07%] text-royalblue text-center"
        style={div4Style}
      >
        {prop}
      </div>
      <div
        className="absolute w-[36.54%] top-[14.29%] left-[66.67%] [text-decoration:underline] leading-[20px] flex items-center"
        style={div5Style}
        onClick={onText19Click}
      >
        {prop1}
      </div>
    </div>
  );
};

export default Task;
