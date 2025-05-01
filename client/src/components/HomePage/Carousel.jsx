// DemoCarousel.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const DemoCarousel = () => {
  const onChange = (index) => {
    console.log("Slide changed to:", index);
  };

  const onClickItem = (index) => {
    console.log("Item clicked:", index);
  };

  const onClickThumb = (index) => {
    console.log("Thumbnail clicked:", index);
  };

  const posters=[
    "https://api.spicezgold.com/download/file_1734524930884_NewProject(6).jpg",
    "https://api.spicezgold.com/download/file_1734524878924_1721277298204_banner.jpg",
    "https://api.spicezgold.com/download/file_1734524971122_NewProject(8).jpg",
    "https://api.spicezgold.com/download/file_1734524985581_NewProject(11).jpg",
    "https://api.spicezgold.com/download/file_1734525002307_1723967638078_slideBanner1.6bbeed1a0c8ffb494f7c.jpg",
    "https://api.spicezgold.com/download/file_1734525014348_NewProject(7).jpg",
  ];

  
  return (
    <Carousel
   showArrows={true}
   autoPlay={true}
   infiniteLoop={true}
   interval={2000}
   stopOnHover={true}
   onChange={onChange}
   onClickItem={onClickItem}
   onClickThumb={onClickThumb}
 
    >
      {posters.map((img,index) => (
        <div key={img}>
          <img src={img} alt={`Slide ${index}`} />
        </div>
      ))}
    </Carousel>

  );
};

export default DemoCarousel;
