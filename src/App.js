import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import QRcode from "./pages/QRcode/QRcode";
import Pay from "./pages/Pay/Pay";

//redirection
import KakaoRedirection from "./pages/Redirection/KakaoRedirection/KakaoRedirection"

function App() {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/qrcode" element={<QRcode />}></Route>
          <Route path="/pay" element={<Pay />}></Route>
          <Route exact path="/kakao/callback" element={<KakaoRedirection />} />
        </Routes>
      </Router>
    </>
    
  );
}

export default App;
