"use client";

import { motion } from "framer-motion";
import { useState } from 'react';

export default function Contact() {
  const [copied, setCopied] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: "📧",
      label: 'Email',
      value: 'mohammedabdulomer99@gmail.com',
      href: 'mailto:mohammedabdulomer99@gmail.com',
      copyable: true,
      gradient: 'from-blue-400 to-cyan-400'
    },
    {
      icon: "📱",
      label: 'Phone',
      value: '+91 96521 59548',
      href: 'tel:+919652159548',
      copyable: true,
      gradient: 'from-purple-400 to-pink-400'
    },
    {
      icon: "💻",
      label: 'GitHub',
      value: 'MOHD-OMER',
      href: 'https://github.com/MOHD-OMER',
      copyable: false,
      gradient: 'from-cyan-400 to-blue-400'
    },
    {
      icon: "💼",
      label: 'LinkedIn',
      value: 'Mohammed-Abdul-Omer',
      href: 'https://www.linkedin.com/in/mohammad-abdul-omer',
      copyable: false,
      gradient: 'from-blue-400 to-purple-400'
    }
  ];

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(''), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:mohammedabdulomer99@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="py-24 relative overflow-hidden">
      {/* Background accent elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative max-w-5xl mx-auto"
      >
        {/* Main container with glassmorphism */}
        <div className="relative rounded-3xl p-12 md:p-16 bg-gradient-to-br from-white/[0.07] to-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12),0_0_60px_rgba(100,150,255,0.08)]">
          
          {/* Animated gradient glow */}
          <motion.div 
            className="absolute inset-0 rounded-3xl pointer-events-none opacity-40"
            animate={{
              background: [
                "radial-gradient(circle at 0% 0%, rgba(59,130,246,0.15), transparent 50%)",
                "radial-gradient(circle at 100% 100%, rgba(168,85,247,0.15), transparent 50%)",
                "radial-gradient(circle at 0% 100%, rgba(236,72,153,0.15), transparent 50%)",
                "radial-gradient(circle at 0% 0%, rgba(59,130,246,0.15), transparent 50%)",
              ]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />

          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="relative text-5xl md:text-6xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 inline-block">
              Get In Touch
            </h2>
            <motion.div 
              className="h-1.5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "120px" }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="relative text-gray-300 text-lg mb-12"
          >
            Feel free to reach out for collaborations, opportunities, or just a friendly chat!
          </motion.p>

          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="relative p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-blue-400/30 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="text-3xl">{item.icon}</div>
                    <div className="flex-1 min-w-0">
                      <h3 className={`text-sm font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r ${item.gradient}`}>
                        {item.label}
                      </h3>
                      <a
                        href={item.href}
                        target={item.label === 'GitHub' || item.label === 'LinkedIn' ? '_blank' : undefined}
                        rel={item.label === 'GitHub' || item.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                        className="text-gray-300 hover:text-blue-400 transition-colors break-all text-sm"
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                  {item.copyable && (
                    <button
                      onClick={() => handleCopy(item.value, item.label)}
                      className="ml-2 p-2 hover:bg-white/10 rounded-lg transition-colors flex-shrink-0"
                      title="Copy to clipboard"
                    >
                      {copied === item.label ? (
                        <span className="text-green-400 text-xs font-medium">✓</span>
                      ) : (
                        <svg
                          className="w-4 h-4 text-gray-400 hover:text-blue-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                          />
                        </svg>
                      )}
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
            className="relative p-8 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">✉️</span>
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Send a Message
              </h3>
            </div>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 transition-colors"
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="5"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 transition-colors resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <motion.button
                onClick={handleSubmit}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(59,130,246,0.3)]"
              >
                <span>✈️</span>
                Send Message
              </motion.button>
            </div>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <p className="text-gray-400 text-sm">
              <span className="inline-block mr-1">📍</span>
              Based in Hyderabad, India
            </p>
          </motion.div>

          {/* Decorative elements */}
          <div className="absolute top-8 right-8 w-24 h-24 border border-blue-400/20 rounded-full blur-sm opacity-30" />
          <div className="absolute bottom-8 left-8 w-32 h-32 border border-purple-400/20 rounded-full blur-sm opacity-30" />
        </div>
      </motion.div>
    </div>
  );
}