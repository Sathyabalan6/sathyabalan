"use client";

import { useState, useEffect } from "react";
import { GithubIcon, LinkedinIcon } from "./icons";

const links = [
  { label: "Work", href: "#work" },
  { label: "Open Source", href: "#oss" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        borderBottom: scrolled
          ? "1px solid var(--border)"
          : "1px solid transparent",
        background: scrolled ? "color-mix(in srgb, var(--bg) 85%, transparent)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        transition: "background 200ms ease, border-color 200ms ease, backdrop-filter 200ms ease",
      }}
    >
      <nav
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "0 24px",
          height: 56,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Name — monospace, subtle */}
        <a
          href="#"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 15,
            fontWeight: 600,
            color: "var(--text)",
            textDecoration: "none",
            letterSpacing: "-0.02em",
          }}
          className="pressable"
        >
          sathyabalan
          <span style={{ color: "var(--accent)" }}>.</span>
        </a>

        {/* Nav links */}
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                padding: "6px 12px",
                fontSize: 14,
                color: "var(--dim)",
                textDecoration: "none",
                borderRadius: 6,
                transition: "color 150ms ease, background 150ms ease",
              }}
              className="pressable"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--text)";
                (e.currentTarget as HTMLElement).style.background = "var(--surface)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--dim)";
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              {l.label}
            </a>
          ))}

          {/* Social icons */}
          <div
            style={{ width: 1, height: 18, background: "var(--border)", margin: "0 8px" }}
          />
          {[
            { href: "https://github.com/Sathyabalan6", icon: <GithubIcon size={17} />, label: "GitHub" },
            { href: "https://linkedin.com/in/", icon: <LinkedinIcon size={17} />, label: "LinkedIn" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 34,
                height: 34,
                borderRadius: 8,
                color: "var(--muted)",
                textDecoration: "none",
                transition: "color 150ms ease, background 150ms ease",
              }}
              className="pressable"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--text)";
                (e.currentTarget as HTMLElement).style.background = "var(--surface)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--muted)";
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
