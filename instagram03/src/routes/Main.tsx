import Story, { StoryProps } from "../components/common/Story/Story";
import StoryBoard from "../components/common/Story/StoryBoard";
import Feed from "../components/common/feed/Feed";
import FeedTop from "../components/common/feed/feedTop/FeedTop";

const Main = () => {
  const bts: StoryProps[] = [
    { src: "1.webp", name: "Shashaping", isLive: true },
    { src: "2.webp", name: "Heartsping" },
    { src: "3.webp", name: "Trustping" },
    { src: "4.webp", name: "Odokeyping" },
    { src: "2.webp", name: "Heartsping" },
    { src: "4.webp", name: "Odokeyping" },
    { src: "3.webp", name: "Trustping" },
    { src: "4.webp", name: "Odokeyping" },
    { src: "2.webp", name: "Heartsping" },
    { src: "4.webp", name: "Odokeyping" },
    { src: "2.webp", name: "Heartsping" },
    { src: "4.webp", name: "Odokeyping" },
  ];

  return (
    <div>
      <StoryBoard data={bts} />
      <Feed />
    </div>
  );
};

export default Main;
