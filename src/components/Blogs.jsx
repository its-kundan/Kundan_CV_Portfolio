"use client"
import { useState } from 'react';
import Image from 'next/image';
import blogs from '../../data/blogs.js'; // Changed import path - see explanation below

const Blogs = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (blog) => {
    setSelectedBlog(blog);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="container mx-auto px-4 py-20 mt-16">
      <h1 className="text-3xl font-bold mb-8 text-center">Featured Blogs</h1>
      
      <div className="max-h-[70vh] overflow-y-auto pr-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-6">
          {blogs.map((blog) => (
            <div 
              key={blog.id} 
              className="bg-black rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              onClick={() => openModal(blog)}
            >
              <div className="relative h-48 w-full">
                <Image 
                  src={blog.imageUrl} 
                  alt={blog.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {blog.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="px-2 py-1 bg-gray-100 text-gray-900 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                <p className="text-gray-200 line-clamp-2">{blog.description}</p>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative h-64 w-full">
              <Image 
                src={selectedBlog.imageUrl} 
                alt={selectedBlog.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex flex-wrap gap-2">
                  {selectedBlog.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button 
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">{selectedBlog.title}</h2>
              <div className="prose max-w-none">
                <p className="text-gray-600 mb-4">{selectedBlog.description}</p>
                <p className="text-gray-800">{selectedBlog.content}</p>
              </div>
              <button 
                onClick={closeModal}
                className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blogs;