import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

/* ─────────────────────────────────────────────────────────────
   ANIMATED COUNTER HOOK
   Counts from 0 → target when `shouldStart` flips true.
───────────────────────────────────────────────────────────── */
function useCounter(target, duration = 1.6, shouldStart = false) {
  const motionVal = useMotionValue(0);

  useEffect(() => {
    if (!shouldStart) return;
    const controls = animate(motionVal, target, {
      duration,
      ease: [0.22, 1, 0.36, 1],
    });
    return controls.stop;
  }, [shouldStart, target, duration, motionVal]);

  return motionVal;
}

/* ─────────────────────────────────────────────────────────────
   SINGLE STAT CARD
───────────────────────────────────────────────────────────── */
function StatCard({ stat, index, shouldStart }) {
  /* Parse the numeric part and any surrounding text */
  const { prefix = "", numeric, suffix = "", label, sublabel } = stat;

  const count = useCounter(numeric, 1.6 + index * 0.1, shouldStart);

  /* Round to integer unless the target has a decimal (e.g. 3.2) */
  const isDecimal = numeric % 1 !== 0;
  const displayCount = useTransform(count, (v) =>
    isDecimal ? v.toFixed(1) : Math.round(v).toString()
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.10,
      }}
      className="relative flex flex-col items-center text-center px-6 py-8 group"
    >
      {/* Vertical divider between cards (hidden on first) */}
      {index > 0 && (
        <div
          aria-hidden="true"
          className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 h-14 w-px"
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgba(55,65,81,0.7), transparent)",
          }}
        />
      )}

      {/* Icon / decorative ring */}
      <div
        className="mb-5 w-11 h-11 rounded-full flex items-center justify-center"
        style={{
          background: "rgba(245,158,11,0.08)",
          border: "1px solid rgba(245,158,11,0.18)",
        }}
      >
        {stat.icon}
      </div>

      {/* Animated number */}
      <div
        className="flex items-end justify-center leading-none mb-3 font-bold"
        style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
      >
        {prefix && (
          <span
            className="text-2xl md:text-3xl mb-0.5 mr-0.5"
            style={{ color: "#f59e0b" }}
          >
            {prefix}
          </span>
        )}
        <motion.span
          className="text-4xl md:text-5xl"
          style={{ color: "#f59e0b" }}
        >
          {displayCount}
        </motion.span>
        {suffix && (
          <span
            className="text-2xl md:text-3xl mb-0.5 ml-0.5"
            style={{ color: "#f59e0b" }}
          >
            {suffix}
          </span>
        )}
      </div>

      {/* Label */}
      <p
        className="text-sm font-semibold mb-1"
        style={{
          color: "#f9fafb",
          fontFamily: '"Inter", system-ui, sans-serif',
        }}
      >
        {label}
      </p>

      {/* Sub-label */}
      <p
        className="text-xs leading-snug max-w-[140px]"
        style={{
          color: "#6b7280",
          fontFamily: '"Inter", system-ui, sans-serif',
        }}
      >
        {sublabel}
      </p>

      {/* Hover underline accent */}
      <div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 h-px w-0 group-hover:w-10 transition-all duration-300 rounded-full"
        style={{ background: "#f59e0b" }}
        aria-hidden="true"
      />
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────
   STAT DATA
───────────────────────────────────────────────────────────── */
const STATS = [
  {
    prefix: "",
    numeric: 5,
    suffix: "",
    label: "LLMs Audited",
    sublabel: "ChatGPT, Gemini, Perplexity, Claude & Copilot per engagement",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#f59e0b"
        strokeWidth={1.6}
        className="w-5 h-5"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="3" />
        <circle cx="12" cy="4"  r="1.5" strokeDasharray="2 1.5" />
        <circle cx="19" cy="16" r="1.5" strokeDasharray="2 1.5" />
        <circle cx="5"  cy="16" r="1.5" strokeDasharray="2 1.5" />
        <line x1="12" y1="5.5"  x2="12" y2="9"   strokeLinecap="round" />
        <line x1="17.7" y1="14.5" x2="14.6" y2="12.8" strokeLinecap="round" />
        <line x1="6.3"  y1="14.5" x2="9.4"  y2="12.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    prefix: "",
    numeric: 3.2,
    suffix: "×",
    label: "Citation Lift",
    sublabel: "Average increase in AI citation frequency within 6 months",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#f59e0b"
        strokeWidth={1.6}
        className="w-5 h-5"
        aria-hidden="true"
      >
        <polyline points="3 17 9 11 13 15 21 7" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="17 7 21 7 21 11"       strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    prefix: "",
    numeric: 90,
    suffix: "d",
    label: "First AI Citation",
    sublabel: "Average days from kick-off to first LLM citation for new clients",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#f59e0b"
        strokeWidth={1.6}
        className="w-5 h-5"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="9" />
        <polyline points="12 7 12 12 15.5 14" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    prefix: "",
    numeric: 87,
    suffix: "%",
    label: "Clients Cited",
    sublabel: "Of all FoundByAnswer clients cited by at least one major LLM after 90 days",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#f59e0b"
        strokeWidth={1.6}
        className="w-5 h-5"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

/* ─────────────────────────────────────────────────────────────
   MAIN EXPORT
───────────────────────────────────────────────────────────── */
export default function StatsSection() {
  /* Trigger counters once the section enters the viewport */
  const sectionRef = useRef(null);
  const isInView   = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      aria-label="FoundByAnswer GEO performance statistics"
      className="relative overflow-hidden"
      style={{ background: "#0d1117" }}
    >
      {/* ── Top gold divider ───────────────────────────────── */}
      <div
        aria-hidden="true"
        className="absolute top-0 inset-x-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(245,158,11,0.40) 30%, rgba(245,158,11,0.60) 50%, rgba(245,158,11,0.40) 70%, transparent 100%)",
        }}
      />

      {/* ── Subtle radial glow ─────────────────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 100% at 50% 0%, rgba(245,158,11,0.04) 0%, transparent 70%)",
        }}
      />

      {/* ── Content ────────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-4">

        {/* Eyebrow row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-3 py-5 border-b"
          style={{ borderColor: "rgba(55,65,81,0.4)" }}
        >
          <div
            className="h-px flex-1 max-w-[120px]"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(245,158,11,0.30))",
            }}
            aria-hidden="true"
          />
          <p
            className="text-[11px] font-semibold tracking-[0.20em] uppercase"
            style={{
              color: "#6b7280",
              fontFamily: '"Inter", system-ui, sans-serif',
            }}
          >
            GEO results at a glance
          </p>
          <div
            className="h-px flex-1 max-w-[120px]"
            style={{
              background:
                "linear-gradient(to left, transparent, rgba(245,158,11,0.30))",
            }}
            aria-hidden="true"
          />
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4">
          {STATS.map((stat, i) => (
            <StatCard
              key={stat.label}
              stat={stat}
              index={i}
              shouldStart={isInView}
            />
          ))}
        </div>

        {/* Bottom proof line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-xs pb-6 border-t pt-5"
          style={{
            color: "#4b5563",
            borderColor: "rgba(55,65,81,0.4)",
            fontFamily: '"Inter", system-ui, sans-serif',
          }}
        >
          Based on aggregated client data across all FoundByAnswer GEO engagements.&nbsp;
          <span style={{ color: "#6b7280" }}>Results vary by industry and starting AI visibility score.</span>
        </motion.p>
      </div>

      {/* ── Bottom gold divider ────────────────────────────── */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 inset-x-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(245,158,11,0.40) 30%, rgba(245,158,11,0.60) 50%, rgba(245,158,11,0.40) 70%, transparent 100%)",
        }}
      />
    </section>
  );
}
