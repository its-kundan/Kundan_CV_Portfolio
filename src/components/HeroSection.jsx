"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { cv2_sde } from "../../public/resume";

const HeroSection = () => {
  return (
    <section
  className="flex flex-col justify-center lg:py-0"
  style={{
    marginTop: "-10vh",
    minHeight: '100vh' // Default to full screen height
  }}
>
  {/* This setup ensures the content is vertically centered in the section */}
  <div className="grid grid-cols-1 sm:grid-cols-12 mx-auto w-full">
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
    >
      <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-600">
          Hello, I&apos;m{" "}
        </span>
        <br />
        <div style={{ height: "100px", overflow: "hidden" }}>
          <TypeAnimation
            sequence={[
              "Kundan Kumar",
              1000,
              "Web Developer",
              1000,
              "App Developer",
              1000,
              "Tech-Explorer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>
      </h1>

      <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
        A passionate full-stack developer skilled in MERN stack, Next.js,
        and AWS, with a focus on building scalable applications and solving
        complex problems.
      </p>
      <div className="px-1 flex flex-wrap items-center justify-center sm:justify-start space-x-2">
        <Link
          href="/#contact"
          className="text-sm sm:text-base py-2 px-4 inline-block rounded-full bg-gradient-to-br from-blue-500 to-green-500 hover:bg-slate-200 text-white text-center"
        >
          HireMe
        </Link>
        <Link
          href={cv2_sde}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm sm:text-base py-2 px-4 inline-block rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white text-center"
        >
          Resume
        </Link>
        <Link
          href="https://linktr.ee/its_kundan"
          target="_blank"
          className="text-sm sm:text-base py-2 px-4 inline-block rounded-full bg-gradient-to-br from-blue-500 to-red-500 hover:bg-slate-200 text-white text-center"
        >
          Links
        </Link>
        <button className="px-8 py-2 rounded-full relative bg-slate-700 text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600">
  <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
  <span className="relative z-20">
  <Link
          href="/clone"
        >
          AI Clone
        </Link>
    {/* AI Clone */}
  </span>
</button>
        
      </div>
    </motion.div>
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="col-span-4 place-self-center mt-4 lg:mt-0"
    >
      <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative">
        <Image
          src="/images/hero-image.png"
          alt="hero image"
          fill
          style={{ objectFit: 'cover' }}
          className="rounded-full" // Ensuring the image is fully rounded
        />
      </div>
    </motion.div>
  </div>
</section>

    
  );
};

export default HeroSection;

