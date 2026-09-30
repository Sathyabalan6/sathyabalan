"use client";

import { useEffect, useRef, useState } from "react";

interface Project {
  title: string;
  tagline: string;
  tech: string[];
  href: string;
  type: "client" | "personal" | "ai";
}

const projects: Project[] = [
  {
    title: "Space Craft & Tech Solution",
    tagline: "Production website for an interior architecture firm — 500+ projects portfolio",
    tech: ["HTML5", "CSS3", "JavaScript", "Bento Grid"],
    href: "https://www.spacecrafttech.in",
    type: "client",
  },
  {
    title: "Production Agent Skills Suite",
    tagline: "Deterministic AI agent skills for Antigravity, Claude Code, and Cursor",
    tech: ["Python", "Bash", "Agent Protocols"],
    href: "https://github.com/Sathyabalan6/production-agent-skills",
    type: "ai",
  },
  {
    title: "Custom MCP Server",
    tagline: "Model Context Protocol server connecting AI agents with local developer workflows",
    tech: ["Python", "MCP Protocol", "Node.js"],
    href: "https://github.com/Sathyabalan6/mcp_server",
    type: "ai",
  },
  {
    title: "Laptop Remote",
    tagline: "Turn your phone into a laptop controller over Wi-Fi — no install needed",
    tech: ["Python", "Flask", "SocketIO", "PWA"],
    href: "https://github.com/Sathyabalan6/laptop-remote",
    type: "personal",
  },
  {
    title: "Deep RL Traffic Signal Control",
    tagline: "Intelligent traffic optimization via deep reinforcement learning in PyTorch",
    tech: ["Python", "PyTorch", "Deep RL"],
    href: "https://github.com/Sathyabalan6/deeprl_signal_control",
    type: "ai",
  },
  {
    title: "Anna University Estate Portal",
    tagline: "Replaced legacy PHP system with a modern full-stack document management app",
    tech: ["React", "Node.js", "MySQL", "Express"],
    href: "",
    type: "personal",
  },
  {
    title: "MemeGenie",
    tagline: "Serverless meme generation on AWS Lambda, S3, and API Gateway",
    tech: ["AWS Lambda", "Python", "S3", "API Gateway"],
    href: "",
    type: "personal",
  },
  {
    title: "Automated Twitter Poster",
    tagline: "n8n + Gemini AI pipeline publishing synthesized news posts every 4 hours",
    tech: ["n8n", "Gemini API", "Twitter API", "JavaScript"],
    href: "https://github.com/Sathyabalan6/twitter-automation",
    type: "ai",
  },
  {
    title: "Session Export (Chrome MV3)",
    tagline: "Clone and migrate browser sessions into incognito windows across domains",
    tech: ["JavaScript", "Chrome Extensions API (MV3)", "HTML/CSS"],
    href: "https://github.com/Sathyabalan6/session_export",
    type: "personal",
  },
  {
    title: "Full-Stack File Management System",
    tagline: "FastAPI + React document indexing and search engine",
    tech: ["Python", "FastAPI", "React", "TypeScript"],
    href: "https://github.com/Sathyabalan6/file_system",
    type: "personal",
  },
];

const typeBadge: Record<Project["type"], { label: string; color: string }> = {
  client: { label: "Client", color: "var(--purple)" },
  ai:     { label: "AI / Agent", color: "var(--accent)" },
  personal: { label: "Personal", color: "var(--green)" },
};

function useInView(ref: React.RefObject<Element | null>) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.12 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return visible;
}

function ProjectCard({ p, index }: { p: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref as React.RefObject<Element>);
  const badge = typeBadge[p.type];
  const delay = (index % 3) * 60;

  return (
    <div
      ref={ref}
      className={visible ? "fade-up" : ""}
      style={{ animationDelay: `${delay}ms` }}
    >
      <a
        href={p.href || undefined}
        target={p.href ? "_blank" : undefined}
        rel="noopener noreferrer"
        className="pressable"
        style={{
          display: "block",
          padding: "20px 22px",
          border: "1px solid var(--border)",
          borderRadius: 10,
          background: "var(--surface)",
          textDecoration: "none",
          height: "100%",
          transition: "border-color 150ms ease",
          cursor: p.href ? "pointer" : "default",
        }}
        onMouseEnter={(e) => {
          if (p.href)
            (e.currentTarget as HTMLElement).style.borderColor = "var(--muted)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
        }}
      >
        {/* Header row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: 12,
            marginBottom: 8,
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 14,
              fontWeight: 600,
              color: "var(--text)",
              margin: 0,
              lineHeight: 1.3,
            }}
          >
            {p.title}
          </h3>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              color: badge.color,
              border: `1px solid ${badge.color}33`,
              borderRadius: 4,
              padding: "2px 7px",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            {badge.label}
          </span>
        </div>

        {/* Tagline */}
        <p
          style={{
            fontSize: 13,
            color: "var(--dim)",
            margin: "0 0 14px",
            lineHeight: 1.5,
          }}
        >
          {p.tagline}
        </p>

        {/* Tech tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {p.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: "var(--muted)",
                background: "#ffffff08",
                border: "1px solid var(--border)",
                borderRadius: 4,
                padding: "2px 8px",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </a>
    </div>
  );
}

export function Work() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const visible = useInView(titleRef as React.RefObject<Element>);

  return (
    <section
      id="work"
      style={{
        maxWidth: 900,
        margin: "0 auto",
        padding: "80px 24px",
      }}
    >
      {/* Section label */}
      <p
        ref={titleRef}
        className={visible ? "fade-up delay-0" : ""}
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          color: "var(--muted)",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          marginBottom: 10,
        }}
      >
        Work &amp; Projects
      </p>
      <h2
        className={visible ? "fade-up delay-1" : ""}
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "clamp(22px, 3vw, 30px)",
          fontWeight: 700,
          color: "var(--text)",
          letterSpacing: "-0.02em",
          marginBottom: 40,
        }}
      >
        Things I&apos;ve built
      </h2>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))",
          gap: 14,
        }}
      >
        {projects.map((p, i) => (
          <ProjectCard key={p.title} p={p} index={i} />
        ))}
      </div>
    </section>
  );
}
