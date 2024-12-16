import React from 'react';

const achievements = [
  {
    id: 1,
    title: "365+ Days Streak on LeetCode",
    organization: "LeetCode",
    description: "Maintained a consistent daily problem-solving streak for over 365 days, achieving proficiency in data structures and algorithms."
  },
  {
    id: 2,
    title: "14th Globally in Hack Squad Hackathon",
    organization: "Hack Squad",
    description: "Ranked 14th globally in a prestigious hackathon for open-source contributions and innovative problem-solving."
  },
  {
    id: 3,
    title: "e-Yantra Robotics Hackathon Round 3 Qualifier",
    organization: "IIT Bombay",
    description: "Qualified for Round 3 in the prestigious robotics hackathon, showcasing advanced robotics and simulation skills."
  },
  {
    id: 4,
    title: "State-Level Entrepreneur Selection",
    organization: "Bihar Innovation Program",
    description: "Selected as an entrepreneur for a state-level program, focusing on innovation and impactful solutions."
  },
  {
    id: 5,
    title: "Hacktoberfest Open Source Contributor",
    organization: "Hacktoberfest",
    description: "Contributed to open-source projects, earning swags and recognition for valuable contributions to the community."
  },
  {
    id: 6,
    title: "ISRO-Funded Landslide Detection Project",
    organization: "ISRO Collaboration",
    description: "Worked on a machine learning and sensor integration project for landslide detection, integrating hardware and software solutions."
  },
  {
    id: 7,
    title: "Flipkart Grid Round 1 Qualifier",
    organization: "Flipkart",
    description: "Cleared the first round of Flipkart Grid competition by solving complex tech challenges."
  }
];


const Achievements = () => {
  return (
    <div className="bg-black-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-center text-white-800 mb-6">My Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
              <h3 className="text-lg font-semibold text-blue-800">{achievement.title}</h3>
              <h4 className="text-md text-blue-600">{achievement.organization}</h4>
              <p className="text-gray-600 mt-2">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
