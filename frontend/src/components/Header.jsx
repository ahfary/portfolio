import React from 'react';
import { motion } from 'framer-motion';
import { Github, Instagram, Download, MapPin, Mail, Linkedin } from 'lucide-react';
import { Button } from './ui/button';

const Header = ({ data }) => {
  const handleDownloadCV = () => {
    // 1. Definisikan path file sesuai struktur folder public
    // public/assets/images/profile/cv.pdf -> /assets/images/profile/cv.pdf
    const cvUrl = '/assets/images/profile/cv.pdf';

    // 2. Buat elemen anchor (<a>) sementara
    const link = document.createElement('a');
    link.href = cvUrl;
    
    // 3. Set atribut download (bisa kasih nama custom untuk file hasil downloadnya)
    link.download = 'CV_Ahmad_Faqih_Abqory.pdf'; 
    
    // 4. Tambahkan ke body, klik otomatis, lalu hapus lagi
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.header
      className="mb-20 pt-10 text-center relative"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Background Glow Effect - Memberikan kedalaman */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -z-10 pointer-events-none" />

      {/* Profile Image Section */}
      <motion.div className="mb-8 relative inline-block" variants={itemVariants}>
        <div className="relative">
          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="relative z-10"
          >
            <img
              src={data.profileImage}
              alt={data.name}
              className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-neutral-900 shadow-2xl"
            />
          </motion.div>
          
          {/* Status Badge (Available for work) */}
          <motion.div 
            className="absolute bottom-2 right-2 z-20 bg-neutral-900 rounded-full p-1.5 border border-neutral-800 flex items-center gap-2 pr-3 shadow-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-[10px] font-medium text-white hidden sm:block">Open to work</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Text Info */}
      <motion.h1 
        className="text-4xl sm:text-6xl font-bold mb-3 tracking-tight bg-gradient-to-r from-white via-white to-neutral-400 bg-clip-text text-transparent"
        variants={itemVariants}
      >
        {data.name}
      </motion.h1>
      
      <motion.p 
        className="text-xl text-[#a3a3a3] mb-4 font-medium"
        variants={itemVariants}
      >
        {data.title}
      </motion.p>
      
      <motion.div 
        className="flex items-center justify-center gap-2 text-[#6b7280] mb-8 text-sm"
        variants={itemVariants}
      >
        <MapPin size={14} />
        <span>{data.location}</span>
      </motion.div>

      {/* Action Buttons */}
      <motion.div 
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
        variants={itemVariants}
      >
        <Button
          className="h-12 px-8 rounded-full bg-white text-black hover:bg-neutral-200 font-medium transition-all w-full sm:w-auto shadow-lg shadow-white/5"
          onClick={() => window.location.href = '/contact'}
        >
          <Mail size={18} className="mr-2" />
          Hire Me
        </Button>
        
        <Button
          variant="outline"
          className="h-12 px-8 rounded-full border-neutral-700 bg-neutral-900/50 hover:bg-neutral-800 hover:text-[#3b82f6] hover:border-neutral-600 text-white w-full sm:w-auto backdrop-blur-sm transition-all"
          onClick={handleDownloadCV}
        >
          <Download size={18} className="mr-2" />
          Download CV
        </Button>
      </motion.div>

      {/* Social Icons (Minimalist Row) */}
      <motion.div 
        className="mt-10 flex items-center justify-center gap-6"
        variants={itemVariants}
      >
        {[
          { icon: Github, link: data.social.github },
          { icon: Instagram, link: data.social.instagram },
          { icon: Linkedin, link: data.social.linkedin }
        ].map((social, idx) => (
          <motion.a
            key={idx}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6b7280] hover:text-white transition-colors p-2 hover:bg-neutral-800 rounded-full"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <social.icon size={24} />
          </motion.a>
        ))}
      </motion.div>
    </motion.header>
  );
};

export default Header;