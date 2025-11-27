import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Instagram, Linkedin, Send, ArrowUpRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 1. Format Pesan untuk WhatsApp
    // Menggunakan %0A untuk baris baru (Enter)
    const message = `Halo Ahmad, saya ingin berdiskusi/berkolaborasi.%0A%0A` +
      `*Nama:* ${formData.name}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Pesan:*%0A${formData.message}`;

    // 2. Nomor WhatsApp Tujuan (Format Internasional tanpa '+')
    // Ganti jika nomor berubah
    const phoneNumber = "6285137903808"; 

    // 3. Buat URL WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    // 4. Feedback UX & Redirect
    toast.info('Mengarahkan ke WhatsApp...', {
      description: 'Silakan lanjutkan obrolan di aplikasi WhatsApp.',
    });

    // Buka di tab baru
    window.open(whatsappUrl, '_blank');

    // Reset form (opsional)
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <motion.section
      id="contact"
      className="py-20 relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">Let's talk</h2>
          <p className="text-[#a3a3a3]">Have a project in mind? Let's create something together.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-24">
          
          {/* --- KIRI: CONTACT INFO --- */}
          <div className="space-y-10">
            
            {/* Email */}
            <div>
              <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                Email
              </h3>
              <a 
                href="mailto:afabqory@gmail.com" 
                className="text-[#a3a3a3] hover:text-[#3b82f6] transition-colors flex items-center gap-2 group text-lg"
              >
                <Mail size={18} />
                afabqory@gmail.com
                <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>

            {/* Phone */}
            <div>
              <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                Phone
              </h3>
              <a 
                href="https://wa.me/6285137903808" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#a3a3a3] hover:text-[#3b82f6] transition-colors flex items-center gap-2 group text-lg"
              >
                <Phone size={18} />
                +62 851-3790-3808
                <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>

            {/* Socials */}
            <div>
              <h3 className="text-white font-semibold mb-4">Socials</h3>
              <div className="flex gap-4">
                <a 
                  href="https://instagram.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-neutral-900 border border-neutral-800 rounded-full text-[#a3a3a3] hover:bg-white hover:text-black hover:border-white transition-all duration-300"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="https://linkedin.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-neutral-900 border border-neutral-800 rounded-full text-[#a3a3a3] hover:bg-white hover:text-black hover:border-white transition-all duration-300"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

          </div>

          {/* --- KANAN: FORMULIR --- */}
          <div className="bg-neutral-900/20 p-6 rounded-2xl border border-neutral-800/50">
            <h3 className="text-xl font-semibold mb-6">Send a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-[#a3a3a3] text-xs uppercase tracking-wider">Your Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-neutral-950 border-neutral-800 focus:border-[#3b82f6] h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-[#a3a3a3] text-xs uppercase tracking-wider">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-neutral-950 border-neutral-800 focus:border-[#3b82f6] h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-[#a3a3a3] text-xs uppercase tracking-wider">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-neutral-950 border-neutral-800 focus:border-[#3b82f6] min-h-[120px] resize-none"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-white hover:bg-neutral-200 text-black h-12 text-base font-medium mt-2 transition-all"
              >
                Send via WhatsApp <Send size={18} className="ml-2" />
              </Button>
            </form>
          </div>

        </div>
      </div>
    </motion.section>
  );
};

export default Contact;