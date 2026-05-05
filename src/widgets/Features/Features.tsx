"use client";
import { motion } from "framer-motion";
import { ArrowRightLeft, Shield, Trophy, Users, Zap } from "lucide-react";

const cardFade = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
});

/* ── Exchange animation ──────────────────────────────────── */
const ExchangeAnimation = () => (
  <div className="mt-6 flex items-center justify-between gap-4">
    {/* Left user */}
    <div className="flex flex-col items-center gap-2">
      <img
        src="https://api.dicebear.com/7.x/avataaars/svg?seed=Anna"
        alt="Creator A"
        className="h-12 w-12 rounded-full border-2 border-accent-purple/40"
      />
      <span className="text-xs font-medium text-white/60">@anna_dev</span>
      <div className="rounded-lg bg-accent-purple/15 px-3 py-1.5 text-center">
        <p className="text-[10px] text-accent-purple/70">Offering</p>
        <p className="text-xs font-semibold text-white/80">Code Review</p>
      </div>
    </div>

    {/* Animated arrows */}
    <div className="flex flex-col items-center gap-2">
      <motion.div
        animate={{ x: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
        className="flex items-center gap-1"
      >
        <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-accent-purple to-accent-cyan" />
        <div className="h-1.5 w-1.5 rotate-45 border-r border-t border-accent-cyan" />
      </motion.div>
      <div className="rounded-full border border-accent-purple/30 bg-accent-purple/10 p-2">
        <ArrowRightLeft className="h-4 w-4 text-accent-purple" />
      </div>
      <motion.div
        animate={{ x: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
        className="flex items-center gap-1"
      >
        <div className="h-1.5 w-1.5 rotate-[-135deg] border-r border-t border-accent-purple" />
        <div className="h-[1px] w-12 bg-gradient-to-l from-transparent via-accent-cyan to-accent-purple" />
      </motion.div>
    </div>

    {/* Right user */}
    <div className="flex flex-col items-center gap-2">
      <img
        src="https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus"
        alt="Creator B"
        className="h-12 w-12 rounded-full border-2 border-accent-cyan/40"
      />
      <span className="text-xs font-medium text-white/60">@marcusyt</span>
      <div className="rounded-lg bg-accent-cyan/10 px-3 py-1.5 text-center">
        <p className="text-[10px] text-accent-cyan/70">Offering</p>
        <p className="text-xs font-semibold text-white/80">YT Sub</p>
      </div>
    </div>
  </div>
);

/* ── Karma rank display ──────────────────────────────────── */
const KarmaDisplay = () => {
  const ranks = [
    { label: "Bronze",  score: "0–499",   active: false },
    { label: "Silver",  score: "500–999", active: false },
    { label: "Gold",    score: "1000+",   active: true  },
    { label: "Diamond", score: "2500+",   active: false },
  ];
  return (
    <div className="mt-5 flex flex-col gap-2">
      {ranks.map((r) => (
        <div
          key={r.label}
          className={`flex items-center justify-between rounded-xl px-3 py-2 transition-all duration-300 ${
            r.active
              ? "bg-yellow-400/10 border border-yellow-400/25"
              : "bg-white/[0.03] border border-transparent"
          }`}
        >
          <span className={`text-sm font-semibold ${r.active ? "text-yellow-400" : "text-white/40"}`}>
            {r.label}
          </span>
          <span className={`text-xs ${r.active ? "text-yellow-400/70" : "text-white/25"}`}>
            {r.score} KP
          </span>
        </div>
      ))}
    </div>
  );
};

/* ── Niche chips ─────────────────────────────────────────── */
const NicheChips = () => {
  const niches = [
    { label: "Tech",     color: "bg-cyan-400/15 text-cyan-300 border-cyan-400/20" },
    { label: "Design",   color: "bg-pink-400/15 text-pink-300 border-pink-400/20" },
    { label: "Anime",    color: "bg-purple-400/15 text-purple-300 border-purple-400/20" },
    { label: "Fitness",  color: "bg-green-400/15 text-green-300 border-green-400/20" },
    { label: "Music",    color: "bg-orange-400/15 text-orange-300 border-orange-400/20" },
    { label: "Finance",  color: "bg-yellow-400/15 text-yellow-300 border-yellow-400/20" },
    { label: "Gaming",   color: "bg-red-400/15 text-red-300 border-red-400/20" },
    { label: "Art",      color: "bg-indigo-400/15 text-indigo-300 border-indigo-400/20" },
  ];
  return (
    <div className="mt-5 flex flex-wrap gap-2">
      {niches.map((n) => (
        <span
          key={n.label}
          className={`rounded-full border px-3 py-1 text-xs font-semibold ${n.color}`}
        >
          {n.label}
        </span>
      ))}
    </div>
  );
};

/* ── Features ────────────────────────────────────────────── */
export const Features = () => {
  return (
    <section className="relative w-full py-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-purple/5 blur-[100px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        {/* Section heading */}
        <motion.div
          {...cardFade(0)}
          className="mb-16 flex flex-col items-center text-center"
        >
          <span className="mb-4 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-muted">
            Why Socio
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Built for real
            <span className="bg-gradient-to-r from-accent-purple to-accent-cyan bg-clip-text text-transparent">
              {" "}creator growth
            </span>
          </h2>
          <p className="mt-4 max-w-xl text-base text-muted">
            No vanity metrics. Just a direct exchange of value between creators who actually want to grow.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:grid-rows-2">

          {/* Card 1 — Instant Exchange (large, 7 cols) */}
          <motion.div
            {...cardFade(0.05)}
            className="group relative overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.03] p-8 md:col-span-7 md:row-span-1"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/8 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative z-10">
              <div className="inline-flex rounded-2xl bg-accent-cyan/10 p-3 text-accent-cyan">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-2xl font-bold text-foreground">Instant Exchange</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Join a lobby in seconds. Get matched with a creator who needs exactly what you offer — and offers exactly what you need.
              </p>
              <ExchangeAnimation />
            </div>
          </motion.div>

          {/* Card 2 — Karma System (5 cols) */}
          <motion.div
            {...cardFade(0.1)}
            className="group relative overflow-hidden rounded-3xl border border-white/[0.07] bg-gradient-to-br from-yellow-500/8 via-transparent to-transparent p-8 md:col-span-5 md:row-span-1"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative z-10">
              <div className="inline-flex rounded-2xl bg-yellow-400/10 p-3 text-yellow-400">
                <Trophy className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-2xl font-bold text-foreground">Karma System</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Every exchange builds your reputation. High karma unlocks premium rooms and top-tier collaborators.
              </p>
              <KarmaDisplay />
            </div>
          </motion.div>

          {/* Card 3 — Niche Communities (4 cols) */}
          <motion.div
            {...cardFade(0.15)}
            className="group relative overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.03] p-8 md:col-span-4 md:row-span-1"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative z-10">
              <div className="inline-flex rounded-2xl bg-accent-cyan/10 p-3 text-accent-cyan">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-2xl font-bold text-foreground">Niche Communities</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Filter by your niche. Only connect with creators in your circle who actually care about your content.
              </p>
              <NicheChips />
            </div>
          </motion.div>

          {/* Card 4 — Verified Exchanges (8 cols) */}
          <motion.div
            {...cardFade(0.2)}
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/[0.07] bg-gradient-to-br from-accent-purple/10 via-transparent to-transparent p-8 md:col-span-8 md:row-span-1"
          >
            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-accent-purple/10 blur-[60px]" />
            <div className="relative z-10">
              <div className="inline-flex rounded-2xl bg-accent-purple/15 p-3 text-accent-purple">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-2xl font-bold text-foreground">Zero-Tolerance Verification</h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
                Our karma-backed system enforces fairness on every exchange. Low karma? You're removed. Every session requires mutual confirmation before karma is awarded.
              </p>
            </div>

            {/* Trust indicators */}
            <div className="relative z-10 mt-8 flex flex-wrap gap-3">
              {[
                "Mutual Confirmation Required",
                "Karma-Gated Access",
                "Whitelisted Links Only",
                "Report & Review System",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-accent-purple/20 bg-accent-purple/10 px-3 py-1 text-xs font-medium text-accent-purple/80"
                >
                  ✓ {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
