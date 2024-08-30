import { useState } from "react";

// counst -10에서 10되도록하는 컴포넌트 만들기
const Count = () => {
  const [count, setCount] = useState<number>(0);

  const plusCount = () => {
    setCount(count + 1);
    count >= 10 ? setCount(10) : setCount(count + 1);
  };

  const miunsCount = () => {
    setCount(count - 1);
    count == -10 ? setCount(-10) : setCount(count - 1);
  };

  return (
    <div className="flex gap-5 justify-center items-center ">
      <button onClick={miunsCount}>-</button>
      <div>{count}</div>
      <button onClick={plusCount}>+</button>
    </div>
  );
};
export default Count;
