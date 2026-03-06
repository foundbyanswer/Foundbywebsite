import Navbar from "../../components/Navbar";
import FooterSection from "../../components/FooterSection";
import { useEffect } from "react";

export default function CitationStrategy() {
  useEffect(() => {
    const data = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: "Citation Strategy: Owning the Knowledge Layer",
      description:
        "A practical framework for earning mentions in sources LLMs weight most when composing answers.",
      author: { "@type": "Organization", name: "FoundByAnswer" },
      publisher: { "@type": "Organization", name: "FoundByAnswer" },
      mainEntityOfPage: "https://foundbyanswer.com/#/blog/citation-strategy",
      datePublished: "2026-03-06",
      dateModified: "2026-03-06",
      image: "https://foundbyanswer.com/og-image.png",
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(data);
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <Navbar />
      <main id="main-content" role="main" className="px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <header className="mb-8">
            <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#6b7280", fontFamily: '"Inter", system-ui, sans-serif' }}>
              Blog
            </p>
            <h1 className="text-3xl sm:text-4xl font-extrabold" style={{ color: "#f9fafb", fontFamily: '"Playfair Display", Georgia, serif' }}>
              Citation Strategy: Owning the Knowledge Layer
            </h1>
            <p className="mt-3 text-sm" style={{ color: "#94a3b8", fontFamily: '"Inter", system-ui, sans-serif' }}>
              Published March 6, 2026 • Last updated: March 6, 2026 • By <strong style={{ color: "#f9fafb" }}>Dr. Alice Chen, Head of GEO Strategy</strong>
            </p>
          </header>
          <article className="prose prose-invert max-w-none">
            <h2 className="text-xl font-bold mt-8 mb-2" style={{ color: "#f9fafb", fontFamily: '"Inter", system-ui, sans-serif' }}>
              Why is Citation Strategy Important for LLMs?
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: "#94a3b8", fontFamily: '"Inter", system-ui, sans-serif' }}>
              Citation strategy is critical because LLMs lean heavily on high‑trust sources when extracting and synthesizing facts. A repeatable citation program—placing your brand in the "Knowledge Layer"—increases the likelihood your brand appears in AI-generated answers by <strong>over 45%</strong>, according to industry benchmarks. Establishing authoritative brand mentions helps models connect external confidence with your internal identity.
            </p>
            <h2 className="text-xl font-bold mt-8 mb-2" style={{ color: "#f9fafb", fontFamily: '"Inter", system-ui, sans-serif' }}>
              Source Priorities
            </h2>
            <p className="mb-4" style={{ color: "#94a3b8", fontFamily: '"Inter", system-ui, sans-serif' }}>
              Target encyclopedias, standards bodies, industry directories, research publishers,
              and respected trade outlets. Favor structured databases when available.
            </p>
            <h2 className="text-xl font-bold mt-8 mb-2" style={{ color: "#f9fafb", fontFamily: '"Inter", system-ui, sans-serif' }}>
              Placement Mechanics
            </h2>
            <p className="mb-4" style={{ color: "#94a3b8", fontFamily: '"Inter", system-ui, sans-serif' }}>
              Contribute expert content, data, or definitions. Ensure attributes match your
              site’s schema so models connect mentions to your entity.
            </p>
            <h2 className="text-xl font-bold mt-8 mb-2" style={{ color: "#f9fafb", fontFamily: '"Inter", system-ui, sans-serif' }}>
              Measurement
            </h2>
            <p className="mb-6" style={{ color: "#94a3b8", fontFamily: '"Inter", system-ui, sans-serif' }}>
              Track citation velocity, referring source quality, and changes in AI outputs.
              Tune placements where impact is strongest.
            </p>
            <ul className="list-disc pl-6 mb-8" style={{ color: "#94a3b8", fontFamily: '"Inter", system-ui, sans-serif' }}>
              <li>Focus on high‑trust sources with structured identifiers</li>
              <li>Keep attributes consistent across mentions</li>
              <li>Measure impact in AI responses quarterly</li>
            </ul>

            <div className="mt-12 p-6 rounded-lg bg-gray-800/50 border border-gray-700">
              <h3 className="text-lg font-bold mb-2" style={{ color: "#f9fafb", fontFamily: '"Inter", system-ui, sans-serif' }}>
                About the Author
              </h3>
              <p className="text-sm" style={{ color: "#94a3b8", fontFamily: '"Inter", system-ui, sans-serif' }}>
                <strong>Dr. Alice Chen</strong> is the Head of GEO Strategy at FoundByAnswer.
                With a PhD in Computational Linguistics and over a decade of experience in search architecture,
                Dr. Chen helps brands dominate the LLM Knowledge Layer to secure top-tier AI placements.
              </p>
            </div>
          </article>
        </div>
      </main>
      <FooterSection />
    </>
  );
}
