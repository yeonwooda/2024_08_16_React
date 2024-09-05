import { iconSize, Size } from "../../../style/sizes";

type IconProps = {
  icon: React.ReactNode;
  size?: Size;
};

// 1. 단일책임원칙!

const Icon = ({ icon, size = "md" }: IconProps) => {
  return (
    <div
      className="flex justify-center items-center"
      style={{ ...iconSize[size] }}
    >
      {icon}
    </div>
  );
};

export default Icon;
