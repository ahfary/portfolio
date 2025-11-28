import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Certificates', path: '/certificates' },
    { name: 'Contact', path: '/contact' },
  ];

  // Tutup menu otomatis saat pindah halaman
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <motion.nav
      className="sticky top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-neutral-800"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link to="/" className="text-xl font-bold hover:text-[#3b82f6] transition-colors text-white flex items-center gap-2 justify-center">
            <img src="/assets/icons/Logo.jpg" alt="Logo" className='h-10'/>
            Qoy
          </Link>
          
          {/* Desktop Menu (Hidden on Mobile) */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors relative ${
                  location.pathname === link.path
                    ? 'text-[#3b82f6]'
                    : 'text-[#a3a3a3] hover:text-white'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-[#3b82f6]"
                    layoutId="navbar-indicator"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button (Visible on Mobile) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#a3a3a3] hover:text-white p-2 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0a0a] border-b border-neutral-800 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-3 py-3 rounded-md text-base font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'bg-neutral-900 text-[#3b82f6]'
                      : 'text-[#a3a3a3] hover:bg-neutral-900 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;