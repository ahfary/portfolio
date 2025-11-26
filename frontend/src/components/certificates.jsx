import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Award } from 'lucide-react';
import CertificateCard from './CertificateCard';

const Certificates = ({ data }) => {
  // Ambil 3 sertifikat pertama saja untuk di Home
  const displayedCerts = data.slice(0, 3);

  return (
    <motion.section
      className="mb-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-2">
          <Award className="text-[#3b82f6]" /> Certificates
        </h2>
        <Link
          to="/certificates"
          className="flex items-center gap-1.5 text-[#3b82f6] hover:text-[#2563eb] transition-colors text-sm font-medium group"
        >
          View All
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Grid Layout tetap sama, tapi Card-nya kita paksa mode Home */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {displayedCerts.map((cert) => (
          <CertificateCard 
            key={cert.id} 
            cert={cert} 
            isHome={true} // <--- INI KUNCINYA (Supaya Landscape semua)
          />
        ))}
      </div>
    </motion.section>
  );
};

export default Certificates;