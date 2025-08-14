"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "About",
    path: "/#about",
  },
  {
    title: "Projects",
    path: "/#projects",
  },
  {
    title: "Experiences",
    path: "experiences",
  },
  {
    title: "Achievements",
    path: "achievements",
  },
  {
    title: "Blogs",
    path: "/blogs",
  },
  {
    title: "Contact",
    path: "/#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navbarRef = useRef(null);
  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navbarRef.current && 
        !navbarRef.current.contains(event.target) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target) &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setNavbarOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav
      ref={navbarRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-gray-900/95 backdrop-blur-xl border-b border-gray-700/50 shadow-2xl' 
          : 'bg-gray-900/80 backdrop-blur-md border-b border-gray-700/30'
      }`}
    >
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link 
          href={"/"} 
          className="text-2xl md:text-5xl font-bold premium-text-gradient hover:scale-105 transition-transform duration-300"
        >
          Kundan Kumar
        </Link>
        
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              ref={menuButtonRef}
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border border-gray-600 text-gray-300 hover:text-white hover:border-purple-500 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border border-gray-600 text-gray-300 hover:text-white hover:border-purple-500 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {navbarOpen ? (
        <div className="md:hidden">
          <MenuOverlay ref={menuRef} links={navLinks} />
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;
