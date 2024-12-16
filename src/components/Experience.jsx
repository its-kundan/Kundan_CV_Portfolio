"use client"
import React from 'react';

const experiences = [
  {
    id: 1,
    title: "Software Developer Intern at Onlinejaoo.com",
    period: "Jan 2024 - Jun 2024",
    points: [
      "Redesigned the database system to adopt PostgreSQL instead of SQL for cost-effective cloud deployment.",
      "Worked on researching and selecting CockroachDB for its serverless model during the internship.",
      "Developed features for client-facing applications using MERN stack and AWS.",
      "Enhanced application performance by implementing optimized database queries.",
      "Collaborated with cross-functional teams for seamless project integration."
    ],
    skills: ["PostgreSQL", "MongoDB", "Node.js", "AWS"],
    skillColors: ["blue-500", "green-500", "yellow-500", "gray-600"] // Tailwind color classes
  },
  {
    id: 2,
    title: "Full-Stack Developer at Freelance Projects",
    period: "Jun 2022 - Present",
    points: [
      "Built scalable web applications using the MERN stack, integrating backend APIs and modern UI libraries.",
      "Deployed and managed production environments using AWS and Docker.",
      "Implemented authentication and role-based access systems for secure applications.",
      "Focused on improving website performance using optimized React state management.",
      "Explored and implemented Socket.io for real-time communication in chat applications."
    ],
    skills: ["React", "Node.js", "Express", "Socket.io", "AWS"],
    skillColors: ["blue-600", "yellow-500", "green-600", "purple-500", "gray-700"]
  },
  {
    id: 3,
    title: "ECE Final Year Project: Landslide Detection System",
    period: "Aug 2023 - May 2024",
    points: [
      "Developed a landslide detection system funded by ISRO, integrating ML models and sensors.",
      "Implemented real-time data collection and analysis using hardware-software interfacing.",
      "Worked on Arduino coding and ESP modules to ensure reliable sensor communication.",
      "Designed simulation environments to test hardware compatibility with OpenCV.",
      "Produced documentation detailing system design and testing methodologies."
    ],
    skills: ["Machine Learning", "Arduino", "OpenCV", "Python"],
    skillColors: ["orange-500", "red-600", "blue-400", "yellow-700"]
  }
];


const Experience = () => {
  return (
    <div className="bg-black-100 py-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:justify-center">
          <div className="md:w-1/6 hidden md:block">
            <div className="h-full w-1 bg-black-400 absolute left-2 md:left-1/2 transform -translate-x-1/2"></div>
          </div>
          <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-10 md:flex-row">
            {experiences.map((experience, index) => (
              <div key={experience.id} className={`flex-1 px-4 py-4 bg-black shadow-lg rounded-lg my-4 md:my-0 ${index % 2 === 0 ? 'md:ml-20' : 'md:mr-20'}`}>
                <h3 className="text-xl text-blue-800 font-semibold border-b border-gray-200">{experience.title}</h3>
                <p className="text-gray-700">{experience.period}</p>
                <ul className="list-disc ml-5 my-2 text-gray-600">
                  {experience.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap">
                  {experience.skills.map((skill, idx) => (
                    <span key={idx} className={`text-${experience.skillColors[idx]} py-1 px-3 m-1 rounded bg-opacity-20 bg-${experience.skillColors[idx]}`}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
