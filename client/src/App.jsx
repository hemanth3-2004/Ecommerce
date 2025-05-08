import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/HomePage/Home";
import Header from "./components/header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import SignupPage from "./components/header/SignUp.jsx";
import DetailedCard from "./components/HomePage/detailedCard.jsx";
import RelatedProducts from "./components/HomePage/relatedProducts.jsx";
import RelatedDetailedCard from "./components/HomePage/relatedDetailedCard.jsx";

function App() {
  return (
    <div className="overflow-x-hidden z-20">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/detailedPage/:id" element={<DetailedCard/>} />
          <Route path="/relatedDetailedPage/:id" element={<RelatedDetailedCard/>} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
