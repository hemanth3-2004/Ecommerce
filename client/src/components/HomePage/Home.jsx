import React from "react";
import FeaturedCategories from "./FeaturedCategories.jsx";
import Carousel from "./Carousel.jsx";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Carousel />
      <FeaturedCategories />
    </div>
  );
};

export default Home;
