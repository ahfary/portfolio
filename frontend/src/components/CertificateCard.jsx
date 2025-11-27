import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Maximize2 } from 'lucide-react';

const CertificateCard = ({ cert, isHome = false, onClick }) => {
  
  const CardWrapper = ({ children }) => {
    // 1. Jika ada onClick (Mode Modal), jadikan div clickable
    if (onClick) {
      return (
        <div onClick={() => onClick(cert)} className="block cursor-pointer relative group">
          {children}
          {/* Icon Expand saat hover */}
          <div className="absolute top-2 right-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 p-1.5 rounded-full text-white backdrop-blur-sm">
            <Maximize2 size={16} />
          </div>
        </div>
      );
    }
    
    // 2. Jika tidak ada onClick (Mode Link Biasa/Home), buka tab baru
    if (cert.pdfLink) {
      return (
        <a 
          href={cert.pdfLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="block cursor-pointer"
        >
          {children}
        </a>
      );
    }
    return <div className="block">{children}</div>;
  };

  return (
    <CardWrapper>
      <motion.div
        className="mb-4 break-inside-avoid relative group rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900/50"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        <div className={`relative overflow-hidden ${isHome ? 'aspect-video' : ''}`}>
          <img
            src={cert.image}
            alt={cert.title}
            className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
              isHome ? 'h-full' : 'h-auto'
            }`}
            onError={(e) => {
              e.target.src = 'https://placehold.co/600x400/171717/FFF?text=Image+Not+Found';
            }}
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
            <h3 className="text-white font-semibold text-sm sm:text-base leading-tight mb-1 flex items-center gap-2">
              {cert.title}
            </h3>
            <p className="text-[#a3a3a3] text-xs">
              {cert.issuer} • {cert.date}
            </p>
          </div>
        </div>
      </motion.div>
    </CardWrapper>
  );
};

export default CertificateCard;