export const portfolioData = {
  personal: {
    name: "Ali Raza",
    role: "Software Engineer",
    tagline: "Software Engineer · Full-Stack Web Development",
    heroTitle: "Hi, I'm Ali Raza.",
    bioParagraphs: [
      "I build full-stack web applications, clean APIs, and responsive interfaces. I enjoy writing clean TypeScript, React, and Python, contributing to open source, and solving practical problems."
    ],
    email: "alirazahaider2@gmail.com",
    links: {
      github: "https://github.com/Ali-Razahaider",
      linkedin: "https://linkedin.com/in/alirazahaider",
      leetcode: "https://leetcode.com/u/08lKiFBnOp/"
    }
  },
  technologies: [
    { name: "JavaScript", icon: "SiJavascript", category: "Languages" },
    { name: "TypeScript", icon: "SiTypescript", category: "Languages" },
    { name: "Python", icon: "SiPython", category: "Languages" },
    { name: "C++", icon: "SiCplusplus", category: "Languages" },
    { name: "React.js", icon: "SiReact", category: "Frontend" },
    { name: "Next.js", icon: "SiNextdotjs", category: "Frontend" },
    { name: "TailwindCSS", icon: "SiTailwindcss", category: "Frontend" },
    { name: "Node.js", icon: "SiNodedotjs", category: "Backend" },
    { name: "Express", icon: "SiExpress", category: "Backend" },
    { name: "FastAPI", icon: "SiFastapi", category: "Backend" },
    { name: "MongoDB", icon: "SiMongodb", category: "Database & Cloud" },
    { name: "PostgreSQL", icon: "SiPostgresql", category: "Database & Cloud" },
    { name: "Redis", icon: "SiRedis", category: "Database & Cloud" },
    { name: "Docker", icon: "SiDocker", category: "Database & Cloud" },
    { name: "AWS", icon: "FaAws", iconPack: "fa6", category: "Database & Cloud" }
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
  openSource: [
    {
      id: 1,
      project: "Pathment",
      org: "pathment",
      role: "Open Source Contributor",
      date: "2025 — 2026",
      stats: "8 Merged PRs",
      description: "Contributed 8 merged pull requests resolving backend query bottlenecks, authentication race conditions, and frontend UI accessibility across a production-scale SaaS platform.",
      highlights: [
        "Eliminated N+1 query patterns in core task services to reduce DB load",
        "Resolved 2FA authentication state synchronization bugs",
        "Redesigned task management views to separate active and completed items"
      ],
      tags: ["Open Source", "TypeScript", "React", "Node.js", "MongoDB"],
      githubUrl: "https://github.com/pathment/pathment/pulls?q=is%3Apr+author%3AAli-Razahaider+is%3Aclosed+review%3Aapproved",
      repoUrl: "https://github.com/pathment/pathment",
      liveUrl: "https://pathment.me",
      pullRequests: [
        {
          id: 623,
          title: "feat(mentee tasks): split My Tasks into Active and Completed views",
          url: "https://github.com/pathment/pathment/pull/623",
          status: "Merged",
          mergedAt: "Aug 2026",
          scope: "UI & Tasks",
          shortDescription: "Separated finished tasks from actionable ones with an Active/Completed toggle to unclutter mentee dashboards."
        },
        {
          id: 583,
          title: "Perf/eliminate n+1 query pattern in task service",
          url: "https://github.com/pathment/pathment/pull/583",
          status: "Merged",
          mergedAt: "Aug 2026",
          scope: "Performance",
          shortDescription: "Eliminated N+1 database queries in roadmap task retrieval by batch-resolving mentee assignments, significantly reducing query load."
        },
        {
          id: 574,
          title: "fix: exclude completed tasks from task list in the daily log view",
          url: "https://github.com/pathment/pathment/pull/574",
          status: "Merged",
          mergedAt: "Jul 2026",
          scope: "Filtering",
          shortDescription: "Updated task filtering in daily log views to exclude completed items, ensuring mentees only see pending work."
        },
        {
          id: 406,
          title: "refactor: update text color for better contrast in SelectMenu component",
          url: "https://github.com/pathment/pathment/pull/406",
          status: "Merged",
          mergedAt: "Jun 2026",
          scope: "Accessibility",
          shortDescription: "Fixed low-contrast text in filter dropdown menus to meet WCAG accessibility standards."
        },
        {
          id: 113,
          title: "Fix/Multiple Tasks Created",
          url: "https://github.com/pathment/pathment/pull/113",
          status: "Merged",
          mergedAt: "May 2026",
          scope: "Concurrency",
          shortDescription: "Prevented duplicate task records by adding submission state guards against rapid repeated clicks."
        },
        {
          id: 78,
          title: "Feature/replace alertbox with responsive modal",
          url: "https://github.com/pathment/pathment/pull/78",
          status: "Merged",
          mergedAt: "May 2026",
          scope: "UX & Modals",
          shortDescription: "Replaced native browser alert dialogues with responsive, accessible modal components for mentor and mentee actions."
        },
        {
          id: 75,
          title: "Fix: user reference in 2FA verification handling",
          url: "https://github.com/pathment/pathment/pull/75",
          status: "Merged",
          mergedAt: "May 2026",
          scope: "Auth & Security",
          shortDescription: "Fixed 2FA verification failures by validating user authentication against fresh API response data rather than stale component state."
        },
        {
          id: 46,
          title: "fix/Dynamically set task points using pointsBase in mentor feedback modal",
          url: "https://github.com/pathment/pathment/pull/46",
          status: "Merged",
          mergedAt: "May 2026",
          scope: "Data Binding",
          shortDescription: "Bound task points to dynamic roadmap configuration values rather than a hardcoded default in mentor approval modals."
        }
      ]
    }
  ],
  projects: [
    {
      id: 1,
      title: "Mindly — AI Knowledge Workspace",
      year: "2026",
      image: "/project-mindly.png",
      description: "AI-powered knowledge management workspace that ingests research documents, notes, and technical files into an interactive, queryable knowledge base using a high-performance RAG pipeline.",
      tags: ["Next.js", "FastAPI", "PostgreSQL", "Redis", "Docker"],
      architecture: {
        decision: "Built asynchronous background parser workers in FastAPI to chunk and embed documents into 512-token vector arrays paired with a dedicated Redis embedding cache.",
        tradeoff: "Initial document processing takes 2-3 seconds, but ensures sub-100ms latency during live query streaming.",
        systemFlow: ["Next.js App Router", "FastAPI Workers", "PostgreSQL (pgvector)", "Redis Cache", "Streaming Engine"]
      },
      liveUrl: "https://mindly.one",
      githubUrl: "https://github.com/mindly-knowledge-management",
      metrics: [
        { label: "Query Latency", val: "<100ms" },
        { label: "Vector Index", val: "pgvector" },
        { label: "Caching Layer", val: "Redis" }
      ]
    },
    {
      id: 2,
      title: "Multi-vendor eCommerce Store",
      year: "2025",
      image: "/project-ecommerce.png",
      description: "Full-stack multi-vendor eCommerce platform with admin, seller, and user role separation. Features real-time order tracking and dynamic inventory management via Socket.io.",
      tags: ["React", "Node.js", "MongoDB", "Socket.io", "TailwindCSS"],
      architecture: {
        decision: "Implemented Socket.io event channels alongside MongoDB change streams for real-time buyer-seller order updates.",
        tradeoff: "Stateful WebSocket server management was required, but it eliminated 90% of costly client database polling requests.",
        systemFlow: ["React Storefront", "Node.js REST Layer", "MongoDB + Change Streams", "Socket.io Event Engine"]
      },
      liveUrl: "https://multivendor-olive.vercel.app/",
      githubUrl: "https://github.com/Ali-Razahaider/multivendor",
      metrics: [
        { label: "Sync Engine", val: "Socket.io" },
        { label: "Database", val: "MongoDB Streams" },
        { label: "Auth Flow", val: "JWT Role RBAC" }
      ]
    }
  ]
};
