"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { skillsData } from "../../public/skills";

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const categories = [
    { key: "frontend", name: "Frontend", icon: "🎨" },
    { key: "backend", name: "Backend", icon: "⚙️" },
    { key: "database", name: "Database", icon: "🗄️" },
    { key: "cloud_devops", name: "Cloud & DevOps", icon: "☁️" },
    { key: "tools", name: "Tools", icon: "🛠️" },
    { key: "testing_security", name: "Testing & Security", icon: "🛡️" },
    { key: "blockchain", name: "Blockchain", icon: "⛓️" },
    { key: "mobile", name: "Mobile", icon: "📱" },
    { key: "ai_ml", name: "AI & ML", icon: "🤖" },
    { key: "architecture", name: "Architecture", icon: "🏗️" },
  ];

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Skills & Expertise</h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-full transition-all duration-300 text-xs sm:text-sm lg:text-base ${
                activeCategory === category.key
                  ? "bg-purple-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              <span className="text-sm sm:text-lg">{category.icon}</span>
              <span className="font-medium hidden sm:inline">{category.name}</span>
              <span className="font-medium sm:hidden">{category.name.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {(skillsData[activeCategory] || []).map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-xl sm:text-2xl">{skill.icon}</span>
                  <h3 className="text-base sm:text-lg font-semibold text-white">{skill.name}</h3>
                </div>
                <span className="text-purple-400 font-semibold text-sm sm:text-base">{skill.level}%</span>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                <motion.div
                  className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                />
              </div>
              
              {/* Skill Level Indicator */}
              <div className="flex justify-between text-xs text-gray-400">
                <span>Beginner</span>
                <span>Intermediate</span>
                <span>Advanced</span>
                <span>Expert</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-gray-700/50">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Skills Summary</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-purple-400">7+</div>
                <div className="text-gray-400 text-xs sm:text-sm">Programming Languages</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-400">15+</div>
                <div className="text-gray-400 text-xs sm:text-sm">Frameworks & Libraries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-green-400">10+</div>
                <div className="text-gray-400 text-xs sm:text-sm">Tools & Platforms</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-yellow-400">550+</div>
                <div className="text-gray-400 text-xs sm:text-sm">LeetCode Problems</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
