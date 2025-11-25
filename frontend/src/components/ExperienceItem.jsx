import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar } from 'lucide-react';

const ExperienceItem = ({ experience }) => {
  return (
    <motion.div
      className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-6 hover:border-[#3b82f6] transition-all duration-300"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2 text-white">{experience.role}</h3>
        <p className="text-[#a3a3a3] text-base font-medium mb-3">{experience.organization}</p>
        <div className="flex flex-wrap items-center gap-4 text-sm text-[#6b7280]">
          <div className="flex items-center gap-1.5">
            <MapPin size={16} className="text-[#3b82f6]" />
            <span>{experience.location}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar size={16} className="text-[#3b82f6]" />
            <span>{experience.date}</span>
          </div>
        </div>
      </div>
      
      <ul className="space-y-2.5">
        {experience.points.map((point, idx) => (
          <li key={idx} className="flex items-start gap-3 text-[#a3a3a3] text-sm leading-relaxed">
            <span className="text-[#3b82f6] mt-1.5 flex-shrink-0">•</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ExperienceItem;