import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/HomePage/Home";
import Header from "./components/header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import SignupPage from "./components/header/SignUp.jsx";

function App() {
  return (
    <div className="overflow-x-hidden z-20">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
