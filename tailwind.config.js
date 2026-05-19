/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // ── Font ──────────────────────────────────────────────────────────────
      // Maps Tailwind's `font-sans` to the CSS variable injected by
      // next/font/google in layout.js. Without this, `font-sans` falls back
      // to the browser default and next/font's optimised Inter is never used.
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
      },

      colors: {
        // Base colors
        dark: {
          DEFAULT: "#07090c",
          50: "#1a1f2e",
          100: "#0f1720",
          200: "#0d1419",
          300: "#0a0f13",
          400: "#07090c",
          500: "#050709",
          600: "#030506",
          700: "#020304",
          800: "#010203",
          900: "#000102",
        },

        // Accent palette
        accent: {
          DEFAULT: "#00c2ff",
          50: "#e6f9ff",
          100: "#ccf3ff",
          200: "#99e7ff",
          300: "#66dbff",
          400: "#33cfff",
          500: "#00c2ff",
          600: "#0099cc",
          700: "#007399",
          800: "#004d66",
          900: "#002633",
          light: "#5dd9ff",
          dark: "#0099cc",
        },

        // Secondary accent
        secondary: {
          DEFAULT: "#60a5fa",
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },

        // Text colors
        text: {
          DEFAULT: "#e6eef6",
          primary: "#e6eef6",
          secondary: "#b8c5d3",
          tertiary: "#8b95a1",
          muted: "#687280",
          dim: "#4a5564",
        },

        // UI element colors
        surface: {
          DEFAULT: "#0f1720",
          light: "#1a1f2e",
          dark: "#0a0f13",
        },

        border: {
          DEFAULT: "rgba(255, 255, 255, 0.04)",
          light: "rgba(255, 255, 255, 0.08)",
          accent: "rgba(0, 194, 255, 0.2)",
        },
      },

      backgroundImage: {
        'gradient-primary':  'linear-gradient(135deg, #00c2ff, #60a5fa)',
        'gradient-secondary':'linear-gradient(135deg, #60a5fa, #00c2ff)',
        'gradient-radial':   'radial-gradient(circle, var(--tw-gradient-stops))',
        'gradient-glow':     'radial-gradient(circle, rgba(0, 194, 255, 0.1) 0%, transparent 70%)',
        'gradient-mesh':     `radial-gradient(at 20% 30%, rgba(0, 194, 255, 0.08) 0%, transparent 50%),
                              radial-gradient(at 80% 70%, rgba(96, 165, 250, 0.06) 0%, transparent 50%),
                              radial-gradient(at 40% 80%, rgba(0, 194, 255, 0.04) 0%, transparent 50%)`,
        'glass':             'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
        'glass-strong':      'linear-gradient(135deg, rgba(15, 23, 32, 0.95) 0%, rgba(15, 23, 32, 0.98) 100%)',
      },

      boxShadow: {
        'glow':       '0 0 20px rgba(0, 194, 255, 0.3)',
        'glow-sm':    '0 0 10px rgba(0, 194, 255, 0.2)',
        'glow-md':    '0 0 25px rgba(0, 194, 255, 0.35)',
        'glow-lg':    '0 0 40px rgba(0, 194, 255, 0.4)',
        'glow-xl':    '0 0 60px rgba(0, 194, 255, 0.5)',
        'accent':     '0 4px 15px rgba(0, 194, 255, 0.25)',
        'accent-lg':  '0 8px 25px rgba(0, 194, 255, 0.4)',
        'card':       '0 10px 40px rgba(0, 0, 0, 0.3)',
        'card-hover': '0 20px 60px rgba(0, 194, 255, 0.2)',
        'inner-glow': 'inset 0 0 20px rgba(0, 194, 255, 0.1)',
        'glass':      '0 8px 32px rgba(0, 194, 255, 0.1)',
      },

      animation: {
        'fade-in':        'fadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-in-left':  'slideInLeft 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-in-right': 'slideInRight 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-in-up':    'slideInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-in-down':  'slideInDown 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        'scale-in':       'scaleIn 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        'float':          'float 3s ease-in-out infinite',
        'pulse-glow':     'pulseGlow 2s ease-in-out infinite',
        'shimmer':        'shimmer 2s linear infinite',
        'spin-slow':      'spin 8s linear infinite',
        'spin-slower':    'spin 12s linear infinite',
        'bounce-slow':    'bounce 3s infinite',
        'gradient-shift': 'gradientShift 5s ease infinite',
        'mesh-move':      'meshMove 20s ease-in-out infinite',
      },

      keyframes: {
        fadeIn:        { from: { opacity: '0', transform: 'translateY(30px)' },  to: { opacity: '1', transform: 'translateY(0)' } },
        slideInLeft:   { from: { opacity: '0', transform: 'translateX(-40px)' }, to: { opacity: '1', transform: 'translateX(0)' } },
        slideInRight:  { from: { opacity: '0', transform: 'translateX(40px)' },  to: { opacity: '1', transform: 'translateX(0)' } },
        slideInUp:     { from: { opacity: '0', transform: 'translateY(40px)' },  to: { opacity: '1', transform: 'translateY(0)' } },
        slideInDown:   { from: { opacity: '0', transform: 'translateY(-40px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        scaleIn:       { from: { opacity: '0', transform: 'scale(0.9)' },        to: { opacity: '1', transform: 'scale(1)' } },
        float:         { '0%, 100%': { transform: 'translateY(0px)' },  '50%': { transform: 'translateY(-10px)' } },
        pulseGlow:     { '0%, 100%': { boxShadow: '0 0 20px rgba(0, 194, 255, 0.2)' }, '50%': { boxShadow: '0 0 35px rgba(0, 194, 255, 0.4)' } },
        shimmer:       { from: { backgroundPosition: '-1000px 0' }, to: { backgroundPosition: '1000px 0' } },
        gradientShift: { '0%, 100%': { backgroundPosition: '0% 50%' },   '50%': { backgroundPosition: '100% 50%' } },
        meshMove:      { '0%, 100%': { opacity: '1', transform: 'scale(1)' }, '50%': { opacity: '0.8', transform: 'scale(1.05)' } },
      },

      backdropBlur: {
        xs:   '2px',
        '3xl':'24px',
        '4xl':'32px',
      },

      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },

      spacing: {
        '18':  '4.5rem',
        '88':  '22rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
      },

      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.75rem' }],
        '3xl': ['2rem',     { lineHeight: '2.25rem' }],
        '4xl': ['2.5rem',   { lineHeight: '2.75rem' }],
        '5xl': ['3rem',     { lineHeight: '3.25rem' }],
        '6xl': ['3.75rem',  { lineHeight: '1' }],
        '7xl': ['4.5rem',   { lineHeight: '1' }],
        '8xl': ['6rem',     { lineHeight: '1' }],
        '9xl': ['8rem',     { lineHeight: '1' }],
      },

      fontWeight: {
        'extra-bold': '800',
        'black':      '900',
      },

      letterSpacing: {
        'tighter':    '-0.05em',
        'extra-wide': '0.15em',
      },

      lineHeight: {
        'extra-loose':  '2.5',
        'relaxed-plus': '1.75',
      },

      zIndex: {
        '60': '60', '70': '70', '80': '80', '90': '90', '100': '100',
      },

      transitionDuration: {
        '400': '400ms', '600': '600ms', '800': '800ms', '900': '900ms',
      },

      transitionTimingFunction: {
        'smooth':        'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce-in':     'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth-in-out': 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      },

      blur: {
        '3xl': '64px',
        '4xl': '80px',
      },

      scale: {
        '102': '1.02',
        '103': '1.03',
      },

      aspectRatio: {
        'auto':      'auto',
        'square':    '1 / 1',
        'video':     '16 / 9',
        'portrait':  '3 / 4',
        'ultrawide': '21 / 9',
      },

      screens: {
        'xs':  '475px',
        '3xl': '1920px',
      },
    },
  },
  plugins: [],
};
