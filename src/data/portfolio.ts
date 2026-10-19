export const portfolioData = {
  personal: {
    name: "Ali Raza",
    role: "Software Engineer",
    tagline: "Software Engineer · Full-Stack Web Development",
    heroTitle: "Hi, I'm Ali Raza.",
    bioParagraphs: [
      "I build full-stack web applications, clean APIs, and responsive interfaces. I enjoy writing clean TypeScript, React, and Python, contributing to open source, and solving practical problems."
    ],
    links: {
      github: "https://github.com/Ali-Razahaider",
      linkedin: "https://www.linkedin.com/in/ali-raza-haider/",
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
    { name: "NestJS", icon: "SiNestjs", category: "Backend" },
    { name: "Express", icon: "SiExpress", category: "Backend" },
    { name: "FastAPI", icon: "SiFastapi", category: "Backend" },
    { name: "Ollama", icon: "SiOllama", category: "Backend" },
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
      date: "Jan 2026 — Jul 2027",
      location: "Queensland, Australia (Remote)",
      description: "Designed and secured authentication flows and RESTful APIs for scalable backend systems.",
      tags: ["Node.js", "Express", "Next.js", "PostgreSQL", "MongoDB", "JWT"]
    },
    {
      id: 2,
      company: "Cyphershield Inc",
      role: "Software Engineering Intern",
      date: "Jul 2025 — Sep 2025",
      location: "United States (Remote)",
      description: "Built and delivered a production-ready frontend using React, Next.js, and shadcn/ui.",
      tags: ["React", "Next.js", "NestJS", "FastAPI", "Ollama", "TailwindCSS", "TypeScript"]
    }
  ],
  openSource: [
    {
      id: 1,
      project: "Pathment",
      org: "pathment",
      logoUrl: "https://github.com/pathment.png?size=128",
      role: "Open Source Contributor",
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
          title: "feat(tasks): split items into Active and Completed views",
          url: "https://github.com/pathment/pathment/pull/623",
          status: "Merged",
          mergedAt: "Aug 2026",
          scope: "UI & Filtering",
          shortDescription: "Resolved heavy re-renders caused by loading all records into a single list view. Implemented view partitioning to separate active from completed items, reducing DOM nodes per view."
        },
        {
          id: 583,
          title: "Perf/eliminate n+1 query pattern in retrieval pipeline",
          url: "https://github.com/pathment/pathment/pull/583",
          status: "Merged",
          mergedAt: "Aug 2026",
          scope: "Performance",
          shortDescription: "Resolved N+1 query bottleneck that fired individual DB lookups per record (N+1 queries for N records). Refactored pipeline to batch-hydrate related records in a single bulk query, cutting DB calls from N+1 down to 1."
        },
        {
          id: 574,
          title: "fix: exclude completed items from active list views",
          url: "https://github.com/pathment/pathment/pull/574",
          status: "Merged",
          mergedAt: "Jul 2026",
          scope: "Query Optimization",
          shortDescription: "Resolved data leakage where completed records were fetched alongside active items. Added database-level query filter predicates, eliminating redundant payload transfer."
        },
        {
          id: 406,
          title: "refactor: update text color contrast in SelectMenu component",
          url: "https://github.com/pathment/pathment/pull/406",
          status: "Merged",
          mergedAt: "Jun 2026",
          scope: "Accessibility",
          shortDescription: "Resolved low-contrast color ratio issues in custom dropdown select components. Updated design tokens to comply with WCAG AA accessibility contrast standards."
        },
        {
          id: 113,
          title: "Fix/Multiple Record Creation on Rapid Click",
          url: "https://github.com/pathment/pathment/pull/113",
          status: "Merged",
          mergedAt: "May 2026",
          scope: "Concurrency",
          shortDescription: "Resolved race conditions where rapid repeated user clicks created duplicate database entries. Implemented client-side submission state guards and request debouncing."
        },
        {
          id: 78,
          title: "Feature/replace alertbox with responsive modal component",
          url: "https://github.com/pathment/pathment/pull/78",
          status: "Merged",
          mergedAt: "May 2026",
          scope: "UX Architecture",
          shortDescription: "Resolved UI thread blocking caused by native browser alert dialogs. Replaced them with non-blocking, accessible custom modal components."
        },
        {
          id: 75,
          title: "Fix: user reference in 2FA verification handling",
          url: "https://github.com/pathment/pathment/pull/75",
          status: "Merged",
          mergedAt: "May 2026",
          scope: "Auth & Security",
          shortDescription: "Resolved authentication failures caused by validating 2FA tokens against stale cached state. Refactored flow to verify against fresh server response payloads."
        },
        {
          id: 46,
          title: "fix: dynamically set points using pointsBase in modal handler",
          url: "https://github.com/pathment/pathment/pull/46",
          status: "Merged",
          mergedAt: "May 2026",
          scope: "Data Binding",
          shortDescription: "Resolved data mismatch where form handlers submitted hardcoded default values. Bound calculation handlers directly to dynamic configuration properties."
        }
      ]
    },
    {
      id: 2,
      project: "Zulip",
      org: "zulip",
      logoUrl: "https://raw.githubusercontent.com/zulip/zulip/main/static/images/logo/zulip-icon-square.svg",
      role: "Open Source Contributor",
      date: "2026 — Present",
      stats: "1 merged PR",
      description: "Contributed to Zulip, an open-source team chat platform built around organized, topic-based conversations.",
      highlights: ["Open source", "Team communication", "Python"],
      tags: ["Open Source", "Python"],
      githubUrl: "https://github.com/zulip/zulip/pull/40175",
      repoUrl: "https://github.com/zulip/zulip",
      liveUrl: "https://zulip.com",
      pullRequests: [
        {
          id: 40175,
          title: "provision: Add gcc-c++ missing dependency.",
          url: "https://github.com/zulip/zulip/pull/40175",
          status: "Merged",
          mergedAt: "Sep 2026",
          scope: "Developer tooling",
          shortDescription: "Adds the missing gcc-c++ dependency required by Zulip's provisioning flow."
        }
      ]
    }
  ],
  projects: [
    {
      id: 1,
      title: "Mindly — AI Knowledge Workspace",
      kind: "AI / knowledge management",
      year: "2026",
      image: "/project-mindly.png",
      description: "AI-powered knowledge management workspace that ingests research documents, notes, and technical files into an interactive knowledge base powered by Google Gemini LLM and pgvector RAG pipeline.",
      tags: ["Next.js", "FastAPI", "Gemini LLM", "pgvector", "PostgreSQL", "Redis", "Docker"],
      architecture: {
        decision: "Built asynchronous background parser workers in FastAPI to chunk documents and generate vector embeddings stored in PostgreSQL via pgvector, integrated with Google Gemini LLM for context-aware response generation.",
        tradeoff: "Initial document processing takes 2-3 seconds, but ensures sub-100ms latency during live query streaming.",
        systemFlow: ["Next.js App Router", "FastAPI Workers", "Google Gemini LLM", "pgvector (PostgreSQL)", "Redis Cache"]
      },
      liveUrl: "https://mindly.one",
      githubUrl: "https://github.com/mindly-knowledge-management",
      metrics: [
        { label: "LLM Engine", val: "Gemini LLM" },
        { label: "Vector DB", val: "pgvector" },
        { label: "Caching Layer", val: "Redis" }
      ]
    },
    {
      id: 2,
      title: "Bazaarly",
      kind: "Full-stack commerce",
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
    },
    {
      id: 3,
      title: "Canvas",
      kind: "Education / LMS",
      year: "Selected build",
      image: "/project-lms.png",
      description: "A structured LMS concept for organizing courses, learners, instructors, and progress into one clear education workflow.",
      tags: ["Next.js", "React", "Node.js", "PostgreSQL", "Role-based access"],
      liveUrl: "https://lms-sage-rho.vercel.app/",
      githubUrl: "https://github.com/Alirazahaider",
      githubLabel: "GitHub profile",
      metrics: [
        { label: "Users", val: "Learners + instructors" },
        { label: "Core flow", val: "Course progress" },
        { label: "Delivery", val: "Web platform" }
      ]
    },
    {
      id: 4,
      title: "Lumio — Gamified Reading App",
      kind: "Mobile / React Native",
      year: "Selected build",
      image: "/project-lumio.png",
      description: "A cross-platform reading experience built around focused mobile study flows, reading streaks, progress, and playful achievement loops.",
      tags: ["React Native", "Expo", "TypeScript", "Mobile UX"],
      liveUrl: "#contact",
      githubUrl: "https://github.com/Alirazahaider",
      githubLabel: "GitHub profile",
      metrics: [
        { label: "Platform", val: "iOS + Android" },
        { label: "Runtime", val: "Expo" },
        { label: "Focus", val: "Reading habits" }
      ]
    }
  ]
};
