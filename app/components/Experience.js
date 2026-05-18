"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

export default function Experience() {
  const experiences = [
    {
      role: "Artificial Intelligence Intern",
      company: "TechZone Software Academy for Training & Research",
      location: "Hyderabad, India",
      period: "March 2025 – June 2025",
      duration: "4 months",
      type: "Internship",
      typeBadgeClass: "text-blue-400 bg-blue-500/10 border-blue-500/30",
      icon: "🤖",
      color: "from-blue-500 to-cyan-500",
      achievements: [
        "Architected and deployed 4 production-grade AI systems for a live ed-tech platform serving students and educators across Hyderabad",
        "Engineered a RAG-powered AI tutoring system using LangChain and vector databases, delivering contextual real-time academic support",
        "Designed and shipped an automated PTE mock-test engine with LLM-based scoring across reading, writing, and listening modules",
        "Built an MCQ generation and attendance automation system, eliminating manual academic tracking across departments",
        "Delivered all systems as production-ready FastAPI services with REST-based orchestration and continuous prompt optimization",
      ],
      technologies: [
        "Python", "FastAPI", "LangChain", "OpenAI API",
        "RAG", "Vector Databases", "Prompt Engineering",
      ],
      highlights: [
        { metric: "4", label: "AI Systems Deployed" },
        { metric: "3", label: "LLM Applications" },
        { metric: "1", label: "RAG Pipeline Built" },
      ],
    },
    {
      role: "AI/ML Intern",
      company: "RAM Innovative Infotech",
      location: "Hyderabad, India",
      period: "November 2024",
      duration: "1 month",
      type: "College Training Program",
      typeBadgeClass: "text-purple-400 bg-purple-500/10 border-purple-500/30",
      icon: "🎓",
      color: "from-purple-500 to-pink-500",
      achievements: [
        "Completed an intensive AI/ML training program organised in collaboration with Lords Institute CSE-AIML department",
        "Developed a disease prediction ML model using Python and Scikit-learn, applying supervised learning classification on medical datasets",
        "Gained hands-on exposure to Django for web-based AI integration and data preprocessing pipeline design",
      ],
      technologies: [
        "Python", "Scikit-learn", "Django",
        "Machine Learning", "Data Preprocessing",
      ],
      highlights: [
        { metric: "1", label: "ML Model Built" },
        { metric: "5", label: "Algorithms Explored" },
        { metric: "1", label: "Web App Integrated" },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="relative">
      {/* Background decorative elements */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 right-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />

      {/* Section Header — reuses shared component */}
      <SectionHeader
        title="Experience"
        subtitle="Building and shipping production AI systems"
      />

      {/* Timeline */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative max-w-4xl mx-auto"
      >
        {/* Vertical timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-20 hidden md:block" />

        {experiences.map((exp, idx) => (
          <motion.div key={idx} variants={itemVariants} className="relative mb-12 last:mb-0">

            {/* Timeline dot */}
            <div className="absolute left-8 w-4 h-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full border-4 border-gray-900 hidden md:block -translate-x-[7px] mt-8" />

            {/* Card */}
            <div className="md:ml-20 relative group">
              <motion.div
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="relative rounded-2xl p-8 bg-gradient-to-br from-white/[0.07] to-white/[0.03] backdrop-blur-xl border border-white/10 shadow-lg hover:shadow-2xl hover:border-white/20 transition-all duration-300 overflow-hidden"
              >
                {/* Hover glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                {/* Header */}
                <div className="relative flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div className="flex items-start gap-4">
                    <div
                      className={`text-4xl p-3 rounded-xl bg-gradient-to-br ${exp.color} bg-opacity-10 flex-shrink-0`}
                    >
                      {exp.icon}
                    </div>
                    <div>
                      <h3
                        className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${exp.color} mb-1`}
                      >
                        {exp.role}
                      </h3>
                      <p className="text-lg text-gray-300 font-semibold mb-1">
                        {exp.company}
                      </p>
                      <p className="text-sm text-gray-400 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {exp.location}
                      </p>
                    </div>
                  </div>

                  {/* Period + badges */}
                  <div className="flex flex-col items-start md:items-end gap-2 flex-shrink-0">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {exp.period}
                    </div>
                    <span className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-400 border border-white/10">
                      {exp.duration}
                    </span>
                    {/*
                      Fixed: previously used bg-gradient + text-transparent bg-clip-text on the
                      same element — the text became invisible (clipping a gradient onto a gradient
                      background cancels out). Now uses solid color classes via typeBadgeClass.
                    */}
                    <span
                      className={`text-xs px-3 py-1 rounded-full font-semibold border ${exp.typeBadgeClass}`}
                    >
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* Achievements */}
                <div className="relative mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                    Key Achievements
                  </h4>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, achIdx) => (
                      <motion.li
                        key={achIdx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * achIdx, duration: 0.4 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3 group/item"
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.color} mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform`}
                        />
                        <span className="text-gray-300 text-sm leading-relaxed group-hover/item:text-white transition-colors">
                          {achievement}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="relative mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="text-xs px-3 py-1.5 rounded-md text-gray-300 bg-white/5 border border-white/10 hover:border-white/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div className="relative pt-6 border-t border-white/10">
                  <div className="grid grid-cols-3 gap-4">
                    {exp.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="text-center">
                        <div
                          className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${exp.color}`}
                        >
                          {highlight.metric}
                        </div>
                        <div className="text-xs text-gray-400 mt-1">{highlight.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Decorative corner */}
                <div
                  className={`absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br ${exp.color} opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity`}
                />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom CTA — was an empty <motion.div> before */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <p className="text-gray-400 text-sm mb-6">
          Currently seeking full-time AI/ML Engineer roles — open to remote and Hyderabad-based opportunities.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(59,130,246,0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold text-sm shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
            </svg>
            Download Resume
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-blue-500/50 text-blue-400 font-semibold text-sm hover:bg-blue-500/10 transition-all duration-300"
          >
            Get in Touch
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}
