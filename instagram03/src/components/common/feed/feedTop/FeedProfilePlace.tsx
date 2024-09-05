export type FeedProfilePlaceProps = {
  city?: string;
  nation?: string;
};

const FeedProfilePlace = ({
  city = "city",
  nation = "nation",
}: FeedProfilePlaceProps) => {
  return (
    <div style={{ fontSize: "11px" }} className="flex gap-1">
      <span>{city}</span>
      <span>{nation}</span>
    </div>
  );
};
export default FeedProfilePlace;
