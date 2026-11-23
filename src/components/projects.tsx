"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Link } from "next-view-transitions";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";
import { Project, featuredProjects, otherProjects } from "@/constants/projects";
import { SectionHeading } from "./section-heading";

export const Projects = ({
  projects = featuredProjects,
}: {
  projects?: Project[];
}) => {
  return (
    <div className="my-4 border-y border-neutral-100 px-4">
      <SectionHeading delay={0.2}>A lifetime in Projects</SectionHeading>
      <div className="grid grid-cols-1 gap-8 py-4 md:grid-cols-2">
        {projects.map((project, idx) => (
          <motion.div
            initial={{
              opacity: 0,
              filter: "blur(10px)",
              y: 10,
            }}
            whileInView={{
              opacity: 1,
              filter: "blur(0px)",
              y: 0,
            }}
            transition={{
              duration: 0.3,
              delay: idx * 0.1,
              ease: "easeInOut",
            }}
            key={project.title}
            className="group relative"
          >
            <Link href={`/projects/${project.slug}`} className="block">
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.title}
                  height={300}
                  width={480}
                  sizes="(min-width: 768px) 400px, 100vw"
                  className="h-48 w-full rounded-xl object-cover object-top transition duration-200 group-hover:scale-[1.02]"
                />
              )}
              <div className="mt-4 space-y-2">
                <h2 className="font-medium tracking-tight text-neutral-800 dark:text-neutral-200">
                  {project.title}
                </h2>
                <p className="line-clamp-3 text-sm text-neutral-600 dark:text-neutral-400">
                  {project.description}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export const OtherProjects = ({
  projects = otherProjects,
}: {
  projects?: Project[];
}) => {
  return (
    <div className="my-4 border-y border-neutral-100 px-4">
      <SectionHeading delay={0.2}>Other things I&apos;ve built</SectionHeading>
      <div className="flex flex-col gap-6 py-4">
        {projects.map((project, idx) => (
          <motion.div
            initial={{
              opacity: 0,
              filter: "blur(10px)",
              y: 10,
            }}
            whileInView={{
              opacity: 1,
              filter: "blur(0px)",
              y: 0,
            }}
            transition={{
              duration: 0.3,
              delay: idx * 0.1,
              ease: "easeInOut",
            }}
            viewport={{ once: true }}
            key={project.title}
          >
            <div className="flex items-center justify-between gap-4">
              <h2 className="font-medium tracking-tight text-neutral-800">
                {project.title}
              </h2>
              <div className="flex items-center gap-3">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} live site`}>
                    <IconExternalLink className="size-4 text-neutral-500 hover:text-neutral-700" />
                  </a>
                )}
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} on GitHub`}>
                  <IconBrandGithub className="size-4 text-neutral-500 hover:text-neutral-700" />
                </a>
              </div>
            </div>
            <p className="mt-1 text-sm text-neutral-600">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
