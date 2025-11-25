import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const ExperienceItem = ({ experience }) => {
  return (
    <motion.div
      className="bg-[#171717] border border-[#262626] rounded-lg p-5 hover:border-[#3b82f6] transition-colors duration-300"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-start gap-4">
        <div className="mt-1 p-2 bg-[#262626] rounded-lg">
          <Briefcase size={20} className="text-[#3b82f6]" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-1">{experience.company}</h3>
          <p className="text-[#a3a3a3] text-sm mb-2">{experience.role}</p>
          <p className="text-[#6b7280] text-sm">{experience.period}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceItem;