import { CSSProperties } from "react";

export type lineType = "Hard" | "Smooth" | "Circle";
export type colorType = "Primary" | "Hover" | "Secondary" | "Deactive";

type ButtonProps = {
  borderRadius: lineType;
  backgroundColor: colorType;
};

const Button = ({ backgroundColor, borderRadius }: ButtonProps) => {
  const brMap = {
    Hard: "0px",
    Smooth: "5px",
    Circle: "43px",
  };

  const bgMap = {
    Primary: "#205bf3",
    Hover: "#478DF5",
    Secondary: "transparents",
    Deactive: "#979797",
  };

  const buttonStyle: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    gap: "10px",
    padding: "10px 45px",
    fontSize: "32px",
    color: "white",
    border: "none",
    borderRadius: brMap[borderRadius],
    backgroundColor: bgMap[backgroundColor],
  };

  return <button style={buttonStyle}>Button</button>;
};

export default Button;
