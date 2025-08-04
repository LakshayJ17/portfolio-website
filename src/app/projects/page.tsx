import { Container } from "@/components/container";
import { Projects } from "@/components/projects";

export default function ProjectsPage(){
    return (
        <div>
            <div className="flex min-h-screen items-start justify-start">
                <Container className="min-h-[200vh] px-8 md:pt-20 md:pb-10">
                    <h1 className="tracking-tight text-primary text-2xl font-bold md:text-4xl">
                        Projects
                    </h1>
                    <p className="text-secondary max-w-lg pt-4 text-sm md:text-base">
                        I&apos;m a passionate Full Stack Web Developer who loves transforming ideas
                        into dynamic, user-centric digital experiences. With expertise in
                        modern frontend frameworks like React and Next.js, and robust backend
                        technologies including Node.js, I enjoy building scalable solutions
                        that bridge the gap between innovative design and powerful
                        functionality.
                    </p>
                    
                    <Projects />
                </Container>
            </div>
        </div>
    );
};


