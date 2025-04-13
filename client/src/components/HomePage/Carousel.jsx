import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

const Carousel = () => {
  const next = useRef();
  const previous = useRef();
  const CarouselDiv = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleNext() {
    if (currentIndex < 3) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      gsap.to(CarouselDiv.current, {
        x: `-${newIndex * 81.5}vw`,
        duration: 1,
        ease: "power2.out",
      });
    }
  }

  function handlePrevious() {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      gsap.to(CarouselDiv.current, {
        x: `-${newIndex * 81.5}vw`,
        duration: 1,
        ease: "power2.out",
      });
    }
  }

  useGSAP(() => {
    gsap.set(CarouselDiv.current, {
      x: 0,
    });
  }, []);

  return (
    <div className="h-[20em] w-[500vw] flex items-center relative mb-8">
      <button
        ref={previous}
        className="bg-white h-[3em] w-[3em] rounded-[50%] ml-[9em] flex items-center justify-center z-50 hover:bg-gray-200"
        onClick={handlePrevious}
      >
        <GrFormPrevious className="text-4xl" />
      </button>
      <button
        ref={next}
        className="bg-white h-[3em] w-[3em] rounded-[50%] ml-[54em] flex items-center justify-center z-50 hover:bg-gray-200"
        onClick={handleNext}
      >
        <GrFormNext className="text-4xl" />
      </button>
      <div
        ref={CarouselDiv}
        className="w-auto flex h-full gap-[1.5em] absolute left-[7em]"
      >
        <CarouselImages src="https://api.spicezgold.com/download/file_1734524985581_NewProject(11).jpg" />
        <CarouselImages src="https://api.spicezgold.com/download/file_1734525002307_1723967638078_slideBanner1.6bbeed1a0c8ffb494f7c.jpg" />
        <CarouselImages src="https://api.spicezgold.com/download/file_1734524930884_NewProject(6).jpg" />
        <CarouselImages src="https://api.spicezgold.com/download/file_1734524878924_1721277298204_banner.jpg" />
      </div>
    </div>
  );
};

export default Carousel;

export const CarouselImages = ({ src }) => {
  return (
    <div className="w-[80vw] h-full flex items-center justify-center">
      <img src={src} alt="" className="h-full w-full" />
    </div>
  );
};
