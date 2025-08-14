"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { cv2_sde } from "../../public/resume";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(120,119,198,0.1),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center justify-items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="col-span-7 text-center lg:text-left w-full max-w-2xl lg:max-w-none"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <span className="text-lg md:text-xl text-gray-400 font-medium">
                Welcome to my portfolio
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="text-white">Hello, I&apos;m </span>
              <br />
              <div className="h-20 md:h-24 lg:h-28 overflow-hidden">
                <TypeAnimation
                  sequence={[
                    "Kundan Kumar",
                    2000,
                    "Web Developer",
                    2000,
                    "App Developer",
                    2000,
                    "Tech Explorer",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent"
                  repeat={Infinity}
                />
              </div>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              A passionate full-stack developer skilled in MERN stack, Next.js, and AWS, 
              with a focus on building scalable applications and solving complex problems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <Link
                href="/#contact"
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
              >
                Hire Me
              </Link>
              
              <Link
                href={cv2_sde}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
              >
                Resume
              </Link>
              
              <Link
                href="https://linktr.ee/its_kundan"
                target="_blank"
                className="px-6 py-3 bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg hover:shadow-2xl hover:shadow-purple-500/20 hover:border-purple-500/50 transition-all duration-500 text-white"
              >
                Links
              </Link>
              
              <Link
                href="/clone"
                className="px-6 py-3 bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg hover:shadow-2xl hover:shadow-purple-500/20 hover:border-purple-500/50 transition-all duration-500 text-white relative overflow-hidden group"
              >
                <span className="relative z-10">AI Clone</span>
                <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px bg-gradient-to-r from-transparent via-teal-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="col-span-5 flex flex-col items-center justify-center w-full"
          >
            <div className="relative flex flex-col items-center">
              {/* Jarvis-style holographic rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute w-80 h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] rounded-full"
              >
                <div className="absolute inset-0 rounded-full border-2 border-blue-500/40 opacity-60" />
                <div className="absolute inset-2 rounded-full border border-cyan-400/30 opacity-40" />
                <div className="absolute inset-4 rounded-full border border-blue-300/20 opacity-30" />
              </motion.div>
              
              {/* Scanning arc */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute w-80 h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px]"
              >
                <div className="absolute inset-0 rounded-full border-t-2 border-r-2 border-blue-400 opacity-80" style={{ clipPath: 'polygon(50% 50%, 100% 0%, 100% 100%, 0% 100%, 0% 0%)' }} />
              </motion.div>
              
              {/* Data stream lines */}
              <div className="absolute w-80 h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px]">
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      rotate: 360,
                      opacity: [0.3, 1, 0.3]
                    }}
                    transition={{ 
                      rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                      opacity: { duration: 2, delay: i * 0.2, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="absolute w-full h-full"
                    style={{
                      transformOrigin: 'center',
                      transform: `rotate(${i * 30}deg)`
                    }}
                  >
                    <div className="absolute top-0 left-1/2 w-px h-8 bg-gradient-to-b from-blue-400 to-transparent" />
                  </motion.div>
                ))}
              </div>
              
              {/* Holographic grid */}
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.4, 0.7, 0.4]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute w-72 h-72 md:w-88 md:h-88 lg:w-[380px] lg:h-[380px] rounded-full"
              >
                <div className="absolute inset-0 rounded-full border border-blue-300/20" />
                <div className="absolute inset-4 rounded-full border border-cyan-400/15" />
                <div className="absolute inset-8 rounded-full border border-blue-200/10" />
              </motion.div>
              
              {/* Main image container with Jarvis-style border */}
              <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 z-10">
                {/* Holographic border effect */}
                <motion.div
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.02, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="absolute inset-0 rounded-full p-1"
                >
                  <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 p-0.5">
                    <div className="w-full h-full rounded-full bg-black" />
                  </div>
                </motion.div>
                
                {/* Inner glow */}
                <motion.div
                  animate={{ 
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-400/20 blur-sm"
                />
                
                {/* Image */}
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/images/hero-image.png"
                    alt="Kundan Kumar"
                    fill
                    className="rounded-full object-cover"
                    priority
                    sizes="(max-width: 768px) 256px, (max-width: 1024px) 288px, 320px"
                    quality={90}
                  />
                  
                  {/* Holographic overlay */}
                  <motion.div
                    animate={{ 
                      opacity: [0, 0.1, 0],
                      scale: [1, 1.02, 1]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-cyan-300/5 to-blue-500/10 rounded-full"
                  />
                </div>
              </div>
              
              {/* Jarvis-style data readouts */}
              <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="text-xs text-blue-400 font-mono bg-black/50 px-2 py-1 rounded border border-blue-400/30"
                >
                  SCANNING...
                </motion.div>
              </div>
              
              <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2">
                <motion.div
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="text-xs text-cyan-400 font-mono bg-black/50 px-2 py-1 rounded border border-cyan-400/30"
                >
                  IDENTITY CONFIRMED
                </motion.div>
              </div>
              
              <div className="absolute top-1/2 -right-20 transform -translate-y-1/2">
                <motion.div
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  className="text-xs text-blue-300 font-mono bg-black/50 px-2 py-1 rounded border border-blue-300/30"
                >
                  STATUS: ONLINE
                </motion.div>
              </div>
              
              <div className="absolute top-1/2 -left-20 transform -translate-y-1/2">
                <motion.div
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="text-xs text-cyan-300 font-mono bg-black/50 px-2 py-1 rounded border border-cyan-300/30"
                >
                  ACCESS: GRANTED
                </motion.div>
              </div>
              
              {/* Floating holographic elements */}
              <motion.div
                animate={{ 
                  y: [-5, 5, -5],
                  rotate: [0, 360]
                }}
                transition={{ 
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 10, repeat: Infinity, ease: "linear" }
                }}
                className="absolute -top-8 -right-8 w-4 h-4 bg-blue-400 rounded-full opacity-60"
              />
              <motion.div
                animate={{ 
                  y: [5, -5, 5],
                  rotate: [360, 0]
                }}
                transition={{ 
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 8, repeat: Infinity, ease: "linear" }
                }}
                className="absolute -bottom-8 -left-8 w-3 h-3 bg-cyan-400 rounded-full opacity-60"
              />
              
              {/* Name with Jarvis-style glow */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-8 text-3xl md:text-4xl lg:text-5xl font-bold text-center relative z-10"
              >
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg drop-shadow-blue-400/50">
                  Kundan Kumar
                </span>
              </motion.h2>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

