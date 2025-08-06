"use client"

import React from "react";
import {motion} from "motion/react"

export const SectionHeading = ({ children, delay = 0 }: { children: string ; delay : number;}) => {
    return (
        <h2 className="max-w-lg pt-4 text-sm font-normal md:text-sm">
            {children
            .split(" ")
            .map((word, idx) => (
            <motion.span
            initial={{
                opacity: 0,
                y: -2,
                filter: "blur(10px)"
            }}
            animate={{
                opacity:1,
                y:0,
                filter: "blur(0px)"
            }}
            transition={{
                delay: delay + idx *0.1,
                duration: 0.3,
                ease: 'easeInOut'
            }}
             key={word+idx}
             className="inline-block"
             >
                {word}&nbsp;
             </motion.span>
            ))}
        </h2>
    );
};
