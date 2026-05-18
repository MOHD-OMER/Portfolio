"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Static — defined outside component to avoid stale closure in useEffect
const navItems = [
  { id: "home",       label: "Home",       number: "00_" },
  { id: "about",      label: "About",      number: "01_" },
  { id: "skills",     label: "Skills",     number: "02_" },
  { id: "projects",   label: "Projects",   number: "03_" },
  { id: "experience", label: "Experience", number: "04_" },
  { id: "contact",    label: "Contact",    number: "05_" },
];

export default function NavBar() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled]           = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // FIX 1: Smooth scroll — prevents URL hash jump and page snap
  const scrollToSection = useCallback((e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  }, []);

  // Scroll tracking + active section detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // FIX 2: Use window.innerHeight/3 so active state updates mid-viewport,
      // not only when the section's very top pixel crosses the header
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(item.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // set correct active on mount
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

  // FIX 3: Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-gray-900/80 shadow-[0_8px_32px_rgba(0,0,0,0.4)] border-b border-gray-800/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 sm:py-5">

          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => scrollToSection(e, "home")}
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              <svg
                className="w-7 h-7 sm:w-8 sm:h-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-300"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                />
              </svg>
              <motion.div
                className="absolute inset-0 rounded-lg bg-blue-400/20 blur-lg"
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <span className="text-lg sm:text-xl font-bold tracking-tight">
              <span className="text-blue-400">M.A </span>
              <span className="bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
                Omer
              </span>
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => (
              // FIX 4: `relative` on the anchor so the absolute layoutId pill
              // positions against this link, not a distant ancestor
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className="relative group"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {/*
                 * FIX 5: Active item carries NO bg class of its own.
                 * The layoutId overlay below provides all bg + border,
                 * so nothing doubles when both render at the same time.
                 * The blue glow shadow stays here as it isn't part of the overlay.
                 */}
                <div
                  className={`relative z-10 px-3 lg:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? "text-white shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                      : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                  }`}
                >
                  <span className="text-blue-400 text-xs mr-1">{item.number}</span>
                  {item.label}
                </div>

                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg border border-blue-500/30"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.a>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <motion.button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden p-2 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:bg-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {/*
             * FIX 6: Hamburger X geometry corrected.
             * Container: w-5 h-5 = 20px tall. Bars: h-0.5 = 2px. Gap: space-y-1.5 = 6px.
             * Stack = 3×2 + 2×6 = 18px. Offset from top = (20-18)/2 = 1px.
             * Bar 1 center = 1+1 = 2px. Container center = 10px. Delta = +8px → y:8
             * Bar 3 center = 1+2+6+2+6+1 = 18px.               Delta = -8px → y:-8
             * (Original used ±6 which left the X ~2px misaligned.)
             */}
            <div className="space-y-1.5 w-5 h-5 flex flex-col justify-center">
              <motion.span
                animate={mobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="block w-full h-0.5 bg-blue-400 rounded-full"
              />
              <motion.span
                animate={mobileMenuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                className="block w-full h-0.5 bg-blue-400 rounded-full"
              />
              <motion.span
                animate={mobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="block w-full h-0.5 bg-blue-400 rounded-full"
              />
            </div>
          </motion.button>
        </div>

        {/*
         * FIX 7: AnimatePresence replaces height:0→"auto" + initial={false}.
         * The menu fully unmounts on close, so child items always start from
         * `initial` with no stale-opacity flicker on re-open.
         */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="md:hidden overflow-hidden"
            >
              <nav className="flex flex-col gap-2 bg-gray-900/95 backdrop-blur-xl rounded-xl p-4 mb-4 border border-gray-800/50 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => scrollToSection(e, item.id)}
                    // Items mount fresh every open — no toggled animate needed
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`relative px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                      activeSection === item.id
                        ? "text-white bg-blue-500/20 border border-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.2)]"
                        : "text-gray-400 hover:text-white hover:bg-gray-800/50 border border-transparent"
                    }`}
                  >
                    <span className="text-blue-400 text-xs mr-2">{item.number}</span>
                    {item.label}

                    {activeSection === item.id && (
                      <motion.div
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 bg-blue-400 rounded-full"
                        animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                  </motion.a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
