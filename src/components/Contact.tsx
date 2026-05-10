import { motion } from "framer-motion";
import { useState } from "react";

const socials = [
  { name: "Email · riteshprasad9112@gmail.com", href: "mailto:riteshprasad9112@gmail.com" },
  { name: "Instagram · @riteshp.17", href: "https://instagram.com/riteshp.17" },
  { name: "Location · Jamshedpur, India", href: "#" },
];

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative overflow-hidden py-28 md:py-40">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 aurora-bg opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 md:grid-cols-12 md:gap-20 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="md:col-span-6"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-primary/90">Contact</p>
          <h2 className="font-display text-5xl leading-[0.95] tracking-tight md:text-7xl">
            Let's make something <em className="text-gold-gradient">unrepeatable</em>.
          </h2>
          <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
            Commissions, exhibitions and quiet conversations. Studio visits by
            appointment in Lisbon and Berlin.
          </p>

          <div className="mt-12 space-y-3">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                className="group flex items-center justify-between border-b border-border py-4 text-2xl transition hover:border-primary md:text-3xl"
              >
                <span className="font-display tracking-wide transition-colors group-hover:text-primary">{s.name}</span>
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="glass relative h-fit rounded-3xl p-8 md:col-span-6 md:p-10"
        >
          <div className="absolute -inset-px -z-10 rounded-3xl bg-gradient-to-br from-primary/30 via-accent/20 to-transparent opacity-60 blur-xl" />
          <h3 className="font-display text-2xl">Send a note</h3>
          <p className="mt-1 text-sm text-muted-foreground">Replies within 48 hours.</p>

          <div className="mt-8 space-y-6">
            {[
              { l: "Name", t: "text", p: "Your name" },
              { l: "Email", t: "email", p: "you@studio.com" },
            ].map((f) => (
              <label key={f.l} className="block">
                <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{f.l}</span>
                <input
                  required
                  type={f.t}
                  placeholder={f.p}
                  className="mt-2 w-full border-b border-border bg-transparent py-3 text-foreground placeholder:text-muted-foreground/50 outline-none transition focus:border-primary"
                />
              </label>
            ))}
            <label className="block">
              <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Message</span>
              <textarea
                required
                rows={4}
                placeholder="Tell me about the project or piece…"
                className="mt-2 w-full resize-none border-b border-border bg-transparent py-3 text-foreground placeholder:text-muted-foreground/50 outline-none transition focus:border-primary"
              />
            </label>
          </div>

          <button
            type="submit"
            className="mt-10 inline-flex w-full items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 text-sm uppercase tracking-[0.2em] text-primary-foreground shadow-[var(--shadow-glow-gold)] transition hover:scale-[1.01] hover:shadow-[0_18px_80px_-10px_var(--color-primary)]"
          >
            {sent ? "Thank you · sent" : "Send message"}
            <span>→</span>
          </button>
        </motion.form>
      </div>

      <footer className="mx-auto mt-28 flex max-w-7xl flex-col items-start justify-between gap-6 border-t border-border px-6 pt-10 text-xs uppercase tracking-[0.25em] text-muted-foreground md:flex-row md:items-center md:px-10">
        <span>© 2026 Ritesh Prasad · All works protected</span>
        <span className="font-mono">Jamshedpur · India</span>
      </footer>
    </section>
  );
}
