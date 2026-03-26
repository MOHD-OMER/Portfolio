"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      title: "PulmoScan AI – Tuberculosis Detection System",
      desc: "An advanced deep-learning system for automated tuberculosis detection from chest X-rays, featuring real-time Grad-CAM heatmap visualizations and seamless deployment on HuggingFace Spaces.",
      category: "Medical AI",
      tags: ["PyTorch", "FastAPI", "HuggingFace", "Computer Vision", "CNN", "Grad-CAM"],
      icon: "🫁",
      color: "from-blue-500 to-cyan-500",
      details: "PulmoScan AI is a complete end-to-end diagnostic pipeline built for early and accurate TB screening. It uses a custom-trained CNN architecture (TBNet) to analyze chest X-rays, highlights infected regions through Grad-CAM heatmaps, and generates professional PDF diagnostic reports. The system features a FastAPI backend, optimized inference pipeline, and an intuitive web interface hosted on HuggingFace Spaces.",
      github: "https://github.com/MOHD-OMER/PulmoScanAI",
      demo: "https://pulmoscanai-app.hf.space"
    },
    {
      title: "Doubt Tutor – AI Study Assistant",
      desc: "A fully interactive, AI-powered study assistant supporting multiple AI models with PDF, image, and document uploads — offering real-time doubt-solving with contextual memory and multi-modal reasoning.",
      category: "AI Applications",
      tags: ["Streamlit", "Groq API", "HuggingFace", "Qwen-VL", "LangChain", "Python"],
      icon: "🤖",
      color: "from-indigo-500 to-violet-500",
      details: "Built a fully functional AI tutor capable of analyzing images, PDFs, and text files using Llama 3, Qwen-VL (vision), and Groq models. Includes chat history export, file previews, secure secret handling, and custom UI components.",
      github: "https://github.com/MOHD-OMER/doubt-tutor",
      demo: "https://doubt-tutor-app.streamlit.app/"
    },
    {
      title: "PTEra – AI-Powered PTE Mock Assessment",
      desc: "A full-scale PTE mock test platform with adaptive difficulty, real-time scoring, section timers, and professional exam-style UI.",
      category: "AI Applications",
      tags: ["Gradio", "Groq API", "Google Gemini", "HuggingFace Spaces", "Python"],
      icon: "🎓",
      color: "from-blue-500 to-purple-600",
      details: "Developed an advanced PTE Academic mock assessment system with Aptitude, Listening, and Reading modules. Features include automated question generation using Groq & Gemini models, strict time tracking, dynamic content validation, analytics-driven scoring, and a premium custom UI. Deployed on HuggingFace Spaces with secure API handling and modular code architecture.",
      github: "https://github.com/MOHD-OMER/PTEra",
      demo: "https://pteclub-Mock-app.hf.space/"
    },
    {
      title: "TruthLens — Fake News Detector",
      desc: "Dual-AI system combining CNN-LSTM deep learning with Gemini API to detect fake news with 94.2% accuracy.",
      category: "Machine Learning",
      tags: ["CNN-LSTM", "Flask", "Gemini AI", "SQLite", "REST API"],
      icon: "🔍",
      color: "from-yellow-400 to-red-500",
      details: "Trained on 40,000+ news articles. Features real-time predictions, analytics dashboard, prediction history, and dual-model verification using both a custom neural network and Gemini AI.",
      highlights: [
        { icon: "🧠", label: "CNN-LSTM Hybrid", sub: "Custom NLP architecture" },
        { icon: "📊", label: "Analytics Dashboard", sub: "Chart.js real-time stats" },
        { icon: "🔌", label: "REST API", sub: "POST /api/predict endpoint" },
        { icon: "🔐", label: "Admin Auth", sub: "Session-based login" },
        { icon: "🗄️", label: "SQLite + ORM", sub: "Persistent prediction logs" },
        { icon: "📈", label: "94.2% Accuracy", sub: "40,000+ article dataset" },
      ],
      github: "https://github.com/MOHD-OMER/TruthLens",
      demo: "https://truthlens-uqo4.onrender.com"
    },
    {
      title: "Building Safety Smoke Detection",
      desc: "Major college project — dual-module intelligent fire and smoke detection system combining 7 ML classifiers on 62,630 IoT sensor readings (AUC-ROC > 0.999) with MobileNetV2 CNN (96.98% accuracy) and YOLOv8 bounding-box detection, deployed as a Django web application.",
      category: "Machine Learning",
      tags: ["Django", "TensorFlow", "YOLOv8", "Scikit-Learn", "MobileNetV2", "OpenCV", "Railway"],
      icon: "🔥",
      color: "from-orange-500 to-red-600",
      details: "B.E. Major Project at Lords Institute of Engineering & Technology, Hyderabad. Trains 7 classifiers (Random Forest, SVM, Gradient Boosting, AdaBoost, Logistic Regression, Decision Tree, KNN) on real IoT sensor data. MobileNetV2 CNN fine-tuned via transfer learning achieves 96.98% validation accuracy. YOLOv8 draws real-time bounding boxes around fire and smoke regions on uploaded images. Full-stack Django app with role-based user management, live ML training, sensor prediction, and CNN+YOLO inference — deployed on Railway.",
      github: "https://github.com/MOHD-OMER/Building-Safety-Smoke-Detection",
      demo: "https://building-safety-smoke-detection-production.up.railway.app"
    },
  ];

  const categories = ["All", "Medical AI", "AI Applications", "Machine Learning"];

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(p => p.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
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
          AI systems built end-to-end and deployed to production
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
              <p className="relative text-gray-300 text-sm leading-relaxed mb-4">
                {project.desc}
              </p>

              {/* TruthLens: Feature Highlights Grid */}
              {project.highlights && (
                <div className="relative mb-4 grid grid-cols-2 gap-2">
                  {project.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 rounded-lg px-3 py-2 bg-white/[0.04] border border-white/[0.07] hover:border-yellow-400/30 transition-colors duration-200"
                    >
                      <span className="text-base mt-0.5 shrink-0">{h.icon}</span>
                      <div className="min-w-0">
                        <p className="text-xs font-semibold text-gray-200 truncate">{h.label}</p>
                        <p className="text-[10px] text-gray-500 truncate">{h.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {!project.highlights && (
                <div className="flex-grow" />
              )}

              {/* Details blockquote (hover reveal) */}
              <motion.div className="relative text-gray-400 text-xs italic mb-4 border-l-2 border-white/20 pl-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
              <div className="relative mt-auto flex items-center gap-4">
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
              5
            </div>
            <div className="text-sm text-gray-400 mt-1">Live Demos</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
