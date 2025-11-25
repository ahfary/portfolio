import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from './Header';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import Contact from './Contact';
import Footer from './Footer';
import { mockData } from '../data/mockData';

const Portfolio = () => {
  const [data] = useState(mockData);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      className="min-h-screen bg-[#0a0a0a] text-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div variants={sectionVariants}>
          <Header data={data.header} />
        </motion.div>

        <motion.div variants={sectionVariants}>
          <AboutMe data={data.about} />
        </motion.div>

        <motion.div variants={sectionVariants}>
          <Projects data={data.projects} />
        </motion.div>

        <motion.div variants={sectionVariants}>
          <Experience data={data.experience} />
        </motion.div>

        <motion.div variants={sectionVariants}>
          <Education data={data.education} />
        </motion.div>

        <motion.div variants={sectionVariants}>
          <Skills data={data.skills} />
        </motion.div>

        <motion.div variants={sectionVariants}>
          <Contact />
        </motion.div>

        <Footer />
      </div>
    </motion.div>
  );
};

export default Portfolio;