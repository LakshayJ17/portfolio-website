"use client";

import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { IconCircleCheckFilled } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

type Data = {
    title: string;
    content: {
        title: string;
        description?: string | React.ReactNode;
    }[];
};

export const Timeline = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.6 });

    const data: Data[] = [
        {
            title: "2025",
            content: [
                {
                    title: "Completed my first freelance project",
                    description: "Built a RAG based chatbot and integrated in a real estate website",
                },
            ],
        },
        {
            title: "2024",
            content: [
                {
                    title: "Secured 3rd rank in Internal SIH (Smart India Hackathon)",
                    description: "Ranked 3rd amongst 15 teams in Internal SIH held at GD Goenka University for project GyaanSetu",
                },
            ],
        }
    ];

    return (
        <div ref={ref} className="py-4 my-6 px-4 shadow-section-inset border-y border-neutral-100">
            {data.map((year, index) => (
                <div content="px-4 py-1" key={year.title} className="mb-4">
                    <motion.h2
                        initial={{
                            filter: "blur(10px)",
                            opacity: 0,
                        }}
                        animate={{
                            filter: isInView ? "blur(0px)" : "blur(10px)",
                            opacity: isInView ? 1 : 0,
                        }}
                        transition={{
                            duration: 0.5,
                            ease: "easeInOut",
                            delay: 0.1 * index,
                        }}
                        className="shadow-input mb-2 w-fit rounded-md px-2 py-0.5 font-bold text-black"
                    >
                        {year.title}
                    </motion.h2>

                    <div className="flex flex-col gap-4">
                        {year.content.map((item, idx) => (
                            <div key={item.title} className="pl-4">
                                <Step isInView={isInView} idx={idx}>
                                    <motion.h3
                                        initial={{
                                            opacity: 0,
                                            y: -10,
                                        }}
                                        animate={{
                                            opacity: isInView ? 1 : 0,
                                            y: isInView ? 0 : -10,
                                        }}
                                        transition={{
                                            duration: 0.5,
                                            ease: "easeInOut",
                                            delay: 0.2 * idx,
                                        }}
                                        className="text-neutral-600"
                                    >
                                        {item.title}
                                    </motion.h3>
                                </Step>
                                {item.description && (
                                    <motion.p
                                        initial={{
                                            opacity: 0,
                                            y: -10,
                                        }}
                                        animate={{
                                            opacity: isInView ? 1 : 0,
                                            y: isInView ? 0 : -10,
                                        }}
                                        transition={{
                                            duration: 0.5,
                                            ease: "easeInOut",
                                            delay: 0.3 * idx,
                                        }}
                                        className="pt-1 pl-6 text-sm text-neutral-400"
                                    >
                                        {item.description}
                                    </motion.p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

const Step = ({
    className,
    children,
    isInView,
    idx,
}: {
    className?: string;
    children: React.ReactNode;
    isInView: boolean;
    idx: number;
}) => {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -10,
            }}
            animate={{
                opacity: isInView ? 1 : 0,
                y: isInView ? 0 : -10,
            }}
            transition={{
                duration: 0.3,
                ease: "easeInOut",
                delay: 0.2 * idx
            }}
            className={cn("flex items-center gap-2", className)}
        >
            <IconCircleCheckFilled className="h-4 w-4 text-neutral-500" />
            {children}
        </motion.div>
    );
};
