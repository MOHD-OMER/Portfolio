"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Module-level constant — safe to use in useEffect without deps
const navItems = [
  { id: "home",       label: "Home",       number: "00" },
  { id: "about",      label: "About",      number: "01" },
  { id: "skills",     label: "Skills",     number: "02" },
  { id: "projects",   label: "Projects",   number: "03" },
  { id: "experience", label: "Experience", number: "04" },
  { id: "contact",    label: "Contact",    number: "05" },
];

export default function NavBar() {
  const [activeSection, setActiveSection]   = useState("home");
  const [scrolled, setScrolled]             = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // FIX: Smooth scroll + close menu; prevents URL hash jump
  const scrollToSection = useCallback(
    (e, id) => {
      e.preventDefault();
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    },
    []
  );

  // Scroll tracking — uses innerHeight/3 as threshold so active section
  // updates smoothly rather than only at the very top of each section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const threshold = window.scrollY + window.innerHeight / 3;
      let current = navItems[0].id;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= threshold) current = item.id;
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // run once on mount to set initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when viewport widens past md breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-gray-950/85 border-b border-gray-800/60 shadow-[0_8px_40px_rgba(0,0,0,0.5)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* ── Logo ── */}
          <motion.a
            href="#home"
            onClick={(e) => scrollToSection(e, "home")}
            className="flex items-center gap-2.5 group"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            <div className="relative flex items-center justify-center w-8 h-8 shrink-0">
              <svg
                className="w-7 h-7 text-cyan-400 transition-colors duration-300 group-hover:text-cyan-300"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2" />
                <rect x="7" y="7" width="10" height="10" rx="1" />
                <path d="M9 9h6v6H9V9z" />
              </svg>
              {/* Soft ambient glow on hover */}
              <span className="absolute inset-0 rounded-full bg-cyan-400/15 blur-md scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>

            <span className="text-lg font-bold tracking-tight leading-none">
              <span className="text-cyan-400 font-mono">M.A </span>
              <span className="bg-gradient-to-br from-gray-100 to-gray-400 bg-clip-text text-transparent">
                Omer
              </span>
            </span>
          </motion.a>

          {/* ── Desktop Navigation ── */}
          <nav
            className="hidden md:flex items-center gap-0.5"
            aria-label="Primary navigation"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  // FIX: `relative` here so the absolute layoutId overlay
                  //      positions against this link, not the nearest ancestor
                  className="relative px-3.5 py-2 rounded-lg text-sm font-medium group"
                >
                  {/*
                   * FIX: layoutId pill is a SINGLE element rendered only when
                   * active. The active link itself carries NO bg/border classes
                   * — all styling comes from the pill, so there's no doubling.
                   */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg bg-cyan-500/10 border border-cyan-500/25"
                      transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                      // Must be below text in z-order
                      style={{ zIndex: 0 }}
                    />
                  )}

                  <span className="relative z-10 flex items-center gap-1.5">
                    <span
                      className={`text-[10px] font-mono tabular-nums transition-colors duration-200 ${
                        isActive
                          ? "text-cyan-400"
                          : "text-gray-600 group-hover:text-gray-400"
                      }`}
                    >
                      {item.number}_
                    </span>
                    <span
                      className={`transition-colors duration-200 ${
                        isActive
                          ? "text-white"
                          : "text-gray-400 group-hover:text-gray-200"
                      }`}
                    >
                      {item.label}
                    </span>
                  </span>
                </a>
              );
            })}
          </nav>

          {/* ── Right side: Resume CTA + Hamburger ── */}
          <div className="flex items-center gap-3">
            {/* Resume button — desktop only */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-sm font-medium text-cyan-400 border border-cyan-500/35 hover:bg-cyan-500/10 hover:border-cyan-500/60 transition-all duration-200"
            >
              Resume
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </a>

            {/*
             * FIX: Hamburger spans are h-px (1px). Container is h-9 (36px)
             * with gap-[5px]. Total bar-stack height = 3×1 + 2×5 = 13px.
             * Center offset = (36 - 13) / 2 + 0.5 = 12px from top.
             * Container center = 18px → bars need to travel ±6px. ✓
             */}
            <motion.button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="md:hidden relative w-9 h-9 flex flex-col items-center justify-center gap-[5px] rounded-lg bg-gray-800/60 border border-gray-700/50 hover:border-cyan-500/40 hover:bg-gray-800/80 transition-all duration-200"
              whileTap={{ scale: 0.93 }}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav"
            >
              <motion.span
                className="block w-4 h-px bg-gray-300 rounded-full"
                animate={mobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.22 }}
              />
              <motion.span
                className="block w-4 h-px bg-gray-300 rounded-full"
                animate={mobileMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.18 }}
              />
              <motion.span
                className="block w-4 h-px bg-gray-300 rounded-full"
                animate={mobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.22 }}
              />
            </motion.button>
          </div>
        </div>
      </div>

      {/*
       * ── Mobile Menu ──
       * FIX: Use AnimatePresence so the menu properly unmounts (and re-mounts)
       * on toggle, rather than animate height: 0 → "auto" which breaks with
       * overflow: hidden + opacity fade simultaneously and causes the child
       * items' initial/animate to conflict with the initial={false} hack.
       */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav"
            key="mobile-nav"
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="md:hidden mx-4 mb-3"
          >
            <nav
              className="flex flex-col p-2 gap-0.5 rounded-xl bg-gray-900/95 backdrop-blur-xl border border-gray-800/60 shadow-[0_16px_48px_rgba(0,0,0,0.5)]"
              aria-label="Mobile navigation"
            >
              {navItems.map((item, i) => {
                const isActive = activeSection === item.id;
                return (
                  <motion.a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => scrollToSection(e, item.id)}
                    // FIX: These items are now always mounting fresh (thanks to
                    // AnimatePresence unmounting the parent), so initial is
                    // correct and there's no stale-state flicker.
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.18 }}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? "text-white bg-cyan-500/10 border border-cyan-500/25"
                        : "text-gray-400 hover:text-white hover:bg-gray-800/60 border border-transparent"
                    }`}
                  >
                    <span
                      className={`text-[10px] font-mono tabular-nums ${
                        isActive ? "text-cyan-400" : "text-gray-600"
                      }`}
                    >
                      {item.number}_
                    </span>
                    {item.label}

                    {isActive && (
                      <motion.span
                        className="ml-auto w-1.5 h-1.5 rounded-full bg-cyan-400"
                        animate={{ opacity: [1, 0.35, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                  </motion.a>
                );
              })}

              {/* Resume row inside mobile menu */}
              <div className="mt-1 pt-2 border-t border-gray-800/60 px-1 pb-1">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/10 transition-all duration-200"
                >
                  Download Resume
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
