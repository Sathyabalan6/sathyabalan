"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from "./icons";
import { Terminal, Shield, ArrowUpRight, CheckCircle2 } from "lucide-react";

export const TerminalContact: React.FC = () => {
  const { personal } = portfolioData;

  return (
    <div className="p-4 sm:p-8 font-mono space-y-6">
      {/* Terminal Command Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-[#292e42] gap-2">
        <div className="flex items-center gap-2 text-xs text-[#7aa2f7]">
          <span className="text-[#565f89]">~/portfolio $</span>
          <span className="text-[#7dcfff] font-bold">connect --protocol=ssh</span>
        </div>
        <div className="text-[11px] text-[#73daca] flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#73daca] animate-pulse" />
          <span>SOCKET READY</span>
        </div>
      </div>

      {/* Main Connection Box */}
      <div className="bg-[#13141c] p-6 sm:p-8 rounded-2xl border border-[#292e42] text-center max-w-2xl mx-auto space-y-6">
        <div>
          <span className="px-2.5 py-1 rounded text-xs bg-[#1a1b26] text-[#7dcfff] border border-[#292e42]">
            AUTHENTICATED DEVELOPER SESSION
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-3 mb-2">
            Let&apos;s Build Together.
          </h2>
          <p className="text-xs sm:text-sm text-[#9aa5ce] leading-relaxed">
            Interested in software engineering roles, autonomous agent projects (MCP), or full-stack architectures. Connect directly via GitHub or LinkedIn.
          </p>
        </div>

        {/* Connection Options */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a
            href={personal.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#24283b] hover:bg-[#292e42] text-white text-xs font-semibold border border-[#3b4261] transition-all shadow-md group"
          >
            <GithubIcon className="w-4 h-4 text-[#7dcfff]" />
            <span>GitHub @{personal.username}</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#565f89] group-hover:text-[#7dcfff] transition-colors" />
          </a>

          <a
            href={personal.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0a66c2] hover:bg-[#004182] text-white text-xs font-semibold transition-all shadow-[0_0_20px_-5px_rgba(10,102,194,0.4)]"
          >
            <LinkedinIcon className="w-4 h-4" />
            <span>LinkedIn Profile</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-white/70" />
          </a>

          <a
            href={personal.social.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1a1b26] hover:bg-[#24283b] text-[#c0caf5] border border-[#292e42] hover:border-[#e0af68] text-xs font-semibold transition-all"
          >
            <LeetCodeIcon className="w-4 h-4 text-[#e0af68]" />
            <span>LeetCode</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#565f89]" />
          </a>
        </div>

        {/* Status Box */}
        <div className="pt-4 border-t border-[#1f2335] text-[11px] text-[#565f89] flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>Session: tty1 • CEG Anna University</span>
          <span>Security: Verified GPG &amp; Privacy Sanitized</span>
        </div>
      </div>
    </div>
  );
};
