"use client";

import { GithubIcon, LinkedinIcon } from "./icons";

const facts = [
  "MCA candidate · Anna University (CEG)",
  "Building AI tooling, MCP servers & production web apps",
  "Open source contributor · 26 public repos",
];

export function Hero() {
  return (
    <section
      style={{
        maxWidth: 900,
        margin: "0 auto",
        padding: "140px 24px 96px",
      }}
    >
      {/* Label */}
      <p
        className="fade-up delay-0"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 12,
          color: "var(--accent)",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          marginBottom: 20,
        }}
      >
        Full-Stack &amp; AI Systems Engineer
      </p>

      {/* Name */}
      <h1
        className="fade-up delay-1"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "clamp(36px, 6vw, 64px)",
          fontWeight: 700,
          color: "var(--text)",
          letterSpacing: "-0.03em",
          lineHeight: 1.1,
          marginBottom: 32,
        }}
      >
        Sathya Balan K
      </h1>

      {/* Facts */}
      <ul
        className="fade-up delay-2"
        style={{
          listStyle: "none",
          padding: 0,
          margin: "0 0 36px",
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        {facts.map((fact) => (
          <li
            key={fact}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontSize: 15,
              color: "var(--dim)",
            }}
          >
            <span
              aria-hidden
              style={{
                width: 4,
                height: 4,
                borderRadius: "50%",
                background: "var(--accent)",
                flexShrink: 0,
              }}
            />
            {fact}
          </li>
        ))}
      </ul>

      {/* Social links */}
      <div
        className="fade-up delay-3"
        style={{ display: "flex", gap: 10, flexWrap: "wrap" }}
      >
        {[
          {
            href: "https://github.com/Sathyabalan6",
            icon: <GithubIcon size={15} />,
            label: "GitHub",
          },
          {
            href: "https://linkedin.com/in/",
            icon: <LinkedinIcon size={15} />,
            label: "LinkedIn",
          },
        ].map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="pressable"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 7,
              padding: "8px 16px",
              border: "1px solid var(--border)",
              borderRadius: 8,
              fontSize: 13,
              color: "var(--dim)",
              textDecoration: "none",
              background: "var(--surface)",
              transition: "border-color 150ms ease, color 150ms ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--muted)";
              (e.currentTarget as HTMLElement).style.color = "var(--text)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
              (e.currentTarget as HTMLElement).style.color = "var(--dim)";
            }}
          >
            {s.icon}
            {s.label}
          </a>
        ))}
      </div>
    </section>
  );
}
