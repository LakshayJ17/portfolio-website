import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Projects } from "@/components/projects";
import { Scales } from "@/components/scales";
import { Subheading } from "@/components/subheading";

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
                </Container>
            </div>
        </div>
    );
}
