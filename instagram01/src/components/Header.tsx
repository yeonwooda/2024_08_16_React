import { CiCamera } from "react-icons/ci";
import { PiTelegramLogo } from "react-icons/pi";
import { TbDeviceTv } from "react-icons/tb";
const Header = () => {
  return (
    <div className="w-full h-full max-w-sm m-auto flex justify-between items-center">
      <CiCamera />
      <div className="flex w-20">
        <img src="Instagram_logo.png" alt="" />
      </div>
      <div className="flex">
        <PiTelegramLogo />
        <TbDeviceTv />
      </div>
    </div>
  );
};
export default Header;
