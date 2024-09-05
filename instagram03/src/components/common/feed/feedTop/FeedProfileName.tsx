import { LuBadgeCheck } from "react-icons/lu";
import Icon from "../../Icon/Icon";

export type FeedProfileNameProps = {
  name?: string;
  isCeleb?: boolean;
};

const FeedProfileName = ({
  name = "Unnamed",
  isCeleb = false,
}: FeedProfileNameProps) => {
  return (
    <div className="flex gap-1 items">
      <span className="text-lg font-bold">{name}</span>
      {isCeleb && <Icon icon={<LuBadgeCheck color="#3897f0" />} />}
    </div>
  );
};

export default FeedProfileName;
