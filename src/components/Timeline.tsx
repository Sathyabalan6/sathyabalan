"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { GraduationCap, Award, Calendar, CheckCircle2, ShieldCheck } from "lucide-react";

export const Timeline = () => {
  const { education, certifications } = portfolioData;

  return (
    <section id="education" className="py-24 px-4 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Education */}
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono text-rose-400 uppercase tracking-widest mb-2">
            <GraduationCap className="w-4 h-4" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight mb-8">
            Education
          </h2>

          <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-zinc-800">
            {education.map((edu, idx) => (
              <div key={idx} className="relative flex items-start gap-5 pl-1 group">
                <div className="w-6 h-6 rounded-full bg-zinc-950 border-2 border-rose-500 flex items-center justify-center shrink-0 z-10 group-hover:scale-110 transition-transform">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                </div>

                <div className="flex-1 p-5 rounded-2xl bg-zinc-950/70 border border-zinc-800/80 group-hover:border-zinc-700 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <h3 className="text-base font-bold text-white">
                      {edu.degree}
                    </h3>
                    <span className="text-xs font-mono text-zinc-500 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {edu.period}
                    </span>
                  </div>

                  <p className="text-sm text-zinc-300 mb-2">{edu.institution}</p>

                  <span className="inline-block px-2.5 py-0.5 rounded-md text-xs font-mono bg-zinc-900 text-rose-400 border border-zinc-800">
                    {edu.grade}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Certifications */}
        <div className="lg:col-span-5">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-400 uppercase tracking-widest mb-2">
            <Award className="w-4 h-4" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight mb-8">
            Certifications
          </h2>

          <div className="space-y-4">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-zinc-950/70 border border-zinc-800/80 hover:border-zinc-700 transition-colors"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <h3 className="text-sm font-bold text-white">
                      {cert.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs font-mono text-zinc-400 mb-2">
                  Issued by: <span className="text-zinc-200">{cert.issuer}</span>
                  {cert.period && <span> • {cert.period}</span>}
                </p>

                {cert.modules && (
                  <div className="mt-3 pt-3 border-t border-zinc-900 space-y-1">
                    {cert.modules.map((mod, mIdx) => (
                      <div key={mIdx} className="text-[11px] text-zinc-400 flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-zinc-600" />
                        <span>{mod}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
