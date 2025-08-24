"use client";

import Image from "next/image";
import { Container } from "../container";
import { Link } from "next-view-transitions";
import {
    AnimatePresence,
    motion,
    useMotionValueEvent,
    useScroll,
    useTransform,
} from "motion/react";
import { useEffect, useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";

export const Navbar = () => {
    const navItems = [
        { title: "About", href: "/about" },
        { title: "Projects", href: "/projects" },
        { title: "Contact", href: "/contact" },
        { title: "Blog", href: "/blog" },
    ];

    const [menuOpen, setMenuOpen] = useState(false);
    const [hovered, setHovered] = useState<number | null>(null);
    const { scrollY } = useScroll();
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [scrolled, setScrolled] = useState<boolean>(false);

    const y = useTransform(scrollY, [0, 100], [0, 10]);
    const widthBigScreen = useTransform(scrollY, [0, 100], ["56%", "45%"]);
    const widthSmallScreen = useTransform(scrollY, [0, 100], ["90%", "70%"]);
    // const opacity = useTransform(scrollY, [0,100], [1,0.8])
    // const filter = useMotionTemplate`blur(${useTransform(scrollY, [0,100], [0,10] )}px)`

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 20) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    });

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    });

    const width = isSmallScreen ? widthSmallScreen : widthBigScreen;

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
                className="fixed inset-x-0 top-1 z-100 mx-auto flex w-full items-center justify-between rounded-4xl bg-white/60 px-3 py-2 md:max-w-4xl dark:bg-neutral-900"
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

                <div className="hidden sm:flex sm:items-center">
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
                                    layoutId="hovered-span"
                                    className="absolute inset-0 h-full w-full rounded-md bg-neutral-100 dark:bg-neutral-800"
                                />
                            )}
                            <span className="relative z-10 text-black dark:text-white">
                                {item.title}
                            </span>
                        </Link>
                    ))}
                </div>

                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="block sm:hidden"
                >
                    {menuOpen ? <IconX /> : <IconMenu2 />}
                </button>
            </motion.nav>
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        key="overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{duration: 0.2}}
                        className="fixed top-0 left-0 z-[110] h-full w-full bg-black/40 md:hidden"
                        onClick={() => setMenuOpen(false)}
                    >
                        <motion.div
                            key="menu"
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -50, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="absolute top-0 left-0 w-full border-b border-gray-200 bg-white shadow-lg dark:border-neutral-700 dark:bg-neutral-900"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex items-center justify-between px-4 py-3">
                                <Link href="/">
                                    <Image
                                        className="h-10 w-10 rounded-full"
                                        src="/avatar-portfolio.png"
                                        width="100"
                                        height="100"
                                        alt="Avatar"
                                    />
                                </Link>
                                <button onClick={() => setMenuOpen(false)}>
                                    <IconX />
                                </button>
                            </div>
                            <nav 
                            className="flex flex-col">
                                {navItems.map((item, idx) => (
                                    <Link
                                        key={idx}
                                        href={item.href}
                                        className="border-t border-gray-200 px-4 py-4 text-lg text-black hover:bg-gray-100 dark:border-neutral-800 dark:text-white dark:hover:bg-neutral-800"
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        {item.title}
                                    </Link>
                                ))}
                            </nav>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </Container>
    );
};
