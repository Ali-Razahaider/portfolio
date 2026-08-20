import { portfolioData } from "@/data/portfolio";
import * as SimpleIcons from "react-icons/si";

// Helper component to render dynamic icons
const TechIcon = ({ iconName }: { iconName: string }) => {
  // @ts-ignore
  const IconComponent = SimpleIcons[iconName];
  if (!IconComponent) return null;
  return <IconComponent className="w-4 h-4" />;
};

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-24 pt-16">
      {/* Hero Section */}
      <section id="about" className="flex flex-col scroll-mt-32">
        <div className="font-mono text-xs text-zinc-500 tracking-wider uppercase mb-8">
          {portfolioData.personal.tagline}
        </div>
        
        <h1 className="font-serif text-5xl md:text-6xl text-zinc-900 mb-10 tracking-tight">
          {portfolioData.personal.heroTitle}
        </h1>
        
        <div className="flex flex-col gap-6 text-[1.1rem] text-zinc-700 leading-loose max-w-4xl">
          {portfolioData.personal.bioParagraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </section>

      {/* Technologies Section */}
      <section className="flex flex-col gap-6 scroll-mt-32 border-t border-zinc-200 pt-16">
        <h3 className="font-mono text-xs text-zinc-500 tracking-wider uppercase">
          Technologies I work with
        </h3>
        <div className="flex flex-wrap gap-3 max-w-4xl">
          {portfolioData.technologies.map((tech, i) => (
            <div 
              key={i} 
              className="flex items-center gap-2 px-4 py-2 bg-white border border-zinc-200 text-zinc-700 text-sm font-medium shadow-sm"
            >
              <TechIcon iconName={tech.icon} />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="flex flex-col gap-10 scroll-mt-32 border-t border-zinc-200 pt-16">
        <h2 className="font-serif text-3xl text-zinc-900">Experience</h2>
        <div className="flex flex-col gap-12 max-w-4xl">
          {portfolioData.experience.map((job) => (
            <div key={job.id} className="flex flex-col gap-3">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 sm:gap-4">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-zinc-900 font-semibold text-lg">{job.role}</h3>
                  <span className="text-zinc-400 hidden sm:inline">·</span>
                  <span className="text-zinc-700 text-lg">{job.company}</span>
                </div>
                <span className="text-sm text-zinc-500 font-mono whitespace-nowrap">{job.date}</span>
              </div>
              <p className="text-zinc-600 text-base leading-relaxed">
                {job.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Selected Projects */}
      <section id="projects" className="flex flex-col gap-10 scroll-mt-32 border-t border-zinc-200 pt-16">
        <h2 className="font-serif text-3xl text-zinc-900">Selected Projects</h2>
        <div className="flex flex-col gap-10 max-w-4xl">
          {portfolioData.projects.map((project) => (
            <div key={project.id} className="group flex flex-col gap-3">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 sm:gap-4">
                <a href={project.link} className="text-zinc-900 font-semibold text-lg underline decoration-zinc-300 underline-offset-4 group-hover:decoration-zinc-900 transition-all">
                  {project.title}
                </a>
                <span className="text-sm text-zinc-500 font-mono whitespace-nowrap">{project.year}</span>
              </div>
              <p className="text-zinc-600 text-base leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="flex flex-col gap-6 mt-8 pt-16 border-t border-zinc-200 scroll-mt-32">
        <h2 className="font-serif text-3xl text-zinc-900">Get in touch</h2>
        <p className="text-lg text-zinc-700 leading-relaxed max-w-2xl">
          I'm currently open for new opportunities. If you're building something interesting, 
          or just want to say hi, feel free to reach out.
        </p>
        <a href={`mailto:${portfolioData.personal.email}`} className="text-zinc-900 font-semibold text-lg hover:text-black transition-colors w-fit underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-900 mt-2">
          {portfolioData.personal.email}
        </a>
      </section>
    </div>
  );
}
