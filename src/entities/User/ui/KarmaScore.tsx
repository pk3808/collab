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
    <Card className="flex flex-col items-center text-center p-6 border-stone-200 dark:border-stone-800 bg-surface">
      <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-surface-raised border-[3px] border-stone-200 dark:border-stone-800">
        <motion.div 
          className="absolute inset-0 rounded-full border-[3px] border-stone-900 dark:border-stone-50 border-t-transparent"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        <div className="flex flex-col items-center">
          <span className="text-3xl font-bold text-foreground">{score}</span>
          <span className="text-xs font-serif italic text-stone-500 dark:text-stone-400">Karma</span>
        </div>
      </div>
      
      <div className="mt-6 w-full rounded-xl bg-surface-raised p-4 border border-stone-200 dark:border-stone-800">
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
