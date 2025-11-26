import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import { mockData } from "../data/mockData";
import Certificates from "@/components/certificates";

const Home = () => {
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
        ease: "easeOut",
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
      <SEO
        title="Home"
        description="Selamat datang di portofolio Ahmad Faqih Abqory. Jelajahi proyek web development, sertifikasi, dan pengalaman kerja saya."
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div variants={sectionVariants}>
          <Header data={data.header} />
        </motion.div>

        <motion.div variants={sectionVariants}>
          <AboutMe data={data.about} />
        </motion.div>

        <motion.div variants={sectionVariants}>
          <Projects data={data.homeProjects} showViewAll={true} />
        </motion.div>

        <motion.div variants={sectionVariants}>
          <Experience data={data.experience} />
        </motion.div>

        <motion.div variants={sectionVariants}>
          <Education data={data.education} />
        </motion.div>

        <motion.div variants={sectionVariants}>
          <Certificates data={data.certificates} />
        </motion.div>

        <motion.div variants={sectionVariants}>
          <Skills data={data.skills} />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
