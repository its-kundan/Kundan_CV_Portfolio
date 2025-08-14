"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  FaGithub, 
  FaLinkedinIn, 
  FaEnvelope, 
  FaYoutube, 
  FaMapMarkerAlt, 
  FaPhone,
  FaGlobe,
  FaDownload
} from 'react-icons/fa';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';

const ContactSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [useDigest, setUseDigest] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify({
      ...data,
      useDigest
    });
    const endpoint = "/api/messages";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    try {
      const response = await fetch(endpoint, options);
      const resData = await response.json();

      if (response.status === 200) {
        console.log("Message sent.");
        setEmailSubmitted(true);
        e.target.reset();
      } else {
        setError(resData.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <MdEmail className="text-2xl" />,
      title: "Email",
      value: "kundan51kk@gmail.com",
      link: "mailto:kundan51kk@gmail.com",
      color: "emerald",
      borderColor: "border-emerald-500/20",
      hoverBorderColor: "hover:border-emerald-500/40",
      bgColor: "bg-emerald-500/20",
      hoverBgColor: "group-hover:bg-emerald-500/30",
      textColor: "text-emerald-400"
    },
    {
      icon: <MdLocationOn className="text-2xl" />,
      title: "Location",
      value: "Hyderabad, India",
      link: "#",
      color: "purple",
      borderColor: "border-purple-500/20",
      hoverBorderColor: "hover:border-purple-500/40",
      bgColor: "bg-purple-500/20",
      hoverBgColor: "group-hover:bg-purple-500/30",
      textColor: "text-purple-400"
    },
    {
      icon: <FaGlobe className="text-2xl" />,
      title: "Portfolio",
      value: "kundan-cv-portfolio.vercel.app",
      link: "https://kundan-cv-portfolio.vercel.app",
      color: "orange",
      borderColor: "border-orange-500/20",
      hoverBorderColor: "hover:border-orange-500/40",
      bgColor: "bg-orange-500/20",
      hoverBgColor: "group-hover:bg-orange-500/30",
      textColor: "text-orange-400"
    }
  ];

  const socialLinks = [
    {
      icon: <FaGithub size={24} />,
      href: "https://github.com/its-kundan",
      label: "GitHub",
      color: "gray",
      borderColor: "border-gray-500/20",
      hoverBorderColor: "hover:border-gray-500/40",
      textColor: "text-gray-400",
      hoverTextColor: "group-hover:text-gray-300"
    },
    {
      icon: <FaLinkedinIn size={24} />,
      href: "https://www.linkedin.com/in/its-kundan/",
      label: "LinkedIn",
      color: "blue",
      borderColor: "border-blue-500/20",
      hoverBorderColor: "hover:border-blue-500/40",
      textColor: "text-blue-400",
      hoverTextColor: "group-hover:text-blue-300"
    },
    {
      icon: <FaEnvelope size={24} />,
      href: "mailto:kundan51kk@gmail.com",
      label: "Email",
      color: "emerald",
      borderColor: "border-emerald-500/20",
      hoverBorderColor: "hover:border-emerald-500/40",
      textColor: "text-emerald-400",
      hoverTextColor: "group-hover:text-emerald-300"
    },
    {
      icon: <FaYoutube size={24} />,
      href: "https://www.youtube.com/channel/YourChannel",
      label: "YouTube",
      color: "red",
      borderColor: "border-red-500/20",
      hoverBorderColor: "hover:border-red-500/40",
      textColor: "text-red-400",
      hoverTextColor: "group-hover:text-red-300"
    }
  ];

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden" id="contact">
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl md:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Get In
            </span>
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent ml-6">
              Touch
            </span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Ready to collaborate on your next project? Let's discuss how we can bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Let's Connect
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm currently looking for new opportunities. Whether you have a question, 
                want to collaborate, or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                                     className={`bg-gradient-to-br from-gray-900/30 to-gray-800/30 backdrop-blur-sm border ${info.borderColor} rounded-2xl p-6 ${info.hoverBorderColor} transition-all duration-500 group cursor-pointer`}
                   onClick={() => window.open(info.link, '_blank')}
                 >
                   <div className="flex items-center space-x-4">
                     <div className={`p-3 rounded-xl ${info.bgColor} border ${info.borderColor.replace('/20', '/30')} ${info.hoverBgColor} transition-all duration-300`}>
                       <div className={info.textColor}>
                         {info.icon}
                       </div>
                     </div>
                     <div className="flex-1">
                       <h4 className="text-gray-300 font-semibold text-lg">{info.title}</h4>
                       <p className={`${info.textColor} font-medium`}>{info.value}</p>
                     </div>
                   </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-gray-200">Follow Me</h4>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={social.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                                             className={`p-4 rounded-2xl bg-gradient-to-br from-gray-900/30 to-gray-800/30 backdrop-blur-sm border ${social.borderColor} ${social.hoverBorderColor} transition-all duration-300 group block`}
                     >
                       <div className={`${social.textColor} ${social.hoverTextColor} transition-colors duration-300`}>
                         {social.icon}
                       </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Resume Download */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-6 hover:border-emerald-500/40 transition-all duration-500"
            >
              <div className="flex items-center justify-between">
                <div>
                                     <h4 className="text-emerald-400 font-semibold text-lg mb-2">View Resume</h4>
                   <p className="text-gray-300 text-sm">View my detailed resume on Google Drive</p>
                </div>
                                 <Link
                   href="https://drive.google.com/file/d/12du4rhSkCaSU8L8Kb5QBF58iR6gIqSfb/view?usp=drive_link"
                   target="_blank"
                   className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/30 hover:bg-emerald-500/30 transition-all duration-300"
                 >
                  <FaDownload className="text-emerald-400 text-xl" />
                </Link>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-gray-900/30 to-gray-800/30 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-8 hover:border-emerald-500/40 transition-all duration-500">
              {emailSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center space-y-4"
                >
                  <div className="w-16 h-16 bg-emerald-500/20 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto">
                    <div className="text-emerald-400 text-2xl">✓</div>
                  </div>
                  <div>
                    <h4 className="text-emerald-400 font-semibold text-xl mb-2">
                      {useDigest ? 'Message Stored!' : 'Message Sent!'}
                    </h4>
                    <p className="text-gray-300">
                      {useDigest 
                        ? 'Your message has been stored for the daily digest. I\'ll get back to you soon!'
                        : 'Thank you for reaching out! I\'ll get back to you as soon as possible.'
                      }
                    </p>
                  </div>
                  <button
                    onClick={() => setEmailSubmitted(false)}
                    className="text-emerald-400 hover:text-emerald-300 text-sm font-medium transition-colors duration-300"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-200 mb-2">Send a Message</h3>
                    <p className="text-gray-400">I'd love to hear from you!</p>
                  </div>

                  <div className="flex items-center gap-3 mb-6">
                    <label className="flex items-center gap-3 text-gray-300 text-sm cursor-pointer">
                      <input
                        type="checkbox"
                        checked={useDigest}
                        onChange={(e) => setUseDigest(e.target.checked)}
                        className="rounded border-gray-600 bg-gray-800/50 text-emerald-400 focus:ring-emerald-500 focus:ring-2"
                      />
                      <span>📬 Send as daily digest (reduces email clutter)</span>
                    </label>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
                        Your Email
                      </label>
                      <input
                        name="email"
                        type="email"
                        id="email"
                        required
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-gray-100 placeholder-gray-400 focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-gray-300 text-sm font-medium mb-2">
                        Subject
                      </label>
                      <input
                        name="subject"
                        type="text"
                        id="subject"
                        required
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-gray-100 placeholder-gray-400 focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300"
                        placeholder="What's this about?"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">
                        Message
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-gray-100 placeholder-gray-400 focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 resize-none"
                        placeholder="Tell me about your project or just say hello..."
                      />
                    </div>

                    {error && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-red-500/10 border border-red-500/20 rounded-xl p-4"
                      >
                        <p className="text-red-400 text-sm">{error}</p>
                      </motion.div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-4 px-6 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-[1.02] focus:ring-4 focus:ring-emerald-500/20 ${
                        isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span>Sending...</span>
                        </div>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
