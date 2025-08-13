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
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">Certifications & Learning</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Professional certifications and continuous learning journey
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-12">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-full p-2 border border-gray-700/50">
          <button
            onClick={() => setActiveTab("certifications")}
            className={`px-6 py-3 rounded-full transition-all duration-300 ${
              activeTab === "certifications"
                ? "bg-purple-600 text-white"
                : "text-gray-300 hover:text-white"
            }`}
          >
            🏆 Certifications
          </button>
          <button
            onClick={() => setActiveTab("learning")}
            className={`px-6 py-3 rounded-full transition-all duration-300 ${
              activeTab === "learning"
                ? "bg-purple-600 text-white"
                : "text-gray-300 hover:text-white"
            }`}
          >
            📚 Continuous Learning
          </button>
        </div>
      </div>

      <div ref={ref}>
        {activeTab === "certifications" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificationsData.map((cert, index) => (
              <motion.div
                key={cert.id}
                variants={cardVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center text-white text-2xl font-bold">
                    {cert.title.charAt(0)}
                  </div>
                  <span className="text-sm text-gray-400">{cert.date}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2">{cert.title}</h3>
                <p className="text-purple-400 text-sm mb-3">{cert.issuer}</p>
                <p className="text-gray-300 text-sm mb-4">{cert.description}</p>
                
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
          <div className="grid md:grid-cols-2 gap-8">
            {continuousLearningData.map((course, index) => (
              <motion.div
                key={course.id}
                variants={cardVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{course.title}</h3>
                  <span className={`text-sm font-medium ${getStatusColor(course.status)}`}>
                    {course.status}
                  </span>
                </div>
                
                <p className="text-gray-300 text-sm mb-4">{course.description}</p>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Platform:</span>
                    <span className="text-white">{course.platform}</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
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
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Started:</span>
                    <span className="text-white">{course.startDate}</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
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
      <div className="mt-16 text-center">
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
          <h3 className="text-2xl font-bold text-white mb-6">Learning Journey</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">{certificationsData.length}</div>
              <div className="text-gray-400">Certifications</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">{continuousLearningData.filter(c => c.status === "In Progress").length}</div>
              <div className="text-gray-400">Active Courses</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">{continuousLearningData.filter(c => c.status === "Completed").length}</div>
              <div className="text-gray-400">Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">{continuousLearningData.filter(c => c.status === "Planned").length}</div>
              <div className="text-gray-400">Planned</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
