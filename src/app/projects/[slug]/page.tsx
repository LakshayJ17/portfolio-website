import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Scales } from "@/components/scales";
import { SectionHeading } from "@/components/section-heading";
import { Subheading } from "@/components/subheading";
import { featuredProjects } from "@/constants/projects";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return featuredProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = featuredProjects.find((p) => p.slug === slug);
  if (!project) return { title: "Project not found" };

  return {
    title: project.title,
    description: project.description,
    openGraph: { images: project.image ? [{ url: project.image }] : undefined },
  };
}

export default async function SingleProject({ params }: Params) {
  const { slug } = await params;

  const project = featuredProjects.find((project) => project.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <Container className="min-h-screen px-10 md:pt-20 md:pb-10">
      <Scales />
      <Heading>{project.title}</Heading>
      <Subheading>{project.description}</Subheading>

      <div className="mt-1 px-5 flex flex-wrap">
        {project.technologies.map((tech, idx) => (
          <SectionHeading className="border rounded-sm bg-neutral-100 mr-3 p-1" key={idx}>{tech}</SectionHeading>
        ))}
      </div>
      {project.image && (
        <div className="px-5 mt-5">
          <Image
            width={800}
            height={400}
            src={project.image}
            alt={project.title}
            className="mx-auto h-64 w-full max-w-4xl rounded-2xl border border-gray-200 object-cover object-top shadow-lg md:h-80 lg:h-96"
            priority
          />
        </div>
      )}
      <div className="flex gap-5 px-5 mt-5">
        <Link className="rounded-lg bg-neutral-100 text-gray-700 hover:bg-neutral-200 hover:text-black transition delay-200 p-1" href={project.githubUrl} target="_blank" aria-label="Source code on GitHub"><IconBrandGithub /></Link>
        {project.liveUrl && (
          <Link className="rounded-lg bg-neutral-100 text-gray-700 hover:bg-neutral-200 hover:text-black transition delay-200 p-1" href={project.liveUrl} target="_blank" aria-label="Live site"><IconExternalLink /></Link>
        )}
      </div>

      <ul className="px-5 mt-10 list-disc">
        {project.features.map((feature, idx) => (
          <li key={idx}>{feature}</li>
        ))}
      </ul>
    </Container>
  );
}
