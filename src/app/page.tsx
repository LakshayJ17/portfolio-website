import { Container } from "@/components/container";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <div className="min-h-screen flex items-start justify-start">
      <Container className="min-h-[200vh] px-8 md:pt-20 md:pb-10">
        <h1 className="text-2xl md:text-4xl font-bold tracking-light text-primary">
          Lakshay Jain
        </h1>
        <p className="text-sm text-secondary md:text-base pt-4 max-w-lg">
          I&apos;m a passionate Full Stack Web Developer who transforms ideas
          into dynamic, user-centric digital experiences. With expertise
          spanning modern frontend frameworks like React and Next.js to robust
          backend technologies including Node.js and databases, I craft scalable
          solutions that bridge the gap between innovative design and powerful
          functionality.
        </p>
        <Projects />
      </Container>
    </div>
  );
}
