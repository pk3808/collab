"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/Button";
import { CheckCircle } from "lucide-react";

interface TimerProps {
  initialSeconds: number;
}

export const Timer = ({ initialSeconds }: TimerProps) => {
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);

  useEffect(() => {
    if (secondsLeft <= 0) return;
    const interval = setInterval(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [secondsLeft]);

  const isFinished = secondsLeft === 0;

  return (
    <div className="flex flex-col items-center gap-4 border-t border-white/5 bg-black/80 p-6 backdrop-blur-xl">
      <div className="flex items-center gap-4">
        <div className={cn(
          "flex h-12 w-24 items-center justify-center rounded-xl border-2 font-mono text-2xl font-bold transition-colors duration-500",
          isFinished 
            ? "border-accent-cyan text-accent-cyan shadow-[0_0_20px_rgba(6,182,212,0.5)]" 
            : "border-white/20 text-white"
        )}>
          {Math.floor(secondsLeft / 60)}:{(secondsLeft % 60).toString().padStart(2, "0")}
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-zinc-300">Minimum Interaction Time</span>
          <span className="text-xs text-zinc-500">Wait for the timer to confirm exchange.</span>
        </div>
      </div>

      <Button 
        size="lg" 
        disabled={!isFinished}
        className={cn(
          "w-full max-w-md gap-2 text-lg",
          !isFinished && "bg-zinc-800 text-zinc-500 shadow-none border-0"
        )}
      >
        <CheckCircle className="h-5 w-5" />
        {isFinished ? "Confirm Mutual Success" : "Waiting..."}
      </Button>
    </div>
  );
};
