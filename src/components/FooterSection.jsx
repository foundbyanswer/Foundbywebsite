import { motion } from "framer-motion";

const FOOTER_LINKS = {
  Services: [
    { label: "Entity Authority", href: "#services" },
    { label: "Semantic Content", href: "#services" },
    { label: "Citation Management", href: "#services" },
    { label: "GEO Audit", href: "#audit" },
  ],
  Company: [
    { label: "Methodology", href: "#methodology" },
    { label: "About", href: "#about" },
    { label: "Case Studies", href: "#" },
    { label: "Blog", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "llms.txt", href: "/llms.txt" },
  ],
};

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/foundbyanswer",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-4 h-4"
        aria-hidden="true"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "X / Twitter",
    href: "https://twitter.com/foundbyanswer",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-4 h-4"
        aria-hidden="true"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/foundbyanswer",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-4 h-4"
        aria-hidden="true"
      >
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
];

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="about"
      aria-label="Site footer"
      style={{
        background: "#0d1117",
        borderTop: "1px solid rgba(55,65,81,0.5)",
        fontFamily: '"Inter", system-ui, sans-serif',
      }}
    >
      {/* ── Pre-footer CTA band ─────────────────────────────── */}
      <div
        style={{
          background:
            "linear-gradient(90deg, rgba(245,158,11,0.06) 0%, rgba(245,158,11,0.10) 50%, rgba(245,158,11,0.06) 100%)",
          borderBottom: "1px solid rgba(245,158,11,0.12)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p
              className="text-lg font-bold text-white mb-1"
              style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
            >
              Ready to become the answer?
            </p>
            <p className="text-sm" style={{ color: "#6b7280" }}>
              Join the brands AI talks about. Not the ones it ignores.
            </p>
          </div>

          <motion.a
            href="#audit"
            whileHover={{
              scale: 1.04,
              boxShadow: "0 0 28px rgba(245,158,11,0.45)",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="flex-shrink-0 inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold"
            style={{
              background: "#f59e0b",
              color: "#111827",
            }}
          >
            Start Free Audit
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.a>
        </div>
      </div>

      {/* ── Main footer body ────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* ── Brand column ──────────────────────────────── */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <a
              href="/"
              className="inline-flex items-center gap-0.5 mb-5 group"
              aria-label="FoundByAnswer home"
            >
              <span
                className="font-bold text-xl text-white group-hover:text-[#f59e0b] transition-colors duration-200"
                style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
              >
                FoundBy
              </span>
              <span
                className="font-bold text-xl"
                style={{
                  color: "#f59e0b",
                  fontFamily: '"Inter", system-ui, sans-serif',
                }}
              >
                Answer
              </span>
              <span
                className="ml-2 text-[10px] font-semibold tracking-widest uppercase px-1.5 py-0.5 rounded border"
                style={{
                  color: "#f59e0b",
                  borderColor: "rgba(245,158,11,0.25)",
                  background: "rgba(245,158,11,0.07)",
                  fontFamily: '"Inter", system-ui, sans-serif',
                }}
              >
                GEO
              </span>
            </a>

            {/* Tagline */}
            <p
              className="text-base font-semibold mb-3 leading-snug"
              style={{
                color: "#f9fafb",
                fontFamily: '"Playfair Display", Georgia, serif',
                fontStyle: "italic",
              }}
            >
              "Stop being a search result.
              <br />
              Be the Answer."
            </p>

            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "#6b7280" }}
            >
              The premier Generative Engine Optimization (GEO) agency. We
              engineer AI visibility so your brand is what ChatGPT, Gemini, and
              Perplexity recommend — not your competitors.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map(({ label, href, icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.15,
                    color: "#f59e0b",
                    boxShadow: "0 0 14px rgba(245,158,11,0.30)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-200"
                  style={{
                    background: "rgba(31,41,55,0.8)",
                    border: "1px solid rgba(55,65,81,0.7)",
                    color: "#6b7280",
                  }}
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* ── Link columns ──────────────────────────────── */}
          {Object.entries(FOOTER_LINKS).map(([group, links]) => (
            <div key={group}>
              <h4
                className="text-xs font-semibold tracking-widest uppercase mb-5"
                style={{ color: "#f59e0b" }}
              >
                {group}
              </h4>
              <ul className="space-y-3 list-none p-0 m-0">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-sm transition-colors duration-200 hover:text-white relative group inline-block"
                      style={{ color: "#6b7280" }}
                    >
                      {label}
                      <span
                        className="absolute -bottom-0.5 left-0 h-px w-0 group-hover:w-full transition-all duration-300 rounded-full"
                        style={{ background: "#f59e0b" }}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ── Divider ─────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6" aria-hidden="true">
        <div
          className="h-px w-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(55,65,81,0.8), transparent)",
          }}
        />
      </div>

      {/* ── Bottom bar ──────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p
            className="text-xs text-center sm:text-left"
            style={{ color: "#4b5563" }}
          >
            © {currentYear}{" "}
            <span style={{ color: "#6b7280" }}>FoundByAnswer.com</span> |{" "}
            <span style={{ color: "#6b7280" }}>
              Engineered for the Answer Economy.
            </span>
          </p>

          {/* Status badge */}
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{
                  background: "#22c55e",
                  boxShadow: "0 0 6px rgba(34,197,94,0.6)",
                }}
              />
              <span className="text-xs" style={{ color: "#4b5563" }}>
                GEO systems active
              </span>
            </div>

            <div
              className="h-3 w-px"
              style={{ background: "#374151" }}
              aria-hidden="true"
            />

            <a
              href="/llms.txt"
              className="text-xs transition-colors duration-200 hover:text-[#f59e0b]"
              style={{ color: "#4b5563" }}
              aria-label="View llms.txt manifest"
            >
              llms.txt
            </a>

            <div
              className="h-3 w-px"
              style={{ background: "#374151" }}
              aria-hidden="true"
            />

            <span className="text-xs" style={{ color: "#374151" }}>
              GPTBot ✓ · PerplexityBot ✓ · ClaudeBot ✓
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
