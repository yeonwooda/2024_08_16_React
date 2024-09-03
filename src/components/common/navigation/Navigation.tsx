import { CiCircleMinus, CiHeart, CiSquarePlus } from "react-icons/ci";
import { IoMdSearch } from "react-icons/io";
import { MdHomeFilled } from "react-icons/md";
import { colors } from "../../../style/color";
import { sizes } from "../../../style/sizes";
import { Link } from "react-router-dom";

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
        className="w-full max-w-sm flex justify-around items-center"
      >
        <Link to={"/"}>
          <MdHomeFilled />
        </Link>
        <Link to={"/search"}>
          <IoMdSearch />
        </Link>
        <CiSquarePlus />
        <Link to={"/like"}>
          <CiHeart />
        </Link>
        <Link to={"/mypage"}>
          <CiCircleMinus />
        </Link>
      </div>
    </footer>
  );
};

export default Navigation;
