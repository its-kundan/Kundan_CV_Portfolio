"use client";
import React from "react";
// import Timeline2 from "@/components/Timeline2";
import Blogs from "@/components/Blogs";
const page = () => {
  return (
    <div
      style={{ height: "80vh", width: "100vw" }}
      className="flex items-center justify-center"
    >
      <Blogs />
      {/* <Timeline2 /> */}
     
    </div>
  );
};

export default page;
