import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./routes/Main";
import Mypage from "./routes/Mypage";
import Search from "./routes/Search";
import Like from "./routes/Like";
function App() {
  return (
    //<div className="w-screen h-screen">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/search" element={<Search />} />
        <Route path="/like" element={<Like />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
    </BrowserRouter>
    //</div>
  );
}

export default App;
