import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

const Education = ({ data }) => {
  const handleMapClick = (mapUrl) => {
    window.open(mapUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.section
      className="mb-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-6">Education</h2>
      <div className="space-y-4">
        {data.map((edu, index) => (
          <motion.div
            key={index}
            className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-5 hover:border-[#3b82f6] transition-colors duration-300"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-4 flex-1">
                <div className="mt-1 p-2 bg-neutral-800 rounded-lg">
                  <GraduationCap size={20} className="text-[#3b82f6]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-1">{edu.school}</h3>
                  <p className="text-[#a3a3a3] text-sm mb-2">{edu.field}</p>
                  <p className="text-[#6b7280] text-sm">{edu.period}</p>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="bg-transparent border-neutral-800 hover:bg-neutral-800 hover:border-[#3b82f6] text-[#a3a3a3] hover:text-white flex-shrink-0"
                onClick={() => handleMapClick(edu.mapUrl)}
              >
                <MapPin size={16} className="mr-1" />
                Location
                <ExternalLink size={14} className="ml-1" />
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Education;