"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { 
  Layers, 
  GitMerge, 
  Briefcase, 
  Cpu, 
  Mail,
  Code2
} from "lucide-react";

export function HeroEngineeringDeck() {

  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  
  // Rings
  const outerRingRef = useRef<HTMLDivElement>(null);
  const innerRingRef = useRef<HTMLDivElement>(null);

  // Counter-rotating items
  const outerItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const innerItemsRef = useRef<(HTMLDivElement | null)[]>([]);

  // GSAP Tweens references
  const outerTweenRef = useRef<gsap.core.Tween | null>(null);
  const innerTweenRef = useRef<gsap.core.Tween | null>(null);
  const counterOuterTweensRef = useRef<gsap.core.Tween[]>([]);
  const counterInnerTweensRef = useRef<gsap.core.Tween[]>([]);

  // Initialize GSAP Revolving Animations
  useEffect(() => {
    if (!outerRingRef.current || !innerRingRef.current) return;

    // Clean any prior animations
    outerTweenRef.current?.kill();
    innerTweenRef.current?.kill();
    counterOuterTweensRef.current.forEach(t => t.kill());
    counterInnerTweensRef.current.forEach(t => t.kill());

    // 1. Outer Ring Rotation (Clockwise, 32s loop)
    outerTweenRef.current = gsap.to(outerRingRef.current, {
      rotation: 360,
      duration: 32,
      repeat: -1,
      ease: "none"
    });

    // Outer Items Counter-Rotation (keeps text & icons upright)
    const validOuter = outerItemsRef.current.filter(Boolean);
    counterOuterTweensRef.current = validOuter.map(el => 
      gsap.to(el, {
        rotation: -360,
        duration: 32,
        repeat: -1,
        ease: "none"
      })
    );

    // 2. Inner Ring Rotation (Counter-Clockwise, 22s loop)
    innerTweenRef.current = gsap.to(innerRingRef.current, {
      rotation: -360,
      duration: 22,
      repeat: -1,
      ease: "none"
    });

    // Inner Items Counter-Rotation
    const validInner = innerItemsRef.current.filter(Boolean);
    counterInnerTweensRef.current = validInner.map(el => 
      gsap.to(el, {
        rotation: 360,
        duration: 22,
        repeat: -1,
        ease: "none"
      })
    );

    return () => {
      outerTweenRef.current?.kill();
      innerTweenRef.current?.kill();
      counterOuterTweensRef.current.forEach(t => t.kill());
      counterInnerTweensRef.current.forEach(t => t.kill());
    };
  }, []);

  // Hover Slowdown
  const handleStageMouseEnter = () => {
    const allTweens = [
      outerTweenRef.current,
      innerTweenRef.current,
      ...counterOuterTweensRef.current,
      ...counterInnerTweensRef.current
    ];
    allTweens.forEach(t => {
      if (t) gsap.to(t, { timeScale: 0.2, duration: 0.4 });
    });
  };

  const handleStageMouseLeave = () => {
    const allTweens = [
      outerTweenRef.current,
      innerTweenRef.current,
      ...counterOuterTweensRef.current,
      ...counterInnerTweensRef.current
    ];
    allTweens.forEach(t => {
      if (t) gsap.to(t, { timeScale: 1, duration: 0.5 });
    });

    // Reset 3D tilt
    if (stageRef.current) {
      gsap.to(stageRef.current, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.5,
        ease: "power2.out"
      });
    }
  };

  // 3D Parallax Tilt on Mouse Move
  const handleStageMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(stageRef.current, {
      rotateX: -y * 0.04,
      rotateY: x * 0.04,
      duration: 0.25,
      ease: "power1.out"
    });
  };

  // Smooth Scroll on Click
  const handleNodeClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full max-w-[440px] mx-auto flex items-center justify-center font-sans select-none"
    >


      {/* ── Revolving Orbital Stage (Free-Floating, No Box/Card) ── */}
      <div 
        ref={stageRef}
        onMouseEnter={handleStageMouseEnter}
        onMouseLeave={handleStageMouseLeave}
        onMouseMove={handleStageMouseMove}
        style={{ perspective: 1000 }}
        className="relative w-full aspect-square min-h-[350px] sm:min-h-[420px] flex items-center justify-center select-none cursor-grab active:cursor-grabbing"
      >
        
        {/* Subtle Background Orbital SVG Rings */}
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none text-stone-300/80" 
          viewBox="0 0 400 400"
        >
          {/* Outer Ring */}
          <circle 
            cx="200" 
            cy="200" 
            r="155" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1" 
            strokeDasharray="4 6" 
            className="opacity-70"
          />
          {/* Inner Ring */}
          <circle 
            cx="200" 
            cy="200" 
            r="105" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1" 
            strokeDasharray="3 5" 
            className="opacity-60"
          />
          {/* Center Guide Ring */}
          <circle 
            cx="200" 
            cy="200" 
            r="55" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="0.75" 
            className="opacity-40"
          />
        </svg>

        {/* ── Central Hub / Anchor ── */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="relative z-20 w-14 h-14 sm:w-[68px] sm:h-[68px] rounded-full bg-white border border-stone-200 shadow-sm flex flex-col items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-200 group"
          title="Scroll to Top"
        >
          <Code2 className="w-5 h-5 text-stone-700 group-hover:text-blue-600 transition-colors" />
          <span className="text-[8.5px] font-mono text-stone-400 uppercase tracking-widest mt-0.5 font-medium">CORE</span>
        </div>

        {/* ── Outer Orbital Container (Radius ~155px) ── */}
        <div 
          ref={outerRingRef}
          className="absolute w-[310px] h-[310px] rounded-full pointer-events-none"
        >
          
          {/* Node 1: Systems (#work) at 0° (Right) */}
          <div 
            style={{ top: "50%", left: "100%", transform: "translate(-50%, -50%)" }}
            className="absolute pointer-events-auto"
          >
            <div ref={(el) => { outerItemsRef.current[0] = el; }}>
              <button
                onClick={() => handleNodeClick("work")}
                className="group flex items-center gap-1.5 px-2.5 py-1 rounded-lg border bg-white/95 backdrop-blur-md shadow-2xs hover:shadow-xs hover:scale-105 transition-all duration-200 cursor-pointer border-stone-200 hover:border-blue-400"
              >
                <Layers className="w-3 h-3 text-blue-500" />
                <span className="text-[10.5px] font-medium text-stone-600 group-hover:text-blue-600 tracking-wide">
                  Systems
                </span>
              </button>
            </div>
          </div>

          {/* Decorative Shape 1: Revolving Wireframe Diamond at 60° */}
          <div 
            style={{ 
              top: `${50 + 50 * Math.sin(Math.PI / 3)}%`, 
              left: `${50 + 50 * Math.cos(Math.PI / 3)}%`, 
              transform: "translate(-50%, -50%)" 
            }}
            className="absolute pointer-events-none opacity-40"
          >
            <div ref={(el) => { outerItemsRef.current[1] = el; }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.5">
                <polygon points="12,2 22,12 12,22 2,12" />
              </svg>
            </div>
          </div>

          {/* Node 2: Open Source (#opensource) at 120° */}
          <div 
            style={{ 
              top: `${50 + 50 * Math.sin((2 * Math.PI) / 3)}%`, 
              left: `${50 + 50 * Math.cos((2 * Math.PI) / 3)}%`, 
              transform: "translate(-50%, -50%)" 
            }}
            className="absolute pointer-events-auto"
          >
            <div ref={(el) => { outerItemsRef.current[2] = el; }}>
              <button
                onClick={() => handleNodeClick("opensource")}
                className="group flex items-center gap-1.5 px-2.5 py-1 rounded-lg border bg-white/95 backdrop-blur-md shadow-2xs hover:shadow-xs hover:scale-105 transition-all duration-200 cursor-pointer border-stone-200 hover:border-purple-400"
              >
                <GitMerge className="w-3 h-3 text-purple-500" />
                <span className="text-[10.5px] font-medium text-stone-600 group-hover:text-purple-600 tracking-wide">
                  Open Source
                </span>
              </button>
            </div>
          </div>

          {/* Decorative Shape 2: Revolving Wireframe Cube at 180° */}
          <div 
            style={{ top: "50%", left: "0%", transform: "translate(-50%, -50%)" }}
            className="absolute pointer-events-none opacity-40"
          >
            <div ref={(el) => { outerItemsRef.current[3] = el; }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9333ea" strokeWidth="1.5">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
              </svg>
            </div>
          </div>

          {/* Node 3: Experience (#experience) at 240° */}
          <div 
            style={{ 
              top: `${50 + 50 * Math.sin((4 * Math.PI) / 3)}%`, 
              left: `${50 + 50 * Math.cos((4 * Math.PI) / 3)}%`, 
              transform: "translate(-50%, -50%)" 
            }}
            className="absolute pointer-events-auto"
          >
            <div ref={(el) => { outerItemsRef.current[4] = el; }}>
              <button
                onClick={() => handleNodeClick("experience")}
                className="group flex items-center gap-1.5 px-2.5 py-1 rounded-lg border bg-white/95 backdrop-blur-md shadow-2xs hover:shadow-xs hover:scale-105 transition-all duration-200 cursor-pointer border-stone-200 hover:border-amber-400"
              >
                <Briefcase className="w-3 h-3 text-amber-500" />
                <span className="text-[10.5px] font-medium text-stone-600 group-hover:text-amber-700 tracking-wide">
                  Experience
                </span>
              </button>
            </div>
          </div>

          {/* Decorative Shape 3: Rotating Ring at 300° */}
          <div 
            style={{ 
              top: `${50 + 50 * Math.sin((5 * Math.PI) / 3)}%`, 
              left: `${50 + 50 * Math.cos((5 * Math.PI) / 3)}%`, 
              transform: "translate(-50%, -50%)" 
            }}
            className="absolute pointer-events-none opacity-40"
          >
            <div ref={(el) => { outerItemsRef.current[5] = el; }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(30 12 12)" />
              </svg>
            </div>
          </div>

        </div>

        {/* ── Inner Orbital Container (Radius ~105px) ── */}
        <div 
          ref={innerRingRef}
          className="absolute w-[210px] h-[210px] rounded-full pointer-events-none"
        >
          
          {/* Node 4: Stack (#skills) at 45° */}
          <div 
            style={{ 
              top: `${50 + 50 * Math.sin(Math.PI / 4)}%`, 
              left: `${50 + 50 * Math.cos(Math.PI / 4)}%`, 
              transform: "translate(-50%, -50%)" 
            }}
            className="absolute pointer-events-auto"
          >
            <div ref={(el) => { innerItemsRef.current[0] = el; }}>
              <button
                onClick={() => handleNodeClick("skills")}
                className="group flex items-center gap-1 px-2 py-0.5 rounded-lg border bg-white/95 backdrop-blur-md shadow-2xs hover:shadow-xs hover:scale-105 transition-all duration-200 cursor-pointer border-stone-200 hover:border-indigo-400"
              >
                <Cpu className="w-2.5 h-2.5 text-indigo-500" />
                <span className="text-[10px] font-medium text-stone-600 group-hover:text-indigo-600 tracking-wide">
                  Stack
                </span>
              </button>
            </div>
          </div>

          {/* Decorative Shape 4: Small Orbiting Cross at 135° */}
          <div 
            style={{ 
              top: `${50 + 50 * Math.sin((3 * Math.PI) / 4)}%`, 
              left: `${50 + 50 * Math.cos((3 * Math.PI) / 4)}%`, 
              transform: "translate(-50%, -50%)" 
            }}
            className="absolute pointer-events-none opacity-40"
          >
            <div ref={(el) => { innerItemsRef.current[1] = el; }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2">
                <line x1="12" y1="2" x2="12" y2="22" />
                <line x1="2" y1="12" x2="22" y2="12" />
              </svg>
            </div>
          </div>

          {/* Node 5: Contact (#contact) at 225° */}
          <div 
            style={{ 
              top: `${50 + 50 * Math.sin((5 * Math.PI) / 4)}%`, 
              left: `${50 + 50 * Math.cos((5 * Math.PI) / 4)}%`, 
              transform: "translate(-50%, -50%)" 
            }}
            className="absolute pointer-events-auto"
          >
            <div ref={(el) => { innerItemsRef.current[2] = el; }}>
              <button
                onClick={() => handleNodeClick("contact")}
                className="group flex items-center gap-1 px-2 py-0.5 rounded-lg border bg-white/95 backdrop-blur-md shadow-2xs hover:shadow-xs hover:scale-105 transition-all duration-200 cursor-pointer border-stone-200 hover:border-emerald-400"
              >
                <Mail className="w-2.5 h-2.5 text-emerald-500" />
                <span className="text-[10px] font-medium text-stone-600 group-hover:text-emerald-700 tracking-wide">
                  Contact
                </span>
              </button>
            </div>
          </div>

          {/* Decorative Shape 5: Rotating Triangle at 315° */}
          <div 
            style={{ 
              top: `${50 + 50 * Math.sin((7 * Math.PI) / 4)}%`, 
              left: `${50 + 50 * Math.cos((7 * Math.PI) / 4)}%`, 
              transform: "translate(-50%, -50%)" 
            }}
            className="absolute pointer-events-none opacity-40"
          >
            <div ref={(el) => { innerItemsRef.current[3] = el; }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2">
                <polygon points="12,3 22,21 2,21" />
              </svg>
            </div>
          </div>

        </div>



      </div>
    </div>
  );
}
