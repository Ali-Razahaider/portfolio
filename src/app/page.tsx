"use client";

import Image from "next/image";
import { portfolioData } from "@/data/portfolio";
import * as SimpleIcons from "react-icons/si";
import * as FA6Icons from "react-icons/fa6";
import { motion, useMotionValue, useMotionTemplate, useSpring } from "framer-motion";
import { MouseEvent, useEffect, useState } from "react";

const iconPacks: Record<string, Record<string, React.ComponentType>> = {
  si: SimpleIcons as unknown as Record<string, React.ComponentType>,
  fa6: FA6Icons as unknown as Record<string, React.ComponentType>,
};

/* ── Icon helper ──────────────────────────────────────── */
const TechIcon = ({ iconName, iconPack = "si" }: { iconName: string; iconPack?: string }) => {
  const pack = iconPacks[iconPack] || iconPacks.si;
  const IconComponent = pack[iconName];
  if (!IconComponent) return null;
  return <IconComponent />;
};

/* ── Framer Motion variants ───────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number], delay: i * 0.08 },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

/* ── SVG micro-icons ──────────────────────────────────── */
const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 3h6v6" /><path d="m10 14 11-11" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
  </svg>
);

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

/* ── Holographic Project Card ────────────────────────── */
function ProjectCard({ project, index }: { project: any; index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      onMouseMove={handleMouseMove}
      className="group relative flex flex-col rounded-2xl bg-void-card/60 backdrop-blur-xl border border-void-border/50 overflow-hidden hover:bg-void-card/80 hover:border-void-border-hover/80 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(255,90,0,0.15)] transition-all duration-500"
    >
      {/* Holographic Mouse Glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100 z-20"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(255,90,0,0.15),
              transparent 80%
            )
          `,
        }}
      />

      {/* Image */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-void-surface/50 border-b border-void-border/50 z-10">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-top group-hover:scale-[1.05] group-hover:rotate-1 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-void-card/20 group-hover:bg-transparent transition-colors duration-500"></div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 z-10">
        <h3 className="text-void-text font-semibold text-[16px] tracking-[-0.01em] mb-2 leading-snug group-hover:text-void-accent transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-void-muted text-[13px] leading-[1.6] mb-5 flex-1">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag: string, i: number) => (
            <span 
              key={i} 
              className="px-2.5 py-1 text-[11px] font-medium text-void-tag-text bg-void-tag rounded-md border border-void-border group-hover:border-void-border-hover transition-colors duration-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action links */}
        <div className="flex items-center gap-3 pt-5 border-t border-void-border/50">
          {project.liveUrl && (
            <a 
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-30 flex-1 flex justify-center items-center gap-2 px-3 py-2 bg-void-accent text-void-bg text-[12px] font-semibold rounded-lg hover:bg-void-text transition-colors duration-300"
            >
              <ExternalLinkIcon />
              Live Demo
            </a>
          )}
          <a 
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-30 flex-1 flex justify-center items-center gap-2 px-3 py-2 bg-void-surface text-void-text text-[12px] font-medium rounded-lg hover:bg-void-border hover:text-white transition-colors duration-300"
          >
            <GithubIcon />
            Source
          </a>
        </div>
      </div>
    </motion.div>
  );
}



export default function Home() {
  return (
    <div className="flex flex-col items-center">
      
      {/* ── Hero ───────────────────────────────────────── */}
      <section 
        id="about" 
        className="min-h-[75vh] flex flex-col lg:flex-row lg:items-center justify-between w-full max-w-[1100px] px-6 pt-20 pb-24 scroll-mt-20 gap-10"
      >
        <div className="flex-1 flex flex-col justify-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-void-muted text-[15px] font-medium tracking-wide mb-6"
          >
            Software Engineer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-void-text text-[clamp(2.4rem,4.5vw,3.6rem)] font-semibold leading-[1.18] tracking-[-0.02em] mb-7 max-w-[780px]"
          >
            Turning complex problems into simple, reliable software.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-col gap-4 text-[18px] text-void-muted leading-[1.7] max-w-[580px] mb-10"
          >
            {portfolioData.personal.bioParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4 mt-2"
          >
            <a 
              href={`mailto:${portfolioData.personal.email}`} 
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-void-accent text-void-bg text-[13px] font-semibold rounded-full hover:bg-void-text transition-colors duration-300 shadow-[0_0_20px_rgba(255,90,0,0.3)]"
            >
              Get in touch
            </a>
          </motion.div>
        </div>

        {/* Dynamic 3D Isometric Stack (Right Side) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="hidden lg:flex flex-1 items-center justify-center relative w-full max-w-[450px] aspect-square"
          style={{ perspective: 1000 }}
        >
          {/* Ambient Glow */}
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[80%] h-[80%] bg-gradient-to-tr from-void-border-hover/20 to-void-accent/20 rounded-full blur-[80px] z-0"
          />

          <div className="relative w-full h-full flex items-center justify-center z-10" style={{ transformStyle: "preserve-3d" }}>
            
            {/* Bottom Layer - Infrastructure / DB */}
            <motion.div
              initial={{ rotateX: 65, rotateZ: -45, y: 50 }}
              animate={{ y: [50, 30, 50] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-64 h-64 bg-void-card/40 border border-void-surface rounded-3xl overflow-hidden shadow-2xl"
            >
               {/* Grid Pattern overlay */}
               <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#3943B7_1px,transparent_1px),linear-gradient(to_bottom,#3943B7_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]" />
            </motion.div>

            {/* Middle Layer - Logic / API */}
            <motion.div
              initial={{ rotateX: 65, rotateZ: -45, y: -10 }}
              animate={{ y: [-10, -35, -10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute w-56 h-56 bg-void-card/60 backdrop-blur-md border border-void-border-hover/50 rounded-3xl shadow-[0_0_50px_rgba(68,157,209,0.1)] flex items-center justify-center"
            >
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                 className="w-24 h-24 border border-dashed border-void-border-hover rounded-full flex items-center justify-center"
               >
                 <div className="w-12 h-12 bg-void-border-hover/40 rounded-full animate-pulse blur-[2px]" />
               </motion.div>
            </motion.div>

            {/* Top Layer - UI / Frontend */}
            <motion.div
              initial={{ rotateX: 65, rotateZ: -45, y: -70 }}
              animate={{ y: [-70, -100, -70] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute w-48 h-48 bg-gradient-to-tr from-void-accent/20 to-transparent backdrop-blur-xl border border-void-accent/50 rounded-2xl shadow-[0_20px_50px_rgba(120,192,224,0.15)] flex flex-col p-5 gap-4"
            >
               {/* Mock UI Elements */}
               <div className="flex items-center gap-2">
                 <div className="w-2.5 h-2.5 rounded-full bg-void-accent" />
                 <div className="w-2.5 h-2.5 rounded-full bg-void-accent" />
                 <div className="w-2.5 h-2.5 rounded-full bg-void-accent" />
               </div>
               <div className="w-3/4 h-2 bg-void-text/80 rounded-full mt-2" />
               <div className="w-1/2 h-2 bg-void-text/40 rounded-full mb-1" />
               <div className="flex-1 w-full bg-void-surface/80 border border-void-accent/30 rounded-lg" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ── Divider ────────────────────────────────────── */}
      <div className="w-full max-w-[1100px] px-6">
        <div className="h-px bg-void-border"></div>
      </div>

      {/* ── Technologies ───────────────────────────────── */}
      <section className="py-20 w-full max-w-[1100px] px-6 scroll-mt-20">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
          className="text-[12px] font-semibold text-void-muted tracking-[0.15em] uppercase mb-10"
        >
          Technologies
        </motion.p>
        <div className="relative w-full overflow-hidden py-8 flex flex-col gap-6">
          {/* Top Row - Scrolling Left */}
          <motion.div
            className="flex gap-6 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {[...portfolioData.technologies.slice(0, 7), ...portfolioData.technologies.slice(0, 7), ...portfolioData.technologies.slice(0, 7)].map((tech, i) => (
              <div
                key={i}
                className="group flex items-center gap-4 px-8 py-5 rounded-2xl bg-void-surface/50 backdrop-blur-sm border border-void-border-hover/20 hover:border-void-border-hover hover:bg-void-surface transition-all duration-300"
              >
                <div className="text-[24px] text-void-accent">
                  <TechIcon iconName={tech.icon} iconPack={(tech as { iconPack?: string }).iconPack} />
                </div>
                <span className="text-[15px] font-medium text-void-text whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Bottom Row - Scrolling Right */}
          <motion.div
            className="flex gap-6 w-max"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          >
            {[...portfolioData.technologies.slice(7), ...portfolioData.technologies.slice(7), ...portfolioData.technologies.slice(7)].map((tech, i) => (
              <div
                key={i}
                className="group flex items-center gap-4 px-8 py-5 rounded-2xl bg-void-surface/50 backdrop-blur-sm border border-void-border-hover/20 hover:border-void-border-hover hover:bg-void-surface transition-all duration-300"
              >
                <div className="text-[24px] text-void-accent">
                  <TechIcon iconName={tech.icon} iconPack={(tech as { iconPack?: string }).iconPack} />
                </div>
                <span className="text-[15px] font-medium text-void-text whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Fading Edges */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-void-bg to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-void-bg to-transparent pointer-events-none" />
        </div>
      </section>

      {/* ── Divider ────────────────────────────────────── */}
      <div className="w-full max-w-[1100px] px-6">
        <div className="h-px bg-void-border"></div>
      </div>

      {/* ── Experience ─────────────────────────────────── */}
      <section id="experience" className="py-20 w-full max-w-[1100px] px-6 scroll-mt-20">
        <div className="flex items-center justify-between mb-10">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4 }}
            className="text-[12px] font-semibold text-void-muted tracking-[0.15em] uppercase"
          >
            Experience
          </motion.p>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            href="/resume.pdf"
            download="Ali_Raza_Haider_Resume.pdf"
            className="inline-flex items-center gap-2 px-4 py-2 bg-void-card/60 backdrop-blur-md border border-void-border/50 text-void-accent hover:text-void-bg hover:bg-void-accent hover:border-void-accent text-[12px] font-semibold rounded-full transition-all duration-300"
          >
            Download Resume ↓
          </motion.a>
        </div>
        <div className="flex flex-col">
          {portfolioData.experience.map((job, index) => (
            <motion.div
              key={job.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeUp}
              custom={index}
              className={`group flex flex-col md:flex-row md:items-start gap-2 md:gap-0 py-7 ${
                index !== portfolioData.experience.length - 1 ? 'border-b border-void-border' : ''
              }`}
            >
              <div className="md:w-[180px] shrink-0">
                <p className="text-[13px] text-void-muted font-medium tabular-nums">
                  {job.date}
                </p>
              </div>
              <div className="flex-1">
                <h3 className="text-void-text font-semibold text-[16px] tracking-[-0.01em] mb-1">
                  {job.role}
                </h3>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <p className="text-void-accent text-[14px] font-medium">
                    {job.company}
                  </p>
                  {job.location && (
                    <>
                      <span className="text-void-border/60 text-[10px]">•</span>
                      <p className="text-void-muted text-[13px] font-medium">{job.location}</p>
                    </>
                  )}
                </div>
                <p className="text-void-muted text-[15px] leading-[1.7]">
                  {job.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Divider ────────────────────────────────────── */}
      <div className="w-full max-w-[1100px] px-6">
        <div className="h-px bg-void-border"></div>
      </div>

      {/* ── Projects ───────────────────────────────────── */}
      <section id="projects" className="py-20 w-full max-w-[1100px] px-6 scroll-mt-20">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
          className="text-[12px] font-semibold text-void-muted tracking-[0.15em] uppercase mb-10 max-w-[1100px] mx-auto"
        >
          Selected Projects
        </motion.p>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {portfolioData.projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </section>

      {/* ── Footer ─────────────────────────────────────── */}
      <footer className="w-full max-w-[1100px] px-6 pt-24 pb-12 mt-20 border-t border-void-border/50 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <p className="text-[12px] font-semibold text-void-muted tracking-[0.2em] uppercase">
            Get in touch
          </p>
          <a 
            href={`mailto:${portfolioData.personal.email}`}
            className="text-[24px] md:text-[32px] font-bold text-void-text hover:text-void-accent transition-colors duration-300 tracking-[-0.02em]"
          >
            {portfolioData.personal.email}
          </a>
        </div>
        <div className="flex items-center gap-6">
          <a 
            href={portfolioData.personal.links.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[14px] font-medium text-void-muted hover:text-void-text transition-colors duration-300"
          >
            GitHub
          </a>
          <a 
            href={portfolioData.personal.links.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[14px] font-medium text-void-muted hover:text-void-text transition-colors duration-300"
          >
            LinkedIn
          </a>
        </div>
      </footer>

    </div>
  );
}
