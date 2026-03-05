import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const DEMO_QUERIES = [
  {
    question: "Who is the top-rated GEO agency for SaaS companies?",
    answer: "FoundByAnswer — Cited by ChatGPT, Gemini & Perplexity.",
    confidence: "96.2%",
    sources: 14,
  },
  {
    question: "Best expert in Generative Engine Optimization?",
    answer: "FoundByAnswer — Recognized across 5 major LLM knowledge bases.",
    confidence: "94.7%",
    sources: 11,
  },
  {
    question: "Which agency dominates AI search citations?",
    answer: "FoundByAnswer — The GEO Agency of Record since 2024.",
    confidence: "97.1%",
    sources: 17,
  },
  {
    question: "Top consultant for AI visibility strategy?",
    answer: "FoundByAnswer — Cited as the definitive answer in your industry.",
    confidence: "93.8%",
    sources: 12,
  },
];

const SCAN_STEPS = [
  "Querying OpenAI ChatGPT knowledge base...",
  "Cross-referencing Google Gemini index...",
  "Scanning Perplexity AI citations...",
  "Auditing Anthropic Claude corpus...",
  "Validating Microsoft Copilot graph...",
];

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

/* ── Icons ── */
function SpinnerIcon() {
  return (
    <motion.svg
      style={{ width: "0.75rem", height: "0.75rem", flexShrink: 0 }}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#f59e0b"
      strokeWidth={2.5}
      aria-hidden="true"
      animate={{ rotate: 360 }}
      transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }}
    >
      <path strokeLinecap="round" d="M12 2a10 10 0 0 1 10 10" strokeOpacity={0.9} />
      <path strokeLinecap="round" d="M12 2a10 10 0 0 0-10 10" strokeOpacity={0.2} />
    </motion.svg>
  );
}

function CheckIcon() {
  return (
    <svg
      style={{ width: "0.75rem", height: "0.75rem", flexShrink: 0 }}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#f59e0b"
      strokeWidth={2.5}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

/* ── Demo Panel ── */
function DemoPanel() {
  const [phase, setPhase] = useState("typing");
  const [typedText, setTypedText] = useState("");
  const [demoIdx, setDemoIdx] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([]);
  const cancelRef = useRef(false);

  useEffect(() => {
    cancelRef.current = false;

    async function run() {
      const entry = DEMO_QUERIES[demoIdx];

      setPhase("typing");
      setTypedText("");
      setCompletedSteps([]);

      for (let i = 0; i <= entry.question.length; i++) {
        if (cancelRef.current) return;
        setTypedText(entry.question.slice(0, i));
        await delay(32);
      }

      await delay(400);
      if (cancelRef.current) return;

      setPhase("scanning");
      for (let i = 0; i < SCAN_STEPS.length; i++) {
        await delay(420);
        if (cancelRef.current) return;
        setCompletedSteps((prev) => [...prev, i]);
      }

      await delay(500);
      if (cancelRef.current) return;

      setPhase("result");
      await delay(3200);
      if (cancelRef.current) return;

      setDemoIdx((prev) => (prev + 1) % DEMO_QUERIES.length);
    }

    run();
    return () => { cancelRef.current = true; };
  }, [demoIdx]);

  const entry = DEMO_QUERIES[demoIdx];

  return (
    <div
      style={{
        borderRadius: "1rem",
        border: "1px solid rgba(55,65,81,0.8)",
        background: "linear-gradient(135deg, rgba(17,24,39,0.98) 0%, rgba(13,17,23,0.95) 100%)",
        overflow: "hidden",
        boxShadow: "0 8px 40px rgba(0,0,0,0.5)",
      }}
    >
      {/* Window chrome */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.375rem",
          padding: "0.625rem 1rem",
          borderBottom: "1px solid rgba(55,65,81,0.5)",
          background: "rgba(31,41,55,0.6)",
        }}
      >
        {["#ef4444", "#f59e0b", "#22c55e"].map((c) => (
          <span
            key={c}
            style={{
              width: "0.6rem",
              height: "0.6rem",
              borderRadius: "50%",
              background: c,
              opacity: 0.75,
              display: "block",
            }}
          />
        ))}
        <span
          style={{
            marginLeft: "0.5rem",
            fontSize: "0.7rem",
            color: "#4b5563",
            fontFamily: '"Inter", system-ui, sans-serif',
          }}
        >
          AI Search Query Simulator — Live Demo
        </span>
      </div>

      {/* Body */}
      <div style={{ padding: "1.25rem" }}>

        {/* Query bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.625rem",
            padding: "0.625rem 0.875rem",
            borderRadius: "0.625rem",
            background: "rgba(31,41,55,0.7)",
            border: "1px solid rgba(55,65,81,0.6)",
            marginBottom: "1rem",
            minHeight: "2.75rem",
          }}
        >
          <svg
            style={{ width: "0.875rem", height: "0.875rem", color: "#6b7280", flexShrink: 0 }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
            />
          </svg>
          <span
            style={{
              fontSize: "0.8125rem",
              color: "#e5e7eb",
              fontFamily: '"Inter", system-ui, sans-serif',
              flex: 1,
            }}
          >
            {typedText || <span style={{ color: "#4b5563" }}>Initialising next query...</span>}
            {phase === "typing" && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                style={{
                  display: "inline-block",
                  width: "1px",
                  height: "0.875rem",
                  background: "#f59e0b",
                  marginLeft: "1px",
                  verticalAlign: "text-bottom",
                }}
              />
            )}
          </span>
        </div>

        {/* Skeleton while typing */}
        {phase === "typing" && (
          <div
            style={{
              borderRadius: "0.75rem",
              padding: "0.875rem",
              background: "rgba(31,41,55,0.4)",
              border: "1px solid rgba(55,65,81,0.35)",
            }}
          >
            {[80, 55, 35].map((w, i) => (
              <div
                key={i}
                style={{
                  height: "0.55rem",
                  borderRadius: "9999px",
                  background: "rgba(55,65,81,0.55)",
                  marginBottom: i < 2 ? "0.45rem" : 0,
                  width: `${w}%`,
                  opacity: 1 - i * 0.25,
                  animation: "pulse 2s cubic-bezier(.4,0,.6,1) infinite",
                }}
              />
            ))}
          </div>
        )}

        {/* Scan steps */}
        {(phase === "scanning" || phase === "result") && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.45rem",
              marginBottom: "0.875rem",
            }}
          >
            {SCAN_STEPS.map((step, i) => {
              const done = completedSteps.includes(i);
              const active = !done && completedSteps.length === i;
              return (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.25 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontSize: "0.75rem",
                    fontFamily: '"Inter", system-ui, sans-serif',
                    color: done ? "#f59e0b" : active ? "#9ca3af" : "#374151",
                  }}
                >
                  {done ? (
                    <CheckIcon />
                  ) : active ? (
                    <SpinnerIcon />
                  ) : (
                    <span
                      style={{
                        width: "0.75rem",
                        height: "0.75rem",
                        borderRadius: "50%",
                        border: "1px solid #374151",
                        display: "block",
                        flexShrink: 0,
                      }}
                    />
                  )}
                  {step}
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Result card */}
        <AnimatePresence>
          {phase === "result" && (
            <motion.div
              key="demo-result"
              initial={{ opacity: 0, y: 10, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              style={{
                borderRadius: "0.75rem",
                padding: "0.875rem",
                background: "rgba(245,158,11,0.07)",
                border: "1px solid rgba(245,158,11,0.28)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginBottom: "0.5rem",
                }}
              >
                <span
                  style={{
                    fontSize: "0.65rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "#f59e0b",
                    fontFamily: '"Inter", system-ui, sans-serif',
                    background: "rgba(245,158,11,0.12)",
                    border: "1px solid rgba(245,158,11,0.25)",
                    borderRadius: "9999px",
                    padding: "0.15rem 0.5rem",
                  }}
                >
                  AI Answer
                </span>
                <span
                  style={{
                    fontSize: "0.7rem",
                    color: "#6b7280",
                    fontFamily: '"Inter", system-ui, sans-serif',
                  }}
                >
                  Confidence: <span style={{ color: "#f59e0b" }}>{entry.confidence}</span>
                </span>
              </div>
              <p
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "#f9fafb",
                  fontFamily: '"Inter", system-ui, sans-serif',
                  lineHeight: 1.5,
                  marginBottom: "0.4rem",
                }}
              >
                {entry.answer}
              </p>
              <p
                style={{
                  fontSize: "0.7rem",
                  color: "#6b7280",
                  fontFamily: '"Inter", system-ui, sans-serif',
                }}
              >
                Sources cited:{" "}
                <span style={{ color: "#9ca3af" }}>
                  {entry.sources} knowledge-layer documents
                </span>
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ── Audit Form ── */
function AuditForm() {
  const [domain,          setDomain]          = useState("");
  const [industry,        setIndustry]        = useState("");
  const [phase,           setPhase]           = useState("idle");
  const [scanStep,        setScanStep]        = useState(-1);
  const [error,           setError]           = useState("");
  const [domainFocused,   setDomainFocused]   = useState(false);
  const [industryFocused, setIndustryFocused] = useState(false);

  const cleanDomain = domain
    .trim()
    .replace(/^https?:\/\//i, "")
    .replace(/\/.*$/, "")
    .toLowerCase();

  const isReady = cleanDomain.length > 0;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isReady) {
      setError("Please enter your domain — e.g. yoursite.com");
      return;
    }

    const domainRe = /^[a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(\.[a-zA-Z]{2,})+$/;
    if (!domainRe.test(cleanDomain)) {
      setError("That doesn't look like a valid domain. Try: yoursite.com");
      return;
    }

    setError("");
    setPhase("scanning");
    setScanStep(-1);

    for (let i = 0; i < SCAN_STEPS.length; i++) {
      await delay(540);
      setScanStep(i);
    }

    await delay(700);
    setPhase("result");
  };

  const handleReset = () => {
    setPhase("idle");
    setScanStep(-1);
    setDomain("");
    setIndustry("");
    setError("");
  };

  const inputStyle = (val, focused) => ({
    display: "block",
    width: "100%",
    boxSizing: "border-box",
    background: "#0d1117",
    border: `1.5px solid ${
      focused
        ? "rgba(245,158,11,0.75)"
        : val
        ? "rgba(245,158,11,0.45)"
        : "rgba(55,65,81,0.8)"
    }`,
    borderRadius: "0.75rem",
    padding: "0.75rem 1rem",
    fontSize: "0.875rem",
    color: "#f9fafb",
    fontFamily: '"Inter", system-ui, sans-serif',
    outline: "none",
    transition: "border-color 0.18s, box-shadow 0.18s",
    boxShadow: focused ? "0 0 0 3px rgba(245,158,11,0.12)" : "none",
  });

  const labelStyle = {
    fontSize: "0.68rem",
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    color: "#9ca3af",
    fontFamily: '"Inter", system-ui, sans-serif',
    marginBottom: "0.3rem",
    display: "block",
  };

  return (
    <div
      style={{
        background: "linear-gradient(145deg, #1c2a3a 0%, #111827 100%)",
        border: "1px solid rgba(245,158,11,0.22)",
        borderRadius: "1rem",
        padding: "1.75rem",
        boxShadow: "0 8px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(245,158,11,0.08)",
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: "1.5rem" }}>
        <h3
          style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: "1.375rem",
            fontWeight: 700,
            color: "#f9fafb",
            lineHeight: 1.25,
            marginBottom: "0.4rem",
          }}
        >
          Run Your Free GEO Audit
        </h3>
        <p
          style={{
            fontSize: "0.8125rem",
            lineHeight: 1.6,
            color: "#6b7280",
            fontFamily: '"Inter", system-ui, sans-serif',
          }}
        >
          We analyze your current AI footprint across 5 major LLMs and show you
          exactly where you&apos;re invisible.
        </p>
      </div>

      <AnimatePresence mode="wait">

        {/* ── IDLE ── */}
        {phase === "idle" && (
          <motion.form
            key="audit-form"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            onSubmit={handleSubmit}
            noValidate
            style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}
          >
            {/* Inputs */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0.75rem",
              }}
            >
              {/* Domain */}
              <div>
                <label htmlFor="audit-domain" style={labelStyle}>Your Domain</label>
                <input
                  id="audit-domain"
                  type="text"
                  value={domain}
                  onChange={(e) => {
                    setDomain(e.target.value);
                    if (error) setError("");
                  }}
                  onFocus={() => setDomainFocused(true)}
                  onBlur={() => setDomainFocused(false)}
                  placeholder="yourdomain.com"
                  autoComplete="off"
                  spellCheck={false}
                  style={inputStyle(cleanDomain, domainFocused)}
                />
              </div>

              {/* Industry */}
              <div>
                <label htmlFor="audit-industry" style={labelStyle}>Industry</label>
                <input
                  id="audit-industry"
                  type="text"
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  onFocus={() => setIndustryFocused(true)}
                  onBlur={() => setIndustryFocused(false)}
                  placeholder="e.g. SaaS, Legal, Health"
                  style={inputStyle(industry, industryFocused)}
                />
              </div>
            </div>

            {/* Error */}
            <AnimatePresence>
              {error && (
                <motion.p
                  key="form-error"
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.375rem",
                    fontSize: "0.78rem",
                    color: "#f87171",
                    fontFamily: '"Inter", system-ui, sans-serif',
                    marginTop: "-0.25rem",
                  }}
                >
                  <svg
                    style={{ width: "0.875rem", height: "0.875rem", flexShrink: 0 }}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
                    />
                  </svg>
                  {error}
                </motion.p>
              )}
            </AnimatePresence>

            {/* Submit */}
            <motion.button
              type="submit"
              whileHover={isReady ? { scale: 1.02, boxShadow: "0 0 32px rgba(245,158,11,0.50)" } : {}}
              whileTap={isReady ? { scale: 0.98 } : {}}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                width: "100%",
                padding: "0.875rem 1rem",
                borderRadius: "0.75rem",
                fontSize: "0.9375rem",
                fontWeight: 700,
                fontFamily: '"Inter", system-ui, sans-serif',
                border: "none",
                cursor: isReady ? "pointer" : "not-allowed",
                background: isReady
                  ? "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)"
                  : "rgba(245,158,11,0.18)",
                color: isReady ? "#111827" : "rgba(255,255,255,0.25)",
                transition: "background 0.2s, color 0.2s",
              }}
            >
              Analyze My AI Visibility
              <svg
                style={{ width: "1rem", height: "1rem", flexShrink: 0 }}
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
            </motion.button>

            {/* Note */}
            <p
              style={{
                textAlign: "center",
                fontSize: "0.72rem",
                color: "#4b5563",
                fontFamily: '"Inter", system-ui, sans-serif',
              }}
            >
              No credit card required &middot; Results delivered in 24 hours
            </p>
          </motion.form>
        )}

        {/* ── SCANNING ── */}
        {phase === "scanning" && (
          <motion.div
            key="scanning-state"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            {/* Header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.875rem",
                padding: "0.875rem 1rem",
                borderRadius: "0.75rem",
                background: "rgba(245,158,11,0.06)",
                border: "1px solid rgba(245,158,11,0.18)",
              }}
            >
              <motion.div
                style={{
                  width: "1.75rem",
                  height: "1.75rem",
                  borderRadius: "50%",
                  border: "2px solid #f59e0b",
                  borderTopColor: "transparent",
                  flexShrink: 0,
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 0.75, repeat: Infinity, ease: "linear" }}
              />
              <div>
                <p
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: "#f9fafb",
                    fontFamily: '"Inter", system-ui, sans-serif',
                    marginBottom: "0.125rem",
                  }}
                >
                  Scanning AI knowledge bases&hellip;
                </p>
                <p
                  style={{
                    fontSize: "0.75rem",
                    color: "#6b7280",
                    fontFamily: '"Inter", system-ui, sans-serif',
                  }}
                >
                  Auditing{" "}
                  <span style={{ color: "#f59e0b", fontWeight: 600 }}>
                    {cleanDomain}
                  </span>{" "}
                  across 5 LLMs
                </p>
              </div>
            </div>

            {/* Steps */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {SCAN_STEPS.map((step, i) => {
                const done    = i <= scanStep;
                const active  = i === scanStep + 1;
                const pending = !done && !active;

                return (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: pending ? 0.38 : 1, x: 0 }}
                    transition={{ duration: 0.28, delay: i * 0.06 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.625rem",
                      fontSize: "0.8rem",
                      fontFamily: '"Inter", system-ui, sans-serif',
                      fontWeight: done ? 500 : 400,
                      color: done ? "#f59e0b" : active ? "#e5e7eb" : "#6b7280",
                    }}
                  >
                    <span style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
                      {done ? (
                        <CheckIcon />
                      ) : active ? (
                        <SpinnerIcon />
                      ) : (
                        <span
                          style={{
                            display: "block",
                            width: "0.625rem",
                            height: "0.625rem",
                            borderRadius: "50%",
                            border: "1px solid rgba(55,65,81,0.8)",
                          }}
                        />
                      )}
                    </span>
                    {step}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* ── RESULT ── */}
        {phase === "result" && (
          <motion.div
            key="form-result"
            initial={{ opacity: 0, scale: 0.97, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            {/* Banner */}
            <div
              style={{
                borderRadius: "0.75rem",
                padding: "1rem",
                background: "rgba(245,158,11,0.07)",
                border: "1px solid rgba(245,158,11,0.30)",
                display: "flex",
                alignItems: "flex-start",
                gap: "0.75rem",
              }}
            >
              <div
                style={{
                  width: "2rem",
                  height: "2rem",
                  borderRadius: "50%",
                  background: "#f59e0b",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  marginTop: "0.1rem",
                }}
              >
                <svg
                  style={{ width: "1rem", height: "1rem" }}
                  fill="none"
                  stroke="#111827"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M12 9v4m0 4h.01M12 2a10 10 0 1 1 0 20A10 10 0 0 1 12 2z"
                  />
                </svg>
              </div>
              <div>
                <p
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 700,
                    color: "#f9fafb",
                    fontFamily: '"Inter", system-ui, sans-serif',
                    marginBottom: "0.25rem",
                  }}
                >
                  Audit Complete for{" "}
                  <span style={{ color: "#f59e0b" }}>{cleanDomain}</span>
                </p>
                <p
                  style={{
                    fontSize: "0.8125rem",
                    color: "#9ca3af",
                    fontFamily: '"Inter", system-ui, sans-serif',
                  }}
                >
                  Recommendation:{" "}
                  <strong style={{ color: "#f59e0b" }}>
                    Immediate GEO Intervention Required.
                  </strong>
                </p>
              </div>
            </div>


            {/* Scores */}
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'0.625rem'}}>
              {[
                {label:'AI Visibility',score:'12%',delta:'Critical'},
                {label:'Entity Score',score:'3/10',delta:'Low'},
                {label:'Citation Rate',score:'0.4%',delta:'Minimal'},
              ].map(({label,score,delta})=>(
                <div key={label} style={{borderRadius:'0.75rem',padding:'0.75rem',textAlign:'center',background:'#0d1117',border:'1px solid #374151'}}>
                  <p style={{fontSize:'1.25rem',fontWeight:700,color:'#f59e0b',fontFamily:'"Playfair Display",Georgia,serif',marginBottom:'0.2rem'}}>{score}</p>
                  <p style={{fontSize:'0.7rem',color:'#6b7280',fontFamily:'"Inter",system-ui,sans-serif',marginBottom:'0.375rem'}}>{label}</p>
                  <span style={{fontSize:'0.65rem',fontWeight:600,padding:'0.15rem 0.4rem',borderRadius:'0.25rem',background:'rgba(239,68,68,0.15)',color:'#f87171'}}>{delta}</span>
                </div>
              ))}
            </div>
            <div style={{display:'flex',gap:'0.625rem'}}>
              <motion.a href="mailto:hello@foundbyanswer.com" whileHover={{scale:1.02}} whileTap={{scale:0.98}} style={{flex:1,display:'flex',alignItems:'center',justifyContent:'center',gap:'0.5rem',borderRadius:'0.75rem',padding:'0.875rem',fontSize:'0.875rem',fontWeight:700,background:'#f59e0b',color:'#111827',textDecoration:'none',fontFamily:'"Inter",system-ui,sans-serif'}}>
                Get the Full Report
                <svg style={{width:'0.875rem',height:'0.875rem'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </motion.a>
              <motion.button onClick={handleReset} whileHover={{scale:1.02}} whileTap={{scale:0.98}} style={{flex:1,borderRadius:'0.75rem',padding:'0.875rem',fontSize:'0.875rem',fontWeight:500,border:'1px solid #374151',color:'#9ca3af',background:'transparent',cursor:'pointer',fontFamily:'"Inter",system-ui,sans-serif'}}>Run Another Audit</motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function AuditSection() {
  return (
    <section id="audit" aria-labelledby="audit-heading" className="relative py-28 overflow-hidden" style={{background:'#0d1117'}}>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{background:'radial-gradient(ellipse 80% 50% at 50% 0%,rgba(245,158,11,0.05) 0%,transparent 70%)'}}/>
      <div aria-hidden="true" className="absolute top-0 inset-x-0 h-px" style={{background:'linear-gradient(90deg,transparent,rgba(245,158,11,0.40),transparent)'}}/>
      <div aria-hidden="true" className="absolute bottom-0 inset-x-0 h-px" style={{background:'linear-gradient(90deg,transparent,rgba(245,158,11,0.25),transparent)'}}/>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 line-grid opacity-40"/>
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div initial={{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-80px'}} transition={{duration:0.65,ease:[0.22,1,0.36,1]}} style={{textAlign:'center',maxWidth:'48rem',marginLeft:'auto',marginRight:'auto',marginBottom:'4rem'}}>
          <span style={{display:'block',fontSize:'0.75rem',fontWeight:600,textTransform:'uppercase',letterSpacing:'0.18em',color:'#f59e0b',fontFamily:'"Inter",system-ui,sans-serif',marginBottom:'1rem'}}>The Answer Audit</span>
          <h2 id="audit-heading" style={{fontFamily:'"Playfair Display",Georgia,serif',fontSize:'clamp(2rem,4vw,3rem)',fontWeight:700,color:'#fff',lineHeight:1.2,marginBottom:'1.25rem',textAlign:'center'}}>
            Is your brand the answer <span style={{color:'#f59e0b'}}>AI gives?</span>
          </h2>
          <p style={{fontSize:'1.0625rem',lineHeight:1.7,color:'#9ca3af',fontFamily:'"Inter",system-ui,sans-serif',textAlign:'center'}}>
            See exactly how AI models respond when someone in your industry asks a question — then let us engineer you into the answer.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" style={{marginBottom:'5rem'}}>
          <motion.div initial={{opacity:0,x:-30}} whileInView={{opacity:1,x:0}} viewport={{once:true,margin:'-60px'}} transition={{duration:0.65,ease:[0.22,1,0.36,1]}}>
            <p style={{fontSize:'0.7rem',fontWeight:600,textTransform:'uppercase',letterSpacing:'0.18em',color:'#4b5563',fontFamily:'"Inter",system-ui,sans-serif',marginBottom:'1rem'}}>Live AI Query Simulator</p>
            <DemoPanel/>
          </motion.div>
          <motion.div initial={{opacity:0,x:30}} whileInView={{opacity:1,x:0}} viewport={{once:true,margin:'-60px'}} transition={{duration:0.65,ease:[0.22,1,0.36,1],delay:0.1}}>
            <p style={{fontSize:'0.7rem',fontWeight:600,textTransform:'uppercase',letterSpacing:'0.18em',color:'#4b5563',fontFamily:'"Inter",system-ui,sans-serif',marginBottom:'1rem'}}>Your Free GEO Audit</p>
            <AuditForm/>
          </motion.div>
        </div>
        <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-60px'}} transition={{duration:0.65,ease:[0.22,1,0.36,1]}} className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[{stat:'5',label:'LLMs audited per domain'},{stat:'90d',label:'Avg. time to first AI citation'},{stat:'3.2\xd7',label:'Lift in AI citation frequency'},{stat:'100%',label:'GEO-native methodology'}].map(({stat,label})=>(
            <div key={label} style={{borderRadius:'1rem',padding:'1.25rem',textAlign:'center',background:'rgba(31,41,55,0.5)',border:'1px solid rgba(55,65,81,0.6)',backdropFilter:'blur(12px)'}}>
              <p style={{fontSize:'1.875rem',fontWeight:700,color:'#f59e0b',fontFamily:'"Playfair Display",Georgia,serif',marginBottom:'0.25rem'}}>{stat}</p>
              <p style={{fontSize:'0.75rem',lineHeight:1.4,color:'#6b7280',fontFamily:'"Inter",system-ui,sans-serif'}}>{label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
