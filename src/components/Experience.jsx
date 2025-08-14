"use client";
import { motion } from "framer-motion";
import { CalendarDays, MapPin, Building2, Award } from "lucide-react";

const experienceData = [
  {
    id: 1,
    title: "SDET Intern",
    company: "Stashfin",
    period: "June 2025 - August 2025",
    location: "Gurugram, India",
    type: "Internship",
    achievements: [
      "Built robust automation test suites for both frontend and backend workflows using Playwright and Java, validating critical flows like Login/Signup, cross-browser compatibility, and responsive design across environments",
      "Developed reusable automation frameworks following Page Object Model (POM) using Selenium, Appium, and Playwright, integrated with TestNG, ensuring modular, scalable test scripts stored in version-controlled repositories",
      "Integrated UI and API test pipelines in Jenkins CI/CD, implemented automated triggers on code merges, and generated execution dashboards with ExtentReports, enhancing regression coverage and QA visibility across sprints"
    ],
    skills: ["Playwright", "Java", "Selenium", "Appium", "TestNG", "Jenkins", "CI/CD", "ExtentReports"],
    color: "from-emerald-500 to-teal-500"
  },
  {
    id: 2,
    title: "Software Development Intern",
    company: "Onlinejaoo.com",
    period: "Jan 2024 - Jun 2024",
    location: "Remote",
    type: "Internship",
    achievements: [
      "Redesigned the database system to adopt PostgreSQL instead of SQL for cost-effective cloud deployment",
      "Worked on researching and selecting CockroachDB for its serverless model during the internship",
      "Developed features for client-facing applications using MERN stack and AWS",
      "Enhanced application performance by implementing optimized database queries",
      "Collaborated with cross-functional teams for seamless project integration"
    ],
    skills: ["PostgreSQL", "MongoDB", "Node.js", "AWS", "MERN Stack"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 3,
    title: "Full-Stack Developer",
    company: "Freelance Projects",
    period: "Jun 2022 - Present",
    location: "Remote",
    type: "Freelance",
    achievements: [
      "Built scalable web applications using the MERN stack, integrating backend APIs and modern UI libraries",
      "Deployed and managed production environments using AWS and Docker",
      "Implemented authentication and role-based access systems for secure applications",
      "Focused on improving website performance using optimized React state management",
      "Explored and implemented Socket.io for real-time communication in chat applications"
    ],
    skills: ["React", "Node.js", "Express", "Socket.io", "AWS", "Docker"],
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 4,
    title: "ECE Final Year Project",
    company: "Landslide Detection System",
    period: "Aug 2023 - May 2024",
    location: "University",
    type: "Research Project",
    achievements: [
      "Developed a landslide detection system funded by ISRO, integrating ML models and sensors",
      "Implemented real-time data collection and analysis using hardware-software interfacing",
      "Worked on Arduino coding and ESP modules to ensure reliable sensor communication",
      "Designed simulation environments to test hardware compatibility with OpenCV",
      "Produced documentation detailing system design and testing methodologies"
    ],
    skills: ["Machine Learning", "Arduino", "OpenCV", "Python", "IoT"],
    color: "from-orange-500 to-red-500"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function Experience() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
            Professional Experience
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A journey through my professional growth, technical achievements, and continuous learning
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-gray-600 to-transparent"></div>
          
          {experienceData.map((experience, index) => (
            <motion.div
              key={experience.id}
              variants={cardVariants}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex flex-col md:flex-row items-start gap-8`}
            >
              {/* Timeline Dot */}
              <div className={`absolute left-6 md:left-1/2 transform md:-translate-x-1/2 top-8 w-4 h-4 bg-gradient-to-r ${experience.color} rounded-full border-4 border-slate-800 z-10`}></div>
              
              {/* Content Card */}
              <div className={`flex-1 ${index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'} md:w-1/2`}>
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/70 transition-all duration-300 group">
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${experience.color}`}></div>
                      <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                        {experience.type}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gray-100 transition-colors">
                      {experience.title}
                    </h3>
                    
                    <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
                      <div className="flex items-center gap-1">
                        <Building2 className="w-4 h-4" />
                        <span>{experience.company}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{experience.location}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-1 text-gray-500 text-sm">
                      <CalendarDays className="w-4 h-4" />
                      <span>{experience.period}</span>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-200 mb-4 flex items-center gap-2">
                      <Award className="w-5 h-5 text-yellow-500" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-3">
                      {experience.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-300 leading-relaxed">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${experience.color} mt-2 flex-shrink-0`}></div>
                          <span className="text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-200 mb-4">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill) => (
                        <span 
                          key={skill} 
                          className={`px-3 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r ${experience.color} text-white border border-transparent hover:border-white/20 transition-all duration-200`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
