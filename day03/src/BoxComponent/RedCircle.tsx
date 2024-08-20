import { CSSProperties } from "react";

type propsType = {
  backgroundColor: string;
  width: string;
  height: string;
  border: string;
};

// 변경 사항이 있으면 props라는 매개변수를 줘야함
const RedCircle = (props: propsType) => {
  const CircleStyle: CSSProperties = {
    borderRadius: props.border,
    width: props.width,
    height: props.height,
    backgroundColor: props.backgroundColor,
  };
  return <div style={CircleStyle}></div>;
};
export default RedCircle;
