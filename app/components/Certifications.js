"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

export default function Certifications() {
  const certs = [
    {
      title: "Machine Learning Specialization",
      issuer: "DeepLearning.AI / Coursera",
      instructor: "Andrew Ng",
      year: "2024",
      icon: "🤖",
      color: "from-blue-500 to-cyan-500",
      skills: ["Supervised Learning", "Neural Networks", "Decision Trees", "Recommender Systems"],
      verify: "https://www.coursera.org/specializations/machine-learning-introduction",
    },
    {
      title: "Generative AI with Large Language Models",
      issuer: "DeepLearning.AI / Coursera",
      instructor: "DeepLearning.AI",
      year: "2024",
      icon: "🧠",
      color: "from-purple-500 to-pink-500",
      skills: ["LLM Pre-training", "Fine-tuning", "RLHF", "Deployment at Scale"],
      verify: "https://www.coursera.org/learn/generative-ai-with-llms",
    },
    {
      title: "Python for Everybody Specialization",
      issuer: "University of Michigan / Coursera",
      instructor: "Dr. Charles Severance",
      year: "2023",
      icon: "🐍",
      color: "from-green-500 to-emerald-500",
      skills: ["Python Basics", "Data Structures", "Web Scraping", "Databases & SQL"],
      verify: "https://www.coursera.org/specializations/python",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="certifications" className="relative">
      {/* Background decorative elements */}
      <div className="absolute -top-20 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 right-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />

      <SectionHeader
        title="Certifications"
        subtitle="Verified credentials from leading AI and ML institutions"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
      >
        {certs.map((cert, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="relative group h-full"
          >
            <div className="relative h-full rounded-2xl p-6 bg-gradient-to-br from-white/[0.07] to-white/[0.03] backdrop-blur-xl border border-white/10 shadow-lg hover:shadow-2xl hover:border-white/20 transition-all duration-300 overflow-hidden flex flex-col">

              {/* Hover glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />

              {/* Icon + Year */}
              <div className="relative flex items-center justify-between mb-5">
                <div
                  className={`text-3xl p-3 rounded-xl bg-gradient-to-br ${cert.color} bg-opacity-10`}
                >
                  {cert.icon}
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/5 text-gray-400 border border-white/10">
                  {cert.year}
                </span>
              </div>

              {/* Title */}
              <h3
                className={`relative text-lg font-bold mb-1 text-transparent bg-clip-text bg-gradient-to-r ${cert.color} leading-snug`}
              >
                {cert.title}
              </h3>

              {/* Issuer */}
              <p className="text-gray-400 text-sm mb-1">{cert.issuer}</p>
              <p className="text-gray-500 text-xs mb-4">by {cert.instructor}</p>

              {/* Skills covered */}
              <div className="flex flex-wrap gap-2 mb-5">
                {cert.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-gray-400 border border-white/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Verify link — pushed to bottom */}
              <div className="mt-auto">
                <a
                  href={cert.verify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r ${cert.color} hover:opacity-80 transition-opacity`}
                >
                  View Certificate
                  <svg
                    className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>

              {/* Decorative corner */}
              <div
                className={`absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br ${cert.color} opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity`}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
