import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, ArrowRight } from 'lucide-react';
import { mockData } from '../data/mockData';
import { Button } from '../components/ui/button';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // 1. Ambil semua project
  const allProjects = [...(mockData.homeProjects || []), ...(mockData.allProjects || [])];
  
  // 2. Cari project yang sedang aktif
  const project = allProjects.find((p) => p.id === id);

  // 3. Logic "More Projects": Ambil project lain selain yang sedang dibuka
  //    (Di sini kita ambil 3 project pertama yang bukan project ini)
  const otherProjects = allProjects
    .filter((p) => p.id !== id) // Buang project yang sedang aktif
    .slice(0, 3); // Ambil 3 sisanya

  // Scroll ke atas setiap kali ID berubah (saat klik project lain di bawah)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white bg-[#0a0a0a]">
        <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
        <Button onClick={() => navigate('/projects')} variant="outline">
          Back to Projects
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-24 pb-16">
      <SEO 
        title={project.title} 
        description={project.description.substring(0, 150) + "..."} 
        type="article"
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Tombol Back */}
        <Link 
          to="/projects" 
          className="inline-flex items-center text-[#a3a3a3] hover:text-[#3b82f6] transition-colors mb-8"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Projects
        </Link>

        {/* --- MAIN CONTENT --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">{project.title}</h1>
          
          {/* Meta Info */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-y border-neutral-800 py-6 mb-8">
            <div>
              <p className="text-sm text-[#a3a3a3] mb-1">Category</p>
              <p className="font-medium">{project.category || 'Development'}</p>
            </div>
            <div>
              <p className="text-sm text-[#a3a3a3] mb-1">Client</p>
              <p className="font-medium">{project.client || 'Personal'}</p>
            </div>
            <div>
              <p className="text-sm text-[#a3a3a3] mb-1">Year</p>
              <p className="font-medium">{project.year || '2024'}</p>
            </div>
            <div>
              <p className="text-sm text-[#a3a3a3] mb-1">Tech Stack</p>
              <p className="font-medium truncate">{project.technologies.slice(0, 2).join(', ')}</p>
            </div>
          </div>

          {/* Hero Image (Gambar Utama) */}
          <div className="rounded-xl overflow-hidden mb-10 border border-neutral-800">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Kolom Kiri: Deskripsi & Gallery */}
            <div className="md:col-span-2 space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Overview</h3>
                <p className="text-[#a3a3a3] leading-relaxed text-lg">
                  {project.description}
                </p>
              </div>

              {project.features && (
                <div>
                  <h3 className="text-2xl font-bold mb-4">Key Features</h3>
                  <ul className="space-y-3">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-[#a3a3a3]">
                        <span className="mr-3 text-[#3b82f6] mt-1">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* --- NEW SECTION: PROJECT GALLERY --- */}
              {project.gallery && project.gallery.length > 0 && (
                <div className="pt-8">
                  <h3 className="text-2xl font-bold mb-6">Project Gallery</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.gallery.map((imgUrl, idx) => (
                      <div key={idx} className="rounded-lg overflow-hidden border border-neutral-800 hover:border-[#3b82f6] transition-colors">
                        <img 
                          src={imgUrl} 
                          alt={`Gallery ${idx + 1}`} 
                          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Kolom Kanan: Sidebar Action */}
            <div className="space-y-6">
               <div className="bg-neutral-900/30 border border-neutral-800 rounded-lg p-6 sticky top-24">
                 <h3 className="font-bold mb-4">Technologies</h3>
                 <div className="flex flex-wrap gap-2 mb-6">
                   {project.technologies.map((tech, i) => (
                     <span key={i} className="px-3 py-1 bg-neutral-800 rounded-full text-sm text-[#a3a3a3]">
                       {tech}
                     </span>
                   ))}
                 </div>
                 
                 <Button className="w-full bg-[#3b82f6] hover:bg-[#2563eb] h-12 text-base text-white">
                   Visit Live Site <ExternalLink size={18} className="ml-2" />
                 </Button>
               </div>
            </div>
          </div>
        </motion.div>

        {/* --- NEW SECTION: OTHER PROJECTS (FAST MENU) --- */}
        <div className="mt-24 border-t border-neutral-800 pt-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Other Projects</h2>
            <Link to="/projects" className="text-[#3b82f6] hover:underline text-sm font-medium">
              View All
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {otherProjects.map((p, idx) => (
              <Link to={`/projects/${p.id}`} key={idx} className="group">
                <div className="bg-neutral-900/50 border border-neutral-800 rounded-lg overflow-hidden group-hover:border-[#3b82f6] transition-all">
                  <div className="h-40 overflow-hidden">
                    <img 
                      src={p.image} 
                      alt={p.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold mb-1 group-hover:text-[#3b82f6] transition-colors">{p.title}</h4>
                    <p className="text-xs text-[#a3a3a3] truncate">{p.technologies.join(', ')}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectDetail;