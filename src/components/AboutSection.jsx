"use client";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";
import Aboutpic from "./Aboutpic";
import { motion } from "framer-motion";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-gray-900/30 to-gray-800/30 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-8 hover:border-emerald-500/40 transition-all duration-500">
            <div className="flex items-center mb-6">
              <div className="w-4 h-4 bg-emerald-400 rounded-full mr-4"></div>
              <h4 className="text-emerald-400 font-semibold text-xl">Backend</h4>
            </div>
            <ul className="text-gray-300 text-base space-y-3">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-emerald-400 rounded-full mr-4"></span>
                Node.js & Express
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-emerald-400 rounded-full mr-4"></span>
                PostgreSQL & MongoDB
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-emerald-400 rounded-full mr-4"></span>
                RESTful APIs
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-emerald-400 rounded-full mr-4"></span>
                AWS & Cloud Services
              </li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-gray-900/30 to-gray-800/30 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 hover:border-blue-500/40 transition-all duration-500">
            <div className="flex items-center mb-6">
              <div className="w-4 h-4 bg-blue-400 rounded-full mr-4"></div>
              <h4 className="text-blue-400 font-semibold text-xl">Frontend</h4>
            </div>
            <ul className="text-gray-300 text-base space-y-3">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-4"></span>
                React & Next.js
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-4"></span>
                JavaScript & TypeScript
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-4"></span>
                Tailwind CSS
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-4"></span>
                Responsive Design
              </li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-gray-900/30 to-gray-800/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/40 transition-all duration-500">
            <div className="flex items-center mb-6">
              <div className="w-4 h-4 bg-purple-400 rounded-full mr-4"></div>
              <h4 className="text-purple-400 font-semibold text-xl">Tools & Others</h4>
            </div>
            <ul className="text-gray-300 text-base space-y-3">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-4"></span>
                Git & GitHub
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-4"></span>
                Docker & Kubernetes
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-4"></span>
                Web3 & Blockchain
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-4"></span>
                DSA & Algorithms
              </li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="space-y-8">
        <div className="bg-gradient-to-br from-gray-900/30 to-gray-800/30 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-10 hover:border-emerald-500/40 transition-all duration-500">
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              <h4 className="text-emerald-400 font-bold text-2xl mb-3">National Institute of Technology, Agartala</h4>
              <p className="text-gray-300 text-lg mb-3">Bachelor of Technology in Computer Science & Engineering</p>
              <p className="text-gray-400 text-base">2021 - 2025</p>
            </div>
            <div className="flex items-center">
              <span className="bg-emerald-500/20 text-emerald-400 text-sm font-medium px-4 py-2 rounded-full border border-emerald-500/30">
                Current
              </span>
            </div>
          </div>
          <div className="flex items-center text-emerald-400">
            <span className="text-3xl mr-4">🎓</span>
            <span className="text-base">Pursuing Computer Science Engineering</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-gray-900/30 to-gray-800/30 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 hover:border-blue-500/40 transition-all duration-500">
            <div className="flex items-center mb-6">
              <span className="text-3xl mr-4">📚</span>
              <h4 className="text-blue-400 font-bold text-xl">Allen Career Institute, Kota</h4>
            </div>
            <p className="text-gray-300 text-base mb-3">JEE Preparation</p>
            <p className="text-gray-400 text-sm">2018 - 2020</p>
          </div>
          
          <div className="bg-gradient-to-br from-gray-900/30 to-gray-800/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/40 transition-all duration-500">
            <div className="flex items-center mb-6">
              <span className="text-3xl mr-4">🏫</span>
              <h4 className="text-purple-400 font-bold text-xl">R.P.S. Public School, Bihar Sharif</h4>
            </div>
            <p className="text-gray-300 text-base mb-3">Higher Secondary Education</p>
            <p className="text-gray-400 text-sm">2016 - 2018</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gradient-to-br from-gray-900/30 to-gray-800/30 backdrop-blur-sm border border-orange-500/20 rounded-2xl p-8 hover:border-orange-500/40 transition-all duration-500">
          <div className="flex items-center justify-between mb-6">
            <div className="flex-1">
              <h4 className="text-orange-400 font-bold text-xl mb-3">SDE Internship</h4>
              <p className="text-gray-300 text-base mb-2">Software Development Engineer</p>
              <p className="text-gray-400 text-sm">Professional Experience</p>
            </div>
            <div className="text-orange-400 text-4xl">🏆</div>
          </div>
          <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-4">
            <p className="text-orange-300 text-sm">Internship Certificate</p>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-gray-900/30 to-gray-800/30 backdrop-blur-sm border border-green-500/20 rounded-2xl p-8 hover:border-green-500/40 transition-all duration-500">
          <div className="flex items-center justify-between mb-6">
            <div className="flex-1">
              <h4 className="text-green-400 font-bold text-xl mb-3">LeetCode Knight</h4>
              <p className="text-gray-300 text-base mb-2">700+ Problems Solved</p>
              <p className="text-gray-400 text-sm">Competitive Programming</p>
            </div>
            <div className="text-green-400 text-4xl">⚔️</div>
          </div>
          <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4">
            <p className="text-green-300 text-sm">Top 5% Rank</p>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-gray-900/30 to-gray-800/30 backdrop-blur-sm border border-pink-500/20 rounded-2xl p-8 hover:border-pink-500/40 transition-all duration-500">
          <div className="flex items-center justify-between mb-6">
            <div className="flex-1">
              <h4 className="text-pink-400 font-bold text-xl mb-3">Hacktoberfest</h4>
              <p className="text-gray-300 text-base mb-2">Open Source Contributor</p>
              <p className="text-gray-400 text-sm">Community Recognition</p>
            </div>
            <div className="text-pink-400 text-4xl">🎃</div>
          </div>
          <div className="bg-pink-500/10 border border-pink-500/20 rounded-xl p-4">
            <p className="text-pink-300 text-sm">2+ Years Active</p>
          </div>
        </div>
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl md:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              About
            </span>
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent ml-6">
              Me
            </span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            A passionate developer with expertise in modern web technologies and a drive for innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-start"
          >
            <Aboutpic />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-10"
          >
            <div className="space-y-8">
              <p className="text-gray-300 text-xl leading-relaxed">
                Hi, I&apos;m <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent font-semibold">Kundan Kumar</span>, a dedicated{" "}
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent font-semibold">Full-Stack Developer</span> with
                expertise in the <span className="text-blue-400 font-semibold">MERN stack, Next.js, Tailwind CSS, PostgreSQL, and AWS</span>.
              </p>
              
              <p className="text-gray-300 text-xl leading-relaxed">
                I&apos;m a <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent font-semibold">final-year student at NIT Agartala</span> with a passion for
                building scalable web applications and solving problems in{" "}
                <span className="text-blue-400 font-semibold">web development, data structures, algorithms, and blockchain</span>.
              </p>
              
              <p className="text-gray-300 text-xl leading-relaxed">
                I have hands-on experience with projects like{" "}
                <span className="text-blue-400 font-semibold">Medical Management and Job Portal</span>, and I&apos;ve solved over{" "}
                <span className="text-blue-400 font-semibold">700 problems on LeetCode</span>, earning the title of{" "}
                <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent font-semibold">LeetCode Knight</span>.
              </p>
            </div>

            {/* Tab Buttons */}
            <div className="flex flex-wrap gap-4">
              <TabButton
                selectTab={() => handleTabChange("skills")}
                active={tab === "skills"}
              >
                Skills
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("education")}
                active={tab === "education"}
              >
                Education
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("certifications")}
                active={tab === "certifications"}
              >
                Certifications
              </TabButton>
            </div>

            {/* Tab Content */}
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-10"
            >
              {TAB_DATA.find((t) => t.id === tab).content}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
