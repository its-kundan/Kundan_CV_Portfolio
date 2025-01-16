import React from "react";
import { Chrono } from "react-chrono";
import 'tailwindcss/tailwind.css';

const Time = () => {
  const items = [
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      url: "http://www.history.com",
      cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to...",
      cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to...",
      media: {
        type: "IMAGE",
        source: {
          url: "http://someurl/image.jpg"
        }
      }
    },
    // Add more items as needed
  ];

  return (
    <div className="w-full h-screen p-4 bg-gray-100 flex items-center justify-center">
      <div style={{ width: "500px", height: "600px" }}>
        <Chrono items={items} mode="VERTICAL_ALTERNATING" />
      </div>
    </div>
  );
};

export default Time;
