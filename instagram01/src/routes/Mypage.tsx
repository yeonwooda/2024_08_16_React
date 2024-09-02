import Header from "../components/Header";
import Navigation from "../components/Navigation";

const Mypage = () => {
  return (
    <>
      <Header />
      <main className="w-full h-full max-w-sm m-auto">
        <section className="flex flex-col">
          <div>마이페이지</div>
        </section>
      </main>
      <Navigation />
    </>
  );
};

export default Mypage;
