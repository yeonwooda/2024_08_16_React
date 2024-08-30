// 배경색상이 핑크 하늘색 초록색만 가능하게

type propsType = {
  backgroundColor?: "skyblue" | "pink" | "green";
  width: string;
  height: string;
  borderRadius: string;
};

const Box = (props: propsType) => (
  <div
    style={{ ...props, backgroundColor: props.backgroundColor || "skyblue" }}
  ></div>
);

export default Box;
