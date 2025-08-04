"use client";

import React, { useRef } from "react";
import { motion, useInView } from "motion/react";

type Data = {
    title: string;
    content: {
        title: string;
        description?: string | React.ReactNode;
    }[];
};
const Timeline = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.6 });

    const data: Data[] = [
        {
            title: "2025",
            content: [
                {
                    title: "Completed my first freelance project",
                    description:
                        "Built a RAG based chatbot and integrated in the website",
                },
            ],
        },
        {
            title: "2024",
            content: [
                {
                    title: "Completed my first freelance pro",
                    description:
                        "Built a RAG based chatbot and integrated in the website",
                },
            ],
        },
        {
            title: "2023",
            content: [
                {
                    title: "Completed my first freelance proj",
                    description:
                        "Built a RAG based chatbot and integrated in the website",
                },
            ],
        },
        {
            title: "2022",
            content: [
                {
                    title: "Completed my first freelance proje",
                    description:
                        "Built a RAG based chatbot and integrated in the website",
                },
            ],
        },
        {
            title: "2021",
            content: [
                {
                    title: "Completed my first freelance projec",
                    description:
                        "Built a RAG based chatbot and integrated in the website",
                },
            ],
        },
    ];

    return (
        <div ref={ref} className="py-10">
            {data.map((year, index) => (
                <div key={year.title}>
                    <motion.h2
                        animate={{
                            filter: isInView ? "blur(0px)" : "blur(10px)",
                            opacity: isInView ? 1 : 0,
                        }}
                        transition={{
                            duration: 0.3,
                            ease: "easeInOut",
                            delay: 0.1 * index,
                        }}
                        className="font-bold text-black"
                    >
                        {year.title}
                    </motion.h2>
                    <div className="flex flex-col gap-4">
                        {year.content.map((item, idx) => (
                        <div key={item.title} className="pl-4">
                            <motion.h3
                                animate={{
                                    opacity: isInView ? 1 : 0,
                                    y: isInView ? 0 : -10,
                                }}
                                transition={{
                                    duration: 0.3,
                                    ease: "easeInOut",
                                    delay: 0.2 * idx,
                                }}
                                className="text-meutral-800"
                            >
                                {item.title}
                            </motion.h3>
                            {item.description && (
                                <p className="pt-2 text-neutral-600">{item.description}</p>
                            )}
                        </div>
                    ))}
                    </div>
                    
                </div>
            ))}
        </div>
    );
};

export default Timeline;
