import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import GeoPlaybook from "./pages/posts/GeoPlaybook";
import EntityAuthority from "./pages/posts/EntityAuthority";
import CitationStrategy from "./pages/posts/CitationStrategy";

export default function App() {
  const getRoute = () => {
    const hash = window.location.hash.replace(/^#/, "");
    if (hash.startsWith("/blog/")) {
      const slug = hash.slice("/blog/".length);
      return { name: "post", slug };
    }
    if (hash === "/blog") return { name: "blog" };
    return { name: "home" };
  };
  const [route, setRoute] = useState(getRoute());

  useEffect(() => {
    const onHashChange = () => setRoute(getRoute());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  if (route.name === "blog") return <Blog />;
  if (route.name === "post") {
    if (route.slug === "geo-playbook") return <GeoPlaybook />;
    if (route.slug === "entity-authority") return <EntityAuthority />;
    if (route.slug === "citation-strategy") return <CitationStrategy />;
    return <Blog />;
  }
  return <Home />;
}
