export const portfolioData = {
  personal: {
    name: "Ali Raza Haider",
    role: "Software Engineer",
    tagline: "Software Engineer · Distributed Systems · Problem Solver",
    heroTitle: "Hi, I'm Ali.",
    bioParagraphs: [
      "Building reliable, scalable systems and clean, intuitive software. I enjoy turning complex problems into simple, maintainable solutions."
    ],
    email: "alirazahaider2@gmail.com",
    links: {
      github: "https://github.com/Ali-Razahaider",
      linkedin: "https://linkedin.com/in/alirazahaider",
      leetcode: "https://leetcode.com/u/08lKiFBnOp/"
    }
  },
  technologies: [
    { name: "JavaScript", icon: "SiJavascript" },
    { name: "TypeScript", icon: "SiTypescript" },
    { name: "Python", icon: "SiPython" },
    { name: "C++", icon: "SiCplusplus" },
    { name: "React.js", icon: "SiReact" },
    { name: "Next.js", icon: "SiNextdotjs" },
    { name: "Node.js", icon: "SiNodedotjs" },
    { name: "Express", icon: "SiExpress" },
    { name: "FastAPI", icon: "SiFastapi" },
    { name: "MongoDB", icon: "SiMongodb" },
    { name: "PostgreSQL", icon: "SiPostgresql" },
    { name: "Docker", icon: "SiDocker" },
    { name: "AWS", icon: "FaAws", iconPack: "fa6" }
  ],
  experience: [
    {
      id: 1,
      company: "DataExperts360",
      role: "Backend Developer (Contract)",
      date: "Feb 2026 — Present",
      location: "Queensland, Australia (Remote)",
      description: "Designing and securing authentication flows and RESTful APIs for scalable backend systems.",
      tags: ["Node.js", "Express", "JWT", "MongoDB"]
    },
    {
      id: 2,
      company: "Cyphershield Inc",
      role: "Software Engineering Intern",
      date: "Jul 2025 — Sep 2025",
      location: "United States (Remote)",
      description: "Built and delivered a production-ready frontend using React, Next.js, and shadcn/ui.",
      tags: ["React", "Next.js", "TailwindCSS", "TypeScript"]
    }
  ],
  projects: [
    {
      id: 1,
      title: "Multi-vendor eCommerce Store",
      year: "2025",
      image: "/project-ecommerce.png",
      description: "Full-stack multi-vendor eCommerce platform with admin, seller, and user roles. Real-time order updates via Socket.io.",
      tags: ["React", "Node.js", "MongoDB", "Socket.io"],
      liveUrl: "https://multivendor-olive.vercel.app/",
      githubUrl: "https://github.com/Ali-Razahaider/multivendor"
    },
    {
      id: 2,
      title: "Mindly (AI Learning Workspace)",
      year: "2026",
      image: "/project-mindly.png",
      description: "AI-powered learning workspace featuring a custom knowledge base, intelligent query assistant, and multimedia content support.",
      tags: ["Next.js", "FastAPI", "PostgreSQL", "Redis"],
      liveUrl: "https://mindly.one",
      githubUrl: "https://github.com/mindly-knowledge-management"
    },
    {
      id: 3,
      title: "Pathment (Open Source)",
      year: "2025",
      image: "/project-opensource.png",
      description: "Contributed 8+ merged pull requests resolving bugs across the backend and frontend of a production-scale codebase.",
      tags: ["Open Source", "TypeScript", "React"],
      liveUrl: "https://pathment.me",
      githubUrl: "https://github.com/pathment/pathment/"
    }
  ]
};
