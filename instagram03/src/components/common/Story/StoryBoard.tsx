import Story, { StoryProps } from "./Story";

type StoryBoardPros = {
  data: StoryProps[];
};

const StoryBoard = ({ data }: StoryBoardPros) => {
  return (
    <div className="flex items-center gap-2 overflow-x-scroll">
      {data.map((v) => (
        <Story {...v} />
      ))}
    </div>
  );
};

export default StoryBoard;
