import ArtBox from "./BoxComponent/ArtBox";
import RedBox from "./BoxComponent/RedBox";
import YellowBox from "./BoxComponent/YellowBox";

function App() {
  return (
    <div
      className="App"
      style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)" }}
    >
      {Array(1000)
        .fill("")
        .map((v, i) => {
          if (i % 3 == 0) return <ArtBox />;
          else if (i % 3 == 1) return <YellowBox />;
          else return <RedBox />;
        })}
    </div>
  );
}

export default App;
