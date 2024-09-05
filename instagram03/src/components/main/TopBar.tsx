import { CiCamera } from "react-icons/ci";
import { TbDeviceTv } from "react-icons/tb";
import { PiTelegramLogo } from "react-icons/pi";
import { colors } from "../../style/color";
import Icon from "../common/Icon/Icon";
import Image from "../common/Image/Image";

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
      <Icon icon={<CiCamera />} />
      <Image src={"Instagram_logo.png"} />
      <div className="flex gap-1">
        <Icon icon={<TbDeviceTv />} />
        <Icon icon={<PiTelegramLogo />} />
      </div>
    </div>
  );
};

export default TopBar;
