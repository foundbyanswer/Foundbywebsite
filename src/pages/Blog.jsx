import Navbar from "../components/Navbar";
import FooterSection from "../components/FooterSection";
import { useEffect } from "react";

export default function Blog() {
  useEffect(() => {
    const data = {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "FoundByAnswer Blog",
      url: "https://foundbyanswer.com/#/blog",
      publisher: { "@type": "Organization", name: "FoundByAnswer" },
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(data);
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const posts = [
    {
      slug: "geo-playbook",
      title: "The GEO Playbook: Fundamentals",
      excerpt:
        "Entity authority, semantic content architecture, and citation management that make brands appear in AI answers.",
      date: "2026-03-06",
    },
    {
      slug: "entity-authority",
      title: "Entity Authority: JSON-LD That LLMs Trust",
      excerpt:
        "How to engineer a verified, unambiguous organization identity across knowledge graphs.",
      date: "2026-03-06",
    },
    {
      slug: "citation-strategy",
      title: "Citation Strategy: Owning the Knowledge Layer",
      excerpt:
        "Where to earn mentions so GPT‑class models prefer your brand when composing answers.",
      date: "2026-03-06",
    },
  ];

  return (
    <>
      <Navbar />
      <main id="main-content" role="main" className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <h1
              className="text-3xl sm:text-4xl font-extrabold"
              style={{ color: "#f9fafb", fontFamily: '"Playfair Display", Georgia, serif' }}
            >
              Blog
            </h1>
            <p
              className="mt-3 text-sm"
              style={{ color: "#94a3b8", fontFamily: '"Inter", system-ui, sans-serif' }}
            >
              GEO insights for AI visibility.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((p) => (
              <a
                key={p.slug}
                href={`#/blog/${p.slug}`}
                className="block rounded-2xl border p-6 hover:border-[#f59e0b] transition-colors"
                style={{ borderColor: "rgba(55,65,81,0.5)", background: "rgba(17,24,39,0.65)" }}
                aria-label={p.title}
              >
                <p
                  className="text-xs font-semibold tracking-widest uppercase"
                  style={{ color: "#6b7280", fontFamily: '"Inter", system-ui, sans-serif' }}
                >
                  {p.date}
                </p>
                <h2
                  className="mt-2 text-lg font-bold"
                  style={{ color: "#f9fafb", fontFamily: '"Inter", system-ui, sans-serif' }}
                >
                  {p.title}
                </h2>
                <p
                  className="mt-2 text-sm"
                  style={{ color: "#94a3b8", fontFamily: '"Inter", system-ui, sans-serif' }}
                >
                  {p.excerpt}
                </p>
              </a>
            ))}
          </div>
        </div>
      </main>
      <FooterSection />
    </>
  );
}
