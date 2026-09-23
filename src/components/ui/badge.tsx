import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "outline" | "glow" | "success" | "purple";
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = "default",
  children,
  ...props
}) => {
  const variants = {
    default: "bg-zinc-800/80 text-zinc-200 border-zinc-700/60",
    secondary: "bg-rose-500/10 text-rose-300 border-rose-500/20",
    outline: "bg-transparent text-zinc-400 border-zinc-800",
    glow: "bg-rose-950/40 text-rose-200 border-rose-500/40 shadow-[0_0_12px_-3px_rgba(244,63,94,0.4)]",
    success: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    purple: "bg-purple-500/10 text-purple-300 border-purple-500/20",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border font-mono tracking-tight transition-colors",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
