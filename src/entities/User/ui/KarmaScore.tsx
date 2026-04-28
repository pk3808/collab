"use client";
import { Card } from "@/shared/ui/Card";
import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

interface KarmaScoreProps {
  score: number;
  rank: string;
}

export const KarmaScore = ({ score, rank }: KarmaScoreProps) => {
  return (
    <Card className="flex flex-col items-center text-center p-6 bg-gradient-to-b from-purple-100/50 to-transparent dark:from-purple-900/20 dark:to-transparent">
      <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-white/80 dark:bg-black/40 border-4 border-accent-purple/30 shadow-[0_0_30px_rgba(147,51,234,0.1)] dark:shadow-[0_0_30px_rgba(147,51,234,0.2)]">
        <motion.div 
          className="absolute inset-0 rounded-full border-4 border-accent-purple border-t-transparent"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        <div className="flex flex-col items-center">
          <span className="text-3xl font-bold text-foreground">{score}</span>
          <span className="text-xs text-zinc-500 dark:text-zinc-400">Karma</span>
        </div>
      </div>
      
      <div className="mt-6 w-full rounded-xl bg-black/5 dark:bg-white/5 p-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-zinc-600 dark:text-zinc-400">Current Rank</span>
          <div className="flex items-center gap-1 text-sm font-semibold text-yellow-600 dark:text-yellow-400">
            <Trophy className="h-4 w-4" />
            {rank}
          </div>
        </div>
      </div>
    </Card>
  );
};
