"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { Terminal, Bot, Smartphone, Cpu, Sparkles, ExternalLink, Copy, Check, ArrowUpRight } from "lucide-react";

export const TerminalSystems: React.FC = () => {
  const { agentToolingAndAI, featuredProjects } = portfolioData;
  const agentSkills = agentToolingAndAI.find((p) => p.name === "production-agent-skills");
  const mcpServer = agentToolingAndAI.find((p) => p.name === "mcp_server");
  const deepRL = agentToolingAndAI.find((p) => p.name === "deeprl_signal_control");
  const laptopRemote = featuredProjects.find((p) => p.id === "laptop-remote");
  const twitterAuto = featuredProjects.find((p) => p.id === "automated-twitter-poster");

  const [copied, setCopied] = useState(false);

  const copyInstall = () => {
    navigator.clipboard.writeText("curl -fsSL https://raw.githubusercontent.com/Sathyabalan6/production-agent-skills/main/install.sh | bash");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-4 sm:p-8 font-mono space-y-6">
      {/* Terminal Command Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-[#292e42] gap-2">
        <div className="flex items-center gap-2 text-xs text-[#7aa2f7]">
          <span className="text-[#565f89]">~/portfolio $</span>
          <span className="text-[#7dcfff] font-bold">systemctl status agent-stack</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#73daca] animate-pulse" />
          <span className="text-[11px] text-[#73daca]">ALL DAEMONS ACTIVE</span>
        </div>
      </div>

      {/* Grid of System Services */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Large Hero Card: Production Agent Skills */}
        {agentSkills && (
          <div className="lg:col-span-8 rounded-2xl bg-[#13141c] border border-[#292e42] p-6 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-[#1f2335]">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-[#bb9af7]/10 text-[#bb9af7] border border-[#bb9af7]/20">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-[#bb9af7] font-bold">AGENT SKILLS OPEN STANDARD</span>
                  <div className="text-[10px] text-[#565f89]">systemd unit: production-agent-skills.service</div>
                </div>
              </div>

              <a
                href={agentSkills.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#7dcfff] hover:underline flex items-center gap-1"
              >
                <span>Repo</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-2">
                {agentSkills.title}
              </h3>
              <p className="text-xs text-[#9aa5ce] leading-relaxed mb-4">
                {agentSkills.description}
              </p>
            </div>

            {/* Included Skills */}
            <div className="space-y-2">
              <span className="text-[11px] text-[#e0af68]">5 Hardened Deterministic Skills:</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {agentSkills.skillsIncluded?.map((s, idx) => (
                  <div
                    key={idx}
                    className="p-2 rounded-lg bg-[#1a1b26] border border-[#24283b] text-[#c0caf5] flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#73daca]" />
                    <span className="truncate">{s}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick 1-line install snippet */}
            <div className="p-2.5 rounded-xl bg-[#1a1b26] border border-[#24283b] flex items-center justify-between gap-2 text-xs">
              <code className="text-[#73daca] truncate text-[11px]">
                curl -fsSL https://raw.githubusercontent.com/Sathyabalan6/production-agent-skills/main/install.sh | bash
              </code>
              <button
                onClick={copyInstall}
                className="px-2.5 py-1 rounded bg-[#24283b] hover:bg-[#292e42] text-[#c0caf5] text-[10px] flex items-center gap-1 shrink-0 cursor-pointer"
              >
                {copied ? <Check className="w-3 h-3 text-[#73daca]" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? "Copied" : "Copy"}</span>
              </button>
            </div>
          </div>
        )}

        {/* Laptop Remote */}
        {laptopRemote && (
          <div className="lg:col-span-4 rounded-2xl bg-[#13141c] border border-[#292e42] p-5 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between pb-2 border-b border-[#1f2335]">
                <div className="flex items-center gap-1.5 text-xs text-[#7dcfff]">
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>laptop-remote.service</span>
                </div>
                <span className="text-[10px] text-[#73daca] bg-[#73daca]/10 px-1.5 py-0.5 rounded">
                  PORT 5000
                </span>
              </div>

              <h4 className="text-base font-bold text-white mt-3 mb-1">
                {laptopRemote.title}
              </h4>
              <p className="text-xs text-[#9aa5ce] leading-relaxed mb-3">
                {laptopRemote.description}
              </p>
            </div>

            <div className="pt-3 border-t border-[#1f2335] flex items-center justify-between">
              <span className="text-[10px] text-[#565f89]">Python • SocketIO • PWA</span>
              <a
                href={laptopRemote.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#7dcfff] hover:underline flex items-center gap-1"
              >
                <span>Explore</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        )}

        {/* MCP Server */}
        {mcpServer && (
          <div className="lg:col-span-4 rounded-2xl bg-[#13141c] border border-[#292e42] p-5 flex flex-col justify-between space-y-3">
            <div>
              <div className="text-[10px] text-[#bb9af7] mb-1">PROTOCOL DAEMON</div>
              <h4 className="text-sm font-bold text-white mb-1">{mcpServer.title}</h4>
              <p className="text-xs text-[#9aa5ce]">{mcpServer.description}</p>
            </div>

            <div className="pt-2 border-t border-[#1f2335] flex justify-between items-center text-xs">
              <span className="text-[10px] text-[#565f89]">MCP / JSON-RPC</span>
              <a href={mcpServer.repoUrl} target="_blank" rel="noopener noreferrer" className="text-[#bb9af7] hover:underline flex items-center gap-1">
                <span>View</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        )}

        {/* Deep RL */}
        {deepRL && (
          <div className="lg:col-span-4 rounded-2xl bg-[#13141c] border border-[#292e42] p-5 flex flex-col justify-between space-y-3">
            <div>
              <div className="text-[10px] text-[#73daca] mb-1">AI / REINFORCEMENT LEARNING</div>
              <h4 className="text-sm font-bold text-white mb-1">{deepRL.title}</h4>
              <p className="text-xs text-[#9aa5ce]">{deepRL.description}</p>
            </div>

            <div className="pt-2 border-t border-[#1f2335] flex justify-between items-center text-xs">
              <span className="text-[10px] text-[#565f89]">PyTorch • Q-Learning</span>
              <a href={deepRL.repoUrl} target="_blank" rel="noopener noreferrer" className="text-[#73daca] hover:underline flex items-center gap-1">
                <span>View</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        )}

        {/* Twitter Automation */}
        {twitterAuto && (
          <div className="lg:col-span-4 rounded-2xl bg-[#13141c] border border-[#292e42] p-5 flex flex-col justify-between space-y-3">
            <div>
              <div className="text-[10px] text-[#e0af68] mb-1">CRON WORKFLOW PIPELINE</div>
              <h4 className="text-sm font-bold text-white mb-1">{twitterAuto.title}</h4>
              <p className="text-xs text-[#9aa5ce]">{twitterAuto.description}</p>
            </div>

            <div className="pt-2 border-t border-[#1f2335] flex justify-between items-center text-xs">
              <span className="text-[10px] text-[#565f89]">n8n • Gemini API</span>
              <a href={twitterAuto.repoUrl} target="_blank" rel="noopener noreferrer" className="text-[#e0af68] hover:underline flex items-center gap-1">
                <span>View</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
