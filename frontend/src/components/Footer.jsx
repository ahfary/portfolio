import React from 'react';
import { motion } from 'framer-motion';
import { Github, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="py-8 border-t border-[#262626] mt-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-6">
          <motion.a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#a3a3a3] hover:text-[#3b82f6] transition-colors"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={20} />
          </motion.a>
          <motion.a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#a3a3a3] hover:text-[#3b82f6] transition-colors"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Instagram size={20} />
          </motion.a>
          <motion.a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#a3a3a3] hover:text-[#3b82f6] transition-colors"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin size={20} />
          </motion.a>
        </div>
        <p className="text-[#6b7280] text-sm">
          &copy; Copyright {currentYear} - Ahmad Faqih Abqory - All Rights Reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;