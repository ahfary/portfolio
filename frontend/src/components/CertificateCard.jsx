import React from 'react';
import { motion } from 'framer-motion';

const CertificateCard = ({ cert, isHome = false }) => {
  return (
    <motion.div
      className="mb-4 break-inside-avoid relative group rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900/50"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {/* LOGIC: 
        - Jika isHome = true, gunakan 'aspect-video' (16:9) agar seragam landscape.
        - Jika isHome = false, biarkan default (ikut tinggi asli gambar) untuk efek masonry.
      */}
      <div className={`relative overflow-hidden ${isHome ? 'aspect-video' : ''}`}>
        <img
          src={cert.image}
          alt={cert.title}
          className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
            isHome ? 'h-full' : 'h-auto'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          <h3 className="text-white font-semibold text-sm sm:text-base leading-tight mb-1">
            {cert.title}
          </h3>
          <p className="text-[#a3a3a3] text-xs">
            {cert.issuer} • {cert.date}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default CertificateCard;