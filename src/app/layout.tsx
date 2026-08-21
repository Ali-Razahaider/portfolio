import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import { SiLeetcode } from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

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
    <html lang="en" className={`${inter.variable} antialiased scroll-smooth`}>
      <body className="min-h-screen font-[family-name:var(--font-inter)] relative">
        
        {/* Ambient Mesh Gradient Background */}
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-void-surface/30 blur-[120px] rounded-full mix-blend-screen" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-void-border-hover/20 blur-[120px] rounded-full mix-blend-screen" />
          <div className="absolute top-[40%] left-[30%] w-[30%] h-[30%] bg-void-accent/10 blur-[100px] rounded-full mix-blend-screen" />
        </div>

        {/* Header */}
        <header className="w-full fixed top-0 z-50 bg-void-bg/80 backdrop-blur-xl border-b border-void-border">
          <div className="max-w-[1100px] mx-auto px-6 h-16 flex items-center justify-between">
            <Link 
              href="/" 
              className="text-void-text font-bold text-[15px] tracking-wide hover:text-void-accent transition-colors duration-300"
            >
              {portfolioData.personal.name}
            </Link>
            
            <nav className="flex items-center gap-6 text-[13px] font-medium text-void-muted tracking-wide">
              <div className="hidden sm:flex items-center gap-6">
                <Link href="/#experience" className="hover:text-void-text transition-colors duration-300">Experience</Link>
                <Link href="/#projects" className="hover:text-void-text transition-colors duration-300">Projects</Link>
                <a href={`mailto:${portfolioData.personal.email}`} className="hover:text-void-text transition-colors duration-300">Contact</a>
              </div>
              
              <div className="hidden sm:block w-px h-4 bg-void-border"></div>
              
              <div className="flex items-center gap-4">
                <a href={portfolioData.personal.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-[16px] text-void-muted hover:text-void-accent transition-colors duration-300"><FaGithub /></a>
                <a href={portfolioData.personal.links.leetcode} target="_blank" rel="noopener noreferrer" aria-label="LeetCode" className="text-[16px] text-void-muted hover:text-void-accent transition-colors duration-300"><SiLeetcode /></a>
                <a href={portfolioData.personal.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[16px] text-void-muted hover:text-void-accent transition-colors duration-300"><FaLinkedin /></a>
              </div>
            </nav>
          </div>
        </header>
        
        <main className="flex-1 w-full">
          {children}
        </main>
        
        {/* Footer */}
        <footer className="w-full mt-32 border-t border-void-border/60">
          <div className="max-w-[1100px] mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[13px] text-void-muted">
              © {new Date().getFullYear()} {portfolioData.personal.name}
            </p>
            <div className="flex items-center gap-6">
              <a 
                href={portfolioData.personal.links.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[13px] text-void-muted hover:text-void-text transition-colors duration-300"
              >
                GitHub
              </a>
              <a 
                href={portfolioData.personal.links.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[13px] text-void-muted hover:text-void-text transition-colors duration-300"
              >
                LinkedIn
              </a>
              <a 
                href={`mailto:${portfolioData.personal.email}`} 
                className="text-[13px] text-void-muted hover:text-void-text transition-colors duration-300"
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
