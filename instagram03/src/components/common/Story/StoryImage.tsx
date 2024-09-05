export type StoryImageProps = {
  src?: string;
};

const StoryImage = ({ src = "default.png" }: StoryImageProps) => {
  return (
    <div
      className="rounded-full"
      style={{
        width: "56px",
        height: "56px",
        border: "2px solid #d91a46",
        padding: "2px",
      }}
    >
      <img
        className="w-full h-full object-cover rounded-full"
        src={src}
        alt=""
      />
    </div>
  );
};
export default StoryImage;
