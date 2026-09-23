import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "glow";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const sizeClasses = {
      sm: "px-3 py-1.5 text-xs rounded-lg gap-1.5",
      md: "px-4 py-2 text-sm rounded-xl gap-2",
      lg: "px-6 py-3 text-base rounded-xl gap-2.5",
    };

    const variantClasses = {
      primary:
        "bg-zinc-100 text-zinc-950 hover:bg-white font-medium shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] active:scale-[0.98]",
      secondary:
        "bg-zinc-900 text-zinc-100 hover:bg-zinc-800 border border-zinc-800 font-medium active:scale-[0.98]",
      outline:
        "bg-transparent text-zinc-300 hover:text-white border border-zinc-800 hover:border-zinc-700 active:scale-[0.98]",
      ghost:
        "bg-transparent text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/60",
      glow: "bg-gradient-to-r from-rose-600 to-rose-500 text-white font-medium shadow-[0_0_25px_-5px_rgba(244,63,94,0.6)] hover:brightness-110 active:scale-[0.98]",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center transition-all duration-200 cursor-pointer select-none",
          sizeClasses[size],
          variantClasses[variant],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
