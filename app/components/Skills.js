"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const skillGroups = [
    {
      title: "NLP & Generative AI",
      icon: "💬",
      color: "from-purple-500 to-pink-500",
      skills: [
        "Large Language Models",
        "RAG Systems",
        "Prompt Engineering",
        "LangChain",
        "Embeddings & Vectors",
        "Ollama & Groq",
      ],
    },
    {
      title: "Computer Vision & DL",
      icon: "🧠",
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
      icon: "⚙️",
      color: "from-green-500 to-emerald-500",
      skills: [
        "Scikit-learn",
        "Model Training & Evaluation",
        "Feature Engineering",
        "Hugging Face Transformers",
        "Streamlit",
        "FastAPI",
      ],
    },
    {
      title: "Programming",
      icon: "💻",
      color: "from-orange-500 to-red-500",
      skills: [
        "Python",
        "SQL",
        "REST APIs",
        "Django",
        "Pandas & NumPy",
        "Matplotlib",
      ],
    },
    {
      title: "Data & Analysis",
      icon: "📊",
      color: "from-yellow-500 to-amber-500",
      skills: [
        "Data Preprocessing",
        "Exploratory Data Analysis",
        "Data Visualization",
        "Scikit-learn Pipelines",
        "Jupyter Notebooks",
        "Anaconda",
      ],
    },
    {
      title: "Tools & Deployment",
      icon: "🛠️",
      color: "from-indigo-500 to-violet-500",
      skills: [
        "Git & GitHub",
        "Vercel",
        "Render",
        "Railway",
        "Hugging Face Spaces",
        "VS Code",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
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

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="text-5xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 inline-block">
          Technical Skills
        </h2>
        <motion.div
          className="h-1.5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full mx-auto"
          initial={{ width: 0 }}
          whileInView={{ width: "120px" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        />
        <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
          My core stack — tools I use to build and ship real AI systems
        </p>
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {skillGroups.map((group, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="relative group"
          >
            {/* Card */}
            <div className="relative h-full rounded-2xl p-6 bg-gradient-to-br from-white/[0.07] to-white/[0.03] backdrop-blur-xl border border-white/10 shadow-lg hover:shadow-2xl hover:border-white/20 transition-all duration-300 overflow-hidden">
              {/* Animated background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${group.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />

              {/* Header */}
              <div className="relative flex items-center gap-3 mb-6">
                <div
                  className={`text-3xl p-3 rounded-xl bg-gradient-to-br ${group.color} bg-opacity-10`}
                >
                  {group.icon}
                </div>
                <h3
                  className={`text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${group.color}`}
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
                    {/* Bullet point */}
                    <div
                      className={`w-2 h-2 rounded-full bg-gradient-to-r ${group.color} group-hover/item:scale-125 transition-transform`}
                    />

                    {/* Skill name */}
                    <span className="text-gray-300 text-sm font-medium group-hover/item:text-white transition-colors">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Decorative corner element */}
              <div
                className={`absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br ${group.color} opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity`}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom Stats */}
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
              5
            </div>
            <div className="text-sm text-gray-400 mt-1">Live Projects</div>
          </div>
          <div className="w-px h-12 bg-white/10" />
          <div className="text-center">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              2
            </div>
            <div className="text-sm text-gray-400 mt-1">Internships</div>
          </div>
          <div className="w-px h-12 bg-white/10" />
          <div className="text-center">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
              4
            </div>
            <div className="text-sm text-gray-400 mt-1">AI Systems Deployed</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
