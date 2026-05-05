import { Header } from "@/widgets/Header/Header";
import { Hero } from "@/widgets/Hero/Hero";
import { Features } from "@/widgets/Features/Features";
import { Layers } from "lucide-react";
import Link from "next/link";

const footerLinks = {
  Product:  ["Lobbies", "Leaderboard", "How it Works", "Changelog"],
  Company:  ["About", "Blog", "Careers", "Press Kit"],
  Legal:    ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

export default function LandingPage() {
  return (
    <div className="flex flex-col bg-background selection:bg-violet-200 dark:selection:bg-violet-900/40">
      <Header />
      <Hero />
      <Features />

      {/* ── CTA Banner ─────────────────────────────────────── */}
      <section className="relative overflow-hidden py-32 bg-[#fffef8] dark:bg-[#1e1c18] border-t border-stone-200 dark:border-stone-800">
        <div className="container relative z-10 mx-auto flex flex-col items-center px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-stone-500 dark:text-stone-400 shadow-sm mb-6">
            Get Started
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50 sm:text-5xl">
            Ready to grow{" "}
            <span className="relative inline-block font-serif italic font-normal text-stone-900 dark:text-stone-50">
              together?
              <svg className="absolute -bottom-1.5 left-0 w-full opacity-80 text-amber-500 dark:text-amber-400" viewBox="0 0 200 9" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.00035 6.94054C54.1032 2.65651 133.722 -1.41113 198.058 6.94054" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          <p className="mt-4 max-w-lg text-base text-stone-600 dark:text-stone-400">
            Join thousands of creators already building their reach through genuine peer-to-peer exchange.
          </p>
          <Link
            href="/dashboard"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-stone-900 dark:bg-stone-50 px-8 py-4 text-base font-semibold text-white dark:text-stone-900 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Browse Live Lobbies →
          </Link>
        </div>
        

      </section>

      {/* ── Footer ─────────────────────────────────────────── */}
      <footer className="border-t border-stone-200 dark:border-stone-800 bg-[#f5f2eb] dark:bg-[#111009]">
        <div className="container mx-auto px-6 py-16 lg:px-12">
          {/* Top: brand + links */}
          <div className="grid grid-cols-2 gap-12 md:grid-cols-4 lg:gap-16">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <Link href="/" className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-stone-900 dark:bg-stone-50 shadow-sm">
                  <Layers className="h-4 w-4 text-white dark:text-stone-900" />
                </div>
                <span className="text-base font-extrabold text-stone-900 dark:text-stone-50">Socio</span>
              </Link>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-stone-500 dark:text-stone-400">
                The peer-to-peer exchange hub for modern content creators.
              </p>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([section, links]) => (
              <div key={section}>
                <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-stone-800 dark:text-stone-200">
                  {section}
                </h4>
                <ul className="flex flex-col gap-3">
                  {links.map((link) => (
                    <li key={link}>
                      <Link
                        href="#"
                        className="text-sm font-medium text-stone-500 dark:text-stone-400 transition-colors duration-200 hover:text-stone-900 dark:hover:text-stone-50"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-stone-200 dark:border-stone-800 pt-8 sm:flex-row">
            <p className="text-sm font-medium text-stone-500 dark:text-stone-400">
              © 2026 Socio. Built for the creator community.
            </p>
            <p className="text-sm font-medium text-stone-400 dark:text-stone-500">
              Made with care · No VC funding · Just vibes
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
