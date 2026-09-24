"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { GitPullRequest, GitMerge, ExternalLink, GitCommit, FileCode, Check } from "lucide-react";

export const TerminalOpenSource: React.FC = () => {
  const { openSourceContributions } = portfolioData;

  return (
    <div className="p-4 sm:p-8 font-mono space-y-6">
      {/* Terminal Command Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-[#292e42] gap-2">
        <div className="flex items-center gap-2 text-xs text-[#7aa2f7]">
          <span className="text-[#565f89]">~/portfolio $</span>
          <span className="text-[#7dcfff] font-bold">git log --stat -n 2</span>
        </div>
        <div className="text-[11px] text-[#565f89]">
          2 open-source repositories impacted
        </div>
      </div>

      {/* PR Cards Styled as Git Diffs */}
      <div className="space-y-6">
        {openSourceContributions.map((pr) => {
          const isMerged = pr.status === "merged";

          return (
            <div
              key={pr.prNumber}
              className="rounded-2xl bg-[#13141c] border border-[#292e42] p-5 sm:p-6 space-y-4 hover:border-[#3b4261] transition-all"
            >
              {/* Header Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#1f2335]">
                <div className="flex items-center gap-2.5">
                  <GitCommit className="w-4 h-4 text-[#bb9af7]" />
                  <a
                    href={pr.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#7dcfff] font-bold hover:underline"
                  >
                    {pr.repo}
                  </a>
                  <span className="text-xs text-[#565f89]">#{pr.prNumber}</span>
                </div>

                <div className="flex items-center gap-2">
                  {isMerged ? (
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#bb9af7]/10 text-[#bb9af7] border border-[#bb9af7]/30 flex items-center gap-1">
                      <GitMerge className="w-3 h-3" />
                      <span>MERGED</span>
                    </span>
                  ) : (
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#73daca]/10 text-[#73daca] border border-[#73daca]/30 flex items-center gap-1">
                      <GitPullRequest className="w-3 h-3" />
                      <span>OPEN / ACTIVE</span>
                    </span>
                  )}
                  <span className="text-[10px] text-[#565f89]">{pr.date}</span>
                </div>
              </div>

              {/* PR Title */}
              <div>
                <h3 className="text-sm sm:text-base font-bold text-white mb-2">
                  {pr.title}
                </h3>
                <p className="text-xs text-[#9aa5ce] leading-relaxed">
                  {pr.description}
                </p>
              </div>

              {/* Git Diff Metrics Box */}
              <div className="p-3 rounded-xl bg-[#1a1b26] border border-[#24283b] space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#565f89]">diffstat:</span>
                  <span className="text-[#73daca] font-bold">{pr.metrics}</span>
                </div>
                {/* Visual diff bar */}
                <div className="w-full h-1.5 rounded-full bg-[#16161e] overflow-hidden flex">
                  <div className="bg-[#73daca] h-full" style={{ width: "85%" }} />
                  <div className="bg-[#f7768e] h-full" style={{ width: "15%" }} />
                </div>
              </div>

              {/* Tech Stack & PR Link */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
                <div className="flex flex-wrap gap-1.5">
                  {pr.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[10px] bg-[#1a1b26] text-[#7aa2f7] border border-[#292e42]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={pr.prUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#24283b] hover:bg-[#292e42] text-xs text-[#c0caf5] border border-[#3b4261] transition-all self-start sm:self-auto"
                >
                  <span>Inspect PR on GitHub</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
