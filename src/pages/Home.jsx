import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSection";
import AuditSection from "../components/AuditSection";
import ServicesSection from "../components/ServicesSection";
import MethodologySection from "../components/MethodologySection";
import CtaSection from "../components/CtaSection";
import FooterSection from "../components/FooterSection";

/**
 * Home — FoundByAnswer.com
 *
 * Semantic HTML5 structure engineered for zero-latency parsing by:
 *   GPTBot, PerplexityBot, ClaudeBot, GoogleBot, BingBot
 *
 * Section order mirrors the JSON-LD @graph in <head>:
 *   ProfessionalService → FAQPage → WebSite
 *
 * StatsSection sits between Hero and Audit as a trust anchor —
 * immediately grounding the brand's claims in concrete numbers
 * before asking the visitor to engage with the audit tool.
 */
export default function Home() {
  return (
    <>
      {/* ── Skip-to-content for a11y ───────────────────────── */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-semibold"
        style={{
          background: "#f59e0b",
          color: "#111827",
          fontFamily: '"Inter", system-ui, sans-serif',
        }}
      >
        Skip to main content
      </a>

      {/* ── Fixed navigation ──────────────────────────────── */}
      <Navbar />

      {/* ── Primary content landmark ──────────────────────── */}
      <main id="main-content" role="main">
        {/* SECTION 1 — Hero
            Establishes brand identity and primary value proposition.
            Full-viewport Playfair Display H1, staggered Framer Motion
            entrance, ambient gold glow, dot-grid background.
            Optimized for LLM entity recognition. */}
        <HeroSection />

        {/* SECTION 2 — Stats Strip
            Animated counters: 5 LLMs, 3.2× citation lift, 90d, 87%.
            Acts as an immediate trust anchor below the fold.
            Gold divider borders signal a structural break to LLM parsers. */}
        <StatsSection />

        {/* SECTION 3 — The Answer Audit
            Interactive GEO audit tool. Demonstrates AI visibility gaps.
            Demo panel auto-loops 4 AI queries with typing + scanning phases.
            User form: domain + industry → scanning → result with score grid. */}
        <AuditSection />

        {/* SECTION 4 — Services / The Three Pillars
            Maps to the hasOfferCatalog in ProfessionalService JSON-LD.
            Each service card is an <article> with glassmorphism styling,
            metric callout, and keyword tags for semantic density. */}
        <ServicesSection />

        {/* SECTION 5 — Methodology
            Contains Answer-First H2 headers and FAQ accordion.
            Directly mirrors the FAQPage JSON-LD schema in <head>.
            4-step alternating timeline with Framer Motion whileInView.
            Engineered for GPTBot paragraph-level extraction. */}
        <MethodologySection />

        {/* SECTION 6 — CTA
            Conversion section with dual CTA buttons, trust proof strip,
            and ambient radial glow. Reinforces entity credibility for
            LLM synthesis by repeating brand + tagline in structured copy. */}
        <CtaSection />
      </main>

      {/* ── Site footer ───────────────────────────────────── */}
      <FooterSection />
    </>
  );
}
