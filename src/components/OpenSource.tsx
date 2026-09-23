"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { Badge } from "./ui/badge";
import { GitPullRequest, GitMerge, ExternalLink, CheckCircle2, Terminal, Code, Sparkles } from "lucide-react";

export const OpenSource = () => {
  const { openSourceContributions } = portfolioData;

  return (
    <section id="opensource" className="py-24 px-4 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-mono text-purple-400 uppercase tracking-widest mb-2">
            <GitPullRequest className="w-3.5 h-3.5" />
            <span>Open Source Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Production Pull Requests
          </h2>
        </div>
        <p className="text-sm text-zinc-400 max-w-md">
          Direct contributions to modern open-source web ecosystems and AI agent workspaces.
        </p>
      </div>

      {/* Grid of Contributions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {openSourceContributions.map((pr) => {
          const isMerged = pr.status === "merged";

          return (
            <div
              key={pr.prNumber}
              className="relative rounded-2xl bg-zinc-950/80 border border-zinc-800/90 p-6 sm:p-7 flex flex-col justify-between hover:border-zinc-700 transition-all duration-300 group shadow-xl"
            >
              {/* Card Header */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    {isMerged ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-purple-950/50 text-purple-300 border border-purple-500/30">
                        <GitMerge className="w-3.5 h-3.5" />
                        <span>Merged</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-emerald-950/50 text-emerald-300 border border-emerald-500/30">
                        <GitPullRequest className="w-3.5 h-3.5" />
                        <span>Open / Active</span>
                      </span>
                    )}
                    <span className="text-xs font-mono text-zinc-400">
                      PR #{pr.prNumber}
                    </span>
                  </div>

                  <span className="text-xs font-mono text-zinc-500">{pr.date}</span>
                </div>

                {/* Repo Name */}
                <a
                  href={pr.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono text-rose-400 hover:underline mb-2"
                >
                  <span>{pr.repo}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                {/* PR Title */}
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-rose-100 transition-colors">
                  {pr.title}
                </h3>

                {/* Description */}
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">
                  {pr.description}
                </p>
              </div>

              {/* Card Footer: Metrics & Tech Stack */}
              <div>
                <div className="flex items-center justify-between py-3 border-t border-zinc-800/80 mb-4 text-xs font-mono">
                  <span className="text-zinc-500">Diff Impact</span>
                  <span className="text-emerald-400 font-medium">{pr.metrics}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {pr.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={pr.prUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-xs font-mono text-zinc-200 border border-zinc-700/60 transition-colors"
                  >
                    <span>View PR</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
