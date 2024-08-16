import { CSSProperties } from "react";

const YellowBox = () => {
  const RedStyle: CSSProperties = {
    width: "100px",
    height: "100px",
    backgroundColor: "Yellow",
  };
  return <div style={RedStyle}></div>;
};
export default YellowBox;
