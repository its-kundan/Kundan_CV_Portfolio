"use client"
import React from 'react';
import Image from 'next/image';  // Import the Image component from next/image

const Intro = () => {
  // YouTube video ID
  const videoId = "Kb1f5bvF6f4&t=4898s";
  const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="intro-container">
      {/* Embed YouTube video */}
      <iframe
        width="560"
        height="315"
        src={embedUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      {/* YouTube icon link */}
      <a href={youtubeUrl} target="_blank" rel="noopener noreferrer" className="youtube-icon">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/YouTube_icon_2013.svg/1024px-YouTube_icon_2013.svg.png"
          alt="YouTube Icon"
          width={50}  // Define width
          height={50}  // Define height
          priority  // Use priority to preload the image if it's in the viewport on load
        />
      </a>
    </div>
  );
}

export default Intro;
