import { imageSize, Size } from "../../../style/sizes";

type ImageProps = {
  src?: string;
  size?: Size;
};

const Image = ({ src = "default.png", size = "md" }: ImageProps) => {
  return (
    <div style={imageSize[size]}>
      <img className="w-full h-full object-contain" src={src} alt="" />
    </div>
  );
};
export default Image;
