"use client";

import { useEffect, useState } from "react";
import { motion, LazyMotion, domAnimation } from "framer-motion";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Certifications from "./components/Certifications";
import SectionHeader from "./components/SectionHeader";

// ── Client-only Hero (dynamic import avoids SSR hydration mismatch) ──────────
function ClientOnlyHero() {
  const [Hero, setHero]       = useState(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const timer = setTimeout(() => {
      import("./components/Hero").then((mod) => setHero(() => mod.default));
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  if (!isClient || !Hero) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-gray-400 animate-pulse">Loading...</div>
      </div>
    );
  }

  return <Hero />;
}

// ── About — inline because it shares the page's glassmorphism card pattern ───
function About() {
  // Skill highlight boxes — updated to reflect current stack accurately
  const specialisations = [
    {
      title: "NLP & Generative AI",
      desc: "LLMs, RAG systems, LangGraph, LangChain, prompt engineering, Groq & Ollama",
    },
    {
      title: "LLM Engineering",
      desc: "QLoRA / PEFT fine-tuning, bitsandbytes quantization, HuggingFace Hub deployment",
    },
    {
      title: "Agentic AI",
      desc: "Multi-agent systems via CrewAI, LangGraph ReAct agents, Tavily tool-use",
    },
    {
      title: "MLOps & CV",
      desc: "MLflow, W&B, Evidently AI, drift monitoring, CNNs, YOLOv8, FastAPI deployment",
    },
  ];

  return (
    <section
      id="about"
      className="section main-container py-24 relative overflow-hidden"
    >
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

          {/* Header — uses shared SectionHeader but left-aligned inside card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-10 text-left"
          >
            <h2 className="relative text-5xl md:text-6xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 inline-block">
              About Me
            </h2>
            <motion.div
              className="h-1.5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "120px" }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            />
          </motion.div>

          {/* Body */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="relative space-y-6 text-gray-300 text-lg md:text-xl leading-relaxed"
          >
            <p>
              I build{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 font-bold">
                AI systems that ship
              </span>{" "}
              — not just experiments in notebooks. I design and deploy
              production-grade AI applications end-to-end, from model
              architecture and fine-tuning to deployed APIs and live demos.
            </p>

            <p>
              I&apos;ve built{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-bold">
                fine-tuned LLMs, multi-agent research pipelines, RAG chatbots
              </span>
              , MLOps workflows with drift monitoring, and computer vision
              systems for real-world safety applications — all served through
              FastAPI and integrated into live deployments.
            </p>

            <p>I specialise at the intersection of:</p>

            {/* Specialisation grid — 4 boxes, updated stack */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
              {specialisations.map((skill, index) => (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="p-5 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-blue-400/30 transition-all duration-300 group"
                >
                  <h3 className="font-bold text-blue-400 mb-2 group-hover:text-purple-400 transition-colors">
                    {skill.title}
                  </h3>
                  <p className="text-sm text-gray-400">{skill.desc}</p>
                </motion.div>
              ))}
            </div>

            <p>
              Final year B.E. Computer Science (AI &amp; ML) at Lords Institute
              of Engineering &amp; Technology, Hyderabad — graduating 2025. I
              stay current with emerging research in LLMs, agentic systems, and
              MLOps — and I build things to understand them, not just read about
              them.
            </p>

            {/* Availability callout */}
            <p className="text-gray-300 italic border-l-4 border-blue-400/50 pl-6 py-2 bg-blue-500/5 rounded-r-lg">
              Open to AI Engineer, ML Engineer, and MLOps Engineer roles where I
              can work on production systems that solve real problems.
            </p>
          </motion.div>

          {/* Decorative rings */}
          <div className="absolute top-8 right-8 w-24 h-24 border border-blue-400/20 rounded-full blur-sm opacity-30" />
          <div className="absolute bottom-8 left-8 w-32 h-32 border border-purple-400/20 rounded-full blur-sm opacity-30" />
        </div>
      </motion.div>
    </section>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function Page() {
  return (
    <LazyMotion features={domAnimation}>
      <div>
        {/* 00 — Hero */}
        <ClientOnlyHero />

        {/* 01 — About */}
        <About />

        {/* 02 — Skills */}
        <section id="skills" className="section main-container">
          <Skills />
        </section>

        {/* 03 — Projects */}
        <section id="projects" className="section main-container">
          <Projects />
        </section>

        {/* 04 — Experience */}
        <section id="experience" className="section main-container">
          <Experience />
        </section>

        {/* Certifications — sits between Experience and Contact, no nav item needed */}
        <section id="certifications" className="section main-container">
          <Certifications />
        </section>

        {/* 05 — Contact */}
        <section id="contact" className="section main-container">
          <Contact />
        </section>
      </div>
    </LazyMotion>
  );
}
