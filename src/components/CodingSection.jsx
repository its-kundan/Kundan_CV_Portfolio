"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./CodingCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { projectsData } from "../../public/projectdata";

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const [showAll, setShowAll] = useState(false); // State to control the visibility of all projects
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Detect screen size
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const handleTagChange = (newTag) => {
    setTag(newTag);
    setShowAll(false); // Reset to showing limited projects on tag change
  };

  const handleSeeMore = () => {
    setShowAll(true); // Expand to show all projects
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  // Show 3 projects maximum, or all when "See More" is clicked
  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 3);

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects2" className="pt-20">
      <h2 className="text-center text-4xl font-bold text-white mt-1 mb-4 md:mb-6">
        My Coding Profiles
      </h2>
      <div className="text-white py-6 mx-auto w-full overflow-hidden">
        <div className="grid grid-cols-4 sm:grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-0.8 justify-center">
          <ProjectTag
            onClick={handleTagChange}
            name="All"
            isSelected={tag === "All"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Data Structures & Algorithms"
            isSelected={tag === "dsa"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="cp"
            isSelected={tag === "cp"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Websites"
            isSelected={tag === "dev"}
          />
        </div>
      </div>

      <ul ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 xl:gap-20 justify-items-center place-content-center max-w-7xl mx-auto px-4">
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
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
      {!showAll && filteredProjects.length > 3 && (
        <div className="text-center mt-4">
          <button
            className="bg-blue-300 text-black px-4 py-2 rounded hover:bg-blue-500 transition duration-300"
            onClick={handleSeeMore}
          >
            See More
          </button>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
