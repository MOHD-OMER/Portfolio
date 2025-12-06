"use client";

import { useEffect, useState } from "react";
import { motion, LazyMotion, domAnimation } from "framer-motion";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

// Client-only wrapper for Hero
function ClientOnlyHero() {
  const [Hero, setHero] = useState(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      import("./components/Hero").then((mod) => {
        setHero(() => mod.default);
      });
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

function About() {
  return (
    <section id="about" className="section main-container py-24 relative overflow-hidden">
      {/* Background accent elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative max-w-5xl mx-auto"
      >
        {/* Main container with glassmorphism */}
        <div className="relative rounded-3xl p-12 md:p-16 bg-gradient-to-br from-white/[0.07] to-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12),0_0_60px_rgba(100,150,255,0.08)]">
          
          {/* Animated gradient glow */}
          <motion.div 
            className="absolute inset-0 rounded-3xl pointer-events-none opacity-40"
            animate={{
              background: [
                "radial-gradient(circle at 0% 0%, rgba(59,130,246,0.15), transparent 50%)",
                "radial-gradient(circle at 100% 100%, rgba(168,85,247,0.15), transparent 50%)",
                "radial-gradient(circle at 0% 100%, rgba(236,72,153,0.15), transparent 50%)",
                "radial-gradient(circle at 0% 0%, rgba(59,130,246,0.15), transparent 50%)",
              ]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />

          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-10"
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

          {/* Content */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="relative space-y-6 text-gray-300 text-lg md:text-xl leading-relaxed"
          >
            <p>
              I am a dedicated{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 font-bold">
                Machine Learning Engineer
              </span>{" "}
              and{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-bold">
                Generative AI Specialist
              </span>{" "}
              with deep expertise in architecting intelligent systems that transform complex data into actionable insights. My technical foundation spans advanced neural network architectures, natural language processing, retrieval-augmented generation systems, and end-to-end AI application development.
            </p>

            <p>
              With a proven track record in building production-ready AI solutions, I specialize in designing scalable machine learning pipelines, implementing state-of-the-art generative models, and optimizing model performance for real-world deployment. My approach combines rigorous technical methodology with strategic problem-solving to deliver measurable business impact.
            </p>

            <p>
              I have successfully developed and deployed multiple AI-powered applications across educational technology and enterprise productivity domains, demonstrating proficiency in:
            </p>

            {/* Skills highlight boxes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
              {[
                { title: "Deep Learning", desc: "Neural networks, CNNs, RNNs, Transformers" },
                { title: "Generative AI", desc: "LLMs, RAG systems, prompt engineering" },
                { title: "MLOps", desc: "Model deployment, monitoring, CI/CD" },
                { title: "Data Engineering", desc: "Pipeline optimization, feature engineering" }
              ].map((skill, index) => (
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
              My commitment to excellence extends beyond technical implementation—I maintain a continuous learning mindset, staying current with emerging research in machine learning, computer vision, and AI safety. I thrive in collaborative, innovation-driven environments where cutting-edge technology meets practical application.
            </p>

            <p className="text-gray-400 italic border-l-4 border-blue-400/50 pl-6 py-2 bg-blue-500/5 rounded-r-lg">
              I am actively seeking opportunities to contribute to impactful AI initiatives where I can leverage my expertise to drive innovation, optimize intelligent systems, and push the boundaries of what's possible with artificial intelligence.
            </p>
          </motion.div>

          {/* Decorative elements */}
          <div className="absolute top-8 right-8 w-24 h-24 border border-blue-400/20 rounded-full blur-sm opacity-30" />
          <div className="absolute bottom-8 left-8 w-32 h-32 border border-purple-400/20 rounded-full blur-sm opacity-30" />
        </div>
      </motion.div>
    </section>
  );
}

export default function Page() {
  return (
    <LazyMotion features={domAnimation}>
      <div>
        <ClientOnlyHero />
        <About />
        {/* SKILLS */}
        <section id="skills" className="section main-container">
          <Skills />
        </section>
        {/* PROJECTS */}
        <section id="projects" className="section main-container">
          <Projects />
        </section>
        {/* EXPERIENCE */}
        <section id="experience" className="section main-container">
          <Experience />
        </section>
        {/* CONTACT */}
        <section id="contact" className="section main-container">
          <Contact />
        </section>
      </div>
    </LazyMotion>
  );
}