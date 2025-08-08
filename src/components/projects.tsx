"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";
import { Project, projects as defaultProjects } from "@/constants/projects";
import { SectionHeading } from "./section-heading";

export const Projects = ({
  projects = defaultProjects,
}: {
  projects?: Project[];
}) => {
  return (
    <div className=" border-y border-neutral-100 my-4 px-4">
      <SectionHeading delay={0.2}>A lifetime in Projecs</SectionHeading>

      <div className="grid grid-cols-1 gap-8 py-4 md:grid-cols-3">
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
            <Link href={project.href} className="block">
              <Image
                src={project.src}
                alt={project.title}
                height={300}
                width={300}
                className="h-48 w-full rounded-xl transition duration-200 group-hover:scale-[1.02]"
              />
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
