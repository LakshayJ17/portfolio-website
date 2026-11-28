import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Scales } from "@/components/scales";
import { SectionHeading } from "@/components/section-heading";
import { Subheading } from "@/components/subheading";
import { featuredProjects, type ProjectImage } from "@/constants/projects";
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

function Figure({ image, sizes, priority }: { image: ProjectImage; sizes: string; priority?: boolean }) {
  return (
    <figure>
      <a
        href={image.src}
        target="_blank"
        rel="noopener noreferrer"
        className="block overflow-hidden rounded-xl border border-neutral-200 shadow-sm transition hover:shadow-md"
        aria-label={`Open full-size image: ${image.alt}`}
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes={sizes}
          priority={priority}
          className="h-auto w-full"
        />
      </a>
      {image.caption && <figcaption className="mt-2 text-xs text-neutral-500 md:text-sm">{image.caption}</figcaption>}
    </figure>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-primary text-lg font-semibold tracking-tight md:text-xl">{children}</h2>;
}

export default async function SingleProject({ params }: Params) {
  const { slug } = await params;

  const project = featuredProjects.find((project) => project.slug === slug);

  if (!project) {
    notFound();
  }

  const fullWidth = "(min-width: 896px) 832px, calc(100vw - 48px)";
  const halfWidth = "(min-width: 896px) 404px, (min-width: 768px) 50vw, calc(100vw - 48px)";

  return (
    <Container className="min-h-screen px-6 pb-16 md:px-10 md:pt-20">
      <Scales />
      <Heading>{project.title}</Heading>
      <Subheading>{project.description}</Subheading>

      <div className="mt-5 flex flex-wrap gap-3 px-4">
        {project.liveUrl && (
          <Link
            href={project.liveUrl}
            target="_blank"
            className="bg-primary inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:shadow-lg"
          >
            <IconExternalLink size={16} />
            Live site
          </Link>
        )}
        <Link
          href={project.githubUrl}
          target="_blank"
          className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-4 py-2 text-sm font-semibold text-neutral-700 transition hover:bg-neutral-100"
        >
          <IconBrandGithub size={16} />
          Source code
        </Link>
      </div>

      <div className="mt-3 flex flex-wrap px-4">
        {project.technologies.map((tech, idx) => (
          <SectionHeading className="mr-3 rounded-sm border bg-neutral-100 p-1" key={idx}>
            {tech}
          </SectionHeading>
        ))}
      </div>

      {project.image && (
        <div className="mt-8 px-4">
          <Figure image={{ src: project.image, alt: project.title, width: 1280, height: 800 }} sizes={fullWidth} priority />
        </div>
      )}

      <section className="mt-12 px-4">
        <SectionTitle>Overview</SectionTitle>
        {project.overview.map((paragraph, idx) => (
          <p key={idx} className="mt-3 text-sm leading-relaxed text-neutral-600 md:text-base">
            {paragraph}
          </p>
        ))}
      </section>

      {project.sections?.map((section) => (
        <section key={section.heading} className="mt-12 px-4">
          <SectionTitle>{section.heading}</SectionTitle>
          {section.body.map((paragraph, idx) => (
            <p key={idx} className="mt-3 text-sm leading-relaxed text-neutral-600 md:text-base">
              {paragraph}
            </p>
          ))}
          {section.image && (
            <div className="mt-6">
              <Figure image={section.image} sizes={fullWidth} />
            </div>
          )}
        </section>
      ))}

      {project.features.length > 0 && (
        <section className="mt-12 px-4">
          <SectionTitle>Features</SectionTitle>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-neutral-600 md:text-base">
            {project.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </section>
      )}

      {project.gallery && project.gallery.length > 0 && (
        <section className="mt-12 px-4">
          <SectionTitle>More screenshots</SectionTitle>
          <div className="mt-6 grid gap-8 md:grid-cols-2 md:gap-6">
            {project.gallery.map((image) => (
              <Figure key={image.src} image={image} sizes={halfWidth} />
            ))}
          </div>
        </section>
      )}
    </Container>
  );
}
