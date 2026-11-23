export type Project = {
  title: string;
  slug: string;
  year: string;
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  image?: string;
  features: string[];
};

export const projects: Project[] = [
  {
    title: "Verbatim",
    slug: "verbatim",
    year: "2026",
    featured: true,
    image: "/projects/verbatim.jpg",
    description:
      "Turns long YouTube podcasts, interviews and lectures into verified, ready-to-post quote images.",
    longDescription:
      "Paste a link to a podcast, interview or lecture and Verbatim pulls out the strongest quotes and ideas, checks every quote against the transcript, and lays each one out in ready-to-post designs. It also has Commonplace, a public feed where people share, like and collect quotes, and an admin area for moderation, usage and AI cost tracking.",
    technologies: [
      "Next.js 16",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Google Gemini",
      "Tailwind CSS",
      "Zod",
      "Vitest",
    ],
    githubUrl: "https://github.com/LakshayJ17/verbatim",
    liveUrl: "https://verbatim-eta.vercel.app",
    features: [
      "Extracts quotes and key insights from YouTube videos up to two hours long",
      "Verifies every quote against the transcript: verified, needs review, rejected or not checked",
      "Quote image studio with seven sizes, from square posts to channel banners, and five visual styles",
      "Video overview with summary, topics, key insights and verification counts",
      "Commonplace: a public feed with likes, comments, bookmarks, follows, profiles and collections",
      "Email and Google sign-in, plus guest browsing",
      "Postgres Row Level Security on every table, with RLS tests",
      "Admin area for moderation, users, feedback, audit log, usage and daily AI spend caps",
    ],
  },
  {
    title: "Resurge",
    slug: "resurge",
    year: "2026",
    featured: true,
    image: "/projects/resurge.jpg",
    description:
      "A self-improving multi-agent AI system that researches a company's competitors and checks every fact against its source.",
    longDescription:
      "Resurge runs competitor research the way a consulting firm would: 22 specialised agents across 10 departments hand work to each other through schema-validated contracts. Every claim is tied to a source URL and a verbatim quote, then fact-checked by a different model family than the one that extracted it. It runs at zero cost by routing each task across the free tiers of several model providers, and it improves with every run.",
    technologies: [
      "Python",
      "FastAPI",
      "Pydantic",
      "Next.js",
      "Qdrant",
      "SQLite",
      "MCP",
      "Groq",
      "Gemini",
      "Ollama",
    ],
    githubUrl: "https://github.com/LakshayJ17/resurge",
    features: [
      "12-stage pipeline with 22 agents in 10 departments, coordinated by an orchestrator on a shared run context",
      "Every fact grounded in a verbatim source quote, cross-checked by a different model family, and scored for confidence",
      "LLM gateway that routes across free tiers (Groq, Gemini, OpenRouter, Mistral, Ollama and more) with rate-limit-aware failover, caching and JSON repair",
      "QA reviewer that sends weak analysis back for revision before anything is published",
      "Prompt-injection defences: Prompt Guard 2, hidden-text removal, nonce fences and PII redaction",
      "Publishes HTML reports, PDF, PowerPoint, Markdown, JSON, Google Sheets and Slack/Discord alerts",
      "RAG chat over finished research with hybrid retrieval and cited answers",
      "Four feedback loops update model reputations, source reliability and agent playbooks after every run",
      "Use it from the CLI, a local dashboard, a hosted web app or as an MCP server",
    ],
  },
  {
    title: "MindIndex",
    slug: "mindindex",
    year: "2025",
    featured: true,
    image: "/projects/mindindex.png",
    description:
      "An AI workspace where teams upload documents (PDF, DOCX, PPTX) and get answers grounded in their own content.",
    longDescription:
      "MindIndex is a team workspace for document Q&A. Users upload multi-format documents and query them through an AI chatbot backed by a retrieval-augmented generation (RAG) pipeline. Documents are split into chunks, embedded and stored in Qdrant; the most relevant chunks are retrieved by vector similarity and passed to the LLM as context, so answers stay grounded in the uploaded content. Each team has its own project space and knowledge base.",
    technologies: ["Next.js", "JavaScript", "Tailwind CSS", "LangChain.js", "OpenAI API", "Qdrant", "Clerk"],
    githubUrl: "https://github.com/LakshayJ17/mindindex",
    liveUrl: "https://mindindex.bylakshayjain.online/",
    features: [
      "Upload and manage PDF, DOCX and PPTX files",
      "Ingestion pipeline with LangChain.js: chunking, embedding and storage in Qdrant",
      "Answers grounded in retrieved chunks instead of general model knowledge",
      "Separate project spaces, each with its own isolated knowledge base",
      "Authentication and access control with Clerk",
      "Responsive UI built with Tailwind CSS",
    ],
  },
  {
    title: "BlogNest",
    slug: "blognest",
    year: "2025",
    featured: true,
    image: "/projects/blognest.png",
    description:
      "A full-stack blogging platform with role-based access, AI-assisted drafting and automatic content moderation.",
    longDescription:
      "BlogNest is a blogging platform with a REST API in Express.js and a PostgreSQL database modelled with Prisma ORM. It supports writing, publishing and managing posts, with JWT authentication and role-based access control. The OpenAI Moderation API screens posts and blocks flagged content before it is displayed, and the OpenAI API helps writers generate drafts and summaries.",
    technologies: ["React.js", "Express.js", "PostgreSQL", "Prisma", "JWT", "OpenAI API", "Tailwind CSS"],
    githubUrl: "https://github.com/LakshayJ17/BlogNest",
    liveUrl: "https://blognest.bylakshayjain.online",
    features: [
      "REST API in Express.js with a PostgreSQL database modelled in Prisma",
      "JWT authentication with role-based access control",
      "Harmful content detection and blocking with the OpenAI Moderation API",
      "AI-assisted article drafts from a title, and AI summaries for each post",
      "Draft saving and a Markdown editor",
      "Search and filter articles by labels",
      "Fully responsive design",
    ],
  },
  {
    title: "Chromafy",
    slug: "chromafy",
    year: "2026",
    featured: false,
    description: "Turns an ordinary photo into the same moment in a different light, using an image-editing model.",
    longDescription:
      "Upload a photo, choose a world, and an image-editing model reworks its colour, light and atmosphere while keeping the subject and composition.",
    technologies: ["Next.js", "TypeScript", "Cloudflare Workers AI", "Upstash Redis"],
    githubUrl: "https://github.com/LakshayJ17/chromafy",
    liveUrl: "https://chromafy-nine.vercel.app",
    features: [],
  },
  {
    title: "Kahaani",
    slug: "kahaani",
    year: "2026",
    featured: false,
    description:
      "Personalised, illustrated and narrated picture books for children, in Hindi or English, with the child as the hero.",
    longDescription:
      "A parent describes their child in a few words and gets back an illustrated, narrated story as a PDF book and a read-along video.",
    technologies: ["FastAPI", "Next.js", "Gemini", "Supabase", "Docker"],
    githubUrl: "https://github.com/LakshayJ17/kahaani",
    features: [],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);
