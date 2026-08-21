import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
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
      <body className="min-h-screen font-[family-name:var(--font-inter)]">
        
        {/* Header */}
        <header className="w-full fixed top-6 z-50 flex justify-center px-6 pointer-events-none">
          <div className="pointer-events-auto bg-void-nav/90 backdrop-blur-xl border border-void-border rounded-full p-1.5 flex items-center shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <Link 
              href="/" 
              className="text-void-text font-semibold text-[13px] tracking-wide px-5 py-2 hover:text-void-accent transition-colors duration-300"
            >
              {portfolioData.personal.name}
            </Link>
            
            <div className="w-px h-5 bg-void-border mx-1"></div>
            
            <nav className="flex items-center text-[13px] font-medium text-void-muted tracking-wide">
              <Link href="#experience" className="hover:text-void-text hover:bg-void-surface px-5 py-2 rounded-full transition-all duration-300">Experience</Link>
              <Link href="#projects" className="hover:text-void-text hover:bg-void-surface px-5 py-2 rounded-full transition-all duration-300">Projects</Link>
              <a 
                href={`mailto:${portfolioData.personal.email}`} 
                className="hover:text-void-text hover:bg-void-surface px-5 py-2 rounded-full transition-all duration-300"
              >
                Contact
              </a>
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
