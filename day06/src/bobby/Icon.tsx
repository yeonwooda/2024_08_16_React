import { click } from "@testing-library/user-event/dist/click";
import { FaCheckCircle, FaRegCheckCircle } from "react-icons/fa";

type CheckProps = {
  isNecessary?: boolean;
  textHelper?: string;
  isChecked?: boolean;
  click: () => void;
};

const Icon = ({
  isNecessary = false,
  textHelper = "No Contents",
  isChecked,
  click,
}: CheckProps) => {
  return (
    <div className="flex justify-start items-center gap-1">
      <span onClick={click} style={{ color: "#2c3e50" }}>
        {isChecked ? <FaCheckCircle /> : <FaRegCheckCircle />}
      </span>
      <span style={{ color: isNecessary ? "ebff00" : "#2c3e50" }}>
        {isNecessary ? "(필수)" : "(선택)"}
      </span>
      <span style={{ color: "#2c3e50" }}>{textHelper}</span>
    </div>
  );
};
export default Icon;
