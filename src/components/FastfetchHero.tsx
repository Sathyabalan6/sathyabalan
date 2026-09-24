"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { TabId } from "./TerminalChrome";
import { ExternalLink, GitPullRequest, ArrowRight, Sparkles, Terminal } from "lucide-react";

interface FastfetchHeroProps {
  onTabChange: (tab: TabId) => void;
}

export const FastfetchHero: React.FC<FastfetchHeroProps> = ({ onTabChange }) => {
  const { personal } = portfolioData;

  const asciiArt = `
   ███████╗██████╗ 
   ██╔════╝██╔══██╗
   ███████╗██████╔╝
   ╚════██║██╔══██╗
   ███████║██████╔╝
   ╚══════╝╚═════╝ 
  [SATHYA BALAN K]
`;

  return (
    <div className="p-4 sm:p-8 font-mono">
      {/* Fastfetch / Neofetch Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
        {/* Left: ASCII Art Monogram */}
        <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-[#7dcfff] select-none bg-[#13141c] p-5 rounded-xl border border-[#292e42]/60">
          <pre className="text-xs sm:text-sm font-bold leading-tight text-[#bb9af7] mb-3">
            {asciiArt}
          </pre>
          <div className="text-[11px] text-[#565f89] space-y-0.5">
            <div>ARCH: x86_64-linux</div>
            <div>STATUS: <span className="text-[#73daca]">AVAILABLE FOR ROLES</span></div>
            <div>LOCATION: Tamil Nadu, India</div>
          </div>

          {/* ANSI Color Swatches */}
          <div className="flex gap-1.5 mt-4 pt-3 border-t border-[#1f2335] w-full justify-center sm:justify-start">
            <span className="w-3.5 h-3.5 rounded bg-[#1a1b26] border border-[#292e42]" />
            <span className="w-3.5 h-3.5 rounded bg-[#f7768e]" />
            <span className="w-3.5 h-3.5 rounded bg-[#73daca]" />
            <span className="w-3.5 h-3.5 rounded bg-[#e0af68]" />
            <span className="w-3.5 h-3.5 rounded bg-[#7aa2f7]" />
            <span className="w-3.5 h-3.5 rounded bg-[#bb9af7]" />
            <span className="w-3.5 h-3.5 rounded bg-[#7dcfff]" />
            <span className="w-3.5 h-3.5 rounded bg-[#c0caf5]" />
          </div>
        </div>

        {/* Right: Formatted System Specifications */}
        <div className="lg:col-span-8 space-y-2 text-xs sm:text-sm">
          <div className="pb-3 border-b border-[#292e42]">
            <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              <span className="text-[#bb9af7]">{personal.username}</span>
              <span className="text-[#565f89]">@</span>
              <span className="text-[#7dcfff]">ceg-anna-univ</span>
            </h1>
            <p className="text-xs text-[#9aa5ce] mt-1">
              Full-Stack &amp; AI Systems Engineer • React, FastAPI, MCP &amp; Deep RL
            </p>
          </div>

          <div className="space-y-1.5 pt-2">
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
              <span className="text-[#7aa2f7] font-semibold w-36 shrink-0">OS:</span>
              <span className="text-[#c0caf5]">Linux 6.8.0 (Custom Development Environment)</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
              <span className="text-[#7aa2f7] font-semibold w-36 shrink-0">Host:</span>
              <span className="text-[#c0caf5]">College of Engineering, Guindy (Anna University)</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
              <span className="text-[#7aa2f7] font-semibold w-36 shrink-0">Degree:</span>
              <span className="text-[#73daca] font-medium">Master of Computer Applications (MCA 2024–2026, CGPA: 7.0)</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
              <span className="text-[#7aa2f7] font-semibold w-36 shrink-0">Kernel:</span>
              <span className="text-[#c0caf5]">Full-Stack Architecture, Model Context Protocol (MCP), Agent Skills</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
              <span className="text-[#7aa2f7] font-semibold w-36 shrink-0">Client Production:</span>
              <button
                onClick={() => onTabChange("client-work")}
                className="text-[#7dcfff] hover:underline text-left cursor-pointer inline-flex items-center gap-1"
              >
                <span>Space Craft &amp; Tech Solution (500+ Projects Showcase)</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
              <span className="text-[#7aa2f7] font-semibold w-36 shrink-0">Open Source:</span>
              <button
                onClick={() => onTabChange("open-source")}
                className="text-[#bb9af7] hover:underline text-left cursor-pointer inline-flex items-center gap-1"
              >
                <span>Merged PR #48 on mentr (+465 lines) &amp; PR #398 on better-chatbot</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
              <span className="text-[#7aa2f7] font-semibold w-36 shrink-0">Packages:</span>
              <span className="text-[#c0caf5]">26 (git repos), 5 (deterministic agent skills suite), 1 (custom MCP server)</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
              <span className="text-[#7aa2f7] font-semibold w-36 shrink-0">Certifications:</span>
              <span className="text-[#e0af68]">Microsoft Azure Fundamentals (AZ-900), NASBA PowerShell</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Launch Panes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-[#292e42]">
        <div
          onClick={() => onTabChange("client-work")}
          className="p-4 rounded-xl bg-[#1f2335]/70 hover:bg-[#24283b] border border-[#292e42] hover:border-[#7dcfff]/60 transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between text-xs text-[#7dcfff] font-bold mb-1">
            <span>[01] CLIENT PRODUCTION</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
          <h3 className="text-sm font-semibold text-white mb-1">Space Craft &amp; Tech Solution</h3>
          <p className="text-xs text-[#9aa5ce]">
            Commercial interior portfolio with dynamic sector filtering and responsive layout.
          </p>
        </div>

        <div
          onClick={() => onTabChange("open-source")}
          className="p-4 rounded-xl bg-[#1f2335]/70 hover:bg-[#24283b] border border-[#292e42] hover:border-[#bb9af7]/60 transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between text-xs text-[#bb9af7] font-bold mb-1">
            <span>[02] OPEN SOURCE PRs</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
          <h3 className="text-sm font-semibold text-white mb-1">Mentr &amp; Better-Chatbot</h3>
          <p className="text-xs text-[#9aa5ce]">
            App Router skeletons, error boundaries, and internationalization across 25+ files.
          </p>
        </div>

        <div
          onClick={() => onTabChange("systems")}
          className="p-4 rounded-xl bg-[#1f2335]/70 hover:bg-[#24283b] border border-[#292e42] hover:border-[#73daca]/60 transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between text-xs text-[#73daca] font-bold mb-1">
            <span>[03] AGENT SYSTEMS &amp; MCP</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
          <h3 className="text-sm font-semibold text-white mb-1">Production Agent Skills</h3>
          <p className="text-xs text-[#9aa5ce]">
            Deterministic AI skills suite, Model Context Protocol server, and laptop remote.
          </p>
        </div>
      </div>
    </div>
  );
};
