"use client";

import Image from "next/image";
import { Container } from "../container";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
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
                animate={{
                    boxShadow: scrolled ? "var(--shadow-input)" : "none",
                    width: scrolled ? "50%" : "100%",
                    y: scrolled ? 10 : 0,
                }}
                transition={{
                    duration: 0.3,
                    ease: "linear",
                }}
                className="fixed inset-x-0 top-1 mx-auto flex max-w-4xl items-center justify-between rounded-4xl px-7 py-2 bg-white dark:bg-neutral-900 z-100"
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
                            <span className="relative z-10 text-black dark:text-white">{item.title}</span>
                        </Link>
                    ))}
                </div>
            </motion.nav>
        </Container>
    );
};
