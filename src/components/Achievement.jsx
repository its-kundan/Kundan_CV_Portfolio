"use client"
/// Import React and the necessary hooks
import React from 'react';

// AchievementItem Component to display individual achievements
const AchievementItem = ({ metric, value, postfix = '', prefix = '' }) => {
  return (
    <div className="bg-black dark:bg-gray-800 shadow-md rounded-lg p-4 m-2 flex justify-between items-center">
      <h4 className="text-lg font-semibold text-white-900 dark:text-gray-100">{metric}</h4>
      <p className="text-xl font-bold text-white-900 dark:text-gray-100">
        {prefix}{value}{postfix}
      </p>
    </div>
  );
};

// Achievements Component to display the list of achievements
const Achievements = ({ achievements }) => {
  return (
    <div className="py-8 px-4 bg-white-100 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6 text-white-900 dark:text-gray-100">My Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((item, index) => (
            <AchievementItem key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
