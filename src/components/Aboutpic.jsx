"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import imageData from './../../public/aboutpic.js'; // Ensure this path is correct

function RotatingImage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageData.length);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(intervalId); // Clear the interval on component unmount
  }, []);

  return (
    <div>
      <Image
        src={imageData[currentIndex]}
        width={600}
        height={600}
        alt="DevCard"
        priority={true} // Optionally, mark the image as high priority if it's in the viewport initially
        layout="responsive" // This makes the image scale nicely with the container
      />
    </div>
  );
}

export default RotatingImage;
