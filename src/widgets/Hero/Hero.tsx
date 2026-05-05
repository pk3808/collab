"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const notes = [
  { id: 1, side: "left",  user: "@alex_dev",      niche: "Tech",    rotate: -4, delay: 0.1,  offsetY: 0,  text: "Finally found creators who actually follow through. 3 solid code reviews in my first week." },
  { id: 2, side: "left",  user: "@sarah_creates",  niche: "Design",  rotate: 2,  delay: 0.18, offsetY: 48, text: "Swapped thumbnail feedback for a channel review. My CTR jumped 12% the next month." },
  { id: 3, side: "left",  user: "@techNinja99",    niche: "Tech",    rotate: -2, delay: 0.26, offsetY: 16, text: "No fake hype, just real exchange. This is what creator communities should feel like." },
  { id: 4, side: "right", user: "@fitlife_jo",     niche: "Fitness", rotate: 3,  delay: 0.14, offsetY: 24, text: "Traded a form-check for a design critique. Both of us got value in under 2 minutes." },
  { id: 5, side: "right", user: "@animeweeb",      niche: "Anime",   rotate: -2, delay: 0.22, offsetY: 0,  text: "The karma system keeps people honest. Haven't had a single flake since joining." },
  { id: 6, side: "right", user: "@designpro",      niche: "Design",  rotate: 1,  delay: 0.3,  offsetY: 56, text: "Went from 40 to 340 Dribbble followers in 3 weeks. The exchange model just works." },
];

const nicheColor: Record<string, string> = {
  Tech:    "bg-sky-100    text-sky-700    dark:bg-sky-900/40    dark:text-sky-300",
  Design:  "bg-pink-100   text-pink-700   dark:bg-pink-900/40   dark:text-pink-300",
  Fitness: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
  Anime:   "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300",
};

const Clip = () => (
  <div className="absolute left-1/2 -top-[22px] -translate-x-1/2 z-10 drop-shadow-sm">
    <svg width="16" height="44" viewBox="0 0 16 44" fill="none">
      <path
        d="M8 2C5 2 2.5 4.5 2.5 7.5L2.5 30C2.5 36.5 5.5 41 8 41C10.5 41 13.5 36.5 13.5 30L13.5 10C13.5 6.5 11.5 4 9 4C6.5 4 5 6.5 5 10L5 29C5 32 6.5 34 8 34C9.5 34 11 32 11 29L11 14"
        stroke="#b0a898"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  </div>
);

const NoteCard = ({ note }: { note: typeof notes[number] }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: note.offsetY }}
    transition={{ delay: note.delay, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    whileHover={{ scale: 1.03, zIndex: 10 }}
    style={{ rotate: `${note.rotate}deg`, transformOrigin: "top center" }}
    className="relative w-full cursor-default"
  >
    <Clip />
    <div
      className="relative rounded-[3px] border border-stone-200/80 dark:border-stone-700/60 bg-[#fffef8] dark:bg-[#1e1c18] px-4 pb-4 pt-5 shadow-[0_3px_16px_rgba(0,0,0,0.08)] dark:shadow-[0_3px_20px_rgba(0,0,0,0.45)] overflow-hidden"
      style={{
        backgroundImage: "repeating-linear-gradient(transparent,transparent 27px,rgba(0,0,0,0.035) 27px,rgba(0,0,0,0.035) 28px)",
        backgroundPositionY: "42px",
      }}
    >
      {/* red margin line */}
      <div className="absolute left-9 top-0 h-full w-px bg-red-300/40 dark:bg-red-800/30" />
      <p className="relative pl-2 text-[13px] leading-[1.75] text-stone-600 dark:text-stone-300 font-medium">
        &ldquo;{note.text}&rdquo;
      </p>
      <div className="relative mt-3 pl-2 flex items-center gap-2">
        <div className="h-5 w-5 shrink-0 rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center text-[9px] font-bold text-white">
          {note.user[1].toUpperCase()}
        </div>
        <span className="text-[11px] font-semibold text-stone-500 dark:text-stone-400">{note.user}</span>
        <span className={`ml-1 rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide ${nicheColor[note.niche]}`}>
          {note.niche}
        </span>
      </div>
    </div>
  </motion.div>
);

const leftNotes  = notes.filter(n => n.side === "left");
const rightNotes = notes.filter(n => n.side === "right");

export const Hero = () => (
  <section className="relative min-h-screen w-full overflow-hidden bg-[#f5f2eb] dark:bg-[#111009] pt-16">
    {/* Subtle paper texture overlay */}
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.015] dark:opacity-[0.04]"
      style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")" }}
    />

    <div className="container relative z-10 mx-auto flex min-h-[calc(100vh-64px)] items-center gap-4 px-6 py-16">

      {/* LEFT notes column */}
      <div className="hidden lg:flex w-64 xl:w-72 shrink-0 flex-col gap-8 pt-10">
        {leftNotes.map(n => <NoteCard key={n.id} note={n} />)}
      </div>

      {/* CENTER — hero copy */}
      <div className="flex flex-1 flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Label */}
          <div className="inline-flex items-center gap-2 rounded-full border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-stone-500 dark:text-stone-400">
            Creator Exchange
          </div>

          {/* Headline */}
          <h1 className="mt-7 text-5xl font-bold leading-[1.08] tracking-tight text-stone-900 dark:text-stone-50 sm:text-6xl lg:text-[64px]">
            Swap skills.
            <br />
            Earn karma.
            <br />
            <span className="bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">
              Grow together.
            </span>
          </h1>

          {/* Subtext */}
          <p className="mx-auto mt-6 max-w-sm text-base leading-relaxed text-stone-500 dark:text-stone-400 sm:max-w-md">
            The peer-to-peer exchange hub for content creators. Find your match, do the deal, build your reputation.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link href="/dashboard">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-2 rounded-full bg-stone-900 dark:bg-stone-50 px-7 py-3.5 text-sm font-semibold text-white dark:text-stone-900 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                Browse Live Lobbies
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.button>
            </Link>
            <Link href="#how-it-works">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-full border border-stone-300 dark:border-stone-700 bg-transparent px-7 py-3.5 text-sm font-semibold text-stone-700 dark:text-stone-300 hover:bg-stone-900/5 dark:hover:bg-white/5 transition-colors duration-200"
              >
                How it Works
              </motion.button>
            </Link>
          </div>

          {/* Social proof count */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 text-xs text-stone-400 dark:text-stone-600"
          >
            Trusted by <span className="font-semibold text-stone-600 dark:text-stone-400">2,400+</span> creators across Tech, Design, Fitness & more
          </motion.p>
        </motion.div>
      </div>

      {/* RIGHT notes column */}
      <div className="hidden lg:flex w-64 xl:w-72 shrink-0 flex-col gap-8 pt-24">
        {rightNotes.map(n => <NoteCard key={n.id} note={n} />)}
      </div>
    </div>
  </section>
);
