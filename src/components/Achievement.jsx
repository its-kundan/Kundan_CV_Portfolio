"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const getCategoryColors = (category) => {
  switch (category) {
    case 'coding':
      return {
        gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
        border: 'border-emerald-500/30',
        glow: 'shadow-emerald-500/20',
        bg: 'bg-emerald-500/10'
      };
    case 'community':
      return {
        gradient: 'from-purple-500 via-pink-500 to-rose-500',
        border: 'border-purple-500/30',
        glow: 'shadow-purple-500/20',
        bg: 'bg-purple-500/10'
      };
    case 'competitions':
      return {
        gradient: 'from-orange-500 via-red-500 to-pink-500',
        border: 'border-orange-500/30',
        glow: 'shadow-orange-500/20',
        bg: 'bg-orange-500/10'
      };
    case 'projects':
      return {
        gradient: 'from-blue-500 via-indigo-500 to-purple-500',
        border: 'border-blue-500/30',
        glow: 'shadow-blue-500/20',
        bg: 'bg-blue-500/10'
      };
    case 'leadership':
      return {
        gradient: 'from-yellow-500 via-amber-500 to-orange-500',
        border: 'border-yellow-500/30',
        glow: 'shadow-yellow-500/20',
        bg: 'bg-yellow-500/10'
      };
    default:
      return {
        gradient: 'from-gray-500 via-slate-500 to-zinc-500',
        border: 'border-gray-500/30',
        glow: 'shadow-gray-500/20',
        bg: 'bg-gray-500/10'
      };
  }
};

const AchievementItem = ({ metric, value, postfix = '', prefix = '', category = 'default', icon, description }) => {
  const [isHovered, setIsHovered] = useState(false);
  const colors = getCategoryColors(category);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.02,
        y: -5,
        transition: { duration: 0.2 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`relative group cursor-pointer rounded-2xl p-6 border ${colors.border} bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm hover:shadow-2xl hover:${colors.glow} transition-all duration-500 overflow-hidden`}
    >
      {/* Animated background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
      
      {/* Glow effect */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <div className="flex items-center justify-between mb-4">
          <div className={`text-3xl ${isHovered ? 'scale-110' : 'scale-100'} transition-transform duration-300`}>
            {icon}
          </div>
          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${colors.gradient} ${isHovered ? 'scale-150' : 'scale-100'} transition-transform duration-300`} />
        </div>
        
        {/* Metric */}
        <h4 className="text-sm font-medium text-gray-300 mb-2 group-hover:text-white transition-colors duration-300">
          {metric}
        </h4>
        
        {/* Value */}
        <div className="mb-3">
          <span className={`text-2xl font-bold bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300 inline-block`}>
            {prefix}{value}{postfix}
          </span>
        </div>
        
        {/* Description */}
        <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
          {description}
        </p>
      </div>
      
      {/* Bottom accent line */}
      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${colors.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
    </motion.div>
  );
};

const CategorySection = ({ title, achievements, category }) => {
  const colors = getCategoryColors(category);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-12"
    >
      <div className="flex items-center mb-6">
        <div className={`w-1 h-8 bg-gradient-to-b ${colors.gradient} rounded-full mr-4`} />
        <h3 className={`text-2xl font-bold bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent`}>
          {title}
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((item, index) => (
          <AchievementItem key={index} {...item} />
        ))}
      </div>
    </motion.div>
  );
};

const Achievements = ({ achievements = [] }) => {
  const categories = {
    coding: achievements.filter(a => a.category === 'coding'),
    community: achievements.filter(a => a.category === 'community'),
    competitions: achievements.filter(a => a.category === 'competitions'),
    projects: achievements.filter(a => a.category === 'projects'),
    leadership: achievements.filter(a => a.category === 'leadership'),
  };

  const categoryTitles = {
    coding: "Coding & Problem Solving",
    community: "Open Source & Community",
    competitions: "Hackathons & Competitions",
    projects: "Projects & Innovation",
    leadership: "Leadership & Events",
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              My
            </span>
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent ml-4">
              Achievements
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            A journey of continuous learning, innovation, and excellence across various domains of technology and leadership
          </p>
        </motion.div>
        
        {/* Achievements Grid */}
        {achievements && achievements.length > 0 ? (
          <div className="space-y-16">
            {Object.entries(categories).map(([category, categoryAchievements]) => 
              categoryAchievements.length > 0 && (
                <CategorySection
                  key={category}
                  title={categoryTitles[category]}
                  achievements={categoryAchievements}
                  category={category}
                />
              )
            )}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🏆</div>
            <p className="text-gray-400 text-lg">Achievements coming soon...</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Achievements;