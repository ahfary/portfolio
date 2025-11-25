import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const Education = ({ data }) => {
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
            className="bg-[#171717] border border-[#262626] rounded-lg p-5 hover:border-[#3b82f6] transition-colors duration-300"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex items-start gap-4">
              <div className="mt-1 p-2 bg-[#262626] rounded-lg">
                <GraduationCap size={20} className="text-[#3b82f6]" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-1">{edu.school}</h3>
                <p className="text-[#a3a3a3] text-sm mb-2">{edu.field}</p>
                <p className="text-[#6b7280] text-sm">{edu.period}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Education;