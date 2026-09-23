"use client";

import React from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolioData";
import { PerspectiveGrid } from "./ui/perspective-grid";
import { BorderBeam } from "./ui/border-beam";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ArrowDown, ExternalLink, GitPullRequest, Sparkles, Terminal, Code2, ShieldCheck } from "lucide-react";

export const Hero = () => {
  const { personal } = portfolioData;

  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      {/* Background Perspective Grid */}
      <PerspectiveGrid />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Top Announcement Pill */}
        <div className="mb-6 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs text-zinc-300 backdrop-blur-md shadow-lg">
          <Sparkles className="w-3.5 h-3.5 text-rose-400" />
          <span className="font-mono text-zinc-400">Master of Computer Applications</span>
          <span className="text-zinc-600">•</span>
          <span className="text-zinc-200 font-medium">CEG Anna University</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.08]">
          Full-Stack &amp;{" "}
          <span className="bg-gradient-to-r from-rose-400 via-rose-500 to-amber-300 bg-clip-text text-transparent glow-text">
            AI Systems
          </span>{" "}
          Engineer.
        </h1>

        {/* Subheading / Bio */}
        <p className="max-w-2xl text-base sm:text-lg text-zinc-400 mb-10 leading-relaxed font-normal">
          Hi, I&apos;m <span className="text-zinc-100 font-semibold">{personal.name}</span>. I design
          and engineer production web applications, autonomous agent workflows with the{" "}
          <span className="text-rose-400 font-mono text-sm">Model Context Protocol (MCP)</span>, and
          high-performance full-stack architectures.
        </p>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-16">
          <a href="#work">
            <Button variant="glow" size="lg">
              <span>View Client Project</span>
              <ExternalLink className="w-4 h-4 ml-1.5" />
            </Button>
          </a>
          <a href="#opensource">
            <Button variant="secondary" size="lg">
              <GitPullRequest className="w-4 h-4 mr-1 text-purple-400" />
              <span>Open Source PRs</span>
            </Button>
          </a>
          <a
            href={personal.social.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="lg">
              <Terminal className="w-4 h-4 mr-1 text-zinc-400" />
              <span>GitHub @{personal.username}</span>
            </Button>
          </a>
        </div>

        {/* Metrics & Highlights Grid with BorderBeam */}
        <div className="relative w-full max-w-4xl p-1 rounded-2xl bg-zinc-950/70 border border-zinc-800/80 backdrop-blur-xl shadow-2xl overflow-hidden">
          <BorderBeam size={280} duration={14} colorFrom="#f43f5e" colorTo="#38bdf8" />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 sm:p-6 text-left">
            <div className="p-3 rounded-xl bg-zinc-900/40 border border-zinc-800/60">
              <div className="text-2xl sm:text-3xl font-bold font-mono text-white mb-1">
                500+
              </div>
              <div className="text-xs text-zinc-400">
                Projects Featured on Client Website
              </div>
            </div>

            <div className="p-3 rounded-xl bg-zinc-900/40 border border-zinc-800/60">
              <div className="text-2xl sm:text-3xl font-bold font-mono text-purple-400 mb-1">
                PR #48
              </div>
              <div className="text-xs text-zinc-400">
                Merged Next.js App Router Contribution
              </div>
            </div>

            <div className="p-3 rounded-xl bg-zinc-900/40 border border-zinc-800/60">
              <div className="text-2xl sm:text-3xl font-bold font-mono text-rose-400 mb-1">
                26+
              </div>
              <div className="text-xs text-zinc-400">
                Public Repositories &amp; Agent Tooling
              </div>
            </div>

            <div className="p-3 rounded-xl bg-zinc-900/40 border border-zinc-800/60">
              <div className="text-2xl sm:text-3xl font-bold font-mono text-emerald-400 mb-1">
                AZ-900
              </div>
              <div className="text-xs text-zinc-400">
                Microsoft Azure Cloud Certified
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
