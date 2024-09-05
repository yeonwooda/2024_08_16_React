export type StoryNameProps = {
  name?: string;
};

const StoryName = ({ name = "v" }: StoryNameProps) => {
  return <span className="text-sm">{name.slice(0, 5)}</span>;
};
export default StoryName;
