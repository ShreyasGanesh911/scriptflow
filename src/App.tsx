import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import EditorPage from "./Pages/EditorPage";
import PlayGround from "./Pages/Playground";
import Navbar from "./Global/Navbar";
import Snippet from "./Pages/Snippet";
import Login from "./Pages/Login";
import Account from "./Pages/Account";

function App() {
  return (
      <>
      <BrowserRouter>
      <Navbar/>
        <Routes>

          <Route element={<Home/>} path="/"></Route>
          <Route element={<PlayGround key="new"/>}  path="/playground"></Route>
          <Route element={<PlayGround key="project"/>}  path="/playground/:id"></Route>
          <Route element={<EditorPage/>} path="/editor"></Route>
          <Route element={<Snippet/>} path="/snippet/:id"></Route>
          <Route element={<Login/>} path="/login"></Route>
          <Route element={<Account/>} path="/account"></Route>
        </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
