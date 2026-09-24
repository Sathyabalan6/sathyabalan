import React from "react";
import { TerminalApp } from "@/components/TerminalApp";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#16161e] text-[#c0caf5] terminal-grid flex flex-col justify-center py-4 sm:py-8">
      {/* Background Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gradient-to-b from-[#7aa2f7]/10 via-[#bb9af7]/5 to-transparent blur-3xl pointer-events-none" />

      {/* Main Terminal Window Frame */}
      <div className="relative z-10 w-full">
        <TerminalApp />
      </div>
    </main>
  );
}
