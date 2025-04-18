import React from "react";
import FeaturedCategories from "./FeaturedCategories.jsx";
import Carousel from "./Carousel.jsx";
import TwoColumnLayout from "./TwoColumnLayout.jsx";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Carousel />
      <FeaturedCategories />
      <TwoColumnLayout />
    </div>
  );
};

export default Home;
