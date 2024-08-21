import { CSSProperties } from "react";
// 스타벅스 버튼 만들기

type colors = "mainGrren" | "grey" | "darkGreen";
type HexColors = "#4aa366" | "#dfe4ec" | "#1d4d4f";

type BtnProps = {
  backgroundColor: colors;
  hasPlus?: boolean;
};

const Button2 = ({ backgroundColor, hasPlus = false }: BtnProps) => {
  const bgMap: { [key in colors]: HexColors } = {
    darkGreen: "#dfe4ec",
    grey: "#dfe4ec",
    mainGrren: "#4aa366",
  };

  const btnStyle: CSSProperties = {
    padding: "6px 16px",
    borderRadius: "4px",
    fontSize: "14px",
    fontWeight: "bold",
    width: "330px",
    border: "none",
    backgroundColor: bgMap[backgroundColor],
  };

  return <button style={btnStyle}>{hasPlus && "+"}Button</button>;
};
export default Button2;
