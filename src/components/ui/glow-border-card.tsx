"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface GlowBorderCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  width?: string;
  height?: string;
  borderRadius?: string;
  animationDuration?: number;
  glowColor?: string;
}

export const GlowBorderCard: React.FC<GlowBorderCardProps> = ({
  children,
  className,
  width = "100%",
  height = "auto",
  borderRadius = "1rem",
  glowColor = "rgba(244, 63, 94, 0.4)",
  style,
  ...props
}) => {
  return (
    <div
      className={cn(
        "relative rounded-2xl p-[1px] overflow-hidden group transition-all duration-300",
        className
      )}
      style={{
        width,
        height,
        borderRadius,
        ...style,
      }}
      {...props}
    >
      <div
        className="absolute inset-0 -z-10 rounded-[inherit] opacity-40 group-hover:opacity-100 transition-opacity duration-500 blur-sm"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${glowColor} 0%, transparent 70%)`,
        }}
      />
      <div className="relative z-10 w-full h-full rounded-[inherit] bg-zinc-950/90 border border-zinc-800/80 backdrop-blur-xl">
        {children}
      </div>
    </div>
  );
};
