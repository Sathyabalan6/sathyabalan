"use client";

import { useEffect, useRef, useState } from "react";
import { GithubIcon, LinkedinIcon } from "./icons";

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

export function Footer() {
  const ref = useRef<HTMLElement>(null);
  const visible = useInView(ref as React.RefObject<Element>);

  return (
    <footer
      id="contact"
      ref={ref}
      style={{
        borderTop: "1px solid var(--border)",
        marginTop: 0,
      }}
    >
      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "56px 24px 48px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 24,
          textAlign: "center",
        }}
      >
        {/* Heading */}
        <div className={visible ? "fade-up delay-0" : ""}>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              color: "var(--muted)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 10,
            }}
          >
            Contact
          </p>
          <h2
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: 700,
              color: "var(--text)",
              letterSpacing: "-0.02em",
            }}
          >
            Let&apos;s connect
          </h2>
        </div>

        {/* Social buttons */}
        <div
          className={visible ? "fade-up delay-1" : ""}
          style={{ display: "flex", gap: 10 }}
        >
          {[
            {
              href: "https://github.com/Sathyabalan6",
              icon: <GithubIcon size={16} />,
              label: "GitHub",
            },
            {
              href: "https://linkedin.com/in/",
              icon: <LinkedinIcon size={16} />,
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
                gap: 8,
                padding: "10px 20px",
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

        {/* Fine print */}
        <p
          className={visible ? "fade-up delay-2" : ""}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            color: "var(--muted)",
          }}
        >
          © {new Date().getFullYear()} Sathya Balan K · India
        </p>
      </div>
    </footer>
  );
}
