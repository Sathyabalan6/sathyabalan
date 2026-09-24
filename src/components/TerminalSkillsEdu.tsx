"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { GraduationCap, Award, ShieldCheck, Calendar, BookOpen, Layers } from "lucide-react";

export const TerminalSkillsEdu: React.FC = () => {
  const { skills, education, certifications } = portfolioData;

  const envSkills = [
    { key: "LANGUAGES", val: skills.languages.join(", "), color: "text-[#7dcfff]" },
    { key: "FRONTEND", val: skills.frontend.join(", "), color: "text-[#7aa2f7]" },
    { key: "BACKEND", val: skills.backend.join(", "), color: "text-[#73daca]" },
    { key: "DATABASES", val: skills.databases.join(", "), color: "text-[#e0af68]" },
    { key: "CLOUD_DEVOPS", val: skills.cloudDevOps.join(", "), color: "text-[#bb9af7]" },
    { key: "AI_PROTOCOLS", val: skills.aiAndProtocols.join(", "), color: "text-[#f7768e]" },
  ];

  return (
    <div className="p-4 sm:p-8 font-mono space-y-8">
      {/* Skills Section (Terminal env variables) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-[#292e42]">
          <div className="flex items-center gap-2 text-xs text-[#7aa2f7]">
            <span className="text-[#565f89]">~/portfolio $</span>
            <span className="text-[#7dcfff] font-bold">env | grep -E "LANGUAGES|STACK"</span>
          </div>
          <span className="text-[10px] text-[#565f89]">ENVIRONMENT VARIABLES</span>
        </div>

        <div className="bg-[#13141c] p-4 sm:p-5 rounded-2xl border border-[#292e42] space-y-3">
          {envSkills.map((item) => (
            <div key={item.key} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 text-xs">
              <span className="text-[#565f89] shrink-0 font-bold">export</span>
              <span className={`${item.color} font-semibold shrink-0 sm:w-36`}>
                {item.key}=
              </span>
              <span className="text-[#c0caf5] bg-[#1a1b26] px-2 py-0.5 rounded border border-[#24283b] break-words">
                &quot;{item.val}&quot;
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Education & Credentials */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-4 border-t border-[#292e42]">
        {/* Education on left */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center gap-2 text-xs text-[#bb9af7] pb-2 border-b border-[#292e42]">
            <GraduationCap className="w-4 h-4" />
            <span className="font-bold">/etc/education.d/degrees</span>
          </div>

          <div className="space-y-3">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#13141c] border border-[#292e42] space-y-1.5 hover:border-[#3b4261] transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h4 className="text-sm font-bold text-white">{edu.degree}</h4>
                  <span className="text-[11px] text-[#565f89] flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {edu.period}
                  </span>
                </div>
                <div className="text-xs text-[#9aa5ce]">{edu.institution}</div>
                <div className="inline-block px-2 py-0.5 rounded text-[10px] bg-[#1a1b26] text-[#73daca] border border-[#292e42]">
                  {edu.grade}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications on right */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center gap-2 text-xs text-[#e0af68] pb-2 border-b border-[#292e42]">
            <Award className="w-4 h-4" />
            <span className="font-bold">/var/log/certifications</span>
          </div>

          <div className="space-y-3">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#13141c] border border-[#292e42] space-y-1 hover:border-[#3b4261] transition-all"
              >
                <div className="flex items-center gap-1.5 text-xs text-white font-bold">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#73daca] shrink-0" />
                  <span>{cert.title}</span>
                </div>
                <div className="text-[11px] text-[#565f89] pl-5">
                  Authority: {cert.issuer} {cert.period && `(${cert.period})`}
                </div>
                {cert.modules && (
                  <div className="mt-2 pt-2 border-t border-[#1f2335] pl-5 space-y-0.5">
                    {cert.modules.map((m, mIdx) => (
                      <div key={mIdx} className="text-[10px] text-[#9aa5ce]">
                        • {m}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
