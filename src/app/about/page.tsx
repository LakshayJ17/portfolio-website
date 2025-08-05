import { Collage } from "@/components/collage";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import { Timeline } from "@/components/timeline";

export default function AboutPage() {
    return (
        <div>
            <div className="flex min-h-screen items-start justify-start">
                <Container className="min-h-screen px-8 md:pt-20 md:pb-10">
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
                    <p className="text-secondary max-w-lg pt-4 text-sm md:text-base">
                        Love to travel
                    </p>
                    <Collage />

                    <p className="text-secondary max-w-lg pt-4 text-sm md:text-base">
                        Here is a timeline of my life achievements
                    </p>
                    <Timeline />
                </Container>
            </div>
        </div>
    );
}
