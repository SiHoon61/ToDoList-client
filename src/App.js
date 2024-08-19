import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import QRcode from "./pages/QRcode/QRcode";
import Pay from "./pages/Pay/Pay";
import Complete from "./pages/Complete/Complete";
import Verification from "./pages/Verification/Verification";
import { RandomValueProvider } from './components/RandomValueContext/RandomValueContext';

//redirection
import KakaoRedirection from "./pages/Redirection/KakaoRedirection/KakaoRedirection"

function App() {

  return (
    <>
      <Router>
        <RandomValueProvider>
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/pay" element={<Pay />}></Route>
            <Route path="/complete" element={<Complete />}></Route>
            <Route path="/verification" element={<Verification />}></Route>
            <Route path="/qrcode" element={<QRcode />}></Route>
            <Route exact path="/kakao/callback" element={<KakaoRedirection />} />
          </Routes>
        </RandomValueProvider>

      </Router>
    </>

  );
}

export default App;
