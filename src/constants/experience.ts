import type { TimelineData } from "@/components/timeline";

export const experience: TimelineData[] = [
  {
    title: "Jul'26 - Present",
    content: [
      {
        title: "Software Engineer at Ethara AI",
        description:
          "Configuring code repositories for an LLM coding-agent evaluation harness, with Dockerfiles and setup that agents can work in, then running agent trajectories to evaluate the agents and trace each failure to the environment or the agent.",
      },
    ],
  },
  {
    title: "Feb'26 - Jun'26",
    content: [
      {
        title: "LLM Post-Training Intern at Ethara AI",
        description:
          "Evaluated frontier LLM outputs for correctness, factual accuracy, reasoning quality and instruction adherence in RLHF and SFT workflows, and quality-checked prompt-response data for SFT training datasets.",
      },
    ],
  },
  {
    title: "Dec'25 - Feb'26",
    content: [
      {
        title: "Web Developer Intern at Vorombetech Solutions",
        description:
          "Built 10+ reusable UI components and service pages with React.js and Tailwind CSS, with responsive layouts across mobile, tablet and desktop.",
      },
    ],
  },
];

export const milestones: TimelineData[] = [
  ...experience,
  {
    title: "2025",
    content: [
      {
        title: "Completed my first freelance project",
        description: "Built a RAG based chatbot and integrated in a real estate website",
      },
    ],
  },
  {
    title: "2024",
    content: [
      {
        title: "Secured 3rd rank in Internal SIH (Smart India Hackathon)",
        description:
          "Ranked 3rd amongst 15 teams in Internal SIH held at GD Goenka University for project GyaanSetu",
      },
    ],
  },
];
