// 1번 다크모드
// 햇님[화이트모드] <-> 달님[다크모드]

import { useState } from "react";
import { FaRegSun, FaRegMoon } from "react-icons/fa";
// 브라우저 전체 하얀색 <-> 브라우저 전체 남색
const DarkMode = () => {
  const [dark, setDark] = useState<boolean>(false);

  const changeMode = () => {
    // document.body.style.backgroundColor = dark ? "#34495e" : "white";
    //setDark(!dark); 이렇게 쓰는거 리액트에서 지양하는 이렇게 말고 아래와 같이 사용하기
    setDark((prev) => {
      document.body.style.backgroundColor = !prev ? "#34495e" : "white";
      return !prev;
    });
  };

  //   const sun = () => {
  //     dark == false
  //       ? (document.body.style.background = "black")
  //       : (document.body.style.background = "white");
  //   };

  //   const color = () => {
  //     dark == false
  //       ? (document.body.style.color = "white")
  //       : (document.body.style.color = "black");
  //   };
  //   sun(); // 실행하는 코드
  //   color();

  return (
    <>
      {dark ? (
        <FaRegMoon onClick={changeMode} style={{ color: "yellow" }} />
      ) : (
        <FaRegSun onClick={changeMode} style={{ color: "red" }} />
      )}
    </>
  );
};
export default DarkMode;
