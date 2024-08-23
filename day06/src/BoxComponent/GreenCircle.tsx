import { CSSProperties } from "react";

const GreenCircle = () => {
  const CircleStyle: CSSProperties = {
    borderRadius: "9999px",
    width: "100px",
    height: "100px",
    backgroundColor: "green",
  };
  return <div style={CircleStyle}></div>;
};
export default GreenCircle;
