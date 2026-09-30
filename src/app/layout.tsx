import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sathya Balan K — Full-Stack & AI Engineer",
  description:
    "Portfolio of Sathya Balan K — Full-Stack & AI Systems Engineer. MCA candidate at Anna University (CEG). Building production web apps, AI tooling, and open-source systems.",
  openGraph: {
    title: "Sathya Balan K",
    description: "Full-Stack & AI Systems Engineer",
    url: "https://sathyabalan6.github.io",
    siteName: "sathyabalan",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
