import { motion } from "framer-motion";

const steps = [
  { n: "01", t: "Stillness", d: "Moments of observation — studying expressions, shadows, and silence before the first line touches the paper." },
  { n: "02", t: "Sketch", d: "Loose graphite studies and flowing strokes — searching for form, emotion, and realism through every gesture." },
  { n: "03", t: "Layering", d: "Soft shading, contrast, and depth slowly emerge as each layer of graphite brings the artwork to life." },
  { n: "04", t: "Release", d: "A sketch feels complete when emotion finally settles into the details — quiet, raw, and fully expressed." },
];

export function Process() {
  return (
    <section id="process" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-20 max-w-2xl">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-primary/90">Creative Process</p>
          <h2 className="font-display text-5xl leading-[0.95] tracking-tight md:text-7xl">
            Four <em className="text-gradient">phases</em>, one sketch.
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent md:block md:left-1/2" />
          <div className="space-y-16 md:space-y-24">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: 0.05 }}
                className={`relative grid grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-16 ${
                  i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className={i % 2 === 1 ? "md:text-right" : ""}>
                  <span className="font-mono text-xs tracking-[0.3em] text-primary">{s.n} —</span>
                  <h3 className="mt-3 font-display text-4xl tracking-tight md:text-6xl">{s.t}</h3>
                </div>
                <div className="relative">
                  <div className="absolute left-0 top-1/2 hidden h-px w-10 bg-primary/40 md:block" />
                  <p className="glass rounded-2xl p-6 text-base leading-relaxed text-muted-foreground md:p-8 md:text-lg">
                    {s.d}
                  </p>
                </div>
                <span className="absolute left-[18px] top-2 hidden h-3 w-3 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_22px_var(--color-primary)] md:left-1/2 md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
