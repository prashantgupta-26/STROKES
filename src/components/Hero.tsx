import { motion } from "framer-motion";
import heroImg from "@/assets/hero.jpg";
import { Noise } from "./Noise";

export function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-screen items-end overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Abstract painterly background of swirling navy and gold"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background" />
        <div className="absolute inset-0 aurora-bg opacity-50" />
      </div>
      <Noise />

      <div className="mx-auto w-full max-w-7xl px-6 pb-20 pt-40 md:px-10 md:pb-28">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-6 text-xs uppercase tracking-[0.4em] text-primary/90"
        >
          Pencil Artist · Jamshedpur, India
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.2, 0.7, 0.2, 1] }}
          className="font-display text-[15vw] leading-[0.92] tracking-tighter text-balance md:text-[10rem]"
        >
          <span className="block text-gradient">Where silence</span>
          <span className="block italic text-foreground/85">becomes <span className="text-gold-gradient">colour</span>.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between"
        >
          <p className="max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
            A curated collection of pencil sketches and expressive studies —
            capturing realism, emotion, and the silent depth between light and shadow.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#works"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-primary px-7 py-3.5 text-sm uppercase tracking-[0.18em] text-primary-foreground shadow-[var(--shadow-glow-gold)] transition hover:shadow-[0_15px_80px_-10px_var(--color-primary)]"
            >
              <span>Enter the Gallery</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#about"
              className="text-sm uppercase tracking-[0.2em] text-foreground/80 underline-offset-8 hover:text-primary hover:underline"
            >
              The Artist
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-16 flex items-center gap-6 text-xs uppercase tracking-[0.3em] text-muted-foreground"
        >
          <span className="h-px w-16 bg-border" />
          <span>Scroll</span>
          <span className="font-mono">001 / 042</span>
        </motion.div>
      </div>
    </section>
  );
}
