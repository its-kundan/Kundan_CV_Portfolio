"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { servicesData } from "../../public/services";

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Services I Provide</h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Comprehensive solutions for modern web and mobile applications, from concept to deployment
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{service.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-1 sm:space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-400 text-xs sm:text-sm">
                    <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-purple-500 rounded-full mr-2 sm:mr-3 flex-shrink-0"></span>
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
