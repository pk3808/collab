import { cn } from "@/shared/lib/utils";
import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  glass?: boolean;
}

export const Card = ({ className, glass = true, ...props }: CardProps) => {
  return (
    <div
      className={cn(
        "rounded-[1.5rem] p-6 transition-all duration-300 border",
        glass ? "bg-surface/50 backdrop-blur-md border-border" : "bg-surface border-border shadow-sm",
        className
      )}
      {...props}
    />
  );
};
