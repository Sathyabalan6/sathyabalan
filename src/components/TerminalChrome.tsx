"use client";

import React, { useEffect } from "react";
import { Terminal, GitBranch, Cpu, Shield, Sparkles } from "lucide-react";

export type TabId = "overview" | "client-work" | "open-source" | "systems" | "skills-edu" | "contact";

interface TerminalChromeProps {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
  onRunCommand?: (cmd: string) => void;
}

export const TerminalChrome: React.FC<TerminalChromeProps> = ({
  activeTab,
  onTabChange,
}) => {
  const tabs: { id: TabId; num: number; label: string; icon: string }[] = [
    { id: "overview", num: 1, label: "overview.sh", icon: "λ" },
    { id: "client-work", num: 2, label: "spacecraft.md", icon: "🌐" },
    { id: "open-source", num: 3, label: "git-prs.diff", icon: "⎇" },
    { id: "systems", num: 4, label: "agent-systems.rs", icon: "⚙" },
    { id: "skills-edu", num: 5, label: "specs-edu.env", icon: "◈" },
    { id: "contact", num: 6, label: "connect.sh", icon: "✉" },
  ];

  // Keyboard shortcut listener: Alt+1..6
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey && e.key >= "1" && e.key <= "6") {
        const index = parseInt(e.key, 10) - 1;
        if (tabs[index]) {
          onTabChange(tabs[index].id);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onTabChange]);

  return (
    <header className="rounded-t-2xl bg-[#16161e] border-b border-[#292e42] select-none">
      {/* Top Titlebar with macOS Traffic Lights */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#1f2335]">
        {/* Window Controls */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 group cursor-pointer">
            <span className="w-3 h-3 rounded-full bg-[#f7768e] flex items-center justify-center text-[8px] text-zinc-900 opacity-90 group-hover:opacity-100 shadow-sm">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity font-bold">×</span>
            </span>
            <span className="w-3 h-3 rounded-full bg-[#e0af68] flex items-center justify-center text-[8px] text-zinc-900 opacity-90 group-hover:opacity-100 shadow-sm">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity font-bold">–</span>
            </span>
            <span className="w-3 h-3 rounded-full bg-[#73daca] flex items-center justify-center text-[8px] text-zinc-900 opacity-90 group-hover:opacity-100 shadow-sm">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity font-bold">+</span>
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 ml-3 px-2 py-0.5 rounded text-[11px] font-mono text-[#565f89] bg-[#1a1b26] border border-[#24283b]">
            <Terminal className="w-3 h-3 text-[#7aa2f7]" />
            <span>zsh 5.9</span>
          </div>
        </div>

        {/* Center Path / Title */}
        <div className="text-xs font-mono text-[#9aa5ce] flex items-center gap-1.5 truncate max-w-[280px] sm:max-w-md">
          <span className="text-[#bb9af7] font-semibold">sathyabalan@ceg</span>
          <span className="text-[#565f89]">:</span>
          <span className="text-[#7dcfff]">~/portfolio</span>
          <span className="hidden md:inline-flex items-center gap-1 text-[11px] text-[#73daca] ml-2">
            <GitBranch className="w-3 h-3" />
            <span>(main)</span>
          </span>
        </div>

        {/* Right Status Badges */}
        <div className="flex items-center gap-2 text-[11px] font-mono">
          <div className="hidden lg:flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#1f2335] text-[#73daca] border border-[#292e42]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#73daca] animate-pulse" />
            <span>Open to Roles</span>
          </div>
          <span className="hidden sm:inline text-[#565f89]">utf-8</span>
        </div>
      </div>

      {/* Tab Bar (tmux / zsh session style) */}
      <nav aria-label="Terminal Session Tabs" className="flex items-center gap-1 px-2 pt-2 overflow-x-auto scrollbar-none">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-t-lg text-xs font-mono transition-all border-t border-x cursor-pointer ${
                isActive
                  ? "bg-[#1a1b26] text-[#7dcfff] border-[#3b4261] font-medium shadow-sm"
                  : "bg-transparent text-[#565f89] hover:text-[#9aa5ce] hover:bg-[#1a1b26]/50 border-transparent"
              }`}
            >
              <span className="text-[10px] text-[#bb9af7] font-bold">
                {tab.num}
              </span>
              <span>{tab.label}</span>
              <span className="hidden sm:inline text-[9px] text-[#565f89] ml-0.5 font-mono">
                [Alt+{tab.num}]
              </span>
            </button>
          );
        })}
      </nav>
    </header>
  );
};
