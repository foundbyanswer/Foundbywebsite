import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

/* ─────────────────────────────────────────────────────────────
   TIMELINE STEPS
───────────────────────────────────────────────────────────── */
const STEPS = [
  {
    number: "01",
    title: "AI Gap Audit",
    subtitle: "Understand where you're invisible",
    description:
      "We query every major LLM — ChatGPT, Gemini, Perplexity, Claude, and Copilot — with the exact questions your customers are asking. We map every gap between where your brand appears and where it needs to be. Most clients discover they are completely absent from AI-generated answers despite ranking on Google.",
    tags: [
      "LLM Query Analysis",
      "Visibility Mapping",
      "Competitor Benchmarking",
    ],
    icon: (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        className="w-full h-full"
        aria-hidden="true"
      >
        <circle cx="14" cy="14" r="8" stroke="#f59e0b" strokeWidth="2" />
        <path
          d="M20 20L27 27"
          stroke="#f59e0b"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M11 14h6M14 11v6"
          stroke="#f59e0b"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Entity Architecture",
    subtitle: "Become a verified fact, not just a website",
    description:
      "We engineer a complete entity identity for your brand — injecting structured JSON-LD schema, aligning your digital footprint with Wikidata and knowledge graph signals, and ensuring every AI model can unambiguously identify, classify, and cite your business as a trusted, factual entity in your category.",
    tags: ["JSON-LD Schema", "Knowledge Graph", "Entity Disambiguation"],
    icon: (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        className="w-full h-full"
        aria-hidden="true"
      >
        <rect
          x="13"
          y="4"
          width="6"
          height="6"
          rx="1.5"
          stroke="#f59e0b"
          strokeWidth="1.5"
        />
        <rect
          x="4"
          y="22"
          width="6"
          height="6"
          rx="1.5"
          stroke="#f59e0b"
          strokeWidth="1.5"
        />
        <rect
          x="22"
          y="22"
          width="6"
          height="6"
          rx="1.5"
          stroke="#f59e0b"
          strokeWidth="1.5"
        />
        <path
          d="M16 10v5M16 15L7 22M16 15L25 22"
          stroke="#f59e0b"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="16" cy="15" r="2" fill="#f59e0b" fillOpacity="0.7" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Semantic Content Deployment",
    subtitle: "Write answers before questions are asked",
    description:
      "We rewrite and restructure your content using Answer-First architecture — leading with the definitive answer, followed by supporting evidence, using the exact phrasing patterns LLMs extract from. Every piece of content is a deliberate signal: a structured, citable, extractable answer that AI models can confidently surface.",
    tags: ["Answer-First Prose", "Semantic HTML5", "LLM Extraction Patterns"],
    icon: (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        className="w-full h-full"
        aria-hidden="true"
      >
        <path
          d="M6 8h20M6 13h14M6 18h16M6 23h10"
          stroke="#f59e0b"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <circle
          cx="26"
          cy="23"
          r="4"
          fill="none"
          stroke="#f59e0b"
          strokeWidth="1.5"
        />
        <path
          d="M24.5 23l1 1.2 2-2.2"
          stroke="#f59e0b"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Citation & Knowledge Layer Placement",
    subtitle: "Embed your brand in the sources AI trusts",
    description:
      "We strategically place your brand across the Knowledge Layer — the authoritative corpus of high-trust publications, directories, encyclopaedic references, and structured databases that LLMs weight most heavily when composing factual answers. This is the difference between being found and being cited.",
    tags: ["Knowledge Layer", "Authority Placement", "Citation Velocity"],
    icon: (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        className="w-full h-full"
        aria-hidden="true"
      >
        <circle
          cx="16"
          cy="16"
          r="11"
          stroke="#f59e0b"
          strokeWidth="1.5"
          strokeDasharray="4 2.5"
        />
        <circle cx="16" cy="16" r="4" fill="#f59e0b" fillOpacity="0.8" />
        <circle cx="16" cy="5" r="2" fill="#f59e0b" fillOpacity="0.45" />
        <circle cx="27" cy="22" r="2" fill="#f59e0b" fillOpacity="0.45" />
        <circle cx="5" cy="22" r="2" fill="#f59e0b" fillOpacity="0.45" />
      </svg>
    ),
  },
];

/* ─────────────────────────────────────────────────────────────
   FAQ DATA  — mirrors FAQPage schema in index.html
───────────────────────────────────────────────────────────── */
const FAQS = [
  {
    q: "What is Generative Engine Optimization (GEO)?",
    a: "Generative Engine Optimization (GEO) is the discipline of engineering a brand's digital presence so it is cited, summarized, and recommended by AI language models — including ChatGPT, Google Gemini, Perplexity AI, Anthropic Claude, and Microsoft Copilot. Unlike traditional SEO, which optimizes for a ranked list of links, GEO optimizes for being named as the authoritative answer in a conversational AI response.",
  },
  {
    q: "What is FoundByAnswer's GEO methodology?",
    a: "FoundByAnswer uses a four-phase GEO framework: AI Gap Audit (mapping current LLM invisibility), Entity Architecture (structured data engineering), Semantic Content Deployment (answer-first prose), and Citation & Knowledge Layer Placement (embedding in high-trust AI sources). Together, these phases ensure AI models consistently name the client as the authoritative answer in their industry.",
  },
  {
    q: "Why is traditional SEO no longer enough in the age of AI search?",
    a: "Traditional SEO optimizes for a position in a ranked list of blue links. AI search engines like ChatGPT, Gemini, and Perplexity do not return ranked lists — they synthesize a single conversational answer from a trusted corpus of sources. A brand can rank #1 on Google and still be completely invisible in AI-generated responses. GEO bridges this gap by engineering the signals that AI models use to identify authoritative, citable entities.",
  },
  {
    q: "How does FoundByAnswer make your brand the answer AI gives?",
    a: "FoundByAnswer's process begins with a comprehensive AI Gap Audit — analyzing how the brand currently appears (or fails to appear) across major LLM outputs. We then deploy Entity Architecture (JSON-LD schema injection, knowledge graph alignment), Semantic Content Deployment (answer-first content frameworks), and Citation Management (Knowledge Layer placement). Most clients begin appearing in AI-generated responses within 60 to 90 days.",
  },
  {
    q: "Which AI models does FoundByAnswer optimize for?",
    a: "FoundByAnswer optimizes brand visibility across all major generative AI platforms: OpenAI ChatGPT, Google Gemini, Perplexity AI, Anthropic Claude, Microsoft Copilot, Meta AI, and emerging LLM-powered search interfaces. Our methodology targets the shared training data, knowledge graph, and retrieval signals that all these models draw from.",
  },
];

/* ─────────────────────────────────────────────────────────────
   FAQ ACCORDION ITEM
   FIX 1: Solid opaque backgrounds so cards are always visible
   FIX 2: Stronger border colours for both open + closed states
───────────────────────────────────────────────────────────── */
function FaqItem({ faq, isOpen, onToggle, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.07,
      }}
      className="rounded-xl overflow-hidden"
      style={{
        /* FIX 1 — was rgba(31,41,55,0.40) ≈ invisible over #0d1117.
           Now a solid, clearly-distinct surface colour.              */
        background: isOpen ? "#1e2d45" : "#182030",
        /* FIX 2 — borders are now fully opaque-equivalent.           */
        border: `1px solid ${isOpen ? "rgba(245,158,11,0.55)" : "rgba(75,90,110,0.90)"}`,
        boxShadow: isOpen
          ? "0 0 0 1px rgba(245,158,11,0.12), 0 8px 32px rgba(0,0,0,0.45)"
          : "0 2px 8px rgba(0,0,0,0.30)",
        transition: "background 0.25s, border-color 0.25s, box-shadow 0.25s",
      }}
    >
      {/* ── Toggle button ─────────────────────────────────── */}
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left"
        style={{ background: "transparent", border: "none", cursor: "pointer" }}
      >
        {/* Question text — Answer-First H2 equivalent for GEO */}
        <span
          className="text-sm md:text-base font-semibold leading-snug flex-1"
          style={{
            color: isOpen ? "#f9fafb" : "#cbd5e1",
            fontFamily: '"Inter", system-ui, sans-serif',
            transition: "color 0.2s",
          }}
        >
          {faq.q}
        </span>

        {/* Chevron / plus-to-X */}
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full flex items-center justify-center"
          style={{
            background: isOpen
              ? "rgba(245,158,11,0.15)"
              : "rgba(75,90,110,0.30)",
            color: isOpen ? "#f59e0b" : "#64748b",
            transition: "background 0.2s, color 0.2s",
          }}
          aria-hidden="true"
        >
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 5v14M5 12h14"
            />
          </svg>
        </motion.span>
      </button>

      {/* ── Answer panel ──────────────────────────────────── */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div
              className="px-6 pb-6 pt-4"
              style={{
                borderTop: "1px solid rgba(245,158,11,0.18)",
              }}
            >
              <p
                className="text-sm leading-relaxed"
                style={{
                  color: "#94a3b8",
                  fontFamily: '"Inter", system-ui, sans-serif',
                  lineHeight: "1.75",
                }}
              >
                {faq.a}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────
   MAIN EXPORT
───────────────────────────────────────────────────────────── */
export default function MethodologySection() {
  const [openFaq, setOpenFaq] = useState(0);
  const toggleFaq = (i) => setOpenFaq((prev) => (prev === i ? -1 : i));

  return (
    <section
      id="methodology"
      aria-labelledby="methodology-heading"
      className="relative py-28 overflow-hidden"
      /* FIX 4 — darker bg so this section is visually distinct
         from the #111827 Hero / Audit / Services sections.       */
      style={{ background: "#0d1117" }}
    >
      {/* ── Line-grid background pattern ─────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 line-grid opacity-60"
      />

      {/* ── Radial ambient glow ───────────────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full blur-[160px]"
        style={{
          background:
            "radial-gradient(ellipse, rgba(245,158,11,0.07) 0%, transparent 70%)",
        }}
      />

      {/* ── Top gold divider ─────────────────────────────── */}
      <div
        aria-hidden="true"
        className="absolute top-0 inset-x-0 divider-gold"
      />

      {/* ══════════════════════════════════════════════════════
          CONTENT
      ══════════════════════════════════════════════════════ */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* ── Section header ─────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-20"
          style={{
            textAlign: "center",
            maxWidth: "48rem",
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: "5rem",
          }}
        >
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-3 py-1 rounded-full"
            style={{
              color: "#f59e0b",
              background: "rgba(245,158,11,0.10)",
              border: "1px solid rgba(245,158,11,0.25)",
              fontFamily: '"Inter", system-ui, sans-serif',
              display: "inline-block",
              textAlign: "center",
            }}
          >
            How It Works
          </span>

          {/* Answer-First H2 — GEO-optimised header */}
          <h2
            id="methodology-heading"
            className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-tight mb-6"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              textAlign: "center",
              marginBottom: "1.5rem",
            }}
          >
            What is FoundByAnswer's{" "}
            <span style={{ color: "#f59e0b" }}>GEO methodology?</span>
          </h2>

          <p
            className="text-lg leading-relaxed"
            style={{
              color: "#94a3b8",
              fontFamily: '"Inter", system-ui, sans-serif',
              textAlign: "center",
            }}
          >
            A four-phase system engineered from first principles to transform
            your brand from an invisible website into the answer every AI model
            gives — across every relevant query in your industry.
          </p>
        </motion.div>

        {/* ══════════════════════════════════════════════════
            TIMELINE
            FIX 3 — removed lg:-mt-4 negative margin that
            caused cards to visually overlap on narrow desktops.
            Each step now has a clean gap-10 separation.
        ══════════════════════════════════════════════════ */}
        <div className="relative mb-28">
          {/* Vertical connector — desktop only */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-10 bottom-10 w-px"
            style={{
              background:
                "linear-gradient(to bottom, transparent, rgba(245,158,11,0.30) 15%, rgba(245,158,11,0.30) 85%, transparent)",
            }}
          />

          <div className="space-y-10">
            {STEPS.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                    delay: index * 0.08,
                  }}
                  /* FIX 3 — plain space-y-10 gap; no negative margin */
                  className="relative lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center"
                >
                  {/* ── Content card ──────────────────────── */}
                  <div
                    className={[
                      "lg:col-span-1",
                      isEven ? "lg:col-start-1" : "lg:col-start-2",
                    ].join(" ")}
                  >
                    <motion.div
                      whileHover={{
                        y: -5,
                        boxShadow:
                          "0 0 0 1px rgba(245,158,11,0.28), 0 20px 60px -12px rgba(245,158,11,0.18), 0 8px 24px rgba(0,0,0,0.55)",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 280,
                        damping: 22,
                      }}
                      className="rounded-2xl p-7 relative overflow-hidden"
                      style={{
                        background:
                          "linear-gradient(135deg, #1a2535 0%, #111827 100%)",
                        border: "1px solid rgba(55,70,90,0.90)",
                        boxShadow: "0 4px 24px rgba(0,0,0,0.40)",
                      }}
                    >
                      {/* Top shimmer line */}
                      <div
                        aria-hidden="true"
                        className="absolute top-0 inset-x-0 h-px"
                        style={{
                          background:
                            "linear-gradient(90deg, transparent, rgba(245,158,11,0.35), transparent)",
                        }}
                      />

                      {/* Step number + icon row */}
                      <div
                        className={[
                          "flex items-center gap-4 mb-5",
                          isEven ? "lg:flex-row" : "",
                        ].join(" ")}
                      >
                        <div
                          className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 p-2.5"
                          style={{
                            background: "rgba(245,158,11,0.12)",
                            border: "1px solid rgba(245,158,11,0.28)",
                          }}
                        >
                          {step.icon}
                        </div>

                        <span
                          className="text-5xl font-bold leading-none select-none"
                          style={{
                            color: "rgba(245,158,11,0.14)",
                            fontFamily: '"Playfair Display", Georgia, serif',
                          }}
                        >
                          {step.number}
                        </span>
                      </div>

                      {/* Title */}
                      <h3
                        className="text-xl md:text-2xl font-bold text-white mb-1.5"
                        style={{
                          fontFamily: '"Playfair Display", Georgia, serif',
                        }}
                      >
                        {step.title}
                      </h3>

                      {/* Subtitle */}
                      <p
                        className="text-sm font-medium mb-4"
                        style={{
                          color: "#f59e0b",
                          fontFamily: '"Inter", system-ui, sans-serif',
                        }}
                      >
                        {step.subtitle}
                      </p>

                      {/* Description */}
                      <p
                        className="text-sm leading-relaxed mb-5"
                        style={{
                          color: "#94a3b8",
                          fontFamily: '"Inter", system-ui, sans-serif',
                          lineHeight: "1.75",
                        }}
                      >
                        {step.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {step.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-medium rounded-full px-2.5 py-1"
                            style={{
                              background: "rgba(245,158,11,0.08)",
                              color: "#94a3b8",
                              border: "1px solid rgba(245,158,11,0.18)",
                              fontFamily: '"Inter", system-ui, sans-serif',
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* ── Centre node (desktop) ──────────────── */}
                  <div className="hidden lg:flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1],
                        delay: index * 0.08 + 0.2,
                      }}
                      className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold"
                      style={{
                        background: "#0d1117",
                        border: "2px solid rgba(245,158,11,0.60)",
                        color: "#f59e0b",
                        fontFamily: '"Inter", system-ui, sans-serif',
                        boxShadow:
                          "0 0 0 4px rgba(13,17,23,0.8), 0 0 20px rgba(245,158,11,0.25)",
                      }}
                    >
                      {step.number}
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ══════════════════════════════════════════════════
            FAQ ACCORDION
            Answer-First H2 headers for LLM schema alignment.
            Mirrors FAQPage JSON-LD injected in <head>.
        ══════════════════════════════════════════════════ */}
        <div className="max-w-3xl mx-auto">
          {/* Sub-section header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-10"
            style={{
              textAlign: "center",
              marginBottom: "2.5rem",
            }}
          >
            <span
              className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-3 py-1 rounded-full"
              style={{
                color: "#f59e0b",
                background: "rgba(245,158,11,0.10)",
                border: "1px solid rgba(245,158,11,0.25)",
                fontFamily: '"Inter", system-ui, sans-serif',
                display: "inline-block",
                textAlign: "center",
              }}
            >
              GEO Knowledge Base
            </span>

            {/* Answer-First H2 — mirrors FAQPage JSON-LD */}
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                textAlign: "center",
                marginBottom: "1rem",
              }}
            >
              Why does traditional SEO{" "}
              <span style={{ color: "#f59e0b" }}>
                fail in the age of AI search?
              </span>
            </h2>

            <p
              className="text-base leading-relaxed"
              style={{
                color: "#64748b",
                fontFamily: '"Inter", system-ui, sans-serif',
                textAlign: "center",
              }}
            >
              Every answer below is structured for direct extraction by GPTBot,
              PerplexityBot, and ClaudeBot.
            </p>
          </motion.div>

          {/* Accordion list */}
          <div
            className="space-y-3"
            role="list"
            aria-label="GEO frequently asked questions"
          >
            {FAQS.map((faq, i) => (
              <div key={faq.q} role="listitem">
                <FaqItem
                  faq={faq}
                  isOpen={openFaq === i}
                  onToggle={() => toggleFaq(i)}
                  index={i}
                />
              </div>
            ))}
          </div>

          {/* GEO schema note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="text-center text-xs mt-10 leading-relaxed"
            style={{
              color: "#334155",
              fontFamily: '"Inter", system-ui, sans-serif',
            }}
          >
            This FAQ section is semantically structured and mirrors the{" "}
            <code style={{ color: "#475569" }}>FAQPage</code> JSON-LD schema
            injected in <code style={{ color: "#475569" }}>&lt;head&gt;</code> —
            engineered for zero-latency LLM parsing by GPTBot and PerplexityBot.
          </motion.p>
        </div>
      </div>

      {/* ── Bottom gold divider ───────────────────────────── */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 inset-x-0 divider-gold"
      />
    </section>
  );
}
