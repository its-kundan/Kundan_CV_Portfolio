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
  {
    id: 8,
    title: "Drive Storage",
    description: "A cloud storage web application that clones the functionality of Google Drive.",
    image: "/images/projects/drive.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/its-kundan/Drive-storage",
    previewUrl: "https://drive-storage.vercel.app/",
  },
  {
    id: 9,
    title: "Super Chats",
    description: "A real-time chat application allowing users to communicate instantly over the web.",
    image: "/images/projects/chat1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/its-kundan/Super-Chats",
    previewUrl: "https://super-chats.vercel.app/",
  }
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
