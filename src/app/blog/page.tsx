import { Container } from "@/components/container";
import { getBlogs } from "@/utils/mdx";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "All blogs - Lakshay Jain",
    description: "All my general wisdom and thoughts",
};

export default async function BlogsPage() {
    const allBlogs = await getBlogs();
    // console.log("all blogs: ", allBlogs);

    const truncate = (str: string, length: number) => {
        return str.length > length ? str.substring(0, length) + "..." : str;
    };

    return (
        <div className="flex min-h-screen items-start justify-start">
            <Container className="min-h-[200vh] px-8 md:pt-20 md:pb-10">
                <h1 className="tracking-light text-primary text-2xl font-bold md:text-4xl">
                    All blogs
                </h1>
                <p className="text-secondary max-w-lg pt-4 text-sm md:text-base">
                    I&apos;m a passionate Full Stack Web Developer who transforms ideas
                    into dynamic, user-centric digital experiences. With expertise
                    spanning modern frontend frameworks like React and Next.js to robust
                    backend technologies including Node.js and databases, I craft scalable
                    solutions that bridge the gap between innovative design and powerful
                    functionality.
                </p>
                <div className="flex flex-col gap-4 py-10">
                    {allBlogs.map((blog, idx) => (
                        <Link href={`/blog/${blog.slug}`} key={idx}>
                            <div className="flex items-center justify-between">
                                <h2 className="text-primary text-base font-bold tracking-tight">
                                    {blog.title}
                                </h2>
                                <p className="text-secondary text-sm md:text-sm">{blog.date}</p>
                            </div>

                            <p className="text-secondary max-w-lg pt-2 text-sm md:text-sm">
                                {truncate(blog.description || "", 150)}
                            </p>
                        </Link>
                    ))}
                </div>
            </Container>
        </div>
    );
}
