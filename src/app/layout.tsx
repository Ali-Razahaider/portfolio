import type { Metadata } from "next";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import "./globals.css";

export const metadata: Metadata = {
  title: `${portfolioData.personal.name} — Software Engineer`,
  description: portfolioData.personal.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased scroll-smooth">
      <body className="min-h-screen font-sans bg-void-bg text-void-text selection:bg-void-accent/15 selection:text-void-accent relative">
        <div className="absolute inset-0 bg-radial-glow pointer-events-none fixed z-0"></div>
        
        {/* Floating Tactile Glass Pill Header */}
        <header className="fixed top-3.5 sm:top-5 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1.5rem)] sm:w-[calc(100%-2.5rem)] max-w-[820px]">
          <nav className="w-full h-12 px-3 sm:px-4 rounded-full bg-white/90 backdrop-blur-xl border border-stone-200 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex items-center justify-between gap-2">
            
            {/* Left: Brand Monogram */}
            <Link 
              href="/" 
              className="flex items-center px-2.5 py-1 rounded-full text-[13px] font-mono font-bold text-stone-900 hover:text-void-accent transition-colors shrink-0 group"
            >
              <span className="tracking-tight hidden sm:inline">{portfolioData.personal.name}</span>
              <span className="tracking-tight sm:hidden">AR</span>
            </Link>
            
            {/* Center: Tactile Nav Links */}
            <div className="flex items-center gap-0.5 sm:gap-1 text-[12px] sm:text-[12.5px] font-medium text-stone-600">
              <Link 
                href="/#work" 
                className="px-2.5 sm:px-3 py-1 rounded-full hover:text-stone-900 hover:bg-stone-100/70 active:scale-95 transition-all"
              >
                Work
              </Link>
              <Link 
                href="/#opensource" 
                className="px-2.5 sm:px-3 py-1 rounded-full hover:text-stone-900 hover:bg-stone-100/70 active:scale-95 transition-all"
              >
                OSS
              </Link>
              <Link 
                href="/#experience" 
                className="px-2.5 sm:px-3 py-1 rounded-full hover:text-stone-900 hover:bg-stone-100/70 active:scale-95 transition-all hidden xs:inline-block"
              >
                Experience
              </Link>
              <Link 
                href="/#skills" 
                className="px-2.5 sm:px-3 py-1 rounded-full hover:text-stone-900 hover:bg-stone-100/70 active:scale-95 transition-all hidden md:inline-block"
              >
                Toolkit
              </Link>
              <Link 
                href="/#contact" 
                className="px-2.5 sm:px-3 py-1 rounded-full hover:text-stone-900 hover:bg-stone-100/70 active:scale-95 transition-all"
              >
                Contact
              </Link>
            </div>
            
            {/* Right: Quick Action Dock */}
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              <div className="hidden sm:flex items-center gap-1 text-[14px] text-stone-500">
                <a 
                  href={portfolioData.personal.links.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="GitHub" 
                  className="p-1.5 rounded-full hover:text-stone-900 hover:bg-stone-100 transition-colors"
                >
                  <FaGithub />
                </a>
                <a 
                  href={portfolioData.personal.links.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="LinkedIn" 
                  className="p-1.5 rounded-full hover:text-stone-900 hover:bg-stone-100 transition-colors"
                >
                  <FaLinkedin />
                </a>
              </div>

              <a 
                href="/resume.pdf"
                download="Ali_Raza_Resume.pdf"
                className="inline-flex items-center gap-1 text-[11.5px] font-mono font-semibold px-3 py-1 rounded-full bg-stone-900 text-stone-50 hover:bg-stone-800 active:scale-95 transition-all shadow-sm"
              >
                Resume ↓
              </a>
            </div>

          </nav>
        </header>
        
        <main className="flex-1 w-full pt-20 sm:pt-24">
          {children}
        </main>
        
        {/* Flat Minimalist Footer */}
        <footer className="w-full border-t border-stone-200 py-12 mt-24">
          <div className="max-w-[1100px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-stone-500">
            <p>
              © {new Date().getFullYear()} {portfolioData.personal.name}
            </p>
            <div className="flex items-center gap-6">
              <a 
                href={portfolioData.personal.links.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-stone-900 transition-colors"
              >
                GitHub
              </a>
              <a 
                href={portfolioData.personal.links.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-stone-900 transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href={`mailto:${portfolioData.personal.email}`} 
                className="hover:text-stone-900 transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
