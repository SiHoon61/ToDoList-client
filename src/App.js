import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import QRcode1 from "./pages/QRcode/QRcode1";
import QRcode2 from "./pages/QRcode/QRcode2";
import QRcode3 from "./pages/QRcode/QRcode3";
import QRcode4 from "./pages/QRcode/QRcode4";
import QRcode5 from "./pages/QRcode/QRcode5";
import Pay from "./pages/Pay/Pay";
import Complete from "./pages/Complete/Complete";
import Verification from "./pages/Verification/Verification";
import SocketTest from "./pages/Socket/Socket";

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
            <Route path="/qrcode_1" element={<QRcode1 />}></Route>
            <Route path="/qrcode_2" element={<QRcode2 />}></Route>
            <Route path="/qrcode_3" element={<QRcode3 />}></Route>
            <Route path="/qrcode_4" element={<QRcode4 />}></Route>
            <Route path="/qrcode_5" element={<QRcode5 />}></Route>
            <Route path="/socket" element={<SocketTest />}></Route>
            <Route exact path="/kakao/callback" element={<KakaoRedirection />} />
          </Routes>
        </RandomValueProvider>
      </Router>
    </>

  );
}

export default App;
