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
                        I&apos;m a software developer who works across the stack, mostly with
                        React, Next.js, Node.js and PostgreSQL. Most of my recent projects use
                        LLMs, like document Q&amp;A with citations and a multi-agent research
                        tool. I currently work at Ethara AI on the environments used to
                        evaluate LLM coding agents.
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
