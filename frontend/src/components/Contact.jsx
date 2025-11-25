import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    toast.success('Message sent successfully!', {
      description: 'Thank you for reaching out. I will get back to you soon.',
    });

    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <motion.section
      className="mb-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-6">Contact</h2>
      <div className="bg-[#171717] border border-[#262626] rounded-lg p-6">
        <div className="flex items-center gap-2 text-[#a3a3a3] mb-6">
          <Mail size={18} />
          <a href="mailto:ahmad@example.com" className="hover:text-[#3b82f6] transition-colors">
            ahmad@example.com
          </a>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name" className="text-white mb-2 block">
              Name
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="bg-[#0a0a0a] border-[#262626] text-white focus:border-[#3b82f6] focus:ring-[#3b82f6]"
              placeholder="Your name"
            />
          </div>

          <div>
            <Label htmlFor="email" className="text-white mb-2 block">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="bg-[#0a0a0a] border-[#262626] text-white focus:border-[#3b82f6] focus:ring-[#3b82f6]"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <Label htmlFor="message" className="text-white mb-2 block">
              Message
            </Label>
            <Textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              className="bg-[#0a0a0a] border-[#262626] text-white focus:border-[#3b82f6] focus:ring-[#3b82f6] min-h-[120px]"
              placeholder="Your message..."
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-[#3b82f6] hover:bg-[#2563eb] text-white"
          >
            <Send size={18} className="mr-2" />
            Send Message
          </Button>
        </form>
      </div>
    </motion.section>
  );
};

export default Contact;