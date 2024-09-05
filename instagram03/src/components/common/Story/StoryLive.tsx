export type StoryLiveProps = {
  isLive?: boolean;
};

const StoryLive = ({ isLive = false }: StoryLiveProps) => {
  if (!isLive) return <div></div>;
  return (
    <div
      className="absolute  font-bold text-white border-2 border-white rounded-lg "
      style={{
        fontSize: "8px",
        backgroundColor: "#d91a46",
        padding: "3px 4px",
        bottom: "18px",
      }}
    >
      LIVE
    </div>
  );
};
export default StoryLive;
