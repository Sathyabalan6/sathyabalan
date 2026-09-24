"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { ExternalLink, Globe, CheckCircle2, ArrowRight } from "lucide-react";

export const TerminalClientWork: React.FC = () => {
  const project = portfolioData.freelanceAndClientWork[0];
  const [activeSector, setActiveSector] = useState("all");

  const sectors = [
    { id: "all", label: "all" },
    { id: "corporate", label: "corporate" },
    { id: "industrial", label: "industrial" },
    { id: "hospitality", label: "hospitality" },
    { id: "retail", label: "retail" },
  ];

  const showcaseItems = [
    {
      title: "Tech Innovation Hub",
      cat: "Corporate",
      loc: "Ambattur, Chennai — 45,000 sq.ft.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=80",
    },
    {
      title: "Precision Clean Room",
      cat: "Industrial",
      loc: "Sriperumbudur, Tamil Nadu",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80",
    },
    {
      title: "Urban Brew Cafe",
      cat: "Hospitality",
      loc: "Anna Nagar, Chennai",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop&q=80",
    },
    {
      title: "Flagship Retail Store",
      cat: "Retail",
      loc: "T. Nagar, Chennai — 8,000 sq.ft.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=80",
    },
  ];

  const filtered =
    activeSector === "all"
      ? showcaseItems
      : showcaseItems.filter((item) => item.cat.toLowerCase() === activeSector);

  return (
    <div className="p-4 sm:p-8 font-mono space-y-6">
      {/* Terminal Command Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-[#292e42] gap-2">
        <div className="flex items-center gap-2 text-xs text-[#7aa2f7]">
          <span className="text-[#565f89]">~/portfolio $</span>
          <span className="text-[#7dcfff] font-bold">cat spacecraft.md</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded text-[10px] bg-[#73daca]/10 text-[#73daca] border border-[#73daca]/30">
            HTTP 200 OK • PRODUCTION
          </span>
        </div>
      </div>

      {/* Main Info Box */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-[#13141c] p-5 sm:p-6 rounded-2xl border border-[#292e42]">
        <div className="lg:col-span-7 space-y-4">
          <div>
            <div className="text-xs text-[#7dcfff] mb-1">
              [COMMERCIAL ARCHITECTURE &amp; INTERIORS]
            </div>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
            <div className="text-xs text-[#bb9af7] mt-0.5">
              Client: {project.client} • Role: {project.role}
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#9aa5ce] leading-relaxed">
            {project.description}
          </p>

          <div className="space-y-2">
            <div className="text-xs text-[#e0af68] font-semibold">Key Deliverables:</div>
            {project.highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-[#c0caf5]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#73daca] shrink-0 mt-0.5" />
                <span>{h}</span>
              </div>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="pt-2 flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded text-[10px] bg-[#1a1b26] text-[#7dcfff] border border-[#292e42]"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3 pt-3">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#7aa2f7] hover:bg-[#89b4fa] text-[#16161e] text-xs font-bold transition-all shadow-md"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Launch Live Portfolio</span>
              <ExternalLink className="w-3 h-3 ml-1" />
            </a>

            <a
              href={project.mainSiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1a1b26] hover:bg-[#24283b] text-[#c0caf5] border border-[#292e42] text-xs font-medium transition-all"
            >
              <span>Main Domain</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Visual Preview Pane with simulated filter */}
        <div className="lg:col-span-5 flex flex-col justify-between rounded-xl bg-[#1a1b26] p-4 border border-[#292e42]">
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-[#292e42]">
            <span className="text-[11px] text-[#565f89]">filter --sector=</span>
            <div className="flex gap-1">
              {sectors.map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => setActiveSector(sec.id)}
                  className={`px-1.5 py-0.5 rounded text-[10px] cursor-pointer transition-all ${
                    activeSector === sec.id
                      ? "bg-[#7dcfff] text-[#16161e] font-bold"
                      : "text-[#565f89] hover:text-[#9aa5ce]"
                  }`}
                >
                  {sec.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {filtered.map((w, idx) => (
              <div
                key={idx}
                className="relative rounded-lg overflow-hidden border border-[#292e42] aspect-[4/3] group"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={w.image}
                  alt={w.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#16161e] via-[#16161e]/40 to-transparent flex flex-col justify-end p-2">
                  <span className="text-[8px] text-[#7dcfff] uppercase">{w.cat}</span>
                  <div className="text-[10px] font-bold text-white truncate">{w.title}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-[10px] text-[#565f89] mt-3 pt-2 border-t border-[#292e42] flex justify-between">
            <span>spacecrafttech.in</span>
            <span>500+ Projects Indexed</span>
          </div>
        </div>
      </div>
    </div>
  );
};
