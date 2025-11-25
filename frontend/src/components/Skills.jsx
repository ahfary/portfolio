import React from 'react';
import { motion } from 'framer-motion';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';

const Skills = ({ data }) => {
  const getIcon = (iconName) => {
    if (iconName.startsWith('Fa')) {
      const IconComponent = FaIcons[iconName];
      return IconComponent ? <IconComponent size={32} /> : null;
    } else if (iconName.startsWith('Si')) {
      const IconComponent = SiIcons[iconName];
      return IconComponent ? <IconComponent size={32} /> : null;
    }
    return null;
  };

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
        className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
          {data.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center gap-3 p-4 bg-neutral-800/50 rounded-lg border border-neutral-700 hover:border-[#3b82f6] hover:bg-neutral-800 transition-all duration-300 group"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -4 }}
            >
              <div className="text-[#a3a3a3] group-hover:text-[#3b82f6] transition-colors duration-300">
                {getIcon(skill.icon)}
              </div>
              <span className="text-xs font-medium text-[#a3a3a3] group-hover:text-white transition-colors text-center">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Skills;