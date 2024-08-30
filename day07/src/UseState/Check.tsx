import { useState } from "react";
import { FaCheckCircle, FaRegCheckCircle } from "react-icons/fa";

const Check = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const changeCheck = () => setIsChecked(!isChecked);

  return (
    <>
      {isChecked ? (
        <FaCheckCircle onClick={changeCheck} />
      ) : (
        <FaRegCheckCircle onClick={changeCheck} />
      )}
    </>
  );
};

export default Check;
