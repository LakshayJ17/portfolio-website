import { Container } from "@/components/container";
import { Scales } from "@/components/scales";
import { getBlogFrontMatterBySlug, getSingleBlog } from "@/utils/mdx";
import Image from "next/image";
import { redirect } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const frontmatter = await getBlogFrontMatterBySlug(slug);
  // console.log(frontmatter)
  if (!frontmatter) {
    return {
      title: "Blog not found",
    };
  }

  return {
    title: frontmatter.title + " - Lakshay Jain",
    description: frontmatter.description,
  };
}

export default async function SingleBlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const blog = await getSingleBlog(slug);

  if (!blog) {
    redirect("/blog");
  }

  const { content, frontmatter } = blog;
  //   console.log(frontmatter);

  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-6 md:pt-20 md:pb-10">
        <Scales />
        <Image
          width={500}
          height={100}
          src={frontmatter.image}
          alt={frontmatter.title}
          className="mx-auto mb-10 max-h-96 w-full max-w-2xl rounded-2xl border border-neutral-200 object-cover shadow-xl"
        />
        <div className="flex mx-6 justify-between pb-5 text-secondary">
          <p className="font-bold text-xl">Author : Lakshay Jain</p>
          {new Date(frontmatter.date || "").toLocaleDateString("en-us", {
            weekday: "long",
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </div>
        <div className="prose mx-auto">{content}</div>
      </Container>
    </div>
  );
}
