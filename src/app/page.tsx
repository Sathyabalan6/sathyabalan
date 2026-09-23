import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ClientSpotlight } from "@/components/ClientSpotlight";
import { OpenSource } from "@/components/OpenSource";
import { ProjectsBento } from "@/components/ProjectsBento";
import { SkillsMatrix } from "@/components/SkillsMatrix";
import { Timeline } from "@/components/Timeline";
import { ContactFooter } from "@/components/ContactFooter";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#09090b] text-[#fafafa] overflow-hidden">
      {/* Floating Header */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Commercial Client Spotlight (SpaceCraft Tech) */}
      <ClientSpotlight />

      {/* Open Source Contributions (Mentr & Better Chatbot PRs) */}
      <OpenSource />

      {/* Bento Grid: Agent Skills, MCP Server, Laptop Remote & Systems */}
      <ProjectsBento />

      {/* Skills Matrix */}
      <SkillsMatrix />

      {/* Education & Verified Credentials */}
      <Timeline />

      {/* Contact & Terminal Footer */}
      <ContactFooter />
    </main>
  );
}
