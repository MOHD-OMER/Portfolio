"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import SectionHeader from "./SectionHeader";

export default function Contact() {
  const [copied, setCopied]           = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData]       = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "mohammedabdulomer99@gmail.com",
      href: "mailto:mohammedabdulomer99@gmail.com",
      copyable: true,
      gradient: "from-blue-400 to-cyan-400",
    },
    {
      icon: "📱",
      label: "Phone",
      value: "+91 96521 59548",
      href: "tel:+919652159548",
      copyable: true,
      gradient: "from-purple-400 to-pink-400",
    },
    {
      icon: "💻",
      label: "GitHub",
      value: "MOHD-OMER",
      href: "https://github.com/MOHD-OMER",
      copyable: false,
      gradient: "from-cyan-400 to-blue-400",
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "Mohammad-Abdul-Omer",
      href: "https://www.linkedin.com/in/mohammad-abdul-omer",
      copyable: false,
      gradient: "from-blue-400 to-purple-400",
    },
    {
      // Added — HuggingFace has a published model and live Gradio demo
      icon: "🤗",
      label: "HuggingFace",
      value: "mohdomer",
      href: "https://huggingface.co/mohdomer",
      copyable: false,
      gradient: "from-yellow-400 to-orange-400",
    },
  ];

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(""), 2000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic guard — form `required` attrs handle browser-level validation,
    // but this ensures the mailto doesn't open with blank fields programmatically.
    if (!formData.name || !formData.email || !formData.message) return;

    const mailtoLink = `mailto:mohammedabdulomer99@gmail.com?subject=${encodeURIComponent(
      formData.subject || "Portfolio Contact"
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;

    window.location.href = mailtoLink;

    // Show success feedback and reset form
    setFormSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const inputClass =
    "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400/30 transition-colors";

  return (
    <div className="py-24 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative max-w-5xl mx-auto"
      >
        {/* Glassmorphism card */}
        <div className="relative rounded-3xl p-8 sm:p-12 md:p-16 bg-gradient-to-br from-white/[0.07] to-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12),0_0_60px_rgba(100,150,255,0.08)]">

          {/* Animated gradient glow */}
          <motion.div
            className="absolute inset-0 rounded-3xl pointer-events-none opacity-40"
            animate={{
              background: [
                "radial-gradient(circle at 0% 0%, rgba(59,130,246,0.15), transparent 50%)",
                "radial-gradient(circle at 100% 100%, rgba(168,85,247,0.15), transparent 50%)",
                "radial-gradient(circle at 0% 100%, rgba(236,72,153,0.15), transparent 50%)",
                "radial-gradient(circle at 0% 0%, rgba(59,130,246,0.15), transparent 50%)",
              ],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />

          {/* Header — reuses SectionHeader for consistency */}
          <SectionHeader
            title="Get In Touch"
            subtitle="Open to AI Engineer and ML Engineer roles. Reach out for collaborations, internship opportunities, or project discussions."
          />

          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center mb-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 backdrop-blur-sm">
              <motion.div
                className="w-2 h-2 rounded-full bg-green-400"
                animate={{ opacity: [1, 0.4, 1], scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-green-400 text-sm font-medium">
                Open to opportunities — Available from 2025
              </span>
            </div>
          </motion.div>

          {/* Contact Info Cards — 5 cards, 3-col grid on large screens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="relative p-5 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-blue-400/30 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3 flex-1">
                    <span className="text-2xl">{item.icon}</span>
                    <div className="flex-1 min-w-0">
                      <h3
                        className={`text-xs font-bold mb-1.5 text-transparent bg-clip-text bg-gradient-to-r ${item.gradient}`}
                      >
                        {item.label}
                      </h3>
                      <a
                        href={item.href}
                        target={
                          ["GitHub", "LinkedIn", "HuggingFace"].includes(item.label)
                            ? "_blank"
                            : undefined
                        }
                        rel={
                          ["GitHub", "LinkedIn", "HuggingFace"].includes(item.label)
                            ? "noopener noreferrer"
                            : undefined
                        }
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
                      aria-label={`Copy ${item.label}`}
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
            className="relative p-6 sm:p-8 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">✉️</span>
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Send a Message
              </h3>
            </div>

            {/* Success state */}
            <AnimatePresence>
              {formSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-6 p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-medium flex items-center gap-2"
                >
                  <span>✓</span>
                  Mail client opened — message ready to send. Thanks for reaching out!
                </motion.div>
              )}
            </AnimatePresence>

            {/* Proper <form> element — enables Enter-to-submit and native validation */}
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Name <span className="text-blue-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={inputClass}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email <span className="text-blue-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={inputClass}
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
                  className={inputClass}
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message <span className="text-blue-400">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className={`${inputClass} resize-none`}
                  placeholder="Your message..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(59,130,246,0.3)]"
              >
                <span>✈️</span>
                Send Message
              </motion.button>
            </form>
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

          {/* Decorative rings */}
          <div className="absolute top-8 right-8 w-24 h-24 border border-blue-400/20 rounded-full blur-sm opacity-30" />
          <div className="absolute bottom-8 left-8 w-32 h-32 border border-purple-400/20 rounded-full blur-sm opacity-30" />
        </div>
      </motion.div>
    </div>
  );
}
