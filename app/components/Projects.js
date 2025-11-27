"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      title: "PulmoScan AI – Tuberculosis Detection System",
      desc: "Deep-learning powered chest X-ray TB detection with heatmap visualization deployed on HuggingFace Spaces.",
      category: "Medical AI",
      tags: ["PyTorch", "FastAPI", "Docker", "HuggingFace", "Computer Vision", "CNN"],
      icon: "🫁",
      color: "from-blue-500 to-cyan-500",
      details: "End-to-end AI diagnostic tool using a CNN model (TBNet) with Grad-CAM heatmap support, PDF reports, and full Docker deployment.",
      github: "https://github.com/MOHD-OMER/PulmoScanAI",
      demo: "https://pulmoscanai-app.hf.space"
    },
    {
      title: "Brain Tumor Classification System",
      desc: "Neural network-based medical imaging system for automated MRI tumor classification.",
      category: "Computer Vision",
      tags: ["TensorFlow", "Medical AI", "CNNs", "Transfer Learning"],
      icon: "🧠",
      color: "from-purple-500 to-pink-500",
      details: "Achieved 92% classification accuracy across multiple tumor types using ResNet architecture.",
      github: "https://github.com/yourusername/brain-tumor-classification",
      demo: "https://brain-tumor-demo.vercel.app"
    },
    {
      title: "Generative AI Content Automation",
      desc: "Intelligent AI agent for automated content generation, summarization, and text processing.",
      category: "Generative AI",
      tags: ["LLMs", "GPT", "Langchain", "RAG"],
      icon: "✨",
      color: "from-green-500 to-emerald-500",
      details: "Reduced content creation time by 70% while maintaining high quality standards.",
      github: "https://github.com/yourusername/content-automation",
      demo: "https://content-ai-demo.vercel.app"
    },
    {
      title: "Smart Document Q&A System",
      desc: "RAG-powered system enabling natural language queries over large document collections.",
      category: "Generative AI",
      tags: ["RAG", "Vector DB", "LangChain", "FastAPI"],
      icon: "📚",
      color: "from-orange-500 to-red-500",
      details: "Processes 1000+ pages with semantic search and context-aware responses.",
      github: "https://github.com/yourusername/document-qa",
      demo: "https://doc-qa-demo.vercel.app"
    },
    {
      title: "Real-time Sentiment Analysis API",
      desc: "Production-grade NLP API for analyzing customer sentiment across multiple channels.",
      category: "NLP",
      tags: ["BERT", "FastAPI", "Docker", "AWS"],
      icon: "💬",
      color: "from-yellow-500 to-amber-500",
      details: "Handles 10K+ requests/hour with sub-200ms latency and 88% accuracy.",
      github: "https://github.com/yourusername/sentiment-api",
      demo: "https://sentiment-api-demo.vercel.app"
    },
    {
      title: "Predictive Maintenance System",
      desc: "Machine learning pipeline predicting equipment failures before they occur.",
      category: "ML Engineering",
      tags: ["Time Series", "MLOps", "Prophet", "Kubernetes"],
      icon: "⚙️",
      color: "from-indigo-500 to-violet-500",
      details: "Reduced downtime by 40% with early warning system and automated alerts.",
      github: "https://github.com/yourusername/predictive-maintenance",
      demo: "https://maintenance-demo.vercel.app"
    }
  ];

  const categories = ["All", "Computer Vision", "Generative AI", "NLP", "ML Engineering"];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="relative">
      {/* Background decorative elements */}
      <div className="absolute -top-20 right-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="text-5xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 inline-block">
          Featured Projects
        </h2>
        <motion.div 
          className="h-1.5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full mx-auto"
          initial={{ width: 0 }}
          whileInView={{ width: "120px" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        />
        <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
          Production-ready AI solutions delivering real-world impact
        </p>
      </motion.div>

      {/* Filter Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-3 mb-12"
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
              activeFilter === category
                ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/30"
                : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10"
            }`}
          >
            {category}
          </button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredProjects.map((project, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            layout
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="relative group h-full"
          >
            {/* Card */}
            <div className="relative h-full rounded-2xl p-6 bg-gradient-to-br from-white/[0.07] to-white/[0.03] backdrop-blur-xl border border-white/10 shadow-lg hover:shadow-2xl hover:border-white/20 transition-all duration-300 overflow-hidden flex flex-col">
              
              {/* Animated background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              {/* Icon and Category */}
              <div className="relative flex items-center justify-between mb-4">
                <div className={`text-4xl p-3 rounded-xl bg-gradient-to-br ${project.color} bg-opacity-10`}>
                  {project.icon}
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/5 text-gray-400 border border-white/10">
                  {project.category}
                </span>
              </div>

              {/* Title */}
              <h3 className={`relative text-xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r ${project.color} group-hover:scale-[1.02] transition-transform`}>
                {project.title}
              </h3>

              {/* Description */}
              <p className="relative text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
                {project.desc}
              </p>

              {/* Details - shows on hover */}
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                whileInView={{ opacity: 1, height: "auto" }}
                className="relative text-gray-400 text-xs italic mb-4 border-l-2 border-white/20 pl-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                {project.details}
              </motion.div>

              {/* Tags */}
              <div className="relative flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-gray-400 border border-white/10 hover:border-white/20 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* GitHub & Demo Buttons */}
              <div className="relative mt-4 flex items-center gap-4">
                {/* GitHub Button */}
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-gray-300 hover:text-white transition-all"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  GitHub
                </motion.a>

                {/* Demo Button */}
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className={`inline-flex items-center gap-2 text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r ${project.color}`}
                >
                  Live Demo
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.a>
              </div>

              {/* Decorative corner element */}
              <div className={`absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br ${project.color} opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity`} />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <div className="inline-flex items-center gap-8 px-8 py-6 rounded-2xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-white/10 backdrop-blur-xl">
          <div className="text-center">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {projects.length}
            </div>
            <div className="text-sm text-gray-400 mt-1">Projects</div>
          </div>
          <div className="w-px h-12 bg-white/10" />
          <div className="text-center">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              {categories.length - 1}
            </div>
            <div className="text-sm text-gray-400 mt-1">Categories</div>
          </div>
          <div className="w-px h-12 bg-white/10" />
          <div className="text-center">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
              100%
            </div>
            <div className="text-sm text-gray-400 mt-1">Production Ready</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}