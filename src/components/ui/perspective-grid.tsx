"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface PerspectiveGridProps {
  className?: string;
}

export const PerspectiveGrid: React.FC<PerspectiveGridProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden select-none [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]",
        className
      )}
    >
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-rose-500/10 via-rose-900/5 to-transparent blur-3xl pointer-events-none" />
    </div>
  );
};
