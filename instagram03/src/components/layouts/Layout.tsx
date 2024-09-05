import Content, { ContentProps } from "../common/content/Content";
import Header, { HeaderProps } from "../common/header/Header";
import Navigation from "../common/navigation/Navigation";

type LayoutProps = {
  header?: HeaderProps;
  content: ContentProps; // 태그를 전달하는 타입
};

const Layout = ({ header, content }: LayoutProps) => {
  return (
    <>
      <Header {...header} />
      <Content {...content} />
      <Navigation />
    </>
  );
};

export default Layout;
