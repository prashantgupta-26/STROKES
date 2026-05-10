import { motion } from "framer-motion";
export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-28 md:py-40">
      <div className="absolute inset-0 -z-10 aurora-bg opacity-40" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 md:grid-cols-12 md:gap-20 md:px-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative md:col-span-5"
        >
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-accent/40 via-primary/20 to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-border">
            <img src="/about-image.jpeg" alt="Portrait of the artist" loading="lazy" className="w-full h-auto object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 glass rounded-xl p-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Studio · Jamshedpur, India</p>
              <p className="mt-1 font-display text-lg">Ritesh Prasad</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1 }}
          className="md:col-span-7 md:pt-10"
        >
          <p className="mb-6 text-xs uppercase tracking-[0.4em] text-primary/90">About Me</p>
          <h2 className="font-display text-5xl leading-[1.05] tracking-tight md:text-6xl">
            Capturing emotion in <em className="text-gold-gradient">graphite</em> and stillness.
          </h2>
          <div className="mt-10 max-w-xl space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              I'm <span className="text-foreground/90">Ritesh Prasad</span>, a pencil artist from
              Jamshedpur, India, passionate about creating realistic portraits and detailed
              handmade artworks through pencil sketching. My work focuses on capturing emotion,
              depth, and expression using fine details, smooth shading, and realistic textures.
            </p>
            <p>
              For me, art is more than drawing — it is a way to transform imagination, emotions,
              and stories into visual form. Every artwork reflects patience, creativity, and
              dedication to the craft of pencil art.
            </p>
            <p>
              Through this portfolio, I share my artistic journey, creative perspective, and the
              artworks that represent my passion for realism and handmade sketching.
            </p>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
