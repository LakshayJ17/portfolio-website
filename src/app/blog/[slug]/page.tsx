import { Container } from "@/components/container";
import { Metadata } from "next";
import { getSingleBlog } from "@/utils/mdx";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
    title: "All blogs - Lakshay Jain",
    description: "All my general wisdom and thoughts",
};

export default async function SingleBlogPage({ params }: {
    params: {
        slug: string;
    };
}) {
    const { slug } = await params;
    const blog = await getSingleBlog(slug);

    if (!blog) {
        redirect('/blog')
    }

    const { content, frontmatter } = blog
    console.log(frontmatter);

    return (
        <div className="flex min-h-screen items-start justify-start">
            <Container className="min-h-[200vh] px-8 md:pt-20 md:pb-10">
                <div className="prose mx-auto">
                    {content}
                </div>
            </Container>
        </div>
    );
}
