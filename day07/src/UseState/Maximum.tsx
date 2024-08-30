import { useState } from "react";

type LimtiCountProps = {
  max?: number;
  price?: number;
};

const Maximum = ({ max, price = 0 }: LimtiCountProps) => {
  const [num, setNum] = useState<number>(1);

  const miuns = () => {
    setNum(num === 1 ? 1 : num - 1);
  };

  const plus = () => {
    setNum(num === max ? max : num + 1);
  };

  return (
    <>
      <button onClick={miuns}>-</button>
      <span>{num}</span>
      <button onClick={plus}>+</button>
      <span>최대{max}개</span>
      <span>{num * price}</span>
    </>
  );
};
export default Maximum;
