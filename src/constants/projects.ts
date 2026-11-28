export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
};

export type ProjectSection = {
  heading: string;
  body: string[];
  image?: ProjectImage;
};

export type Project = {
  title: string;
  slug: string;
  year: string;
  description: string;
  overview: string[];
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  image?: string;
  features: string[];
  sections?: ProjectSection[];
  gallery?: ProjectImage[];
};

const shot = (
  slug: string,
  file: string,
  alt: string,
  caption?: string,
  width = 1600,
  height = 1000,
): ProjectImage => ({ src: `/projects/${slug}/${file}`, alt, caption, width, height });

export const projects: Project[] = [
  {
    title: "BlogNest",
    slug: "blognest",
    year: "2025",
    featured: true,
    image: "/projects/blognest.jpg",
    description:
      "A full-stack blogging platform with a rich text editor, AI drafts and summaries, and an automatic content check before posts go public.",
    overview: [
      "BlogNest is a blogging platform where people write, publish and discover stories. Anyone can read without an account. Writers sign in with email or Google, write in a rich text editor, and can ask AI for help when the page is blank.",
      "The frontend is React 19 with Vite, Tailwind CSS 4, React Router and Zustand, hosted on Vercel. The backend is an Express 5 API that stores everything in PostgreSQL through Prisma, validates input with Zod, and runs on Render.",
    ],
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
    sections: [
      {
        heading: "Writing and reading",
        body: [
          "The editor is built on Tiptap and handles headings, quotes, lists, links, images and code blocks. Drafts stay private until they're published, and published stories can still be edited.",
          "Readers can search, filter by topic, sort by latest or most liked, and like, share or report a story.",
        ],
        image: shot("blognest", "02-editor.jpg", "The BlogNest editor with an AI draft button", "The editor, with a first draft written by AI from the story's title."),
      },
      {
        heading: "AI that stays optional",
        body: [
          "AI is there when someone asks for it. It can write a first draft from a title, give readers a short summary of a long story, and check every post before it goes public.",
          "All of it goes through the OpenAI SDK, pointed at any compatible provider: Groq by default, or Gemini, OpenRouter, OpenAI or a local Ollama model. With no API key at all the site still works. The AI buttons say they aren't set up, and posts publish without the check.",
        ],
        image: shot("blognest", "03-post.jpg", "A published BlogNest story with a Summarize button", "A published story. The Summarize button opens a short AI summary."),
      },
      {
        heading: "Moderation and security",
        body: [
          "Readers can report posts. Admins review reports and can suspend accounts from a moderation dashboard.",
          "Post HTML is sanitized when it's saved and again when it's shown, so scripts inside a post never run. Google sign-in tokens are verified on the server, sessions expire after seven days, sign-in has a Cloudflare Turnstile check, and every API route is rate limited. The AI endpoints need a post ID or a signed-in user, which stops anyone from using them as a free AI proxy.",
        ],
        image: shot("blognest", "05-signin.jpg", "The BlogNest sign-in page", "Sign in with Google or email, behind a Turnstile check."),
      },
    ],
    gallery: [
      shot("blognest", "01-home.jpg", "The BlogNest home page", "The home page, with the most liked stories."),
      shot("blognest", "04-topics.jpg", "BlogNest topics list", "Six topics to browse, from technology to hobbies."),
    ],
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
    title: "MindIndex",
    slug: "mindindex",
    year: "2025",
    featured: true,
    image: "/projects/mindindex.jpg",
    description:
      "Document Q&A for teams: shared workspaces where members ask questions across PDFs, Word files and slide decks, and every answer cites the passages it came from.",
    overview: [
      "MindIndex answers questions from a team's own documents. Upload PDFs, Word files, slide decks, text or Markdown into a project, ask a question in plain language, and the answer comes back with numbered citations. Each citation opens the exact passage it came from, with its page or slide number.",
      "Answers come only from those documents. When they don't cover a question, MindIndex says so instead of guessing.",
    ],
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
    sections: [
      {
        heading: "Team workspaces",
        body: [
          "Each team gets a workspace with four roles: viewer, member, admin and owner. Documents belong to the workspace and everyone in it can search them, while each person's chat history stays private.",
          "People join through an invite link or QR code. Invites expire after 1, 7 or 30 days and can be limited to a number of people, and by default an admin approves every request. Admins also get an activity log of invites, role changes, removals and uploads that nobody can edit.",
        ],
      },
      {
        heading: "How it works",
        body: [
          "Each upload is read in memory and never written to disk. The text is split into passages of about 1,000 characters, embedded, and stored in Postgres with pgvector.",
          "A question is embedded the same way. The six closest passages in the project are retrieved, and the answer streams back with numbered citations. It works with OpenAI or Google Gemini for both embeddings and answers. Each document records the embedding model that indexed it, and search skips documents that don't match the current one.",
        ],
        image: shot("mindindex", "02-steps.jpg", "MindIndex steps: upload, index, ask", "Upload, index, ask."),
      },
      {
        heading: "Security in the database",
        body: [
          "Workspace isolation lives in Postgres, not just in the app. Every table has row level security, and the server talks to Supabase with the signed-in user's token, never an admin key. Roles and invites change only through database functions that check the caller's role.",
          "Uploads are capped at 4 MB, checked against their file signature and scanned for zip bombs. Retrieved passages are wrapped in a random tag on every request and treated as untrusted, and a link in an answer only works if the exact URL appears in a cited passage.",
        ],
        image: shot("mindindex", "04-architecture.jpg", "MindIndex architecture diagram", "Architecture: the Next.js app, Supabase Auth, Postgres with pgvector, and the AI provider layer.", 2000, 1250),
      },
    ],
    gallery: [
      shot("mindindex", "01-home.jpg", "The MindIndex landing page", "The landing page, with an answer and its citation."),
      shot("mindindex", "03-grounded.jpg", "MindIndex declining to answer a question its documents don't cover", "When the documents don't cover a question, MindIndex says so."),
    ],
    features: [
      "Upload PDF, DOCX, PPTX, TXT and Markdown files into separate projects",
      "Ingestion pipeline that extracts text in memory, splits it into passages and stores the embeddings in Postgres with pgvector",
      "Streamed answers built from the six closest passages, with numbered citations that show the page or slide they came from",
      "Works with OpenAI or Google Gemini for both embeddings and answers",
      "Team workspaces with owner, admin, member and viewer roles",
      "Invite links and QR codes that expire, with admin approval for each join request",
      "Activity log of invites, role changes, removals and document uploads for admins",
      "Shared document library per workspace, with private chat history for each person",
      "Email and Google sign-in with Supabase Auth, including password reset",
      "Row level security on every table, with roles checked inside the database",
      "Upload size and format limits, zip-bomb checks, rate limits, Turnstile captcha and prompt-injection defences",
    ],
  },
  {
    title: "Resurge",
    slug: "resurge",
    year: "2026",
    featured: true,
    image: "/projects/resurge.jpg",
    description:
      "A multi-agent system that researches a company's competitors and checks every fact against its source.",
    overview: [
      "Resurge does competitor research. Give it a company name, and 22 AI agents find its competitors, research them on the public web, check every claim against its source, and deliver a report site, a PDF, a slide deck and a chat that answers follow-up questions.",
      "It runs entirely on free model tiers, and a report costs nothing to produce. It can be used from the command line, a local dashboard, a hosted web app or as an MCP server.",
    ],
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
    liveUrl: "https://resurge.bylakshayjain.online",
    sections: [
      {
        heading: "How a report gets made",
        body: [
          "The agents are organised into 10 departments. A Market Scout finds the competitors, a Research Strategist plans questions for each one, and four researchers search the web, fetch pages and pull out claims, each with an exact quote from its source.",
          "Analysts then build profiles, pricing tables, a feature matrix and an action plan from verified facts only, and a QA Reviewer sends weak sections back for another pass. After every run, a retrospective turns failures into lessons and updates which models and sources to trust.",
        ],
        image: shot("resurge", "02-pipeline.jpg", "Resurge pipeline diagram", "The pipeline, from the request to the finished report."),
      },
      {
        heading: "Every fact is checked",
        body: [
          "Code first confirms that each quote really appears on the page. Then a fact checker from a different model family re-reads the source, and each fact that survives gets a confidence score. Claims that fail never reach the report.",
          "The Evidence page lists every fact with its quote and source. The chat answers only from those facts, with citations, and says so when the research doesn't cover a question.",
        ],
        image: shot("resurge", "04-evidence.jpg", "The Evidence page of a Resurge report", "The Evidence page of the demo report. Every company and number in the demo is fictional."),
      },
      {
        heading: "Free to run",
        body: [
          "An LLM gateway spreads calls across the free tiers of Groq, Google AI Studio, OpenRouter, Mistral, NVIDIA NIM, Cloudflare and Cerebras, or a local Ollama model. It tracks quotas, fails over when a provider hits its limit, caches responses and repairs broken JSON.",
          "Search needs no keys either. It uses a free hosted MCP search server and the Hacker News, Wikipedia and GitHub APIs, and picks up Tavily, Exa or Brave when their keys are set.",
        ],
        image: shot("resurge", "05-pricing.jpg", "Pricing comparison in a Resurge report", "Pricing compared across competitors. A price only appears when a cited fact contains it."),
      },
      {
        heading: "Polite crawling and guardrails",
        body: [
          "Resurge identifies itself honestly, always follows robots.txt and crawl delays, and never uses proxies, CAPTCHA solving or logins. Sites whose terms forbid scraping only contribute search snippets.",
          "Web text is screened for prompt injection, and evidence is fenced with a random marker a page can't predict. Requests and chat questions pass Llama Prompt Guard 2 and a policy model, and emails and phone numbers are redacted before anything is stored.",
        ],
        image: shot("resurge", "06-ask.jpg", "The Ask the research chat page", "Ask the research: follow-up questions answered from the report's verified facts."),
      },
    ],
    gallery: [
      shot("resurge", "01-home.jpg", "The Resurge landing page", "The hosted web app."),
      shot("resurge", "03-report.jpg", "The overview page of a Resurge report", "The report overview from the demo run.", 1280, 1000),
      shot("resurge", "07-actions.jpg", "The action plan in a Resurge report", "The action plan, ranked by impact and effort."),
      shot("resurge", "08-risks.jpg", "The risk map in a Resurge report", "Risks ranked by likelihood and impact."),
      shot("resurge", "09-competitor.jpg", "A competitor profile in a Resurge report", "A competitor profile with pricing by plan."),
      shot("resurge", "10-pdf.jpg", "The Resurge PDF report section", "Every report also comes as a PDF."),
    ],
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
    title: "Verbatim",
    slug: "verbatim",
    year: "2026",
    featured: true,
    image: "/projects/verbatim.jpg",
    description:
      "Turns long YouTube podcasts, interviews and lectures into verified, ready-to-post quote images.",
    overview: [
      "Verbatim turns long YouTube podcasts, interviews and lectures into quote images you can trust. Paste a link and it reads the transcript, picks the strongest quotes and ideas, checks each quote word for word against what was actually said, and lays it out in a design ready to post.",
      "AI summaries of videos often paraphrase quotes or make them up. Verbatim doesn't take the model's word for it: only quotes that match the transcript exactly can be published.",
    ],
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
    liveUrl: "https://verbatim.bylakshayjain.online",
    sections: [
      {
        heading: "How it works",
        body: [
          "Verbatim first checks that the video is public and under two hours. It fetches the transcript through Supadata and the video details from the YouTube Data API, then asks Gemini for the strongest quotes and insights, along with a summary and the main topics.",
          "Each quote is matched against the transcript and labelled verified, needs review, rejected or not checked.",
        ],
        image: shot("verbatim", "02-verified.jpg", "Verbatim quotes labelled Verified and Needs review", "Each quote is labelled after the transcript check."),
      },
      {
        heading: "Design studio",
        body: [
          "Pick a quote and a design: five styles and seven sizes, from a square post to a story, a LinkedIn header or a YouTube banner. Every image carries its source, with the speaker's name and the video it came from.",
          "The finished image can be downloaded, sent to a friend or posted to Commonplace.",
        ],
        image: shot("verbatim", "03-design.jpg", "Choosing a quote, style and size in Verbatim", "Choosing a quote, a style and a size."),
      },
      {
        heading: "Commonplace",
        body: [
          "Commonplace is the public side of Verbatim: a feed with likes, comments, bookmarks, follows, profiles and collections. Anyone can browse it as a guest.",
          "An admin area covers moderation, users, feedback, an audit log and usage, with a daily cap on AI spending.",
        ],
      },
      {
        heading: "Under the hood",
        body: [
          "The app is Next.js 16 with the App Router and Server Actions, on React 19 and TypeScript. Supabase handles the database, sign-in and file storage, and every table has Postgres row level security, with tests for the policies. The interface uses Tailwind CSS 4, Base UI and GSAP, and the verification logic has unit tests in Vitest.",
        ],
        image: shot("verbatim", "06-architecture.jpg", "Verbatim architecture diagram", "Architecture: from a YouTube link to a verified quote post.", 2000, 1250),
      },
    ],
    gallery: [
      shot("verbatim", "01-home.jpg", "The Verbatim landing page", "The landing page."),
      shot("verbatim", "04-source.jpg", "A Verbatim quote image showing its source", "Every image shows the exact words, who said them and where they're from."),
      shot("verbatim", "05-sizes.jpg", "Verbatim quote images in different sizes", "The same studio exports everything from stories to YouTube banners."),
    ],
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
    title: "Chromafy",
    slug: "chromafy",
    year: "2026",
    featured: false,
    description: "Turns an ordinary photo into the same moment in a different light, using an image-editing model.",
    overview: [
      "Upload a photo, choose a world, and an image-editing model reworks its colour, light and atmosphere while keeping the subject and composition.",
    ],
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
    overview: [
      "A parent describes their child in a few words and gets back an illustrated, narrated story as a PDF book and a read-along video.",
    ],
    technologies: ["FastAPI", "Next.js", "Gemini", "Supabase", "Docker"],
    githubUrl: "https://github.com/LakshayJ17/kahaani",
    features: [],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);
