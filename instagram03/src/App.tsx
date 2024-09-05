import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./routes/Main";
import Mypage from "./routes/Mypage";
import Search from "./routes/Search";
import Like from "./routes/Like";
import Layout from "./components/layouts/Layout";
import TopBar from "./components/main/TopBar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              header={{ header: <TopBar /> }}
              content={{ Children: <Main /> }}
            />
          }
        />
        <Route
          path="/search"
          element={
            <Layout
              header={{ header: null }}
              content={{ Children: <Search /> }}
            />
          }
        />
        <Route
          path="/like"
          element={
            <Layout
              header={{ header: null }}
              content={{ Children: <Like /> }}
            />
          }
        />
        <Route
          path="/mypage"
          element={
            <Layout
              header={{ header: null }}
              content={{ Children: <Mypage /> }}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
