"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import SectionHeader from "./SectionHeader";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      title: "AI Orchestrator — Smart Multi-Provider Router",
      desc: "Smart AI router that auto-selects the optimal model across Groq, Gemini, OpenRouter, and Ollama. Classifies tasks across 10 categories and routes to the best model based on speed, quality, cost, and privacy — with automatic fallback, benchmark mode, and a full CLI.",
      category: "AI Tools",
      tags: ["FastAPI", "Groq", "Gemini", "OpenRouter", "Ollama", "Task Classification", "Python"],
      icon: "🎯",
      color: "from-orange-500 to-amber-500",
      details: "17+ models across 4 providers. Benchmark mode fires the same prompt at all models simultaneously with live result cards, latency bars, and winner badges (⚡ Fastest · 💰 Cheapest · 📝 Most Detailed). Private mode routes sensitive data to local Ollama only — never leaves your machine. Reasoning chains from Qwen3 <think> blocks extracted and shown as collapsible toggles.",
      github: "https://github.com/MOHD-OMER/ai-orchestrator",
      demo: "https://ai-orchestrator-nu86.onrender.com",
    },
    {
      title: "Multi-Agent Research System",
      desc: "Autonomous multi-agent pipeline where specialised agents — researcher, analyst, writer — coordinate via CrewAI and Tavily to perform live web research, synthesise findings, and generate structured reports with zero human intervention.",
      category: "Agentic AI",
      tags: ["CrewAI", "Tavily", "LangChain", "Groq", "Python"],
      icon: "🤝",
      color: "from-violet-500 to-purple-600",
      details: "Agents are assigned distinct roles and collaborate through a shared task planning loop. Each agent uses tool-use to fetch live data, reason over it, and pass structured output to the next stage — resulting in a fully autonomous research-to-report pipeline.",
      github: "https://github.com/MOHD-OMER/multi-agent-researcher",
      demo: "https://huggingface.co/spaces/mohdomer/nexus-research",
    },
    {
      title: "LLM Fine-tuning — Mistral-7B Medical QA",
      desc: "QLoRA fine-tuning of Mistral-7B-Instruct-v0.2 on a medical Q&A dataset using PEFT. Trained on Kaggle T4 GPU with full environment compatibility handling. Fine-tuned adapter and live Gradio demo deployed to HuggingFace Hub.",
      category: "LLM Engineering",
      tags: ["QLoRA", "PEFT", "Mistral-7B", "HuggingFace", "Gradio", "W&B", "PyTorch"],
      icon: "🧬",
      color: "from-pink-500 to-rose-600",
      details: "Resolved real-world environment compatibility challenges across bitsandbytes, tokenizers, and transformers versioning. Training tracked with Weights & Biases. The fine-tuned adapter and base model are published to HuggingFace Hub with a live Gradio inference demo.",
      github: "https://github.com/MOHD-OMER/llm-finetuning",
      demo: "https://huggingface.co/spaces/mohdomer/mistral-medical-qa-demo",
      model: "https://huggingface.co/mohdomer/mistral-7b-medical-qa-qlora",
    },
    {
      title: "Multi-Document RAG Chatbot",
      desc: "Production-grade RAG chatbot using a LangGraph ReAct agent with hybrid retrieval — ChromaDB vector search, BM25, and FlashRank re-ranking. Streaming SSE responses via FastAPI async backend with dual Streamlit and Gradio frontends.",
      category: "Agentic AI",
      tags: ["LangGraph", "FastAPI", "ChromaDB", "BM25", "FlashRank", "Groq", "HuggingFace"],
      icon: "🗂️",
      color: "from-cyan-500 to-blue-600",
      details: "Solved key production challenges including async event loop conflicts in FastAPI, streaming SSE via LangGraph ReAct, and ChromaDB/BM25/FlashRank hybrid retrieval tuning. Powered by Groq's llama-3.1-8b-instant with HuggingFace embeddings.",
      github: "https://github.com/MOHD-OMER/rag-agent",
      demo: null,
    },
    {
      title: "MLOps Pipeline with Drift Monitoring",
      desc: "End-to-end MLOps pipeline integrating MLflow for experiment tracking and model registry, Weights & Biases for training visualisation, and Evidently AI for automatic data drift and model performance monitoring.",
      category: "MLOps",
      tags: ["MLflow", "W&B", "Evidently AI", "Scikit-Learn", "Docker", "Python"],
      icon: "⚙️",
      color: "from-emerald-500 to-teal-600",
      details: "Structured as a reproducible, production-mimicking workflow with modular stages for data ingestion, training, evaluation, and monitoring. Evidently AI generates drift reports automatically on new data batches, with all runs logged and versioned in MLflow.",
      github: "https://github.com/MOHD-OMER/mlops-pipeline",
      demo: null,
    },
    {
      title: "PulmoScan AI — Tuberculosis Detection",
      desc: "Deep-learning diagnostic system for automated TB detection from chest X-rays, featuring real-time Grad-CAM heatmap visualisations and PDF report generation. Deployed on HuggingFace Spaces.",
      category: "Medical AI",
      tags: ["PyTorch", "FastAPI", "HuggingFace", "Computer Vision", "CNN", "Grad-CAM"],
      icon: "🫁",
      color: "from-blue-500 to-cyan-500",
      details: "End-to-end diagnostic pipeline built for early TB screening. Custom-trained TBNet CNN architecture analyses chest X-rays, highlights infected regions via Grad-CAM heatmaps, and generates professional PDF diagnostic reports. FastAPI backend with optimised inference pipeline and an intuitive web interface.",
      github: "https://github.com/MOHD-OMER/PulmoScanAI",
      demo: "https://pulmoscanai-app.hf.space",
    },
    {
      title: "Doubt Tutor — AI Study Assistant",
      desc: "Interactive AI-powered study assistant supporting multiple models with PDF, image, and document uploads — offering real-time doubt-solving with contextual memory and multi-modal reasoning.",
      category: "AI Applications",
      tags: ["Streamlit", "Groq API", "HuggingFace", "Qwen-VL", "LangChain", "Python"],
      icon: "🤖",
      color: "from-indigo-500 to-violet-500",
      details: "AI tutor capable of analysing images, PDFs, and text files using Llama 3, Qwen-VL (vision), and Groq models. Includes chat history export, file previews, secure secret handling, and custom UI components.",
      github: "https://github.com/MOHD-OMER/doubt-tutor",
      demo: "https://doubt-tutor-app.streamlit.app/",
    },
    {
      title: "PTEra — AI-Powered PTE Mock Assessment",
      desc: "Full-scale PTE mock test platform with adaptive difficulty, real-time scoring, section timers, and professional exam-style UI — powered by Groq and Gemini models. Deployed on HuggingFace Spaces.",
      category: "AI Applications",
      tags: ["Gradio", "Groq API", "Google Gemini", "HuggingFace Spaces", "Python"],
      icon: "🎓",
      color: "from-blue-500 to-purple-600",
      details: "PTE Academic mock system with Aptitude, Listening, and Reading modules. Features automated question generation via Groq & Gemini, strict time tracking, dynamic content validation, analytics-driven scoring, and a premium custom UI. Secure API handling and modular code architecture.",
      github: "https://github.com/MOHD-OMER/PTEra",
      demo: "https://pteclub-Mock-app.hf.space/",
    },
    {
      title: "TruthLens — Fake News Detector",
      desc: "Dual-AI system combining CNN-LSTM deep learning with Gemini API to detect fake news with 94.2% accuracy across 40,000+ articles. Features an analytics dashboard and REST prediction API.",
      category: "Machine Learning",
      tags: ["CNN-LSTM", "Flask", "Gemini AI", "SQLite", "REST API"],
      icon: "🔍",
      color: "from-yellow-400 to-red-500",
      details: "Trained on 40,000+ news articles. Features real-time predictions, analytics dashboard, prediction history, and dual-model verification using both a custom neural network and Gemini AI.",
      highlights: [
        { icon: "🧠", label: "CNN-LSTM Hybrid",      sub: "Custom NLP architecture" },
        { icon: "📊", label: "Analytics Dashboard",  sub: "Chart.js real-time stats" },
        { icon: "🔌", label: "REST API",              sub: "POST /api/predict" },
        { icon: "🔐", label: "Admin Auth",            sub: "Session-based login" },
        { icon: "🗄️", label: "SQLite + ORM",         sub: "Persistent prediction logs" },
        { icon: "📈", label: "94.2% Accuracy",        sub: "40,000+ article dataset" },
      ],
      github: "https://github.com/MOHD-OMER/TruthLens",
      demo: "https://truthlens-uqo4.onrender.com",
    },
    {
      title: "Building Safety Smoke Detection",
      desc: "Dual-module fire and smoke detection system combining 7 ML classifiers on 62,630 IoT sensor readings (AUC-ROC > 0.999) with MobileNetV2 CNN (96.98% accuracy) and YOLOv8 real-time detection. B.E. Major Project.",
      category: "Machine Learning",
      tags: ["Django", "TensorFlow", "YOLOv8", "Scikit-Learn", "MobileNetV2", "OpenCV", "Railway"],
      icon: "🔥",
      color: "from-orange-500 to-red-600",
      details: "Trains 7 classifiers on real IoT sensor data. MobileNetV2 fine-tuned via transfer learning achieves 96.98% validation accuracy. YOLOv8 draws real-time bounding boxes on uploaded images. Full-stack Django app with role-based user management, live ML training, sensor prediction, and CNN+YOLO inference — deployed on Railway.",
      github: "https://github.com/MOHD-OMER/Building-Safety-Smoke-Detection",
      demo: "https://building-safety-smoke-detection-production.up.railway.app",
    },
  ];

  const categories = [
    "All",
    "AI Tools",
    "Agentic AI",
    "LLM Engineering",
    "MLOps",
    "Medical AI",
    "AI Applications",
    "Machine Learning",
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const liveCount = projects.filter((p) => p.demo).length;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const stats = [
    { value: projects.length,       label: "Projects",        gradient: "from-blue-400 to-cyan-400" },
    { value: categories.length - 1, label: "Categories",      gradient: "from-purple-400 to-pink-400" },
    { value: liveCount,             label: "Live Demos",      gradient: "from-green-400 to-emerald-400" },
    { value: 1,                     label: "Published Model", gradient: "from-orange-400 to-amber-400" },
  ];

  return (
    <div className="relative">
      {/* Background decorative elements */}
      <div className="absolute -top-20 right-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />

      {/* Section Header */}
      <SectionHeader
        title="Featured Projects"
        subtitle="AI systems built end-to-end and deployed to production"
      />

      {/* Filter Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12"
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
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
            key={`${activeFilter}-${idx}`}
            variants={itemVariants}
            layout
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="relative group"
          >
            <div className="relative rounded-2xl p-6 bg-gradient-to-br from-white/[0.07] to-white/[0.03] backdrop-blur-xl border border-white/10 shadow-lg hover:shadow-2xl hover:border-white/20 transition-all duration-300 overflow-hidden flex flex-col">

              {/* Hover glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />

              {/* Icon + Category */}
              <div className="relative flex items-center justify-between mb-4">
                <div className={`text-4xl p-3 rounded-xl bg-gradient-to-br ${project.color} bg-opacity-10`}>
                  {project.icon}
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/5 text-gray-400 border border-white/10">
                  {project.category}
                </span>
              </div>

              {/* Title */}
              <h3
                className={`relative text-xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r ${project.color} group-hover:scale-[1.02] transition-transform`}
              >
                {project.title}
              </h3>

              {/* Description */}
              <p className="relative text-gray-300 text-sm leading-relaxed mb-4">
                {project.desc}
              </p>

              {/* TruthLens feature grid */}
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

              {/* Details — display:none when not hovered (truly zero height, no layout gap) */}
              <div className="hidden group-hover:block mb-4">
                <p className="text-gray-400 text-xs italic border-l-2 border-white/20 pl-3 leading-relaxed">
                  {project.details}
                </p>
              </div>

              {/* Tech tags */}
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

              {/* Action buttons */}
              <div className="relative mt-4 flex items-center gap-4 flex-wrap">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-gray-300 hover:text-white transition-all"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  GitHub
                </motion.a>

                {project.demo && (
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
                )}

                {project.model && (
                  <motion.a
                    href={project.model}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-yellow-400 hover:text-yellow-300 transition-all"
                  >
                    🤗 Model
                  </motion.a>
                )}
              </div>

              {/* Decorative corner */}
              <div
                className={`absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br ${project.color} opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity`}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Stats Bar — responsive, consistent with Skills.js */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <div className="inline-flex flex-wrap justify-center items-center gap-6 sm:gap-8 px-6 sm:px-10 py-6 rounded-2xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-white/10 backdrop-blur-xl">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex items-center gap-6 sm:gap-8">
              <div className="text-center">
                <div
                  className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.gradient}`}
                >
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
              </div>
              {idx < stats.length - 1 && (
                <div className="hidden sm:block w-px h-12 bg-white/10" />
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
