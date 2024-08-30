import { useState } from "react";

// counst prev로 만들기
const CountPrev = () => {
  const [count, setCount] = useState<number>(0);

  const plusCount = () => {
    setCount((prev) => prev + 1);
  };

  const miunsCount = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div className="flex gap-5 justify-center items-center ">
      <button onClick={miunsCount}>-</button>
      <div>{count}</div>
      <button onClick={plusCount}>+</button>
    </div>
  );
};
export default CountPrev;
