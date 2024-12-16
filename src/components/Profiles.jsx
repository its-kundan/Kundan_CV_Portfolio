"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import imageData from "../../public/resume"; // Adjust this import path according to your project structure

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex) => (currentIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []); // No dependency, runs only on component mount and unmount

  return (
    <div className="w-full max-w-screen-lg mx-auto overflow-hidden relative">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="flex-shrink-0 w-full relative">
            <Image
              src={image}
              alt={`Slide ${index}`}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 space-x-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`h-3 w-3 rounded-full ${
              currentIndex === idx ? "bg-blue-600" : "bg-white"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
