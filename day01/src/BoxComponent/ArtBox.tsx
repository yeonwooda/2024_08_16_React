import { CSSProperties } from "react";

const ArtBox = () => {
  const ArtStyle: CSSProperties = {
    width: "100px",
    height: "100px",
    backgroundColor: "green",
  };
  //   const msg = "집";

  return <div style={ArtStyle}></div>;
};
export default ArtBox;
