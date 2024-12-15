"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const projectsData = [
  {
    id: 1,
    title: "Next Portfolio Website",
    description: "A personal portfolio website built using React and Tailwind CSS.",
    image: "/images/projects/portfolio.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/its-kundan/portfolio",
    previewUrl: "https://kundan-portfolio.vercel.app/",
  },
  {
    id: 2,
    title: "Job Portal Website",
    description: "A MERN stack application for job seekers and recruiters.",
    image: "/images/projects/technoloop.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/its-kundan/job-portal",
    previewUrl: "https://job-portal-kundan.vercel.app/",
  },
  // {
  //   id: 3,
  //   title: "Medical Management System",
  //   description: "A full-stack medical management application using MERN stack.",
  //   image: "/images/projects/3.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "https://github.com/its-kundan/medical-management",
  //   previewUrl: "https://medical-management.vercel.app/",
  // },
  {
    id: 4,
    title: "Sudoku Solver",
    description: "A sudoku solver web application.",
    image: "/images/projects/sudoku.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/its-kundan/sudoku-solver",
    previewUrl: "https://suduku-solver.vercel.app/",
  },
  {
    id: 5,
    title: "Luminosity Drone",
    description: "A robotics project for light detection using OpenCV and Python.",
    image: "/images/projects/drone.webp",
    tag: ["All", "Robotics"],
    gitUrl: "https://github.com/its-kundan/luminosity-drone",
    previewUrl: "#",
  },
  {
    id: 6,
    title: "Coin Toss Game",
    description: "A fun web-based coin toss game using HTML, CSS, and JavaScript.",
    image: "/images/projects/coin.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/its-kundan/coin-toss",
    previewUrl: "https://coin-toss.vercel.app/",
  },
  // {
  //   id: 7,
  //   title: "E-commerce Application",
  //   description: "A scalable e-commerce platform using React and Firebase.",
  //   image: "/images/projects/6.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "https://github.com/its-kundan/e-commerce",
  //   previewUrl: "https://e-commerce.vercel.app/",
  // },
];

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
  <div className="text-white flex flex-wrap justify-center items-center gap-2 py-6">
  <ProjectTag
    onClick={handleTagChange}
    name="All"
    isSelected={tag === "All"}
    className="w-1/3 sm:w-auto"
  />
  <ProjectTag
    onClick={handleTagChange}
    name="Web"
    isSelected={tag === "Web"}
    className="w-1/3 sm:w-auto"
  />
  <ProjectTag
    onClick={handleTagChange}
    name="Mobile"
    isSelected={tag === "Mobile"}
    className="w-1/3 sm:w-auto"
  />
  <ProjectTag
    onClick={handleTagChange}
    name="Robotics"
    isSelected={tag === "Robotics"}
    className="w-1/3 sm:w-auto"
  />
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
        />
      </motion.li>
    ))}
  </ul>
  {!showAll && filteredProjects.length > (isMobile ? 4 : 6) && (
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
