import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import EditorPage from "./Pages/EditorPage";
import PlayGround from "./Pages/Playground";

function App() {
  return (
      <>
      <BrowserRouter>
        <Routes>
          <Route element={<Home/>} path="/"></Route>
          <Route element={<PlayGround/>} path="/playground"></Route>
          <Route element={<EditorPage/>} path="/editor"></Route>
        </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
