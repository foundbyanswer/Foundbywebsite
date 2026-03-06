import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Methodology", href: "#methodology" },
  { label: "Audit", href: "#audit" },
  { label: "Blog", href: "#/blog" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={[
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#111827]/95 backdrop-blur-xl border-b border-[#f59e0b]/10 shadow-2xl shadow-black/40"
          : "bg-transparent",
      ].join(" ")}
    >
      <nav
        aria-label="Main navigation"
        className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between"
      >
        {/* ── Logo ──────────────────────────────────────── */}
        <a
          href="/"
          className="flex items-center gap-2 group select-none"
          aria-label="FoundByAnswer home"
        >
          <img src="/logo.png" alt="FoundByAnswer Logo" className="h-20 w-auto object-contain" />


        </a>

        {/* ── Desktop nav links ──────────────────────────── */}
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="relative font-['Inter'] text-sm font-medium text-gray-400 hover:text-[#f59e0b] transition-colors duration-200 group"
              >
                {label}
                {/* animated underline */}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#f59e0b] group-hover:w-full transition-all duration-300 rounded-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* ── Desktop CTA + hamburger ────────────────────── */}
        <div className="flex items-center gap-4">
          <motion.a
            href="#audit"
            whileHover={{
              scale: 1.04,
              boxShadow: "0 0 22px rgba(245,158,11,0.45)",
            }}
            whileTap={{ scale: 0.97 }}
            className="hidden md:inline-flex items-center gap-2 bg-[#f59e0b] text-[#111827] px-5 py-2.5 rounded-lg font-['Inter'] font-semibold text-sm hover:bg-[#d97706] transition-colors duration-200"
          >
            Free GEO Audit
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

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="md:hidden p-1.5 text-gray-400 hover:text-[#f59e0b] transition-colors duration-200 rounded"
          >
            <motion.svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              aria-hidden="true"
              animate={menuOpen ? "open" : "closed"}
            >
              <AnimatePresence initial={false} mode="wait">
                {menuOpen ? (
                  <motion.path
                    key="x"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <motion.path
                    key="bars"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </AnimatePresence>
            </motion.svg>
          </button>
        </div>
      </nav>

      {/* ── Mobile menu drawer ─────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden bg-[#1f2937]/98 backdrop-blur-xl border-b border-[#374151]"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {NAV_LINKS.map(({ label, href }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="font-['Inter'] text-base font-medium text-gray-300 hover:text-[#f59e0b] transition-colors duration-200"
                >
                  {label}
                </motion.a>
              ))}

              <motion.a
                href="#audit"
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.06 }}
                className="mt-2 flex items-center justify-center gap-2 bg-[#f59e0b] text-[#111827] px-5 py-3 rounded-xl font-['Inter'] font-bold text-sm"
              >
                Free GEO Audit
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
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
