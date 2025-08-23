import { Collage } from "@/components/collage";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Scales } from "@/components/scales";
import { SectionHeading } from "@/components/section-heading";
import { Subheading } from "@/components/subheading";
import { Timeline } from "@/components/timeline";

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
                        I&apos;m a passionate Full Stack Web Developer who loves
                        transforming ideas into dynamic, user-centric digital experiences.
                        With expertise in modern frontend frameworks like React and Next.js,
                        and robust backend technologies including Node.js, I enjoy building
                        scalable solutions that bridge the gap between innovative design and
                        powerful functionality.
                    </Subheading>

                    <SectionHeading className="text-secondary max-w-lg text-sm md:text-base mx-5">
                        Here is a timeline of my life achievements
                    </SectionHeading>
                    <Timeline />
                </Container>
            </div>
        </div>
    );
}
