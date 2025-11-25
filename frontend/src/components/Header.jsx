import React from 'react';
import { motion } from 'framer-motion';
import { Github, Instagram, Download, MapPin } from 'lucide-react';
import { Button } from './ui/button';

const Header = ({ data }) => {
  const handleDownloadCV = () => {
    console.log('Download CV clicked');
    window.open('#', '_blank');
  };

  return (
    <motion.header
      className="mb-16 text-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="mb-6"
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <img
          src={data.profileImage}
          alt="Ahmad Faqih Abqory"
          className="w-32 h-32 rounded-full mx-auto object-cover border-2 border-[#262626]"
        />
      </motion.div>

      <h1 className="text-4xl sm:text-5xl font-bold mb-2">{data.name}</h1>
      <p className="text-xl text-[#a3a3a3] mb-2">{data.title}</p>
      
      <div className="flex items-center justify-center gap-2 text-[#a3a3a3] mb-6">
        <MapPin size={16} />
        <span>{data.location}</span>
      </div>

      <div className="flex items-center justify-center gap-4 mb-6">
        <Button
          variant="outline"
          size="sm"
          className="bg-transparent border-[#262626] hover:bg-[#171717] hover:border-[#3b82f6] text-white"
          onClick={() => window.open(data.social.instagram, '_blank')}
        >
          <Instagram size={18} className="mr-2" />
          Instagram
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="bg-transparent border-[#262626] hover:bg-[#171717] hover:border-[#3b82f6] text-white"
          onClick={() => window.open(data.social.github, '_blank')}
        >
          <Github size={18} className="mr-2" />
          GitHub
        </Button>
      </div>

      <Button
        className="bg-[#3b82f6] hover:bg-[#2563eb] text-white"
        onClick={handleDownloadCV}
      >
        <Download size={18} className="mr-2" />
        Download CV
      </Button>
    </motion.header>
  );
};

export default Header;