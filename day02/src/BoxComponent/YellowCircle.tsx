import { CSSProperties } from "react";

const YellowCircle = () => {
  const CircleStyle: CSSProperties = {
    borderRadius: "9999px",
    width: "100px",
    height: "100px",
    backgroundColor: "Yellow",
  };
  return <div style={CircleStyle}></div>;
};
export default YellowCircle;
