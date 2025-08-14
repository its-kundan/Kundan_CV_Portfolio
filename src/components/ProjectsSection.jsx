"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { projectsData } from "./../../public/projectdata";

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const handleTagChange = (newTag) => {
    setTag(newTag);
    setShowAll(false);
  };

  const handleSeeMore = () => {
    setShowAll(true);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, isMobile ? 4 : 8);

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="pt-20">
      {/* New Header */}
      <div className="text-center mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4"
        >
          Featured Projects
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto"
        >
          Explore my latest work showcasing innovative solutions and cutting-edge technologies
        </motion.p>
      </div>

      {/* Filter Tags */}
      <div className="text-white py-6 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-5">
          <ProjectTag
            onClick={handleTagChange}
            name="All"
            isSelected={tag === "All"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Web"
            isSelected={tag === "Web"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Mobile"
            isSelected={tag === "Mobile"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Robotics"
            isSelected={tag === "Robotics"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Chrome Extension"
            isSelected={tag === "Chrome Extension"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="NPM Package"
            isSelected={tag === "NPM Package"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Automation"
            isSelected={tag === "Automation"}
          />
        </div>
      </div>

      {/* Projects Grid */}
      <ul ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 justify-items-center place-content-center">
        {displayedProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              tech={project.tech}
            />
          </motion.li>
        ))}
      </ul>

      {/* See More Button */}
      {!showAll && filteredProjects.length > (isMobile ? 4 : 8) && (
        <div className="text-center mt-12">
          <button 
            onClick={handleSeeMore} 
            className="relative inline-flex h-14 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:scale-105 transition-transform duration-200"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-base font-medium text-white backdrop-blur-3xl">
              View All Projects
            </span>
          </button>   
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
