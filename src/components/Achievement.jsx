"use client"
import React from 'react';
import { motion } from 'framer-motion';

const AchievementItem = ({ metric, value, postfix = '', prefix = '' }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative bg-gradient-to-br from-purple-600 to-blue-500 rounded-xl p-6 m-2 flex flex-col items-center"
    >
      <h4 className="text-lg font-semibold text-white mb-2">{metric}</h4>
      <p className="text-3xl font-bold text-white">
        {prefix}{value}{postfix}
      </p>
    </motion.div>
  );
};

const Achievements = ({ achievements = [] }) => {  // Default empty array if undefined
  return (
    <div className="py-16 px-4 bg-gray-900 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500"
        >
          My Achievements
        </motion.h2>
        
        {achievements && achievements.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((item, index) => (
              <AchievementItem key={index} {...item} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 dark:text-gray-400">
            No achievements to display
          </p>
        )}
      </div>
    </div>
  );
};

export default Achievements;