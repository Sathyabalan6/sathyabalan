"use client";

import React, { useState, useRef, useEffect } from "react";
import { TabId } from "./TerminalChrome";
import { Terminal as TerminalIcon, CornerDownLeft, Sparkles } from "lucide-react";

interface InteractiveCLIProps {
  onTabChange: (tab: TabId) => void;
  activeTab: TabId;
}

interface CommandLog {
  id: string;
  command: string;
  output: React.ReactNode;
}

export const InteractiveCLI: React.FC<InteractiveCLIProps> = ({
  onTabChange,
  activeTab,
}) => {
  const [input, setInput] = useState("");
  const [logs, setLogs] = useState<CommandLog[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const quickCommands = [
    { label: "help", cmd: "help" },
    { label: "cat spacecraft.md", cmd: "cat spacecraft.md" },
    { label: "git log", cmd: "git log" },
    { label: "neofetch", cmd: "neofetch" },
    { label: "cat agent-systems.rs", cmd: "cat agent-systems.rs" },
    { label: "clear", cmd: "clear" },
  ];

  const handleCommand = (cmdText: string) => {
    const raw = cmdText.trim();
    if (!raw) return;

    const lower = raw.toLowerCase();
    let response: React.ReactNode = null;

    if (lower === "clear") {
      setLogs([]);
      setInput("");
      return;
    } else if (lower === "help") {
      response = (
        <div className="text-xs space-y-1 font-mono text-[#9aa5ce]">
          <div className="text-[#7dcfff] font-bold">AVAILABLE COMMANDS:</div>
          <div><span className="text-[#bb9af7] font-semibold">neofetch</span> - Show developer specs &amp; system summary</div>
          <div><span className="text-[#bb9af7] font-semibold">cat spacecraft.md</span> - Inspect live Space Craft &amp; Tech Solution project</div>
          <div><span className="text-[#bb9af7] font-semibold">git log</span> - View open-source PRs (#48 mentr, #398 better-chatbot)</div>
          <div><span className="text-[#bb9af7] font-semibold">cat agent-systems.rs</span> - Explore Production Agent Skills suite &amp; MCP</div>
          <div><span className="text-[#bb9af7] font-semibold">cat specs-edu.env</span> - View Anna University CEG MCA &amp; skills matrix</div>
          <div><span className="text-[#bb9af7] font-semibold">whoami</span> - Display developer bio</div>
          <div><span className="text-[#bb9af7] font-semibold">contact</span> - Show GitHub, LinkedIn, and LeetCode connections</div>
          <div><span className="text-[#bb9af7] font-semibold">clear</span> - Clear terminal command buffer</div>
        </div>
      );
    } else if (lower === "ls" || lower === "ls -la") {
      response = (
        <div className="text-xs font-mono grid grid-cols-2 sm:grid-cols-3 gap-2 py-1">
          <span className="text-[#73daca]">overview.sh*</span>
          <span className="text-[#7dcfff]">spacecraft.md</span>
          <span className="text-[#bb9af7]">git-prs.diff</span>
          <span className="text-[#ff9e64]">agent-systems.rs</span>
          <span className="text-[#e0af68]">specs-edu.env</span>
          <span className="text-[#f7768e]">connect.sh*</span>
        </div>
      );
    } else if (lower.includes("spacecraft") || lower === "cat spacecraft.md") {
      onTabChange("client-work");
      response = (
        <div className="text-xs font-mono text-[#73daca]">
          Navigated to tab [2: spacecraft.md]. Commercial architecture &amp; interior platform loaded.
        </div>
      );
    } else if (lower.includes("git log") || lower.includes("open-source") || lower === "cat git-prs.diff") {
      onTabChange("open-source");
      response = (
        <div className="text-xs font-mono text-[#bb9af7]">
          Navigated to tab [3: git-prs.diff]. Showing merged PR #48 on mentr and PR #398 on better-chatbot.
        </div>
      );
    } else if (lower.includes("agent") || lower.includes("systems") || lower === "cat agent-systems.rs") {
      onTabChange("systems");
      response = (
        <div className="text-xs font-mono text-[#ff9e64]">
          Navigated to tab [4: agent-systems.rs]. Loading production-agent-skills suite, laptop-remote, and MCP server.
        </div>
      );
    } else if (lower.includes("skills") || lower.includes("edu") || lower === "cat specs-edu.env") {
      onTabChange("skills-edu");
      response = (
        <div className="text-xs font-mono text-[#e0af68]">
          Navigated to tab [5: specs-edu.env]. College of Engineering Guindy (MCA) credentials &amp; technical matrix loaded.
        </div>
      );
    } else if (lower === "neofetch" || lower === "fastfetch") {
      onTabChange("overview");
      response = (
        <div className="text-xs font-mono text-[#7dcfff]">
          Navigated to tab [1: overview.sh]. Displaying system specs and fastfetch card.
        </div>
      );
    } else if (lower === "contact" || lower === "connect" || lower === "cat connect.sh") {
      onTabChange("contact");
      response = (
        <div className="text-xs font-mono text-[#73daca]">
          Navigated to tab [6: connect.sh]. Terminal links for GitHub, LinkedIn, and LeetCode ready.
        </div>
      );
    } else if (lower === "whoami") {
      response = (
        <div className="text-xs font-mono text-[#c0caf5]">
          Sathya Balan K — Full-Stack &amp; AI Systems Engineer. MCA student at College of Engineering, Guindy, Anna University.
        </div>
      );
    } else if (lower.includes("sudo rm -rf")) {
      response = (
        <div className="text-xs font-mono text-[#f7768e]">
          sudo: nice try! Permission denied: developer portfolio is protected with immutable state.
        </div>
      );
    } else {
      response = (
        <div className="text-xs font-mono text-[#f7768e]">
          command not found: {raw}. Type <button onClick={() => handleCommand("help")} className="text-[#7dcfff] underline cursor-pointer">help</button> for a list of available commands.
        </div>
      );
    }

    setLogs((prev) => [
      ...prev,
      {
        id: Math.random().toString(36).substring(7),
        command: raw,
        output: response,
      },
    ]);
    setInput("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
  };

  return (
    <div className="bg-[#13141c] border-b border-[#292e42] p-3 sm:p-4 text-xs font-mono">
      {/* Quick Clickable Suggestions */}
      <div className="flex items-center gap-1.5 flex-wrap mb-3">
        <span className="text-[10px] uppercase text-[#565f89] mr-1">Quick Run:</span>
        {quickCommands.map((q) => (
          <button
            key={q.cmd}
            onClick={() => handleCommand(q.cmd)}
            className="px-2 py-0.5 rounded bg-[#1a1b26] hover:bg-[#24283b] text-[#7dcfff] border border-[#292e42] hover:border-[#7aa2f7] transition-all text-[11px] cursor-pointer"
          >
            $ {q.label}
          </button>
        ))}
      </div>

      {/* Output Log if any */}
      {logs.length > 0 && (
        <div className="mb-3 space-y-2 max-h-48 overflow-y-auto pr-2 scrollbar-none border-b border-[#1f2335] pb-3">
          {logs.map((log) => (
            <div key={log.id} className="space-y-1">
              <div className="flex items-center gap-2 text-[#7aa2f7]">
                <span className="text-[#565f89]">~/portfolio $</span>
                <span className="text-[#c0caf5] font-semibold">{log.command}</span>
              </div>
              <div className="pl-4">{log.output}</div>
            </div>
          ))}
        </div>
      )}

      {/* Input Prompt Form */}
      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <label htmlFor="terminal-cli-input" className="text-[#73daca] font-semibold shrink-0 select-none">
          sathyabalan@ceg:~$
        </label>
        <div className="relative flex-1 flex items-center">
          <input
            id="terminal-cli-input"
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type 'help', 'cat spacecraft.md', or 'git log'..."
            className="w-full bg-transparent text-[#c0caf5] placeholder-[#565f89] outline-none text-xs font-mono"
            autoComplete="off"
            spellCheck="false"
          />
          <button
            type="submit"
            aria-label="Execute command"
            className="p-1 rounded text-[#565f89] hover:text-[#7dcfff] transition-colors"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </div>
      </form>
    </div>
  );
};
