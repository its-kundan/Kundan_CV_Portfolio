"use client";
import React, { useTransition, useState } from "react";
// import Image from "next/image";
import TabButton from "./TabButton";
import Aboutpic from "./Aboutpic"
const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Sequelize</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>National Institute of Technology, Agartala</li>
        <li>Allen Career Institute, Kota</li>
        <li>R.P.S. Public School, Bihar Sharif</li>
        <li>GoldensBells Public School, Bihar Sharif</li>
        <li>JEE Zone, Bihar Sharif</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>SDE Internship Certificate</li>
      </ul>
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
    <section className="text-white py-20" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-2 px-2 xl:gap-16 sm:py-16 xl:px-16">
        {/* <Image
          src="/images/about-image.png"
          width={600}
          height={600}
          alt="DevCard"
        /> */}
        <Aboutpic />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
  Hi, I&apos;m <b style={{ color: '#DFFF11' }}>Kundan Kumar</b>, a dedicated <b style={{ color: '#DFFF11' }}>Full-Stack Developer</b> with
  expertise in the <b style={{ color: '#FF00FF' }}>MERN stack, Next.js, Tailwind CSS, PostgreSQL, and
  AWS</b>. I&apos;m a <b style={{ color: '#DFFF11' }}>final-year student at NIT Agartala</b> with a passion for
  building scalable web applications and solving problems in <b style={{ color: '#FF00FF' }}>web
  development, data structures, algorithms, and blockchain</b>. I have
  hands-on experience with projects like <b style={{ color: '#FF00FF' }}>Medical Management and a Job
  Portal</b>, and I’ve solved over <b style={{ color: '#FF00FF' }}>550 problems on LeetCode</b>, earning the
  title of <b style={{ color: '#AA00FF' }}>LeetCode Knight</b>. My journey includes exploring <b style={{ color: '#FF00FF' }}>Web3</b>,
  contributing to <b style={{ color: '#FF00FF' }}>open source</b>, and participating in hackathons like
  <b style={{ color: '#FF00FF' }}>Hacktoberfest and Flipkart Grid</b>. I’m always eager to learn and
  innovate, striving to grow as a developer and make meaningful
  contributions to the tech community.
</p>


          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
