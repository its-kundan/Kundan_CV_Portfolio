"use client";
import React from "react";
import Blogs from "@/components/Blogs";

const BlogsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-24">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
            My Blog
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Exploring technology, development insights, and lessons learned from my journey in software engineering
          </p>
        </div>
        <Blogs />
      </div>
    </div>
  );
};

export default BlogsPage;
