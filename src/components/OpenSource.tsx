"use client";

import { useEffect, useRef, useState } from "react";

const prs = [
  {
    repo: "adarshashokbaghel-code/mentr",
    repoUrl: "https://github.com/adarshashokbaghel-code/mentr",
    pr: "#48",
    prUrl: "https://github.com/adarshashokbaghel-code/mentr/pull/48",
    title: "feat: add App Router loading.tsx, error.tsx, not-found.tsx and route skeletons",
    status: "merged" as const,
    date: "Sep 2026",
    diff: "+465 / −22",
    desc: "Implemented route-level resilient UX in Next.js App Router — branded 404, global error boundary with retry, and instant streaming skeletons.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    repo: "keinsaasforever/better-chatbot",
    repoUrl: "https://github.com/keinsaasforever/better-chatbot",
    pr: "#398",
    prUrl: "https://github.com/keinsaasforever/better-chatbot/pull/398",
    title: "feat(i18n): replace hardcoded strings with i18n keys (#340)",
    status: "open" as const,
    date: "Sep 2026",
    diff: "+285 / −127",
    desc: "Replaced hardcoded strings across 25 components with internationalization translation keys powered by next-intl in an open-source AI workspace.",
    tech: ["Next.js", "next-intl", "TypeScript"],
  },
];

function useInView(ref: React.RefObject<Element | null>) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return visible;
}

export function OpenSource() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const visible = useInView(titleRef as React.RefObject<Element>);

  return (
    <section
      id="oss"
      style={{
        maxWidth: 900,
        margin: "0 auto",
        padding: "80px 24px",
        borderTop: "1px solid var(--border)",
      }}
    >
      {/* Label */}
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
        Open Source
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
        Contributions
      </h2>

      {/* PR list */}
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {prs.map((pr, i) => {
          const cardRef = useRef<HTMLDivElement>(null);
          const cardVisible = useInView(cardRef as React.RefObject<Element>);
          return (
            <div
              key={pr.pr}
              ref={cardRef}
              className={cardVisible ? `fade-up delay-${i}` : ""}
              style={{
                padding: "20px 22px",
                border: "1px solid var(--border)",
                borderRadius: 10,
                background: "var(--surface)",
              }}
            >
              {/* Top row */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 10,
                }}
              >
                <a
                  href={pr.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 12,
                    color: "var(--muted)",
                  }}
                >
                  {pr.repo}
                </a>
                <a
                  href={pr.prUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pressable"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    color: pr.status === "merged" ? "var(--purple)" : "var(--green)",
                    border: `1px solid ${pr.status === "merged" ? "#bb9af733" : "#9ece6a33"}`,
                    borderRadius: 4,
                    padding: "2px 8px",
                    textDecoration: "none",
                  }}
                >
                  {pr.pr} · {pr.status}
                </a>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    color: "var(--muted)",
                    marginLeft: "auto",
                  }}
                >
                  {pr.date}
                </span>
              </div>

              {/* Title */}
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 13,
                  color: "var(--text)",
                  margin: "0 0 8px",
                  lineHeight: 1.4,
                }}
              >
                {pr.title}
              </p>

              {/* Description */}
              <p
                style={{
                  fontSize: 13,
                  color: "var(--dim)",
                  margin: "0 0 14px",
                  lineHeight: 1.5,
                }}
              >
                {pr.desc}
              </p>

              {/* Bottom: diff stat + tags */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    color: "var(--green)",
                  }}
                >
                  {pr.diff}
                </span>
                <span style={{ color: "var(--border)" }}>·</span>
                {pr.tech.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 11,
                      color: "var(--muted)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
