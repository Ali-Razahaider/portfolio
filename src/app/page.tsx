"use client";

import Image from "next/image";
import { portfolioData } from "@/data/portfolio";
import * as SimpleIcons from "react-icons/si";
import * as FA6Icons from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { HeroEngineeringDeck } from "@/components/HeroEngineeringDeck";
import { 
  Lock, 
  ExternalLink, 
  Layers, 
  Cpu, 
  Zap, 
  Database, 
  Activity, 
  ArrowRight,
  GitMerge,
  GitPullRequest,
  Download,
  Check,
  Copy,
  Code2
} from "lucide-react";

const iconPacks: Record<string, Record<string, React.ComponentType>> = {
  si: SimpleIcons as unknown as Record<string, React.ComponentType>,
  fa6: FA6Icons as unknown as Record<string, React.ComponentType>,
};

const TechIcon = ({ iconName, iconPack = "si" }: { iconName: string; iconPack?: string }) => {
  const pack = iconPacks[iconPack] || iconPacks.si;
  const IconComponent = pack[iconName];
  if (!IconComponent) return null;
  return <IconComponent />;
};

const techBrandColors: Record<string, string> = {
  "JavaScript": "#F7DF1E",
  "TypeScript": "#3178C6",
  "Python": "#3776AB",
  "C++": "#00599C",
  "React": "#61DAFB",
  "React.js": "#61DAFB",
  "Next.js": "#000000",
  "TailwindCSS": "#06B6D4",
  "Node.js": "#5FA04E",
  "Express": "#000000",
  "FastAPI": "#009688",
  "NestJS": "#E0234E",
  "Nest.js": "#E0234E",
  "Ollama": "#000000",
  "Gemini LLM": "#8E75FF",
  "pgvector": "#336791",
  "MongoDB": "#47A248",
  "PostgreSQL": "#4169E1",
  "Redis": "#DC382D",
  "Docker": "#2496ED",
  "AWS": "#FF9900",
  "Socket.io": "#010101",
  "JWT": "#D63AF9",
  "Open Source": "#F05032",
  "Git": "#F05032",
};

const tagIconMap: Record<string, string> = {
  "Next.js": "SiNextdotjs",
  "FastAPI": "SiFastapi",
  "NestJS": "SiNestjs",
  "Ollama": "SiOllama",
  "Gemini LLM": "SiGooglegemini",
  "pgvector": "SiPostgresql",
  "PostgreSQL": "SiPostgresql",
  "Redis": "SiRedis",
  "Docker": "SiDocker",
  "React": "SiReact",
  "Node.js": "SiNodedotjs",
  "MongoDB": "SiMongodb",
  "Socket.io": "SiSocketdotio",
  "TailwindCSS": "SiTailwindcss",
  "TypeScript": "SiTypescript",
  "Python": "SiPython",
  "Open Source": "SiGit",
  "Express": "SiExpress",
  "JWT": "SiJsonwebtokens",
  "JavaScript": "SiJavascript",
  "C++": "SiCplusplus",
};

const RenderTag = ({ tag }: { tag: string }) => {
  const iconKey = tagIconMap[tag];
  const IconComp = iconKey ? (SimpleIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[iconKey] : null;
  const brandColor = techBrandColors[tag] || "#57534E";
  return (
    <span className="inline-flex items-center gap-1.5 font-mono text-[11.5px] px-2.5 py-1 rounded-md bg-stone-100/90 text-stone-700 font-medium">
      {IconComp && (
        <span className="w-4 h-4 text-[14px] flex items-center justify-center shrink-0" style={{ color: brandColor }}>
          <IconComp />
        </span>
      )}
      <span>{tag}</span>
    </span>
  );
};

/* ── Micro Icons ───────────────────────────────────────── */
const ArrowUpRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 7h10v10" /><path d="M7 17 17 7" />
  </svg>
);

const ArrowDown = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 5v14" /><path d="m19 12-7 7-7-7" />
  </svg>
);





type ProjectItem = (typeof portfolioData.projects)[number];

/* ── Redesigned Editorial Project Showcase Component ───── */
function EditorialProjectShowcase({ project, index }: { project: ProjectItem; index: number }) {
  const [expanded, setExpanded] = useState(false);

  const cleanUrl = project.liveUrl 
    ? project.liveUrl.replace(/^https?:\/\//, '').replace(/\/$/, '') 
    : 'production-system.internal';

  const getMetricIcon = (label: string) => {
    const l = label.toLowerCase();
    if (l.includes("latency") || l.includes("speed") || l.includes("time")) {
      return <Zap className="w-3.5 h-3.5 text-amber-500" />;
    }
    if (l.includes("vector") || l.includes("index") || l.includes("db") || l.includes("database")) {
      return <Database className="w-3.5 h-3.5 text-void-accent" />;
    }
    if (l.includes("cache") || l.includes("sync") || l.includes("engine") || l.includes("socket")) {
      return <Cpu className="w-3.5 h-3.5 text-indigo-500" />;
    }
    return <Activity className="w-3.5 h-3.5 text-emerald-500" />;
  };

  return (
    <article className="w-full py-10 first:pt-6 border-b border-stone-200 last:border-b-0">
      
      {/* Top Header Strip */}
      <div className="pb-4 border-b border-stone-200 mb-8 flex items-baseline gap-3">
        <span className="font-mono text-[20px] md:text-[24px] font-medium text-void-accent shrink-0">
          0{index + 1}.
        </span>
        <h3 className="text-[26px] md:text-[32px] font-medium text-stone-900 tracking-tight leading-tight">
          {project.title}
        </h3>
      </div>

      {/* Main Showcase Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        
        {/* Left Column: Browser Frame & Telemetry */}
        <div className="lg:col-span-7 w-full flex flex-col">
          {/* Sleek Browser Frame */}
          <div className="relative w-full rounded-xl overflow-hidden border border-stone-200 bg-white shadow-xs group">
            {/* macOS Browser Header */}
            <div className="flex items-center justify-between px-3.5 py-2.5 bg-stone-50 border-b border-stone-200">
              {/* Window Controls */}
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] opacity-85"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] opacity-85"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] opacity-85"></span>
              </div>

              {/* Address Bar */}
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border border-stone-200 text-[11px] font-mono text-stone-700 max-w-[260px] truncate shadow-2xs">
                <Lock className="w-2.5 h-2.5 text-emerald-600 shrink-0" />
                <span className="truncate">{cleanUrl}</span>
              </div>

              {/* Status Pill */}
              <div className="text-[10.5px] font-mono text-emerald-700 font-medium">
                <span className="hidden sm:inline">200 OK</span>
              </div>
            </div>

            {/* Crisp Snapshot Container */}
            <div className="relative w-full aspect-[16/10] overflow-hidden bg-stone-100">
              <Image
                src={project.image}
                alt={project.title}
                fill
                unoptimized
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500 ease-out"
              />
              
              {/* Interactive Hover Backdrop Overlay */}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title}`}
                  className="absolute inset-0 bg-stone-900/25 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center cursor-pointer backdrop-blur-[1.5px]"
                >
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-white text-stone-900 text-[12.5px] font-mono font-bold rounded-lg shadow-lg transform translate-y-1 group-hover:translate-y-0 transition-transform duration-200">
                    <span>Open Live Deployment</span>
                    <ExternalLink className="w-3.5 h-3.5 text-void-accent" />
                  </span>
                </a>
              )}
            </div>
          </div>

          {/* Engineering Telemetry Metrics Bar */}
          {project.metrics && (
            <div className="grid grid-cols-3 gap-2.5 mt-3">
              {project.metrics.map((m: { label: string; val: string }, i: number) => (
                <div 
                  key={i} 
                  className="py-3 border-b border-stone-100 last:border-b-0 flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="font-mono text-[9.5px] uppercase tracking-wider text-stone-500 truncate font-semibold">
                      {m.label}
                    </span>
                    {getMetricIcon(m.label)}
                  </div>
                  <span className="font-mono text-[13px] font-bold text-stone-900 tracking-tight">
                    {m.val}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Narrative & Engineering Specs */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full">
          <div>
            {/* Overview */}
            <div className="mb-6">
              <h4 className="font-mono text-[11px] uppercase tracking-wider text-stone-500 font-bold mb-2">
                Project Overview
              </h4>
              <p className="text-[15px] text-stone-700 leading-relaxed font-normal">
                {project.description}
              </p>
            </div>

            {/* Technologies */}
            <div className="mb-6">
              <h4 className="font-mono text-[11px] uppercase tracking-wider text-stone-500 font-bold mb-2.5">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag: string, i: number) => (
                  <RenderTag key={i} tag={tag} />
                ))}
              </div>
            </div>

            {/* Clickable Technical Breakdown Disclosure */}
            {project.architecture && (
              <div className="mb-6">
                <button
                  onClick={() => setExpanded(!expanded)}
                  className={`w-full text-left py-2.5 px-3.5 rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-between text-[12px] font-mono ${
                    expanded
                      ? "border-blue-300 bg-blue-50/50 text-blue-700 shadow-xs"
                      : "border-stone-200 hover:border-stone-300 bg-stone-50/70 text-stone-800"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5 text-void-accent" />
                    <span className="font-bold">
                      {expanded ? "Hide Architecture Decisions" : "Inspect Architecture Decisions"}
                    </span>
                  </div>
                  <span className={`text-[10.5px] font-bold px-2 py-0.5 rounded transition-colors ${
                    expanded ? "bg-void-accent text-white" : "bg-white border border-stone-200 text-stone-600"
                  }`}>
                    {expanded ? "CLOSE" : "EXPAND"}
                  </span>
                </button>

                <AnimatePresence>
                  {expanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden mt-2 rounded-xl border border-stone-200 bg-stone-50/50 p-4.5 flex flex-col gap-4 text-[13px] shadow-xs"
                    >
                      <div className="border-l-2 border-void-accent pl-3.5">
                        <span className="font-mono text-[10.5px] uppercase tracking-wider text-void-accent font-bold block mb-1">
                          Architecture Decision
                        </span>
                        <p className="text-stone-700 leading-relaxed text-[13px]">
                          {project.architecture.decision}
                        </p>
                      </div>

                      <div className="border-l-2 border-stone-400 pl-3.5">
                        <span className="font-mono text-[10.5px] uppercase tracking-wider text-stone-500 font-bold block mb-1">
                          Trade-off & Constraint
                        </span>
                        <p className="text-stone-700 leading-relaxed text-[13px]">
                          {project.architecture.tradeoff}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-stone-200">
                        <span className="font-mono text-[10.5px] uppercase tracking-wider text-stone-500 font-bold block mb-2">
                          System Pipeline Flow
                        </span>
                        <div className="flex flex-wrap items-center gap-1.5 font-mono text-[11px]">
                          {project.architecture.systemFlow.map((step: string, i: number) => (
                            <span key={i} className="flex items-center gap-1.5">
                              <span className="bg-white px-2.5 py-1 rounded-md border border-stone-200 font-medium text-stone-800 shadow-2xs">
                                <span className="text-void-accent mr-1 font-bold">{i + 1}.</span>
                                {step}
                              </span>
                              {i < project.architecture.systemFlow.length - 1 && (
                                <ArrowRight className="w-3 h-3 text-stone-400 shrink-0" />
                              )}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-stone-200 mt-auto">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-stone-900 hover:bg-stone-800 text-white text-[13px] font-mono tracking-tight font-semibold transition-all shadow-sm cursor-pointer group/btn"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 group-hover/btn:animate-ping"></span>
                <span>Live Project</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-stone-200 hover:border-stone-400 hover:bg-stone-50 text-stone-800 text-[13px] font-mono tracking-tight font-medium transition-colors cursor-pointer"
            >
              <FA6Icons.FaGithub className="w-3.5 h-3.5 text-stone-600" />
              <span>Source Code</span>
              <ArrowUpRight />
            </a>
          </div>

        </div>

      </div>
    </article>
  );
}


export default function Home() {
  const [copied, setCopied] = useState(false);

  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col items-center min-h-screen">
      
      {/* ── 1. FULL-SCREEN HERO WITH INTERACTIVE CODE CONSOLE ON RIGHT ── */}
      <section className="w-full max-w-[1100px] min-h-[calc(100vh-4rem)] px-6 pt-4 sm:pt-6 pb-12 flex flex-col justify-between border-b border-stone-200">
        
        {/* Main 2-Column Hero Content */}
        <div className="my-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Punchy Narrative */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="flex items-center gap-2 font-mono text-[12px] uppercase tracking-widest text-stone-500 mb-4 font-semibold">
              <span>Software Engineer</span>
            </div>

            <h1 className="text-[clamp(2.6rem,4.8vw,4.2rem)] font-medium text-stone-950 tracking-tight leading-[1.08] mb-5">
              Building clean, reliable software.
            </h1>

            <p className="text-[16.5px] md:text-[18px] text-stone-600 leading-relaxed mb-8 font-normal max-w-[52ch]">
              Hi, I&apos;m Ali. I build full-stack web applications with TypeScript, React, Next.js, and Python. Focused on clean code, thoughtful architecture, and practical software that works.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={scrollToWork}
                className="inline-flex items-center gap-2 px-5 py-3 bg-stone-950 hover:bg-stone-900 active:scale-98 text-white text-[13.5px] font-medium tracking-tight transition-all cursor-pointer rounded-lg shadow-sm"
              >
                View Selected Work <ArrowDown />
              </button>

              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="inline-flex items-center gap-1.5 px-5 py-3 border border-stone-200 bg-white hover:border-stone-400 hover:bg-stone-50 text-stone-800 text-[13.5px] font-medium transition-all rounded-lg shadow-2xs"
              >
                Start Conversation <ArrowUpRight />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive GSAP Architecture & Engineering Console */}
          <div className="lg:col-span-6 w-full">
            <HeroEngineeringDeck />
          </div>

        </div>

      </section>

      {/* ── 2. REDESIGNED EDITORIAL PROJECTS SECTION ───────── */}
      <section id="work" className="w-full max-w-[1100px] px-6 scroll-mt-14 py-16">
        
        {/* Section Header */}
        <div className="pb-8 border-b border-stone-200 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-[32px] md:text-[38px] font-medium text-stone-950 tracking-tight">
              Featured Work
            </h2>
            <p className="text-[15px] text-stone-600 mt-1.5 max-w-xl">
              Full-stack web applications, real-time features, and AI tools built to be fast, clean, and reliable.
            </p>
          </div>
        </div>

        {/* Editorial Project Showcases */}
        <div className="flex flex-col w-full gap-2">
          {portfolioData.projects.map((project, index) => (
            <EditorialProjectShowcase key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>

      {/* ── 3. DEDICATED OPEN SOURCE EXPERIENCE SECTION ───── */}
      <section id="opensource" className="w-full max-w-[1100px] px-6 py-20 scroll-mt-14 border-t border-stone-200">
        
        {/* Section Header */}
        <div className="pb-8 border-b border-stone-200 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-[32px] md:text-[38px] font-medium text-stone-950 tracking-tight">
              Open Source Contributions
            </h2>
            <p className="text-[14.5px] text-stone-600 mt-1.5 max-w-xl">
              Production codebase bug fixes, performance optimizations, and merged pull requests.
            </p>
          </div>
        </div>

        {/* Full-Width Open Source Showcase */}
        <div className="mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Project Overview & Meta */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full">
              <div>
                <div className="inline-flex items-center gap-1.5 text-stone-500 text-[11px] font-mono font-semibold tracking-wider uppercase mb-3">
                  <GitPullRequest className="w-3.5 h-3.5 text-purple-600" />
                  <span>Merged Upstream</span>
                </div>

                <h3 className="text-[28px] md:text-[34px] font-bold text-stone-900 tracking-tight mb-1.5 flex items-baseline gap-2.5">
                  <span className="text-purple-600 font-mono text-[22px] md:text-[28px] font-bold">01.</span>
                  <span>{portfolioData.openSource[0].project}</span>
                </h3>
                <p className="font-mono text-[13px] text-stone-500 mb-4 flex items-center gap-2">
                  <span>{portfolioData.openSource[0].role}</span>
                  <span>•</span>
                  <span className="text-stone-700 font-medium">{portfolioData.openSource[0].date}</span>
                </p>
                <p className="text-[15px] text-stone-600 leading-relaxed mb-6 font-normal">
                  {portfolioData.openSource[0].description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-8">
                  {portfolioData.openSource[0].tags.map((tag, i) => (
                    <RenderTag key={i} tag={tag} />
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-stone-200 mt-auto">
                <a
                  href={portfolioData.openSource[0].githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-stone-900 hover:bg-stone-800 text-white text-[13px] font-mono tracking-tight font-bold transition-all shadow-sm cursor-pointer group"
                >
                  <FA6Icons.FaGithub className="w-3.5 h-3.5 text-white" />
                  <span>View Merged PRs</span>
                  <ArrowUpRight />
                </a>
                <a
                  href={portfolioData.openSource[0].liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-stone-200 hover:border-stone-400 hover:bg-stone-50 text-stone-800 text-[13px] font-mono tracking-tight font-medium transition-colors cursor-pointer shadow-2xs"
                >
                  <span>Visit Pathment</span>
                  <ExternalLink className="w-3.5 h-3.5 text-stone-500" />
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Git Pull Request Inspector */}
            <div className="lg:col-span-7 pt-6 lg:pt-0 lg:pl-8 lg:border-l border-t lg:border-t-0 border-stone-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-stone-200 mb-4 gap-2">
                  <div className="flex items-center gap-2 font-mono text-[11.5px] text-stone-800 font-semibold">
                    <Code2 className="w-3.5 h-3.5 text-purple-600" />
                    <span>Upstream Pull Requests ({portfolioData.openSource[0].pullRequests?.length || 8})</span>
                  </div>
                  <a
                    href={portfolioData.openSource[0].githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[11px] text-purple-700 bg-purple-50 hover:bg-purple-100 border border-purple-200 px-2.5 py-1 rounded font-medium flex items-center gap-1 transition-colors shadow-2xs"
                  >
                    <span>View all on GitHub</span>
                    <ArrowUpRight />
                  </a>
                </div>

                <div className="max-h-[360px] overflow-y-auto pr-2 flex flex-col gap-2 custom-scrollbar">
                  {portfolioData.openSource[0].pullRequests?.map((item, idx) => (
                    <a 
                      key={item.id} 
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3.5 border-b border-stone-100 last:border-b-0 hover:bg-stone-50/70 transition-all flex flex-col gap-1.5 group cursor-pointer block rounded-lg"
                    >
                      <div className="flex items-center justify-between text-[11px] font-mono gap-2">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-bold text-purple-600">
                            0{idx + 1}.
                          </span>
                          <span className="font-semibold text-purple-700">
                            PR #{item.id}
                          </span>
                          <span className="inline-flex items-center gap-1 font-semibold text-emerald-700">
                            <GitMerge className="w-3 h-3 text-emerald-600" />
                            <span>{item.status}</span>
                          </span>
                          <span className="text-stone-400 hidden sm:inline">•</span>
                          <span className="text-stone-500 text-[10.5px]">{item.scope}</span>
                        </div>
                        <span className="text-[11px] text-stone-400 group-hover:text-purple-600 flex items-center gap-1 shrink-0 font-medium">
                          <span className="hidden sm:inline">Inspect PR</span>
                          <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </span>
                      </div>

                      <h4 className="text-[13.5px] text-stone-900 font-semibold group-hover:text-purple-700 transition-colors leading-snug">
                        {item.title}
                      </h4>

                      <p className="text-[12.5px] text-stone-600 leading-relaxed font-normal">
                        {item.shortDescription}
                      </p>

                      <div className="flex items-center justify-between text-[10.5px] font-mono text-stone-400 pt-1 border-t border-stone-100">
                        <span className="flex items-center gap-1 text-emerald-700 font-medium">
                          <Check className="w-3 h-3 text-emerald-600" />
                          <span>Merged & deployed to production</span>
                        </span>
                        <span>{item.mergedAt}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 4. CAREER EXPERIENCE ────────────────────────────── */}
      <section id="experience" className="w-full max-w-[1100px] px-6 py-20 scroll-mt-14 border-t border-stone-200">
        
        {/* Section Header */}
        <div className="pb-8 border-b border-stone-200 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-[32px] md:text-[38px] font-medium text-stone-950 tracking-tight">
              Work History
            </h2>
            <p className="text-[14.5px] text-stone-600 mt-1.5 max-w-xl">
              Professional software engineering roles, backend architecture, and production delivery.
            </p>
          </div>
          <a
            href="/resume.pdf"
            download="Ali_Raza_Resume.pdf"
            className="inline-flex items-center gap-2 font-mono text-[12px] font-medium text-stone-800 hover:text-stone-950 bg-white border border-stone-200 hover:border-stone-400 hover:bg-stone-50 px-3.5 py-2 rounded-lg transition-colors shadow-2xs"
          >
            <Download className="w-3.5 h-3.5 text-void-accent" />
            <span>Download Resume</span>
          </a>
        </div>

        <div className="flex flex-col w-full gap-4 mt-8">
          {portfolioData.experience.map((job) => (
            <div key={job.id} className="py-6 md:py-7 border-b border-stone-200 last:border-b-0 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-4">
                <span className="text-[13px] font-mono text-stone-600 font-medium block mb-1">
                  {job.date}
                </span>
                {job.location && <p className="text-stone-500 text-[12px] font-mono">{job.location}</p>}
              </div>

              <div className="md:col-span-8 flex flex-col">
                <h3 className="text-[20px] font-medium text-stone-950 tracking-tight">
                  {job.role}
                </h3>
                <p className="text-[14.5px] font-medium text-void-accent mb-3">
                  {job.company}
                </p>
                <p className="text-[14.5px] text-stone-600 leading-relaxed mb-4 font-normal">
                  {job.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {job.tags.map((tag, i) => (
                    <RenderTag key={i} tag={tag} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 5. TECHNICAL SKILLS ─────────────────────────────── */}
      <section id="skills" className="w-full max-w-[1100px] px-6 py-20 scroll-mt-14 border-t border-stone-200">
        <div className="pb-8 border-b border-stone-200 mb-8">
          <h2 className="text-[32px] md:text-[38px] font-medium text-stone-950 tracking-tight">
            Technologies & Stack
          </h2>
          <p className="text-[14.5px] text-stone-600 mt-1.5 max-w-xl">
            Core programming languages, frameworks, databases, and infrastructure tools.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {["Languages", "Frontend", "Backend", "Database & Cloud"].map((category) => (
            <div key={category} className="py-5 group">
              <h3 className="font-mono text-[11.5px] uppercase tracking-wider text-stone-900 pb-2.5 border-b border-stone-200 mb-3.5 font-medium">
                {category}
              </h3>
              <div className="flex flex-col gap-2">
                {portfolioData.technologies
                  .filter((t) => t.category === category)
                  .map((tech, idx) => (
                    <div key={idx} className="flex items-center gap-3 py-2 px-2.5 rounded-md hover:bg-stone-100/70 text-[13.5px] text-stone-800 hover:text-stone-950 transition-colors font-medium">
                      <div className="text-[20px] sm:text-[22px] shrink-0 flex items-center justify-center" style={{ color: techBrandColors[tech.name] || '#2563eb' }}>
                        <TechIcon iconName={tech.icon} iconPack={(tech as { iconPack?: string }).iconPack} />
                      </div>
                      <span>{tech.name}</span>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 6. CONTACT ──────────────────────────────────────── */}
      <section id="contact" className="w-full max-w-[1100px] px-6 py-24 border-t border-stone-200">
        <div className="pt-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-[550px] relative z-10">
            <h2 className="text-[28px] md:text-[36px] font-medium text-stone-950 tracking-tight mb-2">
              Let&apos;s connect.
            </h2>
            <p className="text-[15px] text-stone-600 leading-relaxed">
              Available for software engineering roles, full-stack projects, and technical collaborations.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 relative z-10">
            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-white text-[13px] font-mono font-bold tracking-tight transition-all rounded-lg shadow-sm cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Email Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Email</span>
                </>
              )}
            </button>

            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 border border-stone-200 bg-white hover:border-stone-400 hover:bg-stone-50 text-stone-800 text-[13px] font-mono font-medium tracking-tight rounded-lg transition-colors shadow-2xs"
            >
              <span>Send Direct Email</span>
              <ArrowUpRight />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
