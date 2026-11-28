import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Scales } from "@/components/scales";
import { Subheading } from "@/components/subheading";
import { getBlogs } from "@/utils/mdx";
import { Metadata } from "next";
import { Link } from "next-view-transitions";


export const metadata: Metadata = {
    title: "Blog",
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
            <Container className="min-h-screen px-6 md:pt-20 md:pb-10">
                <Scales />
                <Heading>
                    All blogs
                </Heading>
                <Subheading>
                    Notes on what I&apos;m learning and building, mostly about GenAI, agents
                    and web development.
                </Subheading>
                <div className="flex flex-col gap-8 py-10 px-4">
                    {allBlogs.map((blog) => (
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
