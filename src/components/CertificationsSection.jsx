"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { certificationsData, continuousLearningData } from "../../public/certifications";

const CertificationsSection = () => {
  const [activeTab, setActiveTab] = useState("certifications");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "text-green-400";
      case "In Progress":
        return "text-yellow-400";
      case "Planned":
        return "text-blue-400";
      default:
        return "text-gray-400";
    }
  };

  const getProgressColor = (progress) => {
    if (progress >= 80) return "bg-green-500";
    if (progress >= 60) return "bg-yellow-500";
    if (progress >= 40) return "bg-blue-500";
    return "bg-gray-500";
  };

  return (
    <section id="certifications" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Certifications & Learning</h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Professional certifications and continuous learning journey
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12 px-4">
          <div className="flex gap-3 sm:gap-4 lg:gap-5">
            <button 
              className={`relative inline-flex h-10 sm:h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 transition-all duration-300 hover:scale-105 ${
                activeTab === "certifications" ? 'ring-2 ring-purple-500 ring-offset-2 ring-offset-slate-950' : ''
              }`} 
              onClick={() => setActiveTab("certifications")}
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-4 sm:px-6 py-2 text-xs sm:text-sm font-medium backdrop-blur-3xl transition-all duration-300 ${
                activeTab === "certifications" 
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/25' 
                  : 'bg-slate-950 text-white hover:bg-slate-800'
              }`}>
                🏆 <span className="hidden sm:inline">Certifications</span><span className="sm:hidden">Certs</span>
              </span>
            </button>
            <button 
              className={`relative inline-flex h-10 sm:h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 transition-all duration-300 hover:scale-105 ${
                activeTab === "learning" ? 'ring-2 ring-purple-500 ring-offset-2 ring-offset-slate-950' : ''
              }`} 
              onClick={() => setActiveTab("learning")}
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-4 sm:px-6 py-2 text-xs sm:text-sm font-medium backdrop-blur-3xl transition-all duration-300 ${
                activeTab === "learning" 
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/25' 
                  : 'bg-slate-950 text-white hover:bg-slate-800'
              }`}>
                📚 <span className="hidden sm:inline">Continuous Learning</span><span className="sm:hidden">Learning</span>
              </span>
            </button>
          </div>
        </div>

        <div ref={ref}>
          {activeTab === "certifications" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {certificationsData.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  variants={cardVariants}
                  initial="initial"
                  animate={isInView ? "animate" : "initial"}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center text-white text-lg sm:text-2xl font-bold">
                      {cert.title.charAt(0)}
                    </div>
                    <span className="text-xs sm:text-sm text-gray-400">{cert.date}</span>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{cert.title}</h3>
                  <p className="text-purple-400 text-xs sm:text-sm mb-3">{cert.issuer}</p>
                  <p className="text-gray-300 text-xs sm:text-sm mb-4">{cert.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded">
                      {cert.category}
                    </span>
                    <span className="text-xs text-gray-400">ID: {cert.credentialId}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === "learning" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {continuousLearningData.map((course, index) => (
                <motion.div
                  key={course.id}
                  variants={cardVariants}
                  initial="initial"
                  animate={isInView ? "animate" : "initial"}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-white">{course.title}</h3>
                    <span className={`text-xs sm:text-sm font-medium ${getStatusColor(course.status)}`}>
                      {course.status}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 text-xs sm:text-sm mb-4">{course.description}</p>
                  
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <span className="text-gray-400">Platform:</span>
                      <span className="text-white">{course.platform}</span>
                    </div>
                    
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <span className="text-gray-400">Progress:</span>
                      <span className="text-white">{course.progress}%</span>
                    </div>
                    
                    {course.progress > 0 && (
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div
                          className={`h-2 rounded-full ${getProgressColor(course.progress)}`}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${course.progress}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                        />
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <span className="text-gray-400">Started:</span>
                      <span className="text-white">{course.startDate}</span>
                    </div>
                    
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <span className="text-gray-400">Est. Completion:</span>
                      <span className="text-white">{course.estimatedCompletion}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Learning Stats */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-gray-700/50">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Learning Journey</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-purple-400">{certificationsData.length}</div>
                <div className="text-xs sm:text-sm text-gray-400">Certifications</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-400">{continuousLearningData.filter(c => c.status === "In Progress").length}</div>
                <div className="text-xs sm:text-sm text-gray-400">Active Courses</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-green-400">{continuousLearningData.filter(c => c.status === "Completed").length}</div>
                <div className="text-xs sm:text-sm text-gray-400">Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-yellow-400">{continuousLearningData.filter(c => c.status === "Planned").length}</div>
                <div className="text-xs sm:text-sm text-gray-400">Planned</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
