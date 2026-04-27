import { cn } from "@/shared/lib/utils";
import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  glass?: boolean;
}

export const Card = ({ className, glass = true, ...props }: CardProps) => {
  return (
    <div
      className={cn(
        "rounded-[2.5rem] p-8 transition-all duration-500",
        glass ? "glass-morphism hover:bg-white/5" : "bg-zinc-900/50",
        className
      )}
      {...props}
    />
  );
};
