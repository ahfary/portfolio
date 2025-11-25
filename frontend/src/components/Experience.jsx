import React from 'react';
import { motion } from 'framer-motion';
import ExperienceItem from './ExperienceItem';

const Experience = ({ data }) => {
  return (
    <motion.section
      className="mb-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-6">Experience</h2>
      <div className="space-y-4">
        {data.map((exp, index) => (
          <ExperienceItem key={index} experience={exp} />
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;