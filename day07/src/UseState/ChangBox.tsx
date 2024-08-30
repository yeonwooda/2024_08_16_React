import { useState } from "react";

// box가 있고, 색깔버튼이 있음(3개 만들고) 버튼 누르면 박스 색상 바꾸기
const ChagneBox = () => {
  const [backgroundColor, setbackgroundColor] = useState("transparency");

  const greenClick = () => {
    setbackgroundColor("green");
  };

  const pinkClick = () => {
    setbackgroundColor("pink");
  };

  const yellowClick = () => {
    setbackgroundColor("yellow");
  };
  return (
    <>
      <div
        className="w-10 h-10 border border-black"
        style={{ backgroundColor }}
      ></div>
      <button onClick={greenClick}>초록</button>
      <button onClick={pinkClick}>핑크</button>
      <button onClick={yellowClick}>노랑</button>
    </>
  );
};
export default ChagneBox;
