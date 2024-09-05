import { CiCircleMinus, CiHeart, CiSquarePlus } from "react-icons/ci";
import { IoMdSearch } from "react-icons/io";
import { MdHomeFilled } from "react-icons/md";
import { colors } from "../../../style/color";
import { sizes } from "../../../style/sizes";
import LinkIcon from "../Icon/LinkIcon";

const Navigation = () => {
  return (
    <footer className="w-screen fixed bottom-0 flex justify-center items-center">
      <div
        style={{
          backgroundColor: colors.background.lightGrey,
          padding: sizes.padding.sm,
          height: sizes.height.lg,
          borderTop: colors.border.line,
        }}
        className="w-full max-w-md flex justify-around items-center"
      >
        <LinkIcon pageUrl="/" iconTag={<MdHomeFilled />} />
        <LinkIcon pageUrl="/search" iconTag={<IoMdSearch />} />
        <LinkIcon pageUrl="/plus" iconTag={<CiSquarePlus />} />
        <LinkIcon pageUrl="/like" iconTag={<CiHeart />} />
        <LinkIcon pageUrl="/mypage" iconTag={<CiCircleMinus />} />
      </div>
    </footer>
  );
};

export default Navigation;
