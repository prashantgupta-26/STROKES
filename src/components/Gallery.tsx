import { motion } from "framer-motion";
const works = [
  { src: "/IMG-20251108-WA0008.jpg", title: "The Silent Echo", year: "2025", medium: "Graphite on paper", aspect: "aspect-[3/4]" },
  { src: "/IMG_20220630_114027.JPG", title: "Whispers of Graphite", year: "2022", medium: "Pencil study", aspect: "aspect-[4/3]" },
  { src: "/IMG_20231225_145554.jpg", title: "Shadows in Light", year: "2023", medium: "Charcoal & graphite", aspect: "aspect-[3/4]" },
  { src: "/IMG_20240123_080208.jpg", title: "Fleeting Moments", year: "2024", medium: "Fine line pencil", aspect: "aspect-[3/4]" },
  { src: "/IMG_20260510_115923.jpg", title: "The Observer", year: "2026", medium: "Graphite on paper", aspect: "aspect-[4/3]" },
  { src: "/IMG_20260510_120043.jpg", title: "Contours of Time", year: "2026", medium: "Pencil & shading", aspect: "aspect-square" },
  { src: "/IMG_20260510_120924.jpg", title: "Ethereal Form", year: "2026", medium: "Graphite on paper", aspect: "aspect-[3/4]" },
  { src: "/IMG_20260510_120943.jpg", title: "Veiled Gaze", year: "2026", medium: "Pencil study", aspect: "aspect-[4/3]" },
  { src: "/IMG_20260510_121031.jpg", title: "Quiet Resonance", year: "2026", medium: "Graphite & charcoal", aspect: "aspect-[3/4]" },
  { src: "/IMG_20260510_122605.jpg", title: "Fragmented Memories", year: "2026", medium: "Fine line pencil", aspect: "aspect-square" },
  { src: "/IMG_20260510_123035.jpg", title: "Line and Void", year: "2026", medium: "Graphite on paper", aspect: "aspect-[4/3]" },
  { src: "/IMG_20260510_123123.jpg", title: "The Weight of Stillness", year: "2026", medium: "Pencil sketch", aspect: "aspect-[3/4]" },
  { src: "/IMG_20260510_123316.jpg", title: "Transient Thoughts", year: "2026", medium: "Charcoal study", aspect: "aspect-[3/4]" },
  { src: "/IMG_20260510_123831.jpg", title: "Unspoken Words", year: "2026", medium: "Graphite on paper", aspect: "aspect-[4/3]" },
  { src: "/Snapchat-1422138124.jpg", title: "The Gentle Arch", year: "2026", medium: "Pencil & shading", aspect: "aspect-square" },
  { src: "/Snapchat-54250444.jpg", title: "Fading Perspectives", year: "2026", medium: "Fine line pencil", aspect: "aspect-[3/4]" },
  { src: "/WhatsApp Image 2026-05-10 at 2.26.11 PM.jpeg", title: "Depth of Solitude", year: "2026", medium: "Graphite on paper", aspect: "aspect-[4/3]" },
];

export function Gallery() {
  return (
    <section id="works" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-primary/90">Selected Works · 2023 — 2026</p>
            <h2 className="font-display text-5xl leading-[0.95] tracking-tight md:text-7xl">
              <span className="text-gradient">A quiet</span>
              <br />
              <em className="not-italic text-foreground/80">retrospective.</em>
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            A collection of detailed sketches and expressive studies — moments
            of emotion, realism, and imagination captured through graphite and
            shadow.
          </p>
        </div>

        <div className="columns-1 gap-6 md:columns-2 lg:columns-3 md:gap-8">
          {works.map((w, i) => (
            <motion.figure
              key={w.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, delay: (i % 3) * 0.1, ease: [0.2, 0.7, 0.2, 1] }}
              className="group relative mb-6 overflow-hidden rounded-2xl bg-surface break-inside-avoid md:mb-8"
            >
              <div className="relative overflow-hidden">
                <img
                  src={w.src}
                  alt={w.title}
                  loading="lazy"
                  className="h-auto w-full object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 opacity-0 transition-all duration-500 group-hover:opacity-100 md:p-8">
                <div>
                  <h3 className="font-display text-2xl leading-tight text-foreground md:text-3xl">{w.title}</h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    {w.medium} · {w.year}
                  </p>
                </div>
                <span className="font-mono text-xs text-primary">N°{String(i + 1).padStart(2, "0")}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
