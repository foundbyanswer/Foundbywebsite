import Navbar from "../../components/Navbar";
import FooterSection from "../../components/FooterSection";
import { useEffect } from "react";

export default function EntityAuthority() {
  useEffect(() => {
    const data = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: "Entity Authority: JSON-LD That LLMs Trust",
      description:
        "Engineering a verified organization identity using JSON-LD, consistent attributes, and authoritative profiles.",
      author: { "@type": "Organization", name: "FoundByAnswer" },
      publisher: { "@type": "Organization", name: "FoundByAnswer" },
      mainEntityOfPage: "https://foundbyanswer.com/#/blog/entity-authority",
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
              Entity Authority: JSON-LD That LLMs Trust
            </h1>
            <p className="mt-3 text-sm" style={{ color: "#94a3b8", fontFamily: '"Inter", system-ui, sans-serif' }}>
              Published March 6, 2026 • Last updated: March 6, 2026 • By <strong style={{ color: "#f9fafb" }}>Dr. Alice Chen, Head of GEO Strategy</strong>
            </p>
          </header>
          <article className="prose prose-invert max-w-none">
            <h2 className="text-xl font-bold mt-8 mb-2" style={{ color: "#f9fafb", fontFamily: '"Inter", system-ui, sans-serif' }}>
              What is Entity Authority?
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: "#94a3b8", fontFamily: '"Inter", system-ui, sans-serif' }}>
              Entity Authority is a measure of how confidently an AI language model recognizes a brand, person, or organization as a verified and factual entity. Large language models prefer entities with unambiguous, verified identities built on structured data. Implementing JSON-LD (such as Organization or ProfessionalService schemas) gives machines the required structured context to trust your organization.
            </p>
            <h2 className="text-xl font-bold mt-8 mb-2" style={{ color: "#f9fafb", fontFamily: '"Inter", system-ui, sans-serif' }}>
              Core Fields
            </h2>
            <p className="mb-4" style={{ color: "#94a3b8", fontFamily: '"Inter", system-ui, sans-serif' }}>
              Maintain consistent name, logo, url, sameAs, and contact points across pages and
              profiles. Inconsistency is a common cause of entity fragmentation.
            </p>
            <h2 className="text-xl font-bold mt-8 mb-2" style={{ color: "#f9fafb", fontFamily: '"Inter", system-ui, sans-serif' }}>
              Cross‑Graph Alignment
            </h2>
            <p className="mb-4" style={{ color: "#94a3b8", fontFamily: '"Inter", system-ui, sans-serif' }}>
              Align site markup with authoritative profiles in industry directories and knowledge
              bases. Keep attributes synchronized to avoid duplicates or stale data.
            </p>
            <h2 className="text-xl font-bold mt-8 mb-2" style={{ color: "#f9fafb", fontFamily: '"Inter", system-ui, sans-serif' }}>
              Validation
            </h2>
            <p className="mb-6" style={{ color: "#94a3b8", fontFamily: '"Inter", system-ui, sans-serif' }}>
              Validate schema regularly and monitor how models reference your brand in answers.
            </p>
            <ul className="list-disc pl-6 mb-8" style={{ color: "#94a3b8", fontFamily: '"Inter", system-ui, sans-serif' }}>
              <li>Organization and WebSite JSON‑LD on key routes</li>
              <li>Consistent attributes across profiles and pages</li>
              <li>Periodic schema validation and crawl checks</li>
            </ul>

            <div className="mt-12 p-6 rounded-lg bg-gray-800/50 border border-gray-700">
              <h3 className="text-lg font-bold mb-2" style={{ color: "#f9fafb", fontFamily: '"Inter", system-ui, sans-serif' }}>
                About the Author
              </h3>
              <p className="text-sm" style={{ color: "#94a3b8", fontFamily: '"Inter", system-ui, sans-serif' }}>
                <strong>Dr. Alice Chen</strong> is the Head of GEO Strategy at FoundByAnswer.
                With a PhD in Computational Linguistics and over a decade of experience in search architecture,
                Dr. Chen specializes in structuring data and schema formats to guarantee flawless extraction by LLMs.
              </p>
            </div>
          </article>
        </div>
      </main>
      <FooterSection />
    </>
  );
}
