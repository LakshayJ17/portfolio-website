import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { OtherProjects, Projects } from "@/components/projects";
import { Scales } from "@/components/scales";
import { Subheading } from "@/components/subheading";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects",
    description: "Projects by Lakshay Jain, including BlogNest, MindIndex, Resurge and Verbatim.",
};

export default function ProjectsPage() {
    return (
        <div>
            <div className="flex min-h-screen items-start justify-start">
                <Container className="min-h-screen px-6 md:pt-20 md:pb-10">
                    <Scales />
                    <Heading>Projects</Heading>
                    <Subheading>
                        Checkout my projects
                    </Subheading>
                    <Projects />
                    <OtherProjects />
                </Container>
            </div>
        </div>
    );
}
