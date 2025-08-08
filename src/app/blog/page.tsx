import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import { getBlogs } from "@/utils/mdx";
import { Metadata } from "next";
import { Link } from "next-view-transitions";


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
            <Container className="min-h-screen px-8 md:pt-20 md:pb-10">
                <Heading>
                    All blogs
                </Heading>
                <Subheading>
                    I&apos;m a passionate Full Stack Web Developer who transforms ideas
                    into dynamic, user-centric digital experiences. With expertise
                    spanning modern frontend frameworks like React and Next.js to robust
                    backend technologies including Node.js and databases, I craft scalable
                    solutions that bridge the gap between innovative design and powerful
                    functionality.
                </Subheading>
                <div className="flex flex-col gap-8 py-10">
                    {allBlogs.map((blog, idx) => (
                        <Link href={`/blog/${blog.slug}`} key={blog.title}>
                            <div className="flex items-center justify-between">
                                <h2 className="text-primary text-base font-bold tracking-tight">
                                    {blog.title}
                                </h2>
                                <p className="text-secondary text-sm md:text-sm">{new Date(blog.date || "").toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" })}</p>
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
