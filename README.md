# 🌐 Mohammed Abdul Omer — AI/ML Engineer Portfolio

<div align="center">

[![Live Portfolio](https://img.shields.io/badge/🌐_Live_Portfolio-mohdomer.vercel.app-blue?style=for-the-badge)](https://mohdomer.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js_16-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-EF0076?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion)
[![Vercel](https://img.shields.io/badge/Deployed_on_Vercel-000000?style=for-the-badge&logo=vercel)](https://vercel.com)

A modern, animated, and fully responsive AI/ML engineer portfolio — built with Next.js App Router, Tailwind CSS, and Framer Motion.

</div>

---

## 🔗 Live

👉 **[https://mohdomer.vercel.app](https://mohdomer.vercel.app)**

---

## 🚀 Tech Stack

| Layer | Tools |
|---|---|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS + custom CSS design system |
| Animations | Framer Motion |
| Font | Inter via `next/font/google` |
| Deployment | Vercel (auto-deploy on push to `main`) |

---

## ✨ Features

- ⚡ Smooth scroll-based animations with Framer Motion
- 🎨 Glassmorphism + gradient UI design system
- 📱 Fully responsive — mobile, tablet, and desktop
- 🎯 Active navbar highlight — updates on scroll and on click
- 🤖 Hero section with name reveal, rotating titles, floating particles, and mouse-follower effects
- 🧠 Skills section with 7 grouped categories covering the full AI/ML stack
- 🛠️ Projects section with category filter, 10 projects, and hover-reveal details
- 💼 Experience section with timeline layout and metrics
- 🏅 Certifications section with 6 verified credentials
- 📬 Contact section with availability badge, copy-to-clipboard, and mailto form
- 📄 Resume download button (served uncached so the latest PDF always wins)
- 🔗 Social links: GitHub · LinkedIn · HuggingFace · Email · WhatsApp
- 🔍 SEO: generated Open Graph card, favicon, `robots.txt`, and `sitemap.xml`
- ♿ Honours `prefers-reduced-motion` across CSS and Framer Motion animations

---

## 📁 Folder Structure

```
Portfolio/
├── app/
│   ├── components/
│   │   ├── Hero.js           # Animated hero with particles & typing effect
│   │   ├── NavBar.js         # Fixed navbar with active section tracking
│   │   ├── SectionHeader.js  # Shared animated section header component
│   │   ├── MotionProvider.js # Applies prefers-reduced-motion to Framer Motion
│   │   ├── Skills.js         # 7 skill groups + stats bar
│   │   ├── Projects.js       # 10 projects with filter tabs
│   │   ├── Experience.js     # Timeline with metrics
│   │   ├── Certifications.js # 6 verified certificates
│   │   └── Contact.js        # Contact cards + mailto form
│   ├── globals.css           # Design tokens, animations, utility classes
│   ├── layout.js             # Root layout with metadata + Inter font
│   ├── icon.js               # Generated favicon
│   ├── opengraph-image.js    # Generated social share card
│   ├── robots.js             # robots.txt
│   ├── sitemap.js            # sitemap.xml
│   ├── site.js               # Shared SITE_URL constant
│   └── page.js               # Main page — assembles all sections
├── public/
│   ├── profile.png
│   └── resume_2026.pdf
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
└── jsconfig.json
```

---

## 🛠️ Local Setup

```bash
# Clone the repo
git clone https://github.com/MOHD-OMER/Portfolio.git
cd Portfolio

# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🚀 Deployment

Deployed on **Vercel**. Every push to `main` triggers an automatic redeployment.

---

## 📬 Contact

| | |
|---|---|
| 👤 Name | Mohammed Abdul Omer |
| 📧 Email | mohammedabdulomer99@gmail.com |
| 🌐 Portfolio | [mohdomer.vercel.app](https://mohdomer.vercel.app) |
| 💼 LinkedIn | [mohammad-abdul-omer](https://www.linkedin.com/in/mohammad-abdul-omer) |
| 💻 GitHub | [MOHD-OMER](https://github.com/MOHD-OMER) |
| 🤗 HuggingFace | [mohdomer](https://huggingface.co/mohdomer) |

---

<div align="center">

If you found this useful, consider giving the repo a ⭐ — it helps!

</div>
