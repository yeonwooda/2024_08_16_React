// ctrl + w : 영역선택
// alt + j : 같은 단어 선택
// ctrl + alt + L : 라인 정리

import { useState } from "react";

function App() {
  const [conunt, setCount] = useState(1);
  const changeCount = () => {
    setCount(conunt + 1);
  };
  return <div onClick={changeCount}>{conunt}</div>;
}
export default App;
