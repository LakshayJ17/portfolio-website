import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Scales } from "@/components/scales";
import { Subheading } from "@/components/subheading";
import { projects } from "@/constants/projects";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";



export default async function SingleProject({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <Container className="min-h-screen px-10 md:pt-20 md:pb-10">
      <Scales />
      <Heading>{project.title}</Heading>
      <Subheading>{project.description}</Subheading>

      <div className="mt-5 px-5">
        {project.technologies.map((tech,  idx) => (
          <span className="border rounded-sm bg-neutral-100 mr-2 p-1" key={idx}>{tech}</span>
        ))}
      </div>
      <div className="px-5 mt-10">
        <Image
          width={800}
          height={400}
          src={project.image}
          alt={project.title}
          className="mx-auto h-64 w-full max-w-4xl rounded-2xl border border-gray-200 object-cover shadow-lg md:h-80 lg:h-96"
          priority
        />
      </div>
      <div className="flex gap-5 px-5 mt-5">
        <Link className="rounded-lg bg-neutral-100 text-gray-700 hover:bg-neutral-200 hover:text-black transition delay-200 p-1" href={project.githubUrl} target="_blank"><IconBrandGithub /></Link>
        <Link className="rounded-lg bg-neutral-100 text-gray-700 hover:bg-neutral-200 hover:text-black transition delay-200 p-1" href={project.liveUrl} target="_blank"><IconExternalLink /></Link>
      </div>

      <div className="px-5 mt-10">
        {project.features.map((feature, idx) => (
          <li key={idx}>{feature}</li>
        ))}
      </div>
    </Container>
  );
}
