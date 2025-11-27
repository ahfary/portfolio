import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Calendar, Award, X } from 'lucide-react';
import { mockData } from '../data/mockData';
import CertificateCard from '../components/CertificateCard';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose
} from '../components/ui/dialog'; // Pastikan path ini benar sesuai struktur folder Anda
import { Button } from '../components/ui/button';

const CertificatesPage = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <Link 
          to="/" 
          className="inline-flex items-center text-[#a3a3a3] hover:text-[#3b82f6] transition-colors mb-8"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Home
        </Link>

        {/* Header */}
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

        {/* Masonry Grid */}
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {mockData.certificates.map((cert) => (
            <CertificateCard 
              key={cert.id} 
              cert={cert} 
              onClick={(data) => setSelectedCert(data)} // Pass handler click
            />
          ))}
        </div>

        {/* --- MODAL POPUP (Dialog) --- */}
        <Dialog open={!!selectedCert} onOpenChange={(open) => !open && setSelectedCert(null)}>
          <DialogContent className="max-w-3xl w-full bg-[#0a0a0a] border border-neutral-800 p-0 overflow-hidden text-white">
            
            {/* Tombol Close Custom (Optional, karena DialogContent biasanya sudah punya) */}
            <DialogClose className="absolute right-4 top-4 z-50 p-2 bg-black/50 rounded-full hover:bg-black/80 text-white transition-colors border border-neutral-700">
              <X size={16} />
            </DialogClose>

            {selectedCert && (
              <div className="flex flex-col md:flex-row h-full max-h-[85vh] md:max-h-[600px]">
                
                {/* Kiri: Gambar Full */}
                <div className="w-full md:w-3/5 bg-neutral-950 flex items-center justify-center p-4 border-b md:border-b-0 md:border-r border-neutral-800">
                  <img 
                    src={selectedCert.image} 
                    alt={selectedCert.title} 
                    className="max-w-full max-h-[300px] md:max-h-full object-contain shadow-2xl rounded-lg"
                  />
                </div>

                {/* Kanan: Detail Info */}
                <div className="w-full md:w-2/5 p-6 md:p-8 flex flex-col justify-center bg-[#0a0a0a]">
                  <DialogHeader className="mb-6 text-left">
                    <DialogTitle className="text-2xl font-bold leading-tight mb-2">
                      {selectedCert.title}
                    </DialogTitle>
                    <DialogDescription className="text-[#a3a3a3] text-base">
                      Issued by <span className="text-white font-medium">{selectedCert.issuer}</span>
                    </DialogDescription>
                  </DialogHeader>

                  <div className="space-y-6">
                    <div className="flex items-center gap-3 text-[#a3a3a3]">
                      <Calendar size={18} className="text-[#3b82f6]" />
                      <span>Issued on {selectedCert.date}</span>
                    </div>
                    
                    {/* Bisa tambah deskripsi kalau ada di data */}
                    {/* <p className="text-sm text-neutral-400 leading-relaxed">
                       Deskripsi singkat tentang sertifikasi ini...
                    </p> */}

                    <div className="pt-4">
                      {selectedCert.pdfLink ? (
                        <Button 
                          className="w-full bg-[#3b82f6] hover:bg-[#2563eb] text-white gap-2"
                          onClick={() => window.open(selectedCert.pdfLink, '_blank')}
                        >
                          <ExternalLink size={18} />
                          View Original PDF
                        </Button>
                      ) : (
                        <Button variant="secondary" disabled className="w-full gap-2 opacity-50 cursor-not-allowed">
                          <Award size={18} />
                          Credential Verified
                        </Button>
                      )}
                    </div>
                  </div>
                </div>

              </div>
            )}
          </DialogContent>
        </Dialog>

      </div>
    </div>
  );
};

export default CertificatesPage;