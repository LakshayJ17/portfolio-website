import { Container } from "@/components/container";
import { getBlogs } from "@/utils/mdx";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "All blogs - Lakshay Jain",
    description: "All my general wisdom and thoughts"
}

export default async function BlogsPage() {
    const allBlogs = await getBlogs()
    console.log("all blogs: ", allBlogs)
    return (
        <div className="min-h-screen flex items-start justify-start">
            <Container className="min-h-[200vh] px-8 md:pt-20 md:pb-10">
                <h1 className="text-2xl md:text-4xl font-bold tracking-light text-primary">
                    All blogs
                </h1>
                <p className="text-sm text-secondary md:text-base pt-4 max-w-lg">
                    I&apos;m a passionate Full Stack Web Developer who transforms ideas
                    into dynamic, user-centric digital experiences. With expertise
                    spanning modern frontend frameworks like React and Next.js to robust
                    backend technologies including Node.js and databases, I craft scalable
                    solutions that bridge the gap between innovative design and powerful
                    functionality.
                </p>
                <div className="flex flex-col gap-10">
                    {allBlogs.map((blog, idx) => (
                        <Link href={`/blog/${blog.slug}`} key={idx}>
                            <h2 className="text-primary text-2xl font-bold tracking-tight md:text-4xl">{blog.title}</h2>
                        </Link>
                    ))}
                </div>
            </Container>
        </div>
    );
}
