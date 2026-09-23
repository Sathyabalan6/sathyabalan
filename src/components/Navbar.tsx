"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolioData";
import { FileText, Menu, X, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./icons";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Client Work", href: "#work" },
    { name: "Open Source", href: "#opensource" },
    { name: "AI & Systems", href: "#systems" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 pt-4 sm:pt-6 flex justify-center`}
    >
      <nav
        className={`w-full max-w-5xl rounded-full px-4 sm:px-6 py-2.5 flex items-center justify-between border transition-all duration-300 ${
          scrolled
            ? "bg-zinc-950/85 backdrop-blur-xl border-zinc-800 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)]"
            : "bg-zinc-950/50 backdrop-blur-md border-zinc-800/60"
        }`}
      >
        {/* Brand / Monogram & Status */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="group flex items-center gap-2 font-mono text-sm tracking-tight text-white font-semibold"
          >
            <span className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-700/80 flex items-center justify-center text-xs group-hover:border-rose-500/60 group-hover:text-rose-400 transition-colors">
              SB
            </span>
            <span className="hidden sm:inline font-sans text-sm font-medium text-zinc-300 group-hover:text-white">
              {portfolioData.personal.name}
            </span>
          </Link>

          {/* Status Indicator Pill */}
          <div className="hidden md:flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 text-[11px] font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Open to Roles</span>
          </div>
        </div>

        {/* Center Desktop Links */}
        <div className="hidden lg:flex items-center gap-6 text-xs font-mono uppercase tracking-wider text-zinc-400">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-rose-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-2">
          <a
            href={portfolioData.personal.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-zinc-100 text-zinc-950 hover:bg-white transition-all shadow-[0_0_15px_-3px_rgba(255,255,255,0.2)]"
          >
            <span>Let&apos;s Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed top-20 left-4 right-4 bg-zinc-950/95 border border-zinc-800 rounded-2xl p-5 shadow-2xl backdrop-blur-2xl flex flex-col gap-4">
          <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
            <span className="text-xs font-mono text-zinc-400">Navigation</span>
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available</span>
            </div>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-zinc-300 hover:text-rose-400 py-1 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 w-full py-2.5 rounded-xl text-center text-xs font-medium bg-rose-500 text-white"
          >
            Contact Sathya Balan
          </a>
        </div>
      )}
    </header>
  );
};
