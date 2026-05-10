import { motion } from "framer-motion";

export function Nav() {
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <a href="#top" className="flex items-center gap-2 font-display text-xl tracking-wide">
          <span className="inline-block h-2 w-2 rounded-full bg-primary shadow-[0_0_18px_var(--color-primary)]" />
          <span className="text-foreground">STROKES</span>
        </a>
        <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.22em] text-muted-foreground md:flex">
          <a href="#works" className="transition hover:text-foreground">Works</a>
          <a href="#about" className="transition hover:text-foreground">About</a>
          <a href="#process" className="transition hover:text-foreground">Process</a>
          <a href="#contact" className="transition hover:text-foreground">Contact</a>
        </nav>
        <a
          href="#contact"
          className="hidden rounded-full border border-border px-4 py-2 text-xs uppercase tracking-[0.2em] text-foreground/90 transition hover:border-primary hover:text-primary md:inline-flex"
        >
          Commission
        </a>
      </div>
    </motion.header>
  );
}
