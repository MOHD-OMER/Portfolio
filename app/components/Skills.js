"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import {
  MessagesSquare, BrainCircuit, Cog, FlaskConical, Code2, Wrench, FileSpreadsheet,
} from "lucide-react";

export default function Skills() {
  const skillGroups = [
    {
      title: "NLP & Generative AI",
      icon: MessagesSquare,
      color: "from-purple-500 to-pink-500",
      skills: [
        "Large Language Models",
        "RAG Systems & Hybrid Retrieval",
        "LangChain & LangGraph",
        "CrewAI & Multi-Agent Systems",
        "Prompt Engineering",
        "Groq & Ollama",
      ],
    },
    {
      title: "Computer Vision & DL",
      icon: BrainCircuit,
      color: "from-blue-500 to-cyan-500",
      skills: [
        "CNNs & Transfer Learning",
        "OpenCV",
        "Object Detection (YOLOv8)",
        "PyTorch",
        "TensorFlow & Keras",
        "Grad-CAM & Explainability",
      ],
    },
    {
      title: "ML Engineering",
      icon: Cog,
      color: "from-green-500 to-emerald-500",
      skills: [
        "QLoRA & PEFT Fine-tuning",
        "Hugging Face Transformers",
        "bitsandbytes & Quantization",
        "FastAPI",
        "Scikit-learn",
        "Model Training & Evaluation",
      ],
    },
    {
      // New group — reflects the MLOps pipeline project and W&B usage across projects
      title: "MLOps & Experiment Tracking",
      icon: FlaskConical,
      color: "from-teal-500 to-blue-500",
      skills: [
        "MLflow",
        "Weights & Biases (W&B)",
        "Evidently AI",
        "Docker",
        "Drift Monitoring",
        "Reproducible ML Pipelines",
      ],
    },
    {
      title: "Programming",
      icon: Code2,
      color: "from-orange-500 to-red-500",
      skills: [
        "Python",
        "Java",
        "SQL",
        "REST APIs",
        "Django",
        "Pandas & NumPy",
        "Streamlit & Gradio",
      ],
    },
    {
      title: "Tools & Deployment",
      icon: Wrench,
      color: "from-indigo-500 to-violet-500",
      skills: [
        "Git & GitHub",
        "Hugging Face Hub & Spaces",
        "ChromaDB & Vector Databases",
        "Vercel / Render / Railway",
        "Kaggle (T4 GPU)",
        "VS Code",
      ],
    },
    {
      title: "Productivity & Documentation",
      icon: FileSpreadsheet,
      color: "from-amber-500 to-yellow-500",
      skills: [
        "Microsoft Excel",
        "Microsoft Word",
        "Google Workspace",
      ],
    },
  ];

  // Kept in sync with Projects.js (10 projects, 8 with live demos) and the
  // site description in layout.js. These previously read 9 and 6, so the same
  // page advertised three different project counts.
  const stats = [
    {
      value: "10",
      label: "Projects Built",
      gradient: "from-blue-400 to-cyan-400",
    },
    {
      value: "2",
      label: "Internships",
      gradient: "from-purple-400 to-pink-400",
    },
    {
      value: "8",
      label: "Live Deployments",
      gradient: "from-green-400 to-emerald-400",
    },
    {
      value: "1",
      label: "Published Model",
      gradient: "from-orange-400 to-amber-400",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="relative">
      {/* Background decorative elements */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />

      {/* Section Header — was a hand-rolled copy of SectionHeader; now shared */}
      <SectionHeader
        title="Technical Skills"
        subtitle="My core stack — tools I use to build and ship real AI systems"
      />

      {/* Skills Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:[&>*:last-child:nth-child(3n+1)]:col-start-2"
      >
        {skillGroups.map((group, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="relative group"
          >
            <div className="relative h-full rounded-2xl p-6 bg-gradient-to-br from-white/[0.07] to-white/[0.03] backdrop-blur-xl border border-white/10 shadow-lg hover:shadow-2xl hover:border-white/20 transition-all duration-300 overflow-hidden">
              {/* Animated background gradient on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${group.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />

              {/* Header */}
              <div className="relative flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${group.color}`}>
                  <group.icon className="w-6 h-6 text-white" strokeWidth={1.75} aria-hidden="true" />
                </div>
                <h3
                  className="text-xl font-bold text-white"
                >
                  {group.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="relative space-y-3">
                {group.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skillIdx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: idx * 0.1 + skillIdx * 0.05,
                      duration: 0.4,
                    }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 group/item"
                  >
                    <div
                      className={`w-2 h-2 rounded-full bg-gradient-to-r ${group.color} group-hover/item:scale-125 transition-transform flex-shrink-0`}
                    />
                    <span className="text-gray-300 text-sm font-medium group-hover/item:text-white transition-colors">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Decorative corner */}
              <div
                className={`absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br ${group.color} opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity`}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom Stats — fixed from 3 to 4 counters, numbers corrected */}
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
              {/* Divider — hidden after last item */}
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
