import React from "react";
import Header from "../Header.jsx";
import Footer from "../Footer/Footer.jsx";
import NewsletterCover from "./NewsletterCover.jsx";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <NewsletterCover />
      <Footer />
    </div>
  );
};

export default Home;
