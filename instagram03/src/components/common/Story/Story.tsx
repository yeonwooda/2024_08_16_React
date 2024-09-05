import StoryImage, { StoryImageProps } from "./StoryImage";
import StoryLive, { StoryLiveProps } from "./StoryLive";
import StoryName, { StoryNameProps } from "./StoryName";

export type StoryProps = StoryImageProps & StoryNameProps & StoryLiveProps;

const Story = ({ name, src, isLive = false }: StoryProps) => {
  return (
    <div className="flex flex-col items-center gap-1 relative">
      <StoryImage src={src} />
      <StoryLive isLive={isLive} />
      <StoryName name={name} />
    </div>
  );
};
export default Story;
