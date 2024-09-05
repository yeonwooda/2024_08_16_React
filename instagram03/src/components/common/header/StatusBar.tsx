import { FaBatteryFull, FaSignal, FaWifi } from "react-icons/fa";
import { colors } from "../../../style/color";
import { sizes } from "../../../style/sizes";

const StatusBar = () => {
  return (
    <div
      style={{
        backgroundColor: colors.background.lightGrey,
        padding: "0px 14px 0px 20px",
        height: sizes.height.lg,
        borderTop: colors.border.line,
      }}
      className="w-full max-w-md flex justify-between items-center"
    >
      <div>
        <span>9:41</span>
      </div>
      <div className="flex gap-1 ">
        <FaSignal />
        <FaWifi />
        <FaBatteryFull />
      </div>
    </div>
  );
};
export default StatusBar;
