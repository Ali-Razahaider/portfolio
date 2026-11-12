"use client";

import Image from "next/image";
import { portfolioData } from "@/data/portfolio";
import * as SimpleIcons from "react-icons/si";
import * as FA6Icons from "react-icons/fa6";
import { HeroEngineeringDeck } from "@/components/HeroEngineeringDeck";
import { ChevronDown, GitMerge, Download } from "lucide-react";

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

function ProjectCard({ project, preload = false }: { project: ProjectItem; preload?: boolean }) {
  return (
    <article className="project-card">
      <a href={project.liveUrl} target={project.liveUrl.startsWith("#") ? undefined : "_blank"} rel={project.liveUrl.startsWith("#") ? undefined : "noopener noreferrer"} className="project-preview" aria-label={`View ${project.title}`}>
        <Image src={project.image} alt={`${project.title} interface`} fill preload={preload} sizes="(max-width: 767px) 100vw, (max-width: 1100px) 55vw, 580px" className="object-cover object-top transition-transform duration-500" />
        <span className="preview-link"><ArrowUpRight /></span>
      </a>
      <div className="project-content">
        <span className="work-eyebrow">{project.year} / {project.kind}</span>
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <ul className="project-stack" aria-label="Technologies">
          {project.tags.map(tag => <li key={tag}>{tag}</li>)}
        </ul>
        <div className="project-links">
          <a href={project.liveUrl} target={project.liveUrl.startsWith("#") ? undefined : "_blank"} rel={project.liveUrl.startsWith("#") ? undefined : "noopener noreferrer"} className="work-link">{project.liveUrl.startsWith("#") ? "Ask about the build" : "Visit project"} <ArrowUpRight /></a>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="work-link secondary-link"><FA6Icons.FaGithub /> {project.githubLabel ?? "Source code"}</a>
        </div>
        {project.architecture && (
          <details className="work-details">
            <summary>Behind the build <ChevronDown size={15} /></summary>
            <div className="architecture-content">
              <p>{project.architecture.decision}</p>
              <p><strong>Trade-off.</strong> {project.architecture.tradeoff}</p>
              <p className="architecture-flow">{project.architecture.systemFlow.join(" → ")}</p>
            </div>
          </details>
        )}
      </div>
    </article>
  );
}

type Contribution = (typeof portfolioData.openSource)[number];

function PullRequestRow({ item }: { item: Contribution["pullRequests"][number] }) {
  return (
    <a href={item.url} target="_blank" rel="noopener noreferrer" className="pr-row">
      <GitMerge size={17} className="pr-icon" aria-label="Merged" />
      <div className="min-w-0">
        <span className="pr-meta">{item.id ? `#${item.id} · ` : ""}{item.scope}</span>
        <h4>{item.title}</h4>
      </div>
      <ArrowUpRight />
    </a>
  );
}

function OpenSourceCard({ contribution }: { contribution: Contribution }) {
  return (
    <article className="contribution-card">
      <div className="contribution-overview">
        <div className="flex flex-wrap items-center gap-3">
          <span className="contribution-logo" role="img" aria-label={`${contribution.project} logo`} style={{ backgroundImage: `url(${contribution.logoUrl})` }} />
          <h3>{contribution.project}</h3>
          <span className="merged-count"><GitMerge size={13} /> {contribution.stats}</span>
        </div>
        <p className="contribution-date">{contribution.role}{contribution.date ? ` · ${contribution.date}` : ""}</p>
        <p className="contribution-description">{contribution.description}</p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <a href={contribution.githubUrl} target="_blank" rel="noopener noreferrer" className="work-link">All contributions <ArrowUpRight /></a>
          <a href={contribution.liveUrl} target="_blank" rel="noopener noreferrer" className="work-link secondary-link">Visit {contribution.project} <ArrowUpRight /></a>
        </div>
      </div>
      <div className="contribution-list">
        <p className="work-eyebrow mb-3">Recent contributions</p>
        <div className="contribution-scroll custom-scrollbar" tabIndex={0} role="region" aria-label={`${contribution.project} pull requests`}>
          {contribution.pullRequests.map(item => <PullRequestRow key={item.id} item={item} />)}
        </div>
      </div>
    </article>
  );
}


export default function Home() {
  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
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
              I turn ambitious ideas into dependable web, mobile, and AI products.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={scrollToWork}
                className="inline-flex items-center gap-2 px-5 py-3 bg-stone-950 hover:bg-stone-900 active:scale-98 text-white text-[13.5px] font-medium tracking-tight transition-all cursor-pointer rounded-lg shadow-sm"
              >
                View Selected Work <ArrowDown />
              </button>

              <a
                href={portfolioData.personal.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-5 py-3 border border-stone-200 bg-white hover:border-stone-400 hover:bg-stone-50 text-stone-800 text-[13.5px] font-medium transition-all rounded-lg shadow-2xs"
              >
                View GitHub <ArrowUpRight />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive GSAP Architecture & Engineering Console */}
          <div className="lg:col-span-6 w-full">
            <HeroEngineeringDeck />
          </div>

        </div>

      </section>

      <section id="work" className="work-section w-full max-w-[1100px] px-6 py-20 scroll-mt-20">
        <div className="work-section-heading">
          <h2>Selected projects</h2>
          <p>A few things I’ve built, from idea to working product.</p>
        </div>
        <div className="flex flex-col gap-8">
          {portfolioData.projects.map((project, i) => <ProjectCard key={project.id} project={project} preload={i === 0} />)}
        </div>
      </section>

      <section id="opensource" className="work-section w-full max-w-[1100px] px-6 py-20 scroll-mt-20 border-t border-stone-200">
        <div className="work-section-heading">
          <h2>Open source</h2>
          <p>Small improvements that make shared software better.</p>
        </div>
        {portfolioData.openSource.map(contribution => <OpenSourceCard key={contribution.id} contribution={contribution} />)}
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
            href="/ali-resume.pdf"
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
        <div className="contact-shell">
          <div className="max-w-[550px] relative z-10">
            <h2 className="text-[28px] md:text-[36px] font-medium text-stone-950 tracking-tight mb-2">
              Let&apos;s connect.
            </h2>
            <p className="text-[15px] text-stone-600 leading-relaxed">
              Available for software engineering roles, full-stack projects, and technical collaborations.
            </p>
          </div>

          <div className="contact-actions relative z-10">
            <div className="flex flex-wrap items-center gap-3">
              <a href={portfolioData.personal.links.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-stone-900 hover:bg-stone-800 text-white text-[12px] font-mono font-bold tracking-tight transition-all rounded-lg shadow-sm">
                <span>GitHub</span>
                <ArrowUpRight />
              </a>
              <a href={portfolioData.personal.links.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-4 py-2.5 border border-stone-200 bg-white hover:border-stone-400 hover:bg-stone-50 text-stone-800 text-[12px] font-mono font-medium tracking-tight rounded-lg transition-colors shadow-2xs">
                <span>LinkedIn</span>
                <ArrowUpRight />
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
