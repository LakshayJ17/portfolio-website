"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";

export const Projects = () => {
  const projects = [
    {
      title: "BlogNest",
      src: "/projects/blognest.png",
      description:
        "BlogNest is a dynamic blogging platform where users can explore, share, and publish insightful articles on various topics. Whether you are a writer, reader, or industry expert, BlogNest provides a seamless and engaging experience to discover and express ideas",
      href: "#",
    },
    {
      title: "AskMyPDF",
      src: "/projects/askmypdf.png",
      description:
        "AskMyPDF is a full-stack application that lets users upload PDF documents and interact with them using AI-powered chat.",
      href: "#",
    },
    {
      title: "TaskFlux",
      src: "/projects/blognest.png",
      description:
        "AskMyPDF is a full-stack application that lets users upload PDF documents and interact with them using AI-powered chat.",
      href: "#",
    },
    {
      title: "Portfolio",
      src: "/projects/askmypdf.png",
      description:
        "AskMyPDF is a full-stack application that lets users upload PDF documents and interact with them using AI-powered chat.",
      href: "#",
    },
  ];

  return (
    <div className="py-10">
      <p className="text-secondary max-w-lg pt-4 text-sm md:text-base">
        I love building web apps and products that can impact millions online
      </p>

      <div className="grid grid-cols-1 gap-8 py-4 md:grid-cols-2">
        {projects.map((project, idx) => (
          <motion.div
            initial={{
              opacity: 0,
              filter: "blur(10px)",
              y: 100,
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
                className="h-48 w-full rounded-xl object-cover transition duration-200 group-hover:scale-[1.02]"
              />
              <div className="mt-4 space-y-2">
                <h2 className="font-medium tracking-tight text-neutral-800 dark:text-neutral-200">
                  {project.title}
                </h2>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-3">
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
