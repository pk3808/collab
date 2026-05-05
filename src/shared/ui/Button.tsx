import { cn } from "@/shared/lib/utils";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const variants = {
      primary: "bg-accent-purple text-white hover:bg-accent-purple-dim shadow-[0_0_15px_rgba(147,51,234,0.4)]",
      secondary: "bg-accent-cyan text-black hover:bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.4)]",
      outline: "border border-border bg-transparent text-foreground hover:bg-white/8",
      ghost: "bg-transparent text-foreground hover:bg-black/5 dark:hover:bg-white/5",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base font-medium",
      lg: "px-8 py-4 text-lg font-bold",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "rounded-2xl transition-all duration-300 active:scale-95 disabled:opacity-50",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
