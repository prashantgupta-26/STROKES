import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Gallery } from "@/components/Gallery";
import { About } from "@/components/About";
import { Process } from "@/components/Process";
import { Contact } from "@/components/Contact";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "STROKES — Pencil Artist Portfolio | Jamshedpur, India" },
      { name: "description", content: "STROKES — a curated portfolio of pencil sketches and realistic portraits by Ritesh Prasad, capturing emotion, depth and detail in graphite." },
      { property: "og:title", content: "STROKES — Pencil Artist Portfolio" },
      { property: "og:description", content: "Selected pencil works, process and contact." },
    ],
  }),
});

function Index() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Gallery />
      <About />
      <Process />
      <Contact />
    </main>
  );
}
