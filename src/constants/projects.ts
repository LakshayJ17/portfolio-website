export type Project = {
    title: string;
    slug: string;
    src: string;
    href: string;
    description: string;
    longDescription: string;
    technologies: string[];
    githubUrl: string;
    liveUrl: string;
    features: string[];
    image: string;
}

export const projects : Project[] = [
    {
        title: "BlogNest",
        slug: "blognest",
        src: "/projects/blognest.png",
        image: "/projects/blognest.png",
        description:
            "BlogNest is a dynamic blogging platform where users can explore, share, and publish insightful articles on various topics.",
        longDescription: "BlogNest is a comprehensive blogging platform built with modern web technologies. It provides a seamless experience for writers to publish content and readers to discover engaging articles across various topics. The platform features user authentication, article management, search functionality, and a responsive design that works across all devices.",
        technologies: ["React.js", "Express.js", "Tailwind CSS", "PostgreSQL", "Prisma", "OpenAI API",  ],
        githubUrl: "https://github.com/LakshayJ17/BlogNest",
        liveUrl: "https://blognest-project.vercel.app/",
        features: [
            "User authentication and authorization",
            "Create, edit, and delete blog posts",
            "Draft saving for unfinished posts",
            "Markdown-rich text editor",
            "Search and filter articles by labels",
            "AI-powered article generation from a title",
            "AI-generated summary for each post",
            "Harmful content detection and blocking with OpenAI",
            "Fully responsive design"
        ],
        href: "/projects/blognest",
    },
    {
        title: "AskMyPDF",
        slug: "askmypdf",
        src: "/projects/askmypdf.png",
        image: "/projects/askmypdf.png",
        description:
            "AskMyPDF is a full-stack application that lets users upload PDF documents and interact with them using AI-powered chat.",
        longDescription: "AskMyPDF revolutionizes document interaction by combining PDF processing with AI-powered chat capabilities. Users can upload PDF documents and ask questions about the content, making document analysis and information extraction effortless and interactive.",
        technologies: ["Next.js", "TypeScript", "OpenAI API", "Lanchain.js", "Tailwind CSS","Clerk", "QdrantDB","RAG", "Vercel"],
        githubUrl: "https://github.com/LakshayJ17/Askmypdf",
        liveUrl: "https://ask-mypdf.vercel.app/",
        features: [
            "Upload and process PDF documents",
            "Chat with your documents using AI",
            "Instant answers and summaries from your files",
            "Retrieve relevant information using RAG (Retrieval-Augmented Generation)",
            "Real-time, interactive responses",
            "Mobile-friendly and responsive design"
        ],
        href: "/projects/askmypdf",
    },
    // {
    //     title: "TaskFlux",
    //     slug: "taskflux",
    //     src: "/projects/taskflux.png",
    //     image: "/projects/taskflux.png",
    //     description:
    //         "TaskFlux is a comprehensive task management application designed to boost productivity and streamline workflow organization.",
    //     longDescription: "TaskFlux is a powerful task management solution that helps teams and individuals organize their work efficiently. With features like task categorization, priority levels, deadline tracking, and team collaboration, TaskFlux transforms how you manage projects and daily tasks.",
    //     technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "JWT", "Tailwind CSS"],
    //     githubUrl: "https://github.com/yourusername/taskflux",
    //     liveUrl: "#",
    //     features: [
    //         "Task creation and management",
    //         "Priority and deadline tracking",
    //         "Team collaboration features",
    //         "Real-time updates",
    //         "Progress analytics",
    //         "Mobile-responsive design"
    //     ],
    //     href: "/projects/taskflux",
    // },
    // {
    //     title: "Portfolio",
    //     slug: "portfolio",
    //     src: "/projects/portfolio.png",
    //     image: "/projects/portfolio.png",
    //     description:
    //         "A modern, responsive portfolio website showcasing my projects, skills, and professional journey.",
    //     longDescription: "This portfolio website represents my professional identity and showcases my technical skills, projects, and experience. Built with modern web technologies, it features smooth animations, responsive design, and an intuitive user experience that effectively communicates my capabilities as a developer.",
    //     technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "MDX", "Vercel"],
    //     githubUrl: "https://github.com/yourusername/portfolio",
    //     liveUrl: "https://lakshayjain.vercel.app/",
    //     features: [
    //         "Responsive design for all devices",
    //         "Smooth animations and transitions",
    //         "Project showcase with detailed information",
    //         "Blog section with MDX support",
    //         "Contact form integration",
    //         "SEO optimized structure"
    //     ],
    //     href: "/projects/portfolio",
    // },
];