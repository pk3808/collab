"use client";
import { Button } from "@/shared/ui/Button";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-20">
      {/* Background Orbitals */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-20">
        <div className="h-[800px] w-[800px] animate-[spin_60s_linear_infinite] rounded-full border border-zinc-800" />
        <div className="absolute h-[600px] w-[600px] animate-[spin_40s_linear_infinite_reverse] rounded-full border border-zinc-800" />
        <div className="absolute h-[400px] w-[400px] animate-[spin_20s_linear_infinite] rounded-full border border-zinc-800" />
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-sm font-medium text-purple-400">
            ● 142 Lobbies Active Now
          </span>
          <h1 className="mt-8 text-6xl font-bold tracking-tighter sm:text-8xl">
            Peer-to-Peer <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-purple-400 to-cyan-400">
              Creator Growth
            </span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-xl text-zinc-400">
            The ultimate exchange hub. Swap reviews, follows, and feedback with creators in your niche. Build your karma, grow your reach.
          </p>
          <div className="mt-12 flex items-center justify-center gap-6">
            <Button size="lg">Start Exchanging</Button>
            <Button variant="outline" size="lg">View Live Lobbies</Button>
          </div>
        </motion.div>
      </div>

      {/* Floating Avatars (The Vibe) */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute z-10 h-16 w-16 overflow-hidden rounded-2xl border-2 border-white/10 glass shadow-2xl"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            x: Math.sin(i) * 300,
            y: Math.cos(i) * 300,
          }}
          transition={{ 
            delay: i * 0.1, 
            duration: 1,
            y: {
              repeat: Infinity,
              duration: 2 + i,
              repeatType: "reverse",
              ease: "easeInOut"
            }
          }}
        >
          <img 
            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} 
            alt="Creator" 
            className="h-full w-full object-cover"
          />
        </motion.div>
      ))}
    </section>
  );
};
