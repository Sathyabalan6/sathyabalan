"use client";

import React, { useState } from "react";
import { TerminalChrome, TabId } from "./TerminalChrome";
import { InteractiveCLI } from "./InteractiveCLI";
import { FastfetchHero } from "./FastfetchHero";
import { TerminalClientWork } from "./TerminalClientWork";
import { TerminalOpenSource } from "./TerminalOpenSource";
import { TerminalSystems } from "./TerminalSystems";
import { TerminalSkillsEdu } from "./TerminalSkillsEdu";
import { TerminalContact } from "./TerminalContact";
import { GitBranch, Terminal, Shield, Sparkles } from "lucide-react";

export const TerminalApp: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabId>("overview");

  return (
    <div className="w-full max-w-6xl mx-auto px-3 sm:px-6 py-6 sm:py-10">
      {/* Outer Terminal Window Container with Apple Craftsmanship */}
      <div className="rounded-2xl bg-[#1a1b26] border border-[#292e42] shadow-[0_25px_70px_-15px_rgba(0,0,0,0.85)] overflow-hidden transition-all duration-300">
        {/* Terminal Window Header & Session Tabs */}
        <TerminalChrome
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        {/* Interactive CLI Prompt with Quick Commands */}
        <InteractiveCLI
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        {/* Main Terminal Window Body */}
        <div className="min-h-[580px] bg-[#1a1b26] text-[#c0caf5]">
          {activeTab === "overview" && (
            <FastfetchHero onTabChange={setActiveTab} />
          )}

          {activeTab === "client-work" && (
            <TerminalClientWork />
          )}

          {activeTab === "open-source" && (
            <TerminalOpenSource />
          )}

          {activeTab === "systems" && (
            <TerminalSystems />
          )}

          {activeTab === "skills-edu" && (
            <TerminalSkillsEdu />
          )}

          {activeTab === "contact" && (
            <TerminalContact />
          )}
        </div>

        {/* Bottom Tmux / Vim-style Statusline */}
        <footer className="bg-[#13141c] border-t border-[#292e42] px-4 py-2 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[#565f89] select-none gap-1.5">
          <div className="flex items-center gap-2">
            <span className="px-1.5 py-0.5 rounded bg-[#7aa2f7] text-[#16161e] font-bold text-[10px]">
              NORMAL
            </span>
            <span className="flex items-center gap-1 text-[#73daca]">
              <GitBranch className="w-3 h-3" />
              <span>main*</span>
            </span>
            <span className="hidden md:inline text-[#565f89]">|</span>
            <span className="hidden md:inline text-[#9aa5ce]">
              tab: {activeTab}
            </span>
          </div>

          <div className="flex items-center gap-3 text-[10px]">
            <span className="hidden sm:inline text-[#565f89]">
              Hotkeys: <span className="text-[#bb9af7]">[Alt+1..6]</span>
            </span>
            <span className="text-[#7dcfff]">Sathya Balan K</span>
            <span className="text-[#565f89]">CEG Anna University</span>
          </div>
        </footer>
      </div>
    </div>
  );
};
