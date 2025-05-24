import React from "react";
import FeaturedCategories from "./FeaturedCategories.jsx";
import Carousel from "./Carousel.jsx";
import TwoColumnLayout from "./TwoColumnLayout.jsx";
import Cart from "../header/Cart.jsx";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Cart />
      <Carousel />
      <FeaturedCategories />
      <TwoColumnLayout />
    </div>
  );
};

export default Home;
