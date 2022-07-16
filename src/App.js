import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Ragister from "./pages/Ragister";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Ragister />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/ragister" element={<Ragister />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
