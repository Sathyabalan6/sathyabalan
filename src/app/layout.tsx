import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Sathya Balan K | Full-Stack & AI Systems Engineer",
  description:
    "Personal portfolio of Sathya Balan K — Master of Computer Applications student at CEG Anna University, full-stack engineer, AI systems builder, and open-source contributor.",
  keywords: [
    "Sathya Balan",
    "Full-Stack Engineer",
    "AI Systems",
    "Model Context Protocol",
    "MCP",
    "React",
    "Next.js",
    "FastAPI",
    "Anna University",
    "SpaceCraft Tech",
  ],
  authors: [{ name: "Sathya Balan K" }],
  creator: "Sathya Balan K",
  openGraph: {
    title: "Sathya Balan K | Full-Stack & AI Systems Engineer",
    description:
      "Full-stack web architectures, autonomous agent tooling (MCP), and production platforms.",
    url: "https://github.com/Sathyabalan6",
    siteName: "Sathya Balan Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-[#09090b] text-[#fafafa] min-h-screen selection:bg-rose-500/20 selection:text-rose-200`}
      >
        {children}
      </body>
    </html>
  );
}
