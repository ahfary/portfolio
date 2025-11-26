import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Instagram, Linkedin, Send, ArrowUpRight, Loader2, Github } from 'lucide-react';
import emailjs from '@emailjs/browser'; // Import EmailJS
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const Contact = () => {
  const formRef = useRef(); // Referensi ke elemen form
  const [isSubmitting, setIsSubmitting] = useState(false); // Status loading

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
    setIsSubmitting(true);

    // --- KONFIGURASI EMAILJS ---
    // Ganti string di bawah ini dengan ID dari dashboard EmailJS Anda nanti
    const SERVICE_ID = 'YOUR_SERVICE_ID';
    const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
    const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          toast.success('Message sent successfully!', {
            description: 'I will get back to you as soon as possible.',
          });
          // Reset form
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          console.error('FAILED...', error.text);
          toast.error('Failed to send message.', {
            description: 'Please try again later or contact me directly via email.',
          });
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
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
          <p className="text-[#a3a3a3]">Punya proyek baru? Segera hubungi saya.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-24">
          
          {/* --- KIRI: CONTACT INFO --- */}
          <div className="space-y-10">
            <div>
              <h3 className="text-white font-semibold mb-2 flex items-center gap-2">Email</h3>
              <a href="mailto:afabqory@gmail.com" className="text-[#a3a3a3] hover:text-[#3b82f6] transition-colors flex items-center gap-2 group text-lg">
                <Mail size={18} />
                afabqory@gmail.com
                <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-2 flex items-center gap-2">Phone</h3>
              <a href="https://wa.me/6285137903808" target="_blank" rel="noopener noreferrer" className="text-[#a3a3a3] hover:text-[#3b82f6] transition-colors flex items-center gap-2 group text-lg">
                <Phone size={18} />
                +62 851-3790-3808
                <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Socials</h3>
              <div className="flex gap-4">
                <a href="https://github.com/ahfary" target='_blank' rel='noopener noreferrer' className='p-3 bg-neutral-900 border border-neutral-800 rounded-full text-[#a3a3a3] hover:bg-white hover:text-black hover:border-white transition-all duration-300'>
                <Github size={20} />
                </a>
                <a href="https://instagram.com/ahfary_" target="_blank" rel="noopener noreferrer" className="p-3 bg-neutral-900 border border-neutral-800 rounded-full text-[#a3a3a3] hover:bg-white hover:text-black hover:border-white transition-all duration-300">
                  <Instagram size={20} />
                </a>
                <a href="https://linkedin.com/in/faqih-abqory" target="_blank" rel="noopener noreferrer" className="p-3 bg-neutral-900 border border-neutral-800 rounded-full text-[#a3a3a3] hover:bg-white hover:text-black hover:border-white transition-all duration-300">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* --- KANAN: FORMULIR --- */}
          <div className="bg-neutral-900/20 p-6 rounded-2xl border border-neutral-800/50">
            <h3 className="text-xl font-semibold mb-6">Send a message</h3>
            
            {/* Tambahkan ref={formRef} di sini */}
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-[#a3a3a3] text-xs uppercase tracking-wider">Your Name</Label>
                <Input
                  id="name"
                  name="name" // Penting: name ini harus sama dengan variabel di Template EmailJS
                  placeholder="John Doe"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-neutral-950 border-neutral-800 focus:border-[#3b82f6] h-12"
                  disabled={isSubmitting}
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
                  disabled={isSubmitting}
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
                  disabled={isSubmitting}
                />
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-white hover:bg-neutral-200 text-black h-12 text-base font-medium mt-2 transition-all disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="mr-2 animate-spin" /> Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </Button>
            </form>
          </div>

        </div>
      </div>
    </motion.section>
  );
};

export default Contact;