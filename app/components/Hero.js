"use client";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { useEffect, useState, useRef, useMemo, useCallback } from "react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [typingComplete, setTypingComplete] = useState(false);
  const [scrambledName, setScrambledName] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef(null);

  // Initialize all motion values unconditionally
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { damping: 30, stiffness: 200 });
  const smoothMouseY = useSpring(mouseY, { damping: 30, stiffness: 200 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  
  // Create transforms for grid that won't be used on mobile
  const gridX = useTransform(smoothMouseX, (val) => val * 0.5);
  const gridY = useTransform(smoothMouseY, (val) => val * 0.5);

  // Detect mobile devices and set mounted
  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (isMobile) return;
    const { clientX, clientY } = e;
    setMousePosition({
      x: (clientX / window.innerWidth - 0.5) * 20,
      y: (clientY / window.innerHeight - 0.5) * 20,
    });
    mouseX.set((clientX / window.innerWidth - 0.5) * 40);
    mouseY.set((clientY / window.innerHeight - 0.5) * 40);
  }, [mouseX, mouseY, isMobile]);

  // Hacker typing scramble effect
  useEffect(() => {
    const fullName = "Mohammed Abdul Omer";
    let frame = 0;
    const chars = "!<>-_\\/[]{}—=+*^?#________";
    let output = "";

    const interval = setInterval(() => {
      frame++;

      output = fullName
        .split("")
        .map((char, i) => {
          if (frame / 3 > i) {
            return char;
          }
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");

      setScrambledName(output);

      if (frame / 3 > fullName.length) clearInterval(interval);
    }, 45);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!isMobile && mounted) {
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, [handleMouseMove, isMobile, mounted]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTypingComplete(true);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  const titles = useMemo(() => [
    "Machine Learning Engineer",
    "Generative AI Engineer", 
    "AI Researcher",
    "Deep Learner"
  ], []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [titles.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, filter: "blur(12px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.9, ease: [0.19, 1, 0.22, 1] },
    },
  };

  // Show loading skeleton until mounted
  if (!mounted) {
    return (
      <section
        id="home"
        className="relative min-h-screen pt-20 sm:pt-24 md:pt-28 flex flex-col items-center justify-center text-center overflow-hidden px-4"
      >
        <div className="relative z-10 w-full flex flex-col items-center">
          <div className="animate-pulse flex flex-col items-center gap-6">
            <div className="h-12 w-96 max-w-full bg-gray-800 rounded" />
            <div className="h-8 w-64 max-w-full bg-gray-800 rounded" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen pt-20 sm:pt-24 md:pt-28 flex flex-col items-center justify-center text-center overflow-hidden px-4"
    >
      {/* Layered Animated Background - Optimized for Mobile */}
      <div className="absolute inset-0 opacity-20 md:opacity-25 overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/4 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[700px] rounded-full blur-[80px] sm:blur-[120px] md:blur-[160px]"
          style={{
            background: "radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, rgba(79, 70, 229, 0.1) 50%, transparent 70%)",
          }}
          animate={isMobile ? {
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          } : {
            x: [0, 75, -50, 0],
            y: [0, -40, 30, 0],
            scale: [1, 1.2, 1.1, 1],
          }}
          transition={{
            duration: isMobile ? 20 : 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[280px] h-[280px] sm:w-[450px] sm:h-[450px] md:w-[650px] md:h-[650px] rounded-full blur-[70px] sm:blur-[110px] md:blur-[140px]"
          style={{
            background: "radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, rgba(139, 92, 246, 0.1) 50%, transparent 70%)",
          }}
          animate={isMobile ? {
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 1.1, 1],
          } : {
            x: [0, -60, 40, 0],
            y: [0, 50, -30, 0],
            scale: [1, 1.15, 1.1, 1],
          }}
          transition={{
            duration: isMobile ? 22 : 28,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />
      </div>

      {/* Dynamic Grid Pattern - Desktop Only */}
      {!isMobile && (
        <motion.div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(100,150,255,0.15) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(100,150,255,0.15) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            x: gridX,
            y: gridY,
          }}
        />
      )}

      {/* Radial Spotlight Effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle 500px at 50% 40%, rgba(59, 130, 246, 0.05), transparent 70%)",
        }}
        animate={{
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        style={{ opacity, y }}
        className="relative z-10 w-full flex flex-col items-center"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
          className="w-full flex flex-col items-center max-w-7xl mx-auto"
        >
          {/* Name with Enhanced Typing - Better Mobile Sizing */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-2 sm:mb-3 md:mb-4 relative text-center tracking-tight w-full leading-tight px-4"
            style={{
              transform: isMobile ? 'none' : `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
            }}
          >
            <motion.span
              className="relative inline-block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <span className="relative inline-block font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-400 to-purple-400">
                {scrambledName}
              </span>

              <motion.span
                animate={{ opacity: typingComplete ? [1, 0, 1] : 1 }}
                transition={{ 
                  duration: 0.6, 
                  repeat: typingComplete ? Infinity : 0 
                }}
                className="inline-block ml-0.5 sm:ml-1 md:ml-1.5 text-blue-400 font-normal text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
              >
                |
              </motion.span>
            </motion.span>
            
            {/* Multi-layer Glow */}
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-300 to-purple-400 bg-clip-text text-transparent blur-xl pointer-events-none opacity-40"
              animate={{ opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Mohammed Abdul Omer
            </motion.span>
          </motion.h1>

          {/* Enhanced Title Transition - Better Mobile Layout */}
          <motion.div
            variants={itemVariants}
            className="mt-1 sm:mt-2 md:mt-3 relative h-8 sm:h-10 md:h-12 flex items-center justify-center w-full"
          >
            <motion.div
              key={currentTitleIndex}
              initial={{ opacity: 0, y: 25, filter: "blur(12px)", scale: 0.95 }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
              exit={{ opacity: 0, y: -25, filter: "blur(12px)", scale: 0.95 }}
              transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
              className="absolute text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-center px-4"
            >
              <motion.span
                className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                style={{
                  backgroundSize: "200% auto",
                }}
                animate={{
                  backgroundPosition: ["0% center", "200% center"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {titles[currentTitleIndex]}
              </motion.span>
            </motion.div>
          </motion.div>

          {/* Social Links - New Section */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 sm:gap-5 md:gap-6 mt-12 sm:mt-16 md:mt-20 justify-center"
          >
            {[
              { icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z", label: "GitHub", href: "https://github.com/MOHD-OMER" },
              { icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z", label: "LinkedIn", href: "https://www.linkedin.com/in/mohammad-abdul-omer/" },
              { icon: "M0 4a2 2 0 012-2h20a2 2 0 012 2v16a2 2 0 01-2 2H2a2 2 0 01-2-2V4zm2-1a1 1 0 00-1 1v.217l10 5.455 10-5.455V4a1 1 0 00-1-1H2zm0 2.434V20a1 1 0 001 1h18a1 1 0 001-1V5.434l-9.668 5.275a.5.5 0 01-.464 0L2 5.434z", label: "Email", href: "mailto:mohammedabdulomer99@gmail.com" },
              { icon: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z", label: "WhatsApp", href: "https://wa.me/919652159548" },
              { icon: "M9 4h6v16H9V4zm-4 4h3v12H5V8zm14-2h3v14h-3V6z", label: "Resume", href: "/resume.pdf" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target={social.label === "Email" ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2 p-4 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
                whileHover={!isMobile ? { 
                  scale: 1.05,
                  y: -5,
                  boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)"
                } : {}}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 fill-gray-400 group-hover:fill-blue-400 transition-colors duration-300" viewBox="0 0 24 24">
                  <path d={social.icon} />
                </svg>
                <span className="text-xs sm:text-sm text-gray-400 group-hover:text-blue-400 transition-colors duration-300 font-medium">
                  {social.label}
                </span>
              </motion.a>
            ))}
          </motion.div>

          {/* Get in Touch Button */}
          <motion.div
            variants={itemVariants}
            className="mt-8 sm:mt-10 md:mt-12"
          >
            <motion.a
              href="#contact"
              className="group relative px-8 sm:px-10 md:px-12 py-3 sm:py-3.5 md:py-4 border border-blue-500/50 text-blue-400 rounded-full font-medium overflow-hidden backdrop-blur-xl bg-blue-500/5 hover:bg-blue-500/10 transition-all duration-300 inline-block"
              whileHover={!isMobile ? { 
                scale: 1.05,
                borderColor: "#60a5fa",
                boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)"
              } : {}}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 text-sm sm:text-base md:text-lg">
                Get in Touch
              </span>
            </motion.a>
          </motion.div>

          {/* Modern Scroll Indicator - Optimized for Mobile */}
          <motion.div
            variants={itemVariants}
            className="mt-12 sm:mt-16 md:mt-20 flex flex-col items-center gap-2 sm:gap-3 md:gap-5 pb-8"
          >
            <motion.span 
              className="text-gray-400 text-[10px] xs:text-xs md:text-sm font-semibold tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.25em] uppercase"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Scroll to explore
            </motion.span>
            <motion.div
              className="relative w-6 h-10 sm:w-7 sm:h-12 md:w-8 md:h-14 border-2 border-blue-400/50 rounded-full flex items-start justify-center p-1.5 sm:p-2 md:p-3 backdrop-blur-md bg-blue-500/10 shadow-[0_0_15px_rgba(100,150,255,0.15)] md:shadow-[0_0_30px_rgba(100,150,255,0.2)]"
              whileHover={!isMobile ? { 
                borderColor: "#60a5fa",
                scale: 1.15,
                boxShadow: "0 0 40px rgba(100,150,255,0.4)"
              } : {}}
            >
              <motion.div
                className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full shadow-lg shadow-blue-400/60"
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Floating Particles - Enhanced with Mouse Tracking */}
        {!isMobile && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(50)].map((_, i) => {
              const size = Math.random() * 3 + 1;
              const initialX = Math.random() * 100;
              const initialY = Math.random() * 100;
              const duration = Math.random() * 10 + 15;
              const delay = Math.random() * 5;
              
              return (
                <motion.div
                  key={i}
                  className="absolute rounded-full"
                  style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    background: i % 3 === 0 
                      ? "rgba(59, 130, 246, 0.6)" 
                      : i % 3 === 1 
                      ? "rgba(139, 92, 246, 0.5)" 
                      : "rgba(236, 72, 153, 0.4)",
                    left: `${initialX}%`,
                    top: `${initialY}%`,
                    boxShadow: `0 0 ${size * 3}px ${
                      i % 3 === 0 
                        ? "rgba(59, 130, 246, 0.8)" 
                        : i % 3 === 1 
                        ? "rgba(139, 92, 246, 0.7)" 
                        : "rgba(236, 72, 153, 0.6)"
                    }`,
                  }}
                  animate={{
                    y: [0, -100, 0],
                    x: [0, Math.sin(i) * 50, 0],
                    opacity: [0.2, 0.8, 0.2],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: duration,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: delay,
                  }}
                />
              );
            })}
          </div>
        )}

        {/* Mouse Follower Particles - Desktop Only */}
        {!isMobile && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(20)].map((_, i) => {
              const angle = (i / 20) * Math.PI * 2;
              const radius = 100 + (i * 15);
              
              return (
                <motion.div
                  key={`mouse-${i}`}
                  className="absolute rounded-full"
                  style={{
                    width: "4px",
                    height: "4px",
                    background: i % 2 === 0 
                      ? "rgba(59, 130, 246, 0.7)" 
                      : "rgba(139, 92, 246, 0.6)",
                    boxShadow: `0 0 10px ${
                      i % 2 === 0 
                        ? "rgba(59, 130, 246, 0.9)" 
                        : "rgba(139, 92, 246, 0.8)"
                    }`,
                    left: "50%",
                    top: "50%",
                    x: mousePosition.x * (radius / 100) * Math.cos(angle),
                    y: mousePosition.y * (radius / 100) * Math.sin(angle),
                  }}
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.4, 0.7, 0.4],
                  }}
                  transition={{
                    duration: 2 + (i * 0.1),
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.05,
                  }}
                />
              );
            })}
          </div>
        )}
      </motion.div>
    </section>
  );
}