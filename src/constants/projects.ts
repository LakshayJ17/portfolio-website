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
    image: "/projects/mindindex.jpg",
    description:
      "Document Q&A for teams: ask questions across your PDFs, Word files and slide decks, and every answer cites the passages it came from.",
    longDescription:
      "MindIndex is a retrieval-augmented generation (RAG) workspace for team documents. Files are uploaded into projects, where their text is extracted in memory, split into passages, embedded and stored in Postgres with pgvector. Each question is answered only from the closest passages in that project, and the answer streams back with numbered citations that open the source passage along with its page or slide number.",
    technologies: [
      "Next.js 16",
      "JavaScript",
      "Supabase",
      "PostgreSQL",
      "pgvector",
      "OpenAI API",
      "Gemini",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/LakshayJ17/mindindex",
    liveUrl: "https://mindindex.bylakshayjain.online/",
    features: [
      "Upload PDF, DOCX, PPTX, TXT and Markdown files into separate projects",
      "Ingestion pipeline that extracts text in memory, splits it into passages and stores the embeddings in Postgres with pgvector",
      "Streamed answers built from the six closest passages, with numbered citations that show the page or slide they came from",
      "Works with OpenAI or Google Gemini for both embeddings and answers",
      "Saved chat history for each project",
      "Email and Google sign-in with Supabase Auth, including password reset",
      "Row level security on every table, so users can only ever reach their own documents",
      "Upload size and format limits, zip-bomb checks, rate limits and prompt-injection defences",
    ],
  },
  {
    title: "BlogNest",
    slug: "blognest",
    year: "2025",
    featured: true,
    image: "/projects/blognest.jpg",
    description:
      "A full-stack blogging platform with a rich text editor, AI drafts and summaries, and an automatic content check before posts go public.",
    longDescription:
      "BlogNest is a blogging platform where people write, publish and discover stories. The React frontend has a rich text editor with drafts and topics, and the Express API stores posts in PostgreSQL through Prisma. The AI features (first drafts, one-click summaries and a content check before publishing) work with any OpenAI-compatible provider, including Groq, Gemini, OpenRouter and OpenAI. Admins get a moderation dashboard for reported posts.",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tiptap",
      "Zustand",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "Zod",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/LakshayJ17/BlogNest",
    liveUrl: "https://blognest.bylakshayjain.online",
    features: [
      "Rich text editor built on Tiptap, with drafts, topics and editing of published stories",
      "AI first drafts and one-click summaries through any OpenAI-compatible provider: Groq, Gemini, OpenRouter, OpenAI or a local Ollama model",
      "Automatic content check before a post goes public",
      "Search, topic filters and sorting by latest or most liked",
      "Likes, sharing and reporting, with a moderation dashboard for admins",
      "Email and Google sign-in, with JWT sessions and role-based access control",
      "Post HTML sanitized on save and again on render, plus rate limiting on every API route",
      "Reading open to everyone, no account needed",
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
