import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const ProjectCard = ({ project }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      className="bg-[#171717] border border-[#262626] rounded-lg overflow-hidden group hover:border-[#3b82f6] transition-all duration-300"
      variants={cardVariants}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      <div className="relative overflow-hidden bg-[#0a0a0a]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <ExternalLink className="text-white" size={24} />
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold mb-2 group-hover:text-[#3b82f6] transition-colors">
          {project.title}
        </h3>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="text-xs px-2 py-1 bg-[#262626] text-[#a3a3a3] rounded border border-[#333333]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;