"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { GlowBorderCard } from "./ui/glow-border-card";
import { BorderBeam } from "./ui/border-beam";
import { Badge } from "./ui/badge";
import { ExternalLink, CheckCircle2, Globe, Layers, Sparkles, Smartphone, ArrowRight } from "lucide-react";

export const ClientSpotlight = () => {
  const project = portfolioData.freelanceAndClientWork[0];
  const [activeTab, setActiveTab] = useState<string>("all");

  const sectors = [
    { id: "all", label: "All Sectors" },
    { id: "corporate", label: "Corporate" },
    { id: "industrial", label: "Industrial" },
    { id: "hospitality", label: "Hospitality" },
    { id: "retail", label: "Retail" },
  ];

  const sampleWorks = [
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
      title: "Flagship Retail Showroom",
      cat: "Retail",
      loc: "T. Nagar, Chennai — 8,000 sq.ft.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=80",
    },
  ];

  const filteredWorks =
    activeTab === "all"
      ? sampleWorks
      : sampleWorks.filter((w) => w.cat.toLowerCase() === activeTab.toLowerCase());

  return (
    <section id="work" className="py-24 px-4 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-mono text-rose-400 uppercase tracking-widest mb-2">
            <Globe className="w-3.5 h-3.5" />
            <span>Commercial Client Production</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Freelance Work
          </h2>
        </div>
        <p className="text-sm text-zinc-400 max-w-md">
          Delivered full-stack and frontend client implementations in production environments.
        </p>
      </div>

      {/* Main Feature Card with BorderBeam */}
      <div className="relative rounded-3xl bg-zinc-950 border border-zinc-800 p-6 sm:p-10 shadow-2xl overflow-hidden">
        <BorderBeam size={320} duration={16} colorFrom="#38bdf8" colorTo="#f43f5e" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Project Overview */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="glow">Live Production Website</Badge>
              <Badge variant="outline">Freelance</Badge>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              {project.title}
            </h3>

            <p className="text-rose-400 font-mono text-xs mb-4">
              {project.client} • {project.role}
            </p>

            <p className="text-zinc-300 text-sm leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Highlights Bullet List */}
            <div className="space-y-2.5 mb-8">
              {project.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-1.5 mb-8">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Links */}
            <div className="flex flex-wrap gap-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-rose-500 to-rose-600 text-white text-xs font-semibold shadow-[0_0_25px_-5px_rgba(244,63,94,0.5)] hover:brightness-110 transition-all"
              >
                <span>View Live Projects Portfolio</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={project.mainSiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 text-xs font-semibold transition-all"
              >
                <span>Visit Main Site</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Live Mockup / Bento Visual Preview */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <div className="rounded-2xl border border-zinc-800/90 bg-zinc-900/50 p-4 sm:p-5 backdrop-blur-md">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[11px] font-mono text-zinc-400 ml-2">
                    spacecrafttech.in/projects
                  </span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                  LIVE 200 OK
                </span>
              </div>

              {/* Mini sector filter simulation */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {sectors.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => setActiveTab(sec.id)}
                    className={`px-2.5 py-1 rounded-full text-[10px] font-mono transition-all ${
                      activeTab === sec.id
                        ? "bg-rose-500 text-white font-medium shadow-sm"
                        : "bg-zinc-800/60 text-zinc-400 hover:text-zinc-200"
                    }`}
                  >
                    {sec.label}
                  </button>
                ))}
              </div>

              {/* Sample portfolio grid */}
              <div className="grid grid-cols-2 gap-2.5">
                {filteredWorks.map((work, i) => (
                  <div
                    key={i}
                    className="relative group rounded-xl overflow-hidden aspect-[4/3] border border-zinc-800/60 bg-zinc-950"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent flex flex-col justify-end p-2.5">
                      <span className="text-[9px] font-mono text-rose-400 uppercase">
                        {work.cat}
                      </span>
                      <h4 className="text-[11px] font-semibold text-white truncate">
                        {work.title}
                      </h4>
                      <p className="text-[9px] text-zinc-400 truncate">
                        {work.loc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
