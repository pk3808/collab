"use client";
import { Button } from "@/shared/ui/Button";
import { motion } from "framer-motion";
import { LayoutGrid } from "lucide-react";
import Link from "next/link";

export const Header = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 z-50 w-full border-b border-white/5 bg-black/50 backdrop-blur-xl"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tighter">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-purple">
            <LayoutGrid className="h-5 w-5 text-white" />
          </div>
          CreatorHub
        </Link>
        
        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/dashboard" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
            Lobbies
          </Link>
          <Link href="#" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
            Karma Leaderboard
          </Link>
          <Link href="#" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
            How it Works
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm">Log In</Button>
          <Button size="sm">Get Started</Button>
        </div>
      </div>
    </motion.header>
  );
};
