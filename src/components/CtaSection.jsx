import { motion } from "framer-motion";

export default function CtaSection() {
  return (
    <section
      id="about"
      aria-labelledby="cta-heading"
      className="relative py-28 overflow-hidden"
      style={{ background: "#111827" }}
    >
      {/* ── Top gold divider ───────────────────────────────── */}
      <div
        aria-hidden="true"
        className="absolute top-0 inset-x-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(245,158,11,0.40), transparent)",
        }}
      />

      {/* ── Primary ambient radial glow ────────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(245,158,11,0.10) 0%, transparent 70%)",
        }}
      />

      {/* ── Secondary glow — top-left offset ──────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 70%)",
        }}
      />

      {/* ── Dot-grid ──────────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 dot-grid opacity-60"
      />

      {/* ══════════════════════════════════════════════════════
          CONTENT
      ══════════════════════════════════════════════════════ */}
      <div
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        style={{
          maxWidth: "64rem",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          textAlign: "center",
        }}
      >
        {/* ── Eyebrow badge ──────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2.5 rounded-full border px-5 py-2 mb-10"
          style={{
            background: "rgba(245,158,11,0.08)",
            borderColor: "rgba(245,158,11,0.30)",
            display: "inline-flex",
            justifyContent: "center",
          }}
        >
          <motion.span
            className="block w-2 h-2 rounded-full flex-shrink-0"
            style={{ background: "#f59e0b" }}
            animate={{ scale: [1, 1.45, 1], opacity: [1, 0.55, 1] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
          <span
            className="text-xs font-semibold tracking-widest uppercase"
            style={{
              color: "#f59e0b",
              fontFamily: '"Inter", system-ui, sans-serif',
            }}
          >
            Ready to be the Answer?
          </span>
        </motion.div>

        {/* ── H2 ─────────────────────────────────────────────── */}
        <motion.h2
          id="cta-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          className="font-bold leading-tight tracking-tight mb-6"
          style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            textAlign: "center",
          }}
        >
          <span
            className="block text-white text-4xl sm:text-5xl md:text-6xl"
            style={{ textAlign: "center" }}
          >
            Stop losing ground to brands
          </span>
          <span
            className="block text-4xl sm:text-5xl md:text-6xl mt-2"
            style={{ color: "#f59e0b", textAlign: "center" }}
          >
            that AI already knows.
          </span>
        </motion.h2>

        {/* ── Sub-copy
            FIX 1 — text-center is now explicit on the <p> itself,
            not just inherited from the parent container.
            FIX: max-w-2xl is also on the paragraph so it centres
            correctly inside the max-w-5xl outer container.         */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.16 }}
          style={{
            maxWidth: "42rem",
            margin: "0 auto 3rem",
            fontSize: "1.125rem",
            lineHeight: 1.7,
            color: "#94a3b8",
            fontFamily: '"Inter", system-ui, sans-serif',
            textAlign: "center",
          }}
        >
          Every day without a GEO strategy is a day a competitor is being cited
          in your place. FoundByAnswer moves fast — most clients begin appearing
          in AI-generated responses within{" "}
          <strong style={{ color: "#f9fafb" }}>60 to 90 days</strong>.
        </motion.p>

        {/* ── CTA button pair ────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.24 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          {/* Primary */}
          <motion.a
            href="#audit"
            whileHover={{
              scale: 1.06,
              boxShadow:
                "0 0 44px rgba(245,158,11,0.60), 0 0 88px rgba(245,158,11,0.22)",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 380, damping: 22 }}
            className="inline-flex items-center gap-2.5 rounded-xl px-9 py-4 text-base font-bold w-full sm:w-auto justify-center"
            style={{
              background: "#f59e0b",
              color: "#111827",
              fontFamily: '"Inter", system-ui, sans-serif',
            }}
          >
            Start My GEO Journey
            <svg
              className="w-4 h-4"
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
            href="mailto:hello@foundbyanswer.com"
            whileHover={{
              scale: 1.04,
              background: "rgba(245,158,11,0.10)",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 380, damping: 22 }}
            className="inline-flex items-center gap-2 rounded-xl px-9 py-4 text-base font-medium w-full sm:w-auto justify-center border"
            style={{
              borderColor: "rgba(245,158,11,0.40)",
              color: "#f59e0b",
              fontFamily: '"Inter", system-ui, sans-serif',
            }}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Talk to a GEO Strategist
          </motion.a>
        </motion.div>

        {/* ── Trust proof strip ─────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="flex flex-wrap justify-center gap-x-8 gap-y-3"
        >
          {[
            "No long-term contracts",
            "Results in 60–90 days",
            "GEO-native team",
            "5-LLM coverage",
          ].map((proof) => (
            <span
              key={proof}
              className="flex items-center gap-2 text-sm"
              style={{
                color: "#475569",
                fontFamily: '"Inter", system-ui, sans-serif',
              }}
            >
              <svg
                className="w-3.5 h-3.5 flex-shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#f59e0b"
                strokeWidth={2.5}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {proof}
            </span>
          ))}
        </motion.div>
      </div>

      {/* ── Bottom divider ─────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 inset-x-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(245,158,11,0.25), transparent)",
        }}
      />
    </section>
  );
}
