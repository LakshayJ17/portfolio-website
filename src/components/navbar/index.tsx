"use client";

import Image from "next/image";
import { Container } from "../container";
import { Link } from "next-view-transitions";
import {
    motion,
    useMotionTemplate,
    useMotionValueEvent,
    useScroll,
    useTransform,
} from "motion/react";
import { useState } from "react";

export const Navbar = () => {
    const navItems = [
        { title: "About", href: "/about" },
        { title: "Projects", href: "/projects" },
        { title: "Contact", href: "/contact" },
        { title: "Blog", href: "/blog" },
    ];

    const [hovered, setHovered] = useState<number | null>(null);
    const { scrollY } = useScroll();

    const [scrolled, setScrolled] = useState<boolean>(false);

    const y = useTransform(scrollY, [0, 100], [0, 10]);
    const width = useTransform(scrollY, [0, 100], ["50%", "40%"]);
    // const opacity = useTransform(scrollY, [0,100], [1,0.8])
    // const filter = useMotionTemplate`blur(${useTransform(scrollY, [0,100], [0,10] )}px)`

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 20) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    });

    return (
        <Container>
            <motion.nav
                style={{
                    boxShadow: scrolled ? "var(--shadow-input)" : "none",
                    width,
                    y,
                    // opacity,
                    // backdropFilter: filter
                }}
                transition={{
                    duration: 0.3,
                    ease: "linear",
                }}
                className="fixed inset-x-0 top-1 z-100 mx-auto flex max-w-4xl items-center justify-between rounded-4xl bg-white px-7 py-2 dark:bg-neutral-900"
            >
                <Link href="/">
                    <Image
                        className="h-10 w-10 rounded-full"
                        src="/avatar-portfolio.png"
                        width="100"
                        height="100"
                        alt="Avatar"
                    />
                </Link>

                <div className="flex items-center">
                    {navItems.map((item, idx) => (
                        <Link
                            className="relative px-2 py-1 text-sm"
                            href={item.href}
                            key={idx}
                            onMouseEnter={() => setHovered(idx)}
                            onMouseLeave={() => setHovered(null)}
                        >
                            {hovered === idx && (
                                <motion.span
                                    layoutId="hovered-span "
                                    className="absolute inset-0 h-full w-full rounded-md bg-neutral-100 dark:bg-neutral-800"
                                />
                            )}
                            <span className="relative z-10 text-black dark:text-white">
                                {item.title}
                            </span>
                        </Link>
                    ))}
                </div>
            </motion.nav>
        </Container>
    );
};
