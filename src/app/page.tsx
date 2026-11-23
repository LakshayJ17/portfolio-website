import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import LandingBlogs from "@/components/landing-blogs";
import { Projects } from "@/components/projects";
import { Scales } from "@/components/scales";
import { Subheading } from "@/components/subheading";
import { SectionHeading } from "@/components/section-heading";
import { Timeline } from "@/components/timeline";
import { experience } from "@/constants/experience";
import { featuredProjects } from "@/constants/projects";
import { site } from "@/constants/site";
import { IconDownload } from "@tabler/icons-react";

export default function Home() {
  return (
    <div className="relative flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-6 md:pt-20 md:pb-10">
        <Scales />
        <Heading>Lakshay Jain</Heading>
        <Subheading>
          I&apos;m a Software Developer who transforms ideas into dynamic,
          user-centric digital experiences. With expertise spanning modern
          frontend frameworks like React and Next.js, robust backend
          technologies including Node.js and databases, and AI systems built on
          LLMs, RAG and agents, I craft scalable solutions that bridge the gap
          between innovative design and powerful functionality.
        </Subheading>
        <div className="flex m-4">
          <a
            href={site.resume}
            download
            className="inline-flex items-center gap-2 rounded-lg bg-primary text-white px-5 py-2 font-semibold shadow-md hover:shadow-lg transition"
          >
            <IconDownload size={20} />
            <span>Download Resume</span>
          </a>
        </div>
        <SectionHeading className="mx-4" delay={0.2}>
          Where I&apos;ve worked
        </SectionHeading>
        <Timeline data={experience} />
        <Projects projects={featuredProjects} />
        <LandingBlogs />
      </Container>
    </div>
  );
}
