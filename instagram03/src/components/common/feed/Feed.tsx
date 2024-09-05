import FeedContents from "./feedContents/FeedContents";
import FeedImages from "./feedImages/FeedImages";
import FeedInteraction from "./feedInteraction/FeedInteraction";
import FeedTop from "./feedTop/FeedTop";

const Feed = () => {
  return (
    <>
      <FeedTop
        src="1.webp"
        name="Shashaping"
        isCeleb={false}
        city="tiniping"
        nation="Korea"
      />
      <FeedImages />
      <FeedInteraction />
      <FeedContents />
    </>
  );
};

export default Feed;
