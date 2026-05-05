"use client";
import { Button } from "@/shared/ui/Button";
import { ThemeToggle } from "@/shared/ui/ThemeToggle";
import { motion, useScroll, useTransform } from "framer-motion";
import { Layers } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Lobbies",           href: "/dashboard" },
  { label: "How it Works",      href: "#how-it-works" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-[#fffef8]/80 dark:bg-[#1e1c18]/80 backdrop-blur-md border-b border-stone-200 dark:border-stone-800 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-10">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-foreground"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-stone-900 dark:bg-stone-50 shadow-sm">
              <Layers className="h-4 w-4 text-white dark:text-stone-900" />
            </div>
            <span className="font-extrabold text-stone-900 dark:text-stone-50">
              Socio
            </span>
          </Link>

          {/* Nav */}
          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted transition-colors duration-200 hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link href="#" className="hidden sm:block">
            <Button variant="ghost" size="sm" className="text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white font-semibold">
              Log In
            </Button>
          </Link>
        </div>
      </div>
    </motion.header>
  );
};
