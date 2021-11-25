import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Main from "./pages/Main";
import User from "./pages/User";

function App() {
  return (
    <>
      <Link to="/">메인페이지</Link>
      <Link to="/user">유저페이지</Link>
      <Link to="/login">로그인페이지</Link>
      <Link to="/register">가입페이지</Link>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </>
  );
}

export default App;
