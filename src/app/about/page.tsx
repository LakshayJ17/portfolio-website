import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Scales } from "@/components/scales";
import { SectionHeading } from "@/components/section-heading";
import { Subheading } from "@/components/subheading";
import { Timeline } from "@/components/timeline";
import { milestones } from "@/constants/experience";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
    description: "Experience and milestones of Lakshay Jain.",
};

export default function AboutPage() {
    return (
        <div>
            <div className="flex min-h-screen items-start justify-start">
                <Container className="min-h-screen px-6 md:pt-20 md:pb-10">
                    <Scales />
                    <Heading>
                        About Me
                    </Heading>
                    <Subheading>
                        I&apos;m a Software Developer who loves transforming ideas into
                        dynamic, user-centric digital experiences. With expertise in modern
                        frontend frameworks like React and Next.js, robust backend
                        technologies including Node.js, and AI systems built on LLMs, RAG and
                        agents, I enjoy building scalable solutions that bridge the gap
                        between innovative design and powerful functionality.
                    </Subheading>

                    <SectionHeading className="text-secondary max-w-lg text-sm md:text-base mx-5">
                        Here is a timeline of my life achievements
                    </SectionHeading>
                    <Timeline data={milestones} />
                </Container>
            </div>
        </div>
    );
}
