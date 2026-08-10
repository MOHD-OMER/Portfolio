// Server component on purpose — the footer is static, so it ships no client
// JavaScript. The year is computed during the render that produces the HTML,
// which also avoids the server/client mismatch a `new Date()` in a client
// component would cause around midnight.

const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

const socials = [
  { href: "https://github.com/MOHD-OMER", label: "GitHub" },
  { href: "https://www.linkedin.com/in/mohammad-abdul-omer/", label: "LinkedIn" },
  { href: "https://huggingface.co/mohdomer", label: "HuggingFace" },
  { href: "mailto:mohammedabdulomer99@gmail.com", label: "Email" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/10 bg-white/[0.02]">
      <div className="main-container py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Identity */}
          <div>
            <p className="text-lg font-bold tracking-tight">
              <span className="text-blue-400">M.A.</span>
              <span className="text-white">Omer</span>
            </p>
            <p className="mt-2 text-sm text-gray-400 leading-relaxed">
              CSE-AIML Engineer building production LLM, agentic, and MLOps
              systems.
            </p>
            <p className="mt-3 text-sm text-gray-500">Hyderabad, India</p>
          </div>

          {/* Section links */}
          <nav aria-label="Footer">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              Explore
            </h2>
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Elsewhere + resume */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              Elsewhere
            </h2>
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target={s.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={s.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="/resume_2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-blue-500/50 px-4 py-2 text-sm font-semibold text-blue-400 hover:bg-blue-500/10 transition-colors"
            >
              Download Résumé
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="text-sm text-gray-500">
            © {year} Mohammed Abdul Omer. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">Built with Next.js and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
