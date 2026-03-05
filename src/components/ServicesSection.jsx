import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const SERVICES = [
  {
    id: "entity-authority",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="w-full h-full"
        aria-hidden="true"
      >
        <circle cx="24" cy="24" r="10" stroke="#f59e0b" strokeWidth="2" />
        <circle
          cx="24"
          cy="8"
          r="4"
          stroke="#f59e0b"
          strokeWidth="1.5"
          strokeDasharray="3 2"
        />
        <circle
          cx="38"
          cy="32"
          r="4"
          stroke="#f59e0b"
          strokeWidth="1.5"
          strokeDasharray="3 2"
        />
        <circle
          cx="10"
          cy="32"
          r="4"
          stroke="#f59e0b"
          strokeWidth="1.5"
          strokeDasharray="3 2"
        />
        <line
          x1="24"
          y1="12"
          x2="24"
          y2="14"
          stroke="#f59e0b"
          strokeWidth="1.5"
        />
        <line
          x1="35"
          y1="29"
          x2="33"
          y2="27"
          stroke="#f59e0b"
          strokeWidth="1.5"
        />
        <line
          x1="13"
          y1="29"
          x2="15"
          y2="27"
          stroke="#f59e0b"
          strokeWidth="1.5"
        />
        <circle cx="24" cy="24" r="3" fill="#f59e0b" fillOpacity="0.7" />
      </svg>
    ),
    label: "Pillar 01",
    title: "Entity Authority",
    subtitle: "Be recognized as a Fact",
    description:
      "We inject high-level JSON-LD schema and structured data that signals to every major AI model that your business is a verified, authoritative entity. ChatGPT doesn't recommend websites — it recommends entities. We make yours one.",
    metric: "3.2×",
    metricLabel: "avg. increase in AI citation frequency",
    tags: ["JSON-LD", "Knowledge Graph", "Schema.org"],
  },
  {
    id: "semantic-content",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="w-full h-full"
        aria-hidden="true"
      >
        <rect
          x="8"
          y="10"
          width="32"
          height="4"
          rx="2"
          fill="#f59e0b"
          fillOpacity="0.8"
        />
        <rect
          x="8"
          y="20"
          width="24"
          height="3"
          rx="1.5"
          fill="#f59e0b"
          fillOpacity="0.45"
        />
        <rect
          x="8"
          y="28"
          width="28"
          height="3"
          rx="1.5"
          fill="#f59e0b"
          fillOpacity="0.45"
        />
        <rect
          x="8"
          y="36"
          width="18"
          height="3"
          rx="1.5"
          fill="#f59e0b"
          fillOpacity="0.25"
        />
        <circle
          cx="42"
          cy="36"
          r="5"
          fill="#f59e0b"
          fillOpacity="0.15"
          stroke="#f59e0b"
          strokeWidth="1.5"
        />
        <path
          d="M39.5 36 L41.5 38 L44.5 33.5"
          stroke="#f59e0b"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: "Pillar 02",
    title: "Semantic Content",
    subtitle: "Become the source LLMs quote",
    description:
      "We craft Answer-First prose architecture — content structured precisely for LLM extraction, synthesis, and citation. Every paragraph is engineered to be a quotable fact inside an AI-generated response. Perplexity pulls paragraphs, not pages.",
    metric: "87%",
    metricLabel: "of clients cited within 90 days",
    tags: ["Answer-First", "LLM Extraction", "Semantic HTML"],
  },
  {
    id: "citation-management",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="w-full h-full"
        aria-hidden="true"
      >
        <path
          d="M8 24 C8 14 18 8 24 8 C30 8 40 14 40 24 C40 34 30 40 24 40 C18 40 8 34 8 24Z"
          stroke="#f59e0b"
          strokeWidth="1.5"
          strokeDasharray="4 2"
        />
        <circle cx="24" cy="24" r="4" fill="#f59e0b" fillOpacity="0.8" />
        <circle cx="24" cy="10" r="2.5" fill="#f59e0b" fillOpacity="0.5" />
        <circle cx="36" cy="32" r="2.5" fill="#f59e0b" fillOpacity="0.5" />
        <circle cx="12" cy="32" r="2.5" fill="#f59e0b" fillOpacity="0.5" />
        <line
          x1="24"
          y1="12.5"
          x2="24"
          y2="20"
          stroke="#f59e0b"
          strokeWidth="1"
          strokeOpacity="0.5"
        />
        <line
          x1="34.2"
          y1="30.7"
          x2="27.5"
          y2="26.5"
          stroke="#f59e0b"
          strokeWidth="1"
          strokeOpacity="0.5"
        />
        <line
          x1="13.8"
          y1="30.7"
          x2="20.5"
          y2="26.5"
          stroke="#f59e0b"
          strokeWidth="1"
          strokeOpacity="0.5"
        />
      </svg>
    ),
    label: "Pillar 03",
    title: "Citation Management",
    subtitle: "Own the Knowledge Layer",
    description:
      "We ensure your brand is strategically embedded across the 2026 Knowledge Layer — the trusted corpus of authoritative web sources that ChatGPT, Gemini, and Perplexity draw from when composing factual answers. Presence here is not optional.",
    metric: "5 LLMs",
    metricLabel: "covered in every engagement",
    tags: ["Knowledge Layer", "Source Authority", "Brand Mentions"],
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative py-28 bg-[#111827] overflow-hidden"
    >
      {/* ── Background accents ────────────────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(245,158,11,0.04) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* ── Section header ────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: "center", marginBottom: "5rem" }}
        >
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-4"
            style={{
              color: "#f59e0b",
              fontFamily: '"Inter", system-ui, sans-serif',
            }}
          >
            The Three Pillars of GEO
          </span>

          <h2
            id="services-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              textAlign: "center",
            }}
          >
            What does FoundByAnswer{" "}
            <span style={{ color: "#f59e0b" }}>actually do?</span>
          </h2>

          <p
            style={{
              maxWidth: "42rem",
              margin: "0 auto",
              fontSize: "1.125rem",
              lineHeight: 1.7,
              color: "#9ca3af",
              fontFamily: '"Inter", system-ui, sans-serif',
              textAlign: "center",
            }}
          >
            Three precision-engineered services that together make your brand
            the answer every major AI model gives — across every relevant query
            in your industry.
          </p>
        </motion.div>

        {/* ── Bento grid ────────────────────────────────────── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {SERVICES.map((svc) => (
            <motion.article
              key={svc.id}
              variants={cardVariants}
              whileHover={{
                y: -6,
                boxShadow:
                  "0 0 0 1px rgba(245,158,11,0.30), 0 20px 60px -10px rgba(245,158,11,0.18), 0 8px 24px rgba(0,0,0,0.5)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              aria-label={`Service: ${svc.title}`}
              className="relative flex flex-col rounded-2xl p-7 overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(31,41,55,0.95) 0%, rgba(17,24,39,0.90) 100%)",
                border: "1px solid rgba(55,65,81,0.8)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
              }}
            >
              {/* Glassmorphism inner glow */}
              <div
                aria-hidden="true"
                className="absolute top-0 inset-x-0 h-px"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(245,158,11,0.35), transparent)",
                }}
              />

              {/* Corner accent */}
              <div
                aria-hidden="true"
                className="absolute top-0 right-0 w-24 h-24 rounded-bl-full"
                style={{
                  background:
                    "radial-gradient(circle at top right, rgba(245,158,11,0.07) 0%, transparent 70%)",
                }}
              />

              {/* Icon */}
              <div className="w-12 h-12 mb-6 flex-shrink-0">{svc.icon}</div>

              {/* Pillar label */}
              <span
                className="text-xs font-semibold tracking-widest uppercase mb-2"
                style={{
                  color: "rgba(245,158,11,0.60)",
                  fontFamily: '"Inter", system-ui, sans-serif',
                }}
              >
                {svc.label}
              </span>

              {/* Title */}
              <h3
                className="text-2xl font-bold text-white mb-1"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                {svc.title}
              </h3>

              {/* Subtitle */}
              <p
                className="text-sm font-medium mb-4"
                style={{
                  color: "#f59e0b",
                  fontFamily: '"Inter", system-ui, sans-serif',
                }}
              >
                {svc.subtitle}
              </p>

              {/* Divider */}
              <div
                className="w-10 h-px mb-5"
                style={{ background: "rgba(245,158,11,0.30)" }}
              />

              {/* Description */}
              <p
                className="text-sm leading-relaxed flex-grow mb-6"
                style={{
                  color: "#9ca3af",
                  fontFamily: '"Inter", system-ui, sans-serif',
                }}
              >
                {svc.description}
              </p>

              {/* Metric callout */}
              <div
                className="rounded-xl p-4 mb-5 flex items-center gap-4"
                style={{
                  background: "rgba(245,158,11,0.07)",
                  border: "1px solid rgba(245,158,11,0.15)",
                }}
              >
                <span
                  className="text-3xl font-bold leading-none flex-shrink-0"
                  style={{
                    color: "#f59e0b",
                    fontFamily: '"Playfair Display", Georgia, serif',
                  }}
                >
                  {svc.metric}
                </span>
                <span
                  className="text-xs leading-snug"
                  style={{
                    color: "#6b7280",
                    fontFamily: '"Inter", system-ui, sans-serif',
                  }}
                >
                  {svc.metricLabel}
                </span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {svc.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium rounded-full px-2.5 py-1"
                    style={{
                      background: "rgba(55,65,81,0.6)",
                      color: "#9ca3af",
                      border: "1px solid rgba(75,85,99,0.5)",
                      fontFamily: '"Inter", system-ui, sans-serif',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
