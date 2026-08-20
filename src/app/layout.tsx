import type { Metadata } from "next";
import { Inter, Lora, JetBrains_Mono } from "next/font/google";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${portfolioData.personal.name} | Portfolio`,
  description: portfolioData.personal.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable} ${jetbrainsMono.variable} antialiased scroll-smooth`}>
      <body className="min-h-screen bg-[#FAFAFA] text-[#333333] flex flex-col font-sans selection:bg-zinc-200 selection:text-black">
        <div className="max-w-5xl mx-auto w-full px-8 flex flex-col min-h-screen">
          <header className="flex items-center justify-between py-12 sticky top-0 bg-[#FAFAFA]/90 backdrop-blur-md z-50">
            <Link href="/" className="text-zinc-900 font-serif text-xl font-medium tracking-tight hover:text-black transition-colors">
              {portfolioData.personal.name}
            </Link>
            <nav className="flex items-center gap-8 text-sm font-medium text-zinc-500">
              <Link href="#about" className="hover:text-zinc-900 transition-colors">About</Link>
              <Link href="#experience" className="hover:text-zinc-900 transition-colors">Experience</Link>
              <Link href="#projects" className="hover:text-zinc-900 transition-colors">Projects</Link>
            </nav>
          </header>
          <main className="flex-1">
            {children}
          </main>
          <footer className="py-12 mt-20 border-t border-zinc-200 text-sm text-zinc-500 flex justify-between items-center">
            <p>© {new Date().getFullYear()} {portfolioData.personal.name}.</p>
            <div className="flex gap-6">
              <a href={portfolioData.personal.links.github} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 transition-colors">GitHub</a>
              <a href={portfolioData.personal.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 transition-colors">LinkedIn</a>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
