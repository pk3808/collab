"use client";
import { Button } from "@/shared/ui/Button";
import { Card } from "@/shared/ui/Card";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

export default function SuccessPage() {
  const { width, height } = useWindowSize();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background overflow-hidden relative">
      <Confetti
        width={width}
        height={height}
        colors={["#9333ea", "#06b6d4", "#ffffff"]}
        recycle={false}
        numberOfPieces={500}
      />
      
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", bounce: 0.5, duration: 0.8 }}
        className="z-10 w-full max-w-md px-4"
      >
        <Card className="flex flex-col items-center text-center p-8 border-accent-cyan/30 shadow-[0_0_50px_rgba(6,182,212,0.2)]">
          <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-accent-cyan/20">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
            >
              <Check className="h-12 w-12 text-accent-cyan" />
            </motion.div>
          </div>

          <h1 className="mb-2 text-3xl font-bold text-white">Mutual Success!</h1>
          <p className="mb-8 text-zinc-400">You've successfully completed the exchange with TechMaster.</p>

          <div className="mb-8 w-full rounded-2xl bg-black/50 p-6 border border-white/5">
            <span className="text-sm font-medium text-zinc-400 uppercase tracking-widest">Karma Earned</span>
            <div className="mt-2 flex items-center justify-center gap-2">
              <span className="text-4xl font-bold text-accent-purple">+50</span>
              <span className="text-xl text-purple-400/50">KP</span>
            </div>
            <motion.div 
              className="mt-4 h-2 w-full overflow-hidden rounded-full bg-white/10"
            >
              <motion.div 
                className="h-full bg-gradient-to-r from-accent-purple to-accent-cyan"
                initial={{ width: "60%" }}
                animate={{ width: "75%" }}
                transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
              />
            </motion.div>
            <span className="mt-2 block text-xs text-zinc-500">250 points to Diamond Rank</span>
          </div>

          <Link href="/dashboard" className="w-full">
            <Button size="lg" className="w-full gap-2">
              Back to Lobby
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </Card>
      </motion.div>
    </div>
  );
}
