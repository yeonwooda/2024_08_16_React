import Header from "../components/Header";
import Navigation from "../components/Navigation";

const Main = () => {
  return (
    <>
      <Header />
      <main className="w-full h-full max-w-sm m-auto">
        <section className="flex flex-col">
          <div>메인</div>
        </section>
      </main>
      <Navigation />
    </>
  );
};

export default Main;
