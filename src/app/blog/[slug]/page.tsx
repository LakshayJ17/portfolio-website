import { Container } from "@/components/container";
import { Metadata } from "next";
import { compileMDX, MDXRemote } from "next-mdx-remote/rsc";
import { getSingleBlog } from "@/utils/mdx";

export const metadata: Metadata = {
    title: "All blogs - Lakshay Jain",
    description: "All my general wisdom and thoughts",
};

export default async function SingleBlogPage() {
    const singleBlog = await getSingleBlog("tailwind-basics");

    const { content, frontmatter } = await compileMDX<{ title: string }>({
        source: singleBlog,
        options: { parseFrontmatter: true },
    });

    return (
        <div className="flex min-h-screen items-start justify-start">
            <Container className="min-h-[200vh] px-8 md:pt-20 md:pb-10">
                <div className="prose">
                    <MDXRemote source={singleBlog} />
                </div>
            </Container>
        </div>
    );
}
