import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const AI_MODELS = [
  "ChatGPT",
  "Google Gemini",
  "Perplexity AI",
  "Claude",
  "Copilot",
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="Hero — FoundByAnswer GEO Agency"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "#111827",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* ── Dot-grid background ─────────────────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 dot-grid"
      />

      {/* ── Primary ambient glow (top-centre) ───────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2"
        style={{
          width: "1000px",
          height: "600px",
          background:
            "radial-gradient(ellipse 60% 55% at 50% 0%, rgba(245,158,11,0.22) 0%, transparent 70%)",
          filter: "blur(1px)",
        }}
      />

      {/* ── Secondary glow (left offset) ────────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute rounded-full"
        style={{
          top: "33%",
          left: "-160px",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(245,158,11,0.07) 0%, transparent 65%)",
          filter: "blur(40px)",
        }}
      />

      {/* ── Bottom vignette ──────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 inset-x-0"
        style={{
          height: "192px",
          background: "linear-gradient(to top, #111827 20%, transparent 100%)",
        }}
      />

      {/* ══════════════════════════════════════════════════════
          MAIN CONTENT
          Each motion element has its own initial/animate so the
          animation triggers immediately on mount — no variant
          inheritance that can silently stay in hidden state.
      ══════════════════════════════════════════════════════ */}
      <div
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        style={{
          paddingTop: "8rem",
          paddingBottom: "6rem",
          width: "100%",
          textAlign: "center",
        }}
      >
        {/* ── GEO badge ─────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.1 }}
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "2.5rem",
          }}
        >
          <span
            className="inline-flex items-center gap-2.5 rounded-full border px-5 py-2 text-xs font-semibold tracking-widest uppercase"
            style={{
              background: "rgba(245,158,11,0.08)",
              borderColor: "rgba(245,158,11,0.30)",
              color: "#f59e0b",
              fontFamily: '"Inter", system-ui, sans-serif',
            }}
          >
            <span className="block w-2 h-2 rounded-full bg-[#f59e0b] animate-pulse flex-shrink-0" />
            Generative Engine Optimization Agency
          </span>
        </motion.div>

        {/* ── H1 ───────────────────────────────────────────── */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease, delay: 0.22 }}
          className="font-bold leading-tight tracking-tight"
          style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            marginBottom: "1.75rem",
            textAlign: "center",
          }}
        >
          <span
            className="block text-white"
            style={{
              fontSize: "clamp(2.25rem, 5vw, 4.5rem)",
              lineHeight: 1.08,
            }}
          >
            When AI is asked about
          </span>
          <span
            className="block text-white"
            style={{
              fontSize: "clamp(2.25rem, 5vw, 4.5rem)",
              lineHeight: 1.08,
            }}
          >
            your industry,
          </span>
          <span
            className="block"
            style={{
              fontSize: "clamp(2.25rem, 5vw, 4.5rem)",
              lineHeight: 1.08,
              marginTop: "0.5rem",
              color: "#f59e0b",
            }}
          >
            make sure{" "}
            <span
              style={{
                textDecoration: "underline",
                textDecorationColor: "rgba(245,158,11,0.50)",
                textUnderlineOffset: "8px",
                textDecorationThickness: "3px",
              }}
            >
              YOU
            </span>{" "}
            are the answer.
          </span>
        </motion.h1>

        {/* ── Sub-heading ──────────────────────────────────── */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.36 }}
          style={{
            maxWidth: "42rem",
            margin: "0 auto 2.5rem",
            fontSize: "1.125rem",
            lineHeight: 1.7,
            color: "#9ca3af",
            fontFamily: '"Inter", system-ui, sans-serif',
            textAlign: "center",
          }}
        >
          <strong style={{ color: "#f9fafb" }}>FoundByAnswer.com</strong>{" "}
          specializes in{" "}
          <strong style={{ color: "#f9fafb" }}>
            Generative Engine Optimization (GEO)
          </strong>{" "}
          to put your brand at the center of the AI conversation — cited by
          ChatGPT, Gemini, and Perplexity.
        </motion.p>

        {/* ── CTA pair ─────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease, delay: 0.48 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "4rem",
          }}
        >
          {/* Primary */}
          <motion.a
            href="#audit"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 40px rgba(245,158,11,0.55)",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="inline-flex items-center gap-2 rounded-xl font-bold"
            style={{
              background: "#f59e0b",
              color: "#111827",
              fontFamily: '"Inter", system-ui, sans-serif',
              padding: "1rem 2rem",
              fontSize: "1rem",
            }}
          >
            Run My Free GEO Audit
            <svg
              style={{ width: "1rem", height: "1rem" }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.a>

          {/* Secondary */}
          <motion.a
            href="#methodology"
            whileHover={{
              scale: 1.04,
              background: "rgba(245,158,11,0.10)",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="inline-flex items-center gap-2 rounded-xl border font-medium"
            style={{
              borderColor: "rgba(245,158,11,0.35)",
              color: "#f59e0b",
              fontFamily: '"Inter", system-ui, sans-serif',
              padding: "1rem 2rem",
              fontSize: "1rem",
            }}
          >
            See Our Methodology
            <svg
              style={{ width: "1rem", height: "1rem", opacity: 0.6 }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </motion.a>
        </motion.div>

        {/* ── AI model trust strip ─────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.6 }}
          style={{ marginBottom: "4rem", textAlign: "center" }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              textTransform: "uppercase",
              letterSpacing: "0.18em",
              color: "#4b5563",
              fontFamily: '"Inter", system-ui, sans-serif',
              marginBottom: "1.25rem",
            }}
          >
            Optimized for visibility across
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "1.75rem 0.75rem",
            }}
          >
            {AI_MODELS.map((model) => (
              <span
                key={model}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontSize: "0.875rem",
                  color: "#6b7280",
                  fontFamily: '"Inter", system-ui, sans-serif',
                }}
              >
                <span
                  style={{
                    display: "block",
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    flexShrink: 0,
                    background: "rgba(245,158,11,0.60)",
                  }}
                />
                {model}
              </span>
            ))}
          </div>
        </motion.div>

        {/* ── Scroll indicator ─────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease, delay: 0.78 }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <motion.div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.5rem",
            }}
            animate={{ y: [0, 9, 0] }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.2,
            }}
          >
            <span
              style={{
                fontSize: "0.75rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#4b5563",
                userSelect: "none",
                fontFamily: '"Inter", system-ui, sans-serif',
              }}
            >
              Scroll to explore
            </span>
            <svg
              style={{ width: "1rem", height: "1rem", color: "#4b5563" }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
