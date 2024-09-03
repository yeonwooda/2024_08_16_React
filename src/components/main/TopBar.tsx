import { CiCamera } from "react-icons/ci";
import { TbDeviceTv } from "react-icons/tb";
import { PiTelegramLogo } from "react-icons/pi";
import { colors } from "../../style/color";

const TopBar = () => {
  return (
    <div
      style={{
        backgroundColor: colors.background.lightGrey,
        padding: "0px 14px 0px 14px",
        height: "44px",
      }}
      className="w-full max-w-md flex justify-between items-center"
    >
      <CiCamera />
      <div style={{ width: "105px" }}>
        <img
          className="w-full h-full object-contain"
          src="Instagram_logo.png"
          alt=""
        />
      </div>
      <div className="flex gap-1">
        <TbDeviceTv />
        <PiTelegramLogo />
      </div>
    </div>
  );
};

export default TopBar;
