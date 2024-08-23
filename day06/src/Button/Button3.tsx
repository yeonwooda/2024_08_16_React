import { CSSProperties } from "react";

export type bgcolorType = "btn1" | "btn2" | "btn3";
export type colorType = "color1" | "color2" | "color3";

type BtnProps = {
  color: colorType;
  backgroundColor: bgcolorType;
};

const Button3 = ({ backgroundColor, color }: BtnProps) => {
  const bgMap = {
    btn1: "#4AA366",
    btn2: "#dfe4ec",
    btn3: "#1d4d4f",
  };

  const crMap = {
    color1: "4aa366",
    color2: "dfe4ec",
    color3: "white",
  };

  const btnStyle: CSSProperties = {
    padding: "20px",
    borderRadius: "4px",
    border: "none",
    backgroundColor: bgMap[backgroundColor],
    color: crMap[color],
  };

  return <button style={btnStyle}>+Button</button>;
};
export default Button3;
