import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { mockData } from '../data/mockData';
import CertificateCard from '../components/CertificateCard';

const CertificatesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link 
          to="/" 
          className="inline-flex items-center text-[#a3a3a3] hover:text-[#3b82f6] transition-colors mb-8"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center sm:text-left"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Certificates & Awards</h1>
          <p className="text-[#a3a3a3] text-lg max-w-2xl">
            Koleksi sertifikasi kompetensi, penghargaan, dan pencapaian selama perjalanan belajar saya.
          </p>
        </motion.div>

        {/* MASONRY LAYOUT (Pinterest Style) */}
        {/* columns-2 (HP) dan columns-3 (Desktop) adalah kuncinya */}
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {mockData.certificates.map((cert) => (
            <CertificateCard key={cert.id} cert={cert} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default CertificatesPage;