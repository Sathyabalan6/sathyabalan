"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import {
  Code,
  Layout,
  Server,
  Database,
  Cloud,
  Cpu,
  Layers,
} from "lucide-react";

export const SkillsMatrix = () => {
  const { skills } = portfolioData;

  const categories = [
    {
      name: "Programming Languages",
      icon: Code,
      items: skills.languages,
      color: "text-rose-400",
      borderColor: "group-hover:border-rose-500/40",
    },
    {
      name: "Frontend Engineering",
      icon: Layout,
      items: skills.frontend,
      color: "text-sky-400",
      borderColor: "group-hover:border-sky-500/40",
    },
    {
      name: "Backend & Systems",
      icon: Server,
      items: skills.backend,
      color: "text-emerald-400",
      borderColor: "group-hover:border-emerald-500/40",
    },
    {
      name: "Databases & Storage",
      icon: Database,
      items: skills.databases,
      color: "text-amber-400",
      borderColor: "group-hover:border-amber-500/40",
    },
    {
      name: "Cloud & Infrastructure",
      icon: Cloud,
      items: skills.cloudDevOps,
      color: "text-indigo-400",
      borderColor: "group-hover:border-indigo-500/40",
    },
    {
      name: "AI & Autonomous Protocols",
      icon: Cpu,
      items: skills.aiAndProtocols,
      color: "text-purple-400",
      borderColor: "group-hover:border-purple-500/40",
    },
  ];

  return (
    <section id="skills" className="py-24 px-4 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-mono text-rose-400 uppercase tracking-widest mb-2">
            <Layers className="w-3.5 h-3.5" />
            <span>Architecture &amp; Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical Proficiencies
          </h2>
        </div>
        <p className="text-sm text-zinc-400 max-w-md">
          Technologies and tools battle-tested in academic, open-source, and commercial projects.
        </p>
      </div>

      {/* Grid of Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories.map((cat, idx) => {
          const Icon = cat.icon;

          return (
            <div
              key={idx}
              className={`group rounded-2xl bg-zinc-950/70 border border-zinc-800/80 p-6 flex flex-col justify-between transition-all duration-300 hover:bg-zinc-900/40 ${cat.borderColor}`}
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 ${cat.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-zinc-100">
                    {cat.name}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-zinc-900/90 text-zinc-300 border border-zinc-800/80 group-hover:border-zinc-700 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
