import React from 'react';
import { motion } from 'framer-motion';

const AboutMe = ({ data }) => {
  return (
    <motion.section
      className="mb-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-6">About Me</h2>
      <div className="bg-[#171717] border border-[#262626] rounded-lg p-6">
        <p className="text-[#a3a3a3] leading-relaxed">{data.description}</p>
      </div>
    </motion.section>
  );
};

export default AboutMe;