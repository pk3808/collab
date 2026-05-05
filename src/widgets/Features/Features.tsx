"use client";
import { motion } from "framer-motion";
import { ArrowRightLeft, Shield, Trophy, Users, Zap } from "lucide-react";

const cardFade = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
});

const PaperCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div
    className={`relative rounded-[3px] border border-stone-200/80 dark:border-stone-700/60 bg-[#fffef8] dark:bg-[#1e1c18] p-8 shadow-[0_3px_16px_rgba(0,0,0,0.08)] dark:shadow-[0_3px_20px_rgba(0,0,0,0.45)] overflow-hidden ${className}`}
    style={{
      backgroundImage: "repeating-linear-gradient(transparent,transparent 27px,rgba(0,0,0,0.035) 27px,rgba(0,0,0,0.035) 28px)",
      backgroundPositionY: "42px",
    }}
  >
    {/* red margin line */}
    <div className="absolute left-9 top-0 h-full w-px bg-red-300/40 dark:bg-red-800/30" />
    <div className="relative pl-6 z-10 h-full flex flex-col">
      {children}
    </div>
  </div>
);

/* ── Exchange animation ──────────────────────────────────── */
const ExchangeAnimation = () => (
  <div className="mt-8 flex items-center justify-between gap-4 bg-stone-50 dark:bg-stone-900/40 p-4 rounded-xl border border-stone-200 dark:border-stone-700">
    {/* Left user */}
    <div className="flex flex-col items-center gap-2">
      <img
        src="https://api.dicebear.com/7.x/avataaars/svg?seed=Anna"
        alt="Creator A"
        className="h-12 w-12 rounded-full border-2 border-violet-500/40"
      />
      <span className="text-[10px] font-medium text-stone-500">@anna_dev</span>
      <div className="rounded-lg bg-violet-100 dark:bg-violet-900/30 px-3 py-1.5 text-center">
        <p className="text-[9px] text-violet-600 dark:text-violet-400">Offering</p>
        <p className="text-xs font-semibold text-stone-800 dark:text-stone-200">Code Review</p>
      </div>
    </div>

    {/* Animated arrows */}
    <div className="flex flex-col items-center gap-2">
      <motion.div
        animate={{ x: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
        className="flex items-center gap-1"
      >
        <div className="h-[2px] w-8 sm:w-12 bg-stone-300 dark:bg-stone-600" />
        <div className="h-1.5 w-1.5 rotate-45 border-r-2 border-t-2 border-cyan-500" />
      </motion.div>
      <div className="rounded-full border border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-800 p-2 shadow-sm">
        <ArrowRightLeft className="h-4 w-4 text-stone-600 dark:text-stone-300" />
      </div>
      <motion.div
        animate={{ x: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
        className="flex items-center gap-1"
      >
        <div className="h-1.5 w-1.5 rotate-[-135deg] border-r-2 border-t-2 border-violet-500" />
        <div className="h-[2px] w-8 sm:w-12 bg-stone-300 dark:bg-stone-600" />
      </motion.div>
    </div>

    {/* Right user */}
    <div className="flex flex-col items-center gap-2">
      <img
        src="https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus"
        alt="Creator B"
        className="h-12 w-12 rounded-full border-2 border-cyan-500/40"
      />
      <span className="text-[10px] font-medium text-stone-500">@marcusyt</span>
      <div className="rounded-lg bg-cyan-100 dark:bg-cyan-900/30 px-3 py-1.5 text-center">
        <p className="text-[9px] text-cyan-600 dark:text-cyan-400">Offering</p>
        <p className="text-xs font-semibold text-stone-800 dark:text-stone-200">YT Sub</p>
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
    <div className="mt-6 flex flex-col gap-2">
      {ranks.map((r) => (
        <div
          key={r.label}
          className={`flex items-center justify-between rounded-xl px-4 py-2.5 transition-all duration-300 ${
            r.active
              ? "bg-amber-100 dark:bg-amber-900/30 border border-amber-300 dark:border-amber-700"
              : "bg-stone-50 dark:bg-stone-800/30 border border-stone-200 dark:border-stone-700/50"
          }`}
        >
          <span className={`text-sm font-bold ${r.active ? "text-amber-700 dark:text-amber-400" : "text-stone-500 dark:text-stone-400"}`}>
            {r.label}
          </span>
          <span className={`text-xs font-semibold ${r.active ? "text-amber-600/80 dark:text-amber-400/80" : "text-stone-400 dark:text-stone-500"}`}>
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
    { label: "Tech",     color: "bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 border-sky-300/50" },
    { label: "Design",   color: "bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 border-pink-300/50" },
    { label: "Anime",    color: "bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 border-violet-300/50" },
    { label: "Fitness",  color: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border-emerald-300/50" },
    { label: "Music",    color: "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 border-orange-300/50" },
    { label: "Finance",  color: "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 border-amber-300/50" },
    { label: "Gaming",   color: "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 border-red-300/50" },
  ];
  return (
    <div className="mt-8 flex flex-wrap gap-2.5">
      {niches.map((n) => (
        <span
          key={n.label}
          className={`rounded-full border px-3 py-1.5 text-xs font-bold tracking-wide ${n.color}`}
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
    <section id="how-it-works" className="relative w-full py-32 bg-[#f5f2eb] dark:bg-[#111009]">
      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        {/* Section heading */}
        <motion.div
          {...cardFade(0)}
          className="mb-16 flex flex-col items-center text-center"
        >
          <span className="mb-4 rounded-full border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-stone-500 dark:text-stone-400 shadow-sm">
            Why Socio
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50 sm:text-5xl">
            Built for real
            <span className="text-teal-600 dark:text-teal-400">
              {" "}creator growth
            </span>
          </h2>
          <p className="mt-4 max-w-xl text-base text-stone-500 dark:text-stone-400">
            No vanity metrics. Just a direct exchange of value between creators who actually want to grow.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:grid-rows-2">

          {/* Card 1 — Instant Exchange (large, 7 cols) */}
          <motion.div {...cardFade(0.05)} className="md:col-span-7 md:row-span-1 h-full">
            <PaperCard className="h-full">
              <div className="inline-flex rounded-xl bg-cyan-100 dark:bg-cyan-900/40 p-3 text-cyan-600 dark:text-cyan-400 self-start">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-2xl font-bold text-stone-900 dark:text-stone-50">Instant Exchange</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600 dark:text-stone-400 max-w-sm">
                Join a lobby in seconds. Get matched with a creator who needs exactly what you offer — and offers exactly what you need.
              </p>
              <div className="mt-auto">
                <ExchangeAnimation />
              </div>
            </PaperCard>
          </motion.div>

          {/* Card 2 — Karma System (5 cols) */}
          <motion.div {...cardFade(0.1)} className="md:col-span-5 md:row-span-1 h-full">
            <PaperCard className="h-full">
              <div className="inline-flex rounded-xl bg-amber-100 dark:bg-amber-900/40 p-3 text-amber-600 dark:text-amber-400 self-start">
                <Trophy className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-2xl font-bold text-stone-900 dark:text-stone-50">Karma System</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                Every exchange builds your reputation. High karma unlocks premium rooms.
              </p>
              <div className="mt-auto">
                <KarmaDisplay />
              </div>
            </PaperCard>
          </motion.div>

          {/* Card 3 — Niche Communities (4 cols) */}
          <motion.div {...cardFade(0.15)} className="md:col-span-4 md:row-span-1 h-full">
            <PaperCard className="h-full">
              <div className="inline-flex rounded-xl bg-violet-100 dark:bg-violet-900/40 p-3 text-violet-600 dark:text-violet-400 self-start">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-2xl font-bold text-stone-900 dark:text-stone-50">Niche Communities</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                Filter by your niche. Only connect with creators in your circle.
              </p>
              <div className="mt-auto">
                <NicheChips />
              </div>
            </PaperCard>
          </motion.div>

          {/* Card 4 — Verified Exchanges (8 cols) */}
          <motion.div {...cardFade(0.2)} className="md:col-span-8 md:row-span-1 h-full">
            <PaperCard className="h-full">
              <div className="inline-flex rounded-xl bg-emerald-100 dark:bg-emerald-900/40 p-3 text-emerald-600 dark:text-emerald-400 self-start">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-2xl font-bold text-stone-900 dark:text-stone-50">Zero-Tolerance Verification</h3>
              <p className="mt-2 max-w-lg text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                Our karma-backed system enforces fairness on every exchange. Low karma? You're removed. Every session requires mutual confirmation before karma is awarded.
              </p>

              {/* Trust indicators */}
              <div className="mt-auto pt-8 flex flex-wrap gap-3">
                {[
                  "Mutual Confirmation Required",
                  "Karma-Gated Access",
                  "Whitelisted Links Only",
                  "Report & Review System",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 px-3 py-1.5 text-xs font-bold text-stone-700 dark:text-stone-300"
                  >
                    ✓ {tag}
                  </span>
                ))}
              </div>
            </PaperCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
