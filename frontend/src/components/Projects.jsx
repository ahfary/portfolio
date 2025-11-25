import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const Projects = ({ data }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
      <h2 className="text-2xl sm:text-3xl font-bold mb-6">Projects</h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {data.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Projects;