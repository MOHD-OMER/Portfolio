"use client";
import { motion } from "framer-motion";

export default function SectionHeader({ title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mb-12 text-center"
    >
      <h2 className="text-5xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 inline-block">
        {title}
      </h2>

      <motion.div
        className="h-1.5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full mx-auto"
        initial={{ width: 0 }}
        whileInView={{ width: "120px" }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      />

      {subtitle && (
        <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
