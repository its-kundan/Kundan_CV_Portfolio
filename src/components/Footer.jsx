"use client"
import React, { useState } from 'react';
import { FaTwitter, FaGithub, FaLinkedin, FaYoutube, FaTelegram } from 'react-icons/fa';

// Social media links array
const socialLinks = [
  {
    url: 'https://twitter.com/kundan_k_',
    icon: <FaTwitter size={24} />,
    label: 'Twitter'
  },
  {
    url: 'https://github.com/its-kundan',
    icon: <FaGithub size={24} />,
    label: 'GitHub'
  },
  {
    url: 'https://www.linkedin.com/in/its-kundan/',
    icon: <FaLinkedin size={24} />,
    label: 'LinkedIn'
  },
  {
    url: 'https://t.me/kundan51k',
    icon: <FaTelegram size={24} />,
    label: 'Telegram'
  },
  {
    url: 'https://youtube.com/@kundan515k?si=QrOXDna3RXuwNT87',
    icon: <FaYoutube size={24} />,
    label: 'YouTube'
  }
];

// Accordion component for Q&A
const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="my-2">
      <button
        className="text-white w-full text-left px-4 py-2 hover:bg-gray-700 rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
      </button>
      {isOpen && (
        <div className="px-4 py-2 text-gray-300 bg-gray-800 rounded-md">
          {answer}
        </div>
      )}
    </div>
  );
};

const Footer = () => {
  const navLinks = [
    { title: "About", path: "/#about" },
    { title: "Projects", path: "/#projects" },
    { title: "Experiences", path: "/experiences" },
    { title: "Achievements", path: "/achievements" },
    { title: "Blogs", path: "/blogs" },
    { title: "Contact", path: "/#contact" },
  ];

  const faq = [
    {
      question: "How can I contact you?",
      answer: "You can reach me via email at kundan51k@gmail.com or through my LinkedIn profile at https://www.linkedin.com/in/its-kundan/.",
    },
    {
      question: "What services do you offer?",
      answer: "I specialize in web development (MERN stack), app development, blockchain solutions, and database management. I also provide assistance with career counseling, AI-based projects, and optimization tasks.",
    },
    // {
    //   question: "Where are you located?",
    //   answer: "I am based in Patna, Bihar, India, but I work with clients globally.",
    // },
    // {
    //   question: "What technologies do you use?",
    //   answer: "I work with React.js, Next.js, Node.js, MongoDB, PostgreSQL, Tailwind CSS, AWS, and more.",
    // },
  ];

  return (
    <footer className="bg-gray-900 text-white p-4 z-30 relative">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
          {navLinks.map((link) => (
            <a key={link.title} href={link.path} className="hover:underline">
              {link.title}
            </a>
          ))}
        </div>

        {/* Accordion for FAQs */}
        <div className="w-full md:w-1/3 mt-4 md:mt-0" style={{ maxHeight: '300px', overflowY: 'auto' }}>
          {faq.map((item, index) => (
            <AccordionItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
              {link.icon}
            </a>
          ))}
        </div>

        {/* Copyright statement */}
        <p className="text-slate-400 mt-4 md:mt-0">All rights reserved © {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
