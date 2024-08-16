import { CSSProperties } from "react";

const RedBox = () => {
  const RedStyle: CSSProperties = {
    width: "100px",
    height: "100px",
    backgroundColor: "red",
  };
  return <div style={RedStyle}></div>;
};
export default RedBox;
