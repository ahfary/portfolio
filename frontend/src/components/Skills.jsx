import React from 'react';
import { motion } from 'framer-motion';

const Skills = ({ data }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.section
      className="mb-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-6">Tech Stack</h2>
      <motion.div
        className="bg-[#171717] border border-[#262626] rounded-lg p-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="flex flex-wrap gap-3">
          {data.map((skill, index) => (
            <motion.div
              key={index}
              className="px-4 py-2 bg-[#262626] text-white text-sm font-medium rounded-lg border border-[#333333] hover:border-[#3b82f6] hover:bg-[#1e293b] transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Skills;