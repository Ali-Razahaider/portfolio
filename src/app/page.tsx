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
    <div className="flex flex-col">
      {/* Hero Section */}
      <section id="about" className="w-full bg-white py-24 sm:py-32 scroll-mt-20">
        <div className="max-w-5xl mx-auto w-full px-8 flex flex-col">
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
        </div>
      </section>

      {/* Technologies Section */}
      <section className="w-full bg-zinc-50 py-24 border-y border-zinc-100 scroll-mt-20">
        <div className="max-w-5xl mx-auto w-full px-8 flex flex-col gap-8">
          <h3 className="font-mono text-xs text-zinc-500 tracking-wider uppercase">
            Technologies I work with
          </h3>
          <div className="flex flex-wrap gap-3 max-w-4xl">
            {portfolioData.technologies.map((tech, i) => (
              <div 
                key={i} 
                className="flex items-center gap-2 px-4 py-2 bg-white border border-zinc-200 text-zinc-700 text-sm font-medium shadow-sm hover:border-zinc-300 transition-colors"
              >
                <TechIcon iconName={tech.icon} />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="w-full bg-white py-24 sm:py-32 scroll-mt-20">
        <div className="max-w-5xl mx-auto w-full px-8 flex flex-col gap-16">
          <h2 className="font-serif text-3xl text-zinc-900">Experience</h2>
          <div className="flex flex-col gap-16 max-w-4xl">
            {portfolioData.experience.map((job) => (
              <div key={job.id} className="flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 sm:gap-4">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-zinc-900 font-semibold text-xl">{job.role}</h3>
                    <span className="text-zinc-300 hidden sm:inline">|</span>
                    <span className="text-zinc-700 text-lg">{job.company}</span>
                  </div>
                  <span className="text-sm text-zinc-500 font-mono whitespace-nowrap bg-zinc-100 px-3 py-1 rounded-full">{job.date}</span>
                </div>
                <p className="text-zinc-600 text-[1.05rem] leading-relaxed">
                  {job.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Projects */}
      <section id="projects" className="w-full bg-zinc-50 py-24 sm:py-32 border-y border-zinc-100 scroll-mt-20">
        <div className="max-w-5xl mx-auto w-full px-8 flex flex-col gap-16">
          <h2 className="font-serif text-3xl text-zinc-900">Selected Projects</h2>
          <div className="flex flex-col gap-16 max-w-4xl">
            {portfolioData.projects.map((project) => (
              <div key={project.id} className="group flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 sm:gap-4">
                  <a href={project.link} className="text-zinc-900 font-semibold text-xl underline decoration-zinc-300 underline-offset-4 group-hover:decoration-zinc-900 transition-all">
                    {project.title}
                  </a>
                  <span className="text-sm text-zinc-500 font-mono whitespace-nowrap bg-white px-3 py-1 rounded-full border border-zinc-200">{project.year}</span>
                </div>
                <p className="text-zinc-600 text-[1.05rem] leading-relaxed">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="w-full bg-zinc-950 py-32 scroll-mt-20">
        <div className="max-w-5xl mx-auto w-full px-8 flex flex-col gap-8">
          <h2 className="font-serif text-4xl text-white">Get in touch</h2>
          <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl">
            I'm currently open for new opportunities. If you're building something interesting, 
            or just want to say hi, feel free to reach out.
          </p>
          <a href={`mailto:${portfolioData.personal.email}`} className="text-white font-semibold text-xl transition-colors w-fit underline decoration-zinc-600 underline-offset-8 hover:decoration-white mt-4">
            {portfolioData.personal.email}
          </a>
        </div>
      </section>
    </div>
  );
}
