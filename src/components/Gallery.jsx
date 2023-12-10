import React, { useState } from "react";

const Gallery = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("left");

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prev) => (prev + 1 === images.length ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setDirection("left");
    setCurrentIndex((prev) => (prev - 1 < 0 ? images.length - 1 : prev - 1));
  };

  const handleDotClick = (index) => {
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  };
  return (
    <div className="w-[90%] flex flex-col items-center relative z-0">
      <div className="w-full h-[500px] flex justify-center items-center overflow-hidden">
        <img key={currentIndex} src={`/images/${images[currentIndex]}`} />
      </div>
      <svg
        className="h-8 text-white absolute left-1 top-60 cursor-pointer"
        onClick={handlePrev}
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5"
        />
      </svg>
      <svg
        className="h-8 text-white absolute right-1 top-60 cursor-pointer"
        onClick={handleNext}
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
      <div className="flex space-x-3 mt-5">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 bg-slate-300 rounded-full ${
              currentIndex === index ? "bg-slate-600" : ""
            }`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
