"use client"
import { useState } from 'react';
import Image from 'next/image';
import blogs from '../../public/blogs.js';

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
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div 
            key={blog.id} 
            className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 cursor-pointer border border-gray-700 hover:border-purple-500/50"
            onClick={() => openModal(blog)}
          >
            <div className="relative h-56 w-full overflow-hidden">
              <Image 
                src={blog.imageUrl} 
                alt={blog.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {blog.tags.slice(0, 3).map((tag, tagIndex) => (
                  <span 
                    key={tagIndex} 
                    className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 text-xs font-medium rounded-full border border-purple-500/30"
                  >
                    {tag}
                  </span>
                ))}
                {blog.tags.length > 3 && (
                  <span className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs font-medium rounded-full">
                    +{blog.tags.length - 3}
                  </span>
                )}
              </div>
              
              <h2 className="text-xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors duration-300 line-clamp-2">
                {blog.title}
              </h2>
              
              <p className="text-gray-300 text-sm line-clamp-3 mb-4 leading-relaxed">
                {blog.description}
              </p>
              
              <div className="flex items-center justify-between">
                <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 font-medium text-sm">
                  Read More
                </button>
                <div className="text-gray-400 text-xs">
                  {blog.id} min read
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Modal */}
      {isModalOpen && selectedBlog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-gray-700 shadow-2xl">
            <div className="relative h-80 w-full">
              <Image 
                src={selectedBlog.imageUrl} 
                alt={selectedBlog.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all duration-300 backdrop-blur-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-8 overflow-y-auto max-h-[calc(90vh-320px)]">
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedBlog.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex} 
                    className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 text-sm font-medium rounded-full border border-purple-500/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <h2 className="text-3xl font-bold mb-6 text-white leading-tight">
                {selectedBlog.title}
              </h2>
              
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  {selectedBlog.description}
                </p>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  {selectedBlog.content.split('\n').map((paragraph, index) => (
                    <p key={index} className="text-gray-300">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-700">
                <button 
                  onClick={closeModal}
                  className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 font-medium"
                >
                  Close Article
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blogs;