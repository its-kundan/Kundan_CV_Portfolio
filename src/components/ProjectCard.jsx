import React, { useState } from "react";
import { CodeBracketIcon, EyeIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { motion } from "framer-motion";

const neonColors = [
  "text-cyan-400",
  "text-pink-400",
  "text-green-400",
  "text-yellow-400",
  "text-purple-400",
  "text-blue-400",
  "text-orange-400",
  "text-red-400",
];

const ProjectCard = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
  tech
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      {/* iPhone Frame */}
      <div className="relative mx-auto w-72 sm:w-80 h-[550px] sm:h-[600px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[2.5rem] sm:rounded-[3rem] p-2 shadow-2xl border border-gray-700">
        {/* iPhone Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 sm:w-32 h-5 sm:h-6 bg-black rounded-b-2xl sm:rounded-b-3xl z-10"></div>
        
        {/* Screen Content */}
        <div className="relative w-full h-full bg-black rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden">
          {/* Status Bar */}
          <div className="absolute top-2 left-0 right-0 z-20 flex justify-between items-center px-6 text-white text-xs">
            <span>9:41</span>
            <div className="flex items-center space-x-1">
              <div className="w-4 h-2 border border-white rounded-sm">
                <div className="w-3 h-1 bg-white rounded-sm m-0.5"></div>
              </div>
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="w-1 h-1 bg-white rounded-full"></div>
            </div>
          </div>

          {/* App Header */}
          <div className="absolute top-8 left-0 right-0 z-20 bg-gradient-to-r from-blue-600 to-purple-600 p-4">
            <h3 className="text-white font-bold text-lg text-center">{title}</h3>
          </div>

          {/* Main Content Area */}
          <div className="absolute top-20 left-0 right-0 bottom-0 bg-gray-900">
            {/* Project Image */}
            <div className="relative h-48 w-full overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${imgUrl})`,
                }}
              />
              {/* Overlay with action buttons */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center space-x-4">
                <Link
                  href={gitUrl}
                  className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30"
                >
                  <CodeBracketIcon className="h-6 w-6 text-white" />
                </Link>
                <Link
                  href={previewUrl}
                  className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100 bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30"
                >
                  <EyeIcon className="h-6 w-6 text-white" />
                </Link>
              </div>
            </div>

            {/* Project Details */}
            <div className="p-4 space-y-4">
              {/* Description */}
              <div className="bg-gray-800 rounded-xl p-3 shadow-sm border border-gray-700">
                <p className="text-gray-200 text-sm leading-relaxed">{description}</p>
              </div>

              {/* Tech Stack */}
              <div className="bg-gray-800 rounded-xl p-3 shadow-sm border border-gray-700">
                <h4 className="text-gray-100 font-semibold text-sm mb-2 flex items-center">
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-2"></span>
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-1">
                  {tech.map((item, index) => (
                    <span
                      key={item}
                      className={`text-xs px-2 py-1 rounded-full bg-gray-700 border border-gray-600 ${neonColors[index % neonColors.length]} font-medium`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-2">
                <Link
                  href={gitUrl}
                  className="flex-1 bg-gradient-to-r from-gray-800 to-gray-700 text-white text-sm font-medium py-2 px-3 rounded-lg flex items-center justify-center space-x-1 hover:from-gray-700 hover:to-gray-600 transition-all duration-200"
                >
                  <CodeBracketIcon className="h-4 w-4" />
                  <span>Code</span>
                </Link>
                <Link
                  href={previewUrl}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium py-2 px-3 rounded-lg flex items-center justify-center space-x-1 hover:from-blue-500 hover:to-purple-500 transition-all duration-200"
                >
                  <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                  <span>Live</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Home Indicator */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-24 sm:w-32 h-0.5 sm:h-1 bg-white rounded-full opacity-60"></div>
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-[2.5rem] sm:rounded-[3rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
    </motion.div>
  );
};

export default ProjectCard;
