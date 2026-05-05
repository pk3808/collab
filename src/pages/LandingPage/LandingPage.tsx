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
    <div className="flex flex-col bg-background">
      <Header />
      <Hero />
      <Features />

      {/* ── CTA Banner ─────────────────────────────────────── */}
      <section className="relative overflow-hidden py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-accent-purple/15 via-transparent to-accent-cyan/10" />
        </div>
        <div className="container relative z-10 mx-auto flex flex-col items-center px-6 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Ready to grow{" "}
            <span className="bg-gradient-to-r from-accent-purple to-accent-cyan bg-clip-text text-transparent">
              together?
            </span>
          </h2>
          <p className="mt-4 max-w-lg text-base text-muted">
            Join thousands of creators already building their reach through genuine peer-to-peer exchange.
          </p>
          <Link
            href="/dashboard"
            className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-accent-purple px-8 py-4 text-base font-semibold text-white shadow-[0_0_28px_rgba(147,51,234,0.45)] transition-all duration-300 hover:bg-accent-purple-dim hover:shadow-[0_0_40px_rgba(147,51,234,0.6)]"
          >
            Browse Live Lobbies →
          </Link>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────── */}
      <footer className="border-t border-white/[0.06]">
        <div className="container mx-auto px-6 py-16">
          {/* Top: brand + links */}
          <div className="grid grid-cols-2 gap-12 md:grid-cols-4">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <Link href="/" className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-accent-purple to-accent-cyan shadow-[0_0_16px_rgba(147,51,234,0.3)]">
                  <Layers className="h-4 w-4 text-white" />
                </div>
                <span className="text-base font-bold text-foreground">Socio</span>
              </Link>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
                The peer-to-peer exchange hub for modern content creators.
              </p>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([section, links]) => (
              <div key={section}>
                <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted">
                  {section}
                </h4>
                <ul className="flex flex-col gap-2.5">
                  {links.map((link) => (
                    <li key={link}>
                      <Link
                        href="#"
                        className="text-sm text-muted/70 transition-colors duration-200 hover:text-foreground"
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
          <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row">
            <p className="text-xs text-muted/60">
              © 2026 Socio. Built for the creator community.
            </p>
            <p className="text-xs text-muted/40">
              Made with care · No VC funding · Just vibes
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
