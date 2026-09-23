"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { BorderBeam } from "./ui/border-beam";
import { Badge } from "./ui/badge";
import {
  Bot,
  Terminal,
  Cpu,
  Smartphone,
  FolderSync,
  ExternalLink,
  Code2,
  Sparkles,
  Layers,
  ArrowUpRight,
} from "lucide-react";

export const ProjectsBento = () => {
  const { agentToolingAndAI, featuredProjects } = portfolioData;
  const agentSkills = agentToolingAndAI.find((p) => p.name === "production-agent-skills");
  const mcpServer = agentToolingAndAI.find((p) => p.name === "mcp_server");
  const deepRL = agentToolingAndAI.find((p) => p.name === "deeprl_signal_control");
  const laptopRemote = featuredProjects.find((p) => p.id === "laptop-remote");
  const fileSystem = featuredProjects.find((p) => p.id === "file-system");
  const sessionExport = featuredProjects.find((p) => p.id === "session-export");
  const twitterAuto = featuredProjects.find((p) => p.id === "automated-twitter-poster");

  return (
    <section id="systems" className="py-24 px-4 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-mono text-rose-400 uppercase tracking-widest mb-2">
            <Cpu className="w-3.5 h-3.5" />
            <span>Autonomous Agents &amp; Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            AI Tooling &amp; Systems Architecture
          </h2>
        </div>
        <p className="text-sm text-zinc-400 max-w-md">
          Open-standard agent skills, Model Context Protocol servers, and distributed systems.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-5">
        {/* Card 1: Production Agent Skills (Large Spanned Bento Hero) */}
        {agentSkills && (
          <div className="md:col-span-3 lg:col-span-8 relative rounded-3xl bg-zinc-950 border border-zinc-800 p-6 sm:p-8 flex flex-col justify-between overflow-hidden shadow-2xl group">
            <BorderBeam size={260} duration={12} colorFrom="#f43f5e" colorTo="#a855f7" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
                    <Bot className="w-5 h-5" />
                  </div>
                  <Badge variant="glow">Agent Skills Standard 2026</Badge>
                </div>

                <a
                  href={agentSkills.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-rose-100 transition-colors">
                {agentSkills.title}
              </h3>

              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                {agentSkills.description}
              </p>

              {/* Skills Included Matrix */}
              <div className="mb-6">
                <div className="text-xs font-mono text-zinc-400 mb-2.5">
                  Included Deterministic Agent Skills:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {agentSkills.skillsIncluded?.map((skill, idx) => (
                    <div
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-zinc-900/80 border border-zinc-800/80 text-xs font-mono text-zinc-300 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                      <span className="truncate">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-zinc-800/80">
              <div className="flex flex-wrap gap-1.5">
                {agentSkills.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-900 text-zinc-400 border border-zinc-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={agentSkills.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-rose-400 hover:underline flex items-center gap-1"
              >
                <span>View Suite</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        )}

        {/* Card 2: Laptop Remote (Col span 4) */}
        {laptopRemote && (
          <div className="md:col-span-3 lg:col-span-4 relative rounded-3xl bg-zinc-950 border border-zinc-800 p-6 sm:p-7 flex flex-col justify-between shadow-xl group hover:border-zinc-700 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                  <Smartphone className="w-5 h-5" />
                </div>
                <Badge variant="purple">Cross-Platform</Badge>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">
                {laptopRemote.title}
              </h3>

              <p className="text-purple-300 font-mono text-xs mb-3">
                {laptopRemote.tagline}
              </p>

              <p className="text-zinc-400 text-xs leading-relaxed mb-4">
                {laptopRemote.description}
              </p>
            </div>

            <div className="pt-4 border-t border-zinc-800/80">
              <div className="flex flex-wrap gap-1 mb-3">
                {laptopRemote.techStack.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-900 text-zinc-400 border border-zinc-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={laptopRemote.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-purple-400 hover:underline inline-flex items-center gap-1"
              >
                <span>Explore Code</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        )}

        {/* Card 3: Custom MCP Server (Col span 4) */}
        {mcpServer && (
          <div className="md:col-span-3 lg:col-span-4 relative rounded-3xl bg-zinc-950 border border-zinc-800 p-6 flex flex-col justify-between shadow-xl group hover:border-zinc-700 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <Terminal className="w-5 h-5" />
                </div>
                <Badge variant="outline">Protocol</Badge>
              </div>

              <h3 className="text-lg font-bold text-white mb-2">
                {mcpServer.title}
              </h3>

              <p className="text-zinc-400 text-xs leading-relaxed mb-4">
                {mcpServer.description}
              </p>
            </div>

            <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
              <span className="text-[11px] font-mono text-zinc-500">Python • MCP Protocol</span>
              <a
                href={mcpServer.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-amber-400 hover:underline inline-flex items-center gap-1"
              >
                <span>Repo</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        )}

        {/* Card 4: Deep RL Signal Control (Col span 4) */}
        {deepRL && (
          <div className="md:col-span-3 lg:col-span-4 relative rounded-3xl bg-zinc-950 border border-zinc-800 p-6 flex flex-col justify-between shadow-xl group hover:border-zinc-700 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Sparkles className="w-5 h-5" />
                </div>
                <Badge variant="success">Deep RL</Badge>
              </div>

              <h3 className="text-lg font-bold text-white mb-2">
                {deepRL.title}
              </h3>

              <p className="text-zinc-400 text-xs leading-relaxed mb-4">
                {deepRL.description}
              </p>
            </div>

            <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
              <span className="text-[11px] font-mono text-zinc-500">PyTorch • AI Simulation</span>
              <a
                href={deepRL.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-emerald-400 hover:underline inline-flex items-center gap-1"
              >
                <span>Repo</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        )}

        {/* Card 5: Twitter Automation / Gemini (Col span 4) */}
        {twitterAuto && (
          <div className="md:col-span-3 lg:col-span-4 relative rounded-3xl bg-zinc-950 border border-zinc-800 p-6 flex flex-col justify-between shadow-xl group hover:border-zinc-700 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-9 h-9 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                  <Bot className="w-5 h-5" />
                </div>
                <Badge variant="secondary">Gemini AI</Badge>
              </div>

              <h3 className="text-lg font-bold text-white mb-2">
                {twitterAuto.title}
              </h3>

              <p className="text-zinc-400 text-xs leading-relaxed mb-4">
                {twitterAuto.description}
              </p>
            </div>

            <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
              <span className="text-[11px] font-mono text-zinc-500">n8n • Gemini API</span>
              <a
                href={twitterAuto.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-sky-400 hover:underline inline-flex items-center gap-1"
              >
                <span>Repo</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
