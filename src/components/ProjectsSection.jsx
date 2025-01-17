"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { projectsData } from "./../../public/projectdata";



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

  // Show 4 projects on mobile, 6 on larger screens, or all when "See More" is clicked
  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, isMobile ? 4 : 6);

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="pt-20">
  <h2 className="text-center text-4xl font-bold text-white mt-1 mb-4 md:mb-6">
    My Projects
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
    {/* <ProjectTag
      onClick={handleTagChange}
      name="ECE"
      isSelected={tag === "ECE"}
    />
    <ProjectTag
      onClick={handleTagChange}
      name="Analytics"
      isSelected={tag === "Analytics"}
    /> */}
    {/*  */}
  </div>
</div>






  <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
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
          tech = {project.tech}
        />
      </motion.li>
    ))}
  </ul>
  {!showAll && filteredProjects.length > (isMobile ? 4 : 6) && (
    <div className="text-center mt-4">
      {/* <button
        className="bg-blue-300 text-black px-4 py-2 rounded hover:bg-blue-500 transition duration-300"
        onClick={handleSeeMore}
      >
        See More
      </button> */}
      <button onClick={handleSeeMore} className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          See More...
        </span>
        </button>   
    </div>
  )}
</section>

  );
};

export default ProjectsSection;
