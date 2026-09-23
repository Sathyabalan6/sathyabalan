"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from "./icons";

export const ContactFooter = () => {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="pt-20 pb-12 px-4 max-w-6xl mx-auto">
      {/* Contact Box */}
      <div className="relative rounded-3xl bg-zinc-950 border border-zinc-800 p-8 sm:p-12 mb-16 shadow-2xl overflow-hidden text-center flex flex-col items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-rose-500/5 to-transparent pointer-events-none" />

        <span className="px-3 py-1 rounded-full text-xs font-mono bg-zinc-900 text-rose-400 border border-zinc-800 mb-4">
          Start a Conversation
        </span>

        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4 max-w-2xl">
          Let&apos;s Build Something Extraordinary.
        </h2>

        <p className="text-zinc-400 text-sm sm:text-base max-w-xl mb-8 leading-relaxed">
          Open to software engineering roles, autonomous agent projects, and full-stack client consulting.
        </p>

        {/* Contact & Social Connection Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={personal.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-zinc-950 text-xs font-semibold hover:bg-zinc-200 transition-all shadow-lg"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub @{personal.username}</span>
          </a>

          <a
            href={personal.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0a66c2] hover:bg-[#004182] text-white text-xs font-semibold transition-all shadow-[0_0_20px_-5px_rgba(10,102,194,0.4)]"
          >
            <LinkedinIcon className="w-4 h-4" />
            <span>LinkedIn Profile</span>
          </a>

          <a
            href={personal.social.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 text-xs font-semibold transition-all"
          >
            <LeetCodeIcon className="w-4 h-4 text-amber-500" />
            <span>LeetCode</span>
          </a>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
        <div>
          © {new Date().getFullYear()} {personal.name}. Built with Next.js &amp; VengeanceUI design patterns.
        </div>

        <div className="flex items-center gap-4">
          <a
            href={personal.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-300 transition-colors"
          >
            GitHub
          </a>
          <a
            href={personal.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-300 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={personal.social.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-300 transition-colors"
          >
            LeetCode
          </a>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors ml-2"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
