import React, { useState ,useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/HomePage/Home";
import Header from "./components/header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import SignInPage from "./components/header/SignIn.jsx";
import SignUpPage from "./components/header/SignUp.jsx";
import DetailedCard from "./components/HomePage/detailedCard.jsx";
import RelatedProducts from "./components/HomePage/relatedProducts.jsx";
import RelatedDetailedCard from "./components/HomePage/relatedDetailedCard.jsx";
import Cart from "./components/header/Cart.jsx";

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [displayUser, setDisplayUser] = useState(false);

  const handleLoginSuccess = (userData) => {
    setLoggedInUser(userData);
  }

  return (
    <div className="overflow-x-hidden z-20">
      <BrowserRouter>
        <Header userData={loggedInUser} displayUser={displayUser}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signIn" element={<SignInPage onLoginSucces={handleLoginSuccess} setDisplayUser={setDisplayUser}/>} />
          <Route path="/signUp" element={<SignUpPage />} />
          <Route path="/cart" element={<Cart userData={loggedInUser}/>}/>
          <Route path="/detailedPage/:id" element={<DetailedCard userData={loggedInUser}/>} />
          <Route path="/relatedDetailedPage/:id" element={<RelatedDetailedCard userData={loggedInUser}/>} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
