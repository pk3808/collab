"use client";
import { Header } from "@/widgets/Header/Header";
import { Card } from "@/shared/ui/Card";
import { Button } from "@/shared/ui/Button";
import { useState } from "react";
import { motion } from "framer-motion";
import { MonitorPlay, Sparkles, Dumbbell, Palette } from "lucide-react";
import { cn } from "@/shared/lib/utils";

const niches = [
  { id: "tech", label: "Tech", icon: MonitorPlay, color: "text-cyan-400", border: "border-cyan-400" },
  { id: "anime", label: "Anime", icon: Sparkles, color: "text-purple-400", border: "border-purple-400" },
  { id: "fitness", label: "Fitness", icon: Dumbbell, color: "text-green-400", border: "border-green-400" },
  { id: "design", label: "Design", icon: Palette, color: "text-pink-400", border: "border-pink-400" },
];

export default function CreateRoomPage() {
  const [selectedNiche, setSelectedNiche] = useState("tech");
  const [timer, setTimer] = useState(60);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="container mx-auto flex flex-1 items-center justify-center px-4 pt-24 pb-12">
        <Card className="w-full max-w-2xl p-8 glass-morphism">
          <h1 className="text-3xl font-bold text-foreground mb-2">Configure Lobby</h1>
          <p className="text-zinc-600 dark:text-zinc-400 mb-8">Set up your requirements to find the perfect collaboration.</p>

          <form className="flex flex-col gap-8">
            {/* Niche Selection */}
            <div className="flex flex-col gap-3">
              <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Select Niche</label>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {niches.map((niche) => {
                  const isSelected = selectedNiche === niche.id;
                  const Icon = niche.icon;
                  return (
                    <button
                      key={niche.id}
                      type="button"
                      onClick={() => setSelectedNiche(niche.id)}
                      className={cn(
                        "relative flex flex-col items-center gap-2 rounded-2xl border-2 p-4 transition-all duration-300",
                        isSelected 
                          ? `bg-black/5 dark:bg-white/10 ${niche.border} shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_rgba(255,255,255,0.1)]` 
                          : "border-black/5 dark:border-white/5 bg-white dark:bg-black/40 hover:bg-black/5 dark:hover:bg-white/5"
                      )}
                    >
                      <Icon className={cn("h-6 w-6", isSelected ? niche.color : "text-zinc-500")} />
                      <span className={cn("text-xs font-semibold", isSelected ? "text-foreground" : "text-zinc-500")}>
                        {niche.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Inputs */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="flex flex-col gap-3">
                <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">What are you offering?</label>
                <input 
                  type="text" 
                  placeholder="e.g., Code Review, UI Feedback" 
                  className="rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-black/50 px-4 py-3 text-sm text-foreground placeholder-zinc-500 focus:border-accent-purple focus:outline-none focus:ring-1 focus:ring-accent-purple"
                />
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">What do you need?</label>
                <input 
                  type="text" 
                  placeholder="e.g., GitHub Follow, YT Sub" 
                  className="rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-black/50 px-4 py-3 text-sm text-foreground placeholder-zinc-500 focus:border-accent-cyan focus:outline-none focus:ring-1 focus:ring-accent-cyan"
                />
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Primary Content Link (Whitelisted Only)</label>
              <input 
                type="url" 
                placeholder="https://github.com/..." 
                className="rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-black/50 px-4 py-3 text-sm text-foreground placeholder-zinc-500 focus:border-black/30 dark:focus:border-white/30 focus:outline-none"
              />
            </div>

            {/* Timer Slider */}
            <div className="flex flex-col gap-3 rounded-xl bg-black/5 dark:bg-zinc-900/50 p-4 border border-black/5 dark:border-white/5">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Interaction Timer</label>
                <span className={cn("text-sm font-bold", timer >= 60 ? "text-accent-cyan" : "text-zinc-500 dark:text-zinc-400")}>
                  {timer} seconds
                </span>
              </div>
              <input 
                type="range" 
                min="30" 
                max="120" 
                step="10"
                value={timer}
                onChange={(e) => setTimer(Number(e.target.value))}
                className="h-2 w-full appearance-none rounded-full bg-black/50 outline-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-accent-purple"
              />
              {timer >= 60 && (
                <motion.p 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xs text-accent-cyan mt-1"
                >
                  ✓ Spam Protection Active
                </motion.p>
              )}
            </div>

            <Button size="lg" className="mt-4 w-full text-lg">
              Launch Room
            </Button>
          </form>
        </Card>
      </main>
    </div>
  );
}
