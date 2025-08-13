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
    { key: "cloud", name: "Cloud & DevOps", icon: "☁️" },
    { key: "tools", name: "Tools", icon: "🛠️" },
    { key: "blockchain", name: "Blockchain", icon: "⛓️" },
    { key: "mobile", name: "Mobile", icon: "📱" },
  ];

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="skills" className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          A comprehensive overview of my technical skills and proficiency levels
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category.key}
            onClick={() => setActiveCategory(category.key)}
            className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
              activeCategory === category.key
                ? "bg-purple-600 text-white"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            <span className="text-lg">{category.icon}</span>
            <span className="font-medium">{category.name}</span>
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsData[activeCategory].map((skill, index) => (
          <motion.div
            key={skill.name}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{skill.icon}</span>
                <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
              </div>
              <span className="text-purple-400 font-semibold">{skill.level}%</span>
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
      <div className="mt-16 text-center">
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
          <h3 className="text-2xl font-bold text-white mb-4">Skills Summary</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">7+</div>
              <div className="text-gray-400">Programming Languages</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">15+</div>
              <div className="text-gray-400">Frameworks & Libraries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">10+</div>
              <div className="text-gray-400">Tools & Platforms</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">550+</div>
              <div className="text-gray-400">LeetCode Problems</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
